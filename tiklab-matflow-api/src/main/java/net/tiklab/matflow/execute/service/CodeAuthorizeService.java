package net.tiklab.matflow.execute.service;


import java.io.IOException;
import java.util.List;

/**
 * 码云API
 */
public interface CodeAuthorizeService {

    /**
     * 获取code
     * @return 获取code的Url
     */
    String findCode(int type);

    /**
     * 根据code获取AccessToken
     * @param code code
     */
    String findAccessToken(String code,int type)  throws IOException ;
    /**
     * 获取用户所有仓库
     * @param authId 凭证
     * @return 厂库信息
     */
    List<String> findAllStorehouse(String authId,int type);


    /**
     * 获取仓库所有分支
     * @param authId 凭证ID
     * @param houseName 仓库名
     * @return 所有分支
     */
    List<String> findBranch(String authId,String houseName,int type);

    /**
     * 获取仓库克隆地址
     * @param proofId 凭证ID
     * @param houseName 仓库名称
     * @return 克隆地址
     */
    String getHouseUrl(String proofId,String houseName,int type);

    /**
     * 获取授权状态
     * @return 0.未授权 1.成功授权 2.取消授权
     */
    int findState();



}

















