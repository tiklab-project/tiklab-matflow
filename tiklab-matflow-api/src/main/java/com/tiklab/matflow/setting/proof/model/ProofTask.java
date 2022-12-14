package com.tiklab.matflow.setting.proof.model;


import com.tiklab.beans.annotation.Mapper;
import com.tiklab.join.annotation.Join;
import com.tiklab.postin.annotation.ApiModel;
import com.tiklab.postin.annotation.ApiProperty;

@ApiModel
@Join
@Mapper(targetAlias = "ProofTaskEntity")
public class ProofTask {

    //id
    @ApiProperty(name = "taskId" ,desc = "id")
    private String taskId;

    //凭证id
    @ApiProperty(name = "proofId",desc = "凭证id")
    private String proofId;

    //流水线id
    @ApiProperty(name = "matflowId" ,desc = "流水线id")
    private String matflowId;

    public ProofTask() {
    }

    public ProofTask(String proofId, String matFlowId) {
        this.proofId = proofId;
        this.matflowId = matFlowId;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getProofId() {
        return proofId;
    }

    public void setProofId(String proofId) {
        this.proofId = proofId;
    }

    public String getMatflowId() {
        return matflowId;
    }

    public void setMatflowId(String matflowId) {
        this.matflowId = matflowId;
    }
}
