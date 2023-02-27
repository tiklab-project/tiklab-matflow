package net.tiklab.matflow.task.message.service;

import net.tiklab.matflow.pipeline.execute.model.PipelineProcess;

import java.util.Map;

public interface TaskMessageExecService {


    /**
     * 执行不同的任务实现
     * @param pipelineProcess 配置信息
     * @return 状态
     */
    boolean message(PipelineProcess pipelineProcess, String configId , int taskType, Map<String,String> map);

}