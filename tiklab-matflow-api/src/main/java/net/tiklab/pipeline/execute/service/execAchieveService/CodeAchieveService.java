package net.tiklab.pipeline.execute.service.execAchieveService;

import net.tiklab.pipeline.definition.model.PipelineConfig;
import net.tiklab.pipeline.orther.model.PipelineProcess;

public interface CodeAchieveService {

    /**
     * 源码管理
     * @param pipelineProcess 执行信息
     * @return 执行状态
     */
    String clone(PipelineProcess pipelineProcess, PipelineConfig pipelineConfig);
}