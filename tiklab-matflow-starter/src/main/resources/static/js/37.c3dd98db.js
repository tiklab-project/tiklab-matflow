(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{254:function(e,t,n){"use strict";n.r(t),function(e){n(23);var r,l=n(7),i=(n(33),n(17)),a=n(0),o=n.n(a),u=n(235),c=n(188),m=n(18),s=n(16),d=(n(793),n(794)),p=n(798),f=n(364),b="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\container\\pipeline.js";function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,i=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw l}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=function(e){var t=e.pipelineStore,n=t.pipelineList,r=t.fresh,m=t.findAllPipelineStatus,s=t.findAllFollow,y=t.createPipeline,v=t.findLike,h=t.listType,E=t.setListType,g=_(Object(a.useState)(!1),2),w=g[0],L=g[1];Object(a.useEffect)((function(){1===h?m():s()}),[r,h]);return o.a.createElement("div",{className:"pipeline",__source:{fileName:b,lineNumber:64,columnNumber:9}},o.a.createElement("div",{className:"pipeline-top pipeline-flex",__source:{fileName:b,lineNumber:65,columnNumber:13}},o.a.createElement(f.a,{firstItem:"流水线",__source:{fileName:b,lineNumber:66,columnNumber:17}}),o.a.createElement("div",{className:"pipeline-top-r",__source:{fileName:b,lineNumber:67,columnNumber:17}},o.a.createElement(i.a,{type:"primary",onClick:function(){return L(!0)},__source:{fileName:b,lineNumber:68,columnNumber:21}},o.a.createElement(u.a,{__source:{fileName:b,lineNumber:69,columnNumber:25}})," 新建流水线"))),o.a.createElement("div",{className:"pipeline-type pipeline-flex",__source:{fileName:b,lineNumber:73,columnNumber:13}},o.a.createElement("div",{className:"pipeline-type-group ",__source:{fileName:b,lineNumber:74,columnNumber:17}},function(e){return e.map((function(e){return o.a.createElement("div",{key:e.id,className:"pipeline-type-link ".concat(h===e.id?"pipeline-type-active":""),onClick:function(){return function(e){E(e.id)}(e)},__source:{fileName:b,lineNumber:55,columnNumber:20}},o.a.createElement("span",{__source:{fileName:b,lineNumber:59,columnNumber:25}},e.title))}))}([{id:1,title:"所有"},{id:2,title:"收藏"}])),o.a.createElement("div",{className:"pipeline-type-input",__source:{fileName:b,lineNumber:77,columnNumber:17}},o.a.createElement(l.a,{placeholder:"流水线名称",onChange:function(e){var t={pipelineName:e.target.value};v(t)},prefix:o.a.createElement(c.a,{__source:{fileName:b,lineNumber:82,columnNumber:33}}),style:{width:280},__source:{fileName:b,lineNumber:78,columnNumber:21}}))),o.a.createElement(d.a,N({},e,{pipelineStore:t,__source:{fileName:b,lineNumber:88,columnNumber:13}})),o.a.createElement(p.a,N({},e,{createPipeline:y,pipelineList:n,addPipelineVisible:w,setAddPipelineVisible:L,__source:{fileName:b,lineNumber:92,columnNumber:13}})))};v(h,"useState{[addPipelineVisible,setAddPipelineVisible](false)}\nuseEffect{}");var E,g,w=Object(m.g)(Object(s.b)("pipelineStore")(Object(s.c)(h)));t.default=w,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(h,"Pipeline","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\container\\pipeline.js"),E.register(w,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\container\\pipeline.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}.call(this,n(15)(e))},331:function(e,t){e.exports=function(e,t,n,r){var l=n?n.call(r,e,t):void 0;if(void 0!==l)return!!l;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var c=i[u];if(!o(c))return!1;var m=e[c],s=t[c];if(!1===(l=n?n.call(r,m,s,c):void 0)||void 0===l&&m!==s)return!1}return!0}},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return _}));var r,l=n(0),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=l.createContext(null),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return l.createElement(a.Provider,{value:this.props.store},this.props.children)},t}(l.Component),u=n(331),c=n.n(u),m=n(139),s=n.n(m),d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(){return(p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};var f=function(){return{}};function b(e,t){void 0===t&&(t={});var n=!!e,r=e||f;return function(i){var o=function(t){function o(e,n){var l=t.call(this,e,n)||this;return l.unsubscribe=null,l.handleChange=function(){if(l.unsubscribe){var e=r(l.store.getState(),l.props);l.setState({subscribed:e})}},l.store=l.context,l.state={subscribed:r(l.store.getState(),e),store:l.store,props:e},l}return d(o,t),o.getDerivedStateFromProps=function(t,n){return e&&2===e.length&&t!==n.props?{subscribed:r(n.store.getState(),t),props:t}:{props:t}},o.prototype.componentDidMount=function(){this.trySubscribe()},o.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},o.prototype.shouldComponentUpdate=function(e,t){return!c()(this.props,e)||!c()(this.state.subscribed,t.subscribed)},o.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},o.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},o.prototype.render=function(){var e=p(p(p({},this.props),this.state.subscribed),{store:this.store});return l.createElement(i,p({},e,{ref:this.props.miniStoreForwardedRef}))},o.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(i)+")",o.contextType=a,o}(l.Component);if(t.forwardRef){var u=l.forwardRef((function(e,t){return l.createElement(o,p({},e,{miniStoreForwardedRef:t}))}));return s()(u,i)}return s()(o,i)}}var N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)};function _(e){var t=e,n=[];return{setState:function(e){t=N(N({},t),e);for(var r=0;r<n.length;r++)n[r]()},getState:function(){return t},subscribe:function(e){return n.push(e),function(){var t=n.indexOf(e);n.splice(t,1)}}}}},351:function(e,t,n){"use strict";function r(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function l(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function i(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return l(n.overflowY,t)||l(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function a(e,t,n,r,l,i,a,o){return i<e&&a>t||i>e&&a<t?0:i<=e&&o<=n||a>=t&&o>=n?i-e-r:a>t&&o<n||i<e&&o>n?a-t+l:0}var o=function(e,t){var n=window,l=t.scrollMode,o=t.block,u=t.inline,c=t.boundary,m=t.skipOverflowHiddenElements,s="function"==typeof c?c:function(e){return e!==c};if(!r(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,p=[],f=e;r(f)&&s(f);){if((f=f.parentElement)===d){p.push(f);break}null!=f&&f===document.body&&i(f)&&!i(document.documentElement)||null!=f&&i(f,m)&&p.push(f)}for(var b=n.visualViewport?n.visualViewport.width:innerWidth,N=n.visualViewport?n.visualViewport.height:innerHeight,_=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,v=e.getBoundingClientRect(),h=v.height,E=v.width,g=v.top,w=v.right,L=v.bottom,H=v.left,T="start"===o||"nearest"===o?g:"end"===o?L:g+h/2,k="center"===u?H+E/2:"end"===u?w:H,j=[],G=0;G<p.length;G++){var S=p[G],x=S.getBoundingClientRect(),M=x.height,O=x.width,A=x.top,C=x.right,D=x.bottom,P=x.left;if("if-needed"===l&&g>=0&&H>=0&&L<=N&&w<=b&&g>=A&&L<=D&&H>=P&&w<=C)return j;var I=getComputedStyle(S),V=parseInt(I.borderLeftWidth,10),F=parseInt(I.borderTopWidth,10),W=parseInt(I.borderRightWidth,10),z=parseInt(I.borderBottomWidth,10),R=0,B=0,U="offsetWidth"in S?S.offsetWidth-S.clientWidth-V-W:0,J="offsetHeight"in S?S.offsetHeight-S.clientHeight-F-z:0;if(d===S)R="start"===o?T:"end"===o?T-N:"nearest"===o?a(y,y+N,N,F,z,y+T,y+T+h,h):T-N/2,B="start"===u?k:"center"===u?k-b/2:"end"===u?k-b:a(_,_+b,b,V,W,_+k,_+k+E,E),R=Math.max(0,R+y),B=Math.max(0,B+_);else{R="start"===o?T-A-F:"end"===o?T-D+z+J:"nearest"===o?a(A,D,M,F,z+J,T,T+h,h):T-(A+M/2)+J/2,B="start"===u?k-P-V:"center"===u?k-(P+O/2)+U/2:"end"===u?k-C+W+U:a(P,C,O,V,W+U,k,k+E,E);var X=S.scrollLeft,Y=S.scrollTop;T+=Y-(R=Math.max(0,Math.min(Y+R,S.scrollHeight-M+J))),k+=X-(B=Math.max(0,Math.min(X+B,S.scrollWidth-O+U)))}j.push({el:S,top:R,left:B})}return j};function u(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(u(t)&&"function"==typeof t.behavior)return t.behavior(n?o(e,t):[]);if(n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:u(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,l=e.top,i=e.left;r.scroll&&n?r.scroll({top:l,left:i,behavior:t}):(r.scrollTop=l,r.scrollLeft=i)}))}(o(e,r),r.behavior)}}},359:function(e,t,n){"use strict";(function(e){n(33);var r,l=n(17),i=n(0),a=n.n(i),o=n(501),u=(n(376),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,m,s=function(e){var t=e.setVisible,n=e.title,r=e.isType;return a.a.createElement("div",{className:"modalTitle",__source:{fileName:u,lineNumber:11,columnNumber:9}},a.a.createElement("div",{className:"modalTitle-title --mf-three-level-title",__source:{fileName:u,lineNumber:12,columnNumber:13}},a.a.createElement("span",{__source:{fileName:u,lineNumber:13,columnNumber:17}},n)),r&&a.a.createElement("div",{className:"modalTitle-icon",__source:{fileName:u,lineNumber:16,columnNumber:17}},a.a.createElement(l.a,{type:"text",onClick:function(){return t(!1)},__source:{fileName:u,lineNumber:17,columnNumber:21}},a.a.createElement(o.a,{__source:{fileName:u,lineNumber:18,columnNumber:25}}))))},d=s;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"ModalTitle","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js"),c.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,n(15)(e))},364:function(e,t,n){"use strict";(function(e){var r,l=n(0),i=n.n(l),a=(n(365),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,u,c=function(e){var t=e.firstItem,n=e.secondItem;return i.a.createElement("div",{className:"breadcrumbContent --mf-first-level-title",__source:{fileName:a,lineNumber:9,columnNumber:13}},i.a.createElement("span",{className:n?"--mf-auxiliary-color":"",__source:{fileName:a,lineNumber:10,columnNumber:17}},t),n?i.a.createElement("span",{__source:{fileName:a,lineNumber:13,columnNumber:31}},"  >  ",n):null)},m=c;t.a=m,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(c,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),o.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,n(15)(e))},365:function(e,t,n){},376:function(e,t,n){},393:function(e,t,n){"use strict";(function(e){var r,l=n(0),i=n.n(l),a="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\emptyText\\emptyText.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,u,c=function(){return i.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:a,lineNumber:4,columnNumber:13}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:a,lineNumber:5,columnNumber:17}},i.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:a,lineNumber:6,columnNumber:21}})),i.a.createElement("div",{__source:{fileName:a,lineNumber:8,columnNumber:17}},"没有数据"))},m=c;t.a=m,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(c,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\emptyText\\emptyText.js"),o.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\emptyText\\emptyText.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,n(15)(e))},618:function(e,t,n){"use strict";(function(e){n(33);var r,l=n(17),i=(n(55),n(6)),a=(n(23),n(7)),o=n(0),u=n.n(o),c=n(1028),m=n(1029),s=(n(619),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\pipelineName.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=e.pipelineList,n=e.form,r=e.re,d=e.layout,p=e.pipeline,f=e.powerType,b=e.setPowerType;Object(o.useEffect)((function(){p&&n.setFieldsValue({pipelineName:p.pipelineName})}),[]);var N=[{id:1,title:"公有",icon:u.a.createElement(c.a,{__source:{fileName:s,lineNumber:26,columnNumber:18}}),desc:"互联网上的任何人都可以查看该项目。不支持TFVC等某些功能。"},{id:2,title:"私有",icon:u.a.createElement(m.a,{__source:{fileName:s,lineNumber:32,columnNumber:18}}),desc:"只有您授予访问权限的人才能查看此项目。"}],_=u.a.createElement("div",{className:"pipeline-power",__source:{fileName:s,lineNumber:38,columnNumber:9}},u.a.createElement("div",{className:"pipeline-power-title",__source:{fileName:s,lineNumber:39,columnNumber:13}},"流水线权限"),u.a.createElement("div",{className:"pipeline-power-content",__source:{fileName:s,lineNumber:40,columnNumber:13}},N.map((function(e){return u.a.createElement("div",{key:e.id,className:"pipeline-power-item ".concat(f===e.id?"pipeline-power-select":""),onClick:function(){return b(e.id)},__source:{fileName:s,lineNumber:43,columnNumber:32}},u.a.createElement("div",{className:"power-item",__source:{fileName:s,lineNumber:48,columnNumber:29}},u.a.createElement("div",{__source:{fileName:s,lineNumber:49,columnNumber:33}},u.a.createElement("div",{className:"power-title power-icon",__source:{fileName:s,lineNumber:50,columnNumber:37}},e.icon),u.a.createElement("div",{className:"power-title power-name",__source:{fileName:s,lineNumber:53,columnNumber:37}},e.title)),f===e.id&&u.a.createElement("div",{className:"power-select-show",__source:{fileName:s,lineNumber:59,columnNumber:37}})),u.a.createElement("div",{className:"power-desc",__source:{fileName:s,lineNumber:62,columnNumber:29}},e.desc))}))));return u.a.createElement(i.a,{form:n,onFinish:r,autoComplete:"off",layout:d,initialValues:r?null:{pipelinePower:2},__source:{fileName:s,lineNumber:74,columnNumber:9}},u.a.createElement(i.a.Item,{label:"vertical"===d?"流水线名称":"重命名",name:"pipelineName",rules:[{required:!0,message:""},{pattern:/^[\s\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"流水线名称不能包含非法字符，如&,%，&，#……等"},{type:"string",max:20,message:"流水线名称过长"},function(e){e.getFieldValue;return{validator:function(e,n){if(!n)return Promise.reject("请输入名称");var r=[];return t&&(r=t&&t.map((function(e){return e.pipelineName}))),r.includes(n)?Promise.reject("名称已经存在"):Promise.resolve()}}}],__source:{fileName:s,lineNumber:81,columnNumber:13}},u.a.createElement(a.a,{allowClear:!0,style:r?{width:416}:null,__source:{fileName:s,lineNumber:112,columnNumber:17}})),"vertical"===d&&_,r&&u.a.createElement(i.a.Item,{__source:{fileName:s,lineNumber:119,columnNumber:17}},u.a.createElement(l.a,{type:"primary",htmlType:"submit",__source:{fileName:s,lineNumber:120,columnNumber:21}},"确定")))};d(p,"useEffect{}");var f,b,N=p;t.a=N,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(p,"PipelineName","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\pipelineName.js"),f.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\reDel\\pipelineName.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,n(15)(e))},619:function(e,t,n){},793:function(e,t,n){},794:function(e,t,n){"use strict";(function(e){n(27);var r,l=n(13),i=(n(488),n(407)),a=(n(241),n(179)),o=n(0),u=n.n(o),c=n(759),m=n(761),s=n(1023),d=n(762),p=n(1012),f=n(1024),b=n(764),N=n(1025),_=n(1026),y=n(16),v=n(795),h=(n(797),n(393)),E="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineTable.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var g,w,L=function(e){var t=e.structureStore,n=e.pipelineStore,r=t.pipelineStartStructure,o=t.killInstance,y=n.pipelineList,g=n.updateFollow,w=n.fresh,L=n.setFresh,H=function(e,t){"1"===e.data?a.b.info({content:"".concat(t,"成功"),duration:.5,className:"message"}):a.b.info({content:"".concat(t,"失败"),duration:.5,className:"message"})},T=[{title:"流水线名称",dataIndex:"pipelineName",key:"pipelineName",width:"200px",ellipsis:!0,render:function(t,n){return u.a.createElement("span",{className:"pipelineTable-pipelineName",__source:{fileName:E,lineNumber:77,columnNumber:21}},u.a.createElement("span",{onClick:function(){return function(t,n){e.history.push("/index/task/".concat(n.pipelineId,"/work"))}(0,n)},className:"pipelineTable-pipelineName-task",__source:{fileName:E,lineNumber:78,columnNumber:25}},u.a.createElement("span",{className:"pipelineTable-pipelineName-icon icon-".concat(n.color),__source:{fileName:E,lineNumber:81,columnNumber:29}},t.substring(0,1).toUpperCase()),u.a.createElement("span",{className:"--mf-dominant-color",__source:{fileName:E,lineNumber:84,columnNumber:29}},t)))}},{title:"最近构建状态",dataIndex:"buildStatus",key:"buildStatus",width:"200px",render:function(e){switch(e){case 30:return u.a.createElement(i.a,{title:"成功",__source:{fileName:E,lineNumber:100,columnNumber:33}},u.a.createElement(c.a,{style:{fontSize:26,color:"#1890ff"},__source:{fileName:E,lineNumber:101,columnNumber:37}}));case 1:return u.a.createElement(i.a,{title:"失败",__source:{fileName:E,lineNumber:104,columnNumber:32}},u.a.createElement(m.a,{style:{fontSize:26,color:"#ff0000"},__source:{fileName:E,lineNumber:105,columnNumber:37}}));case 0:return u.a.createElement(i.a,{title:"待构建",__source:{fileName:E,lineNumber:108,columnNumber:33}},u.a.createElement(s.a,{style:{fontSize:26,color:"#6698ff"},__source:{fileName:E,lineNumber:109,columnNumber:37}}));case 20:return u.a.createElement(i.a,{title:"停止",__source:{fileName:E,lineNumber:112,columnNumber:33}},u.a.createElement(d.a,{style:{fontSize:26},__source:{fileName:E,lineNumber:113,columnNumber:37}}))}}},{title:"最近构建时间",dataIndex:"lastBuildTime",key:"lastBuildTime",width:"220px"},{title:"最近成功时间",dataIndex:"lastSuccessTime",key:"lastSuccessTime",width:"220px"},{title:"负责人",dataIndex:"userName",key:"userName",width:"220px",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{__source:{fileName:E,lineNumber:137,columnNumber:21}}),e)}},{title:"操作",dataIndex:"action",key:"action",width:"200px",render:function(t,n){return u.a.createElement(u.a.Fragment,null,u.a.createElement(i.a,{title:"运行",__source:{fileName:E,lineNumber:150,columnNumber:25}},u.a.createElement("span",{className:"pipelineTable-state",onClick:function(){return function(e){var t={pipelineId:e.pipelineId};0===e.pipelineState?r(t).then((function(e){1===e.data&&setTimeout((function(){return L(!w)}),1e3)})):o(t).then((function(){L(!w)}))}(n)},__source:{fileName:E,lineNumber:151,columnNumber:29}},0===n.pipelineState?u.a.createElement(f.a,{className:"actions-se",__source:{fileName:E,lineNumber:154,columnNumber:37}}):u.a.createElement("span",{className:"pipelineTable-state-running",__source:{fileName:E,lineNumber:156,columnNumber:37}},u.a.createElement(v.a,{__source:{fileName:E,lineNumber:157,columnNumber:41}})))),u.a.createElement(i.a,{title:"历史",__source:{fileName:E,lineNumber:162,columnNumber:25}},u.a.createElement("span",{className:"pipelineTable-history",onClick:function(){return function(t){e.history.push("/index/task/".concat(t.pipelineId,"/structure"))}(n)},__source:{fileName:E,lineNumber:163,columnNumber:29}},u.a.createElement(b.a,{className:"actions-se",__source:{fileName:E,lineNumber:166,columnNumber:33}}))),u.a.createElement(i.a,{title:"收藏",__source:{fileName:E,lineNumber:169,columnNumber:25}},u.a.createElement("span",{className:"pipelineTable-collect",onClick:function(){return function(e){var t={pipeline:{pipelineId:e.pipelineId}};g(t).then((function(t){0===e.pipelineCollect?H(t,"收藏"):H(t,"取消"),L(!w)}))}(n)},__source:{fileName:E,lineNumber:170,columnNumber:29}},0===n.pipelineCollect?u.a.createElement(N.a,{className:"actions-se",__source:{fileName:E,lineNumber:175,columnNumber:37}}):u.a.createElement(_.a,{className:"actions-se",__source:{fileName:E,lineNumber:177,columnNumber:37}}))))}}];return u.a.createElement("div",{className:"pipelineTable",__source:{fileName:E,lineNumber:187,columnNumber:13}},u.a.createElement(l.a,{bordered:!1,columns:T,dataSource:y,rowKey:function(e){return e.pipelineId},pagination:!1,locale:{emptyText:u.a.createElement(h.a,{__source:{fileName:E,lineNumber:194,columnNumber:41}})},__source:{fileName:E,lineNumber:188,columnNumber:17}}))},H=Object(y.b)("structureStore")(Object(y.c)(L));t.a=H,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(L,"PipelineTable","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineTable.js"),g.register(H,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineTable.js")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)}).call(this,n(15)(e))},795:function(e,t,n){"use strict";(function(e){var r,l=n(0),i=n.n(l);n(796);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,u=function(e){return i.a.createElement("span",{className:"loading",__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\running.js",lineNumber:5,columnNumber:12}}," || ")},c=u;t.a=c,(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(u,"Running","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\running.js"),a.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\running.js")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,n(15)(e))},796:function(e,t,n){},797:function(e,t,n){},798:function(e,t,n){"use strict";(function(e){n(34);var r,l=n(20),i=(n(33),n(17)),a=(n(241),n(179)),o=(n(55),n(6)),u=(n(966),n(801)),c=n(0),m=n.n(c),s=(n(799),n(359)),d=n(800),p=n(618),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModal.js";function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,i=[],a=!0,o=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){o=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(o)throw l}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=u.a.Step,v=function(e){var t=e.addPipelineVisible,n=e.setAddPipelineVisible,r=e.createPipeline,N=e.pipelineList,_=b(Object(c.useState)(0),2),v=_[0],h=_[1],E=b(Object(c.useState)(1),2),g=E[0],w=E[1],L=b(Object(c.useState)(1),2),H=L[0],T=L[1],k=b(o.a.useForm(),1)[0],j=[{title:"选择模板",content:m.a.createElement(d.a,{templateType:g,setTemplateType:w,__source:{fileName:f,lineNumber:39,columnNumber:22}})},{title:"完善信息",content:m.a.createElement(p.a,{form:k,pipelineList:N,layout:"vertical",powerType:H,setPowerType:T,__source:{fileName:f,lineNumber:46,columnNumber:22}})}],G=m.a.createElement("div",{className:"steps-action",__source:{fileName:f,lineNumber:58,columnNumber:9}},0===v&&m.a.createElement(i.a,{onClick:function(){return n(!1)},__source:{fileName:f,lineNumber:60,columnNumber:17}},"取消"),v>0&&m.a.createElement(i.a,{onClick:function(){return h(v-1)},__source:{fileName:f,lineNumber:65,columnNumber:17}},"上一步"),v<j.length-1&&m.a.createElement(i.a,{type:"primary",onClick:function(){return h(v+1)},__source:{fileName:f,lineNumber:70,columnNumber:17}},"下一步"),v===j.length-1&&m.a.createElement(i.a,{type:"primary",onClick:function(){k.validateFields().then((function(t){var n;n={pipelineType:g,pipelineName:t.pipelineName,pipelinePower:H},r(n).then((function(t){0===t.code&&t.data?e.history.push("/index/task/".concat(t.data,"/config")):a.b.error({content:"添加失败",className:"message"}),k.resetFields()}))}))},__source:{fileName:f,lineNumber:75,columnNumber:17}},"确认"));return m.a.createElement(l.a,{visible:t,closable:!1,onCancel:function(){return n(!1)},okText:"确认",cancelText:"取消",width:800,footer:G,__source:{fileName:f,lineNumber:91,columnNumber:9}},m.a.createElement("div",{className:"pipelineAddModal",__source:{fileName:f,lineNumber:100,columnNumber:13}},m.a.createElement(s.a,{setVisible:n,title:"创建流水线",__source:{fileName:f,lineNumber:101,columnNumber:17}}),m.a.createElement("div",{className:"steps-top",__source:{fileName:f,lineNumber:105,columnNumber:17}},m.a.createElement(u.a,{current:v,__source:{fileName:f,lineNumber:106,columnNumber:21}},j.map((function(e){return m.a.createElement(y,{key:e.title,title:e.title,__source:{fileName:f,lineNumber:108,columnNumber:29}})})))),m.a.createElement("div",{className:"steps-content",__source:{fileName:f,lineNumber:112,columnNumber:17}},j[v].content)))};_(v,"useState{[current,setCurrent](0)}\nuseState{[templateType,setTemplateType](1)}\nuseState{[powerType,setPowerType](1)}\nuseForm{[form]}");var h,E,g=v;t.a=g,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(y,"Step","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModal.js"),h.register(v,"PipelineAddModal","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModal.js"),h.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModal.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}).call(this,n(15)(e))},799:function(e,t,n){},800:function(e,t,n){"use strict";(function(e){var r,l=n(0),i=n.n(l),a=n(1027),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModalType.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,c,m=[{id:2,title:"Java",desc:"Linux",first:"构建",second:"部署",type:2131},{id:3,title:"Java",desc:"docker",first:"构建",second:"部署",type:2132},{id:4,title:"Java",desc:"Linux",zreo:"测试",first:"构建",second:"部署",type:112131},{id:5,title:"Java",desc:"docker",zreo:"测试",first:"构建",second:"部署",type:112132},{id:6,title:"Node.js",desc:"Linux",first:"构建",second:"部署",type:2231},{id:7,title:"Node.js",desc:"Linux",first:"构建",second:"部署",type:2232}],s=function(e){var t=e.templateType,n=e.setTemplateType,r=function(e){return i.a.createElement("div",{className:"li-step",__source:{fileName:o,lineNumber:96,columnNumber:17}},i.a.createElement("span",{className:"li-step-name",__source:{fileName:o,lineNumber:97,columnNumber:21}},e))};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"pipelineAddModalType",__source:{fileName:o,lineNumber:103,columnNumber:12}},i.a.createElement("div",{className:"pipelineAddModalType-ul",id:"pipelineAddModalType",__source:{fileName:o,lineNumber:104,columnNumber:16}},i.a.createElement("div",{style:{height:40},__source:{fileName:o,lineNumber:105,columnNumber:20}},"自定义模板"),i.a.createElement("div",{className:"pipelineAddModalType-li ".concat(1==t?"pipelineAddModalType-selected":null),onClick:function(){return n(1)},__source:{fileName:o,lineNumber:106,columnNumber:20}},i.a.createElement("div",{className:"li-self",__source:{fileName:o,lineNumber:110,columnNumber:24}},"自定义配置")),i.a.createElement("div",{style:{height:50,lineHeight:"50px"},__source:{fileName:o,lineNumber:112,columnNumber:20}},"推荐模板"),function(e){return e.map((function(e){return i.a.createElement("div",{key:e.id,className:"pipelineAddModalType-li ".concat(t==e.type?"pipelineAddModalType-selected":null),onClick:function(){return n(e.type)},__source:{fileName:o,lineNumber:64,columnNumber:17}},i.a.createElement("div",{className:"pipelineAddModalType-li-header",__source:{fileName:o,lineNumber:68,columnNumber:21}},i.a.createElement("div",{className:"li-header-title",__source:{fileName:o,lineNumber:69,columnNumber:25}},i.a.createElement("span",{className:"li-header-icon",__source:{fileName:o,lineNumber:70,columnNumber:29}},i.a.createElement(a.a,{__source:{fileName:o,lineNumber:71,columnNumber:33}})),i.a.createElement("span",{className:"li-header-name",__source:{fileName:o,lineNumber:73,columnNumber:29}},e.title,"-")),i.a.createElement("div",{className:"li-header-desc",__source:{fileName:o,lineNumber:77,columnNumber:25}},i.a.createElement("span",{__source:{fileName:o,lineNumber:78,columnNumber:29}},"部署到"),i.a.createElement("span",{className:"li-header-title",__source:{fileName:o,lineNumber:79,columnNumber:29}},e.desc),i.a.createElement("span",{__source:{fileName:o,lineNumber:82,columnNumber:29}},"环境"))),i.a.createElement("div",{className:"pipelineAddModalType-li-content",__source:{fileName:o,lineNumber:85,columnNumber:21}},e.zreo?r(e.zreo):null,r(e.first),r(e.second)))}))}(m))))},d=s;t.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(m,"rightLis","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModalType.js"),u.register(s,"PipelineAddModalType","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModalType.js"),u.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\pipeline\\components\\pipelineAddModalType.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,n(15)(e))}}]);