package com.tiklab.matflow.setting.other.service;

import com.tiklab.matflow.setting.other.model.SystemMassage;

import java.util.List;

public interface SystemMassageService {

    /**
     * 系统信息
     * @return 系统信息
     */
    SystemMassage getSystemMassage();

    ///**
    // * 读取日志信息
    // * @return 系统日志
    // */
    //List<String> getSystemLog();

}
