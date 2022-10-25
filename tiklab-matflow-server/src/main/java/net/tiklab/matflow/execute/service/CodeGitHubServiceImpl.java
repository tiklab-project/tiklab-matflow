package net.tiklab.matflow.execute.service;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import net.tiklab.core.exception.ApplicationException;
import net.tiklab.matflow.execute.model.CodeGitHubApi;
import net.tiklab.matflow.setting.model.Proof;
import net.tiklab.matflow.setting.service.ProofService;
import net.tiklab.rpc.annotation.Exporter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
@Exporter
public class CodeGitHubServiceImpl implements CodeGitHubService {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    ProofService proofService;

    @Autowired
    CodeGitHubApi codeGitHubApi;

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
        String accessTokenUrl = codeGitHubApi.getAccessToken();
        MultiValueMap<String, Object> paramMap = new LinkedMultiValueMap<>();
        paramMap.add("client_id",codeGitHubApi.getClientId());
        paramMap.add("client_secret",codeGitHubApi.getClientSecret());
        paramMap.add("callback_url",codeGitHubApi.getCallbackUri());
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
        if (proof == null){
            return null;
        }
        List<String> list = new ArrayList<>();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/vnd.github.v3+json");
        //headers.setContentType(MediaType.parseMediaType("application/json; charset=UTF-8"));
        headers.set("Authorization", "token"+" "+proof.getProofPassword());
        String userUrl = codeGitHubApi.getAllStorehouse();
        MultiValueMap<String, Object> paramMap = new LinkedMultiValueMap<>();
        //paramMap.add("visibility","public");
        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(paramMap, headers);
        ResponseEntity<String> forEntity = restTemplate.exchange(userUrl, HttpMethod.GET, entity, String.class);
        String body = forEntity.getBody();
        logger.info("仓库信息 ："+body);
        if (body == null){
            return null;
        }
        JSONArray allStorehouseJson = JSONArray.parseArray(body);
        for (int i = 0; i < allStorehouseJson.size(); i++) {
            JSONObject storehouse=allStorehouseJson.getJSONObject(i);
            list.add(storehouse.getString("full_name"));
        }
        return list;
    }

    @Override
    public List<String> getBranch(String proofId,String projectName){
        Proof proof = proofService.findOneProof(proofId);
        if (proof == null){
            return  null;
        }
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
        if (body == null){
            return  null;
        }
        JSONArray allBranch = JSONArray.parseArray(body);
        for (int i = 0; i < allBranch.size(); i++) {
            JSONObject branch = allBranch.getJSONObject(i);
            list.add(branch.getString("name"));
        }
        return list;
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
        if (body == null){
            return null;
        }
        return body.getString("login");

    }

    @Override
    public String getProof(Proof proof){
        String userName = getUserMessage(proof.getProofPassword());
        Proof proofs = proofService.findAllAuthProof(3, userName);

        proof.setProofUsername(userName);
        if (proofs == null){
            proof.setProofCreateTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
            return proofService.createProof(proof);
        }
        proof.setProofId(proofs.getProofId());
        proofService.updateProof(proof);
        return proof.getProofId();
    }

    @Override
    public String getOneHouse( Proof proof,String houseName){
        Proof oneProof = proofService.findOneProof(proof.getProofId());
        String[] split = houseName.split("/");
        if (split.length != 2){
            return null;
        }
        String name = split[1];
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/vnd.github+json");
        headers.set("Authorization", "token"+" "+proof.getProofPassword());
        MultiValueMap<String, Object> paramMap = new LinkedMultiValueMap<>();
        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(paramMap, headers);
        //获取仓库URl
        String oneStorehouse = codeGitHubApi.getOneHouse(oneProof.getProofUsername(),name);
        ResponseEntity<String> response = restTemplate.exchange(oneStorehouse, HttpMethod.GET, entity, String.class);
        if (response.getStatusCodeValue() != 200){
            throw new ApplicationException(50001, "仓库"+houseName+"信息获取失败。");
        }
        JSONObject jsonObject = JSONObject.parseObject(response.getBody());
        return jsonObject.getString("html_url");
    }

}































