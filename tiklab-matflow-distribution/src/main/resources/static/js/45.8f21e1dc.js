(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{228:function(e,t,o){"use strict";o.r(t),function(e){var r,n=o(0),a=o.n(n),l=(o(778),o(23)),i=o(603),u="D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineCollect.js";function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,m,f=function(e){return a.a.createElement("div",{className:"pipelineCollect",__source:{fileName:u,lineNumber:9,columnNumber:9}},a.a.createElement("div",{className:"pipelineCollect-title",__source:{fileName:u,lineNumber:10,columnNumber:13}},"我的收藏"),a.a.createElement(i.a,c({},e,{type:2,__source:{fileName:u,lineNumber:11,columnNumber:13}})))},d=Object(l.h)(f);t.default=d,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(f,"PipelineCollect","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineCollect.js"),s.register(d,"default","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineCollect.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,o(22)(e))},308:function(e,t){e.exports=function(e,t,o,r){var n=o?o.call(r,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<a.length;u++){var c=a[u];if(!i(c))return!1;var s=e[c],m=t[c];if(!1===(n=o?o.call(r,s,m,c):void 0)||void 0===n&&s!==m)return!1}return!0}},326:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return p})),o.d(t,"c",(function(){return w}));var r,n=o(0),a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),l=n.createContext(null),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return n.createElement(l.Provider,{value:this.props.store},this.props.children)},t}(n.Component),u=o(308),c=o.n(u),s=o(130),m=o.n(s),f=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),d=function(){return(d=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var b=function(){return{}};function p(e,t){void 0===t&&(t={});var o=!!e,r=e||b;return function(a){var i=function(t){function i(e,o){var n=t.call(this,e,o)||this;return n.unsubscribe=null,n.handleChange=function(){if(n.unsubscribe){var e=r(n.store.getState(),n.props);n.setState({subscribed:e})}},n.store=n.context,n.state={subscribed:r(n.store.getState(),e),store:n.store,props:e},n}return f(i,t),i.getDerivedStateFromProps=function(t,o){return e&&2===e.length&&t!==o.props?{subscribed:r(o.store.getState(),t),props:t}:{props:t}},i.prototype.componentDidMount=function(){this.trySubscribe()},i.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},i.prototype.shouldComponentUpdate=function(e,t){return!c()(this.props,e)||!c()(this.state.subscribed,t.subscribed)},i.prototype.trySubscribe=function(){o&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},i.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},i.prototype.render=function(){var e=d(d(d({},this.props),this.state.subscribed),{store:this.store});return n.createElement(a,d({},e,{ref:this.props.miniStoreForwardedRef}))},i.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(a)+")",i.contextType=l,i}(n.Component);if(t.forwardRef){var u=n.forwardRef((function(e,t){return n.createElement(i,d({},e,{miniStoreForwardedRef:t}))}));return m()(u,a)}return m()(i,a)}}var N=function(){return(N=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function w(e){var t=e,o=[];return{setState:function(e){t=N(N({},t),e);for(var r=0;r<o.length;r++)o[r]()},getState:function(){return t},subscribe:function(e){return o.push(e),function(){var t=o.indexOf(e);o.splice(t,1)}}}}},493:function(e,t,o){"use strict";(function(e){o(28);var r,n=o(15),a=o(0),l=o.n(a),i="D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\common\\tables\\tables.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,c,s=function(e){var t=e.columns,o=e.dataSource,r=e.rowKey;return l.a.createElement(n.a,{rowKey:r,columns:t,dataSource:o,pagination:{hideOnSinglePage:!0,pageSize:10},locale:{emptyText:l.a.createElement(a.Fragment,{__source:{fileName:i,lineNumber:13,columnNumber:17}},l.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:i,lineNumber:14,columnNumber:21}},l.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:i,lineNumber:15,columnNumber:25}})),l.a.createElement("div",{__source:{fileName:i,lineNumber:17,columnNumber:21}},"没有数据"))},__source:{fileName:i,lineNumber:6,columnNumber:12}})},m=s;t.a=m,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(s,"Tables","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\common\\tables\\tables.js"),u.register(m,"default","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\common\\tables\\tables.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,o(22)(e))},603:function(e,t,o){"use strict";(function(e){o(160);var r,n=o(84),a=(o(105),o(64)),l=o(0),i=o.n(l),u=o(2),c=o(726),s=o(728),m=o(729),f=o(12),d=o(604),b=o(493),p="D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineTable.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(e){var t=e.structureStore,o=e.type,r=e.pipelineStore,f=t.pipelineStartStructure,N=t.killInstance,w=r.findAllPipelineStatus,y=r.findAllFollow,h=r.pipelineList,_=r.updateFollow,v=r.fresh,g=r.setFresh,F=Object(u.e)().userId;Object(l.useEffect)((function(){1===o?w(F):y(F)}),[v,o]);var H=function(e,t){"1"===e.data?a.b.info({content:"".concat(t,"成功"),duration:.5,className:"message"}):a.b.info({content:"".concat(t,"失败"),duration:.5,className:"message"})},k=[{title:"收藏",dataIndex:"pipelineCollect",key:"pipelineCollect",render:function(e,t){return i.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return function(e){var t={pipeline:{pipelineId:e.pipelineId},userId:F};_(t).then((function(t){0===e.pipelineCollect?H(t,"收藏"):H(t,"取消"),g(!v)}))}(t)},__source:{fileName:p,lineNumber:81,columnNumber:21}},0===t.pipelineCollect?i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:p,lineNumber:84,columnNumber:33}},i.a.createElement("use",{xlinkHref:"#icon-xingxing-kong",__source:{fileName:p,lineNumber:85,columnNumber:37}})):i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:p,lineNumber:88,columnNumber:33}},i.a.createElement("use",{xlinkHref:"#icon-xingxing1",__source:{fileName:p,lineNumber:89,columnNumber:37}})))}},{title:"最近构建状态",dataIndex:"structureStatus",key:"structureStatus",render:function(e){switch(e){case 30:return i.a.createElement(n.a,{title:"成功",placement:"rightTop",className:"all-icon",__source:{fileName:p,lineNumber:103,columnNumber:33}},i.a.createElement(c.a,{style:{fontSize:25,color:"#1890ff"},__source:{fileName:p,lineNumber:104,columnNumber:37}}));case 1:return i.a.createElement(n.a,{title:"失败",placement:"rightTop",className:"all-icon",__source:{fileName:p,lineNumber:107,columnNumber:32}},i.a.createElement(s.a,{style:{fontSize:25,color:"#ff0000"},__source:{fileName:p,lineNumber:108,columnNumber:37}}));case 0:return i.a.createElement(n.a,{title:"待构建",placement:"rightTop",className:"all-icon",__source:{fileName:p,lineNumber:111,columnNumber:33}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:p,lineNumber:112,columnNumber:37}},i.a.createElement("use",{xlinkHref:"#icon-dengdai1",__source:{fileName:p,lineNumber:113,columnNumber:41}})));case 20:return i.a.createElement(n.a,{title:"停止",placement:"rightTop",className:"all-icon",__source:{fileName:p,lineNumber:117,columnNumber:33}},i.a.createElement(m.a,{style:{fontSize:25},__source:{fileName:p,lineNumber:118,columnNumber:37}}))}}},{title:"任务名",dataIndex:"pipelineName",key:"pipelineName",render:function(t,o){return i.a.createElement("span",{onClick:function(){return function(t){e.history.push("/index/task/".concat(t,"/work"))}(t)},style:{color:"#1890ff",cursor:"pointer"},__source:{fileName:p,lineNumber:129,columnNumber:21}},t)}},{title:"上次构建时间",dataIndex:"lastStructureTime",key:"lastStructureTime"},{title:"上次成功时间",dataIndex:"lastSuccessTime",key:"lastSuccessTime"},{title:"操作",dataIndex:"action",key:"action",render:function(e,t){return i.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return function(e){var t={userId:F,pipelineId:e.pipelineId};0===e.pipelineState?f(t).then((function(e){1===e.data&&setTimeout((function(){return g(!v)}),1e3)})):N(t).then((function(){g(!v)}))}(t)},__source:{fileName:p,lineNumber:153,columnNumber:21}},0===t.pipelineState?i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:p,lineNumber:156,columnNumber:33}},i.a.createElement("use",{xlinkHref:"#icon-yunhang",__source:{fileName:p,lineNumber:157,columnNumber:37}})):i.a.createElement(d.a,{__source:{fileName:p,lineNumber:160,columnNumber:33}}))}}];return i.a.createElement(b.a,{columns:k,dataSource:h,rowKey:function(e){return e.pipelineId},__source:{fileName:p,lineNumber:168,columnNumber:13}})};N(w,"useEffect{}");var y,h,_=Object(f.b)("structureStore","pipelineStore")(Object(f.c)(w));t.a=_,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(w,"PipelineTable","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineTable.js"),y.register(_,"default","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\pipelineTable.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,o(22)(e))},604:function(e,t,o){"use strict";(function(e){var r,n=o(0),a=o.n(n);o(605);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,u=function(e){return a.a.createElement("span",{className:"loading",__source:{fileName:"D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\running.js",lineNumber:5,columnNumber:12}}," || ")},c=u;t.a=c,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(u,"Running","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\running.js"),l.register(c,"default","D:\\idea\\pipeline\\tiklab-pipeline-ui\\src\\modules\\pipeline\\pipeline\\components\\running.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,o(22)(e))},605:function(e,t,o){},778:function(e,t,o){}}]);