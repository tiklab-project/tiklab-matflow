(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{221:function(e,a,t){"use strict";t.r(a),function(e){t(694);var n,r=t(291),o=(t(526),t(525)),l=t(0),i=t.n(l),m=(t(746),t(689)),c=t(2),u=t(11),s=t(23),d=t(578),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicDetails.js";function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function N(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,r,o=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(o.push(n.value),!a||o.length!==a);l=!0);}catch(e){i=!0,r=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw r}}return o}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return p(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to debuild non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},_=function(e){var a=e.homePageStore,t=a.findUserActivity,n=a.dynamicList,u=a.page,s=N(Object(l.useState)(1),2),p=s[0],y=s[1],_=Object(c.e)().userId;Object(l.useEffect)((function(){t({userId:_,page:1,pageSize:15})}),[]);return i.a.createElement("div",{className:"dynamic-details",__source:{fileName:f,lineNumber:37,columnNumber:9}},i.a.createElement(d.a,b({},e,{pageNumber:p,dynamicList:n,dynamicTitle:"全部动态",dynamicClickText:"返回",__source:{fileName:f,lineNumber:38,columnNumber:13}})),i.a.createElement("div",{className:"dynamic-pagination",__source:{fileName:f,lineNumber:45,columnNumber:13}},i.a.createElement(r.a,{locale:m.a,__source:{fileName:f,lineNumber:46,columnNumber:17}},i.a.createElement(o.a,b({},u,{hideOnSinglePage:!0,showQuickJumper:!0,showSizeChanger:!1,onChange:function(e){var a={userId:_,page:e,pageSize:15};y(e),t(a)},__source:{fileName:f,lineNumber:47,columnNumber:21}})))))};y(_,"useState{[pageNumber,setPageNumber](1)}\nuseEffect{}");var v,h,g=Object(s.h)(Object(u.b)("homePageStore")(Object(u.c)(_)));a.default=g,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(_,"DynamicDetails","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicDetails.js"),v.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicDetails.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}.call(this,t(22)(e))},543:function(e,a,t){"use strict";(function(e){var n,r=t(0),o=t.n(r),l="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\emptyText.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,m,c=function(){return o.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:l,lineNumber:4,columnNumber:13}},o.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:l,lineNumber:5,columnNumber:17}},o.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:l,lineNumber:6,columnNumber:21}})),o.a.createElement("div",{__source:{fileName:l,lineNumber:8,columnNumber:17}},"没有数据"))},u=c;a.a=u,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\emptyText.js"),i.register(u,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\emptyText.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(22)(e))},578:function(e,a,t){"use strict";(function(e){var n,r=t(0),o=t.n(r),l=(t(579),t(543)),i="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicList.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,c,u=function(e){var a=e.dynamicList,t=e.pageNumber,n=e.dynamicTitle,r=e.dynamicClickText;return o.a.createElement("div",{className:"dynamic ".concat("更多"===r?"dynamic-shadow":""),__source:{fileName:i,lineNumber:24,columnNumber:9}},o.a.createElement("div",{className:"dynamic-top",__source:{fileName:i,lineNumber:25,columnNumber:13}},o.a.createElement("div",{className:"dynamic-top-title",__source:{fileName:i,lineNumber:26,columnNumber:17}},n),o.a.createElement("div",{className:"dynamic-top-ac",__source:{fileName:i,lineNumber:27,columnNumber:17}},o.a.createElement("div",{onClick:function(){return function(a){switch(a){case"返回":e.history.push("/index");break;case"更多":e.history.push("/index/dynamic")}}(r)},__source:{fileName:i,lineNumber:28,columnNumber:21}},r))),o.a.createElement("div",{className:"dynamic-list",__source:{fileName:i,lineNumber:33,columnNumber:13}},a&&a.length>0?a.map((function(a,n){return o.a.createElement("div",{className:"dynamic-list-item",key:n,__source:{fileName:i,lineNumber:37,columnNumber:36}},o.a.createElement("div",{className:"dynamic-item",__source:{fileName:i,lineNumber:38,columnNumber:33}},o.a.createElement("div",{className:"dynamic-item-title",__source:{fileName:i,lineNumber:39,columnNumber:37}},o.a.createElement("span",{__source:{fileName:i,lineNumber:40,columnNumber:41}},n+1+15*(t-1),"、用户"),o.a.createElement("span",{__source:{fileName:i,lineNumber:41,columnNumber:41}},a.user&&a.user.name),o.a.createElement("span",{__source:{fileName:i,lineNumber:42,columnNumber:41}},a.massage),o.a.createElement("span",{className:"dynamic-item-name",onClick:function(){return t=a.matFlow&&a.matFlow.matflowName,void e.history.push("/index/task/".concat(t,"/work"));var t},__source:{fileName:i,lineNumber:43,columnNumber:41}},a.matFlow&&a.matFlow.matflowName),o.a.createElement("span",{__source:{fileName:i,lineNumber:48,columnNumber:41}},a.news)),o.a.createElement("div",{__source:{fileName:i,lineNumber:50,columnNumber:37}},a.createTime)))})):o.a.createElement(l.a,{__source:{fileName:i,lineNumber:55,columnNumber:29}})))},s=u;a.a=s,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(u,"DynamicList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicList.js"),m.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\home\\components\\dynamicList.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,t(22)(e))},579:function(e,a,t){},746:function(e,a,t){}}]);