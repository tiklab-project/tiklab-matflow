(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{233:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(0),a=r.n(n),l=r(11),u=r(2),i=r(605);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(e){var t=e.proofStore,r=e.matFlowStore,o=t.findMatFlowProof,l=t.fresh,c=r.matFlowId,m=r.matFlowName,s=Object(u.e)().userId;return Object(n.useEffect)((function(){o({matFlowId:c,type:0,userId:s})}),[l,c]),a.a.createElement(i.a,{matFlowId:c,matFlowName:m,__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\proof\\projectSetProof.js",lineNumber:22,columnNumber:13}})};c(m,"useEffect{}");var s,f,d=Object(l.b)("proofStore","matFlowStore")(Object(l.c)(m));t.default=d,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(m,"ProjectSetProof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\proof\\projectSetProof.js"),s.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\projectSet\\proof\\projectSetProof.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}.call(this,r(22)(e))},302:function(e,t){e.exports=function(e,t,r,o){var n=r?r.call(o,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),i=0;i<a.length;i++){var c=a[i];if(!u(c))return!1;var m=e[c],s=t[c];if(!1===(n=r?r.call(o,m,s,c):void 0)||void 0===n&&m!==s)return!1}return!0}},320:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return y}));var o,n=r(0),a=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l=n.createContext(null),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return n.createElement(l.Provider,{value:this.props.store},this.props.children)},t}(n.Component),i=r(302),c=r.n(i),m=r(129),s=r.n(m),f=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),d=function(){return(d=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var b=function(){return{}};function p(e,t){void 0===t&&(t={});var r=!!e,o=e||b;return function(a){var u=function(t){function u(e,r){var n=t.call(this,e,r)||this;return n.unsubscribe=null,n.handleChange=function(){if(n.unsubscribe){var e=o(n.store.getState(),n.props);n.setState({subscribed:e})}},n.store=n.context,n.state={subscribed:o(n.store.getState(),e),store:n.store,props:e},n}return f(u,t),u.getDerivedStateFromProps=function(t,r){return e&&2===e.length&&t!==r.props?{subscribed:o(r.store.getState(),t),props:t}:{props:t}},u.prototype.componentDidMount=function(){this.trySubscribe()},u.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},u.prototype.shouldComponentUpdate=function(e,t){return!c()(this.props,e)||!c()(this.state.subscribed,t.subscribed)},u.prototype.trySubscribe=function(){r&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},u.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},u.prototype.render=function(){var e=d(d(d({},this.props),this.state.subscribed),{store:this.store});return n.createElement(a,d({},e,{ref:this.props.miniStoreForwardedRef}))},u.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(a)+")",u.contextType=l,u}(n.Component);if(t.forwardRef){var i=n.forwardRef((function(e,t){return n.createElement(u,d({},e,{miniStoreForwardedRef:t}))}));return s()(i,a)}return s()(u,a)}}var N=function(){return(N=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function y(e){var t=e,r=[];return{setState:function(e){t=N(N({},t),e);for(var o=0;o<r.length;o++)r[o]()},getState:function(){return t},subscribe:function(e){return r.push(e),function(){var t=r.indexOf(e);r.splice(t,1)}}}}},324:function(e,t,r){"use strict";function o(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function n(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return n(r.overflowY,t)||n(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function l(e,t,r,o,n,a,l,u){return a<e&&l>t||a>e&&l<t?0:a<=e&&u<=r||l>=t&&u>=r?a-e-o:l>t&&u<r||a<e&&u>r?l-t+n:0}var u=function(e,t){var r=window,n=t.scrollMode,u=t.block,i=t.inline,c=t.boundary,m=t.skipOverflowHiddenElements,s="function"==typeof c?c:function(e){return e!==c};if(!o(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,d=[],b=e;o(b)&&s(b);){if((b=b.parentElement)===f){d.push(b);break}null!=b&&b===document.body&&a(b)&&!a(document.documentElement)||null!=b&&a(b,m)&&d.push(b)}for(var p=r.visualViewport?r.visualViewport.width:innerWidth,N=r.visualViewport?r.visualViewport.height:innerHeight,y=window.scrollX||pageXOffset,h=window.scrollY||pageYOffset,_=e.getBoundingClientRect(),v=_.height,w=_.width,g=_.top,E=_.right,S=_.bottom,j=_.left,I="start"===u||"nearest"===u?g:"end"===u?S:g+v/2,L="center"===i?j+w/2:"end"===i?E:j,H=[],F=0;F<d.length;F++){var O=d[F],G=O.getBoundingClientRect(),k=G.height,P=G.width,M=G.top,T=G.right,D=G.bottom,x=G.left;if("if-needed"===n&&g>=0&&j>=0&&S<=N&&E<=p&&g>=M&&S<=D&&j>=x&&E<=T)return H;var A=getComputedStyle(O),C=parseInt(A.borderLeftWidth,10),V=parseInt(A.borderTopWidth,10),U=parseInt(A.borderRightWidth,10),W=parseInt(A.borderBottomWidth,10),B=0,R=0,z="offsetWidth"in O?O.offsetWidth-O.clientWidth-C-U:0,q="offsetHeight"in O?O.offsetHeight-O.clientHeight-V-W:0;if(f===O)B="start"===u?I:"end"===u?I-N:"nearest"===u?l(h,h+N,N,V,W,h+I,h+I+v,v):I-N/2,R="start"===i?L:"center"===i?L-p/2:"end"===i?L-p:l(y,y+p,p,C,U,y+L,y+L+w,w),B=Math.max(0,B+h),R=Math.max(0,R+y);else{B="start"===u?I-M-V:"end"===u?I-D+W+q:"nearest"===u?l(M,D,k,V,W+q,I,I+v,v):I-(M+k/2)+q/2,R="start"===i?L-x-C:"center"===i?L-(x+P/2)+z/2:"end"===i?L-T+U+z:l(x,T,P,C,U+z,L,L+w,w);var $=O.scrollLeft,K=O.scrollTop;I+=K-(B=Math.max(0,Math.min(K+B,O.scrollHeight-k+q))),L+=$-(R=Math.max(0,Math.min($+R,O.scrollWidth-P+z)))}H.push({el:O,top:B,left:R})}return H};function i(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(i(t)&&"function"==typeof t.behavior)return t.behavior(r?u(e,t):[]);if(r){var o=function(e){return!1===e?{block:"end",inline:"nearest"}:i(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var o=e.el,n=e.top,a=e.left;o.scroll&&r?o.scroll({top:n,left:a,behavior:t}):(o.scrollTop=n,o.scrollLeft=a)}))}(u(e,o),o.behavior)}}},330:function(e,t,r){"use strict";(function(e){var o,n=r(0),a=r.n(n),l=(r(334),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js");(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,i,c=function(e){var t=e.config,r=e.firstItem,o=e.secondItem;return a.a.createElement("div",{className:t?"breadcrumb-topOver":"breadcrumb",__source:{fileName:l,lineNumber:9,columnNumber:13}},a.a.createElement("span",{className:o?"breadcrumb-span":"",__source:{fileName:l,lineNumber:10,columnNumber:17}},r),o?a.a.createElement("span",{__source:{fileName:l,lineNumber:11,columnNumber:31}},"  >  ",o):null)},m=c;t.a=m,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(c,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),u.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(22)(e))},334:function(e,t,r){},366:function(e,t,r){"use strict";(function(e){r(29);var o,n=r(17),a=(r(19),r(5)),l=(r(24),r(6)),u=(r(25),r(3)),i=(r(131),r(32)),c=(r(31),r(4)),m=(r(42),r(12)),s=r(0),f=r.n(s),d=(r(484),r(480)),b="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js";function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){u=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to debuild non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=m.a.Option,_=function(e){var t=e.visible,r=e.setVisible,o=e.createProof,N=e.userId,y=e.fresh,_=e.setFresh,v=e.isAuthority,w=e.type,g=e.matFlowList,E=e.matFlowId,S=p(c.a.useForm(),1)[0],j=p(Object(s.useState)(1),2),I=j[0],L=j[1];return f.a.createElement(n.a,{visible:t,closable:!1,okText:"确认",cancelText:"取消",onCancel:function(){return r(!1)},onOk:function(){S.validateFields().then((function(e){S.resetFields(),function(e){var t,n;n=g?e.proofList:["".concat(E)],t=v?e.proofScope:w;var a={user:{id:N},type:e.type,proofScope:t,proofType:e.proofType,proofName:e.proofName,proofUsername:e.proofUsername,proofPassword:e.proofPassword,proofDescribe:e.proofDescribe,proofCreateTime:d.a.moment,proofList:n};o(a).then((function(){_(!y)})).catch((function(e){})),r(!1)}(e)}))},bodyStyle:{maxHeight:700,overflow:"auto"},__source:{fileName:b,lineNumber:52,columnNumber:9}},f.a.createElement(c.a,{form:S,layout:"vertical",name:"userForm",autoComplete:"off",initialValues:{proofType:"password",type:1,proofScope:1},__source:{fileName:b,lineNumber:68,columnNumber:13}},f.a.createElement(c.a.Item,{label:"凭证级别",name:"type",__source:{fileName:b,lineNumber:74,columnNumber:17}},f.a.createElement(m.a,{onChange:function(e){L(e)},__source:{fileName:b,lineNumber:75,columnNumber:21}},f.a.createElement(h,{value:1,__source:{fileName:b,lineNumber:76,columnNumber:25}},"全局凭证"),f.a.createElement(h,{value:2,__source:{fileName:b,lineNumber:77,columnNumber:25}},"项目凭证"))),g&&2===I?f.a.createElement(c.a.Item,{label:"项目作用域",name:"proofList",className:"proofModal-showMatFlow",rules:[{required:!0,message:"请选择项目作用域"}],__source:{fileName:b,lineNumber:82,columnNumber:21}},f.a.createElement(i.a.Group,{__source:{fileName:b,lineNumber:88,columnNumber:25}},g&&g.map((function(e){return f.a.createElement(l.a,{key:e.matFlowId,__source:{fileName:b,lineNumber:91,columnNumber:41}},f.a.createElement(u.a,{__source:{fileName:b,lineNumber:92,columnNumber:45}},f.a.createElement(i.a,{value:e.matFlowId,__source:{fileName:b,lineNumber:93,columnNumber:49}},e.matFlowName)))})))):null,v?f.a.createElement(c.a.Item,{label:"凭证作用域",name:"proofScope",__source:{fileName:b,lineNumber:105,columnNumber:21}},f.a.createElement(m.a,{__source:{fileName:b,lineNumber:106,columnNumber:25}},f.a.createElement(h,{value:1,__source:{fileName:b,lineNumber:107,columnNumber:29}},"源码凭证"),f.a.createElement(h,{value:5,__source:{fileName:b,lineNumber:108,columnNumber:29}},"部署凭证"))):null,f.a.createElement(c.a.Item,{label:"凭证名称",name:"proofName",rules:[{required:!0,message:"请输入凭证名称"}],__source:{fileName:b,lineNumber:113,columnNumber:17}},f.a.createElement(a.a,{placeholder:"名称",__source:{fileName:b,lineNumber:118,columnNumber:21}})),f.a.createElement(c.a.Item,{label:"凭证类型",name:"proofType",__source:{fileName:b,lineNumber:120,columnNumber:17}},f.a.createElement(m.a,{placeholder:"选择类型",__source:{fileName:b,lineNumber:121,columnNumber:21}},f.a.createElement(h,{value:"SSH",__source:{fileName:b,lineNumber:122,columnNumber:25}},"SSH"),f.a.createElement(h,{value:"password",__source:{fileName:b,lineNumber:123,columnNumber:25}},"password"))),f.a.createElement(c.a.Item,{shouldUpdate:function(e,t){return e.proofType!==t.proofType},__source:{fileName:b,lineNumber:126,columnNumber:17}},(function(e){return"password"===(0,e.getFieldValue)("proofType")?f.a.createElement(f.a.Fragment,null,f.a.createElement(c.a.Item,{label:"用户名",name:"proofUsername",__source:{fileName:b,lineNumber:130,columnNumber:33}},f.a.createElement(a.a,{placeholder:"账号",__source:{fileName:b,lineNumber:131,columnNumber:37}})),f.a.createElement(c.a.Item,{label:"密码",name:"proofPassword",__source:{fileName:b,lineNumber:133,columnNumber:33}},f.a.createElement(a.a.Password,{placeholder:"密码",__source:{fileName:b,lineNumber:134,columnNumber:37}}))):f.a.createElement(c.a.Item,{name:"proofPassword",label:"私钥",__source:{fileName:b,lineNumber:138,columnNumber:29}},f.a.createElement(a.a.TextArea,{placeholder:"私钥",__source:{fileName:b,lineNumber:139,columnNumber:33}}))})),f.a.createElement(c.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:b,lineNumber:143,columnNumber:17}},f.a.createElement(a.a.TextArea,{placeholder:"备注",__source:{fileName:b,lineNumber:144,columnNumber:21}}))))};y(_,"useForm{[form]}\nuseState{[isShowMatFlow,setIsShowMatFlow](1)}");var v,w,g=_;t.a=g,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(h,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js"),v.register(_,"AddProofModal","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js"),v.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js")),(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&w(e)}).call(this,r(22)(e))},479:function(e,t,r){"use strict";(function(e){r(28);var o,n=r(15),a=r(0),l=r.n(a),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\tables\\tables.js";(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,m=function(e){var t=e.columns,r=e.dataSource,o=e.rowKey;return l.a.createElement(n.a,{rowKey:o,columns:t,dataSource:r,pagination:{hideOnSinglePage:!0,pageSize:10},locale:{emptyText:l.a.createElement(a.Fragment,{__source:{fileName:u,lineNumber:13,columnNumber:17}},l.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:u,lineNumber:14,columnNumber:21}},l.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:u,lineNumber:15,columnNumber:25}})),l.a.createElement("div",{__source:{fileName:u,lineNumber:17,columnNumber:21}},"没有数据"))},__source:{fileName:u,lineNumber:6,columnNumber:12}})},s=m;t.a=s,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(m,"Tables","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\tables\\tables.js"),i.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\tables\\tables.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(22)(e))},483:function(e,t,r){"use strict";(function(e){r(27);var o,n=r(9),a=r(0),l=r.n(a),u=r(366),i=r(11),c=r(2),m="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js";function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){u=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to debuild non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=e.proofStore,r=e.matFlowStore,o=e.type,i=e.style,f=e.matFlowList,d=t.createProof,b=t.fresh,p=t.setFresh,N=r.matFlowId,y=Object(c.e)().userId,h=s(Object(a.useState)(!1),2),_=h[0],v=h[1],w=s(Object(a.useState)(!1),2),g=w[0],E=w[1];Object(a.useEffect)((function(){i&&E(!0)}),[]);return l.a.createElement("div",{className:"config-details-link",__source:{fileName:m,lineNumber:29,columnNumber:9}},l.a.createElement(n.a,{type:i,onClick:function(){v(!0)},__source:{fileName:m,lineNumber:30,columnNumber:13}},"添加"),l.a.createElement(u.a,{visible:_,setVisible:v,createProof:d,userId:y,fresh:b,setFresh:p,isAuthority:g,type:o,style:i,matFlowList:f,matFlowId:N,__source:{fileName:m,lineNumber:33,columnNumber:13}}))};d(b,"useState{[visible,setVisible](false)}\nuseState{[isAuthority,setIsAuthority](false)}\nuseEffect{}");var p,N,y=Object(i.b)("proofStore","matFlowStore")(Object(i.c)(b));t.a=y,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(b,"AddProofButton","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js"),p.register(y,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}).call(this,r(22)(e))},484:function(e,t,r){},519:function(e,t,r){var o={"./es":372,"./es-do":373,"./es-do.js":373,"./es-mx":374,"./es-mx.js":374,"./es-us":375,"./es-us.js":375,"./es.js":372,"./zh-cn":376,"./zh-cn.js":376,"./zh-tw":377,"./zh-tw.js":377};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=519},605:function(e,t,r){"use strict";(function(e){r(459);var o,n=r(458),a=r(0),l=r.n(a),u=(r(606),r(483)),i=r(330),c=r(607),m=r(11),s=r(479),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js";function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){u=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to debuild non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},N=function(e){var t=e.proofStore,r=e.matFlowList,o=e.matFlowId,m=e.matFlowName,b=t.updateProof,p=t.deleteProof,N=t.proofList,y=t.setFresh,h=t.fresh,_=d(Object(a.useState)(""),2),v=_[0],w=_[1],g=d(Object(a.useState)(!1),2),E=g[0],S=g[1],j=d(Object(a.useState)(!1),2),I=j[0],L=j[1],H=d(Object(a.useState)(1),2),F=H[0],O=H[1],G=[{title:"作用域",dataIndex:"type",key:"type",render:function(e){switch(e){case 1:return"全局凭证";default:return"项目凭证"}}},{title:"名称",dataIndex:"proofName",key:"proofName"},{title:"类型",dataIndex:"proofType",key:"proofType"},{title:"创建时间",dataIndex:"proofCreateTime",key:"proofCreateTime"},{title:"备注",dataIndex:"proofDescribe",key:"proofDescribe"},{title:"操作",dataIndex:"activity",key:"activity",render:function(e,t){return l.a.createElement("span",{className:"proof-content-activity",__source:{fileName:f,lineNumber:79,columnNumber:21}},l.a.createElement("span",{className:"edit",onClick:function(){return function(e,t){2===t.proofScope||3===t.proofScope?L(!0):L(!1),w(t),O(t.type),S(!0)}(0,t)},__source:{fileName:f,lineNumber:80,columnNumber:25}},"编辑"),l.a.createElement(n.a,{style:{marginTop:100},title:"你确定删除吗",onConfirm:function(){return function(e,t){p(t.proofId).then((function(){y(!h)})).catch((function(e){}))}(0,t)},okText:"确定",cancelText:"取消",__source:{fileName:f,lineNumber:83,columnNumber:26}},l.a.createElement("span",{className:"del",__source:{fileName:f,lineNumber:90,columnNumber:30}},"删除")))}}];return l.a.createElement("div",{className:"proof",__source:{fileName:f,lineNumber:101,columnNumber:9}},m?l.a.createElement(i.a,{firstItem:m,secondItem:"凭证设置",__source:{fileName:f,lineNumber:104,columnNumber:21}}):l.a.createElement(i.a,{firstItem:"凭证设置",__source:{fileName:f,lineNumber:106,columnNumber:21}}),l.a.createElement("div",{className:"proof-content",__source:{fileName:f,lineNumber:108,columnNumber:13}},l.a.createElement("div",{className:"proof-content-btn",__source:{fileName:f,lineNumber:109,columnNumber:17}},l.a.createElement(u.a,{style:"primary",matFlowList:r,__source:{fileName:f,lineNumber:110,columnNumber:21}})),l.a.createElement(s.a,{columns:G,dataSource:N,rowKey:function(e){return e.proofId},__source:{fileName:f,lineNumber:112,columnNumber:17}})),l.a.createElement(c.a,{visible:E,setVisible:S,formValue:v,fresh:h,setFresh:y,displayPart:I,matFlowList:r,isShowMatFlow:F,setIsShowMatFlow:O,updateProof:b,matFlowId:o,__source:{fileName:f,lineNumber:118,columnNumber:13}}))};p(N,'useState{[formValue,setFormValue]("")}\nuseState{[visible,setVisible](false)}\nuseState{[displayPart,setDisplayPart](false)}\nuseState{[isShowMatFlow,setIsShowMatFlow](1)}');var y,h,_=Object(m.b)("proofStore")(Object(m.c)(N));t.a=_,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(N,"Proof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js"),y.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,r(22)(e))},606:function(e,t,r){},607:function(e,t,r){"use strict";(function(e){r(29);var o,n=r(17),a=(r(19),r(5)),l=(r(24),r(6)),u=(r(25),r(3)),i=(r(131),r(32)),c=(r(31),r(4)),m=(r(42),r(12)),s=r(0),f=r.n(s),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js";function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);l=!0);}catch(e){u=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to debuild non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=m.a.Option,h=function(e){var t=e.visible,r=e.setVisible,o=e.formValue,p=e.updateProof,N=e.setFresh,h=e.fresh,_=e.displayPart,v=e.matFlowList,w=e.matFlowId,g=e.isShowMatFlow,E=e.setIsShowMatFlow,S=b(c.a.useForm(),1)[0];Object(s.useEffect)((function(){t&&S.setFieldsValue(o)}),[t]);return f.a.createElement(n.a,{visible:t,closable:!1,okText:"确认",cancelText:"取消",onCancel:function(){return r(!1)},onOk:function(){S.validateFields().then((function(e){var t;t=w?["".concat(w)]:e.proofList;var n={proofId:o.proofId,proofScope:e.proofScope,proofType:e.proofType,proofName:e.proofName,proofUsername:e.proofUsername,proofPassword:e.proofPassword,proofDescribe:e.proofDescribe,type:e.type,proofList:t};p(n).then((function(){N(!h)})).catch((function(e){})),r(!1)}))},bodyStyle:{maxHeight:700,overflow:"auto"},__source:{fileName:d,lineNumber:52,columnNumber:9}},f.a.createElement(c.a,{form:S,layout:"vertical",name:"userForm",autoComplete:"off",__source:{fileName:d,lineNumber:61,columnNumber:13}},f.a.createElement(c.a.Item,{label:"凭证级别",name:"type",__source:{fileName:d,lineNumber:62,columnNumber:17}},f.a.createElement(m.a,{onChange:function(e){E(e)},__source:{fileName:d,lineNumber:63,columnNumber:21}},f.a.createElement(y,{value:1,__source:{fileName:d,lineNumber:64,columnNumber:25}},"全局凭证"),f.a.createElement(y,{value:2,__source:{fileName:d,lineNumber:65,columnNumber:25}},"项目凭证"))),2===g&&v?f.a.createElement(c.a.Item,{label:"项目作用域",name:"proofList",className:"proofModal-showMatFlow",rules:[{required:!0,message:"请选择项目作用域"}],__source:{fileName:d,lineNumber:70,columnNumber:25}},f.a.createElement(i.a.Group,{__source:{fileName:d,lineNumber:76,columnNumber:29}},v&&v.map((function(e){return f.a.createElement(l.a,{key:e.matFlowId,__source:{fileName:d,lineNumber:79,columnNumber:48}},f.a.createElement(u.a,{__source:{fileName:d,lineNumber:80,columnNumber:53}},f.a.createElement(i.a,{value:e.matFlowId,__source:{fileName:d,lineNumber:81,columnNumber:57}},e.matFlowName)))})))):null,f.a.createElement(c.a.Item,{label:"凭证作用域",name:"proofScope",__source:{fileName:d,lineNumber:91,columnNumber:17}},_?f.a.createElement(m.a,{disabled:_,__source:{fileName:d,lineNumber:94,columnNumber:29}},f.a.createElement(y,{value:2,__source:{fileName:d,lineNumber:95,columnNumber:33}},"Gitee凭证"),f.a.createElement(y,{value:3,__source:{fileName:d,lineNumber:96,columnNumber:33}},"Github凭证")):f.a.createElement(m.a,{__source:{fileName:d,lineNumber:99,columnNumber:29}},f.a.createElement(y,{value:1,__source:{fileName:d,lineNumber:100,columnNumber:33}},"源码凭证"),f.a.createElement(y,{value:5,__source:{fileName:d,lineNumber:101,columnNumber:33}},"部署凭证"))),f.a.createElement(c.a.Item,{label:"凭证名称",name:"proofName",rules:[{required:!0,message:"请输入凭证名称"}],__source:{fileName:d,lineNumber:105,columnNumber:17}},f.a.createElement(a.a,{placeholder:"名称",__source:{fileName:d,lineNumber:110,columnNumber:21}})),f.a.createElement(c.a.Item,{label:"凭证类型",name:"proofType",__source:{fileName:d,lineNumber:112,columnNumber:17}},f.a.createElement(m.a,{placeholder:"选择类型",disabled:_,__source:{fileName:d,lineNumber:113,columnNumber:21}},f.a.createElement(y,{value:"SSH",__source:{fileName:d,lineNumber:114,columnNumber:25}},"SSH"),f.a.createElement(y,{value:"password",__source:{fileName:d,lineNumber:115,columnNumber:25}},"password"))),f.a.createElement(c.a.Item,{shouldUpdate:function(e,t){return e.proofType!==t.proofType},__source:{fileName:d,lineNumber:118,columnNumber:17}},(function(e){return"password"===(0,e.getFieldValue)("proofType")?f.a.createElement(f.a.Fragment,null,f.a.createElement(c.a.Item,{label:"用户名",name:"proofUsername",__source:{fileName:d,lineNumber:122,columnNumber:37}},f.a.createElement(a.a,{disabled:_,__source:{fileName:d,lineNumber:123,columnNumber:41}})),f.a.createElement(c.a.Item,{label:"密码",name:"proofPassword",__source:{fileName:d,lineNumber:125,columnNumber:37}},f.a.createElement(a.a.Password,{disabled:_,__source:{fileName:d,lineNumber:126,columnNumber:41}}))):f.a.createElement(c.a.Item,{name:"proofPassword",label:"私钥",__source:{fileName:d,lineNumber:130,columnNumber:29}},f.a.createElement(a.a.TextArea,{disabled:_,__source:{fileName:d,lineNumber:131,columnNumber:33}}))})),f.a.createElement(c.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:d,lineNumber:135,columnNumber:17}},f.a.createElement(a.a.TextArea,{__source:{fileName:d,lineNumber:136,columnNumber:21}}))))};N(h,"useForm{[form]}\nuseEffect{}");var _,v,w=h;t.a=w,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(y,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js"),_.register(h,"UpdateProof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js"),_.register(w,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,r(22)(e))}}]);