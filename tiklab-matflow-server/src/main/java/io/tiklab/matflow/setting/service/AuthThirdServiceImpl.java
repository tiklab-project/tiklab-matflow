package io.tiklab.matflow.setting.service;

import io.tiklab.beans.BeanMapper;
import io.tiklab.eam.common.context.LoginContext;
import io.tiklab.join.JoinTemplate;
import io.tiklab.matflow.setting.dao.AuthThirdDao;
import io.tiklab.matflow.setting.entity.AuthThirdEntity;
import io.tiklab.matflow.setting.model.AuthThird;
import io.tiklab.matflow.task.code.service.TaskCodeThirdServiceImpl;
import io.tiklab.rpc.annotation.Exporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@Exporter
public class AuthThirdServiceImpl implements AuthThirdService {


    @Autowired
    AuthThirdDao authServerDao;

    @Autowired
    JoinTemplate joinTemplate;


    /**
     * 创建流水线授权
     * @param authThird 流水线授权
     * @return 流水线授权id
     */
    public String createAuthServer(AuthThird authThird) {
        String thirdType = authThird.getType();
        boolean b = thirdType.equals("2") || thirdType.equals("3")|| thirdType.equals("gitee")|| thirdType.equals("github");
        if (b){
            TaskCodeThirdServiceImpl thirdService = new TaskCodeThirdServiceImpl();
            AuthThird authServer = thirdService.findUserAuthThird(LoginContext.getLoginId());
            if (!Objects.isNull(authServer)){
                authThird.setUsername(authServer.getUsername());
                authThird.setRefreshToken(authServer.getRefreshToken());
                authThird.setAccessToken(authServer.getAccessToken());
                thirdService.removeUserAuthThird(LoginContext.getLoginId());
            }
        }
        AuthThirdEntity authThirdEntity = BeanMapper.map(authThird, AuthThirdEntity.class);
        return authServerDao.createAuthServer(authThirdEntity);
    }

    /**
     * 删除流水线授权
     * @param authServerId 流水线授权id
     */
    @Override
    public void deleteAuthServer(String authServerId) {
        authServerDao.deleteAuthServer(authServerId);
    }

    /**
     * 更新授权信息
     * @param authThird 信息
     */
    @Override
    public void updateAuthServer(AuthThird authThird) {
        int authPublic = authThird.getAuthPublic();
        String serverId = authThird.getServerId();
        AuthThird oneAuthServer = findOneAuthServer(serverId);
        int aPublic = oneAuthServer.getAuthPublic();
        if (authPublic == 1 && aPublic == 2){
            authThird.setPrivateKey("");
        }
        if (aPublic == 2 && authPublic == 1){
            authThird.setUsername("");
            authThird.setPassword("");
        }
        AuthThirdEntity authServerEntity = BeanMapper.map(authThird, AuthThirdEntity.class);
        authServerDao.updateAuthServer(authServerEntity);
    }

    /**
     * 查询授权信息
     * @param authServerId id
     * @return 信息集合
     */
    @Override
    public AuthThird findOneAuthServer(String authServerId) {
        AuthThirdEntity oneAuthServer = authServerDao.findOneAuthServer(authServerId);
        AuthThird authThird = BeanMapper.map(oneAuthServer, AuthThird.class);
        joinTemplate.joinQuery(authThird);
        return authThird;
    }

    /**
     * 获取不同授权类型的源码认证
     * @param type 类型  1. gitee 2. GitHub 3.sonar 4.nexus
     * @return 认证信息
     */
    public List<AuthThird> findAllAuthServerList(String type) {
        List<AuthThird> allAuthServer = findAllAuthServer();
        if (allAuthServer == null){
            return null;
        }

        List<AuthThird> list = new ArrayList<>();

        if (Objects.isNull(type) || type.equals("all")){

            for (AuthThird authThird : allAuthServer) {
                String oneType = findOneType(authThird.getType());
                authThird.setType(oneType);
                list.add(authThird);
            }
            return list;
        }

        for (AuthThird authServer : allAuthServer) {

            String type1 = authServer.getType();

            boolean type2 = findType(type, type1);
            if (!type2 ){
                continue;
            }
            authServer.setType(type);
            list.add(authServer);
        }
        return list;
    }

    private String findOneType(String type){
        switch (type){
            case "2"  ->{
                return "gitee";
            }
            case "3"  ->{
                return "github";
            }
            case "41"  ->{
                return "sonar";
            }
            case "51"  ->{
                return "nexus";
            }
            default -> {
                return type;
            }
        }
    }


    private boolean findType(String type,String taskType){
        switch (type){
            case "gitee"  ->{
                if (taskType.equals("2")|| taskType.equals("gitee")){
                    return true;
                }
            }
            case "github"  ->{
                if (taskType.equals("3")|| taskType.equals("github")){
                    return true;
                }
            }
            case "sonar"  ->{
                if (taskType.equals("41")|| taskType.equals("sonar")){
                    return true;
                }
            }
            case "nexus"  ->{
                if (taskType.equals("51")|| taskType.equals("nexus")){
                    return true;
                }
            }
            case "xcode" ,"teston" ,"xpack" ->{
                if (taskType.equals(type)){
                    return true;
                }
            }
            default -> {
                return false;
            }

        }
        return false;
    }

    /**
     * 查询所有流水线授权
     * @return 流水线授权列表
     */
    @Override
    public List<AuthThird> findAllAuthServer() {
        List<AuthThirdEntity> allAuthServer = authServerDao.findAllAuthServer();
        if (allAuthServer == null){
            return null;
        }
        //获取公共的和用户私有的
        List<AuthThirdEntity> allAuthServerEntity = new ArrayList<>();
        String loginId = LoginContext.getLoginId();
        for (AuthThirdEntity thirdEntity : allAuthServer) {
            if (thirdEntity.getUserId().equals(loginId) || thirdEntity.getAuthPublic() == 1){
                allAuthServerEntity.add(thirdEntity);
            }
        }
        List<AuthThird> authThirds = BeanMapper.mapList(allAuthServerEntity, AuthThird.class);
        joinTemplate.joinQuery(authThirds);
        return authThirds;
    }

    @Override
    public List<AuthThird> findAllAuthServerList(List<String> idList) {
        List<AuthThirdEntity> allAuthServerList = authServerDao.findAllAuthServerList(idList);
        return  BeanMapper.mapList(allAuthServerList, AuthThird.class);
    }


}
