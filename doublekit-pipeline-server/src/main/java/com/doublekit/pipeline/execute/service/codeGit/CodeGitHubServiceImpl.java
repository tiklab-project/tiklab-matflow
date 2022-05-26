package com.doublekit.pipeline.execute.service.codeGit;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.doublekit.pipeline.execute.model.CodeGit.CodeGitHubApi;
import com.doublekit.pipeline.setting.proof.model.Proof;
import com.doublekit.pipeline.setting.proof.service.ProofService;
import com.doublekit.rpc.annotation.Exporter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
@Exporter
public class CodeGitHubServiceImpl implements CodeGitHubService {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    ProofService proofService;

    CodeGitHubApi codeGitHubApi = new CodeGitHubApi();

    private static final Logger logger = LoggerFactory.getLogger(CodeGiteeApiServiceImpl.class);

    @Override
    public String getCode(){
        return codeGitHubApi.getCode();
    }

    @Override
    public String getAccessToken(String code){
        if (code == null){
            return null;
        }
        logger.info("code : "+code);
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        String accessTokenUrl = codeGitHubApi.getAccessToken(code);
        MultiValueMap<String, Object> paramMap = new LinkedMultiValueMap<>();
        paramMap.add("client_id",codeGitHubApi.getClient_ID());
        paramMap.add("client_secret",codeGitHubApi.getClient_Secret());
        paramMap.add("code",code);
        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(paramMap, headers);
        ResponseEntity<JSONObject> response = restTemplate.exchange(accessTokenUrl, HttpMethod.POST, entity, JSONObject.class);
        JSONObject body = response.getBody();
        if (body != null){
            logger.info("accessToken : "+body.getString("access_token"));
            return body.getString("access_token");
        }
        return null;

    }

    @Override
    public  List<String> getAllStorehouse(String proofId){
        Proof proof = proofService.findOneProof(proofId);
        if (proof!=null){
            List<String> list = new ArrayList<>();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Accept", "application/vnd.github.v3+json");
            //headers.setContentType(MediaType.parseMediaType("application/json; charset=UTF-8"));
            headers.set("Authorization", "token"+" "+proof.getProofPassword());
            String userUrl = codeGitHubApi.getAllStorehouse();
            HttpEntity<String> entity = new HttpEntity<>("body", headers);
            ResponseEntity<String> forEntity = restTemplate.exchange(userUrl, HttpMethod.GET, entity, String.class);
            String body = forEntity.getBody();
            logger.info("仓库信息 ："+body);
            if (body != null){
                JSONArray allStorehouseJson = JSONArray.parseArray(body);
                for (int i = 0; i < allStorehouseJson.size(); i++) {
                    JSONObject storehouse=allStorehouseJson.getJSONObject(i);
                    list.add(storehouse.getString("full_name"));

                }
            }
            return list;
        }
      return null;
    }

    @Override
    public List<String> getBranch(String proofId,String projectName){
        Proof proof = proofService.findOneProof(proofId);
        if (proof!=null){
            List<String> list = new ArrayList<>();
            String[] split = projectName.split("/");
            String branchUrl = codeGitHubApi.getBranch(proof.getProofUsername(), split[1]);
            HttpHeaders headers = new HttpHeaders();
            headers.set("Accept", "application/vnd.github.v3+json");
            headers.set("Authorization", "token"+" "+proof.getProofPassword());
            HttpEntity<String> entity = new HttpEntity<>("body", headers);
            ResponseEntity<String> forEntity = restTemplate.exchange(branchUrl, HttpMethod.GET, entity, String.class);
            String body = forEntity.getBody();
            logger.info("分支信息 ："+body);
            if (body != null){
                JSONArray allBranch = JSONArray.parseArray(body);
                for (int i = 0; i < allBranch.size(); i++) {
                    JSONObject branch = allBranch.getJSONObject(i);
                    list.add(branch.getString("name"));
                }
                return list;
            }
        }
        return  null;
    }

    @Override
    public String getUserMessage(String accessToken){
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.set("Authorization", "token"+" "+accessToken);
        String userUrl = codeGitHubApi.getUser();
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        ResponseEntity<JSONObject> response = restTemplate.exchange(userUrl, HttpMethod.GET, entity, JSONObject.class);
        JSONObject body = response.getBody();
        if (body != null){
            logger.info("数据为 ： "+body.getString("login"));
            return body.getString("login");
        }
        return null;
    }

    @Override
    public String getProof(String proofName,String accessToken){
        Proof proof = new Proof();
        if (accessToken != null && proofName != null){
            proof.setProofName(proofName);
            proof.setProofPassword(accessToken);
            proof.setProofUsername(getUserMessage(accessToken));
            proof.setProofType("gitHub");
            proof.setProofScope(3);
            proof.setProofDescribe("gitHub授权登录");
            return proofService.createProof(proof);
        }

        return null;
    }

    @Override
    public String getOneHouse(String proofId,String houseName){
        Proof proof = proofService.findOneProof(proofId);
        if (proof == null){
            return null;
        }
        String[] split = houseName.split("/");
        if (split.length == 2){
            String name = split[1];
            //获取仓库URl
            String oneStorehouse = codeGitHubApi.getOneHouse(proof.getProofUsername(),name);
            ResponseEntity<String> forEntity1 = restTemplate.getForEntity(oneStorehouse, String.class, JSONObject.class);
            JSONObject jsonObject = JSONObject.parseObject(forEntity1.getBody());
            return jsonObject.getString("html_url");
        }
        return null;
    }

}
