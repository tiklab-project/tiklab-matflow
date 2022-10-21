package net.tiklab.matflow.orther.service;

import com.alibaba.fastjson.JSONObject;
import net.tiklab.core.page.Page;
import net.tiklab.core.page.Pagination;
import net.tiklab.matflow.execute.model.PipelineProcess;
import net.tiklab.matflow.orther.model.PipelineActivity;
import net.tiklab.matflow.orther.model.PipelineTask;
import net.tiklab.oplog.log.modal.OpLog;
import net.tiklab.oplog.log.modal.OpLogQuery;
import net.tiklab.oplog.log.modal.OpLogTemplate;
import net.tiklab.oplog.log.service.OpLogService;
import net.tiklab.rpc.annotation.Exporter;
import net.tiklab.todotask.task.modal.Task;
import net.tiklab.todotask.task.modal.TaskQuery;
import net.tiklab.todotask.task.service.TaskService;
import net.tiklab.user.user.model.User;
import net.tiklab.utils.context.LoginContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 动态
 */

@Exporter
@Service
public class PipelineActivityServiceImpl implements PipelineActivityService {

    @Autowired
    OpLogService logService;

    @Autowired
    TaskService taskService;

    private static final Logger logger = LoggerFactory.getLogger(PipelineActivityServiceImpl.class);

    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    String appName = "matflow";

    /**
     * 创建日志
     * @param type 日志类型 (创建 create，删除 delete，执行 exec，更新 update)
     * @param templateId 模板id (创建 流水线--pipeline，运行 pipelineExec，凭证--pipelineProof,其他--pipelineOther)
     * @param map 日志信息
     */
    @Override
    public void log(String type, String templateId,Map<String, String> map){
        OpLog log = new OpLog();
        OpLogTemplate opLogTemplate = new OpLogTemplate();
        opLogTemplate.setId(templateId);
        log.setActionType(type);
        log.setModule("matflow");
        log.setTimestamp(new Timestamp(System.currentTimeMillis()));
        String loginId = LoginContext.getLoginId();
        User user = new User();
        user.setId(loginId);
        log.setUser(user);
        log.setBgroup("matflow");
        log.setOpLogTemplate(opLogTemplate);
        log.setContent(JSONObject.toJSONString(map));
        logService.createLog(log);
    }

    /**
     * 查询日志
     * @return 日志
     */
    @Override
    public List<PipelineActivity> findLog(){
        OpLogQuery opLogQuery = new OpLogQuery();
        opLogQuery.setBgroup(appName);
        List<OpLog> logList = logService.findLogList(opLogQuery);

        if (logList == null){
            return null;
        }

        logList.sort(Comparator.comparing(OpLog::getTimestamp).reversed());
        List<PipelineActivity> pipelineActivities = new ArrayList<>();

        int size = Math.min(logList.size(), 6);
        for (int i = 0; i < size; i++) {
            PipelineActivity pipelineActivity = updateActivities(logList.get(i));
            pipelineActivities.add(pipelineActivity);
        }

        pipelineActivities.sort(Comparator.comparing(PipelineActivity::getCreateTime).reversed());
        return pipelineActivities;
    }

    //封装动态信息
    private PipelineActivity updateActivities(OpLog opLog){
        String content = opLog.getContent();
        JSONObject jsonObject = JSONObject.parseObject(content);
        PipelineActivity pipelineActivity = new PipelineActivity();
        pipelineActivity.setPipelineId(jsonObject.getString("pipelineId"));
        pipelineActivity.setMessage(jsonObject.getString("message"));
        pipelineActivity.setCreateTime(format.format(opLog.getTimestamp().getTime()));
        pipelineActivity.setType(opLog.getActionType());
        pipelineActivity.setUserName(opLog.getUser().getName());
        pipelineActivity.setPipelineName(jsonObject.getString("pipelineName"));
        pipelineActivity.setTemplateType(opLog.getOpLogTemplate().getId());
        return pipelineActivity;
    }

    /**
     * 查询待办
     */
    @Override
    public List<PipelineTask> findTask(){
        TaskQuery taskQuery = new TaskQuery();
        taskQuery.setBgroup(appName);
        String userId = LoginContext.getLoginId();
        taskQuery.setUserId(userId);
        Pagination<Task> taskPage = taskService.findTaskPage(taskQuery);
        List<Task> dataList = taskPage.getDataList();
        if (dataList == null){
            return null;
        }
        dataList.sort(Comparator.comparing(Task::getEndTime));

        int size = Math.min(dataList.size(), 6);
        List<PipelineTask> pipelineTasks = new ArrayList<>();

        for (int i = 0; i < size; i++) {
            PipelineTask pipelineTask = updateTask(dataList.get(i));
           pipelineTasks.add(pipelineTask);
        }
         return pipelineTasks;
    }

    //封装待办信息
    private PipelineTask updateTask(Task task){
        PipelineTask pipelineTask = new PipelineTask();
        pipelineTask.setTaskName(task.getTitle());
        pipelineTask.setCreateTime(format.format(task.getCreateTime().getTime()));
        pipelineTask.setEndTime(format.format(task.getEndTime().getTime()));
        pipelineTask.setState(task.getStatus());
        pipelineTask.setExecUser(task.getCreateUser().getName());
        pipelineTask.setCreateUser(task.getAssignUser().getName());
        return pipelineTask;
    }




}
































