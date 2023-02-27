package net.tiklab.matflow.task.message.service;

import net.tiklab.beans.BeanMapper;
import net.tiklab.matflow.task.message.dao.TaskMessageTypeDao;
import net.tiklab.matflow.task.message.entity.TaskMessageTypeEntity;
import net.tiklab.matflow.task.message.model.TaskMessage;
import net.tiklab.matflow.task.message.model.TaskMessageType;
import net.tiklab.matflow.task.message.model.TaskUserSendMessageType;
import net.tiklab.rpc.annotation.Exporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Exporter
public class TaskMessageTypeServiceImpl implements TaskMessageTypeService {

    @Autowired
    private TaskMessageTypeDao taskMessageTypeDao;
    
    @Autowired
    private TaskMessageUserService messageUserServer;

    //创建
    @Override
    public String createMessage(TaskMessageType taskMessageType) {
        TaskMessageTypeEntity taskMessageTypeEntity = BeanMapper.map(taskMessageType, TaskMessageTypeEntity.class);
        return taskMessageTypeDao.createMessage(taskMessageTypeEntity);
    }

    /**
     * 根据配置查询发送方式
     * @param configId 配置id
     * @return 发送方式
     */
    public List<String> findAllMessage(String configId){
        List<TaskMessageType> allMessage = findAllMessage();
        if (allMessage == null){
            return null;
        }
        List<String> list = new ArrayList<>();
        for (TaskMessageType messageType : allMessage) {
            if (messageType.getConfigId().equals(configId)){
                list.add(messageType.getTaskType());
            }
        }
        return list;
    }

    /**
     * 查询消息发送信息
     * @param configId 配置id
     * @return 信息
     */
    public TaskMessage findConfigMessage(String configId){
        List<String> allMessage = findAllMessage(configId);
        TaskMessage message = new TaskMessage();
        message.setTypeList(allMessage);
        TaskMessageType messageType = findMessage(configId);
        if (messageType != null){
            String taskId = messageType.getMessageTaskId();
            List<TaskUserSendMessageType> allUserMessage = messageUserServer.findAllUserMessage(taskId);
            message.setUserList(allUserMessage);
        }
        message.setConfigId(configId);
        return message;
    }


    /**
     * 删除任务
     * @param configId 配置id
     */
    public void deleteAllMessage(String configId){
        List<TaskMessageType> allMessage = findAllMessage();
        if (allMessage == null){
            return;
        }
        for (TaskMessageType messageType : allMessage) {
            if (messageType.getConfigId().equals(configId)){
                String messageTaskId = messageType.getMessageTaskId();
                deleteMessage(messageType.getMessageTaskId());
                messageUserServer.deleteAllMessage(messageTaskId);
            }
        }

    }

    /**
     * 根据配置id查询消息类型
     * @param configId 配置id
     * @return 消息
     */
    public TaskMessageType findMessage(String configId){
        List<TaskMessageType> allMessage = findAllMessage();
        if (allMessage == null){
            return null;
        }

        for (TaskMessageType messageType : allMessage) {
            if (messageType.getConfigId().equals(configId)){
               return messageType;
            }
        }
        return null;
    }


    //删除
    @Override
    public void deleteMessage(String messageId) {
        taskMessageTypeDao.deleteMessage(messageId);
    }

    //更新
    @Override
    public void updateMessage(TaskMessageType taskMessageType) {
        TaskMessageTypeEntity taskMessageTypeEntity = BeanMapper.map(taskMessageType, TaskMessageTypeEntity.class);
        taskMessageTypeDao.updateMessage(taskMessageTypeEntity);
    }

    //查询单个
    @Override
    public TaskMessageType findOneMessage(String messageId) {
        TaskMessageTypeEntity messageTypeEntity = taskMessageTypeDao.findOneMessage(messageId);
        return BeanMapper.map(messageTypeEntity, TaskMessageType.class);

    }

    //查询所有
    @Override
    public List<TaskMessageType> findAllMessage() {
        return BeanMapper.mapList(taskMessageTypeDao.findAllMessage(), TaskMessageType.class);
    }

    @Override
    public List<TaskMessageType> findAllMessageList(List<String> idList) {
        return BeanMapper.mapList(taskMessageTypeDao.findAllMessageTypeList(idList), TaskMessageType.class);
    }
    
    
}