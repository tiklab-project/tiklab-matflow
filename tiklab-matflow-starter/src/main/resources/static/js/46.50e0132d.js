(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{248:function(e,t,r){"use strict";r.r(t),function(e){r(31);var n,o=r(4),a=(r(19),r(5)),i=(r(470),r(469)),l=(r(27),r(9)),c=(r(105),r(64)),u=r(0),m=r.n(u),s=r(500),f=r(11),d=r(796),b=(r(797),r(348)),p="D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\system\\setting\\components\\envi.js";function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},j=function(e){var t=e.settingStore,r=t.findAllPipelineScm,n=t.deletePipelineScm,f=t.updatePipelineScm,v=g(Object(u.useState)(!1),2),N=v[0],w=v[1],_=g(Object(u.useState)([]),2),E=_[0],j=_[1];Object(u.useEffect)((function(){r().then((function(e){0===e.code&&e.data&&j(e.data)}))}),[]);var O=function(e){n(e.scmId).then((function(t){if(0===t.code)for(var r=0;r<E.length;r++)E[r].scmType===e.scmType&&E.splice(r,1),j(h(E))})).catch((function(e){}))},H=function(e){switch(e){case 1:return"Git";case 5:return"SVN";case 21:return"maven";case 22:return"node"}};return m.a.createElement("div",{className:"envi",__source:{fileName:p,lineNumber:115,columnNumber:12}},m.a.createElement(b.a,{firstItem:"环境配置",__source:{fileName:p,lineNumber:116,columnNumber:9}}),m.a.createElement("div",{className:"envi-content",__source:{fileName:p,lineNumber:117,columnNumber:9}},m.a.createElement(l.a,{onClick:function(){return w(!0)},__source:{fileName:p,lineNumber:118,columnNumber:13}},"添加配置"),function(e){return e&&e.map((function(e){return m.a.createElement("div",{key:e.scmType,className:"envi-item",__source:{fileName:p,lineNumber:75,columnNumber:21}},m.a.createElement("div",{className:"envi-item-Headline",__source:{fileName:p,lineNumber:76,columnNumber:25}},m.a.createElement("div",{className:"envi-item-title",__source:{fileName:p,lineNumber:77,columnNumber:29}},H(e.scmType)),m.a.createElement("div",{className:"envi-item-delete",__source:{fileName:p,lineNumber:80,columnNumber:29}},m.a.createElement(i.a,{title:"当前项数据会被清空",onConfirm:function(){return O(e)},okText:"确定",cancelText:"取消",__source:{fileName:p,lineNumber:81,columnNumber:33}},m.a.createElement(l.a,{type:"text",__source:{fileName:p,lineNumber:87,columnNumber:37}},m.a.createElement(s.a,{__source:{fileName:p,lineNumber:87,columnNumber:57}}))))),m.a.createElement(o.a,{autoComplete:"off",onFinish:function(t){return function(e,t){var r={scmId:t.scmId,scmType:t.scmType,scmName:e.scmName,scmAddress:e.scmAddress};f(r).then((function(e){0===e.code&&c.b.success({content:"保存成功",className:"message"})})).catch((function(e){}))}(t,e)},initialValues:y({},e),__source:{fileName:p,lineNumber:91,columnNumber:25}},m.a.createElement(o.a.Item,{label:"名称",name:"scmName",rules:[{required:!0,message:"请输入".concat(H(e.scmType),"名称")}],__source:{fileName:p,lineNumber:95,columnNumber:29}},m.a.createElement(a.a,{__source:{fileName:p,lineNumber:98,columnNumber:33}})),m.a.createElement(o.a.Item,{label:"地址",name:"scmAddress",rules:[{required:!0,message:"请输入".concat(H(e.scmType),"地址")}],__source:{fileName:p,lineNumber:100,columnNumber:29}},m.a.createElement(a.a,{__source:{fileName:p,lineNumber:103,columnNumber:33}})),m.a.createElement(o.a.Item,{style:{textAlign:"right"},__source:{fileName:p,lineNumber:105,columnNumber:29}},m.a.createElement(l.a,{htmlType:"submit",__source:{fileName:p,lineNumber:106,columnNumber:33}},"保存"))))}))}(E),m.a.createElement(d.a,{visible:N,setVisible:w,enviData:E,setEnviData:j,scmTitle:H,__source:{fileName:p,lineNumber:122,columnNumber:13}})))};E(j,"useState{[visible,setVisible](false)}\nuseState{[enviData,setEnviData]([])}\nuseEffect{}");var O,H,T=Object(f.b)("settingStore")(Object(f.c)(j));t.default=T,(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(O.register(j,"Envi","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\system\\setting\\components\\envi.js"),O.register(T,"default","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\system\\setting\\components\\envi.js")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}.call(this,r(22)(e))},309:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<a.length;c++){var u=a[c];if(!l(u))return!1;var m=e[u],s=t[u];if(!1===(o=r?r.call(n,m,s,u):void 0)||void 0===o&&m!==s)return!1}return!0}},334:function(e,t,r){"use strict";function n(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function i(e,t,r,n,o,a,i,l){return a<e&&i>t||a>e&&i<t?0:a<=e&&l<=r||i>=t&&l>=r?a-e-n:i>t&&l<r||a<e&&l>r?i-t+o:0}var l=function(e,t){var r=window,o=t.scrollMode,l=t.block,c=t.inline,u=t.boundary,m=t.skipOverflowHiddenElements,s="function"==typeof u?u:function(e){return e!==u};if(!n(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,d=[],b=e;n(b)&&s(b);){if((b=b.parentElement)===f){d.push(b);break}null!=b&&b===document.body&&a(b)&&!a(document.documentElement)||null!=b&&a(b,m)&&d.push(b)}for(var p=r.visualViewport?r.visualViewport.width:innerWidth,v=r.visualViewport?r.visualViewport.height:innerHeight,y=window.scrollX||pageXOffset,N=window.scrollY||pageYOffset,h=e.getBoundingClientRect(),g=h.height,w=h.width,_=h.top,E=h.right,j=h.bottom,O=h.left,H="start"===l||"nearest"===l?_:"end"===l?j:_+g/2,T="center"===c?O+w/2:"end"===c?E:O,M=[],G=0;G<d.length;G++){var L=d[G],S=L.getBoundingClientRect(),k=S.height,I=S.width,D=S.top,A=S.right,C=S.bottom,W=S.left;if("if-needed"===o&&_>=0&&O>=0&&j<=v&&E<=p&&_>=D&&j<=C&&O>=W&&E<=A)return M;var V=getComputedStyle(L),x=parseInt(V.borderLeftWidth,10),P=parseInt(V.borderTopWidth,10),B=parseInt(V.borderRightWidth,10),F=parseInt(V.borderBottomWidth,10),R=0,X=0,Y="offsetWidth"in L?L.offsetWidth-L.clientWidth-x-B:0,q="offsetHeight"in L?L.offsetHeight-L.clientHeight-P-F:0;if(f===L)R="start"===l?H:"end"===l?H-v:"nearest"===l?i(N,N+v,v,P,F,N+H,N+H+g,g):H-v/2,X="start"===c?T:"center"===c?T-p/2:"end"===c?T-p:i(y,y+p,p,x,B,y+T,y+T+w,w),R=Math.max(0,R+N),X=Math.max(0,X+y);else{R="start"===l?H-D-P:"end"===l?H-C+F+q:"nearest"===l?i(D,C,k,P,F+q,H,H+g,g):H-(D+k/2)+q/2,X="start"===c?T-W-x:"center"===c?T-(W+I/2)+Y/2:"end"===c?T-A+B+Y:i(W,A,I,x,B+Y,T,T+w,w);var J=L.scrollLeft,U=L.scrollTop;H+=U-(R=Math.max(0,Math.min(U+R,L.scrollHeight-k+q))),T+=J-(X=Math.max(0,Math.min(J+X,L.scrollWidth-I+Y)))}M.push({el:L,top:R,left:X})}return M};function c(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(c(t)&&"function"==typeof t.behavior)return t.behavior(r?l(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:c(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,a=e.left;n.scroll&&r?n.scroll({top:o,left:a,behavior:t}):(n.scrollTop=o,n.scrollLeft=a)}))}(l(e,n),n.behavior)}}},348:function(e,t,r){"use strict";(function(e){var n,o=r(0),a=r.n(o),i=(r(350),"D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\common\\breadcrumb\\breadcrumb.js");(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,u=function(e){var t=e.config,r=e.firstItem,n=e.secondItem;return a.a.createElement("div",{className:t?"breadcrumb-topOver":"breadcrumb",__source:{fileName:i,lineNumber:9,columnNumber:13}},a.a.createElement("span",{className:n?"breadcrumb-span":"",__source:{fileName:i,lineNumber:10,columnNumber:17}},r),n?a.a.createElement("span",{__source:{fileName:i,lineNumber:11,columnNumber:31}},"  >  ",n):null)},m=u;t.a=m,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(u,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\common\\breadcrumb\\breadcrumb.js"),l.register(m,"default","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(22)(e))},350:function(e,t,r){},796:function(e,t,r){"use strict";(function(e){r(29);var n,o=r(17),a=r(0),i=r.n(a),l="D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\system\\setting\\components\\enviModal.js";function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,s,f=[{scmId:"1",scmType:1},{scmId:"5",scmType:5},{scmId:"22",scmType:22},{scmId:"21",scmType:21}],d=function(e){var t=e.visible,r=e.setVisible,n=e.enviData,a=e.setEnviData,u=e.scmTitle,m=function(e){return n.some((function(t){return t.scmType===e}))};return i.a.createElement(o.a,{visible:t,onCancel:function(){return r(!1)},footer:[],closable:!1,__source:{fileName:l,lineNumber:55,columnNumber:9}},i.a.createElement("div",{className:"enviModal",__source:{fileName:l,lineNumber:61,columnNumber:13}},i.a.createElement("div",{className:"enviModal-title",__source:{fileName:l,lineNumber:62,columnNumber:17}},"配置任务组"),i.a.createElement("div",{className:"enviModal-group",__source:{fileName:l,lineNumber:63,columnNumber:17}},function(e){return e.map((function(e){return i.a.createElement("div",{onClick:function(){return m(e.scmType)?null:function(e){var t=c(n);t.push(e),a(t),r(!1)}(e)},key:e.scmType,className:"enviModal-group_list enviModal-item ".concat(m(e.scmType)?"isGray":"notGray"),__source:{fileName:l,lineNumber:41,columnNumber:21}},i.a.createElement("div",{__source:{fileName:l,lineNumber:46,columnNumber:25}},u(e.scmType)),m(e.scmType)?i.a.createElement("div",{__source:{fileName:l,lineNumber:49,columnNumber:49}},"已存在"):null)}))}(f))))},b=d;t.a=b,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(f,"lis","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\system\\setting\\components\\enviModal.js"),m.register(d,"EnviModal","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\system\\setting\\components\\enviModal.js"),m.register(b,"default","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\system\\setting\\components\\enviModal.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(22)(e))},797:function(e,t,r){}}]);