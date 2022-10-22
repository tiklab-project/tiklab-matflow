package net.tiklab.matflow.execute.service;


import net.tiklab.matflow.definition.model.Pipeline;
import net.tiklab.matflow.definition.model.PipelineConfigOrder;
import net.tiklab.matflow.definition.service.PipelineConfigOrderService;
import net.tiklab.matflow.definition.service.PipelineService;
import net.tiklab.matflow.execute.model.PipelineExecHistory;
import net.tiklab.matflow.execute.model.PipelineExecLog;
import net.tiklab.matflow.execute.service.execAchieveService.ConfigCommonService;
import net.tiklab.matflow.execute.model.PipelineProcess;
import net.tiklab.matflow.execute.service.execAchieveService.PipelineTaskExecService;
import net.tiklab.matflow.orther.service.PipelineUntil;
import net.tiklab.rpc.annotation.Exporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


@Service
@Exporter
public class PipelineExecServiceImpl implements PipelineExecService {

    @Autowired
    PipelineService pipelineService;

    @Autowired
    PipelineTaskExecService taskExecService;

    @Autowired
    ConfigCommonService commonService;

    @Autowired
    PipelineConfigOrderService configOrderService;

    //存放过程状态
    public static final List<PipelineExecHistory> pipelineExecHistoryList = new ArrayList<>();

    //开始执行时间
    long beginTime = 0;

    //创建线程池
    ExecutorService executorService = Executors.newCachedThreadPool();

    //启动
    @Override
    public int  start(String pipelineId,String userId){
        // 判断同一任务是否在运行
        Pipeline pipeline = pipelineService.findOnePipeline(pipelineId);
        if (pipeline.getPipelineState() == 1){
            return 100;
        }

        try {
            executorService.submit(() -> {
                beginTime = new Timestamp(System.currentTimeMillis()).getTime();
                Thread.currentThread().setName(pipelineId);
                begin(pipeline,userId);
            });
            Thread.sleep(500);
        } catch (InterruptedException e) {
            return 1;
        }
        return 1;
    }

    //存放运行时间
    int[] time = {1,0,0,0};

    //查询构建中的信息
    @Override
    public PipelineExecHistory findInstanceState(String pipelineId){
        for (PipelineExecHistory pipelineExecHistory : pipelineExecHistoryList) {
            Pipeline pipeline = pipelineExecHistory.getPipeline();
            if (pipeline == null || !pipeline.getPipelineId().equals(pipelineId)){
                continue;
            }
            int i = pipelineExecHistory.getSort() - 1;
            time[i] = time[i] + 1;
            pipelineExecHistory.setOneTime(PipelineUntil.formatDateTime(time[0]));
            pipelineExecHistory.setTwoTime(PipelineUntil.formatDateTime(time[1]));
            pipelineExecHistory.setThreeTime(PipelineUntil.formatDateTime(time[2]));
            pipelineExecHistory.setFourTime(PipelineUntil.formatDateTime(time[3]));
            pipelineExecHistory.setAllTime(PipelineUntil.formatDateTime(time[0]+time[1]+time[2]+time[3]));
            return pipelineExecHistory;
        }
      return null;
    }

