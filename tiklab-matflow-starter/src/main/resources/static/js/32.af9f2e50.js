(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{401:function(e,a,t){"use strict";t.r(a),function(e){var r,n=t(0),l=t.n(n),u=t(42),o=t(34),i=t(1076),m=t(1063),c=(t(861),t(497)),s=t(862),d=t(882),b=t(660),N=t(617),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\container\\survey.js";function p(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,n,l=[],u=!0,o=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(l.push(r.value),!a||l.length!==a);u=!0);}catch(e){o=!0,n=e}finally{try{u||null==t.return||t.return()}finally{if(o)throw n}}return l}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return _(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=function(e){var a=e.surveyStore,t=e.pipelineStore,r=e.homePageStore,u=r.findlogpage,o=r.dynamicList,_=a.pipelineCensus,v=t.pipelineId,y=t.pipeline,E=p(Object(n.useState)(""),2),g=E[0],L=E[1];Object(n.useEffect)((function(){v&&_(v).then((function(e){var a=e.data;0===e.code&&(L(a),G(a))}))}),[v]),Object(n.useEffect)((function(){u({content:{pipelineId:[v]},pageParam:{pageSize:10,currentPage:1}})}),[v]);var G=function(e){var a=document.getElementById("burn-down"),t=a&&s.a.getInstanceByDom(a);t||(t=a&&s.a.init(a));var r={tooltip:{formatter:"{b}: {c} ({d}%)"},color:["#77b3eb","#f06f6f","#f6c659"],type:"pie",series:[{type:"pie",data:[{value:e&&e.successNumber,name:"成功"},{value:e&&e.errorNumber,name:"失败"},{value:e&&e.removeNumber,name:"其他"}]}]};t&&t.setOption(r)};return l.a.createElement("div",{className:"survey",__source:{fileName:f,lineNumber:75,columnNumber:9}},l.a.createElement("div",{className:"survey-content home-limited",__source:{fileName:f,lineNumber:76,columnNumber:13}},l.a.createElement("div",{className:"survey-top",__source:{fileName:f,lineNumber:77,columnNumber:17}},l.a.createElement(c.a,{firstItem:y.name,secondItem:"概况",__source:{fileName:f,lineNumber:78,columnNumber:21}})),l.a.createElement("div",{className:"survey-content",__source:{fileName:f,lineNumber:80,columnNumber:17}},l.a.createElement("div",{className:"survey-census",__source:{fileName:f,lineNumber:81,columnNumber:21}},l.a.createElement(b.a,{icon:l.a.createElement(i.a,{__source:{fileName:f,lineNumber:82,columnNumber:38}}),title:"运行概况",__source:{fileName:f,lineNumber:82,columnNumber:25}}),l.a.createElement("div",{className:"survey-census-bottom",__source:{fileName:f,lineNumber:83,columnNumber:25}},l.a.createElement("div",{className:"chart-box",id:"burn-down",style:{width:400,height:300},__source:{fileName:f,lineNumber:84,columnNumber:29}}),l.a.createElement(d.a,{census:g,__source:{fileName:f,lineNumber:85,columnNumber:29}}))),l.a.createElement("div",{className:"survey-dyna",__source:{fileName:f,lineNumber:88,columnNumber:21}},l.a.createElement(b.a,{title:"流水线动态",icon:l.a.createElement(m.a,{__source:{fileName:f,lineNumber:89,columnNumber:54}}),type:"dynamic",pipelineId:v,__source:{fileName:f,lineNumber:89,columnNumber:25}}),l.a.createElement(N.a,{dynamicList:o,__source:{fileName:f,lineNumber:90,columnNumber:25}})))))};v(y,'useState{[census,setCensus]("")}\nuseEffect{}\nuseEffect{}');var E,g,L=Object(u.g)(Object(o.b)("surveyStore","pipelineStore","homePageStore")(Object(o.c)(y)));a.default=L,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(y,"Survey","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\container\\survey.js"),E.register(L,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\container\\survey.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}.call(this,t(36)(e))},479:function(e,a,t){"use strict";(function(e){var r,n=t(0),l=t.n(n),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,i,m=function(e){var a=e.title;return l.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:u,lineNumber:7,columnNumber:13}},l.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:u,lineNumber:8,columnNumber:17}},l.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:u,lineNumber:9,columnNumber:21}})),l.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:u,lineNumber:11,columnNumber:17}},a||"没有查询到数据"))},c=m;a.a=c,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(m,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js"),o.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,t(36)(e))},497:function(e,a,t){"use strict";(function(e){t(45);var r,n=t(23),l=t(0),u=t.n(l),o=(t(498),t(309)),i="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,c,s=function(e){var a=e.firstItem,t=e.secondItem,r=e.goBack;return u.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:i,lineNumber:11,columnNumber:13}},u.a.createElement(n.b,{__source:{fileName:i,lineNumber:12,columnNumber:17}},r&&u.a.createElement(o.a,{onClick:r,style:{color:"#0063FF"},__source:{fileName:i,lineNumber:13,columnNumber:32}}),u.a.createElement("span",{className:t?"breadcrumbContent-span":"",__source:{fileName:i,lineNumber:14,columnNumber:21}},a),t&&u.a.createElement("span",{__source:{fileName:i,lineNumber:17,columnNumber:36}}," /   ",t)))},d=s;a.a=d,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(s,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js"),m.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(36)(e))},498:function(e,a,t){},617:function(e,a,t){"use strict";(function(e){var r,n=t(0),l=t.n(n),u=t(42),o=t(618),i=t(619),m=t(620),c=t(621),s=t(479),d=(t(622),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,N,f=function(e){var a=e.dynamicList,t=function(e){switch(e){case"LOG_PIPELINE":return o.a;case"LOG_PIPELINE_AUTH":return c.a;case"LOG_PIPELINE_CONFIG":return i.a;case"LOG_PIPELINE_RUN":return m.a;case"LOG_PIPELINE_USER":return i.a}},r=function(a,r){return l.a.createElement("div",{key:r,className:"dynamic-item",onClick:function(){return function(a){e.history.push(a.link.split("#")[1])}(a)},__source:{fileName:d,lineNumber:35,columnNumber:16}},l.a.createElement("div",{className:"dynamic-item-icon",__source:{fileName:d,lineNumber:36,columnNumber:13}},l.a.createElement("img",{src:t(a.actionType.id),alt:"",__source:{fileName:d,lineNumber:37,columnNumber:17}})),l.a.createElement("div",{className:"dynamic-item-message",__source:{fileName:d,lineNumber:39,columnNumber:13}},l.a.createElement("div",{className:"dynamic-item-message-title",__source:{fileName:d,lineNumber:40,columnNumber:17}},a.actionType.name),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.data},__source:{fileName:d,lineNumber:43,columnNumber:17}})),l.a.createElement("div",{__source:{fileName:d,lineNumber:47,columnNumber:13}},a.timestamp))};return l.a.createElement("div",{className:"dynamic-center",__source:{fileName:d,lineNumber:52,columnNumber:9}},a&&a.length>0?a.map((function(e,a){return r(e,a)})):l.a.createElement(s.a,{title:"没有近期动态",__source:{fileName:d,lineNumber:59,columnNumber:17}}))},p=Object(u.g)(f);a.a=p,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"DynaList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js"),b.register(p,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}).call(this,t(36)(e))},618:function(e,a,t){"use strict";a.a=t.p+"images/backpack.svg"},619:function(e,a,t){"use strict";a.a=t.p+"images/buzzer.svg"},620:function(e,a,t){"use strict";a.a=t.p+"images/candy.svg"},621:function(e,a,t){"use strict";a.a=t.p+"images/helmet.svg"},622:function(e,a,t){},660:function(e,a,t){"use strict";(function(e){var r,n=t(0),l=t.n(n),u=t(42),o=t(737),i=(t(661),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,c,s=function(e){var a=e.title,t=e.type,r=e.icon,n=e.pipelineId;return l.a.createElement("div",{className:"mf-guide",__source:{fileName:i,lineNumber:24,columnNumber:9}},l.a.createElement("div",{className:"mf-guide-title",__source:{fileName:i,lineNumber:25,columnNumber:13}},l.a.createElement("span",{className:"mf-guide-title-icon",__source:{fileName:i,lineNumber:26,columnNumber:17}},r&&r),l.a.createElement("span",{className:"mf-guide-title-name",__source:{fileName:i,lineNumber:29,columnNumber:17}},a)),t&&l.a.createElement("div",{className:"mf-guide-ac",__source:{fileName:i,lineNumber:35,columnNumber:17}},l.a.createElement("span",{onClick:function(){return function(a){switch(a){case"我的待办":e.history.push("/index/agency");break;case"近期动态":e.history.push("/index/dyna");break;case"流水线动态":e.history.push("/index/task/".concat(n,"/dyna"))}}(a)},__source:{fileName:i,lineNumber:36,columnNumber:21}},l.a.createElement(o.a,{__source:{fileName:i,lineNumber:37,columnNumber:25}}))))},d=Object(u.g)(s);a.a=d,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(s,"Guide","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js"),m.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(36)(e))},661:function(e,a,t){},861:function(e,a,t){},882:function(e,a,t){"use strict";(function(e){var r,n=t(0),l=t.n(n),u=t(1073),o=t(260),i=t(1074),m=t(1075),c=t(824),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\components\\surveyCensus.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,b,N=function(e){var a=e.census,t=[{title:"成功",num:l.a.createElement("span",{className:"census-successNumber",__source:{fileName:s,lineNumber:18,columnNumber:17}},a&&a.successNumber," 次"),icon:l.a.createElement(u.a,{className:"census-successNumber",__source:{fileName:s,lineNumber:19,columnNumber:18}})},{title:"停止",num:l.a.createElement("span",{className:"census-removeNumber",__source:{fileName:s,lineNumber:23,columnNumber:18}},a&&a.removeNumber," 次"),icon:l.a.createElement(o.a,{className:"census-removeNumber",__source:{fileName:s,lineNumber:24,columnNumber:18}})},{title:"失败",num:l.a.createElement("span",{className:"census-errorNumber",__source:{fileName:s,lineNumber:28,columnNumber:17}},a&&a.errorNumber," 次"),icon:l.a.createElement(i.a,{className:"census-errorNumber",__source:{fileName:s,lineNumber:29,columnNumber:18}})},{title:"执行次数",num:l.a.createElement("span",{className:"census-number",__source:{fileName:s,lineNumber:33,columnNumber:17}},a&&a.number," 次"),icon:l.a.createElement(m.a,{className:"census-number",__source:{fileName:s,lineNumber:34,columnNumber:18}})},{title:"平均执行时长",num:l.a.createElement("span",{className:"census-time",__source:{fileName:s,lineNumber:38,columnNumber:17}},a&&a.time),icon:l.a.createElement(c.a,{className:"census-time",__source:{fileName:s,lineNumber:39,columnNumber:18}})}];return l.a.createElement("div",{className:"survey-census-stat",__source:{fileName:s,lineNumber:44,columnNumber:9}},l.a.createElement("div",{className:"stat",__source:{fileName:s,lineNumber:45,columnNumber:13}},t.map((function(e){return l.a.createElement("div",{className:"stat-div",key:e.title,__source:{fileName:s,lineNumber:49,columnNumber:29}},l.a.createElement("div",{className:"stat-div-title",__source:{fileName:s,lineNumber:50,columnNumber:33}},l.a.createElement("span",{className:"stat-div-title-icon",__source:{fileName:s,lineNumber:51,columnNumber:37}},e.icon),l.a.createElement("span",{className:"stat-div-title-name",__source:{fileName:s,lineNumber:54,columnNumber:37}},e.title)),l.a.createElement("div",{className:"census-num",__source:{fileName:s,lineNumber:58,columnNumber:33}},e.num," "))}))))},f=N;a.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(N,"SurveyCensus","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\components\\surveyCensus.js"),d.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\components\\surveyCensus.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,t(36)(e))}}]);