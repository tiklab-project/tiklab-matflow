package net.tiklab.matflow.execute.service;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import net.tiklab.core.exception.ApplicationException;
import net.tiklab.matflow.execute.model.CodeAuthorizeApi;
import net.tiklab.matflow.orther.service.PipelineUntil;
import net.tiklab.matflow.setting.model.PipelineAuthThird;
import net.tiklab.matflow.setting.service.PipelineAuthThirdServer;
import net.tiklab.rpc.annotation.Exporter;
import net.tiklab.utils.context.LoginContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.*;


@Service
@Exporter
@EnableScheduling
public class CodeAuthorizeServiceImpl implements CodeAuthorizeService {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    CodeAuthorizeApi codeAuthorizeApi;

    @Autowired
    PipelineAuthThirdServer serverServer;

    public static Map<String, PipelineAuthThird> userMap = new HashMap<>();

    private static final Logger logger = LoggerFactory.getLogger(CodeAuthorizeServiceImpl.class);

    //获取code
    public String findCode(PipelineAuthThird authThird){
        String callbackUrl = authThird.getCallbackUrl().trim();
        String encode = URLEncoder.encode(callbackUrl(callbackUrl), StandardCharsets.UTF_8);
        authThird.setCallbackUrl(encode);
        return codeAuthorizeApi.getCode(authThird);
    }

    //获取accessToken
    @Override
    public String findAccessToken(PipelineAuthThird authThird) throws IOException {
        String loginId = LoginContext.getLoginId();
        int type = authThird.getType();
        if (!PipelineUntil.isNoNull(authThird.getCode())){
            throw new ApplicationException("code不能为空。");
        }
        String callbackUrl = authThird.getCallbackUrl();
        String encode = URLEncoder.encode(callbackUrl(callbackUrl), StandardCharsets.UTF_8);
        authThird.setCallbackUrl(encode);

        String accessTokenUrl = codeAuthorizeApi.getAccessToken(authThird);
        Map<String, String> map;
        switch (type) {
            case 2 -> map = giteeAccessToken(accessTokenUrl);
            case 3 -> map = gitHubAccessToken(authThird,accessTokenUrl);
            default -> { return null; }
        }

        String accessToken = map.get("accessToken");

        if (accessToken == null){
            throw new ApplicationException(50001,"授权失败，accessToken为空。");
        }

        logger.info("授权成功："+accessToken + " time: "+ PipelineUntil.date());

        authThird.setAccessToken(accessToken);
        authThird.setRefreshToken(map.get("refreshToken"));
        String username = findMessage(accessToken, type);
        authThird.setUsername(username);
        authThird.setAuthType(2);
        userMap.put(loginId, authThird);
        if (map.get("state") != null && map.get("state").equals("0")){
            return null;
        }
        if (type == 2){
            username = username+"的gitee的授权";
        }
        if (type == 3){
            username = username+"的github的授权";
        }
        return username;
    }

    private Map<String, String> giteeAccessToken(String accessTokenUrl) throws IOException {
        String post = request(accessTokenUrl);
        Map<String, String> map = new HashMap<>();
        JSONObject jsonObject = JSON.parseObject(post);
        map.put("accessToken", jsonObject.getString("access_token"));
        map.put("refreshToken", jsonObject.getString("refresh_token"));
        return map;
    }

    private Map<String, String> gitHubAccessToken(PipelineAuthThird authThird,String accessTokenUrl){
        Map<String, String> map = new HashMap<>();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        MultiValueMap<String, Object> paramMap = new LinkedMultiValueMap<>();
        paramMap.add("client_id", authThird.getClientId().trim());
        paramMap.add("client_secret", authThird.getClientSecret().trim());
        paramMap.add("callback_url", authThird.getCallbackUrl().trim());
        paramMap.add("code",authThird.getCode());
        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(paramMap, headers);
        ResponseEntity<JSONObject> response ;
        try {
             response = restTemplate.exchange(accessTokenUrl, HttpMethod.POST, entity, JSONObject.class);
        }catch (ResourceAccessException  e){
            map.put("status","0") ;
            return map;
        }

        JSONObject body = response.getBody();
        if (body != null){
            map.put("accessToken",body.getString("access_token")) ;
        }
        return map;
    }

    //列出授权用户的所有仓库
    @Override
    public List<String> findAllStorehouse(String authId,int type) {
        PipelineAuthThird authCode = serverServer.findOneAuthServer(authId);
        if (authCode == null){
            return null;
        }
        String accessToken = authCode.getAccessToken();
        String allStorehouseAddress = codeAuthorizeApi.getAllStorehouse(accessToken,type);
        return switch (type) {
            case 2 -> giteeAllStorehouse( allStorehouseAddress);
            case 3 -> gitHubAllStorehouse(accessToken, allStorehouseAddress);
            default -> null;
        };
    }

