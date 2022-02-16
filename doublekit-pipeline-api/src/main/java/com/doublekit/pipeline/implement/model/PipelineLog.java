package com.doublekit.pipeline.implement.model;

import com.doublekit.apibox.annotation.ApiModel;
import com.doublekit.apibox.annotation.ApiProperty;
import com.doublekit.beans.annotation.Mapping;
import com.doublekit.beans.annotation.Mappings;
import com.doublekit.join.annotation.Join;
import com.doublekit.join.annotation.JoinQuery;
import com.doublekit.pipeline.definition.model.Pipeline;

@ApiModel
@Join
public class PipelineLog {

    //日志id
    @ApiProperty(name="logId",desc="日志id")
    private String logId;

    //创建时间
    @ApiProperty(name="logCreateTime",desc="创建时间")
    private String logCreateTime ;

    //日志地址
    @ApiProperty(name="logAddress",desc="日志地址")
    private String logAddress;

    //拉取时间
    @ApiProperty(name="logCodeTime",desc="拉取时间")
    private int logCodeTime;

    //拉取状态
    @ApiProperty(name="logCodeState",desc="拉取状态")
    private int  logCodeState;

    //打包时间
    @ApiProperty(name="logPackTime",desc="打包时间")
    private int logPackTime;

    //打包状态
    @ApiProperty(name="logPackState",desc="打包状态")
    private int  logPackState;

    //部署时间
    @ApiProperty(name="logDeployTime",desc="部署时间")
    private int logDeployTime;

    //部署状态
    @ApiProperty(name="logDeployState",desc="部署状态")
    private int logDeployState;

    //流水线
    @ApiProperty(name="pipeline",desc="流水线id",eg="@selectOne")
    @Mappings({
            @Mapping(source = "pipeline.pipelineId",target = "pipelineId")
    })
    @JoinQuery(key = "pipelineId")
    private Pipeline pipeline;

    //运行状态（0 ：成功  1：其他  2：失败）
    @ApiProperty(name="logRunStatus",desc="部署状态")
    private int logRunStatus = getLogRunStatus() + getLogPackState()+ getLogCodeState();

    public String getLogId() {
        return logId;
    }

    public void setLogId(String logId) {
        this.logId = logId;
    }

    public String getLogCreateTime() {
        return logCreateTime;
    }

    public void setLogCreateTime(String logCreateTime) {
        this.logCreateTime = logCreateTime;
    }

    public String getLogAddress() {
        return logAddress;
    }

    public void setLogAddress(String logAddress) {
        this.logAddress = logAddress;
    }

    public int getLogCodeTime() {
        return logCodeTime;
    }

    public void setLogCodeTime(int logCodeTime) {
        this.logCodeTime = logCodeTime;
    }

    public int getLogCodeState() {
        return logCodeState;
    }

    public void setLogCodeState(int logCodeState) {
        this.logCodeState = logCodeState;
    }

    public int getLogPackTime() {
        return logPackTime;
    }

    public void setLogPackTime(int logPackTime) {
        this.logPackTime = logPackTime;
    }

    public int getLogPackState() {
        return logPackState;
    }

    public void setLogPackState(int logPackState) {
        this.logPackState = logPackState;
    }

    public int getLogDeployTime() {
        return logDeployTime;
    }

    public void setLogDeployTime(int logDeployTime) {
        this.logDeployTime = logDeployTime;
    }

    public int getLogDeployState() {
        return logDeployState;
    }

    public void setLogDeployState(int logDeployState) {
        this.logDeployState = logDeployState;
    }

    public Pipeline getPipeline() {
        return pipeline;
    }

    public void setPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
    }

    public int getLogRunStatus() {
        return logRunStatus;
    }

    public void setLogRunStatus(int logRunStatus) {
        this.logRunStatus = logRunStatus;
    }
}
