(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{244:function(e,a,t){"use strict";t.r(a),function(e){var i,l=t(0),n=t.n(l),o=t(766),r=t(2),m=t(788),u=t(789),c=t(790),s=t(791),d=t(792),N=(t(793),t(22)),b=t(13),p="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js";function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var a=e.homePageStore,t=e.pipelineStore,i=a.findAllOpen,N=a.pipelineNearList,b=a.runState,_=a.findLog,v=a.dynamicList,y=a.findTask,L=a.taskList,g=t.findAllFollow,h=t.findAllPipelineStatus,E=t.pipelineLength,H=t.followLength,k=t.setListType,G=Object(r.e)().userId;Object(l.useEffect)((function(){var e={userId:G,page:1,pageSize:10};h(G),g(G),_(e),i(G),y(G),b(G).then((function(e){0===e.code&&e.data&&w(e.data)}))}),[]);var w=function(e){for(var a=[],t=[],i=[],l=[],n=0;n<e.length;n++)a.push(e[n].time),t.push(e[n].successNumber),i.push(e[n].errorNumber),l.push(e[n].removeNumber);j(a,t,i,l)},j=function(e,a,t,i){var l,n=o.a.init(document.getElementById("burn-down"));l={color:["#1890ff","#e5323e","#222222"],xAxis:{data:e},yAxis:{name:"单位：次",type:"value",interval:1,min:1},legend:{data:["成功","失败","停止"],show:!0,selectedMode:!0,top:0,width:"80%",right:0},series:[{name:"成功",type:"bar",seriesLayoutBy:"column",data:a},{name:"失败",type:"bar",data:t},{name:"停止",type:"bar",data:i}]},n.setOption(l),window.onresize=function(){n.resize()}};return n.a.createElement("div",{className:"homePage home-limited",__source:{fileName:p,lineNumber:114,columnNumber:9}},n.a.createElement("div",{className:"homePage-content",__source:{fileName:p,lineNumber:115,columnNumber:13}},n.a.createElement("div",{className:"homePage-content-left",__source:{fileName:p,lineNumber:116,columnNumber:17}},n.a.createElement(c.a,f({},e,{setListType:k,pipelineLength:E,followLength:H,__source:{fileName:p,lineNumber:117,columnNumber:21}})),n.a.createElement(u.a,f({},e,{pipelineNearList:N,__source:{fileName:p,lineNumber:123,columnNumber:21}})),n.a.createElement(s.a,f({},e,{taskList:L,__source:{fileName:p,lineNumber:127,columnNumber:21}})),n.a.createElement(m.a,f({},e,{dynamicList:v,__source:{fileName:p,lineNumber:131,columnNumber:21}}))),n.a.createElement("div",{className:"homePage-content-left",__source:{fileName:p,lineNumber:136,columnNumber:17}},n.a.createElement("div",{className:"statusChart",__source:{fileName:p,lineNumber:137,columnNumber:21}},n.a.createElement("div",{className:"statusChart-title",__source:{fileName:p,lineNumber:138,columnNumber:25}},"近期构建状态"),n.a.createElement("div",{className:"statusChart-box",id:"burn-down",__source:{fileName:p,lineNumber:139,columnNumber:25}})),n.a.createElement(d.a,{__source:{fileName:p,lineNumber:141,columnNumber:21}}))))};_(v,"useEffect{}");var y,L,g=Object(N.g)(Object(b.b)("homePageStore","pipelineStore")(Object(b.c)(v)));a.default=g,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(v,"HomePage","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js"),y.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}.call(this,t(23)(e))},788:function(e,a,t){"use strict";(function(e){var i,l=t(0),n=t.n(l),o=t(972),r="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicList.js";(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,u,c=function(e){var a=e.dynamicList;return n.a.createElement("div",{className:"dynamic",__source:{fileName:r,lineNumber:28,columnNumber:9}},n.a.createElement("div",{className:"dynamic-top",__source:{fileName:r,lineNumber:29,columnNumber:13}},n.a.createElement("div",{className:"dynamic-top-title",__source:{fileName:r,lineNumber:30,columnNumber:17}},"近期动态"),n.a.createElement("div",{className:"dynamic-top-ac",__source:{fileName:r,lineNumber:33,columnNumber:17}},n.a.createElement("span",{onClick:function(){e.history.push("/index/system/myLog")},__source:{fileName:r,lineNumber:34,columnNumber:21}},"更多..."))),n.a.createElement("div",{className:"dynamic-bottom",__source:{fileName:r,lineNumber:39,columnNumber:13}},a&&a.map((function(a,t){return n.a.createElement("div",{className:"dynamic-item",key:t,__source:{fileName:r,lineNumber:43,columnNumber:29}},n.a.createElement("div",{className:"dynamic-item-left",__source:{fileName:r,lineNumber:44,columnNumber:33}},n.a.createElement("div",{className:"dynamic-item-icon",__source:{fileName:r,lineNumber:45,columnNumber:37}},n.a.createElement(o.a,{__source:{fileName:r,lineNumber:46,columnNumber:41}})),n.a.createElement("div",{__source:{fileName:r,lineNumber:48,columnNumber:37}},n.a.createElement("div",{className:"dynamic-item-userName",__source:{fileName:r,lineNumber:49,columnNumber:41}},a.userName),n.a.createElement("div",{className:"dynamic-item-message",__source:{fileName:r,lineNumber:52,columnNumber:41}},n.a.createElement("span",{__source:{fileName:r,lineNumber:53,columnNumber:45}},function(e){switch(e){case"delete":return"删除";case"update":return"更新";case"create":return"创建"}}(a.type),"了流水线"),"pipeline"===a.templateType&&"delete"===a.type?n.a.createElement("span",{className:"pipelineName",__source:{fileName:r,lineNumber:56,columnNumber:49}},a.pipelineName):n.a.createElement("span",{className:"pipelineName dynamic-item-pipelineName",onClick:function(){return function(a){e.history.push("/index/task/".concat(a.pipelineId,"/config"))}(a)},__source:{fileName:r,lineNumber:60,columnNumber:49}},a.pipelineName),n.a.createElement("span",{__source:{fileName:r,lineNumber:67,columnNumber:45}},a.message)))),n.a.createElement("div",{__source:{fileName:r,lineNumber:71,columnNumber:33}},a.createTime))}))))},s=c;a.a=s,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(c,"DynamicList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicList.js"),m.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicList.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,t(23)(e))},789:function(e,a,t){"use strict";(function(e){var i,l=t(0),n=t.n(l),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js";(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,m,u=function(e){var a=e.pipelineNearList;return n.a.createElement("div",{className:"pipelineNear",__source:{fileName:o,lineNumber:12,columnNumber:12}},n.a.createElement("div",{className:"pipelineNear-title",__source:{fileName:o,lineNumber:13,columnNumber:9}},"最近访问的流水线"),n.a.createElement("div",{className:"pipelineNear-bottom",__source:{fileName:o,lineNumber:14,columnNumber:9}},a&&a.map((function(a){return n.a.createElement("div",{onClick:function(){return t=a.pipelineId,void e.history.push("/index/task/".concat(t,"/work"));var t},className:"pipelineNear-bottom-list",key:a.pipelineId,__source:{fileName:o,lineNumber:18,columnNumber:25}},n.a.createElement("div",{className:"pipelineNear-item",__source:{fileName:o,lineNumber:23,columnNumber:29}},n.a.createElement("div",{__source:{fileName:o,lineNumber:24,columnNumber:33}},n.a.createElement("span",{className:"pipelineNear-item-icon",__source:{fileName:o,lineNumber:25,columnNumber:37}},"U"),n.a.createElement("span",{className:"pipelineNear-item-pipelineName",__source:{fileName:o,lineNumber:28,columnNumber:37}},a.pipelineName)),n.a.createElement("div",{__source:{fileName:o,lineNumber:32,columnNumber:33}},a.pipeline.pipelineCreateTime)))}))))},c=u;a.a=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(u,"PipelineNear","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js"),r.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(23)(e))},790:function(e,a,t){"use strict";(function(e){var i,l=t(0),n=t.n(l),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js";(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,m,u=function(e){var a,t=e.pipelineLength,i=e.followLength,l=e.setListType,r=[{id:1,title:"我的流水线",icon:"#icon-renwu",listLength:t},{id:2,title:"我的收藏",icon:"#icon-icon-test",listLength:i}];return n.a.createElement("div",{className:"quickIn",__source:{fileName:o,lineNumber:55,columnNumber:13}},(a=r)&&a.map((function(a){return n.a.createElement("div",{key:a.id,className:"quickIn-group",onClick:function(){return t=a.id,l(t),void e.history.push("/index/pipeline");var t},__source:{fileName:o,lineNumber:32,columnNumber:17}},n.a.createElement("div",{className:"quickIn-group-wrap",__source:{fileName:o,lineNumber:37,columnNumber:21}},n.a.createElement("div",{className:"quickIn-group-wrap-title",__source:{fileName:o,lineNumber:38,columnNumber:25}},n.a.createElement("span",{className:"quickIn-group-icon",__source:{fileName:o,lineNumber:39,columnNumber:29}},n.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:o,lineNumber:40,columnNumber:33}},n.a.createElement("use",{xlinkHref:"".concat(a.icon),__source:{fileName:o,lineNumber:41,columnNumber:37}}))),n.a.createElement("span",{__source:{fileName:o,lineNumber:44,columnNumber:29}},a.title)),n.a.createElement("div",{className:"quickIn-group-wrap-number",__source:{fileName:o,lineNumber:46,columnNumber:25}},a.listLength)))})))},c=u;a.a=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(u,"QuickIn","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js"),r.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(23)(e))},791:function(e,a,t){"use strict";(function(e){var i,l=t(0),n=t.n(l),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js";(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,m,u=function(e){var a=e.taskList;return n.a.createElement("div",{className:"agency",__source:{fileName:o,lineNumber:9,columnNumber:9}},n.a.createElement("div",{className:"agency-top",__source:{fileName:o,lineNumber:10,columnNumber:13}},n.a.createElement("div",{className:"agency-top-title",__source:{fileName:o,lineNumber:11,columnNumber:17}},"我的待办"),n.a.createElement("div",{className:"agency-top-ac",onClick:function(){return e.history.push("/index/system/myTodoTask")},__source:{fileName:o,lineNumber:12,columnNumber:17}},"更多...")),n.a.createElement("div",{className:"agency-bottom",__source:{fileName:o,lineNumber:19,columnNumber:13}},a&&a.map((function(e,a){return n.a.createElement("div",{key:a,__source:{fileName:o,lineNumber:23,columnNumber:29}})}))))},c=u;a.a=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(u,"Agency","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js"),r.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(23)(e))},792:function(e,a,t){"use strict";(function(e){var i,l=t(0),n=t.n(l),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\tidings.js";(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,m,u=function(e){return n.a.createElement("div",{className:"tidings",__source:{fileName:o,lineNumber:5,columnNumber:9}},n.a.createElement("div",{className:"tidings-top",__source:{fileName:o,lineNumber:6,columnNumber:13}},n.a.createElement("div",{className:"tidings-top-title",__source:{fileName:o,lineNumber:7,columnNumber:17}},"我的消息"),n.a.createElement("div",{className:"tidings-top-ac",__source:{fileName:o,lineNumber:8,columnNumber:17}},"更多...")),n.a.createElement("div",{__source:{fileName:o,lineNumber:10,columnNumber:13}}))},c=u;a.a=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(u,"Tidings","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\tidings.js"),r.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\tidings.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(23)(e))},793:function(e,a,t){}}]);