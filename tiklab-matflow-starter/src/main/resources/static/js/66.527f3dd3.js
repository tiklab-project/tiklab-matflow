(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{281:function(e,t,n){"use strict";n.r(t),function(e){var r,a=n(0),o=n.n(a),i=n(858),l=n(161),c=n(15),u=n(25),m=n(2),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js";function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var t=e.route,n=e.match,r=e.pipelineStore,c=r.findAllPipelineStatus,u=r.setPipelineId,d=r.setPipeline,f=n.params.pipelineId,b=Object(m.getUser)().userId;Object(a.useEffect)((function(){u(f),c(b).then((function(e){var t=e.data;0===e.code&&t&&t&&t.map((function(e){e.pipelineId===f&&d(e)}))}))}),[f]);return Object(a.useEffect)((function(){return function(){return d("")}}),[]),o.a.createElement("div",{className:"project",__source:{fileName:s,lineNumber:50,columnNumber:9}},o.a.createElement(i.a,p({},e,{pipelineStore:r,__source:{fileName:s,lineNumber:51,columnNumber:13}})),o.a.createElement("div",{className:"project-content",__source:{fileName:s,lineNumber:55,columnNumber:13}},Object(l.a)(t.routes)))};d(f,"useEffect{}\nuseEffect{}");var b,N,_=Object(u.g)(Object(c.b)("pipelineStore")(Object(c.c)(f)));t.default=_,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"Project","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js"),b.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}.call(this,n(26)(e))},858:function(e,t,n){"use strict";(function(e){n(261);var r,a=n(193),o=n(0),i=n.n(o),l=(n(859),n(1076)),c=n(1077),u=n(821),m=n(1023),s=n(1066),p=n(15),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js";function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},_=function(e){var t=e.pipelineStore,n=e.location.pathname,r=f(Object(o.useState)(""),2),p=r[0],b=r[1],N=t.lastPath,_=t.setLastPath,v=t.pipelineList,y=t.pipelineId,j=t.pipeline;Object(o.useEffect)((function(){_(n.substring(n.lastIndexOf("/")+1)),b(n)}),[n]);var E=[{to:"/index/task/".concat(y,"/survey"),title:"概况",icon:i.a.createElement(l.a,{__source:{fileName:d,lineNumber:32,columnNumber:18}}),key:"2"},{to:"/index/task/".concat(y,"/config"),title:"配置",icon:i.a.createElement(c.a,{__source:{fileName:d,lineNumber:38,columnNumber:19}}),key:"3"},{to:"/index/task/".concat(y,"/structure"),title:"历史",icon:i.a.createElement(u.a,{__source:{fileName:d,lineNumber:44,columnNumber:19}}),key:"4"}],h=function(t){return i.a.createElement("div",{onClick:function(){!function(t){y!==t.pipelineId&&(0===n.indexOf("/index/task/".concat(y,"/assembly"))?e.history.push("/index/task/".concat(t.pipelineId,"/assembly/").concat(N)):e.history.push("/index/task/".concat(t.pipelineId,"/").concat(N)))}(t)},key:t.pipelineId,className:"pipeline-opt-item",__source:{fileName:d,lineNumber:66,columnNumber:17}},i.a.createElement("span",{className:"pipeline-opt-icon mf-icon-".concat(t.color),__source:{fileName:d,lineNumber:67,columnNumber:21}},t.pipelineName.substring(0,1).toUpperCase()),i.a.createElement("span",{className:"pipeline-opt-name",__source:{fileName:d,lineNumber:70,columnNumber:21}},t.pipelineName))},k=i.a.createElement("div",{className:"pipeline-opt",__source:{fileName:d,lineNumber:78,columnNumber:9}},i.a.createElement("div",{className:"pipeline-opt-title",__source:{fileName:d,lineNumber:79,columnNumber:13}},"切换流水线"),i.a.createElement("div",{className:"pipeline-opt-group",__source:{fileName:d,lineNumber:80,columnNumber:13}},v&&v.map((function(e){return h(e)})))),g=function(t){return i.a.createElement("div",{key:t.key,className:"aside_content ".concat(p===t.to?"aside_active":""),onClick:function(){return function(t){e.history.push(t)}(t.to)},__source:{fileName:d,lineNumber:92,columnNumber:18}},i.a.createElement("div",{className:"aside_content_icon",__source:{fileName:d,lineNumber:96,columnNumber:21}},t.icon),i.a.createElement("div",{className:"aside_content_title",__source:{fileName:d,lineNumber:99,columnNumber:21}},t.title))};return i.a.createElement("div",{className:"aside",__source:{fileName:d,lineNumber:104,columnNumber:10}},i.a.createElement("div",{className:"content",__source:{fileName:d,lineNumber:105,columnNumber:14}},i.a.createElement(a.a,{overlayStyle:{top:"48px",left:"80px"},overlay:k,trigger:["click"],overlayClassName:"aside-dropdown",__source:{fileName:d,lineNumber:106,columnNumber:18}},i.a.createElement("div",{className:"aside_chang",onClick:function(e){return e.preventDefault()},__source:{fileName:d,lineNumber:112,columnNumber:22}},i.a.createElement("span",{className:"dropdowns_icon mf-icon-".concat(j.color),__source:{fileName:d,lineNumber:115,columnNumber:27}},j&&j.pipelineName.substring(0,1).toUpperCase()),i.a.createElement("span",{__source:{fileName:d,lineNumber:118,columnNumber:26}},i.a.createElement(m.a,{__source:{fileName:d,lineNumber:119,columnNumber:30}})))),E.map((function(e){return g(e)}))),i.a.createElement("div",{className:"project-sys",onClick:function(){return e.history.push("/index/task/".concat(y,"/assembly/redel"))},__source:{fileName:d,lineNumber:130,columnNumber:14}},i.a.createElement("div",{className:"aside_content_icon",__source:{fileName:d,lineNumber:133,columnNumber:18}},i.a.createElement(s.a,{__source:{fileName:d,lineNumber:134,columnNumber:22}})),i.a.createElement("div",{__source:{fileName:d,lineNumber:136,columnNumber:18}},"设置")))};N(_,'useState{[nav,setNav]("")}\nuseEffect{}');var v,y,j=Object(p.c)(_);t.a=j,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(_,"ProjectAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js"),v.register(j,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,n(26)(e))},859:function(e,t,n){}}]);