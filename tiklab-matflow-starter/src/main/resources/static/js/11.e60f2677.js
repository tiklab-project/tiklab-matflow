(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{176:function(e,t,o){"use strict";o.r(t),function(e){var n,a=o(49),i=o.n(a),r=o(1),c=o.n(r),l=o(858),u=o(430),s=o(85),m=o(58),d=o(15),p=o(9),f="D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\container\\project.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},N=function(e){var t=e.route,o=e.pipelineStore,n=e.configDataStore,a=e.match,m=o.findAllPipelineStatus,d=o.lastPath,b=o.setLastPath,N=o.setPipelineId,_=o.setPipelineName,j=n.isPrompt,v=n.setIsPrompt,k=a.params.pipelineName,L=Object(p.getUser)().userId;Object(r.useEffect)((function(){_(k),m(L).then((function(e){var t=e.data;0===e.code&&t&&t&&t.map((function(e){e.pipelineName===k&&N(e.pipelineId)}))}))}),[k]),Object(r.useEffect)((function(){return function(){return N("")}}),[]);return c.a.createElement("div",{className:"project",__source:{fileName:f,lineNumber:47,columnNumber:9}},c.a.createElement(l.a,i()({},e,{lastPath:d,setLastPath:b,pipelineName:k,__source:{fileName:f,lineNumber:48,columnNumber:13}})),c.a.createElement("div",{className:"project-content",style:{marginLeft:65,padding:"0 10px"},__source:{fileName:f,lineNumber:54,columnNumber:13}},Object(s.a)(t.routes)),c.a.createElement(u.a,{isPrompt:j,confirmLeave:function(t){t!=="/home/task/".concat(k,"/config")&&t&&setTimeout((function(){e.history.push(t)})),v(!1)},__source:{fileName:f,lineNumber:57,columnNumber:13}}))};b(N,"useEffect{}\nuseEffect{}");var _,j,v=Object(d.o)(Object(m.b)("pipelineStore","configDataStore")(Object(m.c)(N)));t.default=v,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(N,"Project","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\container\\project.js"),_.register(v,"default","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\container\\project.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}.call(this,o(13)(e))},430:function(e,t,o){"use strict";(function(e){o(247);var n,a=o(246),i=o(1),r=o.n(i),c=o(15);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,u,s=function(e){var t=e.isPrompt,o=e.confirmLeave;return r.a.createElement(c.b,{when:t,message:function(e){return!t||(a.a.confirm({title:"有编辑未保存，确定离开吗",okText:"离开",cancelText:"取消",onOk:function(){return o(e.pathname)}}),!1)},__source:{fileName:"D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\common\\prompt\\prompt.js",lineNumber:8,columnNumber:12}})},m=s;t.a=m,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(s,"PromptContent","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\common\\prompt\\prompt.js"),l.register(m,"default","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\common\\prompt\\prompt.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,o(13)(e))},858:function(e,t,o){"use strict";(function(e){o(390);var n,a=o(382),i=o(49),r=o.n(i),c=o(83),l=o.n(c),u=o(1),s=o.n(u),m=(o(859),o(860)),d="D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\components\\projectAside.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var t=e.pipelineName,o=e.setLastPath,n=e.location.pathname,i=Object(u.useState)(""),c=l()(i,2),p=c[0],f=c[1];Object(u.useEffect)((function(){0===n.indexOf("/index/task/".concat(t,"/assembly"))&&(n="/index/task/".concat(t,"/assembly")),o(n.substring(n.lastIndexOf("/")+1)),f(n)}),[n]);var b=[{to:"/index/task/".concat(t,"/work"),title:"工作空间",icon:"#icon-gongzuotongji",key:"2",enCode:"AA"},{to:"/index/task/".concat(t,"/config"),title:"配置",icon:"#icon-jiekoupeizhi",key:"3",enCode:"BB"},{to:"/index/task/".concat(t,"/structure"),title:"历史",icon:"#icon-lishijishi",key:"4",enCode:"CC"},{to:"/index/task/".concat(t,"/assembly"),title:"设置",icon:"#icon-shezhi",key:"5",enCode:"DD"}];return s.a.createElement("div",{className:"aside",__source:{fileName:d,lineNumber:77,columnNumber:10}},s.a.createElement("ul",{className:"content",__source:{fileName:d,lineNumber:78,columnNumber:13}},s.a.createElement(m.a,r()({},e,{path:n,__source:{fileName:d,lineNumber:79,columnNumber:17}})),function(t){return t&&t.map((function(t){return s.a.createElement(a.a,r()({code:t.enCode,key:t.key},e,{__source:{fileName:d,lineNumber:59,columnNumber:17}}),s.a.createElement("li",{key:t.key,className:p===t.to?"aside_content aside_active":"aside_content",onClick:function(){return function(t){e.history.push(t.to)}(t)},__source:{fileName:d,lineNumber:60,columnNumber:21}},s.a.createElement("div",{className:"aside_content_icon",__source:{fileName:d,lineNumber:64,columnNumber:25}},s.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:d,lineNumber:65,columnNumber:29}},s.a.createElement("use",{xlinkHref:t.icon,__source:{fileName:d,lineNumber:66,columnNumber:33}}))),s.a.createElement("div",{className:"aside_content_title",__source:{fileName:d,lineNumber:69,columnNumber:25}},t.title)))}))}(b)))};p(f,'useState{[nav,setNav]("")}\nuseEffect{}');var b,N,_=f;t.a=_,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"ProjectAside","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\components\\projectAside.js"),b.register(_,"default","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\components\\projectAside.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}).call(this,o(13)(e))},859:function(e,t,o){},860:function(e,t,o){"use strict";(function(e){o(355);var n,a=o(341),i=(o(356),o(325)),r=o(1),c=o.n(r),l=(o(861),o(58)),u="D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,m,d=function(e){var t=e.pipelineStore,o=e.structureListStore,n=e.path,r=t.pipelineName,l=t.pipelineList,s=t.lastPath,m=o.setState,d=o.setEnforcer,p=o.setMode,f=c.a.createElement("div",{className:"opt",__source:{fileName:u,lineNumber:30,columnNumber:9}},c.a.createElement("div",{className:"opt-content",__source:{fileName:u,lineNumber:31,columnNumber:13}},c.a.createElement("div",{className:"opt-content-title",__source:{fileName:u,lineNumber:32,columnNumber:17}},"流水线名称"),c.a.createElement("div",{className:"opt-content-group",__source:{fileName:u,lineNumber:33,columnNumber:17}},c.a.createElement(i.a,{__source:{fileName:u,lineNumber:34,columnNumber:21}},l&&l.map((function(t){return c.a.createElement(i.a.Item,{onClick:function(o){!function(t,o){r!==o.pipelineName&&(m(0),d(null),p(0),n==="/index/task/".concat(r,"/assembly")?e.history.push("/index/task/".concat(o.pipelineName,"/assembly")):0===n.indexOf("/index/task/".concat(r,"/assembly"))?e.history.push("/index/task/".concat(o.pipelineName,"/assembly/").concat(s)):e.history.push("/index/task/".concat(o.pipelineName,"/").concat(s)))}(0,t)},key:t.pipelineId,className:"opt-content-group_item",__source:{fileName:u,lineNumber:38,columnNumber:37}},t.pipelineName)}))))));return c.a.createElement("li",{className:"aside_content aside_dropdown",style:{padding:10},__source:{fileName:u,lineNumber:54,columnNumber:9}},c.a.createElement(a.a,{overlay:f,trigger:["click"],__source:{fileName:u,lineNumber:57,columnNumber:13}},c.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:u,lineNumber:58,columnNumber:17}},c.a.createElement("use",{xlinkHref:"#icon-shaixuan1",__source:{fileName:u,lineNumber:59,columnNumber:21}}))))},p=Object(l.b)("structureListStore","pipelineStore")(Object(l.c)(d));t.a=p,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(d,"ProjectAsideOpt","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js"),s.register(p,"default","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,o(13)(e))},861:function(e,t,o){}}]);