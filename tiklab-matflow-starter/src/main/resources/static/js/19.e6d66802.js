(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{172:function(e,a,t){"use strict";t.r(a),function(e){t(213);var o,l=t(212),r=(t(223),t(222)),m=(t(217),t(216)),n=(t(266),t(257)),i=t(83),u=t.n(i),c=t(1),s=t.n(c),d=(t(812),t(310)),f=t(9),b=t(58),N="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=[{id:"0",title:"流水线",desc:"精心地组织一个可以长期运行在多个节点上的任务。适用于构建流水线（更加正式地应当称为工作流），增加或者组织难以采用自由风格的任务类型。"},{id:"1",title:"构建一个maven项目",desc:"构建一个maven项目。"}],_=function(e){var a=e.matFlowStore,t=a.createMatFlow,o=a.matFlowList,i=a.findAllMatFlowStatus,b=Object(c.useRef)(),w=Object(c.useState)(0),_=u()(w,2),v=_[0],F=_[1],E=Object(f.getUser)().userId;Object(c.useEffect)((function(){i(E)}),[]),Object(c.useEffect)((function(){b.current.focus()}),[]);return s.a.createElement("div",{className:"new",__source:{fileName:N,lineNumber:82,columnNumber:9}},s.a.createElement("div",{className:"new-lump",__source:{fileName:N,lineNumber:83,columnNumber:13}},s.a.createElement("div",{className:"new-lump-form",__source:{fileName:N,lineNumber:84,columnNumber:17}},s.a.createElement(r.a,{id:"form",name:"basic",onFinish:function(a){var o={user:{id:E},matflowName:a.matFlowName,matflowType:1,matflowCreateTime:d.a.moment};t(o).then((function(t){0===t.code&&t.data?e.history.push("/index/config/".concat(a.matFlowName)):n.b.error({content:"添加失败",className:"message"})}))},autoComplete:"off",__source:{fileName:N,lineNumber:85,columnNumber:21}},s.a.createElement(r.a.Item,{label:"流水线名称",name:"matFlowName",rules:[{required:!0,message:""},{pattern:/^[\s\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"流水线名称不能包含非法字符，如&,%，&，#……等"},function(e){e.getFieldValue;return{validator:function(e,a){if(!a)return Promise.reject("请输入名称");var t=[];return o&&(t=o&&o.map((function(e){return e.matFlowName}))),t.includes(a)?Promise.reject("名称已经存在"):Promise.resolve()}}}],__source:{fileName:N,lineNumber:86,columnNumber:25}},s.a.createElement(m.a,{style:{width:400},ref:b,__source:{fileName:N,lineNumber:112,columnNumber:29}})))),s.a.createElement("div",{className:"new-lump-type",__source:{fileName:N,lineNumber:116,columnNumber:17}},s.a.createElement("div",{className:"new-lump-type-choose",__source:{fileName:N,lineNumber:117,columnNumber:21}},function(e){return e.map((function(e,a){return s.a.createElement("div",{key:e.id,onClick:function(){return function(e){F(e)}(a)},className:v===a?"choose-item choose-active":"choose-item",__source:{fileName:N,lineNumber:63,columnNumber:17}},s.a.createElement("div",{className:"choose-item-icon",__source:{fileName:N,lineNumber:67,columnNumber:21}},s.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:N,lineNumber:68,columnNumber:25}},s.a.createElement("use",{xlinkHref:"#icon-lishijishi",__source:{fileName:N,lineNumber:69,columnNumber:29}}))),s.a.createElement("div",{className:"choose-item-options",__source:{fileName:N,lineNumber:72,columnNumber:21}},s.a.createElement("label",{__source:{fileName:N,lineNumber:73,columnNumber:25}},e.title),s.a.createElement("div",{__source:{fileName:N,lineNumber:74,columnNumber:25}},e.desc)))}))}(p)))),s.a.createElement("div",{className:"new-btn",__source:{fileName:N,lineNumber:122,columnNumber:13}},s.a.createElement("span",{className:"new-btn-span",__source:{fileName:N,lineNumber:123,columnNumber:17}},s.a.createElement(l.a,{htmlType:"submit",form:"form",type:"primary",__source:{fileName:N,lineNumber:124,columnNumber:21}},"添加"))))};w(_,"useRef{inputRef}\nuseState{[liStatus,setLiStatus](0)}\nuseEffect{}\nuseEffect{}");var v,F,E=Object(b.b)("matFlowStore")(Object(b.c)(_));a.default=E,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(p,"lis","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js"),v.register(_,"MatFlowAdd","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js"),v.register(E,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js")),(F="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&F(e)}.call(this,t(13)(e))},310:function(e,a,t){"use strict";(function(e){var o,l=t(201),r=t.n(l);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,n,i={moment:r()().format("YYYY-MM-DD HH:mm:ss")};a.a=i,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&m.register(i,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\moment\\moment.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,t(13)(e))},812:function(e,a,t){}}]);