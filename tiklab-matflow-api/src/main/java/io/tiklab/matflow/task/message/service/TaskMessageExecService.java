package io.tiklab.matflow.task.message.service;

import io.tiklab.matflow.task.message.model.TaskExecMessage;

/**
 * 流水线执行消息任务服务接口
 */
public interface TaskMessageExecService {


    /**
     * 发送消息
     * @param taskExecMessage 信息
     * @return 执行状态
     */
    boolean message(TaskExecMessage taskExecMessage);

}
