(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{400:function(e,a,r){"use strict";r.r(a),function(e){var t,n=r(0),l=r.n(n),u=r(43),o=r(33),i=r(1073),m=r(1060),c=(r(866),r(498)),s=r(867),d=r(887),b=r(659),N=r(619),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\container\\survey.js";function p(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,n,l=[],u=!0,o=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(l.push(t.value),!a||l.length!==a);u=!0);}catch(e){o=!0,n=e}finally{try{u||null==r.return||r.return()}finally{if(o)throw n}}return l}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return _(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,t=new Array(a);r<a;r++)t[r]=e[r];return t}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=function(e){var a=e.surveyStore,r=e.pipelineStore,t=e.homePageStore,u=t.findlogpage,o=t.dynamicList,_=a.pipelineCensus,v=r.pipelineId,y=r.pipeline,E=p(Object(n.useState)(""),2),g=E[0],L=E[1];Object(n.useEffect)((function(){v&&_(v).then((function(e){var a=e.data;0===e.code&&(L(a),G(a))}))}),[v]),Object(n.useEffect)((function(){u({content:{pipelineId:[v]},pageParam:{pageSize:10,currentPage:1}})}),[v]);var G=function(e){var a=document.getElementById("burn-down"),r=a&&s.a.getInstanceByDom(a);r||(r=a&&s.a.init(a));var t={tooltip:{formatter:"{b}: {c} ({d}%)"},color:["#77b3eb","#f06f6f","#f6c659"],type:"pie",series:[{type:"pie",data:[{value:e&&e.successNumber,name:"成功"},{value:e&&e.errorNumber,name:"失败"},{value:e&&e.removeNumber,name:"其他"}]}]};r&&r.setOption(t)};return l.a.createElement("div",{className:"survey",__source:{fileName:f,lineNumber:75,columnNumber:9}},l.a.createElement("div",{className:"survey-content home-limited",__source:{fileName:f,lineNumber:76,columnNumber:13}},l.a.createElement("div",{className:"survey-top",__source:{fileName:f,lineNumber:77,columnNumber:17}},l.a.createElement(c.a,{firstItem:y.name,secondItem:"概况",__source:{fileName:f,lineNumber:78,columnNumber:21}})),l.a.createElement("div",{className:"survey-content",__source:{fileName:f,lineNumber:80,columnNumber:17}},l.a.createElement("div",{className:"survey-census",__source:{fileName:f,lineNumber:81,columnNumber:21}},l.a.createElement(b.a,{icon:l.a.createElement(i.a,{__source:{fileName:f,lineNumber:82,columnNumber:38}}),title:"运行概况",__source:{fileName:f,lineNumber:82,columnNumber:25}}),l.a.createElement("div",{className:"survey-census-bottom",__source:{fileName:f,lineNumber:83,columnNumber:25}},l.a.createElement("div",{className:"chart-box",id:"burn-down",style:{width:400,height:300},__source:{fileName:f,lineNumber:84,columnNumber:29}}),l.a.createElement(d.a,{census:g,__source:{fileName:f,lineNumber:85,columnNumber:29}}))),l.a.createElement("div",{className:"survey-dyna",__source:{fileName:f,lineNumber:88,columnNumber:21}},l.a.createElement(b.a,{title:"流水线动态",icon:l.a.createElement(m.a,{__source:{fileName:f,lineNumber:89,columnNumber:54}}),type:"dynamic",pipelineId:v,__source:{fileName:f,lineNumber:89,columnNumber:25}}),l.a.createElement(N.a,{dynamicList:o,pipelineId:[v],__source:{fileName:f,lineNumber:90,columnNumber:25}})))))};v(y,'useState{[census,setCensus]("")}\nuseEffect{}\nuseEffect{}');var E,g,L=Object(u.g)(Object(o.b)("surveyStore","pipelineStore","homePageStore")(Object(o.c)(y)));a.default=L,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(y,"Survey","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\container\\survey.js"),E.register(L,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\container\\survey.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}.call(this,r(39)(e))},498:function(e,a,r){"use strict";(function(e){r(45);var t,n=r(23),l=r(0),u=r.n(l),o=(r(499),r(308)),i="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js";(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,c,s=function(e){var a=e.firstItem,r=e.secondItem,t=e.goBack;return u.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:i,lineNumber:11,columnNumber:13}},u.a.createElement(n.b,{__source:{fileName:i,lineNumber:12,columnNumber:17}},t&&u.a.createElement(o.a,{onClick:t,style:{color:"#0063FF"},__source:{fileName:i,lineNumber:13,columnNumber:32}}),u.a.createElement("span",{className:r?"breadcrumbContent-span":"",__source:{fileName:i,lineNumber:14,columnNumber:21}},a),r&&u.a.createElement("span",{__source:{fileName:i,lineNumber:17,columnNumber:36}}," /   ",r)))},d=s;a.a=d,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(s,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js"),m.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(39)(e))},499:function(e,a,r){},619:function(e,a,r){"use strict";(function(e){var t,n=r(0),l=r.n(n),u=r(43),o=r(620),i=r(621),m=r(622),c=r(623),s=(r(624),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js");(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,b,N=function(e){var a=e.dynamicList,r=e.pipelineId,t=function(e){var a=e.split("/");return r&&r.some((function(e){return e===a[3]}))},n=function(e){switch(e){case"LOG_PIPELINE":return o.a;case"LOG_PIPELINE_AUTH":return c.a;case"LOG_PIPELINE_CONFIG":return i.a;case"LOG_PIPELINE_RUN":return m.a;case"LOG_PIPELINE_USER":return i.a}},u=function(a,r){return l.a.createElement("div",{key:r,className:"dynamic-item",onClick:function(){return function(a){t(a.opLogTemplate.link)&&e.history.push(a.opLogTemplate.link)}(a)},__source:{fileName:s,lineNumber:41,columnNumber:16}},l.a.createElement("div",{className:"dynamic-item-icon",__source:{fileName:s,lineNumber:42,columnNumber:13}},l.a.createElement("img",{src:n(a.actionType.id),alt:"",__source:{fileName:s,lineNumber:43,columnNumber:17}})),l.a.createElement("div",{className:"dynamic-item-message",__source:{fileName:s,lineNumber:45,columnNumber:13}},l.a.createElement("div",{className:"dynamic-item-message-title",__source:{fileName:s,lineNumber:46,columnNumber:17}},a.opLogTemplate.title),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.opLogTemplate.content},__source:{fileName:s,lineNumber:49,columnNumber:17}})),l.a.createElement("div",{__source:{fileName:s,lineNumber:53,columnNumber:13}},a.timestamp))};return l.a.createElement("div",{className:"dynamic-center",__source:{fileName:s,lineNumber:58,columnNumber:9}},a&&a.map((function(e,a){return u(e,a)})))},f=Object(u.g)(N);a.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(N,"DynaList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js"),d.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\dyna\\common\\dynaList.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(39)(e))},620:function(e,a,r){"use strict";a.a=r.p+"images/backpack.svg"},621:function(e,a,r){"use strict";a.a=r.p+"images/buzzer.svg"},622:function(e,a,r){"use strict";a.a=r.p+"images/candy.svg"},623:function(e,a,r){"use strict";a.a=r.p+"images/helmet.svg"},624:function(e,a,r){},659:function(e,a,r){"use strict";(function(e){var t,n=r(0),l=r.n(n),u=r(43),o=r(740),i=(r(660),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js");(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,c,s=function(e){var a=e.title,r=e.type,t=e.icon,n=e.pipelineId;return l.a.createElement("div",{className:"mf-guide",__source:{fileName:i,lineNumber:24,columnNumber:9}},l.a.createElement("div",{className:"mf-guide-title",__source:{fileName:i,lineNumber:25,columnNumber:13}},l.a.createElement("span",{className:"mf-guide-title-icon",__source:{fileName:i,lineNumber:26,columnNumber:17}},t&&t),l.a.createElement("span",{className:"mf-guide-title-name",__source:{fileName:i,lineNumber:29,columnNumber:17}},a)),r&&l.a.createElement("div",{className:"mf-guide-ac",__source:{fileName:i,lineNumber:35,columnNumber:17}},l.a.createElement("span",{onClick:function(){return function(a){switch(a){case"我的待办":e.history.push("/index/agency");break;case"近期动态":e.history.push("/index/dyna");break;case"流水线动态":e.history.push("/index/task/".concat(n,"/dyna"))}}(a)},__source:{fileName:i,lineNumber:36,columnNumber:21}},l.a.createElement(o.a,{__source:{fileName:i,lineNumber:37,columnNumber:25}}))))},d=Object(u.g)(s);a.a=d,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(s,"Guide","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js"),m.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\guide\\guide.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(39)(e))},660:function(e,a,r){},866:function(e,a,r){},887:function(e,a,r){"use strict";(function(e){var t,n=r(0),l=r.n(n),u=r(1070),o=r(259),i=r(1071),m=r(1072),c=r(829),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\components\\surveyCensus.js";(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,b,N=function(e){var a=e.census,r=[{title:"成功",num:l.a.createElement("span",{className:"census-successNumber",__source:{fileName:s,lineNumber:18,columnNumber:17}},a&&a.successNumber," 次"),icon:l.a.createElement(u.a,{className:"census-successNumber",__source:{fileName:s,lineNumber:19,columnNumber:18}})},{title:"停止",num:l.a.createElement("span",{className:"census-removeNumber",__source:{fileName:s,lineNumber:23,columnNumber:18}},a&&a.removeNumber," 次"),icon:l.a.createElement(o.a,{className:"census-removeNumber",__source:{fileName:s,lineNumber:24,columnNumber:18}})},{title:"失败",num:l.a.createElement("span",{className:"census-errorNumber",__source:{fileName:s,lineNumber:28,columnNumber:17}},a&&a.errorNumber," 次"),icon:l.a.createElement(i.a,{className:"census-errorNumber",__source:{fileName:s,lineNumber:29,columnNumber:18}})},{title:"执行次数",num:l.a.createElement("span",{className:"census-number",__source:{fileName:s,lineNumber:33,columnNumber:17}},a&&a.number," 次"),icon:l.a.createElement(m.a,{className:"census-number",__source:{fileName:s,lineNumber:34,columnNumber:18}})},{title:"平均执行时长",num:l.a.createElement("span",{className:"census-time",__source:{fileName:s,lineNumber:38,columnNumber:17}},a&&a.time),icon:l.a.createElement(c.a,{className:"census-time",__source:{fileName:s,lineNumber:39,columnNumber:18}})}];return l.a.createElement("div",{className:"survey-census-stat",__source:{fileName:s,lineNumber:44,columnNumber:9}},l.a.createElement("div",{className:"stat",__source:{fileName:s,lineNumber:45,columnNumber:13}},r.map((function(e){return l.a.createElement("div",{className:"stat-div",key:e.title,__source:{fileName:s,lineNumber:49,columnNumber:29}},l.a.createElement("div",{className:"stat-div-title",__source:{fileName:s,lineNumber:50,columnNumber:33}},l.a.createElement("span",{className:"stat-div-title-icon",__source:{fileName:s,lineNumber:51,columnNumber:37}},e.icon),l.a.createElement("span",{className:"stat-div-title-name",__source:{fileName:s,lineNumber:54,columnNumber:37}},e.title)),l.a.createElement("div",{className:"census-num",__source:{fileName:s,lineNumber:58,columnNumber:33}},e.num," "))}))))},f=N;a.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(N,"SurveyCensus","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\components\\surveyCensus.js"),d.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\survey\\components\\surveyCensus.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(39)(e))}}]);