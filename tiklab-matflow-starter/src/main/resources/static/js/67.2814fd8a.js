(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{811:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=(t(366),t(84)),l=t(236),o="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\aside\\Setting.js";function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,a,i=[],l=!0,o=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==t.return||t.return()}finally{if(o)throw a}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var s=function(e){var n=e.location,t=e.route,c=e.secondRouter,s=e.pipelineId,m=n.pathname,f=u(Object(r.useState)(""),2),b=f[0],p=f[1];Object(r.useEffect)((function(){p(m)}),[m]);var d=function(n){return a.a.createElement(i.a,{key:n.key,code:n.enCode,domainId:s,__source:{fileName:o,lineNumber:34,columnNumber:18}},function(n){return a.a.createElement("div",{key:n.key,className:"mf-setting-aside-item ".concat(b===n.key?"mf-setting-aside-select":""," "),onClick:function(){return e.history.push(n.key)},__source:{fileName:o,lineNumber:25,columnNumber:17}},a.a.createElement("span",{className:"mf-setting-aside-item-label",__source:{fileName:o,lineNumber:29,columnNumber:21}},n.label))}(n))};return a.a.createElement("div",{className:"mf-setting",__source:{fileName:o,lineNumber:40,columnNumber:9}},a.a.createElement("div",{className:"mf-setting-aside",__source:{fileName:o,lineNumber:41,columnNumber:13}},a.a.createElement("div",{className:"mf-setting-aside-head",__source:{fileName:o,lineNumber:42,columnNumber:17}},"设置"),c.map((function(e){return d(e)}))),a.a.createElement("div",{className:"mf-setting-content",__source:{fileName:o,lineNumber:47,columnNumber:13}},Object(l.a)(t.routes)))};function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}n.default=function(e){var n=e.match.params.id,t=[{key:"/index/pipeline/".concat(n,"/assembly/set"),label:"流水线信息",enCode:"pipeline_seting"},{key:"/index/pipeline/".concat(n,"/assembly/user"),label:"成员",enCode:"pipeline_user"},{key:"/index/pipeline/".concat(n,"/assembly/role"),label:"权限",enCode:"pipeline_auth"}];return a.a.createElement(s,m({},e,{pipelineId:n,secondRouter:t,__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\setting\\navigator\\PipelineSetting.js",lineNumber:29,columnNumber:13}}))}}}]);