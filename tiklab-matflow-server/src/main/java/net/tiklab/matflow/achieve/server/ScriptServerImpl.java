package net.tiklab.matflow.achieve.server;

import net.tiklab.core.exception.ApplicationException;
import net.tiklab.matflow.definition.model.Pipeline;
import net.tiklab.matflow.execute.model.PipelineProcess;
import net.tiklab.matflow.execute.service.PipelineExecCommonService;
import net.tiklab.matflow.orther.until.PipelineUntil;
import net.tiklab.matflow.task.model.PipelineScript;
import net.tiklab.matflow.task.server.PipelineScriptServer;
import net.tiklab.rpc.annotation.Exporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

/**
 * 执行bat,sh脚本
 */

@Service
@Exporter
public class ScriptServerImpl implements ScriptServer {


    @Autowired
    PipelineExecCommonService commonService;

    @Autowired
    PipelineScriptServer scriptServer;

    public boolean scripts(PipelineProcess pipelineProcess, String configId , int taskType) {

        PipelineScript script = scriptServer.findScript(configId);
        script.setType(taskType);
        String name = script.getName();
        int type = script.getType();
        if (type == 71){
            name = "执行Bat脚本";
        }
        if (type == 71){
            name = "执行Shell脚本";
        }
        commonService.updateExecLog(pipelineProcess, "\n"+ PipelineUntil.date(4)+"执行任务："+name);

        int systemType = PipelineUntil.findSystemType();

        if (systemType == 1 && type == 72 ){
            commonService.updateExecLog(pipelineProcess,PipelineUntil.date(4)+ "Windows系统无法执行Shell脚本。");
        }

        if (systemType == 2 && type == 71){
            commonService.updateExecLog(pipelineProcess,PipelineUntil.date(4)+ "Linux系统无法执行Bat脚本。");
            return false;
        }

        Pipeline pipeline = pipelineProcess.getPipeline();

        String order = script.getScriptOrder();

        List<String> list = PipelineUntil.execOrder(order);
        if (list.size() == 0){
            commonService.updateExecLog(pipelineProcess, "\n"+ PipelineUntil.date(4)+"任务："+name+"执行完成。");
            return true;
        }

        try {
            for (String s : list) {
                String key = commonService.variableKey(pipeline.getId(), configId, s);
                commonService.updateExecLog(pipelineProcess,PipelineUntil.date(4)+ key );
                String fileAddress = PipelineUntil.findFileAddress(pipeline.getId(),1);
                Process process = PipelineUntil.process(fileAddress, key);
                commonService.execState(pipelineProcess,process,name);
            }
        }catch (IOException | ApplicationException e){
            String s = PipelineUntil.date(4) + e.getMessage();
            commonService.updateExecLog(pipelineProcess,s);
            return false;
        }
        commonService.updateExecLog(pipelineProcess, "\n"+ PipelineUntil.date(4)+"任务："+name+"执行完成。");
        return true;
    }

}





























































