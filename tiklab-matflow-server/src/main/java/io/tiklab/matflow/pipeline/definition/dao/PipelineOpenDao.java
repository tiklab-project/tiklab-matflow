package io.tiklab.matflow.pipeline.definition.dao;


import io.tiklab.dal.jdbc.JdbcTemplate;
import io.tiklab.dal.jpa.JpaTemplate;
import io.tiklab.matflow.pipeline.definition.entity.PipelineOpenEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PipelineOpenDao {

    private static final Logger logger = LoggerFactory.getLogger(PipelineOpenDao.class);

    @Autowired
    JpaTemplate jpaTemplate;


    /**
     * 创建次数
     * @param pipelineOpenEntity 次数
     * @return 次数id
     */
    public String createOpen(PipelineOpenEntity pipelineOpenEntity){
        return jpaTemplate.save(pipelineOpenEntity, String.class);
    }

    /**
     * 删除次数
     * @param openId 次数id
     */
    public void deleteOpen(String openId){
        jpaTemplate.delete(PipelineOpenEntity.class, openId);
    }

    /**
     * 更新次数
     * @param pipelineOpenEntity 更新信息
     */
    public void updateOpen(PipelineOpenEntity pipelineOpenEntity){
        jpaTemplate.update(pipelineOpenEntity);
    }

    /**
     * 查询单个次数信息
     * @param openId 次数id
     * @return 次数信息
     */
    public PipelineOpenEntity findOneOpen(String openId){
        return jpaTemplate.findOne(PipelineOpenEntity.class,openId);
    }

    /**
     * 查询用户最近打开的流水线
     * @param userId 用户id
     * @return 最近打开信息
     */
    public List<PipelineOpenEntity> findUserAllOpen(String userId){
        String sql = "select pip_other_open.* from pip_other_open ";
        sql = sql.concat(" where pip_other_open.user_id   = '"+userId+"' ");
        JdbcTemplate jdbcTemplate = jpaTemplate.getJdbcTemplate();
        return  jdbcTemplate.query(sql, new BeanPropertyRowMapper(PipelineOpenEntity.class));
    }

    public Integer findUserOpenPipelineNumber(String userId,String pipelineId,String time){
        String sql = "SELECT count(*) FROM pip_other_open WHERE \"user_id\" = '" + userId +
                "' and  pipeline_id = '" +pipelineId +
                "' and create_time >= '"+ time +"'";
        JdbcTemplate jdbcTemplate = jpaTemplate.getJdbcTemplate();
        List<Integer> list = jdbcTemplate.queryForList(sql, Integer.class);
        if (list.isEmpty()){
            return 0;
        }
        return  list.get(0);
    }

    public String findUserLastOpenPipeline(String userId,String pipelineId){
        String sql = "SELECT create_time FROM pip_other_open " +
                " WHERE \"user_id\" = '" + userId +
                "' and  pipeline_id = '" +pipelineId +
                "' ORDER BY create_time desc";
        JdbcTemplate jdbcTemplate = jpaTemplate.getJdbcTemplate();
        List<String> list = jdbcTemplate.queryForList(sql, String.class);
        if (list.isEmpty()){
            return null;
        }
        return  list.get(0);
    }

    /**
     * 查询所有次数
     * @return 次数集合
     */
    public List<PipelineOpenEntity> findAllOpen(){
        return jpaTemplate.findAll(PipelineOpenEntity.class);
    }

    public List<PipelineOpenEntity> findAllOpenList(List<String> idList){
        return jpaTemplate.findList(PipelineOpenEntity.class,idList);
    }



}
