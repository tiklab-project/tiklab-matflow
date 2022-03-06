package com.doublekit.pipeline.config;


import com.doublekit.apibox.client.annotation.EnableApiboxClient;
import com.doublekit.beans.starter.annotation.EnableBeans;
import com.doublekit.dal.starter.annotation.EnableDal;
import com.doublekit.datafly.annotation.DataFly;
import com.doublekit.datafly.starter.annotation.EnableDataFly;
import com.doublekit.dcs.starter.annotation.EnableDcs;
import com.doublekit.dfs.starter.annotation.EnableDfs;
import com.doublekit.join.starter.annotation.EnableJoin;
import com.doublekit.dss.starter.annotation.EnableDss;
import com.doublekit.eam.server.annotation.EnableEamServer;
import com.doublekit.eam.client.annotation.EnableEamClient;
import com.doublekit.message.annotation.EnableMessage;
import com.doublekit.privilege.annotation.EnablePrivilegeServer;
import com.doublekit.rpc.starter.annotation.EnableRpc;
import com.doublekit.toolkit.annotation.EnableToolkitServer;
import com.doublekit.user.annotation.EnableUserServer;
import com.doublekit.web.starter.annotation.EnableWeb;
import com.doublekit.pipeline.annotation.EnablePipelineServer;
import org.springframework.context.annotation.Configuration;

@Configuration
//platform
@EnableBeans
@EnableWeb
@EnableDal
@EnableJoin
@EnableDfs
@EnableDcs
@EnableDss
// @DataFly(modules = {
//         "user"
// })
// @EnableMessage
//@EnableDataFly
@EnableRpc
//pcs
// @EnableUserServer
// @EnableEamServer
// @EnableEamClient
// @EnablePrivilegeServer
// @EnableToolkitServer
//other
@EnablePipelineServer
@EnableApiboxClient
public class PipelineAutoConfiguration {
}
