package net.tiklab.matflow.achieve.server;

import net.tiklab.core.exception.ApplicationException;
import net.tiklab.matflow.definition.model.Pipeline;
import net.tiklab.matflow.definition.service.PipelineStagesTaskServer;
import net.tiklab.matflow.definition.service.PipelineTasksService;
import net.tiklab.matflow.execute.model.PipelineProcess;
import net.tiklab.matflow.execute.service.PipelineExecCommonService;
import net.tiklab.matflow.orther.until.PipelineUntil;
import net.tiklab.matflow.task.model.PipelineTest;
import net.tiklab.rpc.annotation.Exporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

/**
 * 测试执行方法
 */

@Service
@Exporter
public class TestServiceImpl implements TestService {

    @Autowired
    PipelineExecCommonService commonService;

    @Autowired
    PipelineTasksService tasksService;

    @Autowired
    PipelineStagesTaskServer stagesTaskServer;
    
    // 单元测试
    public boolean test(PipelineProcess pipelineProcess, String configId ,int taskType) {
        Pipeline pipeline = pipelineProcess.getPipeline();
        Object o;
        if (pipeline.getType() == 1){
            o = tasksService.findOneTasksTask(configId);
        }else {
            o = stagesTaskServer.findOneStagesTasksTask(configId);
        }
        PipelineTest pipelineTest = (PipelineTest) o;
        String name = pipelineTest.getName();

        commonService.execHistory(pipelineProcess, "\n"+ PipelineUntil.date(4)+"执行任务："+name);


        pipelineTest.setType(taskType);

        commonService.execHistory(pipelineProcess, "\n"+ PipelineUntil.date(4)+"执行"+ pipelineTest.getName());

        //初始化日志
        String testOrder = pipelineTest.getTestOrder();

        String path = PipelineUntil.findFileAddress(pipeline.getId());
        try {

            List<String> list = PipelineUntil.execOrder(testOrder);
            for (String s : list) {
                commonService.execHistory(pipelineProcess,PipelineUntil.date(4)+s);
                Process  process = getOrder(pipelineTest,s,path);
                pipelineProcess.setError(error(pipelineTest.getType()));
                commonService.execState(pipelineProcess,process,name);
                process.destroy();
            }
        } catch (IOException e) {
            commonService.execHistory(pipelineProcess, PipelineUntil.date(4)+"日志打印失败"+e);
            return false;
        } catch (ApplicationException e) {
            commonService.execHistory(pipelineProcess,e.getMessage());
            return false;
        }
        return true;
    }

    /**
     * 执行build
     * @param pipelineTest 执行信息
     * @param path 项目地址
     * @return 执行命令
     */
    private Process getOrder(PipelineTest pipelineTest,String testOrder, String path ) throws ApplicationException, IOException {
        int type = pipelineTest.getType();
        String order ;
        if (type == 11) {
            String mavenAddress = commonService.getScm(21);
            if (mavenAddress == null) {
                throw new ApplicationException(PipelineUntil.date(4)+"不存在maven配置");
            }
            PipelineUntil.validFile(mavenAddress,21);
            order = testOrder(testOrder, path);
            return PipelineUntil.process(mavenAddress, order);
        }else {
            throw  new ApplicationException("未知的任务类型");
        }
    }

    /**
     * 拼装测试命令
     * @param buildOrder 执行命令
     * @param path 项目地址
     * @return 命令
     */
    private String testOrder(String buildOrder,String path){

        String order;
        int systemType = PipelineUntil.findSystemType();
        order = " ./" + buildOrder + " " + "-f" +" " +path ;
        if (systemType == 1){
            order = " .\\" + buildOrder + " " + "-f"+" "  +path;
        }
        return order;
    }

    private String[] error(int type){
        String[] strings;
        strings = new String[]{
            "BUILD FAILUREl","ERROR"
        };
        return strings;
    }

}
