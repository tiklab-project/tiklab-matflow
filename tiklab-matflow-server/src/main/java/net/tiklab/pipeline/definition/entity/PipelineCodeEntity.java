package net.tiklab.pipeline.definition.entity;


import net.tiklab.dal.jpa.annotation.*;

@Entity
@Table(name="pipeline_code")
public class PipelineCodeEntity {

    //codeId
    @Id
    @GeneratorValue
    @Column(name = "code_id")
    private String codeId;

    //地址名
    @Column(name = "code_name",notNull = true)
    private String codeName;

    //地址
    @Column(name = "code_address",notNull = true)
    private String codeAddress;

    //分支
    @Column(name = "code_branch",notNull = true)
    private String codeBranch;

    //凭证名称
    @Column(name = "proof_id",notNull = true)
    private String proofId;

    public String getCodeId() {
        return codeId;
    }

    public void setCodeId(String codeId) {
        this.codeId = codeId;
    }

    public String getCodeName() {
        return codeName;
    }

    public void setCodeName(String codeName) {
        this.codeName = codeName;
    }

    public String getCodeAddress() {
        return codeAddress;
    }

    public void setCodeAddress(String codeAddress) {
        this.codeAddress = codeAddress;
    }

    public String getCodeBranch() {
        return codeBranch;
    }

    public void setCodeBranch(String codeBranch) {
        this.codeBranch = codeBranch;
    }

    public String getProofId() {
        return proofId;
    }

    public void setProofId(String proofId) {
        this.proofId = proofId;
    }

}
