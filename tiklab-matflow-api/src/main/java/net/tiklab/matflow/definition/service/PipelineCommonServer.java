package net.tiklab.matflow.definition.service;

import net.tiklab.matflow.definition.model.Pipeline;
import net.tiklab.matflow.definition.model.PipelineMassage;
import net.tiklab.matflow.execute.model.PipelineExecHistory;
import net.tiklab.user.user.model.DmUser;

import java.util.List;

public interface PipelineCommonServer {

    /**
     * 删除关联信息
     * @param pipeline 流水线
     */
    void delete(Pipeline pipeline);

    /**
     * 流水线更改名称时更新源文件名称
     * @param newName 新的名称
     * @param lastName 旧的名称
     * @return 更新状态
     */
    int updatePipeline(String newName, String lastName);

    /**
     * 获取流水线状态
     * @param allPipeline 流水线
     * @return 流水线状态
     */
    List<PipelineMassage> findAllStatus(List<Pipeline> allPipeline);


    /**
     * 获取近七天的运行状态
     * @param userId 用户id
     * @return 历史
     */
    List<PipelineExecHistory> findRecentStatus(String userId, StringBuilder s);

    /**
     * 获取用户名下的流水线
     * @param userId 用户id
     * @return 所有流水线id
     */
    StringBuilder findUserPipelineId(String userId, List<DmUser> allDmUser, List<Pipeline> userPipeline);

}