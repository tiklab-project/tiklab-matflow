(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{231:function(e,t,r){"use strict";r.r(t),function(e){r(391);var a,n=r(388),u=r(0),o=r.n(u),l=r(2),c=r(512),i=r(728),m=r(729),s=r(787),d=r(790),f=r(349),b=r(708),N=(r(794),r(12)),p="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\container\\structure.js";function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,u=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(u.push(a.value),!t||u.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e){var t=e.structureStore,r=e.structureListStore,a=e.matFlowStore,N=t.findExecState,v=t.findStructureState,y=t.findAll,g=t.findPageHistory,E=t.matFlowStartStructure,h=t.leftPageList,L=t.isData,w=t.findMatFlowUser,H=t.setIsData,S=t.execState,j=r.state,G=r.setState,k=r.enforcer,I=r.setEnforcer,D=r.mode,x=r.setMode,C=r.setPageCurrent,F=r.freshen,O=r.setFreshen,M=r.setDrop,A=r.drop,P=a.matFlowId,T=a.matFlowName,R=Object(l.e)().userId,z=_(Object(u.useState)(!1),2),V=z[0],U=z[1];Object(u.useEffect)((function(){P&&(C(1),x(0),G(0),I(null),w(P))}),[P]);var W=null;Object(u.useEffect)((function(){P&&N(P).then((function(e){1===e.data&&(W=setInterval((function(){return v(P).then((function(e){0===e.code&&B(e.data)}))}),1e3),y(P)),$()}))}),[P,F]);var $=function(){g({matflowId:P,pageParam:{pageSize:10,currentPage:1},state:j,userId:k,type:D}).then((function(e){0===e.code&&e.data&&0===e.data.dataList.length&&(0!==j||null!==k||0!==D?(M(!A),J()):H(""!==S))}))},J=function(){g({matflowId:P,pageParam:{pageSize:10,currentPage:1},state:0,userId:null,type:0}).then((function(e){0===e.code&&0===e.data.dataList.length&&H(!1)}))},B=function(e){null!==e&&1!==e.runStatus&&30!==e.runStatus||(O(!F),clearInterval(W))},Z=function(e){switch(e){case 0:return o.a.createElement(n.a,{indicator:o.a.createElement(c.a,{style:{fontSize:24},spin:!0,__source:{fileName:p,lineNumber:139,columnNumber:42}}),__source:{fileName:p,lineNumber:139,columnNumber:25}});case 1:return o.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:p,lineNumber:142,columnNumber:25}},o.a.createElement("use",{xlinkHref:"#icon-chenggong-",__source:{fileName:p,lineNumber:143,columnNumber:29}}));case 2:return o.a.createElement(i.a,{style:{fontSize:17,color:"red"},__source:{fileName:p,lineNumber:147,columnNumber:25}});case 3:return o.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:p,lineNumber:150,columnNumber:25}},o.a.createElement("use",{xlinkHref:"#icon-yunhang",__source:{fileName:p,lineNumber:151,columnNumber:29}}));case 4:return o.a.createElement(m.a,{style:{fontSize:17},__source:{fileName:p,lineNumber:155,columnNumber:25}});case 5:return o.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:p,lineNumber:158,columnNumber:25}},o.a.createElement("use",{xlinkHref:"#icon-dengdai1",__source:{fileName:p,lineNumber:159,columnNumber:29}}))}},Q=null;return Object(u.useEffect)((function(){return function(){clearTimeout(Q),clearInterval(W)}}),[P,F]),o.a.createElement("div",{className:"structure",__source:{fileName:p,lineNumber:191,columnNumber:9}},L?o.a.createElement("div",{className:"structure-content",__source:{fileName:p,lineNumber:195,columnNumber:21}},o.a.createElement(s.a,{matFlowId:P,status:Z,__source:{fileName:p,lineNumber:196,columnNumber:25}}),o.a.createElement("div",{className:"structure-content-right",__source:{fileName:p,lineNumber:200,columnNumber:25}},o.a.createElement(f.a,{firstItem:T,secondItem:"历史",__source:{fileName:p,lineNumber:201,columnNumber:29}}),""!==S||h&&h.length>0?o.a.createElement(d.a,{freshen:F,setFreshen:O,status:Z,setPageCurrent:C,matFlowId:P,__source:{fileName:p,lineNumber:204,columnNumber:37}}):o.a.createElement(b.a,{__source:{fileName:p,lineNumber:212,columnNumber:37}}))):o.a.createElement(b.a,{runImmediately:function(){var e={userId:R,matFlowId:P};U(!0),Q=setTimeout((function(){return O(!F)}),1e3),E(e).then((function(e){0===e.code&&1===e.data&&(Q=setTimeout((function(){return U(!1)}),500))})).catch((function(e){}))},runImState:V,matFlowName:T,__source:{fileName:p,lineNumber:217,columnNumber:21}}))};y(g,"useState{[runImState,setRunImState](false)}\nuseEffect{}\nuseEffect{}\nuseEffect{}");var E,h,L=Object(N.b)("structureStore","structureListStore","matFlowStore")(Object(N.c)(g));t.default=L,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(g,"Structure","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\container\\structure.js"),E.register(L,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\container\\structure.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}.call(this,r(22)(e))},349:function(e,t,r){"use strict";(function(e){var a,n=r(0),u=r.n(n),o=(r(351),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(e){var t=e.config,r=e.firstItem,a=e.secondItem;return u.a.createElement("div",{className:t?"breadcrumb-topOver":"breadcrumb",__source:{fileName:o,lineNumber:9,columnNumber:13}},u.a.createElement("span",{className:a?"breadcrumb-span":"",__source:{fileName:o,lineNumber:10,columnNumber:17}},r),a?u.a.createElement("span",{__source:{fileName:o,lineNumber:11,columnNumber:31}},"  >  ",a):null)},m=i;t.a=m,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),l.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(22)(e))},351:function(e,t,r){},469:function(e,t,r){"use strict";(function(e){var a,n=r(0),u=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,l,c=function(e){var t=e.type;return u.a.createElement(n.Fragment,{__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\configName.js",lineNumber:6,columnNumber:9}},function(){switch(t){case 1:return"通用Git";case 2:return"Gitee";case 3:return"Github";case 4:return"Gitlab";case 5:return"SVN";case 11:return"单元测试";case 21:return"maven";case 22:return"node";case 31:return"虚拟机";case 32:return"docker"}}())},i=c;t.a=i,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(c,"ConfigName","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\configName.js"),o.register(i,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\configName.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(22)(e))},708:function(e,t,r){"use strict";(function(e){r(66);var a,n=r(33),u=(r(27),r(9)),o=(r(391),r(388)),l=r(0),c=r.n(l),i=r(512),m=r(349),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureEmpty.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,f,b=function(e){var t=e.runImmediately,r=e.runImState,a=e.matFlowName;return c.a.createElement("div",{className:"structure-content-empty",__source:{fileName:s,lineNumber:9,columnNumber:9}},t?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{firstItem:a,secondItem:"历史",__source:{fileName:s,lineNumber:13,columnNumber:25}}),c.a.createElement("div",{className:"empty-group",__source:{fileName:s,lineNumber:14,columnNumber:25}},c.a.createElement(n.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",description:"当前流水线尚未运行",__source:{fileName:s,lineNumber:15,columnNumber:29}},r?c.a.createElement(o.a,{indicator:c.a.createElement(i.a,{style:{fontSize:25},spin:!0,__source:{fileName:s,lineNumber:21,columnNumber:58}}),__source:{fileName:s,lineNumber:21,columnNumber:41}}):c.a.createElement(u.a,{type:"primary",onClick:function(){return t()},__source:{fileName:s,lineNumber:23,columnNumber:41}},"立即运行")))):c.a.createElement("div",{className:"empty-group",__source:{fileName:s,lineNumber:29,columnNumber:21}},c.a.createElement(n.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",description:"没有查询到数据",__source:{fileName:s,lineNumber:30,columnNumber:25}})))},N=b;t.a=N,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(b,"StructureEmpty","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureEmpty.js"),d.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureEmpty.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,r(22)(e))},787:function(e,t,r){"use strict";(function(e){r(721);var a,n=r(301),u=(r(541),r(540)),o=r(0),l=r.n(o),c=r(788),i=r(789),m=r(708),s=r(12),d=r(716),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeft.js";function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var N,p,_=function(e){var t=e.status,r=e.matFlowId,a=e.structureStore,o=e.structureListStore,s=a.findHistoryLog,N=a.leftPageList,p=a.setModeData,_=a.setIndex,v=a.index,y=a.page,g=a.findPageHistory,E=a.matFlowUserList,h=a.execState,L=o.pageCurrent,w=o.setPageCurrent,H=o.state,S=o.setState,j=o.enforcer,G=o.setEnforcer,k=o.mode,I=o.setMode,D=o.drop,x=function(e){if(N)switch(e.runStatus){case 1:return t(2);case 30:return t(1);default:return t(4)}},C=function(e,t){w(t),g(e).then((function(){0!==v&&_(h?0:1)}))};return l.a.createElement("div",{className:"structure-content-left",__source:{fileName:f,lineNumber:89,columnNumber:9}},l.a.createElement(i.a,{state:H,setState:S,enforcer:j,setEnforcer:G,mode:k,setMode:I,matFlowUserList:E,change:C,drop:D,matFlowId:r,__source:{fileName:f,lineNumber:90,columnNumber:13}}),l.a.createElement("div",{className:"structure-content-left-history",__source:{fileName:f,lineNumber:102,columnNumber:13}},l.a.createElement("div",{className:"history-content",__source:{fileName:f,lineNumber:103,columnNumber:17}},h||N&&N.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"history-content-list",__source:{fileName:f,lineNumber:107,columnNumber:33}},l.a.createElement(c.a,{execState:h,status:t,index:v,setIndex:_,__source:{fileName:f,lineNumber:108,columnNumber:37}}),function(e){return e.map((function(e,t){return l.a.createElement("div",{onClick:function(){return function(e,t){_(t+1),s(e.historyId).then((function(){p(e)}))}(e,t)},className:"history-content-list-ul ".concat(v===t+1?"history-content-list_active":""),key:t,__source:{fileName:f,lineNumber:66,columnNumber:21}},l.a.createElement("div",{className:"list-title",__source:{fileName:f,lineNumber:70,columnNumber:25}}," # ",e.findNumber),l.a.createElement("div",{className:"list-group",__source:{fileName:f,lineNumber:71,columnNumber:25}},l.a.createElement("div",{className:"list-group-item",__source:{fileName:f,lineNumber:72,columnNumber:29}},l.a.createElement("div",{className:"list-state",__source:{fileName:f,lineNumber:73,columnNumber:33}},"状态 : ",x(e)),l.a.createElement("div",{className:"list-one",__source:{fileName:f,lineNumber:76,columnNumber:33}},"执行人 : ",e.user&&e.user.name)),l.a.createElement("div",{className:"list-time",__source:{fileName:f,lineNumber:80,columnNumber:29}},"执行时间 : ",e.createTime)))}))}(N)),l.a.createElement("div",{className:"history-content-page",__source:{fileName:f,lineNumber:116,columnNumber:33}},l.a.createElement(n.b,{locale:d.a,__source:{fileName:f,lineNumber:117,columnNumber:37}},l.a.createElement(u.a,b({},y,{simple:!0,current:L,showQuickJumper:!0,showSizeChanger:!1,onChange:function(e){C({matflowId:r,pageParam:{pageSize:10,currentPage:e},state:H,name:j,type:k},e)},__source:{fileName:f,lineNumber:118,columnNumber:41}}))))):l.a.createElement(m.a,{__source:{fileName:f,lineNumber:130,columnNumber:29}}))))},v=Object(s.b)("structureStore","structureListStore")(Object(s.c)(_));t.a=v,(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(N.register(_,"StructureLeft","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeft.js"),N.register(v,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeft.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(22)(e))},788:function(e,t,r){"use strict";(function(e){var a,n=r(0),u=r.n(n),o="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftExecute.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,i=function(e){var t=e.execState,r=e.status,a=e.setIndex,n=e.index,l=function(){if(t)switch(t.runStatus){case 1:return r(2);case 30:return r(1);default:return r(5)}};return function(e){return""===e?null:u.a.createElement("div",{onClick:function(){return a(0)},className:"history-content-list-ul\n                         ".concat(0===n?"history-content-list_active":null),__source:{fileName:o,lineNumber:24,columnNumber:21}},u.a.createElement("div",{className:"list-title",__source:{fileName:o,lineNumber:28,columnNumber:25}}," 运行中 "),u.a.createElement("div",{className:"list-group",__source:{fileName:o,lineNumber:29,columnNumber:25}},u.a.createElement("div",{className:"list-group-item",__source:{fileName:o,lineNumber:30,columnNumber:29}},u.a.createElement("div",{className:"list-state",__source:{fileName:o,lineNumber:31,columnNumber:33}},"状态 : ",l()),u.a.createElement("div",{className:"list-one",__source:{fileName:o,lineNumber:32,columnNumber:33}},"执行人 : ",e&&e.execName)),u.a.createElement("div",{className:"list-time",__source:{fileName:o,lineNumber:36,columnNumber:29}},"执行方式 : ",e&&e.createTime)))}(t)},m=i;t.a=m,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(i,"StructureLeftExecute","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftExecute.js"),l.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftExecute.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(22)(e))},789:function(e,t,r){"use strict";(function(e){r(42);var a,n=r(13),u=r(0),o=r.n(u),l="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js";function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,u=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(u.push(a.value),!t||u.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},s=n.a.Option,d=function(e){var t=e.state,r=e.setState,a=e.enforcer,i=e.setEnforcer,m=e.mode,d=e.setMode,f=e.matFlowUserList,b=e.change,N=e.drop,p=e.matFlowId,_=c(Object(u.useState)(""),2),v=_[0],y=_[1],g=c(Object(u.useState)(""),2),E=g[0],h=g[1],L=c(Object(u.useState)(""),2),w=L[0],H=L[1];Object(u.useEffect)((function(){y("状态"),h("执行人"),H("执行方式")}),[p,N]);return o.a.createElement("div",{className:"structure-content-left-dropdown",__source:{fileName:l,lineNumber:106,columnNumber:9}},o.a.createElement("div",{className:"dropdown",__source:{fileName:l,lineNumber:107,columnNumber:13}},o.a.createElement(n.a,{style:{width:135,marginRight:10},value:v,onChange:function(e,t){return function(e,t){y(e),r(parseInt(t.key));var n={matflowId:p,state:parseInt(t.key),userId:a,type:m,pageParam:{pageSize:10,currentPage:1}};b(n,1)}(e,t)},__source:{fileName:l,lineNumber:108,columnNumber:17}},[{type:0,tpl:"全部"},{type:1,tpl:"失败"},{type:20,tpl:"停止"},{type:30,tpl:"成功"}].map((function(e){return o.a.createElement(s,{key:e.type,value:e.tpl,__source:{fileName:l,lineNumber:114,columnNumber:36}},e.tpl)}))),o.a.createElement(n.a,{style:{width:140,marginRight:10},value:E,onChange:function(e,r){return function(e,r){"全部"===r.key&&(r.key=null),h(e),i(r.key);var a={matflowId:p,state:t,userId:r.key,type:m,pageParam:{pageSize:10,currentPage:1}};b(a,1)}(e,r)},__source:{fileName:l,lineNumber:118,columnNumber:17}},o.a.createElement(s,{key:"全部",value:"全部",__source:{fileName:l,lineNumber:122,columnNumber:21}},"全部"),f&&f.map((function(e){return o.a.createElement(s,{key:e.user.id,value:e.user.name,__source:{fileName:l,lineNumber:125,columnNumber:36}},e.user&&e.user.name)}))),o.a.createElement(n.a,{style:{width:135,marginRight:10},value:w,onChange:function(e,r){return function(e,r){H(e),d(parseInt(r.key));var n={matflowId:p,state:t,userId:a,type:r.key,pageParam:{pageSize:10,currentPage:1}};b(n,1)}(e,r)},__source:{fileName:l,lineNumber:129,columnNumber:17}},[{type:0,tpl:"全部"},{type:1,tpl:"手动"},{type:2,tpl:"自动"}].map((function(e){return o.a.createElement(s,{key:e.type,value:e.tpl,__source:{fileName:l,lineNumber:135,columnNumber:36}}," ",e.tpl," ")})))))};m(d,'useState{[statusValue,setStatusValue]("")}\nuseState{[userValue,setUserValue]("")}\nuseState{[modeValue,setModeValue]("")}\nuseEffect{}');var f,b,N=d;t.a=N,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(s,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js"),f.register(d,"StructureLeftDropdown","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js"),f.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(22)(e))},790:function(e,t,r){"use strict";(function(e){var a,n=r(0),u=r.n(n),o=r(791),l=r(792),c=r(793),i=r(12),m="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRight.js";function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,u=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(u.push(a.value),!t||u.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=e.structureStore,r=e.status,a=e.freshen,i=e.setFreshen,d=e.setPageCurrent,f=e.matFlowId,b=t.deleteHistoryLog,N=t.killInstance,p=t.rightFlowData,_=t.modeData,v=t.index,y=t.setIndex,g=t.rightExecuteData,E=t.execState,h=s(Object(n.useState)(!1),2),L=h[0],w=h[1],H=s(Object(n.useState)(""),2),S=H[0],j=H[1],G=function(e){switch(e){case 1:return"手动";default:return"自动"}};return u.a.createElement("div",{className:"structure-content-right-mid",__source:{fileName:m,lineNumber:25,columnNumber:9}},0===v?u.a.createElement(l.a,{freshen:a,setFreshen:i,rightExecuteData:g,status:r,index:v,execState:E,setDrawerContent:j,setVisible:w,killInstance:N,runWay:G,setPageCurrent:d,matFlowId:f,__source:{fileName:m,lineNumber:28,columnNumber:21}}):u.a.createElement(c.a,{freshen:a,setFreshen:i,rightFlowData:p,status:r,modeData:_,index:v,setIndex:y,setVisible:w,setDrawerContent:j,deleteHistoryLog:b,runWay:G,setPageCurrent:d,__source:{fileName:m,lineNumber:43,columnNumber:21}}),u.a.createElement(o.a,{visible:L,setVisible:w,drawerContent:S,__source:{fileName:m,lineNumber:58,columnNumber:13}}))};f(b,'useState{[visible,setVisible](false)}\nuseState{[drawerContent,setDrawerContent]("")}');var N,p,_=Object(i.b)("structureStore")(Object(i.c)(b));t.a=_,(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(N.register(b,"StructureRight","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRight.js"),N.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRight.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(22)(e))},791:function(e,t,r){"use strict";(function(e){r(573);var a,n=r(560),u=(r(27),r(9)),o=r(0),l=r.n(o),c=r(502),i=r(469),m="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightLogDrawer.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,d,f=function(e){var t=e.visible,r=e.setVisible,a=e.drawerContent;return l.a.createElement(n.a,{placement:"right",visible:t,onClose:function(){return r(!1)},closable:!1,contentWrapperStyle:{width:600,marginTop:55},bodyStyle:{padding:0},__source:{fileName:m,lineNumber:11,columnNumber:9}},l.a.createElement("div",{className:"drawers",__source:{fileName:m,lineNumber:19,columnNumber:13}},l.a.createElement("div",{className:"drawers-head",__source:{fileName:m,lineNumber:20,columnNumber:17}},l.a.createElement("div",{__source:{fileName:m,lineNumber:21,columnNumber:21}},a&&a.taskAlias," -- ",l.a.createElement(i.a,{type:a.taskType,__source:{fileName:m,lineNumber:24,columnNumber:25}})),l.a.createElement("div",{__source:{fileName:m,lineNumber:26,columnNumber:21}},l.a.createElement(u.a,{type:"text",onClick:function(){return r(!1)},__source:{fileName:m,lineNumber:27,columnNumber:25}},l.a.createElement(c.a,{__source:{fileName:m,lineNumber:28,columnNumber:29}})))),l.a.createElement("div",{className:"drawers-body",__source:{fileName:m,lineNumber:32,columnNumber:17}},l.a.createElement("div",{className:"log",style:{padding:20},__source:{fileName:m,lineNumber:33,columnNumber:21}},l.a.createElement("div",{className:"log-content",style:{whiteSpace:"pre-wrap"},__source:{fileName:m,lineNumber:34,columnNumber:25}},a&&a.runLog)))))},b=f;t.a=b,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(f,"StructureRightLogDrawer","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightLogDrawer.js"),s.register(b,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightLogDrawer.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(22)(e))},792:function(e,t,r){"use strict";(function(e){r(27);var a,n=r(9),u=r(0),o=r.n(u),l=r(2),c=r(469),i="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightExecute.js";function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,u=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(u.push(a.value),!t||u.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var t=e.status,r=e.execState,a=e.killInstance,s=e.rightExecuteData,d=e.runWay,f=e.freshen,b=e.setFreshen,N=e.setPageCurrent,p=e.matFlowId,_=m(Object(u.useState)(!0),2),v=_[0],y=_[1],g=function(e){if(r){var t=r.sort;if(t>r.status&&e===t)return"item-100";if(e<t)return"item-10";if(e>t)return"item-all"}},E=function(){y(!1)};return o.a.createElement("div",{className:"mid_group",__source:{fileName:i,lineNumber:116,columnNumber:9}},o.a.createElement("div",{className:"mid_group_top",__source:{fileName:i,lineNumber:117,columnNumber:13}},o.a.createElement("div",{className:"mid_group_top_tel",__source:{fileName:i,lineNumber:118,columnNumber:17}},o.a.createElement("span",{className:"tel_time",__source:{fileName:i,lineNumber:119,columnNumber:21}},"运行中"),o.a.createElement("span",{className:"tel_time",__source:{fileName:i,lineNumber:120,columnNumber:21}},"执行时长：",r&&r.allTime," "),o.a.createElement("span",{className:"tel_way",__source:{fileName:i,lineNumber:121,columnNumber:21}},"触发方式：",d(r&&r.runWay)," ")),o.a.createElement("div",{className:"mid_group_top_del",__source:{fileName:i,lineNumber:123,columnNumber:17}},o.a.createElement(n.a,{onClick:function(){return e={userId:Object(l.e)().userId,matFlowId:p},void a(e).then((function(e){N(1),b(!f)})).catch((function(e){}));var e},__source:{fileName:i,lineNumber:124,columnNumber:21}}," 停止 "))),o.a.createElement("div",{className:"mid_group_center",__source:{fileName:i,lineNumber:127,columnNumber:13}}," ",function(e){return e&&e.map((function(e,a){return o.a.createElement("div",{className:"mid_group_center-cart ".concat(g(a+1)),key:a,__source:{fileName:i,lineNumber:91,columnNumber:17}},o.a.createElement("div",{className:"cart-top",__source:{fileName:i,lineNumber:92,columnNumber:21}},o.a.createElement("span",{className:"cart-top-taskAlias",__source:{fileName:i,lineNumber:93,columnNumber:25}},e.taskAlias),o.a.createElement("span",{__source:{fileName:i,lineNumber:94,columnNumber:25}}," -- "),o.a.createElement("span",{className:"cart-top-configName",__source:{fileName:i,lineNumber:95,columnNumber:25}},o.a.createElement(c.a,{type:e.taskType,__source:{fileName:i,lineNumber:96,columnNumber:29}}))),o.a.createElement("div",{className:"cart-center",__source:{fileName:i,lineNumber:99,columnNumber:21}},o.a.createElement("div",{className:"cart-center-item",__source:{fileName:i,lineNumber:100,columnNumber:25}},o.a.createElement("div",{__source:{fileName:i,lineNumber:101,columnNumber:29}},"状态：",function(e){if(r){var a=r.sort,n=r.status;if(a>n&&e===a)return t(0);if(e<a)return t(1);if(a<n)return t(2);if(e>a)return t(3)}}(a+1)),o.a.createElement("div",{__source:{fileName:i,lineNumber:102,columnNumber:29}},"时间：",function(e){if(r)switch(e){case 0:return r.oneTime;case 1:return r.twoTime;case 2:return r.threeTime;case 3:return r.fourTime}}(a)))),o.a.createElement("div",{className:"cart-bottom",__source:{fileName:i,lineNumber:105,columnNumber:21}},o.a.createElement("span",{className:"cart-bottom-span",__source:{fileName:i,lineNumber:106,columnNumber:25}},"日志")))}))}(s)," "),function(){if(r){var e=document.getElementById("outLog");return e&&v&&(e.scrollTop=e.scrollHeight),o.a.createElement("div",{className:"structure-content-bottom",onWheel:E,__source:{fileName:i,lineNumber:78,columnNumber:21}},o.a.createElement("div",{className:"structure-content-bottom-title",__source:{fileName:i,lineNumber:79,columnNumber:25}},"输出"),o.a.createElement("div",{className:"structure-content-bottom-outLog",id:"outLog",__source:{fileName:i,lineNumber:80,columnNumber:25}},r.runLog),o.a.createElement("div",{className:"structure-content-bottom-runLog",__source:{fileName:i,lineNumber:83,columnNumber:25}},t(0)))}}())};d(f,"useState{[isActiveSlide,setIsActiveSlide](true)}");var b,N,p=f;t.a=p,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"StructureRightExecute","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightExecute.js"),b.register(p,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightExecute.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}).call(this,r(22)(e))},793:function(e,t,r){"use strict";(function(e){r(472);var a,n=r(470),u=(r(27),r(9)),o=r(0),l=r.n(o),c=r(469),i="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightItem.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,s,d=function(e){var t=e.rightFlowData,r=e.status,a=e.deleteHistoryLog,o=e.modeData,m=e.index,s=e.setIndex,d=e.setVisible,f=e.setDrawerContent,b=e.runWay,N=e.freshen,p=e.setFreshen,_=e.setPageCurrent;return l.a.createElement("div",{className:"mid_group",__source:{fileName:i,lineNumber:68,columnNumber:9}},l.a.createElement("div",{className:"mid_group_top",__source:{fileName:i,lineNumber:69,columnNumber:13}},l.a.createElement("div",{className:"mid_group_top_tel",__source:{fileName:i,lineNumber:70,columnNumber:17}},l.a.createElement("span",{className:"tel_title ",__source:{fileName:i,lineNumber:71,columnNumber:21}},"# ",o&&o.findNumber),l.a.createElement("span",{className:"tel_time",__source:{fileName:i,lineNumber:72,columnNumber:21}},"执行时长：",o&&o.execTime),l.a.createElement("span",{className:"tel_way",__source:{fileName:i,lineNumber:73,columnNumber:21}},"触发方式：",b(o&&o.runWay))),l.a.createElement("div",{className:"mid_group_top_del",__source:{fileName:i,lineNumber:75,columnNumber:17}},l.a.createElement(n.a,{onConfirm:function(){return function(e){a(e&&e.historyId).then((function(){p(!N),_(1),0!==m&&s(0)})).catch((function(e){}))}(o)},title:"您确认删除吗?",okText:"确认",cancelText:"取消",placement:"bottom",__source:{fileName:i,lineNumber:76,columnNumber:21}},l.a.createElement(u.a,{__source:{fileName:i,lineNumber:83,columnNumber:25}},"删除")))),l.a.createElement("div",{className:"mid_group_center",__source:{fileName:i,lineNumber:87,columnNumber:13}}," ",function(e){return e&&e.map((function(e,t){return l.a.createElement("div",{className:"mid_group_center-cart ".concat((a=e.runState,"item-".concat(a))),key:t,__source:{fileName:i,lineNumber:43,columnNumber:17}},l.a.createElement("div",{className:"cart-top",__source:{fileName:i,lineNumber:44,columnNumber:21}},l.a.createElement("span",{className:"cart-top-taskAlias",__source:{fileName:i,lineNumber:45,columnNumber:25}},e.taskAlias),l.a.createElement("span",{__source:{fileName:i,lineNumber:46,columnNumber:25}}," -- "),l.a.createElement("span",{className:"cart-top-configName",__source:{fileName:i,lineNumber:47,columnNumber:25}},l.a.createElement(c.a,{type:e.taskType,__source:{fileName:i,lineNumber:48,columnNumber:29}}))),l.a.createElement("div",{className:"cart-center",__source:{fileName:i,lineNumber:51,columnNumber:21}},l.a.createElement("div",{className:"cart-center-item",__source:{fileName:i,lineNumber:52,columnNumber:25}},l.a.createElement("div",{__source:{fileName:i,lineNumber:53,columnNumber:29}},"状态：",function(e){switch(e.runState){case 1:return r(2);case 10:return r(1);default:return r(4)}}(e)),l.a.createElement("div",{__source:{fileName:i,lineNumber:54,columnNumber:29}},"时间：",e.execTime," "))),l.a.createElement("div",{className:"cart-bottom",__source:{fileName:i,lineNumber:57,columnNumber:21}},l.a.createElement("span",{className:"cart-bottom-span",onClick:function(){return function(e){f(e),d(!0)}(e)},__source:{fileName:i,lineNumber:58,columnNumber:25}},"日志")));var a}))}(t)," "),l.a.createElement("div",{className:"structure-content-bottom",__source:{fileName:i,lineNumber:88,columnNumber:13}},l.a.createElement("div",{className:"structure-content-bottom-title",__source:{fileName:i,lineNumber:89,columnNumber:17}},"输出"),l.a.createElement("div",{className:"structure-content-bottom-outLog",__source:{fileName:i,lineNumber:90,columnNumber:17}},o&&o.runLog)))},f=d;t.a=f,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(d,"StructureRightItem","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightItem.js"),m.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightItem.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(22)(e))},794:function(e,t,r){}}]);