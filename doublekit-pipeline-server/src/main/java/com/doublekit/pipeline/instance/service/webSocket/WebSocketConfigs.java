package com.doublekit.pipeline.instance.service.webSocket;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


/**
 * websocket
 * 的配置信息
 */
@Configuration
@EnableWebSocket
public class WebSocketConfigs implements WebSocketConfigurer {

    /**
     * 注册handle
     */
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
//        registry.addHandler(myHandler(), "/ws").addInterceptors(new WebSocketInterceptor()).setAllowedOrigins("*");
        registry.addHandler(handler(), "/start").addInterceptors().setAllowedOrigins("*");

    }

    @Bean
    public WebSocketHandler handler(){
        return new WebSocketServer();
    }
}