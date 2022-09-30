package net.tiklab.pipeline.execute.service.execAchieveService;

import net.tiklab.pipeline.definition.model.PipelineConfig;
import net.tiklab.pipeline.orther.model.PipelineProcess;

public interface TestAchieveService {

    /**
     * 测试
     * @param pipelineProcess 配置信息
     * @return 执行状态
     */
    String test(PipelineProcess pipelineProcess, PipelineConfig pipelineConfig);
}