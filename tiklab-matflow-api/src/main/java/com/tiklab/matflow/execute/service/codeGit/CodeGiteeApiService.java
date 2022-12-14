package com.tiklab.matflow.execute.service.codeGit;


import com.tiklab.join.annotation.JoinProvider;
import com.tiklab.matflow.execute.model.CodeGit.CodeGiteeApi;
import com.tiklab.matflow.setting.proof.model.Proof;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * 码云API
 */
@JoinProvider(model = CodeGiteeApi.class)
public interface CodeGiteeApiService {

    /**
     * 获取code
     * @return 获取code的Url
     */
    String getCode(String callbackUri);

    /**
     * 根据code获取AccessToken
     * @param code code
     * @return AccessToken
     */
    Map<String, String> getAccessToken(String code,String callbackUri)  throws IOException ;

    /**
     * 获取用户所有仓库
     * @param ProofId 凭证
     * @return 厂库信息
     */
    List<String> getAllStorehouse(String ProofId);

    /**
     * 获取用户登录信息
     * @param accessToken 凭证
     * @return 用户信息
     */
    String getUserMessage(String accessToken);

    /**
     * 创建凭证
     * @param proof 凭证
     * @return 凭证ID
     */
    String getProof(Proof proof);

    /**
     * 获取仓库所有分支
     * @param proofId 凭证ID
     * @param projectName 仓库名
     * @return 所有分支
     */
    List<String> getBranch(String proofId,String projectName);

    /**
     * 获取仓库克隆地址
     * @param proof 凭证ID
     * @param projectName 仓库名称
     * @return 克隆地址
     */
    String getCloneUrl(Proof proof, String projectName);


    /**
     * 获取授权状态
     * @param code 授权凭证
     * @param state 状态
     * @return 0.未授权 1.成功授权 2.取消授权
     */
    int getState(String code,int state);
}
