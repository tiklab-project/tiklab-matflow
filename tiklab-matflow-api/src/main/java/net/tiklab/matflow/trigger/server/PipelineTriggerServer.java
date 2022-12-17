package net.tiklab.matflow.trigger.server;

import net.tiklab.matflow.trigger.model.PipelineTrigger;

import java.util.List;

public interface PipelineTriggerServer {


    /**
     * 创建配置及任务
     * @param config 配置
     * @return 配置id
     */
     String createConfig(PipelineTrigger config);


    /**
     * 查询所有配置
     * @param pipelineId 流水线id
     * @return 配置列表
     */
    List<Object> findAllConfig(String pipelineId);

    /**
     * 删除流水线所有定时任务
     * @param pipelineId 流水线id
     */
    void deleteAllConfig(String pipelineId);


    /**
     * 删除单个定时任务
     * @param pipelineId 流水线id
     * @param cron 表达式
     */
    void deleteCronConfig(String pipelineId,String cron);

    /**
     * 查询单个任务
     * @param configId 配置id
     * @return 任务
     */
    Object findOneConfig(String configId);


    /**
     * 更新配置信息
     * @param config 配置
     */
    void updateConfig(PipelineTrigger config);


    /**
     * 根据流水线id查询触发器配置
     * @param pipelineId 流水线id
     * @return 配置
     */
     List<PipelineTrigger> findAllTriggerConfig(String pipelineId) ;


    //更新
     void updateTriggerConfig(PipelineTrigger pipelineTrigger) ;

    //查询单个
    PipelineTrigger findOneTriggerConfig(String triggerConfigId) ;

    //删除
    void deleteTriggerConfig(String triggerConfigId) ;
    //查询所有
    List<PipelineTrigger> findAllTriggerConfig() ;

    List<PipelineTrigger> findAllTriggerConfigList(List<String> idList) ;

}