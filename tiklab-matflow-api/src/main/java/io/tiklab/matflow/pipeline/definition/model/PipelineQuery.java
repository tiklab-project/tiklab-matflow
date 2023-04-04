package io.tiklab.matflow.pipeline.definition.model;

import io.tiklab.core.order.Order;
import io.tiklab.core.order.OrderBuilders;
import io.tiklab.core.page.Page;
import io.tiklab.postin.annotation.ApiProperty;

import java.util.List;

public class PipelineQuery {

    @ApiProperty(name ="userId",desc = "用户")
    private String userId;

    @ApiProperty(name ="pipelineName",desc = "流水线名称")
    private String pipelineName;

    @ApiProperty(name ="pipelineState",desc = "流水线状态")
    private Integer pipelineState;

    @ApiProperty(name ="pipelineType",desc = "流水线类型")
    private Integer pipelineType;

    @ApiProperty(name ="pipelinePower",desc = "流水线权限")
    private Integer pipelinePower;

    @ApiProperty(name ="pipelineFollow",desc = "收藏, 1.收藏 0.未收藏")
    private Integer pipelineFollow;

    @ApiProperty(name ="pageParam",desc = "分页参数")
    private Page pageParam= new Page();

    @ApiProperty(name ="orderParams",desc = "排序参数")
    private List<Order> orderParams = OrderBuilders.instance().desc("createTime").get();


    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPipelineName() {
        return pipelineName;
    }

    public void setPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
    }

    public Integer getPipelineState() {
        return pipelineState;
    }

    public void setPipelineState(Integer pipelineState) {
        this.pipelineState = pipelineState;
    }

    public Integer getPipelineType() {
        return pipelineType;
    }

    public void setPipelineType(Integer pipelineType) {
        this.pipelineType = pipelineType;
    }

    public Integer getPipelinePower() {
        return pipelinePower;
    }

    public void setPipelinePower(Integer pipelinePower) {
        this.pipelinePower = pipelinePower;
    }

    public Integer getPipelineFollow() {
        return pipelineFollow;
    }

    public void setPipelineFollow(Integer pipelineFollow) {
        this.pipelineFollow = pipelineFollow;
    }

    public Page getPageParam() {
        return pageParam;
    }

    public void setPageParam(Page pageParam) {
        this.pageParam = pageParam;
    }

    public List<Order> getOrderParams() {
        return orderParams;
    }

    public void setOrderParams(List<Order> orderParams) {
        this.orderParams = orderParams;
    }
}
