package net.tiklab.matflow.achieve.server;

import net.tiklab.matflow.execute.model.PipelineProcess;

public interface ProductService {

    /**
     * 推送制品代码
     * @param pipelineProcess 执行信息
     * @return 执行状态
     */
     boolean product(PipelineProcess pipelineProcess, String configId ,int taskType);


}