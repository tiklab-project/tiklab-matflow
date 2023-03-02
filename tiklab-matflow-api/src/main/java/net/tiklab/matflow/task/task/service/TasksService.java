package net.tiklab.matflow.task.task.service;

import net.tiklab.join.annotation.JoinProvider;
import net.tiklab.matflow.pipeline.definition.model.Pipeline;
import net.tiklab.matflow.task.task.model.Tasks;

import java.util.List;

@JoinProvider(model = Tasks.class)
public interface TasksService {

    /**
     * 查询所有配置（包括后置任务）
     * @param pipelineId 流水线id
     * @return 任务
     */
    List<Object> findAllConfig(String pipelineId);

    /**
     * 查询所有任务配置
     * @param pipelineId 流水线Id
     * @return 配置
     */
    List<Object> findAllTaskConfig(String pipelineId);

    /**
     * 创建配置及任务配置
     * @param tasks 配置信息
     * @return 配置id
     */
    String createTaskConfig(Tasks tasks);

    /**
     * 删除配置及任务
     * @param tasks 配置信息
     */
    void deleteTaskConfig(Tasks tasks);

    /**
     * 删除流水线所有配置
     * @param pipelineId 流水线id
     * @param pipelineType 流水线类型
     */
    void deleteAllTaskConfig(String pipelineId,int pipelineType);

    /**
     * 更新配置及任务
     * @param tasks 配置信息
     */
    void updateTaskConfig(Tasks tasks);


    /**
     * 效验配置必填字段
     * @param pipelineId 流水线id
     * @return 配置id集合
     */
    List<String> validAllConfig(String pipelineId);


    /**
     * 创建流水线模板
     * @param pipeline 流水线信息
     */
    void createTemplate(Pipeline pipeline);

}
