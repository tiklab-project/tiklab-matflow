(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{813:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=(r(338),r(94)),l=r(830),c=r(31),i="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSetAside.js";function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=Object(c.b)("pipelineStore")(Object(c.c)((function(e){var t=e.pipelineStore,r=e.location.pathname,c=u(Object(n.useState)(""),2),m=c[0],s=c[1],b=t.pipelineId,f=[{key:"/index/task/".concat(b,"/assembly/set"),label:"设置",enCode:"pipeline_seting"},{key:"/index/task/".concat(b,"/assembly/user"),label:"成员",enCode:"pipeline_user"},{key:"/index/task/".concat(b,"/assembly/role"),label:"权限",enCode:"pipeline_auth"}];Object(n.useEffect)((function(){s(r)}),[r]);var p=function(t){return a.a.createElement(o.a,{key:t.key,code:t.enCode,domainId:b,__source:{fileName:i,lineNumber:55,columnNumber:17}},function(t){return a.a.createElement("div",{key:t.key,className:"projectSet-item ".concat(m===t.key?"projectSet-select":""," "),onClick:function(){return e.history.push(t.key)},__source:{fileName:i,lineNumber:40,columnNumber:16}},a.a.createElement("span",{className:"projectSet-item-icon",__source:{fileName:i,lineNumber:45,columnNumber:21}},a.a.createElement(l.a,{__source:{fileName:i,lineNumber:46,columnNumber:25}})),a.a.createElement("span",{className:"projectSet-item-label",__source:{fileName:i,lineNumber:48,columnNumber:21}},t.label))}(t))};return a.a.createElement("div",{className:"projectSet-aside",__source:{fileName:i,lineNumber:63,columnNumber:9}},f.map((function(e){return p(e)})))}))),b=r(226),f="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\modules\\projectSet\\common\\projectSet.js";function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){var t=e.route;return a.a.createElement("div",{className:"projectSet",__source:{fileName:f,lineNumber:10,columnNumber:9}},a.a.createElement(s,p({},e,{__source:{fileName:f,lineNumber:11,columnNumber:13}})),a.a.createElement("div",{className:"projectSet-content",__source:{fileName:f,lineNumber:12,columnNumber:13}},Object(b.a)(t.routes)))}}}]);