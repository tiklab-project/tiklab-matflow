(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{404:function(e,t,r){"use strict";r.r(t),function(e){var o,a=r(0),n=r.n(a),l=r(951),i=r(249),c="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSet.js";function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,m,d=function(e){var t=e.route;return n.a.createElement("div",{className:"projectSet",__source:{fileName:c,lineNumber:10,columnNumber:9}},n.a.createElement(l.a,u({},e,{__source:{fileName:c,lineNumber:11,columnNumber:13}})),n.a.createElement("div",{className:"projectSet-content",__source:{fileName:c,lineNumber:12,columnNumber:13}},Object(i.a)(t.routes)))},f=d;t.default=f,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(d,"ProjectSet","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSet.js"),s.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSet.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,r(36)(e))},951:function(e,t,r){"use strict";(function(e){r(382);var o,a=r(99),n=r(0),l=r.n(n),i=r(1065),c=r(34),u=(r(952),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSetAside.js");function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,a,n=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var t=e.pipelineStore,r=e.location.pathname,o=s(Object(n.useState)(""),2),c=o[0],m=o[1],d=t.setLastPath,f=t.pipelineId;Object(n.useEffect)((function(){d(r.substring(r.lastIndexOf("/")+1)),m(r)}),[r]);var p=[{key:"/index/task/".concat(f,"/assembly/set"),label:"设置",enCode:"pipeline_seting"},{key:"/index/task/".concat(f,"/assembly/user"),label:"成员",enCode:"pipeline_user"},{key:"/index/task/".concat(f,"/assembly/role"),label:"权限",enCode:"pipeline_auth"}],b=function(t){return l.a.createElement(a.a,{key:t.key,code:t.enCode,domainId:f,__source:{fileName:u,lineNumber:57,columnNumber:17}},function(t){return l.a.createElement("div",{key:t.key,className:"projectSet-item ".concat(c===t.key?"projectSet-select":""," "),onClick:function(){return e.history.push(t.key)},__source:{fileName:u,lineNumber:42,columnNumber:16}},l.a.createElement("span",{className:"projectSet-item-icon",__source:{fileName:u,lineNumber:47,columnNumber:21}},l.a.createElement(i.a,{__source:{fileName:u,lineNumber:48,columnNumber:25}})),l.a.createElement("span",{className:"projectSet-item-label",__source:{fileName:u,lineNumber:50,columnNumber:21}},t.label))}(t))};return l.a.createElement("div",{className:"projectSet-aside",__source:{fileName:u,lineNumber:65,columnNumber:9}},p.map((function(e){return b(e)})))};d(f,'useState{[nav,setNav]("")}\nuseEffect{}');var p,b,y=Object(c.b)("pipelineStore")(Object(c.c)(f));t.a=y,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(f,"ProjectSetAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSetAside.js"),p.register(y,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSetAside.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(36)(e))},952:function(e,t,r){}}]);