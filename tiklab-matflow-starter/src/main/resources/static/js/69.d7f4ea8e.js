(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{404:function(e,t,n){"use strict";n.r(t),function(e){var r,a=n(0),o=n.n(a),i=n(257),c=n(34),l=n(6),u=n(383),m=n(880),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js";function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=e.route,n=e.match,r=e.pipelineStore,c=e.systemRoleStore,u=e.configStore,d=r.findAllPipelineStatus,p=r.setPipelineId,b=r.setPipeline,N=c.getInitProjectPermissions,_=n.params.id,v=Object(l.getUser)().userId;Object(a.useEffect)((function(){p(_),d(v).then((function(t){var n=t.data;0===t.code&&n&&(y(n)?n&&n.map((function(e){e.id===_&&(b(e),N(v,_,1===e.power))})):e.history.push("/404"))}))}),[_]);var y=function(e){return e&&e.some((function(e){return e.id===_}))};return Object(a.useEffect)((function(){return function(){return b("")}}),[_]),o.a.createElement("div",{className:"project",__source:{fileName:s,lineNumber:53,columnNumber:9}},o.a.createElement(m.a,f({},e,{pipelineStore:r,configStore:u,__source:{fileName:s,lineNumber:54,columnNumber:13}})),o.a.createElement("div",{className:"project-content",__source:{fileName:s,lineNumber:59,columnNumber:13}},Object(i.a)(t.routes)))};d(p,"useEffect{}\nuseEffect{}");var b,N,_=Object(c.b)("pipelineStore","configStore",u.SYSTEM_ROLE_STORE)(Object(c.c)(p));t.default=_,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(p,"Project","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js"),b.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}.call(this,n(37)(e))},880:function(e,t,n){"use strict";(function(e){n(151);var r,a=n(97),o=n(0),i=n.n(o),c=(n(881),n(1090)),l=n(1091),u=n(843),m=n(1036),s=n(1082),f=n(34),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js";function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},_=function(e){var t=e.pipelineStore,n=e.configStore,r=e.location.pathname,f=p(Object(o.useState)(""),2),b=f[0],N=f[1],_=t.lastPath,v=t.setLastPath,y=t.pipelineList,j=t.pipelineId,E=t.pipeline,h=n.setTaskFormDrawer;Object(o.useEffect)((function(){v(r.substring(r.lastIndexOf("/")+1)),N(r)}),[r]);var g=[{to:"/index/task/".concat(j,"/survey"),title:"概况",icon:i.a.createElement(c.a,{__source:{fileName:d,lineNumber:33,columnNumber:18}}),key:"2"},{to:"/index/task/".concat(j,"/config"),title:"配置",icon:i.a.createElement(l.a,{__source:{fileName:d,lineNumber:39,columnNumber:19}}),key:"3"},{to:"/index/task/".concat(j,"/structure"),title:"历史",icon:i.a.createElement(u.a,{__source:{fileName:d,lineNumber:45,columnNumber:19}}),key:"4"}],k=function(t){return i.a.createElement("div",{onClick:function(){!function(t){h(!1),j!==t.id&&(0===r.indexOf("/index/task/".concat(j,"/assembly"))?e.history.push("/index/task/".concat(t.id,"/assembly/").concat(_)):e.history.push("/index/task/".concat(t.id,"/").concat(_)))}(t)},key:t.id,className:"pipeline-opt-item",__source:{fileName:d,lineNumber:68,columnNumber:17}},i.a.createElement("span",{className:"pipeline-opt-icon mf-icon-".concat(t.color),__source:{fileName:d,lineNumber:69,columnNumber:21}},t.name.substring(0,1).toUpperCase()),i.a.createElement("span",{className:"pipeline-opt-name",__source:{fileName:d,lineNumber:72,columnNumber:21}},t.name))},w=i.a.createElement("div",{className:"pipeline-opt",__source:{fileName:d,lineNumber:80,columnNumber:9}},i.a.createElement("div",{className:"pipeline-opt-title",__source:{fileName:d,lineNumber:81,columnNumber:13}},"切换流水线"),i.a.createElement("div",{className:"pipeline-opt-group",__source:{fileName:d,lineNumber:82,columnNumber:13}},y&&y.map((function(e){return k(e)})))),S=function(t){return i.a.createElement("div",{key:t.key,className:"aside_content ".concat(b===t.to?"aside_active":""),onClick:function(){return function(t){e.history.push(t)}(t.to)},__source:{fileName:d,lineNumber:94,columnNumber:18}},i.a.createElement("div",{className:"aside_content_icon",__source:{fileName:d,lineNumber:98,columnNumber:21}},t.icon),i.a.createElement("div",{className:"aside_content_title",__source:{fileName:d,lineNumber:101,columnNumber:21}},t.title))};return i.a.createElement("div",{className:"aside",__source:{fileName:d,lineNumber:106,columnNumber:10}},i.a.createElement("div",{className:"content",__source:{fileName:d,lineNumber:107,columnNumber:14}},i.a.createElement(a.a,{overlayStyle:{top:"48px",left:"80px"},overlay:w,trigger:["click"],overlayClassName:"aside-dropdown",__source:{fileName:d,lineNumber:108,columnNumber:18}},i.a.createElement("div",{className:"aside_chang",onClick:function(e){return e.preventDefault()},__source:{fileName:d,lineNumber:114,columnNumber:22}},i.a.createElement("span",{className:"dropdowns_icon mf-icon-".concat(E.color),__source:{fileName:d,lineNumber:117,columnNumber:27}},E&&E.name.substring(0,1).toUpperCase()),i.a.createElement("span",{__source:{fileName:d,lineNumber:120,columnNumber:26}},i.a.createElement(m.a,{__source:{fileName:d,lineNumber:121,columnNumber:30}})))),g.map((function(e){return S(e)}))),i.a.createElement("div",{className:"project-sys",onClick:function(){return e.history.push("/index/task/".concat(j,"/assembly/set"))},__source:{fileName:d,lineNumber:132,columnNumber:14}},i.a.createElement("div",{className:"aside_content_icon",__source:{fileName:d,lineNumber:135,columnNumber:18}},i.a.createElement(s.a,{__source:{fileName:d,lineNumber:136,columnNumber:22}})),i.a.createElement("div",{__source:{fileName:d,lineNumber:138,columnNumber:18}},"设置")))};N(_,'useState{[nav,setNav]("")}\nuseEffect{}');var v,y,j=Object(f.c)(_);t.a=j,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(_,"ProjectAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js"),v.register(j,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,n(37)(e))},881:function(e,t,n){}}]);