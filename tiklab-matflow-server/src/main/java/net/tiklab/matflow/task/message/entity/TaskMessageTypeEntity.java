package net.tiklab.matflow.task.message.entity;

import net.tiklab.dal.jpa.annotation.*;

@Entity
@Table(name="pip_task_message_type")
public class TaskMessageTypeEntity {

    @Id
    @Column(name = "task_id" ,notNull = true)
    private String taskId;

    @Column(name = "task_name" ,notNull = true)
    private String taskName;

    //消息类型
    @Column(name = "task_type")
    private String taskType;

    public String getTaskType() {
        return taskType;
    }

    public void setTaskType(String taskType) {
        this.taskType = taskType;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }
}
