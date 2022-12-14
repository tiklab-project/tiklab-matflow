package com.tiklab.matflow;



import com.tiklab.dsm.annotation.SQL;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@SQL(modules = {"DDL-matFlow","project-matflow","source-matflow"})
@ComponentScan({"com.tiklab.matflow"})
public class MatFlowServerAutoConfiguration {

    private static Logger logger = LoggerFactory.getLogger(MatFlowServerAutoConfiguration.class);
}
