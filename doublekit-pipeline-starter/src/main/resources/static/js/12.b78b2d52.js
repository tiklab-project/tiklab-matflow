(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{118:function(e,i,n){"use strict";n.r(i),function(e){n(146);var l,t=n(145),a=(n(153),n(151)),o=(n(154),n(152)),r=n(148),u=n.n(r),m=n(0),p=n.n(m),c=n(41),d=n(186),s="D:\\idea\\pipeline\\doublekit-pipeline-frontend\\doublekit-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineAdd.js";(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=[{id:"0",title:"流水线",desc:"精心地组织一个可以长期运行在多个节点上的任务。适用于构建流水线（更加正式地应当称为工作流），增加或者组织难以采用自由风格的任务类型。"},{id:"1",title:"构建一个maven项目",desc:"构建一个maven项目."}],N=function(e){var i=e.PipelineStore,n=i.createPipeline,l=i.pipelineList,r=Object(m.useState)(0),c=u()(r,2),b=c[0],N=c[1];return p.a.createElement("div",{className:"new",__source:{fileName:s,lineNumber:44,columnNumber:9}},p.a.createElement(a.a,{id:"form",name:"basic",onFinish:function(i){var l={pipelineName:i.pipelineName,pipelineCreateUser:"admin",pipelineType:1,pipelineCreateTime:d.a.moment};n(l),localStorage.setItem("pipelineName",i.pipelineName),e.history.push({pathname:"/home/config",value:i})},autoComplete:"off",__source:{fileName:s,lineNumber:45,columnNumber:13}},p.a.createElement(a.a.Item,{label:"流水线名称",name:"pipelineName",rules:[{required:!0,message:""},function(e){e.getFieldValue;return{validator:function(e,i){return i?l.map((function(e){return e.pipelineName})).includes(i)?Promise.reject("名称已经存在"):Promise.resolve():Promise.reject("请输入名称")}}}],__source:{fileName:s,lineNumber:46,columnNumber:17}},p.a.createElement(o.a,{style:{width:400},__source:{fileName:s,lineNumber:68,columnNumber:21}}))),p.a.createElement("div",{className:"new-type",__source:{fileName:s,lineNumber:73,columnNumber:13}},p.a.createElement("ul",{className:"new-type-choose",__source:{fileName:s,lineNumber:74,columnNumber:17}},f.map((function(e,i){return p.a.createElement("li",{key:e.id,onClick:function(){return function(e){N(e)}(i)},className:b===i?"new-type-choose-c new-type-active":"new-type-choose-c ",__source:{fileName:s,lineNumber:78,columnNumber:33}},p.a.createElement("label",{__source:{fileName:s,lineNumber:83,columnNumber:37}},e.title),p.a.createElement("div",{__source:{fileName:s,lineNumber:86,columnNumber:37}},e.desc))})))),p.a.createElement("div",{className:"new-btn",__source:{fileName:s,lineNumber:95,columnNumber:13}},p.a.createElement("span",{className:"new-btn-span",__source:{fileName:s,lineNumber:96,columnNumber:17}},p.a.createElement(t.a,{htmlType:"submit",form:"form",type:"primary",__source:{fileName:s,lineNumber:97,columnNumber:21}},"添加"))))};b(N,"useState{[liStatus, setLiStatus](0)}");var v,_,y=Object(c.b)("PipelineStore")(Object(c.c)(N));i.default=y,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(f,"lis","D:\\idea\\pipeline\\doublekit-pipeline-frontend\\doublekit-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineAdd.js"),v.register(N,"PipelineAdd","D:\\idea\\pipeline\\doublekit-pipeline-frontend\\doublekit-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineAdd.js"),v.register(y,"default","D:\\idea\\pipeline\\doublekit-pipeline-frontend\\doublekit-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineAdd.js")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}.call(this,n(11)(e))},186:function(e,i,n){"use strict";(function(e){var l,t=n(129),a=n.n(t);(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,r,u={moment:a()().format("YYYY-MM-DD HH:mm:ss")};i.a=u,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(u,"default","D:\\idea\\pipeline\\doublekit-pipeline-frontend\\doublekit-pipeline-ui\\src\\common\\moment\\moment.js"),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}).call(this,n(11)(e))}}]);