(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{289:function(e,t,n){"use strict";n.r(t),function(e){n(28);var r,o=n(13),a=(n(585),n(582)),i=(n(47),n(15)),l=n(0),u=n.n(l),c=n(14),s=n(252),m=n(203),d=n(194),f=n(927),b=(n(928),n(376)),p=n(390),N=n(607),v=n(356),y="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\setting\\container\\envi.js";function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(e){var t=e.settingStore,n=t.findAllPipelineScm,r=t.deletePipelineScm,c=t.updatePipelineScm,g=h(Object(l.useState)(!1),2),_=g[0],w=g[1],E=h(Object(l.useState)(!1),2),H=E[0],G=E[1],j=h(Object(l.useState)([]),2),L=j[0],k=j[1],S=h(Object(l.useState)(""),2),T=S[0],O=S[1];Object(l.useEffect)((function(){n().then((function(e){0===e.code&&e.data&&k(e.data)}))}),[H]);var x=[{title:"类型",dataIndex:"scmType",key:"scmType",render:function(e){return u.a.createElement(N.a,{type:e,__source:{fileName:y,lineNumber:61,columnNumber:28}})}},{title:"名称",dataIndex:"scmName",key:"scmName"},{title:"地址",dataIndex:"scmAddress",key:"scmAddress"},{title:"操作",dataIndex:"action",key:"action",render:function(e,t){return u.a.createElement("span",{className:"envi-content-action",__source:{fileName:y,lineNumber:79,columnNumber:21}},u.a.createElement(i.a,{title:"修改",__source:{fileName:y,lineNumber:80,columnNumber:25}},u.a.createElement("span",{className:"edit",onClick:function(){return function(e,t){O(t),w(!0)}(0,t)},__source:{fileName:y,lineNumber:81,columnNumber:29}},u.a.createElement(s.a,{__source:{fileName:y,lineNumber:82,columnNumber:33}}))),u.a.createElement(i.a,{title:"删除",__source:{fileName:y,lineNumber:85,columnNumber:25}},u.a.createElement(a.a,{style:{marginTop:100},title:"你确定删除吗",onConfirm:function(){return function(e,t){r(t.scmId).then((function(e){0===e.code&&G(!H)})).catch((function(e){console.log(e)}))}(0,t)},okText:"确定",cancelText:"取消",__source:{fileName:y,lineNumber:86,columnNumber:29}},u.a.createElement("span",{className:"del",__source:{fileName:y,lineNumber:93,columnNumber:34}},u.a.createElement(m.a,{__source:{fileName:y,lineNumber:94,columnNumber:38}})))))}}];return u.a.createElement("div",{className:"envi home-limited mf",__source:{fileName:y,lineNumber:104,columnNumber:12}},u.a.createElement("div",{className:"envi-upper",__source:{fileName:y,lineNumber:105,columnNumber:9}},u.a.createElement(b.a,{firstItem:"环境配置",__source:{fileName:y,lineNumber:106,columnNumber:13}}),u.a.createElement(v.a,{onClick:function(){O(""),w(!0)},type:"primary",title:"添加配置",icon:u.a.createElement(d.a,{__source:{fileName:y,lineNumber:111,columnNumber:23}}),__source:{fileName:y,lineNumber:107,columnNumber:13}})),u.a.createElement("div",{className:"envi-content",__source:{fileName:y,lineNumber:114,columnNumber:9}},u.a.createElement(o.a,{columns:x,dataSource:L,rowKey:function(e){return e.scmId},pagination:!1,locale:{emptyText:u.a.createElement(p.a,{__source:{fileName:y,lineNumber:121,columnNumber:37}})},__source:{fileName:y,lineNumber:116,columnNumber:13}}),u.a.createElement(f.a,{visible:_,setVisible:w,enviData:L,updatePipelineScm:c,formValue:T,fresh:H,setFresh:G,__source:{fileName:y,lineNumber:124,columnNumber:13}})))};_(w,'useState{[visible,setVisible](false)}\nuseState{[fresh,setFresh](false)}\nuseState{[enviData,setEnviData]([])}\nuseState{[formValue,setFormValue]("")}\nuseEffect{}');var E,H,G=Object(c.b)("settingStore")(Object(c.c)(w));t.default=G,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(w,"Envi","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\setting\\container\\envi.js"),E.register(G,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\setting\\container\\envi.js")),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&H(e)}.call(this,n(17)(e))},351:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var c=a[u];if(!l(c))return!1;var s=e[c],m=t[c];if(!1===(o=n?n.call(r,s,m,c):void 0)||void 0===o&&s!==m)return!1}return!0}},356:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i=(n(391),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\btn\\btn.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,u,c=function(e){var t=e.icon,n=e.type,r=e.title,o=e.onClick,l=e.isMar;return a.a.createElement("div",{className:"mf-btn ".concat(n?"mf-btn-".concat(n):""," ").concat(l?"mf-btn-mar":""),onClick:o,__source:{fileName:i,lineNumber:8,columnNumber:13}},a.a.createElement("span",{className:"".concat(t?"mf-btn-icon":""),__source:{fileName:i,lineNumber:12,columnNumber:17}},t&&t),a.a.createElement("span",{__source:{fileName:i,lineNumber:13,columnNumber:17}},r))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"Btn","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\btn\\btn.js"),l.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\btn\\btn.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,n(17)(e))},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return v}));var r,o=n(0),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=o.createContext(null),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.createElement(i.Provider,{value:this.props.store},this.props.children)},t}(o.Component),u=n(351),c=n.n(u),s=n(156),m=n.n(s),d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var b=function(){return{}};function p(e,t){void 0===t&&(t={});var n=!!e,r=e||b;return function(a){var l=function(t){function l(e,n){var o=t.call(this,e,n)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var e=r(o.store.getState(),o.props);o.setState({subscribed:e})}},o.store=o.context,o.state={subscribed:r(o.store.getState(),e),store:o.store,props:e},o}return d(l,t),l.getDerivedStateFromProps=function(t,n){return e&&2===e.length&&t!==n.props?{subscribed:r(n.store.getState(),t),props:t}:{props:t}},l.prototype.componentDidMount=function(){this.trySubscribe()},l.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},l.prototype.shouldComponentUpdate=function(e,t){return!c()(this.props,e)||!c()(this.state.subscribed,t.subscribed)},l.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},l.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},l.prototype.render=function(){var e=f(f(f({},this.props),this.state.subscribed),{store:this.store});return o.createElement(a,f({},e,{ref:this.props.miniStoreForwardedRef}))},l.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(a)+")",l.contextType=i,l}(o.Component);if(t.forwardRef){var u=o.forwardRef((function(e,t){return o.createElement(l,f({},e,{miniStoreForwardedRef:t}))}));return m()(u,a)}return m()(l,a)}}var N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function v(e){var t=e,n=[];return{setState:function(e){t=N(N({},t),e);for(var r=0;r<n.length;r++)n[r]()},getState:function(){return t},subscribe:function(e){return n.push(e),function(){var t=n.indexOf(e);n.splice(t,1)}}}}},373:function(e,t,n){"use strict";function r(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return o(n.overflowY,t)||o(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function i(e,t,n,r,o,a,i,l){return a<e&&i>t||a>e&&i<t?0:a<=e&&l<=n||i>=t&&l>=n?a-e-r:i>t&&l<n||a<e&&l>n?i-t+o:0}var l=function(e,t){var n=window,o=t.scrollMode,l=t.block,u=t.inline,c=t.boundary,s=t.skipOverflowHiddenElements,m="function"==typeof c?c:function(e){return e!==c};if(!r(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,f=[],b=e;r(b)&&m(b);){if((b=b.parentElement)===d){f.push(b);break}null!=b&&b===document.body&&a(b)&&!a(document.documentElement)||null!=b&&a(b,s)&&f.push(b)}for(var p=n.visualViewport?n.visualViewport.width:innerWidth,N=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,h=e.getBoundingClientRect(),g=h.height,_=h.width,w=h.top,E=h.right,H=h.bottom,G=h.left,j="start"===l||"nearest"===l?w:"end"===l?H:w+g/2,L="center"===u?G+_/2:"end"===u?E:G,k=[],S=0;S<f.length;S++){var T=f[S],O=T.getBoundingClientRect(),x=O.height,I=O.width,D=O.top,M=O.right,C=O.bottom,A=O.left;if("if-needed"===o&&w>=0&&G>=0&&H<=N&&E<=p&&w>=D&&H<=C&&G>=A&&E<=M)return k;var F=getComputedStyle(T),V=parseInt(F.borderLeftWidth,10),P=parseInt(F.borderTopWidth,10),W=parseInt(F.borderRightWidth,10),R=parseInt(F.borderBottomWidth,10),B=0,q=0,U="offsetWidth"in T?T.offsetWidth-T.clientWidth-V-W:0,X="offsetHeight"in T?T.offsetHeight-T.clientHeight-P-R:0;if(d===T)B="start"===l?j:"end"===l?j-N:"nearest"===l?i(y,y+N,N,P,R,y+j,y+j+g,g):j-N/2,q="start"===u?L:"center"===u?L-p/2:"end"===u?L-p:i(v,v+p,p,V,W,v+L,v+L+_,_),B=Math.max(0,B+y),q=Math.max(0,q+v);else{B="start"===l?j-D-P:"end"===l?j-C+R+X:"nearest"===l?i(D,C,x,P,R+X,j,j+g,g):j-(D+x/2)+X/2,q="start"===u?L-A-V:"center"===u?L-(A+I/2)+U/2:"end"===u?L-M+W+U:i(A,M,I,V,W+U,L,L+_,_);var Y=T.scrollLeft,J=T.scrollTop;j+=J-(B=Math.max(0,Math.min(J+B,T.scrollHeight-x+X))),L+=Y-(q=Math.max(0,Math.min(Y+q,T.scrollWidth-I+U)))}k.push({el:T,top:B,left:q})}return k};function u(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(u(t)&&"function"==typeof t.behavior)return t.behavior(n?l(e,t):[]);if(n){var r=function(e){return!1===e?{block:"end",inline:"nearest"}:u(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var n="scrollBehavior"in document.body.style;e.forEach((function(e){var r=e.el,o=e.top,a=e.left;r.scroll&&n?r.scroll({top:o,left:a,behavior:t}):(r.scrollTop=o,r.scrollLeft=a)}))}(l(e,r),r.behavior)}}},376:function(e,t,n){"use strict";(function(e){n(27);var r,o=n(10),a=n(0),i=n.n(a),l=(n(377),n(675)),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,m=function(e){var t=e.firstItem,n=e.secondItem,r=e.goBack;return i.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:u,lineNumber:11,columnNumber:13}},i.a.createElement(o.b,{__source:{fileName:u,lineNumber:12,columnNumber:17}},r&&i.a.createElement(l.a,{onClick:r,style:{color:"#0063FF"},__source:{fileName:u,lineNumber:13,columnNumber:32}}),i.a.createElement("span",{className:n?"breadcrumbContent-span":"",__source:{fileName:u,lineNumber:14,columnNumber:21}},t),n&&i.a.createElement("span",{__source:{fileName:u,lineNumber:17,columnNumber:36}}," /   ",n)))},d=m;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(m,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js"),c.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\breadcrumb\\breadcrumb.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,n(17)(e))},377:function(e,t,n){},387:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i=n(514),l=(n(409),n(356)),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\modalTitle\\modalTitle.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,m=function(e){var t=e.setVisible,n=e.title;return a.a.createElement("div",{className:"modalTitle",__source:{fileName:u,lineNumber:12,columnNumber:9}},a.a.createElement("div",{className:"modalTitle-title",__source:{fileName:u,lineNumber:13,columnNumber:13}},a.a.createElement("span",{__source:{fileName:u,lineNumber:14,columnNumber:17}},n)),a.a.createElement("div",{className:"modalTitle-icon",__source:{fileName:u,lineNumber:16,columnNumber:13}},a.a.createElement(l.a,{title:a.a.createElement(i.a,{__source:{fileName:u,lineNumber:18,columnNumber:28}}),type:"text",onClick:function(){return t(!1)},__source:{fileName:u,lineNumber:17,columnNumber:17}})))},d=m;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(m,"ModalTitle","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\modalTitle\\modalTitle.js"),c.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\modalTitle\\modalTitle.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,n(17)(e))},390:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,u,c=function(e){var t=e.title;return a.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:i,lineNumber:7,columnNumber:13}},a.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:i,lineNumber:8,columnNumber:17}},a.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:i,lineNumber:9,columnNumber:21}})),a.a.createElement("div",{__source:{fileName:i,lineNumber:11,columnNumber:17}},t&&t))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"EmptyText","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js"),l.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\common\\emptyText\\emptyText.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,n(17)(e))},391:function(e,t,n){},409:function(e,t,n){},607:function(e,t,n){"use strict";(function(e){var r,o=n(0),a=n.n(o),i="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\gui\\components\\title\\subIcon.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,u,c=function(e){var t=e.type,n=function(e,t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"subicon-icon",style:{paddingRight:5},__source:{fileName:i,lineNumber:10,columnNumber:13}},a.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:i,lineNumber:11,columnNumber:17}},a.a.createElement("use",{xlinkHref:"#icon-".concat(e),__source:{fileName:i,lineNumber:12,columnNumber:21}}))),a.a.createElement("span",{className:"subicon-title",__source:{fileName:i,lineNumber:15,columnNumber:13}},t))};return a.a.createElement(a.a.Fragment,null,function(e){switch(e){case 1:return n("git","通用git");case 2:return n("gitee","Gitee");case 3:return n("github","Github");case 4:return n("gitlab","Gitlab");case 5:return n("-_ssh","svn");case 11:return n("ceshi","maven单元测试");case 21:return n("quanxian","maven");case 22:return n("nodejs","node");case 31:return n("xuniji","虚拟机");case 32:return n("docker","docker");case 41:return n("ceshi","sonarQuebe");case 51:return n("quanxian","nexus");case 52:return n("quanxian","SSH")}}(t))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"SubIcon","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\gui\\components\\title\\subIcon.js"),l.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\gui\\components\\title\\subIcon.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,n(17)(e))},927:function(e,t,n){"use strict";(function(e){n(129);var r,o=n(114),a=(n(24),n(7)),i=(n(88),n(26)),l=(n(257),n(195)),u=(n(52),n(6)),c=n(0),s=n.n(c),m=n(387),d=n(157),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\setting\\components\\enviModal.js";function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=[{scmId:"1",scmType:1},{scmId:"5",scmType:5},{scmId:"22",scmType:22},{scmId:"21",scmType:21}],y=function(e){var t=e.visible,n=e.setVisible,r=e.enviData,p=e.updatePipelineScm,N=e.formValue,y=e.fresh,h=e.setFresh,g=b(u.a.useForm(),1)[0],_=b(Object(c.useState)(1),2),w=_[0],E=_[1],H=b(Object(c.useState)(0),2),G=H[0],j=H[1];Object(c.useEffect)((function(){j(Object(d.a)())}),[G]),window.onresize=function(){j(Object(d.a)())},Object(c.useEffect)((function(){t&&(N?g.setFieldsValue(N):g.resetFields())}),[t]);var L=function(e){switch(e){case 1:return"Git";case 5:return"SVN";case 21:return"maven";case 22:return"node"}},k=function(e){return r.some((function(t){return t.scmType===e}))};return s.a.createElement(o.a,{visible:t,onCancel:function(){return n(!1)},closable:!1,okText:"确认",cancelText:"取消",style:{height:G,top:60},className:"mf",onOk:function(){g.validateFields().then((function(e){g.resetFields(),function(e){var t={scmId:N&&N.scmId,scmType:e.scmType,scmName:e.scmName,scmAddress:e.scmAddress};p(t).then((function(e){0===e.code&&(l.b.success({content:"保存成功",className:"message"}),h(!y))})).catch((function(e){console.log(e)})),n(!1)}(e)}))},__source:{fileName:f,lineNumber:86,columnNumber:9}},s.a.createElement(m.a,{setVisible:n,title:""===N?"添加环境配置":"修改环境配置",__source:{fileName:f,lineNumber:103,columnNumber:13}}),s.a.createElement("div",{style:{maxHeight:"calc(100% - 120px)",overflow:"auto"},__source:{fileName:f,lineNumber:107,columnNumber:13}},s.a.createElement(u.a,{form:g,layout:"vertical",name:"userForm",autoComplete:"off",__source:{fileName:f,lineNumber:108,columnNumber:17}},s.a.createElement(u.a.Item,{name:"scmType",label:"环境配置类型",rules:[{required:!0,message:"请选择环境配置类型"}],__source:{fileName:f,lineNumber:114,columnNumber:21}},s.a.createElement(i.a,{onChange:function(e){E(e)},__source:{fileName:f,lineNumber:117,columnNumber:25}},v.map((function(e){return s.a.createElement(i.a.Option,{value:e.scmType,key:e.scmType,disabled:k(e.scmType),__source:{fileName:f,lineNumber:120,columnNumber:44}},L(e.scmType))})))),s.a.createElement(u.a.Item,{label:"名称",name:"scmName",rules:[{required:!0,message:"请输入".concat(L(w),"名称")}],__source:{fileName:f,lineNumber:127,columnNumber:21}},s.a.createElement(a.a,{__source:{fileName:f,lineNumber:130,columnNumber:25}})),s.a.createElement(u.a.Item,{label:"地址",name:"scmAddress",rules:[{required:!0,message:"请输入".concat(L(w),"地址")}],__source:{fileName:f,lineNumber:132,columnNumber:21}},s.a.createElement(a.a,{__source:{fileName:f,lineNumber:135,columnNumber:25}})))))};N(y,"useForm{[form]}\nuseState{[scmType,setScmType](1)}\nuseState{[height,setHeight](0)}\nuseEffect{}\nuseEffect{}");var h,g,_=y;t.a=_,(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(v,"lis","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\setting\\components\\enviModal.js"),h.register(y,"EnviModal","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\setting\\components\\enviModal.js"),h.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\setting\\components\\enviModal.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,n(17)(e))},928:function(e,t,n){}}]);