(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{415:function(e,a,t){"use strict";t(39);var m=t(15),r=t(0),n=t.n(r),i=t(283),l="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js";a.a=function(e){var a=e.firstItem,t=e.secondItem,r=e.goBack;return n.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:l,lineNumber:10,columnNumber:13}},n.a.createElement(m.b,{__source:{fileName:l,lineNumber:11,columnNumber:17}},r&&n.a.createElement(i.a,{onClick:r,style:{color:"#0063FF"},__source:{fileName:l,lineNumber:12,columnNumber:32}}),n.a.createElement("span",{className:t?"breadcrumbContent-span":"",__source:{fileName:l,lineNumber:13,columnNumber:21}},a),t&&n.a.createElement("span",{__source:{fileName:l,lineNumber:16,columnNumber:36}}," /   ",t)))}},819:function(e,a,t){"use strict";t.r(a);var m=t(0),r=t.n(m),n=t(31),i=t(415),l="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\modules\\resources\\envi\\container\\info.js";a.default=Object(n.b)("enviStore")(Object(n.c)((function(e){var a=e.enviStore,t=a.getSystemMessage,n=a.infoList;Object(m.useEffect)((function(){t()}),[]);var c=[{title:"工作空间",data:n&&n.workspace},{title:"系统版本",data:n&&n.osName},{title:"用户名",data:n&&n.userName},{title:"Java版本",data:n&&n.javaVersion},{title:"Java位置",data:n&&n.javaHome},{title:"IP地址",data:n&&n.ip},{title:"应用地址",data:n&&n.userDir}];return r.a.createElement("div",{className:"info mf-home-limited mf",__source:{fileName:l,lineNumber:50,columnNumber:9}},r.a.createElement(i.a,{firstItem:"系统信息",__source:{fileName:l,lineNumber:51,columnNumber:13}}),r.a.createElement("div",{className:"info-content",__source:{fileName:l,lineNumber:52,columnNumber:13}},c&&c.map((function(e){return r.a.createElement("div",{className:"info-list",key:e.title,__source:{fileName:l,lineNumber:55,columnNumber:33}},r.a.createElement("div",{className:"info-title",__source:{fileName:l,lineNumber:56,columnNumber:37}},e.title),r.a.createElement("div",{__source:{fileName:l,lineNumber:57,columnNumber:37}},e.data))}))))})))}}]);