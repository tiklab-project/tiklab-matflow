(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{599:function(e,r,t){"use strict";t.d(r,"b",(function(){return f})),t.d(r,"a",(function(){return b}));t(548);var n=t(546),a=t(0),u=t.n(a),i=t(484),l=t(485),c=t(483),o=t(479),m=t(505),s="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\history\\components\\HistoryTrigger.js",f=function(e){switch(e){case"error":return"运行失败";case"success":return"运行成功";case"halt":return"运行终止";case"run":return"正在运行";case"wait":return"等待运行"}},b=function(e){switch(e){case"error":return u.a.createElement(i.a,{style:{fontSize:16,color:"red"},__source:{fileName:s,lineNumber:39,columnNumber:21}});case"success":return u.a.createElement(l.a,{style:{fontSize:16,color:"#0063FF"},__source:{fileName:s,lineNumber:41,columnNumber:21}});case"halt":return u.a.createElement(c.a,{style:{fontSize:16},__source:{fileName:s,lineNumber:43,columnNumber:21}});case"run":return u.a.createElement(n.a,{indicator:u.a.createElement(o.a,{style:{fontSize:16},spin:!0,__source:{fileName:s,lineNumber:45,columnNumber:38}}),__source:{fileName:s,lineNumber:45,columnNumber:21}});case"wait":return u.a.createElement(m.a,{style:{fontSize:16},__source:{fileName:s,lineNumber:47,columnNumber:21}})}}},676:function(e,r,t){"use strict";t(55);var n=t(54),a=(t(600),t(598)),u=(t(103),t(102)),i=t(0),l=t.n(i),c=t(27),o=t(536),m=t(545),s=t(551),f=t(537),b=t(557),N=(t(384),t(383)),p=t(482),d="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\history\\components\\HistoryScreen.js";function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=N.default.Option,E=function(e){var r=e.params,t=e.setParams,n=e.changPage,a=e.pipelineList,u=e.pipelineUserList,i=function(e,a){t(_(_({},r),{},h({},a,e))),n(1)};return l.a.createElement("div",{className:"str-screens",__source:{fileName:d,lineNumber:32,columnNumber:9}},a&&l.a.createElement(N.default,{showSearch:!0,suffixIcon:l.a.createElement(p.a,{__source:{fileName:d,lineNumber:37,columnNumber:33}}),placeholder:"流水线",onChange:function(e){return i(e,"pipelineId")},filterOption:function(e,r){return r.children.toLowerCase().indexOf(e.toLowerCase())>=0},__source:{fileName:d,lineNumber:35,columnNumber:17}},l.a.createElement(g,{key:"全部",value:null,__source:{fileName:d,lineNumber:44,columnNumber:21}},"全部流水线"),a&&a.map((function(e){return l.a.createElement(g,{key:e.id,value:e.id,__source:{fileName:d,lineNumber:47,columnNumber:29}},e.name)}))),u&&l.a.createElement(N.default,{showSearch:!0,suffixIcon:l.a.createElement(p.a,{__source:{fileName:d,lineNumber:56,columnNumber:33}}),placeholder:"执行人",onChange:function(e){return i(e,"userId")},filterOption:function(e,r){return r.children.toLowerCase().indexOf(e.toLowerCase())>=0},__source:{fileName:d,lineNumber:54,columnNumber:17}},l.a.createElement(g,{key:"全部",value:null,__source:{fileName:d,lineNumber:63,columnNumber:21}},"全部执行人"),u&&u.map((function(e){return l.a.createElement(g,{key:e.id,value:e.user&&e.user.id,__source:{fileName:d,lineNumber:66,columnNumber:29}},e.user&&e.user.nickname)}))),l.a.createElement(N.default,{suffixIcon:l.a.createElement(p.a,{__source:{fileName:d,lineNumber:72,columnNumber:29}}),placeholder:"状态",onChange:function(e){return i(e,"state")},__source:{fileName:d,lineNumber:71,columnNumber:13}},l.a.createElement(g,{key:"0",value:null,__source:{fileName:d,lineNumber:76,columnNumber:17}},"全部状态"),l.a.createElement(g,{key:"1",value:"error",__source:{fileName:d,lineNumber:77,columnNumber:17}},"失败"),l.a.createElement(g,{key:"10",value:"success",__source:{fileName:d,lineNumber:78,columnNumber:17}},"成功"),l.a.createElement(g,{key:"20",value:"halt",__source:{fileName:d,lineNumber:79,columnNumber:17}},"终止"),l.a.createElement(g,{key:"30",value:"run",__source:{fileName:d,lineNumber:80,columnNumber:17}},"运行中")),l.a.createElement(N.default,{suffixIcon:l.a.createElement(p.a,{__source:{fileName:d,lineNumber:83,columnNumber:29}}),placeholder:"执行方式",onChange:function(e){return i(e,"type")},__source:{fileName:d,lineNumber:82,columnNumber:13}},l.a.createElement(g,{key:"0",value:0,__source:{fileName:d,lineNumber:87,columnNumber:17}},"全部执行方式"),l.a.createElement(g,{key:"1",value:1,__source:{fileName:d,lineNumber:88,columnNumber:17}},"手动"),l.a.createElement(g,{key:"2",value:2,__source:{fileName:d,lineNumber:89,columnNumber:17}},"自动")))},v=t(599),O=t(506),w=t(89),j=t.p+"images/pip_trigger.svg",k="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\history\\components\\HistoryTable.js";r.a=Object(c.observer)((function(e){var r=e.tableType,t=e.isLoading,i=e.setIsLoading,c=e.pipelineUserList,N=e.pipelineList,p=e.historyStore,d=e.setParams,y=e.params,_=e.disDetails,h=p.pageCurrent,g=p.setPageCurrent,S=p.page,P=p.historyList,I=p.setHistoryList,L=p.deleteInstance,x=p.execStop,C=function(t){"history"===r?_(t):e.history.push("/index/pipeline/".concat(t.pipeline.id,"/structure/").concat(t.instanceId,"/post"))},D=function(e){g(e),I([]),i(!0)},T=[{title:"名称",dataIndex:"findNumber",key:"findNumber",width:"20%",ellipsis:!0,render:function(e,t){return"history"===r?l.a.createElement("span",{className:"history-table-name",onClick:function(){return C(t)},__source:{fileName:k,lineNumber:71,columnNumber:28}},l.a.createElement("span",{className:"history-table-pipeline",__source:{fileName:k,lineNumber:72,columnNumber:33}},t.pipeline&&t.pipeline.name),l.a.createElement("span",{className:"history-table-findNumber",__source:{fileName:k,lineNumber:73,columnNumber:33}}," #",e)):l.a.createElement("span",{className:"history-table-findNumber",onClick:function(){return C(t)},__source:{fileName:k,lineNumber:76,columnNumber:25}},"# ".concat(e))}},{title:"状态",dataIndex:"runStatus",key:"runStatus",width:"10%",ellipsis:!0,render:function(e,r){return l.a.createElement(u.default,{title:Object(v.b)(r.runStatus),__source:{fileName:k,lineNumber:88,columnNumber:17}},Object(v.a)(r.runStatus))}},{title:"触发信息",dataIndex:"runWay",key:"runWay",width:"20%",ellipsis:!0,render:function(e,r){return l.a.createElement("div",{className:"history-table-runWay",__source:{fileName:k,lineNumber:100,columnNumber:17}},1===e?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{userInfo:r.user,__source:{fileName:k,lineNumber:104,columnNumber:33}}),l.a.createElement("div",{className:"runWay-user",__source:{fileName:k,lineNumber:105,columnNumber:33}},r.user.nickname,"手动触发")):l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:j,alt:"trigger",style:{width:22,height:22},__source:{fileName:k,lineNumber:109,columnNumber:33}}),l.a.createElement("div",{className:"runWay-user",__source:{fileName:k,lineNumber:110,columnNumber:33}},"定时任务自动触发")))}},{title:"开始",dataIndex:"createTime",key:"createTime",width:"20%",ellipsis:!0},{title:"耗时",dataIndex:"runTimeDate",key:"runTimeDate",width:"17%",ellipsis:!0},{title:"操作",dataIndex:"action",key:"action",width:"10%",ellipsis:!0,render:function(e,r){switch(r.runStatus){case"run":return l.a.createElement(u.default,{title:"终止",onClick:function(){return e=r.pipeline,void x(e.id);var e},__source:{fileName:k,lineNumber:140,columnNumber:33}},l.a.createElement(O.a,{style:{cursor:"pointer"},__source:{fileName:k,lineNumber:141,columnNumber:37}}));default:return l.a.createElement(u.default,{title:"删除",__source:{fileName:k,lineNumber:145,columnNumber:29}},l.a.createElement(a.a,{placement:"topRight",title:"你确定删除吗",onConfirm:function(){return function(e){L(e.instanceId)}(r)},okText:"确定",cancelText:"取消",__source:{fileName:k,lineNumber:146,columnNumber:33}},l.a.createElement("span",{style:{cursor:"pointer"},__source:{fileName:k,lineNumber:153,columnNumber:33}},l.a.createElement(w.default,{__source:{fileName:k,lineNumber:154,columnNumber:37}}))))}}}];return l.a.createElement("div",{className:"history",__source:{fileName:k,lineNumber:165,columnNumber:9}},l.a.createElement("div",{className:"history-content mf-home-limited mf",__source:{fileName:k,lineNumber:166,columnNumber:13}},l.a.createElement(f.a,{firstItem:"历史",__source:{fileName:k,lineNumber:167,columnNumber:17}}),l.a.createElement(E,{changPage:D,pipelineList:N,pipelineUserList:c,params:y,setParams:d,__source:{fileName:k,lineNumber:168,columnNumber:17}}),l.a.createElement("div",{className:"history-table",__source:{fileName:k,lineNumber:175,columnNumber:17}},l.a.createElement(n.default,{bordered:!1,columns:T,dataSource:P,rowKey:function(e){return e.instanceId},pagination:!1,locale:{emptyText:t?l.a.createElement(m.c,{type:"table",__source:{fileName:k,lineNumber:183,columnNumber:33}}):l.a.createElement(o.a,{title:"没有查询到历史记录",__source:{fileName:k,lineNumber:183,columnNumber:61}})},__source:{fileName:k,lineNumber:176,columnNumber:21}}),l.a.createElement(b.a,{pageCurrent:h,changPage:D,page:S,__source:{fileName:k,lineNumber:185,columnNumber:21}}))))}))},913:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),u=t(27),i=t(676);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,u=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return u}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}r.default=Object(u.inject)("historyStore","pipelineStore")(Object(u.observer)((function(e){var r=e.historyStore,t=e.pipelineStore,u=r.findPipelineInstance,s=r.setHistoryList,f=r.historyFresh,b=r.pageCurrent,N=r.setPageCurrent,p=t.pipeline,d=t.findDmUserPage,y=t.pipelineUserList,_=m(Object(n.useState)(!0),2),h=_[0],g=_[1],E=m(Object(n.useState)({state:null,userId:null,type:0}),2),v=E[0],O=E[1];Object(n.useEffect)((function(){return p&&d({pageParam:{pageSize:20,currentPage:1},domainId:p.id}),function(){N(1),s([])}}),[p]);var w=null;return Object(n.useEffect)((function(){return p&&(w=setInterval((function(){return u(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({pipelineId:p.id},v)).then((function(e){if(g(!1),0===e.code){if(!e.data)return clearInterval(w);(e.data.dataList.length<1||"run"!==e.data.dataList[0].runStatus)&&clearInterval(w)}else clearInterval(w)}))}),1e3)),function(){return clearInterval(w)}}),[f,p,b,v]),a.a.createElement(i.a,l({},e,{params:v,setParams:O,isLoading:h,setIsLoading:g,pipelineUserList:y,historyStore:r,__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\history\\components\\HistoryPipeline.js",lineNumber:64,columnNumber:9}}))})))}}]);