package net.tiklab.matflow.task.build.model;


import net.tiklab.beans.annotation.Mapper;
import net.tiklab.join.annotation.Join;
import net.tiklab.postin.annotation.ApiModel;
import net.tiklab.postin.annotation.ApiProperty;

@ApiModel
@Join
@Mapper(targetAlias = "TaskBuildEntity")
public class TaskBuild {

    @ApiProperty(name = "taskId",desc = "id")
    private String taskId;

    @ApiProperty(name = "taskName",desc = "名称")
    private String taskName;

    //构建文件地址
    @ApiProperty(name="buildAddress",desc="构建文件地址")
    private String buildAddress;

    //构建命令
    @ApiProperty(name="buildOrder",desc="构建命令")
    private String buildOrder;

    //顺序
    private int sort;

    //构建类型
    private int type;

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getBuildAddress() {
        return buildAddress;
    }

    public void setBuildAddress(String buildAddress) {
        this.buildAddress = buildAddress;
    }

    public String getBuildOrder() {
        return buildOrder;
    }

    public void setBuildOrder(String buildOrder) {
        this.buildOrder = buildOrder;
    }

    public int getSort() {
        return sort;
    }

    public void setSort(int sort) {
        this.sort = sort;
    }


}
