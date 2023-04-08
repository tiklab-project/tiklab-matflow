package io.tiklab.matflow.support.postprocess.model;

import io.tiklab.beans.annotation.Mapper;
import io.tiklab.join.annotation.Join;
import io.tiklab.matflow.task.task.model.Tasks;
import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;
/**
 * 流水线后置处理模型
 */
@ApiModel
@Join
@Mapper(targetAlias = "PostprocessEntity")
public class Postprocess {

    @ApiProperty(name = "postprocessId",desc="id")
    private String postprocessId;

    @ApiProperty(name = "name",desc="名称")
    private String name;

    @ApiProperty(name = "taskType",desc="类型 61:消息通知 71:bat脚本 72:sh脚本")
    private int taskType;

    @ApiProperty(name = "createTime",desc="创建时间")
    private String createTime;

    @ApiProperty(name="taskId",desc="任务id")
    private String taskId;

    @ApiProperty(name="pipelineId",desc="流水线id")
    private String pipelineId;

    @ApiProperty(name="values",desc="任务详情")
    private Object values;

    @ApiProperty(name="task",desc="任务")
    private Tasks task;


    @ApiProperty(name="taskSort",desc="任务")
    private int taskSort;

    public int getTaskSort() {
        return taskSort;
    }

    public void setTaskSort(int taskSort) {
        this.taskSort = taskSort;
    }

    public String getPipelineId() {
        return pipelineId;
    }

    public void setPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
    }

    public String getPostprocessId() {
        return postprocessId;
    }

    public void setPostprocessId(String postprocessId) {
        this.postprocessId = postprocessId;
    }

    public Tasks getTask() {
        return task;
    }

    public void setTask(Tasks task) {
        this.task = task;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTaskType() {
        return taskType;
    }

    public void setTaskType(int taskType) {
        this.taskType = taskType;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public Object getValues() {
        return values;
    }

    public void setValues(Object values) {
        this.values = values;
    }

}
