package net.tiklab.matflow.execute.entity;

import net.tiklab.dal.jpa.annotation.*;

/**
 * 流水线日志
 */

@Entity
@Table(name="pip_pipeline_history_log")
public class PipelineExecLogEntity {

    //日志id
    @Id
    @GeneratorValue
    @Column(name = "log_id")
    private String logId;

    //historyId
    @Column(name = "history_id")
    private String historyId;

    //运行类型
    @Column(name = "task_type")
    private int taskType ;

    @Column(name = "task_sort")
    private int taskSort ;

    //运行日志
    @Column(name = "run_log")
    private String runLog;

    //运行时间
    @Column(name = "run_time")
    private int runTime;

    //运行状态
    @Column(name = "run_state")
    private int runState;

    @Column(name = "stages_id")
    private String stagesId;

    @Column(name = "task_name")
    private String taskName;

    public String getStagesId() {
        return stagesId;
    }

    public void setStagesId(String stagesId) {
        this.stagesId = stagesId;
    }

    public String getLogId() {
        return logId;
    }

    public void setLogId(String logId) {
        this.logId = logId;
    }

    public String getHistoryId() {
        return historyId;
    }

    public void setHistoryId(String historyId) {
        this.historyId = historyId;
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

    public String getRunLog() {
        return runLog;
    }

    public void setRunLog(String runLog) {
        this.runLog = runLog;
    }

    public int getRunTime() {
        return runTime;
    }

    public void setRunTime(int runTime) {
        this.runTime = runTime;
    }

    public int getRunState() {
        return runState;
    }

    public void setRunState(int runState) {
        this.runState = runState;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }
}
