package com.doublekit.pipeline.setting.other.service;

import com.doublekit.pipeline.instance.service.execAchieveService.CommonAchieveService;
import com.doublekit.pipeline.setting.other.model.SystemMassage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SystemMassageServiceImpl implements  SystemMassageService{


    @Autowired
    CommonAchieveService commonAchieveService;

    @Autowired
    public SystemMassage getSystemMassage(){
        return new SystemMassage();
    }


//    D:\桌面\项目\doublekit-pipeline\LOG_PATH_IS_UNDEFINED\doublekit\doublekit-pipeline\logs\app.pipelineExecLog
//    /usr/local/apps/doublekit-pipeline-1.0.0-SNAPSHOT/bin/LOG_PATH_IS_UNDEFINED/doublekit/doublekit-pipeline/logs

    public List<String> getSystemLog(){
        String files = "/usr/local/apps/doublekit-pipeline-1.0.0-SNAPSHOT/bin/LOG_PATH_IS_UNDEFINED/doublekit/doublekit-pipeline/logs";
        String property = System.getProperty("os.name");
        String[] s = property.split(" ");
        if (s[0].equals("Windows")){
            files = "D:\\桌面\\项目\\doublekit-pipeline\\LOG_PATH_IS_UNDEFINED\\doublekit\\doublekit-pipeline\\logs\\app.pipelineExecLog";
        }
        return commonAchieveService.readFile(files);
    }
}
