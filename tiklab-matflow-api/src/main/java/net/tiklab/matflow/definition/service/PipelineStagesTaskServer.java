package net.tiklab.matflow.definition.service;

import net.tiklab.matflow.definition.model.PipelineConfig;
import net.tiklab.matflow.definition.model.PipelineStagesTask;

import java.util.List;

public interface PipelineStagesTaskServer {

    /**
     * 创建配置及任务
     * @param config 配置
     * @return stagesTaskId
     */
    String createStagesTasksTask (PipelineConfig config) ;

    /**
     * 删除配置及任务
     * @param configId Id
     */
    void deleteStagesTasksTask (String configId) ;

    /**
     * 删除所有配置及任务
     * @param stagesId 阶段id
     */
    void deleteAllStagesTasksTask(String stagesId);

    /**
     * 更新配置及任务
     * @param config 配置
     */
    void updateStagesTasksTask (PipelineConfig config);

    /**
     * 查询流水线配置
     * @param stagesId 阶段id
     * @return 配置
     */
    List<PipelineStagesTask> findAllStagesTasks (String stagesId) ;

    /**
     * 查询流水线所有配置及任务
     * @param stagesId 阶段id
     * @return 任务
     */
    List<Object> findAllStagesTasksTask (String stagesId) ;

    /**
     * 查询单个配置
     * @param stagesTaskId 配置id
     * @return 配置
     */
    PipelineStagesTask findOneStagesTask(String stagesTaskId);


    /**
     * 效验配置必填字段
     * @param stagesId 流水线id
     */
    void validAllConfig(String stagesId,List<String> list);


}















