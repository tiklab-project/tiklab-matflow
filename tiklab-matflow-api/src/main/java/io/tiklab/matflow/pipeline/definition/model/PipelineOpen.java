package io.tiklab.matflow.pipeline.definition.model;


import io.tiklab.beans.annotation.Mapper;
import io.tiklab.beans.annotation.Mapping;
import io.tiklab.beans.annotation.Mappings;
import io.tiklab.join.annotation.Join;
import io.tiklab.join.annotation.JoinQuery;
import io.tiklab.matflow.pipeline.overview.model.PipelineOverview;
import io.tiklab.postin.annotation.ApiModel;
import io.tiklab.postin.annotation.ApiProperty;

/**
 * 流水线最近打开模型
 */
@ApiModel
@Join
@Mapper(targetAlias = "PipelineOpenEntity")
public class PipelineOpen {

    @ApiProperty(name="openId",desc="日志id")
    private String openId;

    @ApiProperty(name="userId",desc="用户",eg="@selectOne")
    private String userId;

    @ApiProperty(name="pipeline",desc="流水线id",eg="@selectOne")
    @Mappings({
            @Mapping(source = "pipeline.id",target = "pipelineId")
    })
    @JoinQuery(key = "id")
    private Pipeline pipeline;

    @ApiProperty(name="number",desc="打开次数")
    private int number;

    @ApiProperty(name="createTime",desc="创建时间")
    private String createTime;

    @ApiProperty(name="pipelineOverview",desc="流水线执行统计信息")
    private PipelineOverview pipelineOverview;


    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Pipeline getPipeline() {
        return pipeline;
    }

    public void setPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public PipelineOverview getPipelineExecState() {
        return pipelineOverview;
    }

    public void setPipelineExecState(PipelineOverview pipelineOverview) {
        this.pipelineOverview = pipelineOverview;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }
}