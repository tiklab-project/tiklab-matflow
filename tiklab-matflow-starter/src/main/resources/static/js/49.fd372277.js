(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{249:function(e,t,r){"use strict";r.r(t),function(e){r(27);var n,l=r(10),o=(r(30),r(18)),i=(r(110),r(69)),a=(r(33),r(3)),u=r(0),c=r.n(u),m=r(372),s=r(725),d=r(228),f=r(176),p=r(888),b=r(2),N=r(13),h=(r(832),r(609)),v="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\reDel\\projectSetReDel.js";function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,o=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){a=!0,l=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw l}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(e){var t=e.pipelineStore,r=t.deletePipeline,n=t.updatePipeline,N=t.pipelineList,g=t.pipelineId,_=t.pipelineName,w=y(Object(u.useState)([]),2),j=w[0],E=w[1],H=y(a.a.useForm(),1)[0],k=Object(b.e)().userId,D=[{key:1,title:"修改流水线名称",icon:c.a.createElement(d.a,{__source:{fileName:v,lineNumber:68,columnNumber:19}}),content:c.a.createElement(h.a,{form:H,re:function(t){var r={user:{id:k},pipelineId:g,pipelineName:t.pipelineName};n(r).then((function(t){0===t.code&&e.history.push("/index/task/".concat(g,"/work"))})).catch((function(e){console.log(e)}))},pipelineList:N,__source:{fileName:v,lineNumber:69,columnNumber:21}})},{key:2,title:"删除流水线",icon:c.a.createElement(f.a,{__source:{fileName:v,lineNumber:78,columnNumber:19}}),content:c.a.createElement(l.a,{type:"primary",onClick:function(){o.a.confirm({title:"删除",icon:c.a.createElement(s.a,{__source:{fileName:v,lineNumber:56,columnNumber:19}}),content:"删除后数据无法恢复",onOk:function(){r({userId:k,pipelineId:g}).then((function(t){0===t.code&&1===t.data?i.b.info({content:"删除成功",className:"message"}):i.b.error({content:"删除失败",className:"message"}),e.history.push("/index/pipeline")})).catch((function(e){console.log(e)}))},okText:"确认",cancelText:"取消"})},__source:{fileName:v,lineNumber:79,columnNumber:22}},c.a.createElement(f.a,{__source:{fileName:v,lineNumber:80,columnNumber:25}})," 删除")}],L=function(e){return j.some((function(t){return t===e}))},G=function(e){return c.a.createElement("div",{key:e.key,className:"pipelineReDel-li",__source:{fileName:v,lineNumber:103,columnNumber:17}},c.a.createElement("div",{className:"pipelineReDel-li-top",onClick:function(){return t=e.key,void(L(t)?E(j.filter((function(e){return e!==t}))):E(j.concat(t)));var t},__source:{fileName:v,lineNumber:104,columnNumber:21}},c.a.createElement("div",{className:"pipelineReDel-li-title",__source:{fileName:v,lineNumber:108,columnNumber:25}},c.a.createElement("span",{className:"pipelineReDel-li-title-icon",__source:{fileName:v,lineNumber:109,columnNumber:29}},e.icon),c.a.createElement("span",{className:"pipelineReDel-li-title-name",__source:{fileName:v,lineNumber:110,columnNumber:29}},e.title)),c.a.createElement("div",{__source:{fileName:v,lineNumber:112,columnNumber:25}},c.a.createElement(p.a,{__source:{fileName:v,lineNumber:113,columnNumber:29}}))),c.a.createElement("div",{className:"".concat(L(e.key)?"pipelineReDel-li-bottom":"pipelineReDel-li-none"),__source:{fileName:v,lineNumber:116,columnNumber:21}},L(e.key)?e.content:null))};return c.a.createElement("div",{className:"pipelineReDel",__source:{fileName:v,lineNumber:126,columnNumber:9}},c.a.createElement(m.a,{firstItem:_,secondItem:"设置",__source:{fileName:v,lineNumber:127,columnNumber:13}}),c.a.createElement("div",{className:"pipelineReDel-content",__source:{fileName:v,lineNumber:128,columnNumber:13}},c.a.createElement("div",{className:"pipelineReDel-ul",__source:{fileName:v,lineNumber:129,columnNumber:17}},D.map((function(e){return G(e)})))))};_(w,"useState{[expandedTree,setExpandedTree]([])}\nuseForm{[form]}");var j,E,H=Object(N.b)("pipelineStore")(Object(N.c)(w));t.default=H,(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(w,"ProjectSetReDel","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\reDel\\projectSetReDel.js"),j.register(H,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\reDel\\projectSetReDel.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}.call(this,r(23)(e))},325:function(e,t){e.exports=function(e,t,r,n){var l=r?r.call(n,e,t):void 0;if(void 0!==l)return!!l;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!a(c))return!1;var m=e[c],s=t[c];if(!1===(l=r?r.call(n,m,s,c):void 0)||void 0===l&&m!==s)return!1}return!0}},344:function(e,t,r){"use strict";function n(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function l(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function o(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return l(r.overflowY,t)||l(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function i(e,t,r,n,l,o,i,a){return o<e&&i>t||o>e&&i<t?0:o<=e&&a<=r||i>=t&&a>=r?o-e-n:i>t&&a<r||o<e&&a>r?i-t+l:0}var a=function(e,t){var r=window,l=t.scrollMode,a=t.block,u=t.inline,c=t.boundary,m=t.skipOverflowHiddenElements,s="function"==typeof c?c:function(e){return e!==c};if(!n(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,f=[],p=e;n(p)&&s(p);){if((p=p.parentElement)===d){f.push(p);break}null!=p&&p===document.body&&o(p)&&!o(document.documentElement)||null!=p&&o(p,m)&&f.push(p)}for(var b=r.visualViewport?r.visualViewport.width:innerWidth,N=r.visualViewport?r.visualViewport.height:innerHeight,h=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),g=y.height,_=y.width,w=y.top,j=y.right,E=y.bottom,H=y.left,k="start"===a||"nearest"===a?w:"end"===a?E:w+g/2,D="center"===u?H+_/2:"end"===u?j:H,L=[],G=0;G<f.length;G++){var R=f[G],I=R.getBoundingClientRect(),O=I.height,S=I.width,M=I.top,W=I.right,x=I.bottom,C=I.left;if("if-needed"===l&&w>=0&&H>=0&&E<=N&&j<=b&&w>=M&&E<=x&&H>=C&&j<=W)return L;var T=getComputedStyle(R),P=parseInt(T.borderLeftWidth,10),V=parseInt(T.borderTopWidth,10),F=parseInt(T.borderRightWidth,10),A=parseInt(T.borderBottomWidth,10),B=0,X=0,Y="offsetWidth"in R?R.offsetWidth-R.clientWidth-P-F:0,J="offsetHeight"in R?R.offsetHeight-R.clientHeight-V-A:0;if(d===R)B="start"===a?k:"end"===a?k-N:"nearest"===a?i(v,v+N,N,V,A,v+k,v+k+g,g):k-N/2,X="start"===u?D:"center"===u?D-b/2:"end"===u?D-b:i(h,h+b,b,P,F,h+D,h+D+_,_),B=Math.max(0,B+v),X=Math.max(0,X+h);else{B="start"===a?k-M-V:"end"===a?k-x+A+J:"nearest"===a?i(M,x,O,V,A+J,k,k+g,g):k-(M+O/2)+J/2,X="start"===u?D-C-P:"center"===u?D-(C+S/2)+Y/2:"end"===u?D-W+F+Y:i(C,W,S,P,F+Y,D,D+_,_);var U=R.scrollLeft,$=R.scrollTop;k+=$-(B=Math.max(0,Math.min($+B,R.scrollHeight-O+J))),D+=U-(X=Math.max(0,Math.min(U+X,R.scrollWidth-S+Y)))}L.push({el:R,top:B,left:X})}return L};function u(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(u(t)&&"function"==typeof t.behavior)return t.behavior(r?a(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:u(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,l=e.top,o=e.left;n.scroll&&r?n.scroll({top:l,left:o,behavior:t}):(n.scrollTop=l,n.scrollLeft=o)}))}(a(e,n),n.behavior)}}},372:function(e,t,r){"use strict";(function(e){var n,l=r(0),o=r.n(l),i=(r(373),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js");(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,u,c=function(e){var t=e.config,r=e.firstItem,n=e.secondItem;return o.a.createElement("div",{className:t?"breadcrumb-topOver":"breadcrumb",__source:{fileName:i,lineNumber:9,columnNumber:13}},o.a.createElement("span",{className:n?"breadcrumb-span":"",__source:{fileName:i,lineNumber:10,columnNumber:17}},r),n?o.a.createElement("span",{__source:{fileName:i,lineNumber:11,columnNumber:31}},"  >  ",n):null)},m=c;t.a=m,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(c,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),a.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(23)(e))},373:function(e,t,r){},609:function(e,t,r){"use strict";(function(e){r(27);var n,l=r(10),o=(r(33),r(3)),i=(r(20),r(6)),a=r(0),u=r.n(a),c="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\reDel\\projectRename.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,s,d=function(e){var t=e.style,r=e.pipelineList,n=e.form,a=e.re,m=e.setVisible;return u.a.createElement(o.a,{form:n,onFinish:a,autoComplete:"off",layout:t?null:"inline",__source:{fileName:c,lineNumber:9,columnNumber:9}},u.a.createElement(o.a.Item,{label:"重命名",name:"pipelineName",rules:[function(e){e.getFieldValue;return{validator:function(e,t){if(t){var n=[];return r&&(n=r&&r.map((function(e){return e.pipelineName}))),n.includes(t)?Promise.reject("名称已经存在"):Promise.resolve()}return Promise.reject()}}}],__source:{fileName:c,lineNumber:10,columnNumber:13}},u.a.createElement(i.a,{allowClear:!0,style:{width:416},__source:{fileName:c,lineNumber:32,columnNumber:17}})),u.a.createElement(o.a.Item,{shouldUpdate:!0,style:t||null,__source:{fileName:c,lineNumber:34,columnNumber:13}},(function(){return u.a.createElement(u.a.Fragment,null,t?u.a.createElement(l.a,{onClick:function(){return m(!1)},style:{marginRight:10},__source:{fileName:c,lineNumber:39,columnNumber:33}},"取消"):null,u.a.createElement(l.a,{type:"primary",htmlType:"submit",disabled:!n.isFieldsTouched(!0)||!!n.getFieldsError().filter((function(e){return e.errors.length})).length,__source:{fileName:c,lineNumber:43,columnNumber:25}},"确定"))})))},f=d;t.a=f,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(d,"ProjectRename","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\reDel\\projectRename.js"),m.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\reDel\\projectRename.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(23)(e))},832:function(e,t,r){}}]);