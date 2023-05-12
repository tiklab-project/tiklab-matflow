package io.tiklab.matflow.support.variable.entity;

import io.tiklab.dal.jpa.annotation.*;

@Entity
@Table(name="pip_pipeline_variable")
public class VariableEntity {

    //流水线配置id
    @Id
    @GeneratorValue(length = 12)
    @Column(name = "var_id",notNull = true)
    private String varId;

    //创建配置时间
    @Column(name = "create_time",notNull = true)
    private String createTime ;

    //名称
    @Column(name = "var_key",notNull = true)
    private String varKey;

    //值
    @Column(name = "var_value",notNull = true)
    private String varValue;

    //类型
    @Column(name = "task_type",notNull = true)
    private int taskType;

    @Column(name = "type",notNull = true)
    private int type;

    //任务id
    @Column(name = "task_id",notNull = true)
    private String taskId;

    @Column(name = "var_values",notNull = true)
    private String varValues;


    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getVarId() {
        return varId;
    }

    public void setVarId(String varId) {
        this.varId = varId;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getVarKey() {
        return varKey;
    }

    public void setVarKey(String varKey) {
        this.varKey = varKey;
    }

    public String getVarValue() {
        return varValue;
    }

    public void setVarValue(String varValue) {
        this.varValue = varValue;
    }

    public String getVarValues() {
        return varValues;
    }

    public void setVarValues(String varValues) {
        this.varValues = varValues;
    }

    public int getTaskType() {
        return taskType;
    }

    public void setTaskType(int taskType) {
        this.taskType = taskType;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }
}






























