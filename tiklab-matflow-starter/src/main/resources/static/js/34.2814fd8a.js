(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{118:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return p})),t.d(n,"c",(function(){return d}));var r,i=t(0),a=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),u=i.createContext(null),l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a(n,e),n.prototype.render=function(){return i.createElement(u.Provider,{value:this.props.store},this.props.children)},n}(i.Component),c=t(133),o=t.n(c),m=t(221),s=t.n(m),b=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),N=function(){return(N=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};var f=function(){return{}};function p(e,n){void 0===n&&(n={});var t=!!e,r=e||f;return function(a){var l=function(n){function l(e,t){var i=n.call(this,e,t)||this;return i.unsubscribe=null,i.handleChange=function(){if(i.unsubscribe){var e=r(i.store.getState(),i.props);i.setState({subscribed:e})}},i.store=i.context,i.state={subscribed:r(i.store.getState(),e),store:i.store,props:e},i}return b(l,n),l.getDerivedStateFromProps=function(n,t){return e&&2===e.length&&n!==t.props?{subscribed:r(t.store.getState(),n),props:n}:{props:n}},l.prototype.componentDidMount=function(){this.trySubscribe()},l.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},l.prototype.shouldComponentUpdate=function(e,n){return!o()(this.props,e)||!o()(this.state.subscribed,n.subscribed)},l.prototype.trySubscribe=function(){t&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},l.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},l.prototype.render=function(){var e=N(N(N({},this.props),this.state.subscribed),{store:this.store});return i.createElement(a,N({},e,{ref:this.props.miniStoreForwardedRef}))},l.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(a)+")",l.contextType=u,l}(i.Component);if(n.forwardRef){var c=i.forwardRef((function(e,n){return i.createElement(l,N({},e,{miniStoreForwardedRef:n}))}));return s()(c,a)}return s()(l,a)}}var _=function(){return(_=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function d(e){var n=e,t=[];return{setState:function(e){n=_(_({},n),e);for(var r=0;r<t.length;r++)t[r]()},getState:function(){return n},subscribe:function(e){return t.push(e),function(){var n=t.indexOf(e);t.splice(n,1)}}}}},133:function(e,n){e.exports=function(e,n,t,r){var i=t?t.call(r,e,n):void 0;if(void 0!==i)return!!i;if(e===n)return!0;if("object"!=typeof e||!e||"object"!=typeof n||!n)return!1;var a=Object.keys(e),u=Object.keys(n);if(a.length!==u.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var o=a[c];if(!l(o))return!1;var m=e[o],s=n[o];if(!1===(i=t?t.call(r,m,s,o):void 0)||void 0===i&&m!==s)return!1}return!0}},409:function(e,n,t){"use strict";t(39);var r=t(15),i=t(0),a=t.n(i),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\btn\\Btn.js";n.a=function(e){var n=e.icon,t=e.type,i=e.title,l=e.onClick,c=e.isMar;return a.a.createElement("div",{className:"mf-btn ".concat(t?"mf-btn-".concat(t):""," ").concat(c?"mf-btn-mar":""),onClick:l,__source:{fileName:u,lineNumber:18,columnNumber:9}},a.a.createElement(r.b,{__source:{fileName:u,lineNumber:19,columnNumber:13}},n&&a.a.createElement("span",{className:"mf-btn-icon",__source:{fileName:u,lineNumber:21,columnNumber:30}},n),i))}},415:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\emptyText\\EmptyText.js";n.a=function(e){var n=e.title;return i.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:a,lineNumber:13,columnNumber:13}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:a,lineNumber:14,columnNumber:17}},i.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:a,lineNumber:15,columnNumber:21}})),i.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:a,lineNumber:17,columnNumber:17}},n||"暂无数据"))}},433:function(e,n,t){"use strict";t(39);var r=t(15),i=t(0),a=t.n(i),u=t(300),l="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\breadcrumb\\Breadcrumb.js";n.a=function(e){var n=e.firstItem,t=e.secondItem,i=e.goBack;return a.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:l,lineNumber:16,columnNumber:13}},a.a.createElement(r.b,{__source:{fileName:l,lineNumber:17,columnNumber:17}},i&&a.a.createElement(u.a,{onClick:i,style:{color:"#0063FF"},__source:{fileName:l,lineNumber:18,columnNumber:32}}),a.a.createElement("span",{className:t?"breadcrumbContent-span":"",__source:{fileName:l,lineNumber:19,columnNumber:21}},n),t&&a.a.createElement("span",{__source:{fileName:l,lineNumber:22,columnNumber:36}}," /   ",t)))}},527:function(e,n,t){"use strict";var r=t(0),i=t.n(r);n.a=function(e){var n=e.text,t=e.colors;return i.a.createElement("span",{className:"mf-listname-icon ".concat(t?"mf-icon-".concat(t):"mf-icon-1"),__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\list\\ListIcon.js",lineNumber:13,columnNumber:13}},n&&n.substring(0,1).toUpperCase())}},528:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\tabs\\Tabs.js";n.a=function(e){var n=e.tabLis,t=e.type,r=e.onClick;return i.a.createElement("div",{className:"mf-tabs",__source:{fileName:a,lineNumber:15,columnNumber:9}},n.map((function(e){return i.a.createElement("div",{key:e.id,className:"mf-tab ".concat(t===e.id?"mf-active-tab":null),onClick:function(){return r(e)},__source:{fileName:a,lineNumber:18,columnNumber:21}},e.title)})))}},795:function(e,n,t){"use strict";t.r(n);t(48);var r=t(22),i=t(0),a=t.n(i),u=t(281),l=t(299),c=t(42),o=t(31),m=(t(43),t(25)),s=(t(287),t(172)),b=(t(108),t(58)),N=(t(82),t(26)),f=(t(39),t(15)),p=(t(70),t(21)),_=t(831),d=t(832),h=t(233),E=t(833),v=t(643),y=t(415),g=t(527),k=t.p+"images/pip_success.svg",w=t.p+"images/pip_error.svg",x=t.p+"images/pip_fog.svg",j=t.p+"images/pip_halt.svg",O="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\pipeline\\components\\PipelineTable.js",C=Object(o.b)("historyStore")(Object(o.c)((function(e){var n=e.historyStore,t=e.pipelineStore,r=n.execStart,i=n.execStop,u=t.pipelineList,l=t.updateFollow,c=t.fresh,o=t.setFresh,C=function(e,n){0===e.code?p.b.info("".concat(n,"成功"),.5):p.b.info(e.msg,.5)},S=function(e,n,t){return a.a.createElement("div",{__source:{fileName:O,lineNumber:90,columnNumber:9}},a.a.createElement("div",{__source:{fileName:O,lineNumber:91,columnNumber:13}},"执行人：",t),a.a.createElement("div",{__source:{fileName:O,lineNumber:92,columnNumber:13}},"执行状态：",e),a.a.createElement("div",{__source:{fileName:O,lineNumber:93,columnNumber:13}},"执行时间：",n))},T=[{title:"流水线名称",dataIndex:"name",key:"name",width:"35%",ellipsis:!0,render:function(n,t){return a.a.createElement("span",{className:"pipelineTable-name",onClick:function(){return function(n,t){return e.history.push("/index/pipeline/".concat(t.id,"/survey"))}(0,t)},__source:{fileName:O,lineNumber:105,columnNumber:25}},a.a.createElement(g.a,{text:n,colors:t.color,__source:{fileName:O,lineNumber:106,columnNumber:29}}),a.a.createElement("span",{__source:{fileName:O,lineNumber:107,columnNumber:29}},n))}},{title:"最近构建信息",dataIndex:"lastBuildTime",key:"lastBuildTime",width:"25%",ellipsis:!0,render:function(e,n){switch(n.buildStatus){case"success":return a.a.createElement(N.a,{title:S("成功",e,n.execUser.name),__source:{fileName:O,lineNumber:120,columnNumber:33}},a.a.createElement(f.b,{__source:{fileName:O,lineNumber:121,columnNumber:37}},a.a.createElement("img",{src:k,alt:"log",className:"imgs",__source:{fileName:O,lineNumber:122,columnNumber:41}}),e));case"error":return a.a.createElement(N.a,{title:S("失败",e,n.execUser.name),__source:{fileName:O,lineNumber:127,columnNumber:33}},a.a.createElement(f.b,{__source:{fileName:O,lineNumber:128,columnNumber:37}},a.a.createElement("img",{src:w,alt:"log",className:"imgs",__source:{fileName:O,lineNumber:129,columnNumber:41}}),e));case"run":return a.a.createElement(N.a,{title:S("运行中",e,n.execUser.name),__source:{fileName:O,lineNumber:134,columnNumber:32}},a.a.createElement(f.b,{__source:{fileName:O,lineNumber:135,columnNumber:37}},a.a.createElement("img",{src:x,alt:"log",className:"imgs",__source:{fileName:O,lineNumber:136,columnNumber:41}}),e));case"wait":return a.a.createElement(N.a,{title:S("待构建","待构建","无"),__source:{fileName:O,lineNumber:141,columnNumber:33}},a.a.createElement(f.b,{__source:{fileName:O,lineNumber:142,columnNumber:37}},a.a.createElement("img",{src:x,alt:"log",className:"imgs",__source:{fileName:O,lineNumber:143,columnNumber:41}}),"待构建"));case"halt":return a.a.createElement(N.a,{title:S("终止",e,n.execUser.name),__source:{fileName:O,lineNumber:148,columnNumber:34}},a.a.createElement(f.b,{__source:{fileName:O,lineNumber:149,columnNumber:37}},a.a.createElement("img",{src:j,alt:"log",className:"imgs",__source:{fileName:O,lineNumber:150,columnNumber:41}}),e))}}},{title:"负责人",dataIndex:["user","nickname"],key:"user",width:"15%",ellipsis:!0,render:function(e,n){return a.a.createElement(f.b,{__source:{fileName:O,lineNumber:164,columnNumber:25}},a.a.createElement(b.a,{userInfo:n.user,__source:{fileName:O,lineNumber:165,columnNumber:29}}),e)}},{title:"可见范围",dataIndex:"power",key:"power",width:"15%",ellipsis:!0,render:function(e,n){switch(e){case 1:return a.a.createElement(f.b,{__source:{fileName:O,lineNumber:179,columnNumber:33}},a.a.createElement(_.a,{__source:{fileName:O,lineNumber:180,columnNumber:37}}),"全局");case 2:return a.a.createElement(f.b,{__source:{fileName:O,lineNumber:184,columnNumber:33}},a.a.createElement(d.a,{__source:{fileName:O,lineNumber:185,columnNumber:37}}),"私有")}}},{title:"操作",dataIndex:"action",key:"action",width:"10%",ellipsis:!0,render:function(n,t){return a.a.createElement(f.b,{__source:{fileName:O,lineNumber:199,columnNumber:21}},a.a.createElement(N.a,{title:"运行",__source:{fileName:O,lineNumber:200,columnNumber:25}},a.a.createElement("span",{className:"pipelineTable-state",onClick:function(){return function(e){2===e.state?i(e.id).then((function(){o(!c)})):r(e.id).then((function(){o(!c)}))}(t)},__source:{fileName:O,lineNumber:201,columnNumber:29}},2===t.state?a.a.createElement(s.a,{indicator:a.a.createElement(h.a,{className:"actions-se",spin:!0,__source:{fileName:O,lineNumber:204,columnNumber:54}}),__source:{fileName:O,lineNumber:204,columnNumber:37}}):a.a.createElement(E.a,{className:"actions-se",__source:{fileName:O,lineNumber:206,columnNumber:37}}))),a.a.createElement(N.a,{title:"历史",__source:{fileName:O,lineNumber:210,columnNumber:25}},a.a.createElement("span",{className:"pipelineTable-history",onClick:function(){return function(n){return e.history.push("/index/pipeline/".concat(n.id,"/structure"))}(t)},__source:{fileName:O,lineNumber:211,columnNumber:29}},a.a.createElement(v.a,{className:"actions-se",__source:{fileName:O,lineNumber:212,columnNumber:33}}))),a.a.createElement(N.a,{title:"收藏",__source:{fileName:O,lineNumber:215,columnNumber:25}},a.a.createElement("span",{className:"pipelineTable-collect",onClick:function(){return function(e){l({id:e.id}).then((function(n){0===e.collect?C(n,"收藏"):C(n,"取消"),o(!c)}))}(t)},__source:{fileName:O,lineNumber:216,columnNumber:29}},0===t.collect?a.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:O,lineNumber:219,columnNumber:37}},a.a.createElement("use",{xlinkHref:"#icon-xingxing-kong",__source:{fileName:O,lineNumber:220,columnNumber:41}})):a.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:O,lineNumber:223,columnNumber:37}},a.a.createElement("use",{xlinkHref:"#icon-xingxing1",__source:{fileName:O,lineNumber:224,columnNumber:41}})))))}}];return a.a.createElement("div",{className:"pipelineTable",__source:{fileName:O,lineNumber:235,columnNumber:13}},a.a.createElement(m.a,{bordered:!1,columns:T,dataSource:u,rowKey:function(e){return e.id},pagination:!1,locale:{emptyText:a.a.createElement(y.a,{title:"暂无流水线",__source:{fileName:O,lineNumber:242,columnNumber:41}})},__source:{fileName:O,lineNumber:236,columnNumber:17}}))}))),S=t(433),T=t(409),P=t(528),I="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\pipeline\\container\\Pipeline.js";function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}n.default=Object(c.g)(Object(o.b)("pipelineStore")(Object(o.c)((function(e){var n=e.pipelineStore,t=n.fresh,c=n.findAllPipelineStatus,o=n.findAllFollow,m=n.findLike,s=n.listType,b=n.setListType;Object(i.useEffect)((function(){1===s?c():o()}),[t,s]);return a.a.createElement("div",{className:"pipeline",__source:{fileName:I,lineNumber:69,columnNumber:9}},a.a.createElement("div",{className:"pipeline-content mf-home-limited mf",__source:{fileName:I,lineNumber:70,columnNumber:13}},a.a.createElement("div",{className:"pipeline-top pipeline-flex",__source:{fileName:I,lineNumber:71,columnNumber:17}},a.a.createElement(S.a,{firstItem:"流水线",__source:{fileName:I,lineNumber:72,columnNumber:21}}),a.a.createElement(T.a,{onClick:function(){e.history.push("/index/pipeline/new")},type:"primary",title:"新建流水线",icon:a.a.createElement(u.a,{__source:{fileName:I,lineNumber:73,columnNumber:83}}),__source:{fileName:I,lineNumber:73,columnNumber:21}})),a.a.createElement("div",{className:"pipeline-type",__source:{fileName:I,lineNumber:75,columnNumber:17}},a.a.createElement(P.a,{type:s,tabLis:[{id:1,title:"所有流水线"},{id:2,title:"我收藏的"}],onClick:function(e){b(e.id)},__source:{fileName:I,lineNumber:76,columnNumber:21}}),a.a.createElement("div",{className:"pipeline-type-input",__source:{fileName:I,lineNumber:77,columnNumber:21}},a.a.createElement(r.a,{allowClear:!0,placeholder:"流水线名称",onChange:function(e){m(e.target.value)},prefix:a.a.createElement(l.a,{__source:{fileName:I,lineNumber:82,columnNumber:37}}),style:{width:200},__source:{fileName:I,lineNumber:78,columnNumber:25}}))),a.a.createElement(C,D({},e,{pipelineStore:n,__source:{fileName:I,lineNumber:87,columnNumber:17}}))))}))))}}]);