package com.doublekit.pipeline.example.model;

import com.doublekit.apibox.annotation.ApiModel;
import com.doublekit.apibox.annotation.ApiProperty;
import com.doublekit.beans.annotation.Mapper;
import com.doublekit.join.annotation.Join;

@ApiModel
@Join
@Mapper(targetAlias = "PipelineStructureEntity")
public class PipelineStructure {

    //id
    @ApiProperty(name = "structureId",desc="id")
    private String structureId;

    //构建类型
    @ApiProperty(name = "type",desc="构建类型")
    private int type;

    //构建文件地址
    @ApiProperty(name="structureAddress",desc="构建文件地址")
    private String structureAddress;

    //构建命令
    @ApiProperty(name="structureOrder",desc="构建命令")
    private String structureOrder;


    public String getStructureId() {
        return structureId;
    }

    public void setStructureId(String structureId) {
        this.structureId = structureId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getStructureAddress() {
        return structureAddress;
    }

    public void setStructureAddress(String structureAddress) {
        this.structureAddress = structureAddress;
    }

    public String getStructureOrder() {
        return structureOrder;
    }

    public void setStructureOrder(String structureOrder) {
        this.structureOrder = structureOrder;
    }



}
