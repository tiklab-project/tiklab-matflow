package net.tiklab.matflow.pipeline.definition.service;


import net.tiklab.core.page.Pagination;
import net.tiklab.join.annotation.FindAll;
import net.tiklab.join.annotation.FindList;
import net.tiklab.join.annotation.FindOne;
import net.tiklab.join.annotation.JoinProvider;
import net.tiklab.matflow.pipeline.definition.model.Pipeline;
import net.tiklab.matflow.pipeline.definition.model.PipelineMessageList;
import net.tiklab.matflow.pipeline.instance.model.PipelineAllInstanceQuery;
import net.tiklab.matflow.pipeline.instance.model.PipelineInstance;
import net.tiklab.matflow.pipeline.instance.model.PipelineOpen;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * 流水线
 */
@JoinProvider(model = Pipeline.class)
public interface PipelineService {

    /**
     * 创建流水线
     * @param pipeline 流水线信息
     * @return 流水线id
     */
    String createPipeline(@NotNull @Valid Pipeline pipeline);

    /**
     * 删除流水线
     * @param pipelineId 流水线id
     */
    void deletePipeline(@NotNull String pipelineId);

    /**
     * 更新流水线
     * @param pipeline 更新后流水线信息
     */
    void updatePipeline(@NotNull @Valid Pipeline pipeline);

    /**
     * 查询单个流水线
     * @param pipelineId 流水线id
     * @return 流水线信息
     */
    @FindOne
    Pipeline findOnePipeline(@NotNull String pipelineId);

    /**
     * 查询所有流水线
     * @return 流水线列表
     */
    @FindAll
    List<Pipeline> findAllPipeline();

    @FindList
    List<Pipeline> findAllPipelineList(List<String> idList);

    /**
     * 获取用户拥有的流水线id
     * @param userId 用户id
     * @return 流水线id
     */
    StringBuilder findUserPipelineId(String userId);

    /**
     * 获取用户流水线状态
     * @param userId 用户id
     * @return 流水线信息
     */
    List<Pipeline> findUserPipeline(String userId);

    /**
     * 获取流水线信息
     * @param userId 用户Id
     * @return 流水线信息
     */
    List<PipelineMessageList> findUserPipelineExecMessage(String userId);

    /**
     * 获取用户收藏的流水线
     * @param userId 用户id
     * @return 流水线信息
     */
    List<PipelineMessageList> findUserFollowPipeline(String userId);

    /**
     * 模糊查询流水线
     * @param pipelineName 流水线名称
     * @param userId 用户id
     * @return 流水线
     */
    List<PipelineMessageList> findLikePipeline(String pipelineName, String userId);


    /**
     * 查询最近打开的流水线
     *
     * @return 流水线
     */
    List<PipelineOpen> findAllOpen(int number);



    /**
     * 查询用户所有流水线历史
     * @return 历史
     */
    Pagination<PipelineInstance> findUserAllHistory(PipelineAllInstanceQuery pipelineHistoryQuery);



}
