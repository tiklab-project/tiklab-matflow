package com.doublekit.pipeline.instance.controller;

import com.doublekit.apibox.annotation.Api;
import com.doublekit.apibox.annotation.ApiMethod;
import com.doublekit.apibox.annotation.ApiParam;
import com.doublekit.common.Result;
import com.doublekit.pipeline.instance.model.PipelineExecLog;
import com.doublekit.pipeline.instance.service.PipelineExecLogService;
import com.doublekit.pipeline.instance.service.PipelineExecService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/pipelineLog")
@Api(name = "PipelineLogController",desc = "流水线日志")
public class PipelineExecLogController {

    @Autowired
    PipelineExecLogService PipelineExecLogService;

    @Autowired
    PipelineExecService pipelineExecService;


    //查询所有日志
    @RequestMapping(path="/findAllLog",method = RequestMethod.POST)
    @ApiMethod(name = "findAllLog",desc = "查询所有日志")
    public Result< List<PipelineExecLog>> findAllLog() {

        List<PipelineExecLog> allLog = PipelineExecLogService.findAllLog();

        return Result.ok(allLog);
    }



    //删除日志
    @RequestMapping(path="/deleteLog",method = RequestMethod.POST)
    @ApiMethod(name = "deleteLog",desc = "删除日志")
    public Result<Void> deleteLog(String logId) {

       PipelineExecLogService.deleteLog(logId);

        return Result.ok();
    }


    //查询构建状态
    @RequestMapping(path="/selectStructureState",method = RequestMethod.POST)
    @ApiMethod(name = "selectStructureState",desc = "查询构建状态")
    @ApiParam(name = "pipelineId",desc = "流水线id",required = true)
    public Result<PipelineExecLog> selectStructureState(String pipelineId) {

        PipelineExecLog pipelineExecLog = pipelineExecService.findStructureState(pipelineId);

        return Result.ok(pipelineExecLog);
    }

    //查询单个流水线
    @RequestMapping(path="/selectPipelineLog",method = RequestMethod.POST)
    @ApiMethod(name = "selectPipelineLog",desc = "查询日志")
    @ApiParam(name = "logId",desc = "日志id",required = true)
    public Result<PipelineExecLog> selectPipelineLog(@NotNull String logId ){

        PipelineExecLog pipelineExecLog = PipelineExecLogService.findOneLog(logId);

        return Result.ok(pipelineExecLog);
    }



}
