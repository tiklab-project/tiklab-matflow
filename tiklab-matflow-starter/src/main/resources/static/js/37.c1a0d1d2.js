(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{397:function(e,a,n){"use strict";n.r(a),function(e){n(47);var t,i=n(9),l=n(0),r=n.n(l),o=n(34),m=n(1074),u=n(1075),c=n(711),s=n(627),d=n(493),N=(n(860),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\homePage.js");(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var a=e.homePageStore,n=e.pipelineStore,t=a.findAllOpen,o=a.pipelineNearList,f=a.findlogpage,b=a.dynamicList,p=n.findAllPipelineStatus,_=n.findAllFollow,g=n.pipelineLength,v=n.followLength,y=n.setListType;Object(l.useEffect)((function(){p().then((function(e){if(0===e.code){var a={pageParam:{pageSize:10,currentPage:1},bgroup:"matflow",content:{pipelineId:E(e.data)}};f(a)}})),_(),t(5)}),[]);var E=function(e){var a=[];return e&&e.map((function(e){a.push(e.id)})),a},L=[{id:1,title:"我的流水线",icon:"#icon-renwu",listLength:g},{id:2,title:"我的收藏",icon:"#icon-icon-test",listLength:v}],h=function(a){y(a),e.history.push("/index/pipeline")};return r.a.createElement("div",{className:"homePage",__source:{fileName:N,lineNumber:125,columnNumber:9}},r.a.createElement("div",{className:"homePage-content mf-home-limited",__source:{fileName:N,lineNumber:126,columnNumber:13}},r.a.createElement("div",{className:"quickIn",__source:{fileName:N,lineNumber:127,columnNumber:17}},L&&L.map((function(e){return function(e){return r.a.createElement("div",{key:e.id,className:"quickIn-group",onClick:function(){return h(e.id)},__source:{fileName:N,lineNumber:100,columnNumber:13}},r.a.createElement("div",{className:"quickIn-group-wrap",__source:{fileName:N,lineNumber:101,columnNumber:17}},r.a.createElement("div",{className:"quickIn-group-title",__source:{fileName:N,lineNumber:102,columnNumber:21}},r.a.createElement("span",{className:"quickIn-group-icon",__source:{fileName:N,lineNumber:103,columnNumber:25}},r.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:N,lineNumber:104,columnNumber:29}},r.a.createElement("use",{xlinkHref:"".concat(e.icon),__source:{fileName:N,lineNumber:105,columnNumber:33}}))),r.a.createElement("span",{__source:{fileName:N,lineNumber:108,columnNumber:25}},e.title)),r.a.createElement("div",{className:"quickIn-group-number",__source:{fileName:N,lineNumber:110,columnNumber:21}},e.listLength)))}(e)}))),r.a.createElement("div",{className:"pipelineRecent",__source:{fileName:N,lineNumber:134,columnNumber:17}},r.a.createElement(c.a,{title:"最近访问的流水线",icon:r.a.createElement(m.a,{__source:{fileName:N,lineNumber:135,columnNumber:53}}),__source:{fileName:N,lineNumber:135,columnNumber:21}}),o&&o.length>0?r.a.createElement("div",{className:"pipelineRecent-content",__source:{fileName:N,lineNumber:138,columnNumber:29}},o.map((function(a){return function(a){return r.a.createElement("div",{className:"pipelineRecent-item",key:a.openId,onClick:function(){return e.history.push("/index/task/".concat(a.pipeline&&a.pipeline.id,"/survey"))},__source:{fileName:N,lineNumber:54,columnNumber:17}},r.a.createElement("div",{className:"pipelineRecent-item-title",__source:{fileName:N,lineNumber:57,columnNumber:13}},a&&a.pipeline&&r.a.createElement(i.b,{__source:{fileName:N,lineNumber:60,columnNumber:21}},r.a.createElement("span",{className:"mf-icon-".concat(a.pipeline.color?a.pipeline.color:0," pipelineRecent-icon"),__source:{fileName:N,lineNumber:61,columnNumber:25}},a.pipeline.name&&a.pipeline.name.substring(0,1).toUpperCase()),r.a.createElement("span",{className:"pipelineRecent-name",__source:{fileName:N,lineNumber:64,columnNumber:29}},a.pipeline.name&&a.pipeline.name))),r.a.createElement("div",{className:"pipelineRecent-item-details",__source:{fileName:N,lineNumber:70,columnNumber:13}},r.a.createElement("div",{className:"pipelineRecent-item-detail",__source:{fileName:N,lineNumber:71,columnNumber:17}},r.a.createElement("span",{className:"details-desc",__source:{fileName:N,lineNumber:72,columnNumber:21}},"成功"),r.a.createElement("span",{__source:{fileName:N,lineNumber:73,columnNumber:21}},a.pipelineExecState.successNumber)),r.a.createElement("div",{className:"pipelineRecent-item-detail",__source:{fileName:N,lineNumber:75,columnNumber:17}},r.a.createElement("span",{className:"details-desc",__source:{fileName:N,lineNumber:76,columnNumber:21}},"失败"),r.a.createElement("span",{__source:{fileName:N,lineNumber:77,columnNumber:21}},a.pipelineExecState.errorNumber))))}(a)}))):r.a.createElement(d.a,{title:"最近没有访问流水线",__source:{fileName:N,lineNumber:146,columnNumber:29}})),r.a.createElement("div",{className:"home-dyna",__source:{fileName:N,lineNumber:150,columnNumber:17}},r.a.createElement(c.a,{title:"近期动态",icon:r.a.createElement(u.a,{__source:{fileName:N,lineNumber:153,columnNumber:31}}),type:"dynamic",__source:{fileName:N,lineNumber:151,columnNumber:21}}),r.a.createElement(s.a,{dynamicList:b,__source:{fileName:N,lineNumber:156,columnNumber:21}}))))};f(b,"useEffect{}");var p,_,g=Object(o.b)("homePageStore","pipelineStore")(Object(o.c)(b));a.default=g,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(b,"HomePage","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\homePage.js"),p.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\homePage.js")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}.call(this,n(37)(e))},493:function(e,a,n){"use strict";(function(e){var t,i=n(0),l=n.n(i),r="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js";(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,m,u=function(e){var a=e.title;return l.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:r,lineNumber:7,columnNumber:13}},l.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:r,lineNumber:8,columnNumber:17}},l.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:r,lineNumber:9,columnNumber:21}})),l.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:r,lineNumber:11,columnNumber:17}},a||"没有查询到数据"))},c=u;a.a=c,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(u,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js"),o.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,n(37)(e))},627:function(e,a,n){"use strict";(function(e){var t,i=n(0),l=n.n(i),r=n(43),o=n(493),m=(n(628),n(629),n(630),n(631),n(632),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js");(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,c,s=function(e){var a=e.dynamicList,n=function(a,n){return l.a.createElement("div",{key:n,className:"dynamic-item",onClick:function(){return function(a){e.history.push(a.link.split("#")[1])}(a)},__source:{fileName:m,lineNumber:20,columnNumber:16}},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.data},__source:{fileName:m,lineNumber:21,columnNumber:13}}),l.a.createElement("div",{className:"dynamic-item-time",__source:{fileName:m,lineNumber:24,columnNumber:13}},a.timestamp))};return l.a.createElement("div",{className:"dynamic-center",__source:{fileName:m,lineNumber:29,columnNumber:9}},a&&a.length>0?a.map((function(e,a){return n(e,a)})):l.a.createElement(o.a,{title:"没有近期动态",__source:{fileName:m,lineNumber:36,columnNumber:17}}))},d=Object(r.g)(s);a.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"DynaList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js"),u.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,n(37)(e))},628:function(e,a,n){},629:function(e,a,n){"use strict";n.p},630:function(e,a,n){"use strict";n.p},631:function(e,a,n){"use strict";n.p},632:function(e,a,n){"use strict";n.p},711:function(e,a,n){"use strict";(function(e){var t,i=n(0),l=n.n(i),r=n(43),o=n(750),m=(n(712),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js");(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,c,s=function(e){var a=e.title,n=e.type,t=e.icon,i=e.pipelineId;return l.a.createElement("div",{className:"mf-guide",__source:{fileName:m,lineNumber:24,columnNumber:9}},l.a.createElement("div",{className:"mf-guide-title",__source:{fileName:m,lineNumber:25,columnNumber:13}},l.a.createElement("span",{className:"mf-guide-title-icon",__source:{fileName:m,lineNumber:26,columnNumber:17}},t&&t),l.a.createElement("span",{className:"mf-guide-title-name",__source:{fileName:m,lineNumber:29,columnNumber:17}},a)),n&&l.a.createElement("div",{className:"mf-guide-ac",__source:{fileName:m,lineNumber:35,columnNumber:17}},l.a.createElement("span",{onClick:function(){return function(a){switch(a){case"我的待办":e.history.push("/index/agency");break;case"近期动态":e.history.push("/index/dyna");break;case"流水线动态":e.history.push("/index/task/".concat(i,"/dyna"))}}(a)},__source:{fileName:m,lineNumber:36,columnNumber:21}},l.a.createElement(o.a,{__source:{fileName:m,lineNumber:37,columnNumber:25}}))))},d=Object(r.g)(s);a.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"Guide","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js"),u.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,n(37)(e))},712:function(e,a,n){},860:function(e,a,n){}}]);