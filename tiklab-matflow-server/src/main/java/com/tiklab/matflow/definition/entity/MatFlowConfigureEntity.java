package com.tiklab.matflow.definition.entity;


import com.tiklab.dal.jpa.annotation.*;

/**
 * 流水线配置
 */

@Entity
@Table(name="matflow_configure")
public class MatFlowConfigureEntity {

    //流水线配置id
    //id
    @Id
    @GeneratorValue
    @Column(name = "configure_id")
    private String configureId;

    //创建配置时间
    @Column(name = "create_time",notNull = true)
    private String createTime;

    //流水线
    @Column(name = "matflow_id",notNull = true)
    private String matflowId;

    //源码
    @Column(name = "task_id",notNull = true)
    private String taskId;

    //源码类型
    @Column(name = "task_type",notNull = true)
    private int taskType;

    //顺序
    @Column(name = "task_sort",notNull = true)
    private int taskSort;

    //别名
    @Column(name = "task_alias",notNull = true)
    private String taskAlias;

    //别名
    @Column(name = "view",notNull = true)
    private int view;

    public String getConfigureId() {
        return configureId;
    }

    public void setConfigureId(String configureId) {
        this.configureId = configureId;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getMatflowId() {
        return matflowId;
    }

    public void setMatflowId(String matflowId) {
        this.matflowId = matflowId;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public int getTaskType() {
        return taskType;
    }

    public void setTaskType(int taskType) {
        this.taskType = taskType;
    }

    public int getTaskSort() {
        return taskSort;
    }

    public void setTaskSort(int taskSort) {
        this.taskSort = taskSort;
    }

    public String getTaskAlias() {
        return taskAlias;
    }

    public void setTaskAlias(String taskAlias) {
        this.taskAlias = taskAlias;
    }

    public int getView() {
        return view;
    }

    public void setView(int view) {
        this.view = view;
    }
}
