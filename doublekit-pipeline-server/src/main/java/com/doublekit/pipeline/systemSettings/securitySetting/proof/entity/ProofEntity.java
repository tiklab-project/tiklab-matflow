package com.doublekit.pipeline.systemSettings.securitySetting.proof.entity;


import com.doublekit.dal.jpa.mapper.annotation.*;

@Entity
@Table(name="pipeline_proof")
public class ProofEntity {

    //凭证id
    @Id
    @GeneratorValue
    @Column(name = "proof_id")
    private String proofId;

    //凭证类型
    @Column(name = "proof_type")
    private String proofType;

    //凭证名
    @Column(name = "proof_username")
    private String proofUsername;

    //凭证密码
    @Column(name = "proof_password")
    private String proofPassword;

    //描述
    @Column(name = "proof_describe")
    private String proofDescribe;

    public String getProofId() {
        return proofId;
    }

    public void setProofId(String proofId) {
        this.proofId = proofId;
    }

    public String getProofType() {
        return proofType;
    }

    public void setProofType(String proofType) {
        this.proofType = proofType;
    }

    public String getProofUsername() {
        return proofUsername;
    }

    public void setProofUsername(String proofUsername) {
        this.proofUsername = proofUsername;
    }

    public String getProofPassword() {
        return proofPassword;
    }

    public void setProofPassword(String proofPassword) {
        this.proofPassword = proofPassword;
    }

    public String getProofDescribe() {
        return proofDescribe;
    }

    public void setProofDescribe(String proofDescribe) {
        this.proofDescribe = proofDescribe;
    }
}
