package net.tiklab.matflow.definition.service;

import net.tiklab.matflow.definition.model.Pipeline;
import net.tiklab.matflow.definition.model.PipelineMassage;
import net.tiklab.matflow.execute.model.PipelineExecState;
import net.tiklab.user.user.model.DmUser;

import java.util.List;

public interface PipelineCommonServer {

    /**
     * 删除关联信息
     * @param pipeline 流水线
     */
    void deleteHistory(Pipeline pipeline);

    /**
     * 流水线更改名称时更新源文件名称
     * @param newName 新的名称
     * @param lastName 旧的名称
     */
    void updatePipeline(String newName, String lastName);

    /**
     * 获取流水线状态
     * @param allPipeline 流水线
     * @return 流水线状态
     */
    List<PipelineMassage> findAllStatus(List<Pipeline> allPipeline);


    /**
     * 获取用户名下的流水线
     * @param userId 用户id
     * @return 所有流水线id
     */
    StringBuilder findUserPipelineId(String userId, List<Pipeline> userPipeline);

    /**
     * 获取拥有此流水线的用户
     * @param pipelineId 流水线id
     * @return 用户信息
     */
    List<DmUser> findPipelineUser(String pipelineId);


    /**
     * 创建流水线关联角色信息
     * @param pipelineId 流水线id
     */
    void createDmRole(String pipelineId);


    /**
     * 创建流水线关联角色信息
     * @param pipelineId 流水线id
     */
    void createDmUser(String pipelineId);


    /**
     * 删除关联用户
     * @param pipelineId 流水线id
     */
    void deleteDmUser(String pipelineId);


    /**
     * 删除关联角色
     * @param pipelineId 流水线id
     */
    void deleteDmRole(String pipelineId);

    /**
     * 流水线执行信息统计
     * @param pipelineId 流水线id
     * @return 统计信息
     */
    PipelineExecState pipelineCensus(String pipelineId);





}
