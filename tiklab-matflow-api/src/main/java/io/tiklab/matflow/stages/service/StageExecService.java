package io.tiklab.matflow.stages.service;

import io.tiklab.matflow.pipeline.definition.model.Pipeline;

/**
 * 阶段执行服务接口
 */
public interface StageExecService {


    /**
     * 创建阶段运行实例
     * @param pipelineId 流水线id
     * @param instanceId 流水线实例id
     */
    void createStageExecInstance(String pipelineId , String instanceId);


    /**
     * 运行流水线阶段
     * @param pipeline 流水线
     * @param instanceId 流水线实例
     * @return 阶段运行状态
     */
    boolean execStageTask(Pipeline pipeline , String instanceId);


    /**
     * 停止阶段运行
     * @param pipelineId 流水线id
     */
    void stopStage(String pipelineId);







}
