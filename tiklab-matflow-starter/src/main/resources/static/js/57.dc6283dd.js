(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{267:function(e,t,n){"use strict";n.r(t),function(e){var r,a=n(0),o=n.n(a),i=n(813),c=n(158),l=n(15),u=n(19),m=n(2),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js";function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=e.route,n=e.match,r=e.pipelineStore,l=r.findAllPipelineStatus,u=r.setPipelineId,f=r.setPipeline,p=n.params.pipelineId,b=Object(m.getUser)().userId;Object(a.useEffect)((function(){u(p),l(b).then((function(e){var t=e.data;0===e.code&&t&&t&&t.map((function(e){e.pipelineId===p&&f(e)}))}))}),[p]);return Object(a.useEffect)((function(){return function(){return u("")}}),[]),o.a.createElement("div",{className:"project",__source:{fileName:s,lineNumber:50,columnNumber:9}},o.a.createElement(i.a,d({},e,{pipelineStore:r,__source:{fileName:s,lineNumber:51,columnNumber:13}})),o.a.createElement("div",{className:"project-content",__source:{fileName:s,lineNumber:55,columnNumber:13}},Object(c.a)(t.routes)))};f(p,"useEffect{}\nuseEffect{}");var b,N,_=Object(u.g)(Object(l.b)("pipelineStore")(Object(l.c)(p)));t.default=_,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(p,"Project","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js"),b.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\project.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}.call(this,n(14)(e))},813:function(e,t,n){"use strict";(function(e){n(529);var r,a=n(525),o=n(0),i=n.n(o),c=(n(814),n(1044)),l=n(1045),u=n(779),m=n(1036),s=n(15),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js";function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},N=function(e){var t=e.pipelineStore,n=e.structureListStore,r=e.location.pathname,s=f(Object(o.useState)(""),2),p=s[0],b=s[1],N=t.lastPath,_=t.setLastPath,v=t.pipelineList,y=t.pipelineId,j=t.pipeline,E=n.setState,g=n.setEnforcer,h=n.setMode;Object(o.useEffect)((function(){_(r.substring(r.lastIndexOf("/")+1)),b(r)}),[r]);var k=[{to:"/index/task/".concat(y,"/work"),title:"概况",icon:i.a.createElement(c.a,{__source:{fileName:d,lineNumber:32,columnNumber:18}}),key:"2"},{to:"/index/task/".concat(y,"/config"),title:"配置",icon:i.a.createElement(l.a,{__source:{fileName:d,lineNumber:38,columnNumber:19}}),key:"3"},{to:"/index/task/".concat(y,"/structure"),title:"历史",icon:i.a.createElement(u.a,{__source:{fileName:d,lineNumber:44,columnNumber:19}}),key:"4"}],L=function(t){return i.a.createElement("div",{onClick:function(){!function(t){y!==t.pipelineId&&(E(0),g(null),h(0),0===r.indexOf("/index/task/".concat(y,"/assembly"))?e.history.push("/index/task/".concat(t.pipelineId,"/assembly/").concat(N)):e.history.push("/index/task/".concat(t.pipelineId,"/").concat(N)))}(t)},key:t.pipelineId,className:"opt-content-group_item ".concat(t.pipelineId===y?"opt-content-active":null),__source:{fileName:d,lineNumber:69,columnNumber:17}},i.a.createElement("span",{className:"opt-content-group-icon icon-".concat(t.color),__source:{fileName:d,lineNumber:73,columnNumber:21}},t.pipelineName.substring(0,1).toUpperCase()),i.a.createElement("span",{className:"opt-content-group-name",__source:{fileName:d,lineNumber:76,columnNumber:21}},t.pipelineName))},w=i.a.createElement("div",{className:"opt",__source:{fileName:d,lineNumber:84,columnNumber:9}},i.a.createElement("div",{className:"opt-content",__source:{fileName:d,lineNumber:85,columnNumber:13}},i.a.createElement("div",{className:"opt-content-title",__source:{fileName:d,lineNumber:86,columnNumber:17}},"流水线名称"),i.a.createElement("div",{className:"opt-content-group",__source:{fileName:d,lineNumber:87,columnNumber:17}},v&&v.map((function(e){return L(e)}))))),O=function(t){return i.a.createElement("div",{key:t.key,className:"aside_content aside_item ".concat(p===t.to?"aside_active":null),onClick:function(){return function(t){e.history.push(t)}(t.to)},__source:{fileName:d,lineNumber:100,columnNumber:18}},i.a.createElement("div",{className:"aside_content_icon",__source:{fileName:d,lineNumber:104,columnNumber:21}},t.icon),i.a.createElement("div",{className:"aside_content_title",__source:{fileName:d,lineNumber:107,columnNumber:21}},t.title))};return i.a.createElement("div",{className:"aside",__source:{fileName:d,lineNumber:112,columnNumber:10}},i.a.createElement("div",{className:"content",__source:{fileName:d,lineNumber:113,columnNumber:14}},i.a.createElement(a.a,{overlay:w,trigger:["click"],overlayStyle:{paddingLeft:10},__source:{fileName:d,lineNumber:114,columnNumber:18}},i.a.createElement("div",{className:"aside_content aside_item",onClick:function(e){return e.preventDefault()},__source:{fileName:d,lineNumber:115,columnNumber:22}},i.a.createElement("div",{className:"dropdowns_icon icon-".concat(j.color),__source:{fileName:d,lineNumber:118,columnNumber:26}},j&&j.pipelineName.substring(0,1).toUpperCase()))),k.map((function(e){return O(e)}))),i.a.createElement("div",{className:"project-sys",onClick:function(){return e.history.push("/index/task/".concat(y,"/assembly/redel"))},__source:{fileName:d,lineNumber:130,columnNumber:14}},i.a.createElement("div",{className:"aside_content_icon",__source:{fileName:d,lineNumber:133,columnNumber:18}},i.a.createElement(m.a,{__source:{fileName:d,lineNumber:134,columnNumber:22}})),i.a.createElement("div",{__source:{fileName:d,lineNumber:136,columnNumber:18}},"设置")))};b(N,'useState{[nav,setNav]("")}\nuseEffect{}');var _,v,y=Object(s.b)("structureListStore")(Object(s.c)(N));t.a=y,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(N,"ProjectAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js"),_.register(y,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\projectAside.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,n(14)(e))},814:function(e,t,n){}}]);