    //停止运行
    @Override
    public void killInstance(String pipelineId,String userId) {
        PipelineProcess pipelineProcess = new PipelineProcess();
        time[0]=1;time[1]=0;time[2]=0;time[3]=0;
        PipelineExecHistory pipelineExecHistory = findInstanceState(pipelineId);
        if (pipelineExecHistory == null){
            Pipeline pipeline = pipelineService.findOnePipeline(pipelineId);
            pipeline.setPipelineState(0);
            pipelineService.updatePipeline(pipeline);
            return;
        }

        PipelineExecLog pipelineExecLog =commonService.getExecPipelineLog(pipelineExecHistory.getHistoryId());

        pipelineProcess.setPipelineExecLog(pipelineExecLog);
        pipelineProcess.setPipelineExecHistory(pipelineExecHistory);
        Pipeline pipeline = pipelineExecHistory.getPipeline();

        long overTime = new Timestamp(System.currentTimeMillis()).getTime();
        int time = (int) (overTime - beginTime) / 1000;
        pipelineExecLog.setRunTime(time- pipelineExecHistory.getRunTime());
        pipelineExecHistory.setRunLog(pipelineExecHistory.getRunLog()+"\n"+"流水线停止运行......");

        //停止运行
        ThreadGroup currentGroup = Thread.currentThread().getThreadGroup();
        int noThreads = currentGroup.activeCount();
        Thread[] lstThreads = new Thread[noThreads];
        currentGroup.enumerate(lstThreads);
        for (int i = 0; i < noThreads; i++) {
            String nm = lstThreads[i].getName();
            if (!nm.equals(pipelineId)) {
               continue;
            }
            lstThreads[i].stop();
            pipeline.setPipelineState(0);
            pipelineService.updatePipeline(pipeline);
        }
        commonService.halt(pipelineProcess,pipelineId);

    }

    //判断流水线是否正在执行
    @Override
    public int findState(String pipelineId){
        Pipeline pipeline = pipelineService.findOnePipeline(pipelineId);
        if (pipeline == null ){
            return 0;
        }
        if (pipeline.getPipelineState() == 1){
            return 1;
        }
        return 0;
    }

    // 构建开始
    private void begin(Pipeline pipeline, String userId) {

        //更新流水线状态为执行
        pipeline.setPipelineState(1);
        pipelineService.updatePipeline(pipeline);
        String pipelineId = pipeline.getPipelineId();

        //初始化历史
        PipelineExecHistory pipelineExecHistory = commonService.initializeHistory(pipeline,userId);

        //获取配置信息
        PipelineProcess pipelineProcess = new PipelineProcess();
        pipelineProcess.setPipelineExecHistory(pipelineExecHistory);
        pipelineExecHistoryList.add(pipelineExecHistory);

        //获取所有配置顺序
        List<PipelineConfigOrder> allPipelineConfig = configOrderService.findAllPipelineConfig(pipelineId);
        if (allPipelineConfig == null){
            return;
        }
        for (PipelineConfigOrder pipelineConfigOrder : allPipelineConfig) {
            //初始化日志
            PipelineExecLog pipelineExecLog = commonService.initializeLog(pipelineExecHistory.getHistoryId(), pipelineConfigOrder);
            pipelineProcess.setPipeline(pipeline);
            pipelineProcess.setPipelineExecLog(pipelineExecLog);

            int taskType = pipelineConfigOrder.getTaskType();
            PipelineConfigOrder oneConfig = configOrderService.findOneConfig(pipelineId, taskType);

            boolean state = taskExecService.beginState(pipelineProcess,oneConfig,taskType);

            if (!state){
                pipeline.setPipelineState(0);
                commonService.error(pipelineExecHistory, pipeline.getPipelineId());
                pipelineService.updatePipeline(pipeline);
                time[0]=1;time[1]=0;time[2]=0;time[3]=0;
                return;
            }

            pipelineExecHistory.setSort(pipelineExecHistory.getSort() +1);
            pipelineExecHistory.setStatus(pipelineExecHistory.getStatus() +1);
        }
        commonService.success(pipelineExecHistory, pipeline.getPipelineId());
        pipeline.setPipelineState(0);
        pipelineService.updatePipeline(pipeline);
        time[0]=1;time[1]=0;time[2]=0;time[3]=0;
    }

    Map<String,Integer> map = new HashMap<>();

    public String getTime(PipelineExecLog log,int sort){
        String logId = log.getLogId();
        int taskSort = log.getTaskSort();
        Integer integer = map.get(logId);
        if (taskSort == sort){
            integer =integer+1;
            map.put(logId, map.get(logId)+1);
        }
       return PipelineUntil.formatDateTime(integer);
    }
}


































