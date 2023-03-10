package io.tiklab.matflow.support.variable.controller;

import io.tiklab.core.Result;
import io.tiklab.matflow.support.variable.model.Variable;
import io.tiklab.matflow.support.variable.service.VariableService;
import io.tiklab.postin.annotation.Api;
import io.tiklab.postin.annotation.ApiMethod;
import io.tiklab.postin.annotation.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/pipelineVariable")
@Api(name = "VariableController",desc = "流水线变量")
public class VariableController {

    @Autowired
    VariableService variableServer;

    @RequestMapping(path="/createVariable",method = RequestMethod.POST)
    @ApiMethod(name = "createVariable",desc = "创建变量")
    @ApiParam(name = "variable",desc = "variable",required = true)
    public Result<String> createVariable(@RequestBody @NotNull @Valid Variable variable){
        String variableId = variableServer.createVariable(variable);
        return Result.ok(variableId);
    }


    @RequestMapping(path="/deleteVariable",method = RequestMethod.POST)
    @ApiMethod(name = "deleteVariable",desc = "删除变量")
    @ApiParam(name = "varId",desc = "varId",required = true)
    public Result<Void> deleteVariable( @NotNull  String varId){
         variableServer.deleteVariable(varId);
        return Result.ok();
    }


    @RequestMapping(path="/updateVariable",method = RequestMethod.POST)
    @ApiMethod(name = "updateVariable",desc = "更新变量")
    @ApiParam(name = "variable",desc = "variable",required = true)
    public Result<Void> updateVariable(@RequestBody @NotNull @Valid Variable variable){
        variableServer.updateVariable(variable);
        return Result.ok();
    }

    @RequestMapping(path="/findAllVariable",method = RequestMethod.POST)
    @ApiMethod(name = "findAllVariable",desc = "查询变量")
    @ApiParam(name = "taskId",desc = "taskId",required = true)
    public Result< List<Variable>> findAllVariable(@NotNull String taskId){
        List<Variable> allVariable = variableServer.findAllVariable(taskId);
        return Result.ok(allVariable);
    }



}






























































