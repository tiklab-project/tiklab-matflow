(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{384:function(e,m,a){"use strict";var n=a(0),r=a.n(n),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\emptyText\\EmptyText.js";m.a=function(e){var m=e.title;return r.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:u,lineNumber:13,columnNumber:13}},r.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:u,lineNumber:14,columnNumber:17}},r.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:u,lineNumber:15,columnNumber:21}})),r.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:u,lineNumber:17,columnNumber:17}},m||"暂无数据"))}},391:function(e,m,a){"use strict";a(29);var n=a(9),r=a(0),u=a.n(r),l=a(205),c="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\breadcrumb\\Breadcrumb.js";m.a=function(e){var m=e.firstItem,a=e.secondItem,r=e.goBack;return u.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:c,lineNumber:16,columnNumber:13}},u.a.createElement(n.default,{__source:{fileName:c,lineNumber:17,columnNumber:17}},r&&u.a.createElement(l.default,{onClick:r,style:{color:"#0063FF"},__source:{fileName:c,lineNumber:18,columnNumber:32}}),u.a.createElement("span",{className:a?"breadcrumbContent-span":"",__source:{fileName:c,lineNumber:19,columnNumber:21}},m),a&&u.a.createElement("span",{__source:{fileName:c,lineNumber:22,columnNumber:36}}," /   ",a)))}},432:function(e,m,a){"use strict";var n=a(0),r=a.n(n),u=a(48),l=a(384),c=(a.p,a.p,a.p,a.p,"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\dynamic\\DynamicList.js");m.a=Object(u.o)((function(e){var m=e.dynamicList,a=function(m,a){return r.a.createElement("div",{key:a,className:"dynamic-item",onClick:function(){return function(m){e.history.push(m.link.split("#")[1])}(m)},__source:{fileName:c,lineNumber:28,columnNumber:17}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.data},__source:{fileName:c,lineNumber:29,columnNumber:21}}),r.a.createElement("div",{className:"dynamic-item-time",__source:{fileName:c,lineNumber:30,columnNumber:21}},m.timestamp))};return r.a.createElement("div",{className:"dynamic-center",__source:{fileName:c,lineNumber:35,columnNumber:9}},m&&m.length>0?m.map((function(e,m){return a(e,m)})):r.a.createElement(l.a,{title:"暂无近期动态",__source:{fileName:c,lineNumber:40,columnNumber:17}}))}))},495:function(e,m,a){"use strict";var n=a(0),r=a.n(n),u=a(48),l=a(501),c="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\guide\\Guide.js";m.a=Object(u.o)((function(e){var m=e.title,a=e.type,n=e.icon,u=e.pipelineId;return r.a.createElement("div",{className:"mf-guide",__source:{fileName:c,lineNumber:31,columnNumber:9}},r.a.createElement("div",{className:"mf-guide-title",__source:{fileName:c,lineNumber:32,columnNumber:13}},r.a.createElement("span",{className:"mf-guide-title-icon",__source:{fileName:c,lineNumber:33,columnNumber:17}},n&&n),r.a.createElement("span",{className:"mf-guide-title-name",__source:{fileName:c,lineNumber:34,columnNumber:17}},m)),a&&r.a.createElement("div",{className:"mf-guide-ac",__source:{fileName:c,lineNumber:38,columnNumber:17}},r.a.createElement("span",{onClick:function(){return function(m){switch(m){case"我的待办":e.history.push("/index/agency");break;case"近期动态":e.history.push("/index/dyna");break;case"流水线动态":e.history.push("/index/pipeline/".concat(u,"/survey/dyna"))}}(m)},__source:{fileName:c,lineNumber:39,columnNumber:21}},r.a.createElement(l.a,{__source:{fileName:c,lineNumber:40,columnNumber:25}}))))}))},820:function(e,m,a){"use strict";a.r(m);var n=a(0),r=a.n(n),u=a(34),l=a(849),c=a(838),i=a(391),t=a(724),s=a(846),o=a(241),N=a(847),b=a(848),_=a(572),f="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\overview\\components\\OverviewCensus.js",d=function(e){var m=e.census,a=[{title:"成功",num:r.a.createElement("span",{className:"census-successNumber",__source:{fileName:f,lineNumber:23,columnNumber:17}},m&&m.successNumber," 次"),icon:r.a.createElement(s.a,{className:"census-successNumber",__source:{fileName:f,lineNumber:24,columnNumber:18}})},{title:"停止",num:r.a.createElement("span",{className:"census-removeNumber",__source:{fileName:f,lineNumber:28,columnNumber:18}},m&&m.removeNumber," 次"),icon:r.a.createElement(o.a,{className:"census-removeNumber",__source:{fileName:f,lineNumber:29,columnNumber:18}})},{title:"失败",num:r.a.createElement("span",{className:"census-errorNumber",__source:{fileName:f,lineNumber:33,columnNumber:17}},m&&m.errorNumber," 次"),icon:r.a.createElement(N.a,{className:"census-errorNumber",__source:{fileName:f,lineNumber:34,columnNumber:18}})},{title:"执行次数",num:r.a.createElement("span",{className:"census-number",__source:{fileName:f,lineNumber:38,columnNumber:17}},m&&m.number," 次"),icon:r.a.createElement(b.a,{className:"census-number",__source:{fileName:f,lineNumber:39,columnNumber:18}})},{title:"平均执行时长",num:r.a.createElement("span",{className:"census-time",__source:{fileName:f,lineNumber:43,columnNumber:17}},m&&m.time),icon:r.a.createElement(_.a,{className:"census-time",__source:{fileName:f,lineNumber:44,columnNumber:18}})}];return r.a.createElement("div",{className:"overview-census-stat",__source:{fileName:f,lineNumber:49,columnNumber:9}},r.a.createElement("div",{className:"stat",__source:{fileName:f,lineNumber:50,columnNumber:13}},a.map((function(e){return r.a.createElement("div",{className:"stat-div",key:e.title,__source:{fileName:f,lineNumber:54,columnNumber:29}},r.a.createElement("div",{className:"stat-div-title",__source:{fileName:f,lineNumber:55,columnNumber:33}},r.a.createElement("span",{className:"stat-div-title-icon",__source:{fileName:f,lineNumber:56,columnNumber:37}},e.icon),r.a.createElement("span",{className:"stat-div-title-name",__source:{fileName:f,lineNumber:57,columnNumber:37}},e.title)),r.a.createElement("div",{className:"census-num",__source:{fileName:f,lineNumber:59,columnNumber:33}},e.num," "))}))))},v=a(495),p=a(432),E="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\overview\\components\\Overview.js";m.default=Object(u.inject)("OverviewStore","pipelineStore","homePageStore")(Object(u.observer)((function(e){var m=e.OverviewStore,a=e.pipelineStore,u=e.homePageStore,s=u.findlogpage,o=u.dynamicList,N=m.pipelineCensus,b=m.census,_=a.pipeline;Object(n.useEffect)((function(){_&&(N(_.id).then((function(e){var m=e.data;0===e.code&&f(m)})),s({content:{pipelineId:[_.id]},pageParam:{pageSize:10,currentPage:1}}))}),[_]);var f=function(e){var m=document.getElementById("burn-down"),a=m&&t.a.getInstanceByDom(m);a||(a=m&&t.a.init(m));var n={tooltip:{formatter:"{b}: {c} ({d}%)"},color:["#77b3eb","#f06f6f","#f6c659"],type:"pie",series:[{type:"pie",data:[{value:e&&e.successNumber,name:"成功"},{value:e&&e.errorNumber,name:"失败"},{value:e&&e.removeNumber,name:"其他"}]}]};a&&a.setOption(n)};return r.a.createElement("div",{className:"overview",__source:{fileName:E,lineNumber:78,columnNumber:9}},r.a.createElement("div",{className:"overview-content mf-home-limited",__source:{fileName:E,lineNumber:79,columnNumber:13}},r.a.createElement("div",{className:"overview-top",__source:{fileName:E,lineNumber:80,columnNumber:17}},r.a.createElement(i.a,{firstItem:"概况",__source:{fileName:E,lineNumber:81,columnNumber:21}})),r.a.createElement("div",{className:"overview-content",__source:{fileName:E,lineNumber:83,columnNumber:17}},r.a.createElement("div",{className:"overview-census",__source:{fileName:E,lineNumber:84,columnNumber:21}},r.a.createElement(v.a,{icon:r.a.createElement(l.a,{__source:{fileName:E,lineNumber:85,columnNumber:38}}),title:"运行概况",__source:{fileName:E,lineNumber:85,columnNumber:25}}),r.a.createElement("div",{className:"overview-census-bottom",__source:{fileName:E,lineNumber:86,columnNumber:25}},r.a.createElement("div",{className:"chart-box",id:"burn-down",style:{width:400,height:300},__source:{fileName:E,lineNumber:87,columnNumber:29}}),r.a.createElement(d,{census:b,__source:{fileName:E,lineNumber:88,columnNumber:29}}))),r.a.createElement("div",{className:"overview-dyna",__source:{fileName:E,lineNumber:91,columnNumber:21}},r.a.createElement(v.a,{title:"流水线动态",icon:r.a.createElement(c.a,{__source:{fileName:E,lineNumber:92,columnNumber:54}}),type:"dynamic",pipelineId:_&&_.id,__source:{fileName:E,lineNumber:92,columnNumber:25}}),r.a.createElement(p.a,{dynamicList:o,__source:{fileName:E,lineNumber:93,columnNumber:25}})))))})))}}]);