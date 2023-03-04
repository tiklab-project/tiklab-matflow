package net.tiklab.matflow.task.deploy.service;

import net.tiklab.matflow.task.task.model.Tasks;

public interface TaskDeployExecService {

    /**
     * 部署
     * @param pipelineProcess 部署信息
     * @return 部署状态
     */
    boolean deploy(String pipelineId, Tasks task , int taskType);


}
