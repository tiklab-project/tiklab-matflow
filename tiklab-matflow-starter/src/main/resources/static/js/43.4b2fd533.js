(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{266:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(0),a=r.n(n),l=r(16),i=r(2),u=r(637);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(e){var t=e.proofStore,r=e.pipelineStore,o=t.findPipelineProof,l=t.fresh,c=r.findAllPipelineStatus,m=r.pipelineList,s=Object(i.e)().userId;return Object(n.useEffect)((function(){o({pipelineId:"",type:0,userId:s})}),[l]),Object(n.useEffect)((function(){c(s)}),[]),a.a.createElement(u.a,{pipelineList:m,__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\proof\\systemProof.js",lineNumber:28,columnNumber:13}})};c(m,"useEffect{}\nuseEffect{}");var s,f,d=Object(l.b)("proofStore","pipelineStore")(Object(l.c)(m));t.default=d,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(m,"SystemProof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\proof\\systemProof.js"),s.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\proof\\systemProof.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}.call(this,r(15)(e))},332:function(e,t){e.exports=function(e,t,r,o){var n=r?r.call(o,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var c=a[u];if(!i(c))return!1;var m=e[c],s=t[c];if(!1===(n=r?r.call(o,m,s,c):void 0)||void 0===n&&m!==s)return!1}return!0}},349:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return _}));var o,n=r(0),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=n.createContext(null),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return n.createElement(l.Provider,{value:this.props.store},this.props.children)},t}(n.Component),u=r(332),c=r.n(u),m=r(139),s=r.n(m),f=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),d=function(){return(d=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var p=function(){return{}};function b(e,t){void 0===t&&(t={});var r=!!e,o=e||p;return function(a){var i=function(t){function i(e,r){var n=t.call(this,e,r)||this;return n.unsubscribe=null,n.handleChange=function(){if(n.unsubscribe){var e=o(n.store.getState(),n.props);n.setState({subscribed:e})}},n.store=n.context,n.state={subscribed:o(n.store.getState(),e),store:n.store,props:e},n}return f(i,t),i.getDerivedStateFromProps=function(t,r){return e&&2===e.length&&t!==r.props?{subscribed:o(r.store.getState(),t),props:t}:{props:t}},i.prototype.componentDidMount=function(){this.trySubscribe()},i.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},i.prototype.shouldComponentUpdate=function(e,t){return!c()(this.props,e)||!c()(this.state.subscribed,t.subscribed)},i.prototype.trySubscribe=function(){r&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},i.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},i.prototype.render=function(){var e=d(d(d({},this.props),this.state.subscribed),{store:this.store});return n.createElement(a,d({},e,{ref:this.props.miniStoreForwardedRef}))},i.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(a)+")",i.contextType=l,i}(n.Component);if(t.forwardRef){var u=n.forwardRef((function(e,t){return n.createElement(i,d({},e,{miniStoreForwardedRef:t}))}));return s()(u,a)}return s()(i,a)}}var N=function(){return(N=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function _(e){var t=e,r=[];return{setState:function(e){t=N(N({},t),e);for(var o=0;o<r.length;o++)r[o]()},getState:function(){return t},subscribe:function(e){return r.push(e),function(){var t=r.indexOf(e);r.splice(t,1)}}}}},351:function(e,t,r){"use strict";function o(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function n(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return n(r.overflowY,t)||n(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function l(e,t,r,o,n,a,l,i){return a<e&&l>t||a>e&&l<t?0:a<=e&&i<=r||l>=t&&i>=r?a-e-o:l>t&&i<r||a<e&&i>r?l-t+n:0}var i=function(e,t){var r=window,n=t.scrollMode,i=t.block,u=t.inline,c=t.boundary,m=t.skipOverflowHiddenElements,s="function"==typeof c?c:function(e){return e!==c};if(!o(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,d=[],p=e;o(p)&&s(p);){if((p=p.parentElement)===f){d.push(p);break}null!=p&&p===document.body&&a(p)&&!a(document.documentElement)||null!=p&&a(p,m)&&d.push(p)}for(var b=r.visualViewport?r.visualViewport.width:innerWidth,N=r.visualViewport?r.visualViewport.height:innerHeight,_=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,v=e.getBoundingClientRect(),h=v.height,E=v.width,w=v.top,g=v.right,L=v.bottom,H=v.left,S="start"===i||"nearest"===i?w:"end"===i?L:w+h/2,G="center"===u?H+E/2:"end"===u?g:H,j=[],I=0;I<d.length;I++){var O=d[I],P=O.getBoundingClientRect(),T=P.height,k=P.width,x=P.top,D=P.right,A=P.bottom,M=P.left;if("if-needed"===n&&w>=0&&H>=0&&L<=N&&g<=b&&w>=x&&L<=A&&H>=M&&g<=D)return j;var C=getComputedStyle(O),V=parseInt(C.borderLeftWidth,10),F=parseInt(C.borderTopWidth,10),U=parseInt(C.borderRightWidth,10),W=parseInt(C.borderBottomWidth,10),B=0,R=0,q="offsetWidth"in O?O.offsetWidth-O.clientWidth-V-U:0,$="offsetHeight"in O?O.offsetHeight-O.clientHeight-F-W:0;if(f===O)B="start"===i?S:"end"===i?S-N:"nearest"===i?l(y,y+N,N,F,W,y+S,y+S+h,h):S-N/2,R="start"===u?G:"center"===u?G-b/2:"end"===u?G-b:l(_,_+b,b,V,U,_+G,_+G+E,E),B=Math.max(0,B+y),R=Math.max(0,R+_);else{B="start"===i?S-x-F:"end"===i?S-A+W+$:"nearest"===i?l(x,A,T,F,W+$,S,S+h,h):S-(x+T/2)+$/2,R="start"===u?G-M-V:"center"===u?G-(M+k/2)+q/2:"end"===u?G-D+U+q:l(M,D,k,V,U+q,G,G+E,E);var X=O.scrollLeft,Y=O.scrollTop;S+=Y-(B=Math.max(0,Math.min(Y+B,O.scrollHeight-T+$))),G+=X-(R=Math.max(0,Math.min(X+R,O.scrollWidth-k+q)))}j.push({el:O,top:B,left:R})}return j};function u(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(u(t)&&"function"==typeof t.behavior)return t.behavior(r?i(e,t):[]);if(r){var o=function(e){return!1===e?{block:"end",inline:"nearest"}:u(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var o=e.el,n=e.top,a=e.left;o.scroll&&r?o.scroll({top:n,left:a,behavior:t}):(o.scrollTop=n,o.scrollLeft=a)}))}(i(e,o),o.behavior)}}},359:function(e,t,r){"use strict";(function(e){r(33);var o,n=r(17),a=r(0),l=r.n(a),i=r(500),u=(r(376),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,m,s=function(e){var t=e.setVisible,r=e.title,o=e.isType;return l.a.createElement("div",{className:"modalTitle",__source:{fileName:u,lineNumber:11,columnNumber:9}},l.a.createElement("div",{className:"modalTitle-title",__source:{fileName:u,lineNumber:12,columnNumber:13}},l.a.createElement("span",{__source:{fileName:u,lineNumber:13,columnNumber:17}},r)),o&&l.a.createElement("div",{className:"modalTitle-icon",__source:{fileName:u,lineNumber:16,columnNumber:17}},l.a.createElement(n.a,{type:"text",onClick:function(){return t(!1)},__source:{fileName:u,lineNumber:17,columnNumber:21}},l.a.createElement(i.a,{__source:{fileName:u,lineNumber:18,columnNumber:25}}))))},f=s;t.a=f,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(s,"ModalTitle","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js"),c.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,r(15)(e))},364:function(e,t,r){"use strict";(function(e){var o,n=r(0),a=r.n(n),l=(r(365),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,u,c=function(e){var t=e.firstItem,r=e.secondItem;return a.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:l,lineNumber:9,columnNumber:13}},a.a.createElement("span",{className:r?"breadcrumbContent-span":"",__source:{fileName:l,lineNumber:10,columnNumber:17}},t),r?a.a.createElement("span",{__source:{fileName:l,lineNumber:13,columnNumber:31}},"  >  ",r):null)},m=c;t.a=m,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),i.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(15)(e))},365:function(e,t,r){},376:function(e,t,r){},393:function(e,t,r){"use strict";(function(e){var o,n=r(0),a=r.n(n),l="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\emptyText\\emptyText.js";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,u,c=function(){return a.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:l,lineNumber:4,columnNumber:13}},a.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:l,lineNumber:5,columnNumber:17}},a.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:l,lineNumber:6,columnNumber:21}})),a.a.createElement("div",{__source:{fileName:l,lineNumber:8,columnNumber:17}},"没有数据"))},m=c;t.a=m,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\emptyText\\emptyText.js"),i.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\emptyText\\emptyText.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,r(15)(e))},497:function(e,t,r){"use strict";(function(e){r(34);var o,n=r(20),a=(r(23),r(7)),l=(r(24),r(5)),i=(r(25),r(3)),u=(r(140),r(29)),c=(r(55),r(6)),m=(r(76),r(21)),s=r(0),f=r.n(s),d=r(142),p=r(359),b="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js";function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=m.a.Option,h=function(e){var t=e.visible,r=e.setVisible,o=e.createProof,_=e.fresh,y=e.setFresh,h=e.isAuthority,E=e.type,w=e.pipelineList,g=e.pipelineId,L=N(c.a.useForm(),1)[0],H=N(Object(s.useState)(1),2),S=H[0],G=H[1];return f.a.createElement(n.a,{visible:t,closable:!1,okText:"确认",cancelText:"取消",onCancel:function(){return r(!1)},onOk:function(){L.validateFields().then((function(e){L.resetFields(),function(e){var t,n;n=w?e.proofList:["".concat(g)],t=h?e.proofScope:E;var a={type:e.type,proofScope:t,proofType:e.proofType,proofName:e.proofName,proofUsername:e.proofUsername,proofPassword:e.proofPassword,proofDescribe:e.proofDescribe,proofCreateTime:d.a.moment,proofList:n};o(a).then((function(){y(!_)})).catch((function(e){console.log(e)})),r(!1)}(e)}))},__source:{fileName:b,lineNumber:51,columnNumber:9}},f.a.createElement(p.a,{title:"添加凭证",setVisible:r,__source:{fileName:b,lineNumber:66,columnNumber:13}}),f.a.createElement("div",{style:{maxHeight:648,overflow:"auto"},__source:{fileName:b,lineNumber:70,columnNumber:12}},f.a.createElement(c.a,{form:L,layout:"vertical",name:"userForm",autoComplete:"off",initialValues:{proofType:"password",type:1,proofScope:1},__source:{fileName:b,lineNumber:71,columnNumber:16}},f.a.createElement(c.a.Item,{label:"凭证级别",name:"type",__source:{fileName:b,lineNumber:77,columnNumber:20}},f.a.createElement(m.a,{onChange:function(e){G(e)},__source:{fileName:b,lineNumber:78,columnNumber:24}},f.a.createElement(v,{value:1,__source:{fileName:b,lineNumber:79,columnNumber:28}},"全局凭证"),f.a.createElement(v,{value:2,__source:{fileName:b,lineNumber:80,columnNumber:28}},"项目凭证"))),w&&2===S?f.a.createElement(c.a.Item,{label:"项目作用域",name:"proofList",rules:[{required:!0,message:"请选择项目作用域"}],__source:{fileName:b,lineNumber:85,columnNumber:28}},f.a.createElement(u.a.Group,{style:{overflow:"auto",maxHeight:300},__source:{fileName:b,lineNumber:90,columnNumber:32}},w&&w.map((function(e){return f.a.createElement(l.a,{key:e.pipelineId,__source:{fileName:b,lineNumber:93,columnNumber:52}},f.a.createElement(i.a,{__source:{fileName:b,lineNumber:94,columnNumber:48}},f.a.createElement(u.a,{value:e.pipelineId,__source:{fileName:b,lineNumber:95,columnNumber:52}},e.pipelineName)))})))):null,h?f.a.createElement(c.a.Item,{label:"凭证作用域",name:"proofScope",__source:{fileName:b,lineNumber:107,columnNumber:28}},f.a.createElement(m.a,{__source:{fileName:b,lineNumber:108,columnNumber:32}},f.a.createElement(v,{value:1,__source:{fileName:b,lineNumber:109,columnNumber:36}},"源码凭证"),f.a.createElement(v,{value:5,__source:{fileName:b,lineNumber:110,columnNumber:36}},"部署凭证"))):null,f.a.createElement(c.a.Item,{label:"凭证名称",name:"proofName",rules:[{required:!0,message:"请输入凭证名称"},{type:"string",max:10,message:"凭证名称过长"}],__source:{fileName:b,lineNumber:115,columnNumber:20}},f.a.createElement(a.a,{placeholder:"名称",__source:{fileName:b,lineNumber:127,columnNumber:24}})),f.a.createElement(c.a.Item,{label:"凭证类型",name:"proofType",__source:{fileName:b,lineNumber:129,columnNumber:20}},f.a.createElement(m.a,{placeholder:"选择类型",__source:{fileName:b,lineNumber:130,columnNumber:24}},f.a.createElement(v,{value:"SSH",__source:{fileName:b,lineNumber:131,columnNumber:28}},"SSH"),f.a.createElement(v,{value:"password",__source:{fileName:b,lineNumber:132,columnNumber:28}},"password"))),f.a.createElement(c.a.Item,{shouldUpdate:function(e,t){return e.proofType!==t.proofType},__source:{fileName:b,lineNumber:135,columnNumber:20}},(function(e){return"password"===(0,e.getFieldValue)("proofType")?f.a.createElement(f.a.Fragment,null,f.a.createElement(c.a.Item,{label:"用户名",name:"proofUsername",__source:{fileName:b,lineNumber:139,columnNumber:40}},f.a.createElement(a.a,{placeholder:"账号",__source:{fileName:b,lineNumber:140,columnNumber:44}})),f.a.createElement(c.a.Item,{label:"密码",name:"proofPassword",__source:{fileName:b,lineNumber:142,columnNumber:40}},f.a.createElement(a.a.Password,{placeholder:"密码",__source:{fileName:b,lineNumber:143,columnNumber:44}})),f.a.createElement(c.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:b,lineNumber:145,columnNumber:40}},f.a.createElement(a.a.TextArea,{placeholder:"备注",__source:{fileName:b,lineNumber:146,columnNumber:44}}))):f.a.createElement(f.a.Fragment,null,f.a.createElement(c.a.Item,{name:"proofPassword",label:"私钥",__source:{fileName:b,lineNumber:151,columnNumber:36}},f.a.createElement(a.a.TextArea,{placeholder:"私钥",__source:{fileName:b,lineNumber:152,columnNumber:40}})),f.a.createElement(c.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:b,lineNumber:154,columnNumber:36}},f.a.createElement(a.a.TextArea,{placeholder:"备注",__source:{fileName:b,lineNumber:155,columnNumber:40}})))})))))};y(h,"useForm{[form]}\nuseState{[isShowPipeline,setIsShowPipeline](1)}");var E,w,g=h;t.a=g,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(v,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js"),E.register(h,"AddProofModal","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js"),E.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)}).call(this,r(15)(e))},555:function(e,t,r){"use strict";(function(e){r(33);var o,n=r(17),a=r(0),l=r.n(a),i=r(497),u=r(16),c=r(235),m="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js";function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=e.proofStore,r=e.pipelineStore,o=e.type,u=e.style,f=e.pipelineList,d=e.isBtn,p=t.createProof,b=r.pipelineId,N=s(Object(a.useState)(!1),2),_=N[0],y=N[1],v=s(Object(a.useState)(!1),2),h=v[0],E=v[1];Object(a.useEffect)((function(){u&&E(!0)}),[]);var w=function(){y(!0)};return l.a.createElement(l.a.Fragment,null,d?l.a.createElement("div",{onClick:function(){return w()},__source:{fileName:m,lineNumber:32,columnNumber:21}},l.a.createElement(c.a,{__source:{fileName:m,lineNumber:33,columnNumber:25}}),"  添加"):l.a.createElement(n.a,{type:u,onClick:function(){return w()},__source:{fileName:m,lineNumber:36,columnNumber:21}},l.a.createElement(c.a,{__source:{fileName:m,lineNumber:37,columnNumber:25}}),"添加"),l.a.createElement(i.a,{visible:_,setVisible:y,createProof:p,isAuthority:h,type:o,style:u,pipelineList:f,pipelineId:b,__source:{fileName:m,lineNumber:40,columnNumber:13}}))};d(p,"useState{[visible,setVisible](false)}\nuseState{[isAuthority,setIsAuthority](false)}\nuseEffect{}");var b,N,_=Object(u.b)("proofStore","pipelineStore")(Object(u.c)(p));t.a=_,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(p,"AddProofButton","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js"),b.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}).call(this,r(15)(e))},637:function(e,t,r){"use strict";(function(e){r(27);var o,n=r(13),a=(r(563),r(559)),l=r(0),i=r.n(l),u=(r(638),r(236)),c=r(191),m=r(364),s=r(639),f=r(16),d=r(640),p=r(393),b="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js";function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var t=e.proofStore,r=e.pipelineList,o=e.pipelineId,f=e.pipelineName,_=t.updateProof,y=t.deleteProof,v=t.proofList,h=N(Object(l.useState)(""),2),E=h[0],w=h[1],g=N(Object(l.useState)(!1),2),L=g[0],H=g[1],S=N(Object(l.useState)(!1),2),G=S[0],j=S[1],I=N(Object(l.useState)(1),2),O=I[0],P=I[1],T=[{title:"作用域",dataIndex:"type",key:"type",render:function(e){switch(e){case 1:return"全局凭证";default:return"项目凭证"}}},{title:"名称",dataIndex:"proofName",key:"proofName",width:"200px",ellipsis:!0},{title:"类型",dataIndex:"proofType",key:"proofType"},{title:"创建时间",dataIndex:"proofCreateTime",key:"proofCreateTime"},{title:"备注",dataIndex:"proofDescribe",key:"proofDescribe",width:"200px",ellipsis:!0},{title:"操作",dataIndex:"action",key:"action",render:function(e,t){return i.a.createElement("span",{className:"proof-content-action",__source:{fileName:b,lineNumber:80,columnNumber:21}},i.a.createElement("span",{className:"edit",onClick:function(){return function(e,t){2===t.proofScope||3===t.proofScope?j(!0):j(!1),w(t),P(t.type),H(!0)}(0,t)},__source:{fileName:b,lineNumber:81,columnNumber:25}},i.a.createElement(u.a,{__source:{fileName:b,lineNumber:82,columnNumber:29}})),i.a.createElement(a.a,{style:{marginTop:100},title:"你确定删除吗",onConfirm:function(){return function(e,t){y(t.proofId)}(0,t)},okText:"确定",cancelText:"取消",__source:{fileName:b,lineNumber:84,columnNumber:26}},i.a.createElement("span",{className:"del",__source:{fileName:b,lineNumber:91,columnNumber:30}},i.a.createElement(c.a,{__source:{fileName:b,lineNumber:92,columnNumber:34}}))))}}];return i.a.createElement("div",{className:"proof home-limited",__source:{fileName:b,lineNumber:102,columnNumber:9}},f?i.a.createElement(m.a,{firstItem:f,secondItem:"凭证设置",__source:{fileName:b,lineNumber:105,columnNumber:21}}):i.a.createElement(m.a,{firstItem:"凭证管理",__source:{fileName:b,lineNumber:107,columnNumber:21}}),i.a.createElement("div",{className:"proof-content",__source:{fileName:b,lineNumber:109,columnNumber:13}},i.a.createElement(d.a,{pipelineList:r,__source:{fileName:b,lineNumber:110,columnNumber:17}}),i.a.createElement(n.a,{columns:T,dataSource:v,rowKey:function(e){return e.proofId},pagination:!1,locale:{emptyText:i.a.createElement(p.a,{__source:{fileName:b,lineNumber:118,columnNumber:41}})},__source:{fileName:b,lineNumber:113,columnNumber:17}})),i.a.createElement(s.a,{visible:L,setVisible:H,formValue:E,displayPart:G,pipelineList:r,isShowPipeline:O,setIsShowPipeline:P,updateProof:_,pipelineId:o,__source:{fileName:b,lineNumber:121,columnNumber:13}}))};y(v,'useState{[formValue,setFormValue]("")}\nuseState{[visible,setVisible](false)}\nuseState{[displayPart,setDisplayPart](false)}\nuseState{[isShowPipeline,setIsShowPipeline](1)}');var h,E,w=Object(f.b)("proofStore")(Object(f.c)(v));t.a=w,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(v,"Proof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js"),h.register(w,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}).call(this,r(15)(e))},638:function(e,t,r){},639:function(e,t,r){"use strict";(function(e){r(34);var o,n=r(20),a=(r(23),r(7)),l=(r(24),r(5)),i=(r(25),r(3)),u=(r(140),r(29)),c=(r(55),r(6)),m=(r(76),r(21)),s=r(0),f=r.n(s),d=r(359),p="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js";function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=m.a.Option,v=function(e){var t=e.visible,r=e.setVisible,o=e.formValue,N=e.updateProof,_=e.displayPart,v=e.pipelineList,h=e.pipelineId,E=e.isShowPipeline,w=e.setIsShowPipeline,g=b(c.a.useForm(),1)[0];Object(s.useEffect)((function(){t&&g.setFieldsValue(o)}),[t]);return f.a.createElement(n.a,{visible:t,closable:!1,okText:"确认",cancelText:"取消",onCancel:function(){return r(!1)},onOk:function(){g.validateFields().then((function(e){var t;t=h?["".concat(h)]:e.proofList;var n={proofId:o.proofId,proofScope:e.proofScope,proofType:e.proofType,proofName:e.proofName,proofUsername:e.proofUsername,proofPassword:e.proofPassword,proofDescribe:e.proofDescribe,type:e.type,proofList:t};N(n),r(!1)}))},bodyStyle:{maxHeight:750,overflow:"auto"},__source:{fileName:p,lineNumber:49,columnNumber:9}},f.a.createElement(d.a,{setVisible:r,title:"修改凭证",__source:{fileName:p,lineNumber:58,columnNumber:13}}),f.a.createElement("div",{style:{maxHeight:648,overflow:"auto"},__source:{fileName:p,lineNumber:62,columnNumber:13}},f.a.createElement(c.a,{form:g,layout:"vertical",name:"userForm",autoComplete:"off",__source:{fileName:p,lineNumber:63,columnNumber:17}},f.a.createElement(c.a.Item,{label:"凭证级别",name:"type",__source:{fileName:p,lineNumber:69,columnNumber:21}},f.a.createElement(m.a,{onChange:function(e){w(e)},__source:{fileName:p,lineNumber:70,columnNumber:25}},f.a.createElement(y,{value:1,__source:{fileName:p,lineNumber:71,columnNumber:29}},"全局凭证"),f.a.createElement(y,{value:2,__source:{fileName:p,lineNumber:72,columnNumber:29}},"项目凭证"))),2===E&&v&&f.a.createElement(c.a.Item,{label:"项目作用域",name:"proofList",rules:[{required:!0,message:"请选择项目作用域"}],__source:{fileName:p,lineNumber:77,columnNumber:29}},f.a.createElement(u.a.Group,{__source:{fileName:p,lineNumber:82,columnNumber:33}},v&&v.map((function(e){return f.a.createElement(l.a,{key:e.pipelineId,__source:{fileName:p,lineNumber:85,columnNumber:52}},f.a.createElement(i.a,{__source:{fileName:p,lineNumber:86,columnNumber:57}},f.a.createElement(u.a,{value:e.pipelineId,__source:{fileName:p,lineNumber:87,columnNumber:61}},e.pipelineName)))})))),f.a.createElement(c.a.Item,{label:"凭证作用域",name:"proofScope",__source:{fileName:p,lineNumber:97,columnNumber:21}},_?f.a.createElement(m.a,{disabled:_,__source:{fileName:p,lineNumber:100,columnNumber:33}},f.a.createElement(y,{value:2,__source:{fileName:p,lineNumber:101,columnNumber:37}},"Gitee凭证"),f.a.createElement(y,{value:3,__source:{fileName:p,lineNumber:102,columnNumber:37}},"Github凭证")):f.a.createElement(m.a,{__source:{fileName:p,lineNumber:105,columnNumber:33}},f.a.createElement(y,{value:1,__source:{fileName:p,lineNumber:106,columnNumber:37}},"源码凭证"),f.a.createElement(y,{value:5,__source:{fileName:p,lineNumber:107,columnNumber:37}},"部署凭证"))),f.a.createElement(c.a.Item,{label:"凭证名称",name:"proofName",rules:[{required:!0,message:"请输入凭证名称"},{type:"string",max:10,message:"凭证名称过长"}],__source:{fileName:p,lineNumber:111,columnNumber:21}},f.a.createElement(a.a,{placeholder:"名称",__source:{fileName:p,lineNumber:119,columnNumber:25}})),f.a.createElement(c.a.Item,{label:"凭证类型",name:"proofType",__source:{fileName:p,lineNumber:121,columnNumber:21}},f.a.createElement(m.a,{placeholder:"选择类型",disabled:_,__source:{fileName:p,lineNumber:122,columnNumber:25}},f.a.createElement(y,{value:"SSH",__source:{fileName:p,lineNumber:123,columnNumber:29}},"SSH"),f.a.createElement(y,{value:"password",__source:{fileName:p,lineNumber:124,columnNumber:29}},"password"))),f.a.createElement(c.a.Item,{shouldUpdate:function(e,t){return e.proofType!==t.proofType},__source:{fileName:p,lineNumber:127,columnNumber:21}},(function(e){return"password"===(0,e.getFieldValue)("proofType")?f.a.createElement(f.a.Fragment,null,f.a.createElement(c.a.Item,{label:"用户名",name:"proofUsername",__source:{fileName:p,lineNumber:131,columnNumber:41}},f.a.createElement(a.a,{disabled:_,__source:{fileName:p,lineNumber:132,columnNumber:45}})),f.a.createElement(c.a.Item,{label:"密码",name:"proofPassword",__source:{fileName:p,lineNumber:134,columnNumber:41}},f.a.createElement(a.a.Password,{disabled:_,__source:{fileName:p,lineNumber:135,columnNumber:45}})),f.a.createElement(c.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:p,lineNumber:137,columnNumber:41}},f.a.createElement(a.a.TextArea,{__source:{fileName:p,lineNumber:138,columnNumber:45}}))):f.a.createElement(f.a.Fragment,null,f.a.createElement(c.a.Item,{name:"proofPassword",label:"私钥",__source:{fileName:p,lineNumber:143,columnNumber:37}},f.a.createElement(a.a.TextArea,{disabled:_,__source:{fileName:p,lineNumber:144,columnNumber:41}})),f.a.createElement(c.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:p,lineNumber:146,columnNumber:37}},f.a.createElement(a.a.TextArea,{__source:{fileName:p,lineNumber:147,columnNumber:41}})))})))))};_(v,"useForm{[form]}\nuseEffect{}");var h,E,w=v;t.a=w,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(y,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js"),h.register(v,"UpdateProof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js"),h.register(w,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}).call(this,r(15)(e))},640:function(e,t,r){"use strict";(function(e){r(23);var o,n=r(7),a=(r(76),r(21)),l=r(0),i=r.n(l),u=r(555),c=r(188),m="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\proofSwitch.js";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,f,d=function(e){var t=e.pipelineList;return i.a.createElement("div",{className:"proof-content-switch",__source:{fileName:m,lineNumber:11,columnNumber:9}},i.a.createElement("div",{className:"proof-content-switch-left",__source:{fileName:m,lineNumber:12,columnNumber:13}},i.a.createElement("div",{className:"switch-left",__source:{fileName:m,lineNumber:13,columnNumber:17}},i.a.createElement(a.a,{style:{width:150},defaultValue:1,__source:{fileName:m,lineNumber:14,columnNumber:21}},i.a.createElement(a.a.Option,{value:1,__source:{fileName:m,lineNumber:15,columnNumber:25}},"所有创建人"),i.a.createElement(a.a.Option,{value:2,__source:{fileName:m,lineNumber:16,columnNumber:25}},"我创建的"))),i.a.createElement("div",{className:"switch-left",__source:{fileName:m,lineNumber:19,columnNumber:17}},i.a.createElement(a.a,{style:{width:150},defaultValue:1,__source:{fileName:m,lineNumber:20,columnNumber:21}},i.a.createElement(a.a.Option,{value:1,__source:{fileName:m,lineNumber:21,columnNumber:25}},"所有类型"),i.a.createElement(a.a.Option,{value:2,__source:{fileName:m,lineNumber:22,columnNumber:25}},"password"),i.a.createElement(a.a.Option,{value:3,__source:{fileName:m,lineNumber:23,columnNumber:25}},"ssh"))),i.a.createElement("div",{className:"switch-left",__source:{fileName:m,lineNumber:26,columnNumber:17}},i.a.createElement(n.a,{placeholder:"名称",style:{width:300},prefix:i.a.createElement(c.a,{__source:{fileName:m,lineNumber:30,columnNumber:33}}),__source:{fileName:m,lineNumber:27,columnNumber:21}}))),i.a.createElement("div",{className:"proof-content-btn",__source:{fileName:m,lineNumber:34,columnNumber:13}},i.a.createElement(u.a,{style:"primary",pipelineList:t,__source:{fileName:m,lineNumber:35,columnNumber:17}})))},p=d;t.a=p,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(d,"ProofSwitch","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\proofSwitch.js"),s.register(p,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\proofSwitch.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(15)(e))}}]);