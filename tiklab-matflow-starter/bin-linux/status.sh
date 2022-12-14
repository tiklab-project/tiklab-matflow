#!/bin/sh


#if [ ! -n "$JAVA_HOME" ]; then
#    export JAVA_HOME="/usr/local/jdk-16.0.2"
#fi

JDK_HOME=$(dirname "$PWD")
JAVA_HOME=${JDK_HOME}/jdk-16.0.2

APP_MAIN="com.tiklab.matflow.MatFlowApplication"

PID=0
getPID(){
    javaps=`$JAVA_HOME/bin/jps -l | grep $APP_MAIN`
    if [ -n "$javaps" ]; then
        PID=`echo $javaps | awk '{print $1}'`
    else
        PID=0
    fi
}

status(){
    getPID
    echo "================================================================================================================"
    if [ $PID -ne 0 ]; then
        echo "$APP_MAIN is running(PID=$PID)"
        echo "================================================================================================================"
    else
        echo "$APP_MAIN is not running"
        echo "================================================================================================================"
    fi
}

status