(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{373:function(e,a,t){"use strict";t.r(a),function(e){var l,n=t(0),i=t.n(n),r=t(41),o=t(32),m=(t(848),t(849)),u=(t(691),t(850),t(692)),c=t(851),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js";function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var a=e.homePageStore,t=e.pipelineStore,l=a.findAllOpen,r=a.pipelineNearList,o=a.findlogpage,N=a.findtodopage,f=a.dynamicList,b=t.findAllPipelineStatus,p=t.pipelineList,_=t.findAllFollow,v=t.pipelineLength,g=t.followLength,y=t.setListType;Object(n.useEffect)((function(){b().then((function(e){if(0===e.code){var a={pageParam:{pageSize:10,currentPage:1},bgroup:"matflow",content:{pipelineId:L(e.data)}};o(a)}})),_(),l(),N()}),[]);var L=function(e){var a=[];return e&&e.map((function(e){a.push(e.pipelineId)})),a};return i.a.createElement("div",{className:"homePage",__source:{fileName:s,lineNumber:57,columnNumber:9}},i.a.createElement("div",{className:"homePage-content home-limited",__source:{fileName:s,lineNumber:58,columnNumber:13}},i.a.createElement(m.a,d({},e,{setListType:y,pipelineLength:v,followLength:g,__source:{fileName:s,lineNumber:59,columnNumber:17}})),i.a.createElement(c.a,d({},e,{pipelineNearList:r,__source:{fileName:s,lineNumber:65,columnNumber:17}})),i.a.createElement(u.a,{dynamicList:f,title:"近期动态",pipelineId:L(p),__source:{fileName:s,lineNumber:79,columnNumber:17}})))};N(f,"useEffect{}");var b,p,_=Object(r.g)(Object(o.b)("homePageStore","pipelineStore")(Object(o.c)(f)));a.default=_,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"HomePage","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js"),b.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\container\\homePage.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,t(42)(e))},477:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),r="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,m,u=function(e){var a=e.title;return i.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:r,lineNumber:7,columnNumber:13}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:r,lineNumber:8,columnNumber:17}},i.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:r,lineNumber:9,columnNumber:21}})),i.a.createElement("div",{__source:{fileName:r,lineNumber:11,columnNumber:17}},a||"没有查询到数据"))},c=u;a.a=c,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(u,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js"),o.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(42)(e))},586:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),r=t(41),o=t(731),m=(t(641),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js");(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,c,s=function(e){var a=e.title,t=e.type,l=e.icon,n=e.pipelineId;return i.a.createElement("div",{className:"mf-guide",__source:{fileName:m,lineNumber:24,columnNumber:9}},i.a.createElement("div",{className:"mf-guide-title",__source:{fileName:m,lineNumber:25,columnNumber:13}},i.a.createElement("span",{className:"mf-guide-title-icon",__source:{fileName:m,lineNumber:26,columnNumber:17}},l&&l),i.a.createElement("span",{className:"mf-guide-title-name",__source:{fileName:m,lineNumber:29,columnNumber:17}},a)),t&&i.a.createElement("div",{className:"mf-guide-ac",__source:{fileName:m,lineNumber:35,columnNumber:21}},i.a.createElement("span",{onClick:function(){return function(a){switch(a){case"我的待办":e.history.push("/index/agency");break;case"近期动态":e.history.push("/index/dyna");break;case"流水线动态":e.history.push("/index/task/".concat(n,"/dyna"))}}(a)},__source:{fileName:m,lineNumber:36,columnNumber:25}},i.a.createElement(o.a,{__source:{fileName:m,lineNumber:37,columnNumber:29}}))))},d=Object(r.g)(s);a.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"Guide","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js"),u.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(42)(e))},587:function(e,a,t){"use strict";(function(e){t(46);var l,n=t(24),i=t(0),r=t.n(i),o=(t(588),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\list\\listname.js");(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,u,c=function(e){e.isImg;var a=e.text,t=e.onClick,l=e.colors;return r.a.createElement("span",{className:"mf-listname ".concat(t?"mf-listname-href":""),onClick:t,__source:{fileName:o,lineNumber:9,columnNumber:13}},r.a.createElement(n.b,{__source:{fileName:o,lineNumber:13,columnNumber:17}},r.a.createElement("span",{className:"mf-listname-icon ".concat(l?"mf-icon-".concat(l):"mf-icon-2"),__source:{fileName:o,lineNumber:14,columnNumber:21}},a&&a.substring(0,1).toUpperCase()),r.a.createElement("span",{className:"".concat(t?"mf-listname-name":"mf-listname-home"),__source:{fileName:o,lineNumber:17,columnNumber:21}},a)))},s=c;a.a=s,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(c,"Listname","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\list\\listname.js"),m.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\list\\listname.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,t(42)(e))},588:function(e,a,t){},601:function(e,a,t){"use strict";(function(e){t(46);var l,n=t(24),i=(t(113),t(65)),r=t(0),o=t.n(r),m=t(41),u=(t(607),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js");(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,d=function(e){var a=e.dynamicList,t=e.pipelineId,l=function(e){var a=e.split("/");return t&&t.some((function(e){return e===a[3]}))},r=function(a,t){return o.a.createElement("div",{key:t,className:"dynamic-item",onClick:function(){return function(a){l(a.opLogTemplate.link)&&e.history.push(a.opLogTemplate.link)}(a)},__source:{fileName:u,lineNumber:24,columnNumber:16}},o.a.createElement("div",{className:"dynamic-item-left",__source:{fileName:u,lineNumber:28,columnNumber:13}},o.a.createElement(n.b,{__source:{fileName:u,lineNumber:29,columnNumber:17}},o.a.createElement(i.a,{userInfo:a.user,__source:{fileName:u,lineNumber:30,columnNumber:21}}),o.a.createElement("div",{className:"dynamic-item-message",__source:{fileName:u,lineNumber:31,columnNumber:21}},o.a.createElement("div",{className:"dynamic-item-message-title",__source:{fileName:u,lineNumber:32,columnNumber:25}},a.opLogTemplate.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.opLogTemplate.content},__source:{fileName:u,lineNumber:35,columnNumber:25}})))),o.a.createElement("div",{__source:{fileName:u,lineNumber:41,columnNumber:13}},a.timestamp))};return o.a.createElement("div",{className:"dynamic-center",__source:{fileName:u,lineNumber:46,columnNumber:9}},a&&a.map((function(e,a){return r(e,a)})))},N=Object(m.g)(d);a.a=N,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(d,"DynaList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js"),c.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,t(42)(e))},607:function(e,a,t){},641:function(e,a,t){},691:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),r=t(1059),o=t(1069),m=t(1070),u=t(825),c=t(586),s=t(477),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var N,f,b=function(e){var a=e.taskList,t=e.isHome,l=function(e,a){return i.a.createElement("div",{key:a,className:"agency-bottom-list",__source:{fileName:d,lineNumber:47,columnNumber:16}},i.a.createElement("div",{className:"agency-item",__source:{fileName:d,lineNumber:48,columnNumber:13}},i.a.createElement("div",{className:"agency-item-title",__source:{fileName:d,lineNumber:49,columnNumber:17}},i.a.createElement("span",{className:"title-icon",__source:{fileName:d,lineNumber:50,columnNumber:21}},i.a.createElement(m.a,{__source:{fileName:d,lineNumber:51,columnNumber:25}})),i.a.createElement("span",{className:"title-name",__source:{fileName:d,lineNumber:53,columnNumber:21}},e.title)),function(e){return i.a.createElement("div",{className:"agency-item-user",__source:{fileName:d,lineNumber:20,columnNumber:13}},i.a.createElement("span",{__source:{fileName:d,lineNumber:21,columnNumber:17}},i.a.createElement(r.a,{__source:{fileName:d,lineNumber:22,columnNumber:21}})),i.a.createElement("span",{className:"user-create createUser",__source:{fileName:d,lineNumber:24,columnNumber:17}},e.createUser.name),i.a.createElement("span",{className:"user-arrow",__source:{fileName:d,lineNumber:27,columnNumber:17}},i.a.createElement(o.a,{__source:{fileName:d,lineNumber:28,columnNumber:21}})),i.a.createElement("span",{__source:{fileName:d,lineNumber:30,columnNumber:17}},i.a.createElement(r.a,{__source:{fileName:d,lineNumber:31,columnNumber:21}})),i.a.createElement("span",{className:"user-create execUser",__source:{fileName:d,lineNumber:33,columnNumber:17}},e.assignUser.name))}(e),function(e){return i.a.createElement("div",{className:"agency-item-state state-".concat(e.status),__source:{fileName:d,lineNumber:41,columnNumber:17}},function(e){switch(e){case 1:return"进行中";case 2:return"已完成";case 3:return"逾期"}}(e.status))}(e),i.a.createElement("div",{className:"agency-item-time",__source:{fileName:d,lineNumber:59,columnNumber:17}},e.endTime)))};return i.a.createElement("div",{className:"agency",__source:{fileName:d,lineNumber:67,columnNumber:9}},t&&i.a.createElement(c.a,{title:"我的待办",type:"agency",icon:i.a.createElement(u.a,{__source:{fileName:d,lineNumber:73,columnNumber:27}}),__source:{fileName:d,lineNumber:70,columnNumber:17}}),i.a.createElement("div",{className:"agency-bottom",__source:{fileName:d,lineNumber:76,columnNumber:13}},a&&a.length>0?a&&a.map((function(e,a){return l(e,a)})):i.a.createElement("div",{className:"homePage-empty",__source:{fileName:d,lineNumber:83,columnNumber:25}},i.a.createElement(s.a,{title:"暂无代办任务",__source:{fileName:d,lineNumber:84,columnNumber:29}}))))},p=b;a.a=p,(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(N.register(b,"Agency","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js"),N.register(p,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\agency.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,t(42)(e))},692:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),r=t(1071),o=(t(693),t(601)),m=t(586),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\dynaLatest\\dynaLatest.js";function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,d,N=function(e){var a=e.dynamicList,t=e.pipelineId,l=e.title;return i.a.createElement("div",{className:"dynaLatest",__source:{fileName:u,lineNumber:13,columnNumber:9}},i.a.createElement(m.a,{title:l,icon:i.a.createElement(r.a,{__source:{fileName:u,lineNumber:16,columnNumber:23}}),type:"dynamic",pipelineId:t[0],__source:{fileName:u,lineNumber:14,columnNumber:13}}),i.a.createElement(o.a,c({},e,{dynamicList:a,pipelineId:t,__source:{fileName:u,lineNumber:20,columnNumber:13}})))},f=N;a.a=f,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(N,"DynaLatest","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\dynaLatest\\dynaLatest.js"),s.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\dynaLatest\\dynaLatest.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,t(42)(e))},693:function(e,a,t){},694:function(e,a,t){"use strict";a.a=t.p+"images/success.svg"},695:function(e,a,t){"use strict";a.a=t.p+"images/error.svg"},696:function(e,a,t){"use strict";a.a=t.p+"images/fog.svg"},697:function(e,a,t){"use strict";a.a=t.p+"images/halt.svg"},848:function(e,a,t){"use strict";(function(e){var a,l=t(0),n=t.n(l),i=t(1068),r=t(586),o=t(587),m=t(477),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,d=function(e){var a=e.pipelineNearList,t=function(a){return n.a.createElement("div",{className:"pipelineNear-item",key:a.pipelineId,__source:{fileName:u,lineNumber:17,columnNumber:17}},n.a.createElement("div",{className:"pipelineNear-item-title",__source:{fileName:u,lineNumber:18,columnNumber:13}},n.a.createElement(o.a,{text:a.pipelineName,onClick:function(){return t=a.pipelineId,void e.history.push("/index/task/".concat(t,"/survey"));var t},colors:a.pipeline.color,isImg:"isImg",__source:{fileName:u,lineNumber:19,columnNumber:17}})),n.a.createElement("div",{__source:{fileName:u,lineNumber:26,columnNumber:13}},a.pipeline.pipelineCreateTime))};return n.a.createElement("div",{className:"pipelineNear",__source:{fileName:u,lineNumber:30,columnNumber:12}},n.a.createElement(r.a,{title:"最近访问的流水线",icon:n.a.createElement(i.a,{__source:{fileName:u,lineNumber:33,columnNumber:19}}),__source:{fileName:u,lineNumber:31,columnNumber:9}}),n.a.createElement("div",{className:"pipelineNear-bottom",__source:{fileName:u,lineNumber:35,columnNumber:9}},a&&a.length>0?a&&a.map((function(e){return t(e)})):n.a.createElement("div",{className:"homePage-empty",__source:{fileName:u,lineNumber:42,columnNumber:21}},n.a.createElement(m.a,{title:"最近没有访问记录",__source:{fileName:u,lineNumber:43,columnNumber:25}}))))},N=d;(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(d,"PipelineNear","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js"),c.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineNear.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,t(42)(e))},849:function(e,a,t){"use strict";(function(e){var l,n=t(0),i=t.n(n),r="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,m,u=function(e){var a,t=e.pipelineLength,l=e.followLength,n=e.setListType,o=[{id:1,title:"我的流水线",icon:"#icon-renwu",listLength:t},{id:2,title:"我的收藏",icon:"#icon-icon-test",listLength:l}];return i.a.createElement("div",{className:"quickIn",__source:{fileName:r,lineNumber:55,columnNumber:9}},(a=o)&&a.map((function(a){return i.a.createElement("div",{key:a.id,className:"quickIn-group",onClick:function(){return t=a.id,n(t),void e.history.push("/index/pipeline");var t},__source:{fileName:r,lineNumber:32,columnNumber:17}},i.a.createElement("div",{className:"quickIn-group-wrap",__source:{fileName:r,lineNumber:36,columnNumber:21}},i.a.createElement("div",{className:"quickIn-group-title",__source:{fileName:r,lineNumber:37,columnNumber:25}},i.a.createElement("span",{className:"quickIn-group-icon",__source:{fileName:r,lineNumber:38,columnNumber:29}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:r,lineNumber:39,columnNumber:33}},i.a.createElement("use",{xlinkHref:"".concat(a.icon),__source:{fileName:r,lineNumber:40,columnNumber:37}}))),i.a.createElement("span",{__source:{fileName:r,lineNumber:43,columnNumber:29}},a.title)),i.a.createElement("div",{className:"quickIn-group-number",__source:{fileName:r,lineNumber:45,columnNumber:25}},a.listLength)))})))},c=u;a.a=c,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(u,"QuickIn","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js"),o.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\quickIn.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(42)(e))},850:function(e,a,t){},851:function(e,a,t){"use strict";(function(e){t(46);var l,n=t(24),i=t(0),r=t.n(i),o=t(1068),m=t(586),u=(t(852),t(694)),c=t(695),s=t(696),d=t(697),N="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineRecent.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var f,b,p=function(e){var a=e.pipelineNearList,t=function(e){switch(e){case 10:return u.a;case 1:return c.a;case 0:return s.a;case 20:return d.a}},l=function(a){return r.a.createElement("div",{className:"pipelineRecent-item",key:a.pipelineId,onClick:function(){return t=a.pipelineId,void e.history.push("/index/task/".concat(t,"/survey"));var t},__source:{fileName:N,lineNumber:35,columnNumber:17}},r.a.createElement("div",{className:"pipelineRecent-item-title",__source:{fileName:N,lineNumber:38,columnNumber:13}},r.a.createElement(n.b,{__source:{fileName:N,lineNumber:39,columnNumber:17}},r.a.createElement("span",{className:"mf-icon-".concat(a.pipeline.color," pipelineRecent-icon"),__source:{fileName:N,lineNumber:40,columnNumber:21}},a.pipelineName.substring(0,1).toUpperCase()),r.a.createElement("span",{className:"pipelineRecent-name",__source:{fileName:N,lineNumber:43,columnNumber:21}},a.pipelineName))),r.a.createElement("div",{className:"pipelineRecent-item-details",__source:{fileName:N,lineNumber:48,columnNumber:13}},r.a.createElement("div",{className:"pipelineRecent-item-detail",__source:{fileName:N,lineNumber:49,columnNumber:17}},r.a.createElement("span",{__source:{fileName:N,lineNumber:50,columnNumber:21}},"状态"),r.a.createElement("span",{__source:{fileName:N,lineNumber:51,columnNumber:21}},r.a.createElement("img",{src:t(a.pipelineMassage.buildStatus),alt:"log",className:"detail-imgs",__source:{fileName:N,lineNumber:51,columnNumber:27}}))),r.a.createElement("div",{className:"pipelineRecent-item-detail",__source:{fileName:N,lineNumber:53,columnNumber:17}},r.a.createElement("span",{__source:{fileName:N,lineNumber:54,columnNumber:21}},"成功"),r.a.createElement("span",{__source:{fileName:N,lineNumber:55,columnNumber:21}},a.pipelineExecState.successNumber)),r.a.createElement("div",{className:"pipelineRecent-item-detail",__source:{fileName:N,lineNumber:57,columnNumber:17}},r.a.createElement("span",{__source:{fileName:N,lineNumber:58,columnNumber:21}},"失败"),r.a.createElement("span",{__source:{fileName:N,lineNumber:59,columnNumber:21}},a.pipelineExecState.errorNumber))))};return r.a.createElement("div",{className:"pipelineRecent",__source:{fileName:N,lineNumber:67,columnNumber:9}},r.a.createElement(m.a,{title:"最近访问的流水线",icon:r.a.createElement(o.a,{__source:{fileName:N,lineNumber:70,columnNumber:23}}),__source:{fileName:N,lineNumber:68,columnNumber:13}}),r.a.createElement("div",{className:"pipelineRecent-content",__source:{fileName:N,lineNumber:72,columnNumber:13}},a&&a.map((function(e){return l(e)}))))},_=p;a.a=_,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(p,"PipelineRecent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineRecent.js"),f.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\pipelineRecent.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,t(42)(e))},852:function(e,a,t){}}]);