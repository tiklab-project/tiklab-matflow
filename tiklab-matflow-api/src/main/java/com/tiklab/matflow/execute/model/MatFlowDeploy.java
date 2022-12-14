package com.tiklab.matflow.execute.model;

import com.tiklab.beans.annotation.Mapper;
import com.tiklab.beans.annotation.Mapping;
import com.tiklab.beans.annotation.Mappings;
import com.tiklab.join.annotation.Join;
import com.tiklab.join.annotation.JoinQuery;
import com.tiklab.matflow.setting.proof.model.Proof;
import com.tiklab.postin.annotation.ApiModel;
import com.tiklab.postin.annotation.ApiProperty;

@ApiModel
@Join
@Mapper(targetAlias = "MatFlowDeployEntity")
public class MatFlowDeploy {

    @ApiProperty(name = "deployId" , desc = "id")
    private String deployId;

    @ApiProperty(name = "type" , desc = "容器类型")
    private int type;

    @ApiProperty(name = "deployType",desc = "部署类型" )
    private int deployType;

    @ApiProperty(name = "deployAddress" , desc = "部署文件地址")
    private String deployAddress;

    @ApiProperty(name="sourceAddress",desc="源文件地址")
    private String sourceAddress;

    @ApiProperty(name = "startShell" , desc = "启动脚本")
    private String startShell;

    @ApiProperty(name="proof",desc="凭证id",eg="@selectOne")
    @Mappings({
            @Mapping(source = "proof.proofId",target = "proofId")
    })
    @JoinQuery(key = "proofId")
    private Proof proof;

    @ApiProperty(name = "startPort",desc="启动端口")
    private int startPort;

    @ApiProperty(name = "mappingPort",desc="映射端口")
    private int mappingPort;

    @ApiProperty(name = "sort",desc="顺序")
    private int sort;

    @ApiProperty(name = "deployAlias",desc="别名")
    private String deployAlias;

    @ApiProperty(name = "sshPort" ,desc="ssh连接端口")
    private int sshPort;

    @ApiProperty(name = "sshIp" ,desc="ssh连接ip")
    private String sshIp;

    @ApiProperty(name = "startAddress",desc = "启动文件地址" )
    private String startAddress;

    @ApiProperty(name = "deployOrder",desc = "部署命令" )
    private String deployOrder;

    public String getDeployId() {
        return deployId;
    }

    public void setDeployId(String deployId) {
        this.deployId = deployId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getDeployType() {
        return deployType;
    }

    public void setDeployType(int deployType) {
        this.deployType = deployType;
    }

    public String getDeployAddress() {
        return deployAddress;
    }

    public void setDeployAddress(String deployAddress) {
        this.deployAddress = deployAddress;
    }

    public String getSourceAddress() {
        return sourceAddress;
    }

    public void setSourceAddress(String sourceAddress) {
        this.sourceAddress = sourceAddress;
    }

    public String getStartShell() {
        return startShell;
    }

    public void setStartShell(String startShell) {
        this.startShell = startShell;
    }

    public Proof getProof() {
        return proof;
    }

    public void setProof(Proof proof) {
        this.proof = proof;
    }

    public int getStartPort() {
        return startPort;
    }

    public void setStartPort(int startPort) {
        this.startPort = startPort;
    }

    public int getMappingPort() {
        return mappingPort;
    }

    public void setMappingPort(int mappingPort) {
        this.mappingPort = mappingPort;
    }

    public int getSort() {
        return sort;
    }

    public void setSort(int sort) {
        this.sort = sort;
    }

    public String getDeployAlias() {
        return deployAlias;
    }

    public void setDeployAlias(String deployAlias) {
        this.deployAlias = deployAlias;
    }

    public int getSshPort() {
        return sshPort;
    }

    public void setSshPort(int sshPort) {
        this.sshPort = sshPort;
    }

    public String getSshIp() {
        return sshIp;
    }

    public void setSshIp(String sshIp) {
        this.sshIp = sshIp;
    }

    public String getStartAddress() {
        return startAddress;
    }

    public void setStartAddress(String startAddress) {
        this.startAddress = startAddress;
    }

    public String getDeployOrder() {
        return deployOrder;
    }

    public void setDeployOrder(String deployOrder) {
        this.deployOrder = deployOrder;
    }
}
