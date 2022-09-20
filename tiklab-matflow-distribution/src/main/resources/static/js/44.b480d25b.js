(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{223:function(e,t,r){"use strict";r.r(t),function(e){r(27);var n,o=r(9),l=(r(31),r(4)),a=(r(19),r(5)),i=(r(105),r(64)),u=r(0),c=r.n(u),m=r(2),s=r(11),f=(r(749),r(480)),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js";function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to debuild non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=[{id:"0",title:"流水线",desc:"精心地组织一个可以长期运行在多个节点上的任务。适用于构建流水线（更加正式地应当称为工作流），增加或者组织难以采用自由风格的任务类型。"},{id:"1",title:"构建一个maven项目",desc:"构建一个maven项目。"}],v=function(e){var t=e.matFlowStore,r=t.createMatFlow,n=t.matFlowList,s=t.findAllMatFlowStatus,h=Object(u.useRef)(),p=b(Object(u.useState)(1),2),v=p[0],N=p[1],y=Object(m.e)().userId;Object(u.useEffect)((function(){h.current.focus(),s(y)}),[]);return c.a.createElement("div",{className:"new",__source:{fileName:d,lineNumber:78,columnNumber:9}},c.a.createElement("div",{className:"new-lump",__source:{fileName:d,lineNumber:79,columnNumber:13}},c.a.createElement("div",{className:"new-lump-form",__source:{fileName:d,lineNumber:80,columnNumber:17}},c.a.createElement(l.a,{id:"form",name:"basic",onFinish:function(t){var n={user:{id:y},matflowName:t.matFlowName,matflowType:1,matflowCreateTime:f.a.moment};r(n).then((function(r){0===r.code&&r.data?e.history.push("/index/config/".concat(t.matFlowName)):i.b.error({content:"添加失败",className:"message"})}))},autoComplete:"off",__source:{fileName:d,lineNumber:81,columnNumber:21}},c.a.createElement(l.a.Item,{label:"流水线名称",name:"matFlowName",rules:[{required:!0,message:""},{pattern:/^[\s\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"流水线名称不能包含非法字符，如&,%，&，#……等"},function(e){e.getFieldValue;return{validator:function(e,t){if(!t)return Promise.reject("请输入名称");var r=[];return n&&(r=n&&n.map((function(e){return e.matFlowName}))),r.includes(t)?Promise.reject("名称已经存在"):Promise.resolve()}}}],__source:{fileName:d,lineNumber:82,columnNumber:25}},c.a.createElement(a.a,{style:{width:400},ref:h,__source:{fileName:d,lineNumber:108,columnNumber:29}})))),c.a.createElement("div",{className:"new-lump-type",__source:{fileName:d,lineNumber:112,columnNumber:17}},c.a.createElement("div",{className:"new-lump-type-choose",__source:{fileName:d,lineNumber:113,columnNumber:21}},function(e){return e.map((function(e,t){return c.a.createElement("div",{key:e.id,onClick:function(){return function(e){N(e)}(t+1)},className:"choose-item ".concat(v===t+1?"choose-active":""),__source:{fileName:d,lineNumber:59,columnNumber:17}},c.a.createElement("div",{className:"choose-item-icon",__source:{fileName:d,lineNumber:63,columnNumber:21}},c.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:d,lineNumber:64,columnNumber:25}},c.a.createElement("use",{xlinkHref:"#icon-lishijishi",__source:{fileName:d,lineNumber:65,columnNumber:29}}))),c.a.createElement("div",{className:"choose-item-options",__source:{fileName:d,lineNumber:68,columnNumber:21}},c.a.createElement("label",{__source:{fileName:d,lineNumber:69,columnNumber:25}},e.title),c.a.createElement("div",{__source:{fileName:d,lineNumber:70,columnNumber:25}},e.desc)))}))}(w)))),c.a.createElement("div",{className:"new-btn",__source:{fileName:d,lineNumber:118,columnNumber:13}},c.a.createElement("span",{className:"new-btn-span",__source:{fileName:d,lineNumber:119,columnNumber:17}},c.a.createElement(o.a,{htmlType:"submit",form:"form",type:"primary",__source:{fileName:d,lineNumber:120,columnNumber:21}},"添加"))))};p(v,"useRef{inputRef}\nuseState{[liStatus,setLiStatus](1)}\nuseEffect{}");var N,y,g=Object(s.b)("matFlowStore")(Object(s.c)(v));t.default=g,(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(N.register(w,"lis","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js"),N.register(v,"MatFlowAdd","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js"),N.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\matFlow\\matFlowAdd\\matFlowAdd.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,r(22)(e))},302:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<l.length;u++){var c=l[u];if(!i(c))return!1;var m=e[c],s=t[c];if(!1===(o=r?r.call(n,m,s,c):void 0)||void 0===o&&m!==s)return!1}return!0}},324:function(e,t,r){"use strict";function n(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function l(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function a(e,t,r,n,o,l,a,i){return l<e&&a>t||l>e&&a<t?0:l<=e&&i<=r||a>=t&&i>=r?l-e-n:a>t&&i<r||l<e&&i>r?a-t+o:0}var i=function(e,t){var r=window,o=t.scrollMode,i=t.block,u=t.inline,c=t.boundary,m=t.skipOverflowHiddenElements,s="function"==typeof c?c:function(e){return e!==c};if(!n(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,d=[],b=e;n(b)&&s(b);){if((b=b.parentElement)===f){d.push(b);break}null!=b&&b===document.body&&l(b)&&!l(document.documentElement)||null!=b&&l(b,m)&&d.push(b)}for(var h=r.visualViewport?r.visualViewport.width:innerWidth,p=r.visualViewport?r.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,N=e.getBoundingClientRect(),y=N.height,g=N.width,_=N.top,E=N.right,j=N.bottom,F=N.left,O="start"===i||"nearest"===i?_:"end"===i?j:_+y/2,k="center"===u?F+g/2:"end"===u?E:F,H=[],A=0;A<d.length;A++){var L=d[A],M=L.getBoundingClientRect(),S=M.height,W=M.width,x=M.top,C=M.right,D=M.bottom,I=M.left;if("if-needed"===o&&_>=0&&F>=0&&j<=p&&E<=h&&_>=x&&j<=D&&F>=I&&E<=C)return H;var T=getComputedStyle(L),G=parseInt(T.borderLeftWidth,10),V=parseInt(T.borderTopWidth,10),R=parseInt(T.borderRightWidth,10),z=parseInt(T.borderBottomWidth,10),B=0,P=0,U="offsetWidth"in L?L.offsetWidth-L.clientWidth-G-R:0,X="offsetHeight"in L?L.offsetHeight-L.clientHeight-V-z:0;if(f===L)B="start"===i?O:"end"===i?O-p:"nearest"===i?a(v,v+p,p,V,z,v+O,v+O+y,y):O-p/2,P="start"===u?k:"center"===u?k-h/2:"end"===u?k-h:a(w,w+h,h,G,R,w+k,w+k+g,g),B=Math.max(0,B+v),P=Math.max(0,P+w);else{B="start"===i?O-x-V:"end"===i?O-D+z+X:"nearest"===i?a(x,D,S,V,z+X,O,O+y,y):O-(x+S/2)+X/2,P="start"===u?k-I-G:"center"===u?k-(I+W/2)+U/2:"end"===u?k-C+R+U:a(I,C,W,G,R+U,k,k+g,g);var Y=L.scrollLeft,J=L.scrollTop;O+=J-(B=Math.max(0,Math.min(J+B,L.scrollHeight-S+X))),k+=Y-(P=Math.max(0,Math.min(Y+P,L.scrollWidth-W+U)))}H.push({el:L,top:B,left:P})}return H};function u(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(u(t)&&"function"==typeof t.behavior)return t.behavior(r?i(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:u(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,l=e.left;n.scroll&&r?n.scroll({top:o,left:l,behavior:t}):(n.scrollTop=o,n.scrollLeft=l)}))}(i(e,n),n.behavior)}}},519:function(e,t,r){var n={"./es":372,"./es-do":373,"./es-do.js":373,"./es-mx":374,"./es-mx.js":374,"./es-us":375,"./es-us.js":375,"./es.js":372,"./zh-cn":376,"./zh-cn.js":376,"./zh-tw":377,"./zh-tw.js":377};function o(e){var t=l(e);return r(t)}function l(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=l,e.exports=o,o.id=519},749:function(e,t,r){}}]);