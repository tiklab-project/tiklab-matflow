(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{265:function(e,t,r){"use strict";r.r(t),function(e){r(30);var n,l=r(11),o=(r(32),r(18)),i=(r(102),r(50)),a=(r(44),r(5)),u=r(0),c=r.n(u),m=r(383),s=r(646),d=r(180),f=r(144),p=r(825),b=r(2),N=r(16),v=(r(764),r(565)),h="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\projectSetReDel.js";function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,o=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){a=!0,l=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw l}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(e){var t=e.pipelineStore,r=t.deletePipeline,n=t.updatePipeline,N=t.pipelineList,_=t.pipelineId,g=t.pipeline,w=t.setPipelineName,E=y(Object(u.useState)([]),2),j=E[0],D=E[1],H=y(a.a.useForm(),1)[0],k=Object(b.e)().userId,L=[{key:1,title:"修改流水线名称",icon:c.a.createElement(d.a,{__source:{fileName:h,lineNumber:69,columnNumber:19}}),content:c.a.createElement(v.a,{form:H,re:function(t){var r={user:{id:k},pipelineId:_,pipelineName:t.pipelineName};n(r).then((function(r){0===r.code&&(w(t.pipelineName),e.history.push("/index/task/".concat(_,"/work")))})).catch((function(e){console.log(e)}))},pipelineList:N,layout:"inline",__source:{fileName:h,lineNumber:70,columnNumber:21}})},{key:2,title:"删除流水线",icon:c.a.createElement(f.a,{__source:{fileName:h,lineNumber:80,columnNumber:19}}),content:c.a.createElement(l.a,{type:"primary",onClick:function(){o.a.confirm({title:"删除",icon:c.a.createElement(s.a,{__source:{fileName:h,lineNumber:57,columnNumber:19}}),content:"删除后数据无法恢复",onOk:function(){r({userId:k,pipelineId:_}).then((function(t){0===t.code&&1===t.data?i.b.info({content:"删除成功",className:"message"}):i.b.error({content:"删除失败",className:"message"}),e.history.push("/index/pipeline")})).catch((function(e){console.log(e)}))},okText:"确认",cancelText:"取消"})},__source:{fileName:h,lineNumber:81,columnNumber:22}},c.a.createElement(f.a,{__source:{fileName:h,lineNumber:82,columnNumber:25}})," 删除")}],G=function(e){return j.some((function(t){return t===e}))},R=function(e){return c.a.createElement("div",{key:e.key,className:"pipelineReDel-li",__source:{fileName:h,lineNumber:105,columnNumber:17}},c.a.createElement("div",{className:"pipelineReDel-li-top ".concat(G(e.key)?"pipelineReDel-li-select":null),onClick:function(){return t=e.key,void(G(t)?D(j.filter((function(e){return e!==t}))):D(j.concat(t)));var t},__source:{fileName:h,lineNumber:106,columnNumber:21}},c.a.createElement("div",{className:"pipelineReDel-li-title",__source:{fileName:h,lineNumber:110,columnNumber:25}},c.a.createElement("span",{className:"pipelineReDel-li-title-icon",__source:{fileName:h,lineNumber:111,columnNumber:29}},e.icon),c.a.createElement("span",{className:"pipelineReDel-li-title-name",__source:{fileName:h,lineNumber:112,columnNumber:29}},e.title)),c.a.createElement("div",{__source:{fileName:h,lineNumber:114,columnNumber:25}},c.a.createElement(p.a,{__source:{fileName:h,lineNumber:115,columnNumber:29}}))),c.a.createElement("div",{className:"".concat(G(e.key)?"pipelineReDel-li-bottom":"pipelineReDel-li-none"),__source:{fileName:h,lineNumber:118,columnNumber:21}},G(e.key)?e.content:null))};return c.a.createElement("div",{className:"pipelineReDel",__source:{fileName:h,lineNumber:128,columnNumber:9}},c.a.createElement(m.a,{firstItem:g.pipelineName,secondItem:"设置",__source:{fileName:h,lineNumber:129,columnNumber:13}}),c.a.createElement("div",{className:"pipelineReDel-content",__source:{fileName:h,lineNumber:130,columnNumber:13}},c.a.createElement("div",{className:"pipelineReDel-ul",__source:{fileName:h,lineNumber:131,columnNumber:17}},L.map((function(e){return R(e)})))))};g(w,"useState{[expandedTree,setExpandedTree]([])}\nuseForm{[form]}");var E,j,D=Object(N.b)("pipelineStore")(Object(N.c)(w));t.default=D,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(w,"ProjectSetReDel","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\projectSetReDel.js"),E.register(D,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\projectSetReDel.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}.call(this,r(23)(e))},340:function(e,t){e.exports=function(e,t,r,n){var l=r?r.call(n,e,t):void 0;if(void 0!==l)return!!l;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!a(c))return!1;var m=e[c],s=t[c];if(!1===(l=r?r.call(n,m,s,c):void 0)||void 0===l&&m!==s)return!1}return!0}},364:function(e,t,r){"use strict";function n(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function l(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function o(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return l(r.overflowY,t)||l(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function i(e,t,r,n,l,o,i,a){return o<e&&i>t||o>e&&i<t?0:o<=e&&a<=r||i>=t&&a>=r?o-e-n:i>t&&a<r||o<e&&a>r?i-t+l:0}var a=function(e,t){var r=window,l=t.scrollMode,a=t.block,u=t.inline,c=t.boundary,m=t.skipOverflowHiddenElements,s="function"==typeof c?c:function(e){return e!==c};if(!n(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,f=[],p=e;n(p)&&s(p);){if((p=p.parentElement)===d){f.push(p);break}null!=p&&p===document.body&&o(p)&&!o(document.documentElement)||null!=p&&o(p,m)&&f.push(p)}for(var b=r.visualViewport?r.visualViewport.width:innerWidth,N=r.visualViewport?r.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),_=y.height,g=y.width,w=y.top,E=y.right,j=y.bottom,D=y.left,H="start"===a||"nearest"===a?w:"end"===a?j:w+_/2,k="center"===u?D+g/2:"end"===u?E:D,L=[],G=0;G<f.length;G++){var R=f[G],S=R.getBoundingClientRect(),I=S.height,O=S.width,M=S.top,x=S.right,C=S.bottom,W=S.left;if("if-needed"===l&&w>=0&&D>=0&&j<=N&&E<=b&&w>=M&&j<=C&&D>=W&&E<=x)return L;var P=getComputedStyle(R),T=parseInt(P.borderLeftWidth,10),V=parseInt(P.borderTopWidth,10),A=parseInt(P.borderRightWidth,10),B=parseInt(P.borderBottomWidth,10),F=0,X=0,Y="offsetWidth"in R?R.offsetWidth-R.clientWidth-T-A:0,J="offsetHeight"in R?R.offsetHeight-R.clientHeight-V-B:0;if(d===R)F="start"===a?H:"end"===a?H-N:"nearest"===a?i(h,h+N,N,V,B,h+H,h+H+_,_):H-N/2,X="start"===u?k:"center"===u?k-b/2:"end"===u?k-b:i(v,v+b,b,T,A,v+k,v+k+g,g),F=Math.max(0,F+h),X=Math.max(0,X+v);else{F="start"===a?H-M-V:"end"===a?H-C+B+J:"nearest"===a?i(M,C,I,V,B+J,H,H+_,_):H-(M+I/2)+J/2,X="start"===u?k-W-T:"center"===u?k-(W+O/2)+Y/2:"end"===u?k-x+A+Y:i(W,x,O,T,A+Y,k,k+g,g);var $=R.scrollLeft,q=R.scrollTop;H+=q-(F=Math.max(0,Math.min(q+F,R.scrollHeight-I+J))),k+=$-(X=Math.max(0,Math.min($+X,R.scrollWidth-O+Y)))}L.push({el:R,top:F,left:X})}return L};function u(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(u(t)&&"function"==typeof t.behavior)return t.behavior(r?a(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:u(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,l=e.top,o=e.left;n.scroll&&r?n.scroll({top:l,left:o,behavior:t}):(n.scrollTop=l,n.scrollLeft=o)}))}(a(e,n),n.behavior)}}},383:function(e,t,r){"use strict";(function(e){var n,l=r(0),o=r.n(l),i=(r(384),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js");(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,u,c=function(e){var t=e.firstItem,r=e.secondItem;return o.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:i,lineNumber:9,columnNumber:13}},o.a.createElement("span",{className:r?"breadcrumbContent-span":"",__source:{fileName:i,lineNumber:10,columnNumber:17}},t),r?o.a.createElement("span",{__source:{fileName:i,lineNumber:13,columnNumber:31}},"  >  ",r):null)},m=c;t.a=m,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(c,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),a.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(23)(e))},384:function(e,t,r){},565:function(e,t,r){"use strict";(function(e){r(30);var n,l=r(11),o=(r(581),r(537)),i=(r(44),r(5)),a=(r(20),r(6)),u=r(0),c=r.n(u),m="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\projectRename.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,d,f=function(e){var t=e.pipelineList,r=e.form,n=e.re,u=e.layout;return c.a.createElement(i.a,{form:r,onFinish:n,autoComplete:"off",layout:u,initialValues:"vertical"===u?{pipelinePower:2}:null,__source:{fileName:m,lineNumber:17,columnNumber:9}},c.a.createElement(i.a.Item,{label:"vertical"===u?"流水线名称":"重命名",name:"pipelineName",rules:[{required:!0,message:""},{pattern:/^[\s\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"流水线名称不能包含非法字符，如&,%，&，#……等"},{type:"string",max:10,message:"流水线名称过长"},function(e){e.getFieldValue;return{validator:function(e,r){if(!r)return Promise.reject("请输入名称");var n=[];return t&&(n=t&&t.map((function(e){return e.pipelineName}))),n.includes(r)?Promise.reject("名称已经存在"):Promise.resolve()}}}],__source:{fileName:m,lineNumber:24,columnNumber:13}},c.a.createElement(a.a,{allowClear:!0,style:"inline"===u?{width:416}:null,__source:{fileName:m,lineNumber:55,columnNumber:17}})),"vertical"===u?c.a.createElement(i.a.Item,{label:"流水线权限",name:"pipelinePower",__source:{fileName:m,lineNumber:59,columnNumber:21}},c.a.createElement(o.a.Group,{__source:{fileName:m,lineNumber:63,columnNumber:25}},c.a.createElement(o.a,{value:2,__source:{fileName:m,lineNumber:64,columnNumber:29}},"私有"),c.a.createElement(o.a,{value:1,__source:{fileName:m,lineNumber:65,columnNumber:29}},"全局"))):null,n?c.a.createElement(i.a.Item,{__source:{fileName:m,lineNumber:73,columnNumber:21}},c.a.createElement(l.a,{type:"primary",htmlType:"submit",__source:{fileName:m,lineNumber:74,columnNumber:25}},"确定")):null)},p=f;t.a=p,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(f,"ProjectRename","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\projectRename.js"),s.register(p,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\projectRename.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(23)(e))},764:function(e,t,r){}}]);