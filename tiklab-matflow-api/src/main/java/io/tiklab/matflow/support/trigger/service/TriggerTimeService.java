package io.tiklab.matflow.support.trigger.service;

import io.tiklab.matflow.support.trigger.model.TriggerTime;
import io.tiklab.join.annotation.FindAll;
import io.tiklab.join.annotation.FindList;
import io.tiklab.join.annotation.FindOne;
import io.tiklab.join.annotation.JoinProvider;

import java.util.List;
/**
 * 流水线触发器时间服务接口
 */
@JoinProvider(model = TriggerTime.class)
public interface TriggerTimeService {

    /**
     * 创建所有关联时间信息
     * @param triggerTime 信息
     */
    String createTriggerTime(TriggerTime triggerTime, String pipelineId);


    /**
     * 根据配置id查询消息类型
     * @param triggerId 配置id
     * @return 消息
     */
    TriggerTime findTriggerTime(String triggerId);


    /**
     * 根据配置查询所有任务
     * @param triggerId 配置id
     * @return 任务集合
     */
    List<TriggerTime> findAllTriggerTime(String triggerId);


    /**
     * 根据类型查询定时任务
     * @param configId 配置id
     * @param cron 表达式
     * @return 配置
     */
    TriggerTime fondCronConfig(String configId, String cron);


    /**
     * 根据配置获取所有时间
     * @param configId 配置id
     * @return 时间集合
     */
    List<Integer> findAllDataConfig(String configId);

    /**
     * 删除当前配置下的的所有任务
     * @param triggerId 配置id
     */
    void deleteAllTime(String triggerId,String pipelineId);


    /**
     * 周期任务更新执行时间
     * @param timeId 任务id
     */
    void deleteCronTime(String pipelineId,String timeId);

    /**
     * 删除
     * @param timeId timeId
     */
    void deleteTime(String timeId) ;

    /**
     * 查询单个信息
     * @param timeId pipelineTimeId
     * @return time信息
     */
    @FindOne
    TriggerTime findOneTime(String timeId) ;

    /**
     * 查询所有信息
     * @return time信息集合
     */
    @FindAll
    List<TriggerTime> findAllTime() ;

    @FindList
    List<TriggerTime> findAllTimeList(List<String> idList);
    
    
}