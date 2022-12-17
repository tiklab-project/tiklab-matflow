package net.tiklab.matflow.execute.service;

import net.tiklab.matflow.execute.model.PipelineExecHistory;
import net.tiklab.matflow.execute.model.PipelineProcess;

import java.io.IOException;

/**
 * 执行过程配置的公共方法
 */
public interface PipelineExecCommonService {


    /**
     * 执行日志
     * @throws IOException 字符流转换异常
     * @return map 执行状态
     */
    int log( PipelineProcess pipelineProcess) throws IOException;



    /**
     * 运行结束更新历史状态
     * @param pipelineId 流水线id
     * @param status 状态 success:10  error:1 halt:20
     */
    void runEnd(String pipelineId ,int status);

    /**
     * 初始化历史
     * @return 历史
     */
    PipelineExecHistory initializeHistory(String pipelineId,int startWAy);


    /**
     * 执行过程中的历史
     */
    void execHistory(PipelineProcess pipelineProcess,String log);

    /**
     * 更新执行时历史日志
     * @param pipelineId 流水线id
     * @param log 日志
     */
    void updateExecHistory(String pipelineId ,String log);


    /**
     * 更新执行状态
     * @param historyId 历史id
     * @param state 状态
     */
    void updateState(String historyId, String logId,int state);

    /**
     * 获取环境配置信息
     * @param type 类型
     * @return 配置信息
     */
    String getScm(int type);

}