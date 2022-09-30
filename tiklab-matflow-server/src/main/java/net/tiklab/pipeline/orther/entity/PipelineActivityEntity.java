package net.tiklab.pipeline.orther.entity;


import net.tiklab.dal.jpa.annotation.*;

@Entity
@Table(name="pipeline_activity")
public class PipelineActivityEntity {

    @Id
    @GeneratorValue
    @Column(name = "id")
    private String id;

    @Column(name = "create_time")
    private String createTime;

    @Column(name = "massage")
    private String massage ;

    @Column(name = "user_id")
    private String userId ;

    //流水线
    @Column(name = "pipeline_id",notNull = true)
    private String pipelineId;

    @Column(name = "news")
    private String news ;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getMassage() {
        return massage;
    }

    public void setMassage(String massage) {
        this.massage = massage;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPipelineId() {
        return pipelineId;
    }

    public void setPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
    }

    public String getNews() {
        return news;
    }

    public void setNews(String news) {
        this.news = news;
    }
}