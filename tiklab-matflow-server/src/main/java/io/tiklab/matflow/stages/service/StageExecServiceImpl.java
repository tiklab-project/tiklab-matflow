package io.tiklab.matflow.stages.service;

import io.tiklab.core.exception.ApplicationException;
import io.tiklab.matflow.stages.model.Stage;
import io.tiklab.matflow.stages.model.StageInstance;
import io.tiklab.matflow.support.util.PipelineFinal;
import io.tiklab.matflow.support.util.PipelineUtil;
import io.tiklab.matflow.task.task.model.Tasks;
import io.tiklab.matflow.task.task.service.TasksExecService;
import io.tiklab.matflow.task.task.service.TasksExecServiceImpl;
import io.tiklab.matflow.task.task.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.*;

/**
 * 阶段运行服务
 */
@Service
public class StageExecServiceImpl implements  StageExecService {

    @Autowired
    StageService stageService;

    @Autowired
    StageInstanceServer stageInstanceServer;

    @Autowired
    TasksExecService tasksExecService;

    @Autowired
    TasksService tasksService;

    //阶段任务实例id及阶段任务实例
    public static  Map<String , StageInstance> stageInstanceIdOrStageInstance = new HashMap<>();

    //阶段id及阶段任务实例
    private static final Map<String , String> stageIdOrStageInstanceId = new HashMap<>();

    //运行时间
    private final static Map<String,Integer> runTime = TasksExecServiceImpl.runTime;

    //并行任务线程池
    private final ExecutorService threadPool = Executors.newCachedThreadPool();

    @Override
    public void createStageExecInstance(String pipelineId,String instanceId) {
        String fileAddress = PipelineUtil.findFileAddress(pipelineId,2)+instanceId;
        List<Stage> allMainStage = stageService.findAllMainStage(pipelineId);
        for (Stage mainStage : allMainStage) {
            //创建主阶段日志
            String stageId = mainStage.getStageId();
            String mainAddress = fileAddress + "/" + stageId;
            String stageInstanceId = initStageInstance(mainStage, instanceId, true,mainAddress);
            List<Stage> otherStage = stageService.findOtherStage(stageId);
            //获取阶段下的并行任务
            for (Stage stage : otherStage) {
                String id = stage.getStageId();
                String otherStageInstanceId = initStageInstance(stage, stageInstanceId, false,fileAddress);
                List<Tasks> tasks = tasksService.finAllStageTask(id);
                String otherAddress = mainAddress + "/"+otherStageInstanceId;
                //获取串行任务
                for (Tasks task : tasks) {
                    tasksExecService.createTaskExecInstance(task,otherStageInstanceId,2,otherAddress);
                }
            }
        }
    }

    /**
     * 初始化阶段运行实例
     * @param stage 阶段信息
     * @param id 主实例id
     * @param isMain 是否为主阶段
     * @param stagePath 日志文件地址
     * @return 阶段运行实例id
     */
    private String initStageInstance(Stage stage , String id,boolean isMain,String stagePath){
        StageInstance stageInstance = new StageInstance();
        if (isMain){
            stageInstance.setInstanceId(id);
        }else {
            stageInstance.setParentId(id);
        }
        stageInstance.setStageName(stage.getStageName());
        stageInstance.setStageAddress(stagePath);
        stageInstance.setStageSort(stage.getStageSort());
        stageInstance.setStageState(PipelineFinal.RUN_WAIT);
        String stageInstanceId = stageInstanceServer.createStageInstance(stageInstance);
        stageInstance.setId(stageInstanceId);
        //执行信息放入内存
        stageIdOrStageInstanceId.put(stage.getStageId(),stageInstanceId);
        stageInstanceIdOrStageInstance.put(stageInstanceId,stageInstance);
        return stageInstanceId;
    }

    @Value("${matflow.cloud:true}")
    boolean idCe;

