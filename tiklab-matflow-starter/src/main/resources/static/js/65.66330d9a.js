(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{385:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},402:function(e,n,t){"use strict";t.d(n,"d",(function(){return i})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return s})),t.d(n,"a",(function(){return d}));var r=t(132),o=t.n(r),i=(o()().format("YYYY-MM-DD HH:mm:ss"),o()().format("HH:mm"),document.documentElement.clientHeight,function(e){for(var n=window.location.search.substring(1).split("&"),t=0;t<n.length;t++){var r=n[t].split("=");if(r[0]===e)return r[1]}return!1}),u=function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120},c=function(e){var n=parseInt(e/86400),t=parseInt(e%86400/3600),r=parseInt(e%3600/60),o=parseInt(e%60);return n>=1?n+" 天 "+t+" 时 "+r+" 分 "+o+" 秒":t>=1?t+" 时 "+r+" 分 "+o+" 秒":r>=1?r+" 分 "+o+" 秒":o+" 秒"},s=function(e,n){return n?e.split("/index/task/"+n):e.split("/")},d=function(e){return{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}}},491:function(e,n,t){var r={"./es":396,"./es-do":397,"./es-do.js":397,"./es-mx":398,"./es-mx.js":398,"./es-us":399,"./es-us.js":399,"./es.js":396,"./zh-cn":400,"./zh-cn.js":400,"./zh-tw":401,"./zh-tw.js":401};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=491},767:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(402);n.default=function(e){return Object(r.useEffect)((function(){var e=Object(i.d)("code");null!==e&&(localStorage.setItem("codeValue",e),window.close())}),[]),o.a.createElement("div",{style:{marginTop:150,textAlign:"center"},__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\modules\\config\\authorize\\authorize.js",lineNumber:16,columnNumber:9}},"用户授权")}}}]);