(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{552:function(e,n,t){"use strict";t.d(n,"d",(function(){return o})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return s})),t.d(n,"a",(function(){return a}));var r=t(113),i=t.n(r);i()().format("YYYY-MM-DD HH:mm:ss"),i()().format("HH:mm");var o=function(e){for(var n=window.location.search.substring(1).split("&"),t=0;t<n.length;t++){var r=n[t].split("=");if(r[0]===e)return r[1]}return!1},u=function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120},c=function(e){var n=parseInt(e/86400),t=parseInt(e%86400/3600),r=parseInt(e%3600/60),i=parseInt(e%60);return n>=1?n+" 天 "+t+" 时 "+r+" 分 "+i+" 秒":t>=1?t+" 时 "+r+" 分 "+i+" 秒":r>=1?r+" 分 "+i+" 秒":i+" 秒"},s=function(e,n){return n?e.split("/index/pipeline/"+n):e.split("/")},a=function(e){return{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}}},563:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},564:function(e,n,t){var r={"./es":545,"./es-do":546,"./es-do.js":546,"./es-mx":547,"./es-mx.js":547,"./es-us":548,"./es-us.js":548,"./es.js":545,"./zh-cn":549,"./zh-cn.js":549};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=564},917:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(552);n.default=function(e){return Object(r.useEffect)((function(){var e=Object(o.d)("code");null!==e&&(localStorage.setItem("codeValue",e),window.close())}),[]),i.a.createElement("div",{style:{marginTop:150,textAlign:"center"},__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\authorize\\Authorize.js",lineNumber:24,columnNumber:9}},"用户授权")}}}]);