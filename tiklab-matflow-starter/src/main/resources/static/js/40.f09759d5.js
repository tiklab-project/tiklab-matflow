(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{264:function(e,t,r){"use strict";r.r(t),function(e){r(491);var a,n=r(488),o=r(0),u=r.n(o),l=r(2),i=r(508),c=r(648),s=r(649),m=r(857),d=r(650),f=r(856),b=r(698),p=r(702),N=r(385),_=r(619),y=(r(706),r(16)),v="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\container\\structure.js";function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},E=function(e){var t=e.structureStore,r=e.structureListStore,a=e.pipelineStore,y=t.findExecState,L=t.findStructureState,h=t.findAllPipelineConfig,E=t.findPageHistory,H=t.pipelineStartStructure,G=t.leftPageList,j=t.isData,w=t.findPipelineUser,S=t.setIsData,k=t.execState,D=r.state,I=r.setState,x=r.enforcer,C=r.setEnforcer,T=r.mode,M=r.setMode,O=r.setPageCurrent,P=r.freshen,A=r.setFreshen,R=r.setDrop,z=r.drop,F=a.pipelineId,V=a.pipeline,U=Object(l.e)().userId,W=g(Object(o.useState)(!1),2),$=W[0],J=W[1];Object(o.useEffect)((function(){F&&(O(1),M(0),I(0),C(null),w(F))}),[F]);var B=null;Object(o.useEffect)((function(){F&&y(F).then((function(e){1===e.data&&(B=setInterval((function(){return L(F).then((function(e){0===e.code&&q(e.data)}))}),1e3),h(F)),Z()}))}),[F,P]);var Z=function(){E({pipelineId:F,pageParam:{pageSize:10,currentPage:1},state:D,userId:x,type:T}).then((function(e){0===e.code&&e.data&&0===e.data.dataList.length&&(0!==D||null!==x||0!==T?(R(!z),Q()):S(""!==k))}))},Q=function(){E({pipelineId:F,pageParam:{pageSize:10,currentPage:1},state:0,userId:null,type:0}).then((function(e){0===e.code&&0===e.data.dataList.length&&S(!1)}))},q=function(e){null!==e&&1!==e.runStatus&&30!==e.runStatus||(A(!P),clearInterval(B))},K=function(e){switch(e){case 0:return u.a.createElement(n.a,{indicator:u.a.createElement(i.a,{style:{fontSize:24},spin:!0,__source:{fileName:v,lineNumber:144,columnNumber:42}}),__source:{fileName:v,lineNumber:144,columnNumber:25}});case 1:return u.a.createElement(c.a,{style:{fontSize:17,color:"#1890ff"},__source:{fileName:v,lineNumber:147,columnNumber:25}});case 2:return u.a.createElement(s.a,{style:{fontSize:17,color:"red"},__source:{fileName:v,lineNumber:151,columnNumber:25}});case 3:return u.a.createElement(m.a,{style:{fontSize:17},__source:{fileName:v,lineNumber:154,columnNumber:25}});case 4:return u.a.createElement(d.a,{style:{fontSize:17},__source:{fileName:v,lineNumber:157,columnNumber:25}});case 5:return u.a.createElement(f.a,{style:{fontSize:17,color:"#6698ff"},__source:{fileName:v,lineNumber:160,columnNumber:25}})}},X=null;return Object(o.useEffect)((function(){return function(){clearTimeout(X),clearInterval(B)}}),[F,P]),u.a.createElement("div",{className:"structure",__source:{fileName:v,lineNumber:192,columnNumber:9}},u.a.createElement("div",{className:"structure-content",__source:{fileName:v,lineNumber:193,columnNumber:13}},u.a.createElement(b.a,{pipelineId:F,status:K,__source:{fileName:v,lineNumber:194,columnNumber:17}}),u.a.createElement("div",{className:"structure-content-right",__source:{fileName:v,lineNumber:198,columnNumber:17}},u.a.createElement(N.a,{firstItem:V.pipelineName,secondItem:"历史",__source:{fileName:v,lineNumber:199,columnNumber:21}}),""!==k||G&&G.length>0?u.a.createElement(p.a,{freshen:P,setFreshen:A,status:K,setPageCurrent:O,pipelineId:F,__source:{fileName:v,lineNumber:202,columnNumber:29}}):u.a.createElement(_.a,{runImmediately:function(){var e={userId:U,pipelineId:F};J(!0),X=setTimeout((function(){return A(!P)}),1e3),H(e).then((function(e){0===e.code&&1===e.data&&(X=setTimeout((function(){return J(!1)}),500))})).catch((function(e){console.log(e)}))},isData:j,runImState:$,__source:{fileName:v,lineNumber:210,columnNumber:29}}))))};h(E,"useState{[runImState,setRunImState](false)}\nuseEffect{}\nuseEffect{}\nuseEffect{}");var H,G,j=Object(y.b)("structureStore","structureListStore","pipelineStore")(Object(y.c)(E));t.default=j,(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(E,"Structure","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\container\\structure.js"),H.register(j,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\container\\structure.js")),(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&G(e)}.call(this,r(22)(e))},383:function(e,t,r){"use strict";(function(e){r(30);var a,n=r(11),o=r(0),u=r.n(o),l=r(493),i=(r(388),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,m=function(e){var t=e.setVisible,r=e.title;return u.a.createElement("div",{className:"modalTitle",__source:{fileName:i,lineNumber:11,columnNumber:9}},u.a.createElement("div",{className:"modalTitle-title",__source:{fileName:i,lineNumber:12,columnNumber:13}},u.a.createElement("span",{__source:{fileName:i,lineNumber:13,columnNumber:17}},r)),u.a.createElement("div",{className:"modalTitle-icon",__source:{fileName:i,lineNumber:15,columnNumber:13}},u.a.createElement(n.a,{type:"text",onClick:function(){return t(!1)},__source:{fileName:i,lineNumber:16,columnNumber:17}},u.a.createElement(l.a,{__source:{fileName:i,lineNumber:17,columnNumber:21}}))))},d=m;t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(m,"ModalTitle","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js"),c.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\modalTitle\\modalTitle.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,r(22)(e))},385:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),u=(r(386),"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js");(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.firstItem,r=e.secondItem;return o.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:u,lineNumber:9,columnNumber:13}},o.a.createElement("span",{className:r?"breadcrumbContent-span":"",__source:{fileName:u,lineNumber:10,columnNumber:17}},t),r?o.a.createElement("span",{__source:{fileName:u,lineNumber:13,columnNumber:31}},"  >  ",r):null)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),l.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(22)(e))},386:function(e,t,r){},388:function(e,t,r){},537:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,l,i=function(e){var t=e.type;return o.a.createElement(o.a.Fragment,null,function(){switch(t){case 1:return"通用Git";case 2:return"Gitee";case 3:return"Github";case 4:return"Gitlab";case 5:return"SVN";case 11:return"单元测试";case 21:return"maven";case 22:return"node";case 31:return"虚拟机";case 32:return"docker"}}())},c=i;t.a=c,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(i,"ConfigName","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\configName.js"),u.register(c,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\configName.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(22)(e))},569:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\titleType.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.type,r=function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"desc-icon",__source:{fileName:u,lineNumber:24,columnNumber:21}},o.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:u,lineNumber:25,columnNumber:25}},o.a.createElement("use",{xlinkHref:"#icon-".concat(e),__source:{fileName:u,lineNumber:26,columnNumber:29}}))),o.a.createElement("span",{className:"desc-title",__source:{fileName:u,lineNumber:29,columnNumber:13}},t))};return function(e){switch(parseInt(e)){case 11:return r("ceshi1","测试");case 21:case 22:return r("goujiangongju","构建");case 31:case 32:return r("bushubanben","部署");default:return r("ceshi1","源码管理")}}(t)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"TitleType","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\titleType.js"),l.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\configName\\titleType.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(22)(e))},618:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftList.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.title,r=e.index,a=e.onClick,n=e.name,l=e.state,i=e.type,c=e.createTime;return o.a.createElement("div",{onClick:a,className:"history-content-list-ul ".concat(r===i?"history-content-list_active":""),__source:{fileName:u,lineNumber:8,columnNumber:9}},o.a.createElement("div",{className:"list-title",__source:{fileName:u,lineNumber:11,columnNumber:13}},t),o.a.createElement("div",{className:"list-group",__source:{fileName:u,lineNumber:14,columnNumber:13}},o.a.createElement("div",{className:"list-group-item",__source:{fileName:u,lineNumber:15,columnNumber:17}},o.a.createElement("div",{className:"list-state",__source:{fileName:u,lineNumber:16,columnNumber:21}},"状态 : ",l),o.a.createElement("div",{className:"list-one",__source:{fileName:u,lineNumber:19,columnNumber:21}},"执行人 : ",n)),o.a.createElement("div",{className:"list-time",__source:{fileName:u,lineNumber:23,columnNumber:17}},"执行时间 : ",c)))},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"StructureLeftList","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftList.js"),l.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftList.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(22)(e))},619:function(e,t,r){"use strict";(function(e){r(30);var a,n=r(11),o=(r(491),r(488)),u=(r(119),r(74)),l=r(0),i=r.n(l),c=r(508),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureEmpty.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,d,f=function(e){var t=e.runImmediately,r=e.runImState,a=e.isData;return i.a.createElement("div",{className:"structure-content-empty",__source:{fileName:s,lineNumber:8,columnNumber:9}},a?i.a.createElement("div",{className:"empty-group",__source:{fileName:s,lineNumber:11,columnNumber:21}},i.a.createElement(u.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",description:"没有查询到数据",__source:{fileName:s,lineNumber:12,columnNumber:25}})):i.a.createElement("div",{className:"empty-group",__source:{fileName:s,lineNumber:18,columnNumber:21}},i.a.createElement(u.a,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",description:"当前流水线尚未运行",__source:{fileName:s,lineNumber:19,columnNumber:25}},r?i.a.createElement(o.a,{indicator:i.a.createElement(c.a,{style:{fontSize:25},spin:!0,__source:{fileName:s,lineNumber:25,columnNumber:54}}),__source:{fileName:s,lineNumber:25,columnNumber:37}}):i.a.createElement(n.a,{type:"primary",onClick:function(){return t()},__source:{fileName:s,lineNumber:27,columnNumber:37}},"立即运行"))))},b=f;t.a=b,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(f,"StructureEmpty","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureEmpty.js"),m.register(b,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureEmpty.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(22)(e))},620:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),u=r(537),l="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightCart.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(e){var t=e.item,r=e.state,a=e.log,n=e.time,i=e.style;return o.a.createElement("div",{className:"mid_group_center-cart ".concat(i),__source:{fileName:l,lineNumber:28,columnNumber:9}},o.a.createElement("div",{className:"cart-top",__source:{fileName:l,lineNumber:29,columnNumber:13}},o.a.createElement("span",{className:"cart-top-taskAlias",__source:{fileName:l,lineNumber:30,columnNumber:17}},function(e){switch(e){case 1:case 2:case 3:case 4:case 5:return"源码管理";case 11:return"测试";case 21:case 22:return"构建";case 31:case 32:return"部署"}}(t.taskType)),o.a.createElement("span",{__source:{fileName:l,lineNumber:33,columnNumber:17}}," -- "),o.a.createElement("span",{className:"cart-top-configName",__source:{fileName:l,lineNumber:34,columnNumber:17}},o.a.createElement(u.a,{type:t.taskType,__source:{fileName:l,lineNumber:35,columnNumber:21}}))),o.a.createElement("div",{className:"cart-center",__source:{fileName:l,lineNumber:38,columnNumber:13}},o.a.createElement("div",{className:"cart-center-item",__source:{fileName:l,lineNumber:39,columnNumber:17}},o.a.createElement("div",{__source:{fileName:l,lineNumber:40,columnNumber:21}},"状态：",r),o.a.createElement("div",{__source:{fileName:l,lineNumber:41,columnNumber:21}},"时间：",n," "))),o.a.createElement("div",{className:"cart-bottom",__source:{fileName:l,lineNumber:44,columnNumber:13}},o.a.createElement("span",{className:"cart-bottom-span",onClick:function(){return a(t)},__source:{fileName:l,lineNumber:45,columnNumber:17}},"日志")))},m=s;t.a=m,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"StructureRightCart","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightCart.js"),i.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightCart.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(22)(e))},621:function(e,t,r){"use strict";(function(e){r(30);var a,n=r(11),o=r(0),u=r.n(o),l="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightCue.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(e){var t=e.way,r=e.time,a=e.title,o=e.action,i=e.actionTitle;return u.a.createElement("div",{className:"mid_group_top",__source:{fileName:l,lineNumber:16,columnNumber:9}},u.a.createElement("div",{className:"mid_group_top_tel",__source:{fileName:l,lineNumber:17,columnNumber:13}},u.a.createElement("span",{className:"tel_title",__source:{fileName:l,lineNumber:18,columnNumber:17}},a),u.a.createElement("span",{className:"tel_time",__source:{fileName:l,lineNumber:19,columnNumber:17}},"执行时长：",r," "),u.a.createElement("span",{className:"tel_way",__source:{fileName:l,lineNumber:20,columnNumber:17}},"触发方式：",function(e){switch(e){case 1:return"手动";default:return"自动"}}(t)," ")),u.a.createElement("div",{className:"mid_group_top_del",__source:{fileName:l,lineNumber:22,columnNumber:13}},u.a.createElement(n.a,{onClick:function(){return o()},__source:{fileName:l,lineNumber:23,columnNumber:17}},i)))},m=s;t.a=m,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"StructureRightCue","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightCue.js"),i.register(m,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightCue.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(22)(e))},698:function(e,t,r){"use strict";(function(e){r(813);var a,n=r(338),o=(r(547),r(543)),u=r(0),l=r.n(u),i=r(699),c=r(700),s=r(619),m=r(16),d=r(789),f=r(618),b="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeft.js";function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var N,_,y=function(e){var t=e.status,r=e.pipelineId,a=e.structureStore,u=e.structureListStore,m=a.findHistoryLog,N=a.leftPageList,_=a.setModeData,y=a.setIndex,v=a.index,g=a.page,L=a.findPageHistory,h=a.pipelineUserList,E=a.execState,H=u.pageCurrent,G=u.setPageCurrent,j=u.state,w=u.setState,S=u.enforcer,k=u.setEnforcer,D=u.mode,I=u.setMode,x=u.drop,C=function(e){if(N)switch(e.runStatus){case 1:return t(2);case 30:return t(1);default:return t(4)}},T=function(e,t){G(t),L(e).then((function(){0!==v&&y(E?0:1)}))};return l.a.createElement("div",{className:"structure-content-left",__source:{fileName:b,lineNumber:81,columnNumber:9}},l.a.createElement(c.a,p({},e,{state:j,setState:w,enforcer:S,setEnforcer:k,mode:D,setMode:I,pipelineUserList:h,change:T,drop:x,pipelineId:r,__source:{fileName:b,lineNumber:82,columnNumber:13}})),l.a.createElement("div",{className:"structure-content-left-history",__source:{fileName:b,lineNumber:95,columnNumber:13}},l.a.createElement("div",{className:"history-content",__source:{fileName:b,lineNumber:96,columnNumber:17}},E||N&&N.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"history-content-list",__source:{fileName:b,lineNumber:100,columnNumber:33}},l.a.createElement(i.a,{execState:E,status:t,index:v,setIndex:y,__source:{fileName:b,lineNumber:101,columnNumber:37}}),function(e){return e.map((function(e,t){return l.a.createElement(f.a,{key:t,onClick:function(){return function(e,t){y(t+1),m(e.historyId).then((function(){_(e)}))}(e,t)},state:C(e),index:v,type:t+1,name:e.user&&e.user.name,createTime:e.createTime,title:"# ".concat(e.findNumber),__source:{fileName:b,lineNumber:67,columnNumber:21}})}))}(N)),l.a.createElement("div",{className:"history-content-page",__source:{fileName:b,lineNumber:109,columnNumber:33}},l.a.createElement(n.b,{locale:d.a,__source:{fileName:b,lineNumber:110,columnNumber:37}},l.a.createElement(o.a,p({},g,{simple:!0,current:H,showQuickJumper:!0,showSizeChanger:!1,onChange:function(e){T({pipelineId:r,pageParam:{pageSize:10,currentPage:e},state:j,name:S,type:D},e)},__source:{fileName:b,lineNumber:111,columnNumber:41}}))))):l.a.createElement(s.a,{isData:!0,__source:{fileName:b,lineNumber:123,columnNumber:29}}))))},v=Object(m.b)("structureStore","structureListStore")(Object(m.c)(y));t.a=v,(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(N.register(y,"StructureLeft","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeft.js"),N.register(v,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeft.js")),(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&_(e)}).call(this,r(22)(e))},699:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),u=r(618);(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,i,c=function(e){var t=e.execState,r=e.status,a=e.setIndex,n=e.index,l=function(){if(t)switch(t.runStatus){case 1:return r(2);case 30:return r(1);default:return r(5)}},i=function(){a(0)};return function(e){return""===e?null:o.a.createElement(u.a,{onClick:i,index:n,name:e&&e.execName,state:l(),type:0,createTime:e&&e.createTime,title:"运行中",__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftExecute.js",lineNumber:29,columnNumber:13}})}(t)},s=c;t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"StructureLeftExecute","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftExecute.js"),l.register(s,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftExecute.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,r(22)(e))},700:function(e,t,r){"use strict";(function(e){r(45);var a,n=r(13),o=r(0),u=r.n(o),l="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=n.a.Option,d=function(e){var t=e.state,r=e.setState,a=e.enforcer,c=e.setEnforcer,s=e.mode,d=e.setMode,f=e.pipelineUserList,b=e.change,p=e.drop,N=e.pipelineId,_=i(Object(o.useState)(""),2),y=_[0],v=_[1],g=i(Object(o.useState)(""),2),L=g[0],h=g[1],E=i(Object(o.useState)(""),2),H=E[0],G=E[1];Object(o.useEffect)((function(){v("状态"),h("执行人"),G("执行方式")}),[N,p]);return u.a.createElement("div",{className:"structure-content-left-dropdown",__source:{fileName:l,lineNumber:109,columnNumber:9}},u.a.createElement("div",{className:"dropdown",__source:{fileName:l,lineNumber:110,columnNumber:13}},u.a.createElement(n.a,{style:{width:135,marginRight:10},value:y,onChange:function(e,t){return function(e,t){v(e),r(parseInt(t.key));var n={pipelineId:N,state:parseInt(t.key),userId:a,type:s,pageParam:{pageSize:10,currentPage:1}};b(n,1)}(e,t)},__source:{fileName:l,lineNumber:111,columnNumber:17}},[{type:0,tpl:"全部"},{type:1,tpl:"失败"},{type:20,tpl:"停止"},{type:30,tpl:"成功"}].map((function(e){return u.a.createElement(m,{key:e.type,value:e.tpl,__source:{fileName:l,lineNumber:117,columnNumber:36}},e.tpl)}))),u.a.createElement(n.a,{style:{width:140,marginRight:10},value:L,onChange:function(e,r){return function(e,r){"全部"===r.key&&(r.key=null),h(e),c(r.key);var a={pipelineId:N,state:t,userId:r.key,type:s,pageParam:{pageSize:10,currentPage:1}};b(a,1)}(e,r)},__source:{fileName:l,lineNumber:121,columnNumber:17}},u.a.createElement(m,{key:"全部",value:"全部",__source:{fileName:l,lineNumber:125,columnNumber:21}},"全部"),f&&f.map((function(e){return u.a.createElement(m,{key:e.user.id,value:e.user.name,__source:{fileName:l,lineNumber:128,columnNumber:36}},e.user&&e.user.name)}))),u.a.createElement(n.a,{style:{width:135,marginRight:10},value:H,onChange:function(e,r){return function(e,r){G(e),d(parseInt(r.key));var n={pipelineId:N,state:t,userId:a,type:r.key,pageParam:{pageSize:10,currentPage:1}};b(n,1)}(e,r)},__source:{fileName:l,lineNumber:132,columnNumber:17}},[{type:0,tpl:"全部"},{type:1,tpl:"手动"},{type:2,tpl:"自动"}].map((function(e){return u.a.createElement(m,{key:e.type,value:e.tpl,__source:{fileName:l,lineNumber:138,columnNumber:36}}," ",e.tpl," ")})))))};s(d,'useState{[statusValue,setStatusValue]("")}\nuseState{[userValue,setUserValue]("")}\nuseState{[modeValue,setModeValue]("")}\nuseEffect{}');var f,b,p=d;t.a=p,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js"),f.register(d,"StructureLeftDropdown","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js"),f.register(p,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureLeftDropdown.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,r(22)(e))},702:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),u=r(703),l=r(704),i=r(705),c=r(16),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRight.js";function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},b=function(e){var t=e.structureStore,r=e.status,a=e.freshen,c=e.setFreshen,d=e.setPageCurrent,f=e.pipelineId,b=t.deleteHistoryLog,p=t.killInstance,N=t.rightFlowData,_=t.modeData,y=t.index,v=t.setIndex,g=t.rightExecuteData,L=t.execState,h=m(Object(n.useState)(!1),2),E=h[0],H=h[1],G=m(Object(n.useState)(""),2),j=G[0],w=G[1];return o.a.createElement("div",{className:"structure-content-right-mid",__source:{fileName:s,lineNumber:18,columnNumber:9}},0===y?o.a.createElement(l.a,{freshen:a,setFreshen:c,rightExecuteData:g,status:r,index:y,execState:L,setDrawerContent:w,setVisible:H,killInstance:p,setPageCurrent:d,pipelineId:f,__source:{fileName:s,lineNumber:21,columnNumber:21}}):o.a.createElement(i.a,{freshen:a,setFreshen:c,rightFlowData:N,status:r,modeData:_,index:y,setIndex:v,setVisible:H,setDrawerContent:w,deleteHistoryLog:b,setPageCurrent:d,__source:{fileName:s,lineNumber:35,columnNumber:21}}),o.a.createElement(u.a,{visible:E,setVisible:H,drawerContent:j,__source:{fileName:s,lineNumber:49,columnNumber:13}}))};f(b,'useState{[visible,setVisible](false)}\nuseState{[drawerContent,setDrawerContent]("")}');var p,N,_=Object(c.b)("structureStore")(Object(c.c)(b));t.a=_,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(b,"StructureRight","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRight.js"),p.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRight.js")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}).call(this,r(22)(e))},703:function(e,t,r){"use strict";(function(e){r(507);var a,n=r(502),o=r(0),u=r.n(o),l=r(383),i=r(537),c=r(569),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightLogDrawer.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,d,f=function(e){var t=e.visible,r=e.setVisible,a=e.drawerContent;return u.a.createElement(n.a,{placement:"right",visible:t,onClose:function(){return r(!1)},closable:!1,style:{marginTop:50,height:"calc(100vh - 50px)"},contentWrapperStyle:{width:600},__source:{fileName:s,lineNumber:12,columnNumber:9}},u.a.createElement("div",{className:"drawers",__source:{fileName:s,lineNumber:20,columnNumber:13}},u.a.createElement(l.a,{title:u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{type:a.taskType,__source:{fileName:s,lineNumber:24,columnNumber:33}})," -- ",u.a.createElement(i.a,{type:a.taskType,__source:{fileName:s,lineNumber:26,columnNumber:33}})),setVisible:r,__source:{fileName:s,lineNumber:21,columnNumber:17}}),u.a.createElement("div",{className:"drawers-body",__source:{fileName:s,lineNumber:31,columnNumber:17}},u.a.createElement("div",{className:"log",__source:{fileName:s,lineNumber:32,columnNumber:21}},u.a.createElement("div",{className:"log-content",style:{whiteSpace:"pre-wrap"},__source:{fileName:s,lineNumber:33,columnNumber:25}},a&&a.runLog)))))},b=f;t.a=b,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(f,"StructureRightLogDrawer","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightLogDrawer.js"),m.register(b,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightLogDrawer.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(22)(e))},704:function(e,t,r){"use strict";(function(e){var a,n=r(0),o=r.n(n),u=r(2),l=r(620),i=r(621),c="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightExecute.js";function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);u=!0);}catch(e){l=!0,n=e}finally{try{u||null==r.return||r.return()}finally{if(l)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=function(e){var t=e.status,r=e.execState,a=e.killInstance,m=e.rightExecuteData,d=e.freshen,f=e.setFreshen,b=e.setPageCurrent,p=e.pipelineId,N=s(Object(n.useState)(!0),2),_=N[0],y=N[1],v=function(e){if(r){var a=r.sort,n=r.status;if(a>n&&e===a)return t(0);if(e<a)return t(1);if(a<n)return t(2);if(e>a)return t(3)}},g=function(e){if(r)switch(e){case 0:return r.oneTime;case 1:return r.twoTime;case 2:return r.threeTime;case 3:return r.fourTime}},L=function(e){if(r){var t=r.sort;if(t>r.status&&e===t)return"item-100";if(e<t)return"item-10";if(e>t)return"item-all"}},h=function(){y(!1)};return o.a.createElement("div",{className:"mid_group",__source:{fileName:c,lineNumber:106,columnNumber:9}},o.a.createElement(i.a,{way:r&&r.runWay,time:r&&r.allTime,title:"运行中",action:function(){var e={userId:Object(u.e)().userId,pipelineId:p};a(e).then((function(e){b(1),f(!d)})).catch((function(e){console.log(e)}))},actionTitle:"停止",__source:{fileName:c,lineNumber:107,columnNumber:13}}),function(e){return o.a.createElement("div",{className:"mid_group_center",__source:{fileName:c,lineNumber:72,columnNumber:16}},e&&e.map((function(e,t){return o.a.createElement(n.Fragment,{key:t,__source:{fileName:c,lineNumber:75,columnNumber:29}},o.a.createElement(l.a,{item:e,style:L(t+1),state:v(t),time:g(t),log:null,__source:{fileName:c,lineNumber:76,columnNumber:33}}))})))}(m),function(){if(r){var e=document.getElementById("outLog");return e&&_&&(e.scrollTop=e.scrollHeight),o.a.createElement("div",{className:"structure-content-bottom",onWheel:h,__source:{fileName:c,lineNumber:95,columnNumber:21}},o.a.createElement("div",{className:"structure-content-bottom-title",__source:{fileName:c,lineNumber:96,columnNumber:17}},"输出"),o.a.createElement("div",{className:"structure-content-bottom-outLog",id:"outLog",__source:{fileName:c,lineNumber:97,columnNumber:17}},r.runLog),o.a.createElement("div",{className:"structure-content-bottom-runLog",__source:{fileName:c,lineNumber:100,columnNumber:17}},t(0)))}}())};d(f,"useState{[isActiveSlide,setIsActiveSlide](true)}");var b,p,N=f;t.a=N,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"StructureRightExecute","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightExecute.js"),b.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightExecute.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,r(22)(e))},705:function(e,t,r){"use strict";(function(e){r(32);var a,n=r(18),o=r(0),u=r.n(o),l=r(650),i=r(620),c=r(621),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightItem.js";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,d,f=function(e){var t=e.rightFlowData,r=e.status,a=e.deleteHistoryLog,m=e.modeData,d=e.index,f=e.setIndex,b=e.setVisible,p=e.setDrawerContent,N=e.freshen,_=e.setFreshen,y=e.setPageCurrent,v=function(e){switch(e.runState){case 1:return r(2);case 10:return r(1);default:return r(4)}},g=function(e){p(e),b(!0)},L=function(e){a(e&&e.historyId).then((function(){_(!N),y(1),0!==d&&f(0)})).catch((function(e){console.log(e)}))};return u.a.createElement("div",{className:"mid_group",__source:{fileName:s,lineNumber:91,columnNumber:9}},u.a.createElement(c.a,{way:m&&m.runWay,time:m&&m.execTime,title:"# ".concat(m&&m.findNumber),action:function(){n.a.confirm({title:"删除",icon:u.a.createElement(l.a,{__source:{fileName:s,lineNumber:34,columnNumber:19}}),content:"删除后数据无法恢复",onOk:function(){return L(m)},okText:"确认",cancelText:"取消"})},actionTitle:"删除",__source:{fileName:s,lineNumber:92,columnNumber:13}}),function(e){return u.a.createElement("div",{className:"mid_group_center",__source:{fileName:s,lineNumber:61,columnNumber:16}},e&&e.map((function(e,t){return u.a.createElement(o.Fragment,{key:t,__source:{fileName:s,lineNumber:64,columnNumber:29}},u.a.createElement(i.a,{item:e,style:(r=e.runState,"item-".concat(r)),state:v(e),time:e.execTime,log:g,__source:{fileName:s,lineNumber:65,columnNumber:33}}));var r})))}(t),function(){if(m)return u.a.createElement("div",{className:"structure-content-bottom",__source:{fileName:s,lineNumber:81,columnNumber:22}},u.a.createElement("div",{className:"structure-content-bottom-title",__source:{fileName:s,lineNumber:82,columnNumber:25}},"输出"),u.a.createElement("div",{className:"structure-content-bottom-outLog",__source:{fileName:s,lineNumber:83,columnNumber:25}},m&&m.runLog))}())},b=f;t.a=b,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(f,"StructureRightItem","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightItem.js"),m.register(b,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\structure\\components\\structureRightItem.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,r(22)(e))},706:function(e,t,r){}}]);