    @Override
    public boolean execStageTask(String pipelineId, String instanceId) {
        List<Stage> allMainStage = stageService.findAllMainStage(pipelineId);
        boolean state = true;
        for (Stage mainStage : allMainStage) {
            String mainStageId = mainStage.getStageId();
            //更新主阶段状态阶段
            String stageInstanceId = stageIdOrStageInstanceId.get(mainStageId);
            StageInstance stageInstance = stageInstanceIdOrStageInstance.get(stageInstanceId);
            tasksExecService.time(stageInstanceId);
            stageInstance.setStageState(PipelineFinal.RUN_RUN);
            stageInstanceIdOrStageInstance.put(stageInstanceId,stageInstance);

            List<Stage> otherStage = stageService.findOtherStage(mainStageId);

            Map<String , Future<Boolean>> futureMap = new HashMap<>();
            for (Stage stage : otherStage) {
                String stagesId = stage.getStageId();
                //更新从阶段状态为运行
                String otherStageInstanceId = stageIdOrStageInstanceId.get(stagesId);
                StageInstance instance = stageInstanceIdOrStageInstance.get(otherStageInstanceId);
                instance.setStageState(PipelineFinal.RUN_RUN);
                stageInstanceIdOrStageInstance.put(otherStageInstanceId,instance);

                //获取阶段任务，执行
                List<Tasks> tasks = tasksService.finAllStageTask(stagesId);

                if (!idCe){
                    for (Tasks task : tasks) {
                        state = tasksExecService.execTask(pipelineId, task.getTaskType(), task.getTaskId());
                        updateStageExecState(stagesId,state);
                        if (!state){
                            break;
                        }
                    }
                }else {
                    Future<Boolean> future =  threadPool.submit(() -> {
                        for (Tasks task : tasks) {
                            Thread.currentThread().setName(stagesId);
                            boolean b= tasksExecService.execTask(pipelineId, task.getTaskType(), task.getTaskId());
                            if (!b){
                                return false;
                            }
                        }
                        return true;
                    });
                    futureMap.put(stagesId,future);
                }
            }

            if (idCe){
                //等待获取并行阶段执行结果
                for (Stage stage1 : otherStage) {
                    try {
                        String stageId = stage1.getStageId();
                        state = futureMap.get(stageId).get();
                        updateStageExecState(stageId,state);
                        if (!state){ break; }
                    } catch (InterruptedException | ExecutionException | ApplicationException e) {
                        throw new ApplicationException(e);
                    }
                }
            }

            //更新主阶段状态
            updateStageExecState(mainStageId,state);
            if (!state){ break; }
        }
        return state;
    }

    /**
     * 更新阶段运行实例
     * @param stageId 阶段id
     * @param state 状态
     */
    private void updateStageExecState(String stageId,boolean state){
        String stageInstanceId = stageIdOrStageInstanceId.get(stageId);
        Integer integer = runTime.get(stageInstanceId);
        StageInstance instance = stageInstanceIdOrStageInstance.get(stageInstanceId);
        if (integer == null){
            integer = 0;
        }

        instance.setStageTime(integer);
        if (state){
            instance.setStageState(PipelineFinal.RUN_SUCCESS);
        }else {
            instance.setStageState(PipelineFinal.RUN_ERROR);
        }

        //更新数据，移除内存
        tasksExecService.stopThread(stageInstanceId);
        stageInstanceServer.updateStageInstance(instance);
        stageIdOrStageInstanceId.remove(stageId);
        stageInstanceIdOrStageInstance.remove(stageInstanceId);
    }

    public void stopStage(String pipelineId){
        //获取所有阶段
        List<Stage> allMainStage = stageService.findAllMainStage(pipelineId);
        for (Stage stage : allMainStage) {
            String stageId = stage.getStageId();
            List<Stage> otherStageList = stageService.findOtherStage(stageId);
            //获取并行阶段
            for (Stage otherStage : otherStageList) {
                String otherStageId = otherStage.getStageId();
                stopStageTask(otherStageId);
            }
            stopStageTask(stageId);
        }
    }

    /**
     * 停止阶段运行更新阶段状态
     * @param stageId 阶段id
     */
    private void stopStageTask(String stageId){
        String otherStageInstanceId = stageIdOrStageInstanceId.get(stageId);
        StageInstance otherStageInstance = stageInstanceIdOrStageInstance.get(otherStageInstanceId);
        //该阶段运行完成
        if (otherStageInstanceId == null || otherStageInstance == null){
            return;
        }
        //停止任务
        List<Tasks> tasks = tasksService.finAllStageTask(stageId);
        for (Tasks task : tasks) {
            String taskId = task.getTaskId();
            tasksExecService.stopTask(taskId);
        }
        //更新并行阶段状态
        Integer integer = runTime.get(otherStageInstanceId);
        if (integer == null){
            integer = 0;
        }
        otherStageInstance.setStageTime(integer);
        otherStageInstance.setStageState(PipelineFinal.RUN_HALT);
        stageInstanceServer.updateStageInstance(otherStageInstance);
        //移除内存
        tasksExecService.stopThread(otherStageInstanceId);
        tasksExecService.stopThread(stageId);
        stageIdOrStageInstanceId.remove(stageId);
        stageInstanceIdOrStageInstance.remove(otherStageInstanceId);
    }












}










