    private List<String> giteeAllStorehouse(String allStorehouseAddress) {
        List<String> storehouseList = new ArrayList<>();

        //消息转换器列表
        List<HttpMessageConverter<?>> messageConverters = restTemplate.getMessageConverters();
        //配置消息转换器StringHttpMessageConverter，并设置utf-8
        messageConverters.set(1, new StringHttpMessageConverter(StandardCharsets.UTF_8));

        ResponseEntity<String> returnBody = restTemplate.getForEntity(allStorehouseAddress, String.class, JSONObject.class);

        HttpStatus statusCode = returnBody.getStatusCode();
        if (statusCode.isError()){
            return Collections.emptyList();
        }

        String body = returnBody.getBody();
        if (body == null){
            return Collections.emptyList();
        }

        JSONArray allStorehouseJson = JSON.parseArray(body);
        for (int i = 0; i < allStorehouseJson.size(); i++) {
            JSONObject storehouse=allStorehouseJson.getJSONObject(i);
            storehouseList.add(storehouse.getString("full_name"));
        }
        return storehouseList;
    }

    private  List<String> gitHubAllStorehouse( String accessToken, String allStorehouseAddress){

        List<String> list = new ArrayList<>();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/vnd.github.v3+json");
        headers.set("Authorization", "token"+" "+accessToken);

        MultiValueMap<String, Object> paramMap = new LinkedMultiValueMap<>();
        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(paramMap, headers);
        ResponseEntity<String> forEntity = restTemplate.exchange(allStorehouseAddress, HttpMethod.GET, entity, String.class);
        String body = forEntity.getBody();
        if (body == null){
            return Collections.emptyList();
        }
        JSONArray allStorehouseJson = JSON.parseArray(body);
        for (int i = 0; i < allStorehouseJson.size(); i++) {
            JSONObject storehouse=allStorehouseJson.getJSONObject(i);
            list.add(storehouse.getString("full_name"));
        }
        return list;
    }

    //获取分支信息
    @Override
    public List<String> findBranch(String authId,String houseName,int type) {
        PipelineAuthThird authCode = serverServer.findOneAuthServer(authId);
        if (authCode == null){
            return null;
        }
        String accessToken = authCode.getAccessToken();
        if (!PipelineUntil.isNoNull(houseName) ){
            throw new ApplicationException(5000,"仓库名称为空。");
        }

        String house = houseName.split("/")[1];
        String name = houseName.split("/")[0];
        String url = codeAuthorizeApi.getBranch(name,house,accessToken,type);
        return switch (type) {
            case 2 -> giteeBranch(url);
            case 3 -> gitHubBranch(accessToken, url);
            default -> null;
        };

    }

    private List<String> giteeBranch(String url) {
        ArrayList<String> branchList = new ArrayList<>();
        ResponseEntity<String> forEntity = restTemplate.getForEntity(url, String.class, JSONObject.class);
        HttpStatus statusCode = forEntity.getStatusCode();
        if (statusCode.isError()){
            return Collections.emptyList();
        }
        JSONArray branchS = JSON.parseArray(forEntity.getBody());
        if (branchS != null) {
            for (int i = 0; i < branchS.size(); i++) {
                JSONObject jsonArray = branchS.getJSONObject(i);
                branchList.add(jsonArray.getString("name"));
            }
        }
        return branchList;

    }

    private List<String> gitHubBranch(String accessToken,String url){
        List<String> list = new ArrayList<>();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/vnd.github.v3+json");
        headers.set("Authorization", "token"+" "+ accessToken);
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        ResponseEntity<String> forEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        String body = forEntity.getBody();
        if (body == null){
            return Collections.emptyList();
        }
        JSONArray allBranch = JSON.parseArray(body);
        for (int i = 0; i < allBranch.size(); i++) {
            JSONObject branch = allBranch.getJSONObject(i);
            list.add(branch.getString("name"));
        }
        return list;
    }

    //获取仓库的url
    @Override
    public String getHouseUrl(String authCodeId,String houseName,int type){
        PipelineAuthThird authCode = serverServer.findOneAuthServer(authCodeId);
        String accessToken = authCode.getAccessToken();

        if (houseName == null){
            return null;
        }
        String house = houseName.split("/")[1];
        String name = houseName.split("/")[0];

        //获取仓库URl
        String oneStorehouse = codeAuthorizeApi.getOneHouse(name,house,accessToken,type);
        return switch (type) {
            case 2 -> giteeHouseUrl(oneStorehouse);
            case 3 -> gitHubHouseUrl(accessToken, oneStorehouse);
            default -> null;
        };
    }

