(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{279:function(e,a,t){"use strict";t.r(a),function(e){var l,n=t(0),i=t.n(n),o=t(26),r=t(15),m=t(847),u=t(848),c=(t(666),t(849),t(667)),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js";function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},N=function(e){var a=e.homePageStore,t=e.pipelineStore,l=a.findAllOpen,o=a.pipelineNearList,r=a.findlogpage,f=(a.taskList,a.findtodopage),N=a.dynamicList,b=t.findAllPipelineStatus,p=t.pipelineList,_=t.findAllFollow,y=t.pipelineLength,v=t.followLength,L=t.setListType;Object(n.useEffect)((function(){b().then((function(e){if(0===e.code){var a={pageParam:{pageSize:10,currentPage:1},bgroup:"matflow",content:{pipelineId:g(e.data)}};r(a)}})),_(),l(),f()}),[]);var g=function(e){var a=[];return e&&e.map((function(e){a.push(e.pipelineId)})),a};return i.a.createElement("div",{className:"homePage",__source:{fileName:s,lineNumber:58,columnNumber:9}},i.a.createElement("div",{className:"homePage-content home-limited",__source:{fileName:s,lineNumber:59,columnNumber:13}},i.a.createElement(u.a,d({},e,{setListType:L,pipelineLength:y,followLength:v,__source:{fileName:s,lineNumber:60,columnNumber:17}})),i.a.createElement(m.a,d({},e,{pipelineNearList:o,__source:{fileName:s,lineNumber:66,columnNumber:17}})),i.a.createElement(c.a,{dynamicList:N,title:"近期动态",pipelineId:g(p),__source:{fileName:s,lineNumber:75,columnNumber:17}})))};f(N,"useEffect{}");var b,p,_=Object(o.g)(Object(r.b)("homePageStore","pipelineStore")(Object(r.c)(N)));a.default=_,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(N,"HomePage","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js"),b.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,t(24)(e))},410:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,m,u=function(e){var a=e.title;return i.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:o,lineNumber:7,columnNumber:13}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:o,lineNumber:8,columnNumber:17}},i.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:o,lineNumber:9,columnNumber:21}})),i.a.createElement("div",{__source:{fileName:o,lineNumber:11,columnNumber:17}},a||"没有查询到数据"))},c=u;a.a=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(u,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js"),r.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(24)(e))},532:function(e,a,t){"use strict";(function(e){t(25);var l,n=t(7),i=t(0),o=t.n(i),r=(t(533),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\list\\listname.js");(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,u,c=function(e){e.isImg;var a=e.text,t=e.onClick,l=e.colors;return o.a.createElement("span",{className:"mf-listname ".concat(t?"mf-listname-href":""),onClick:t,__source:{fileName:r,lineNumber:9,columnNumber:13}},o.a.createElement(n.b,{__source:{fileName:r,lineNumber:13,columnNumber:17}},o.a.createElement("span",{className:"mf-listname-icon ".concat(l?"mf-icon-".concat(l):"mf-icon-2"),__source:{fileName:r,lineNumber:22,columnNumber:21}},a&&a.substring(0,1).toUpperCase()),o.a.createElement("span",{className:"".concat(t?"mf-listname-name":""),__source:{fileName:r,lineNumber:25,columnNumber:21}},a)))},s=c;a.a=s,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(c,"Listname","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\list\\listname.js"),m.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\list\\listname.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,t(24)(e))},533:function(e,a,t){},548:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),o=t(26),r=t(711),m=(t(598),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js");(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,c,s=function(e){var a=e.title,t=e.type,l=e.icon,n=e.pipelineId;return i.a.createElement("div",{className:"mf-guide",__source:{fileName:m,lineNumber:24,columnNumber:9}},i.a.createElement("div",{className:"mf-guide-title",__source:{fileName:m,lineNumber:25,columnNumber:13}},i.a.createElement("span",{className:"mf-guide-title-icon",__source:{fileName:m,lineNumber:26,columnNumber:17}},l&&l),i.a.createElement("span",{className:"mf-guide-title-name",__source:{fileName:m,lineNumber:29,columnNumber:17}},a)),t&&i.a.createElement("div",{className:"mf-guide-ac",__source:{fileName:m,lineNumber:35,columnNumber:21}},i.a.createElement("span",{onClick:function(){return function(a){switch(a){case"我的待办":e.history.push("/index/agency");break;case"近期动态":e.history.push("/index/dyna");break;case"流水线动态":e.history.push("/index/task/".concat(n,"/dyna"))}}(a)},__source:{fileName:m,lineNumber:36,columnNumber:25}},i.a.createElement(r.a,{__source:{fileName:m,lineNumber:37,columnNumber:29}}))))},d=Object(o.g)(s);a.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"Guide","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js"),u.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(24)(e))},549:function(e,a,t){"use strict";(function(e){t(25);var l,n=t(7),i=(t(41),t(30)),o=t(0),r=t.n(o),m=t(26),u=(t(558),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js");(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,d=function(e){var a=e.dynamicList,t=e.pipelineId,l=function(e){var a=e.split("/");return t&&t.some((function(e){return e===a[3]}))},o=function(a,t){return r.a.createElement("div",{key:t,className:"dynamic-item",onClick:function(){return function(a){l(a.opLogTemplate.link)&&e.history.push(a.opLogTemplate.link)}(a)},__source:{fileName:u,lineNumber:24,columnNumber:16}},r.a.createElement("div",{className:"dynamic-item-left",__source:{fileName:u,lineNumber:28,columnNumber:13}},r.a.createElement(n.b,{__source:{fileName:u,lineNumber:29,columnNumber:17}},r.a.createElement(i.a,{userInfo:a.user,__source:{fileName:u,lineNumber:30,columnNumber:21}}),r.a.createElement("div",{className:"dynamic-item-message",__source:{fileName:u,lineNumber:31,columnNumber:21}},r.a.createElement("div",{className:"dynamic-item-message-title",__source:{fileName:u,lineNumber:32,columnNumber:25}},a.opLogTemplate.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.opLogTemplate.content},__source:{fileName:u,lineNumber:35,columnNumber:25}})))),r.a.createElement("div",{__source:{fileName:u,lineNumber:41,columnNumber:13}},a.timestamp))};return r.a.createElement("div",{className:"dynamic-center",__source:{fileName:u,lineNumber:46,columnNumber:9}},a&&a.map((function(e,a){return o(e,a)})))},f=Object(m.g)(d);a.a=f,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(d,"DynaList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js"),c.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,t(24)(e))},558:function(e,a,t){},598:function(e,a,t){},666:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),o=t(1064),r=t(1074),m=t(1075),u=t(824),c=t(548),s=t(410),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var f,N,b=function(e){var a=e.taskList,t=e.isHome,l=function(e,a){return i.a.createElement("div",{key:a,className:"agency-bottom-list",__source:{fileName:d,lineNumber:47,columnNumber:16}},i.a.createElement("div",{className:"agency-item",__source:{fileName:d,lineNumber:48,columnNumber:13}},i.a.createElement("div",{className:"agency-item-title",__source:{fileName:d,lineNumber:49,columnNumber:17}},i.a.createElement("span",{className:"title-icon",__source:{fileName:d,lineNumber:50,columnNumber:21}},i.a.createElement(m.a,{__source:{fileName:d,lineNumber:51,columnNumber:25}})),i.a.createElement("span",{className:"title-name",__source:{fileName:d,lineNumber:53,columnNumber:21}},e.title)),function(e){return i.a.createElement("div",{className:"agency-item-user",__source:{fileName:d,lineNumber:20,columnNumber:13}},i.a.createElement("span",{__source:{fileName:d,lineNumber:21,columnNumber:17}},i.a.createElement(o.a,{__source:{fileName:d,lineNumber:22,columnNumber:21}})),i.a.createElement("span",{className:"user-create createUser",__source:{fileName:d,lineNumber:24,columnNumber:17}},e.createUser.name),i.a.createElement("span",{className:"user-arrow",__source:{fileName:d,lineNumber:27,columnNumber:17}},i.a.createElement(r.a,{__source:{fileName:d,lineNumber:28,columnNumber:21}})),i.a.createElement("span",{__source:{fileName:d,lineNumber:30,columnNumber:17}},i.a.createElement(o.a,{__source:{fileName:d,lineNumber:31,columnNumber:21}})),i.a.createElement("span",{className:"user-create execUser",__source:{fileName:d,lineNumber:33,columnNumber:17}},e.assignUser.name))}(e),function(e){return i.a.createElement("div",{className:"agency-item-state state-".concat(e.status),__source:{fileName:d,lineNumber:41,columnNumber:17}},function(e){switch(e){case 1:return"进行中";case 2:return"已完成";case 3:return"逾期"}}(e.status))}(e),i.a.createElement("div",{className:"agency-item-time",__source:{fileName:d,lineNumber:59,columnNumber:17}},e.endTime)))};return i.a.createElement("div",{className:"agency",__source:{fileName:d,lineNumber:67,columnNumber:9}},t&&i.a.createElement(c.a,{title:"我的待办",type:"agency",icon:i.a.createElement(u.a,{__source:{fileName:d,lineNumber:73,columnNumber:27}}),__source:{fileName:d,lineNumber:70,columnNumber:17}}),i.a.createElement("div",{className:"agency-bottom",__source:{fileName:d,lineNumber:76,columnNumber:13}},a&&a.length>0?a&&a.map((function(e,a){return l(e,a)})):i.a.createElement("div",{className:"homePage-empty",__source:{fileName:d,lineNumber:83,columnNumber:25}},i.a.createElement(s.a,{title:"暂无代办任务",__source:{fileName:d,lineNumber:84,columnNumber:29}}))))},p=b;a.a=p,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(b,"Agency","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js"),f.register(p,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}).call(this,t(24)(e))},667:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),o=t(1076),r=(t(668),t(549)),m=t(548),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\dynaLatest\\dynaLatest.js";function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,d,f=function(e){var a=e.dynamicList,t=e.pipelineId,l=e.title;return i.a.createElement("div",{className:"dynaLatest",__source:{fileName:u,lineNumber:13,columnNumber:9}},i.a.createElement(m.a,{title:l,icon:i.a.createElement(o.a,{__source:{fileName:u,lineNumber:16,columnNumber:23}}),type:"dynamic",pipelineId:t[0],__source:{fileName:u,lineNumber:14,columnNumber:13}}),i.a.createElement(r.a,c({},e,{dynamicList:a,pipelineId:t,__source:{fileName:u,lineNumber:20,columnNumber:13}})))},N=f;a.a=N,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(f,"DynaLatest","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\dynaLatest\\dynaLatest.js"),s.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\dynaLatest\\dynaLatest.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,t(24)(e))},668:function(e,a,t){},847:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),o=t(1073),r=t(548),m=t(532),u=t(410),c="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,d,f=function(e){var a=e.pipelineNearList,t=function(a){return i.a.createElement("div",{className:"pipelineNear-item",key:a.pipelineId,__source:{fileName:c,lineNumber:17,columnNumber:17}},i.a.createElement("div",{className:"pipelineNear-item-title",__source:{fileName:c,lineNumber:18,columnNumber:13}},i.a.createElement(m.a,{text:a.pipelineName,onClick:function(){return t=a.pipelineId,void e.history.push("/index/task/".concat(t,"/survey"));var t},colors:a.pipeline.color,isImg:"isImg",__source:{fileName:c,lineNumber:19,columnNumber:17}})),i.a.createElement("div",{__source:{fileName:c,lineNumber:26,columnNumber:13}},a.pipeline.pipelineCreateTime))};return i.a.createElement("div",{className:"pipelineNear",__source:{fileName:c,lineNumber:30,columnNumber:12}},i.a.createElement(r.a,{title:"最近访问的流水线",icon:i.a.createElement(o.a,{__source:{fileName:c,lineNumber:33,columnNumber:19}}),__source:{fileName:c,lineNumber:31,columnNumber:9}}),i.a.createElement("div",{className:"pipelineNear-bottom",__source:{fileName:c,lineNumber:35,columnNumber:9}},a&&a.length>0?a&&a.map((function(e){return t(e)})):i.a.createElement("div",{className:"homePage-empty",__source:{fileName:c,lineNumber:42,columnNumber:21}},i.a.createElement(u.a,{title:"最近没有访问记录",__source:{fileName:c,lineNumber:43,columnNumber:25}}))))},N=f;a.a=N,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(f,"PipelineNear","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js"),s.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,t(24)(e))},848:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,m,u=function(e){var a,t=e.pipelineLength,l=e.followLength,n=e.setListType,r=[{id:1,title:"我的流水线",icon:"#icon-renwu",listLength:t},{id:2,title:"我的收藏",icon:"#icon-icon-test",listLength:l}];return i.a.createElement("div",{className:"quickIn",__source:{fileName:o,lineNumber:55,columnNumber:9}},(a=r)&&a.map((function(a){return i.a.createElement("div",{key:a.id,className:"quickIn-group",onClick:function(){return t=a.id,n(t),void e.history.push("/index/pipeline");var t},__source:{fileName:o,lineNumber:32,columnNumber:17}},i.a.createElement("div",{className:"quickIn-group-wrap",__source:{fileName:o,lineNumber:36,columnNumber:21}},i.a.createElement("div",{className:"quickIn-group-title",__source:{fileName:o,lineNumber:37,columnNumber:25}},i.a.createElement("span",{className:"quickIn-group-icon",__source:{fileName:o,lineNumber:38,columnNumber:29}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:o,lineNumber:39,columnNumber:33}},i.a.createElement("use",{xlinkHref:"".concat(a.icon),__source:{fileName:o,lineNumber:40,columnNumber:37}}))),i.a.createElement("span",{__source:{fileName:o,lineNumber:43,columnNumber:29}},a.title)),i.a.createElement("div",{className:"quickIn-group-number",__source:{fileName:o,lineNumber:45,columnNumber:25}},a.listLength)))})))},c=u;a.a=c,(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(u,"QuickIn","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js"),r.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(24)(e))},849:function(e,a,t){}}]);