    private String giteeHouseUrl( String oneStorehouse){
        ResponseEntity<String> forEntity1 = restTemplate.getForEntity(oneStorehouse, String.class, JSONObject.class);
        JSONObject jsonObject = JSON.parseObject(forEntity1.getBody());
        return jsonObject.getString("html_url");

    }

    private String gitHubHouseUrl(String accessToken, String oneStorehouse){
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/vnd.github+json");
        headers.set("Authorization", "token"+" "+ accessToken);
        MultiValueMap<String, Object> paramMap = new LinkedMultiValueMap<>();
        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(paramMap, headers);
        //获取仓库URl
        ResponseEntity<String> response = restTemplate.exchange(oneStorehouse, HttpMethod.GET, entity, String.class);
        JSONObject jsonObject = JSON.parseObject(response.getBody());
        return jsonObject.getString("html_url");
    }

    //获取授权账户名
    public String findMessage(String accessToken,int authType){
        if (accessToken == null ){
            return null;
        }
        String userMessage = codeAuthorizeApi.getUser(accessToken,authType);
        String username = null;
        if (authType == 2){
            username = giteeMessage(userMessage);
        }
        if (authType == 3){
            username =  gitHubUserMessage(accessToken,userMessage);
        }
        return username;
    }

    //获取登录信息
    private String giteeMessage(String messageUrl){
        ResponseEntity<JSONObject> jsonObject = restTemplate.getForEntity(messageUrl, JSONObject.class, String.class);
        JSONObject body = jsonObject.getBody();
        if (body == null) {
            return null;
        }
        return body.getString("login");
    }

    private String gitHubUserMessage(String accessToken,String messageUrl){
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.set("Authorization", "token"+" "+accessToken);
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
        ResponseEntity<JSONObject> response = restTemplate.exchange(messageUrl, HttpMethod.GET, entity, JSONObject.class);
        JSONObject body = response.getBody();
        if (body == null){
            return null;
        }
        return body.getString("login");

    }

    /**
     * 访问url
     * @param url 访问地址
     * @return 访问结果
     * @throws IOException 转换异常
     */
    private String request(String url) throws IOException {
        URL serverUrl = new URL(url);
        HttpURLConnection conn = (HttpURLConnection) serverUrl.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-type", "application/json");
        //必须设置false，否则会自动redirect到重定向后的地址
        conn.setInstanceFollowRedirects(false);
        conn.connect();

        StringBuilder result = new StringBuilder();
        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8));
        String line;
        while ((line = in.readLine()) != null) {
            result.append(line);
        }
        in.close();
        return result.toString();
    }

    /**
     * 更新授权
     */
    @Scheduled(cron = "59 59 23 * * ?")
    public void updateAuthorization() {
        logger.info("定时任务");
        List<PipelineAuthThird> allAuthCode = serverServer.findAllAuthServerList(2);
        if (allAuthCode == null){
            return;
        }
        for (PipelineAuthThird authCode : allAuthCode) {
            boolean token = PipelineUntil.isNoNull(authCode.getAccessToken());
            boolean refresh = PipelineUntil.isNoNull(authCode.getRefreshToken());
            if (!token || !refresh) return;
            logger.info("gitee定时任务，时间:"+PipelineUntil.date()+"更新授权信息");
            String refreshToken = codeAuthorizeApi.findRefreshToken(authCode.getRefreshToken());
            ResponseEntity<JSONObject> forEntity = restTemplate.postForEntity(refreshToken,String.class, JSONObject.class);
            JSONObject body = forEntity.getBody();
            if (body== null){
                return;
            }
            authCode.setRefreshToken(body.getString("access_token"));
            authCode.setRefreshToken(body.getString("refresh_token"));
            serverServer.updateAuthServer(authCode);
        }

    }


    /**
     * 回去转码后的回调地址
     * @param callbackUrl 回调地址
     * @return 转码后的回调地址
     */
    public String callbackUrl(String callbackUrl){
        boolean b = PipelineUntil.validURL(callbackUrl);
        if (!b){
            return null;
        }
        String authority;
        String scheme;
        try {
            URL url = new URL(callbackUrl);
            authority = url.getAuthority();
            scheme = url.toURI().getScheme();
        } catch (MalformedURLException | URISyntaxException e) {
            return null;
        }
        callbackUrl =scheme+"://"+authority+"/#/index/authorize";
        return callbackUrl;
    }




}





























