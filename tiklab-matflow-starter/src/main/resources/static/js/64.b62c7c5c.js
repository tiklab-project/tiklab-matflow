(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{407:function(e,t,i){"use strict";i.r(t),function(e){var r,n=i(0),o=i.n(n),a=(i(951),i(952)),l=i(42),u=i(249),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\system.js";function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,d,b=function(e){var t=e.route;return o.a.createElement("div",{className:"system",__source:{fileName:s,lineNumber:10,columnNumber:9}},o.a.createElement(a.a,m({},e,{__source:{fileName:s,lineNumber:11,columnNumber:13}})),o.a.createElement("div",{className:"system-content",__source:{fileName:s,lineNumber:12,columnNumber:13}},Object(u.a)(t.routes)))},N=Object(l.g)(b);t.default=N,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(b,"System","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\system.js"),c.register(N,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\system.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}.call(this,i(36)(e))},951:function(e,t,i){},952:function(e,t,i){"use strict";(function(e){i(369);var r,n=i(98),o=i(0),a=i.n(o),l=i(739),u=i(1095),s=i(953),m=i(34),c=i(378),d=i(6),b="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\systemAside.js";function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function f(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var r,n,o=[],a=!0,l=!1;try{for(i=i.call(e);!(a=(r=i.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){l=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw n}}return o}(e,t)||_(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return y(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},w=function(e){var t=e.systemRoleStore.getSystemPermissions,i=e.location.pathname,r=p(Object(o.useState)(i),2),m=r[0],c=r[1],_=p(Object(o.useState)(["/index/system/syr/feature"]),2),y=_[0],v=_[1],w=p(Object(o.useState)(["","","",""]),2),E=w[0],g=w[1],h=JSON.parse(localStorage.getItem("authConfig")).authType,C=JSON.parse(localStorage.getItem("authConfig")).authUrl,x=function(e,t){var i=[];switch(e){case 0:i=["orga","user","user_dir"];break;case 1:i=["resources_server","resources_host"];break;case 2:i=["message_type","message_setting"];break;case 3:i=["pipeline_log"]}for(var r=0;r<i.length;r++)if(t.indexOf(i[r])>-1)return i[r];return"matflow"};Object(o.useEffect)((function(){t(Object(d.getUser)().userId).then((function(e){for(var t=e.data&&e.data,i=0;i<E.length;i++)E[i]=x(i,t);g(f(E))}))}),[]),Object(o.useEffect)((function(){c(i)}),[i]);var j=function(t,i){return a.a.createElement("li",{style:{cursor:"pointer",paddingLeft:"".concat(20*i+20)},className:"system-aside-li system-aside-second ".concat(t.id===m?"system-aside-select":null),onClick:function(){return function(t){h||"orga"!==t.purviewCode&&"user"!==t.purviewCode&&"user_dir"!==t.purviewCode?e.history.push(t.id):window.open(C+"/#"+t.id)}(t)},key:t.id,__source:{fileName:b,lineNumber:79,columnNumber:13}},a.a.createElement("span",{className:"sys-content-icon",__source:{fileName:b,lineNumber:84,columnNumber:17}},t.icon),a.a.createElement("span",{__source:{fileName:b,lineNumber:85,columnNumber:17}},t.title))},L=function(t,i){return a.a.createElement(n.a,N({key:t.id,code:t.purviewCode},e,{__source:{fileName:b,lineNumber:92,columnNumber:13}}),j(t,i))},O=function t(i,r){return a.a.createElement(n.a,N({key:i.id,code:i.purviewCode},e,{__source:{fileName:b,lineNumber:134,columnNumber:13}}),a.a.createElement("li",{key:i.id,className:"system-aside-li",__source:{fileName:b,lineNumber:135,columnNumber:17}},a.a.createElement("div",{className:"system-aside-item system-aside-first",style:{paddingLeft:"".concat(20*r+20)},onClick:function(){return k(i.id)},__source:{fileName:b,lineNumber:136,columnNumber:21}},a.a.createElement("span",{__source:{fileName:b,lineNumber:140,columnNumber:21}},a.a.createElement("span",{className:"sys-content-icon",__source:{fileName:b,lineNumber:141,columnNumber:25}},i.icon),a.a.createElement("span",{className:"system-aside-title",__source:{fileName:b,lineNumber:142,columnNumber:25}},i.title)),a.a.createElement("div",{className:"system-aside-item-icon",__source:{fileName:b,lineNumber:144,columnNumber:25}},i.children?S(i.id)?a.a.createElement(l.a,{style:{fontSize:"10px"},__source:{fileName:b,lineNumber:148,columnNumber:45}}):a.a.createElement(u.a,{style:{fontSize:"10px"},__source:{fileName:b,lineNumber:149,columnNumber:45}}):"")),a.a.createElement("ul",{className:"system-aside-ul ".concat(S(i.id)?null:"system-aside-hidden"),__source:{fileName:b,lineNumber:154,columnNumber:21}},i.children&&i.children.map((function(e){var i=r+1;return e.children&&e.children.length?t(e,i):L(e,i)})))))},S=function(e){return y.some((function(t){return t===e}))},k=function(e){S(e)?v(y.filter((function(t){return t!==e}))):v(y.concat(e))};return a.a.createElement("div",{className:"system-aside",__source:{fileName:b,lineNumber:181,columnNumber:9}},a.a.createElement("ul",{className:"system-aside-top",style:{padding:0},__source:{fileName:b,lineNumber:182,columnNumber:13}},h?Object(s.b)(E&&E).map((function(e){return e.children&&e.children.length>0?O(e,0):L(e,0)})):Object(s.c)(E&&E).map((function(e){return e.children&&e.children.length>0?O(e,0):L(e,0)})),Object(s.a)(E&&E).map((function(e){return e.children&&e.children.length>0?O(e,0):L(e,0)})),!1))};v(w,'useState{[selectKey,setSelectKey](path)}\nuseState{[expandedTree,setExpandedTree](["/index/system/syr/feature"])}\nuseState{[department,setDepartment](["","","",""])}\nuseEffect{}\nuseEffect{}');var E,g,h=Object(m.b)(c.SYSTEM_ROLE_STORE)(Object(m.c)(w));t.a=h,(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(w,"SystemAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\systemAside.js"),E.register(h,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\systemAside.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,i(36)(e))},953:function(e,t,i){"use strict";(function(e){i.d(t,"b",(function(){return h})),i.d(t,"c",(function(){return C})),i.d(t,"a",(function(){return x}));var r,n=i(0),o=i.n(n),a=i(1083),l=i(1084),u=i(1014),s=i(1085),m=i(1086),c=i(1087),d=i(1088),b=i(1089),N=i(1090),f=i(1091),p=i(1092),_=i(1093),y=i(1094),v=i(1061),w="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var E,g,h=function(e){return[{id:"1",title:"用户与部门",purviewCode:e[0],icon:o.a.createElement(a.a,{__source:{fileName:w,lineNumber:26,columnNumber:19}}),children:[{id:"/index/system/user/dashbord",title:"部门",icon:o.a.createElement(l.a,{__source:{fileName:w,lineNumber:31,columnNumber:27}}),purviewCode:"orga"},{id:"/index/system/user/list",title:"用户",icon:o.a.createElement(a.a,{__source:{fileName:w,lineNumber:37,columnNumber:27}}),purviewCode:"user"},{id:"/index/system/user/directory",title:"用户目录",icon:o.a.createElement(u.a,{__source:{fileName:w,lineNumber:43,columnNumber:27}}),purviewCode:"user_dir"}]}]},C=function(e){return[{id:"/setting/orga",title:"用户与部门",purviewCode:e[0],icon:o.a.createElement(a.a,{__source:{fileName:w,lineNumber:57,columnNumber:19}})}]},x=function(e){return[{id:"/index/system/role",title:"权限",icon:o.a.createElement(s.a,{__source:{fileName:w,lineNumber:67,columnNumber:19}}),purviewCode:"pipeline_permission"},{id:"2",title:"消息",icon:o.a.createElement(m.a,{__source:{fileName:w,lineNumber:73,columnNumber:18}}),purviewCode:e[2],children:[{id:"/index/system/mes/notice",title:"消息通知方案",icon:o.a.createElement(m.a,{__source:{fileName:w,lineNumber:79,columnNumber:26}}),purviewCode:"message_setting"},{id:"/index/system/mes/send",title:"消息发送方式",icon:o.a.createElement(m.a,{__source:{fileName:w,lineNumber:85,columnNumber:26}}),purviewCode:"message_type"}]},{id:"/index/system/auth",title:"认证配置",icon:o.a.createElement(c.a,{__source:{fileName:w,lineNumber:93,columnNumber:18}}),purviewCode:"pipeline_auth"},{id:3,title:"资源配置",icon:o.a.createElement(d.a,{__source:{fileName:w,lineNumber:99,columnNumber:18}}),purviewCode:e[1],children:[{id:"/index/system/resoure/server",title:"服务配置",icon:o.a.createElement(d.a,{__source:{fileName:w,lineNumber:105,columnNumber:26}}),purviewCode:"resources_server"},{id:"/index/system/resoure/host",title:"主机配置",icon:o.a.createElement(d.a,{__source:{fileName:w,lineNumber:111,columnNumber:26}}),purviewCode:"resources_host"}]},{id:"/index/system/envi",title:"环境配置",icon:o.a.createElement(b.a,{__source:{fileName:w,lineNumber:119,columnNumber:18}}),purviewCode:"pipeline_env"},{id:"/index/system/plugin",title:"插件",icon:o.a.createElement(N.a,{__source:{fileName:w,lineNumber:125,columnNumber:18}}),purviewCode:"pipeline_plugin"},{id:"5",title:"安全",icon:o.a.createElement(f.a,{__source:{fileName:w,lineNumber:131,columnNumber:18}}),purviewCode:e[3],children:[{id:"/index/system/myLog",title:"操作日志",icon:o.a.createElement(f.a,{__source:{fileName:w,lineNumber:137,columnNumber:26}}),purviewCode:"pipeline_log"}]},{id:"/index/system/version",title:"版本与许可证",icon:o.a.createElement(p.a,{__source:{fileName:w,lineNumber:145,columnNumber:18}}),purviewCode:"pipeline_version"},{id:"/index/system/info",title:"系统信息",icon:o.a.createElement(_.a,{__source:{fileName:w,lineNumber:151,columnNumber:18}}),purviewCode:"pipeline_system"}]},j=[{id:"/index/system/role",title:"权限",icon:o.a.createElement(s.a,{__source:{fileName:w,lineNumber:161,columnNumber:15}}),purviewCode:"pipeline_permission"},{id:"/index/system/auth",title:"认证配置",icon:o.a.createElement(c.a,{__source:{fileName:w,lineNumber:167,columnNumber:14}}),purviewCode:"pipeline_auth"},{id:2,title:"资源配置",icon:o.a.createElement(d.a,{__source:{fileName:w,lineNumber:173,columnNumber:14}}),purviewCode:"resources_host",children:[{id:"/index/system/resoure/server",title:"服务配置",icon:o.a.createElement(d.a,{__source:{fileName:w,lineNumber:179,columnNumber:22}}),purviewCode:"resources_server"},{id:"/index/system/resoure/host",title:"主机配置",icon:o.a.createElement(d.a,{__source:{fileName:w,lineNumber:185,columnNumber:22}}),purviewCode:"resources_host"}]},{id:"/index/system/envi",title:"环境配置",icon:o.a.createElement(b.a,{__source:{fileName:w,lineNumber:193,columnNumber:14}}),purviewCode:"pipeline_env"},{id:"3",title:"消息",icon:o.a.createElement(m.a,{__source:{fileName:w,lineNumber:199,columnNumber:14}}),purviewCode:"message",children:[{id:"/index/system/mes/notice",title:"消息通知方案",icon:o.a.createElement(m.a,{__source:{fileName:w,lineNumber:205,columnNumber:22}}),purviewCode:"message_setting"},{id:"/index/system/mes/send",title:"消息发送方式",icon:o.a.createElement(m.a,{__source:{fileName:w,lineNumber:211,columnNumber:22}}),purviewCode:"message_type"}]},{id:"/index/system/plugin",title:"插件",icon:o.a.createElement(N.a,{__source:{fileName:w,lineNumber:219,columnNumber:14}}),purviewCode:"pipeline_plugin"},{id:"5",title:"安全",icon:o.a.createElement(f.a,{__source:{fileName:w,lineNumber:225,columnNumber:14}}),purviewCode:"pipeline_log",children:[{id:"/index/system/myLog",title:"操作日志",icon:o.a.createElement(f.a,{__source:{fileName:w,lineNumber:231,columnNumber:22}}),purviewCode:"pipeline_log"}]},{id:"/index/system/version",title:"版本与许可证",icon:o.a.createElement(p.a,{__source:{fileName:w,lineNumber:239,columnNumber:14}}),purviewCode:"pipeline_version"},{id:"/index/system/info",title:"系统信息",icon:o.a.createElement(_.a,{__source:{fileName:w,lineNumber:245,columnNumber:14}}),purviewCode:"pipeline_system"}],L=[{id:"6",title:"基础数据",icon:o.a.createElement(y.a,{__source:{fileName:w,lineNumber:254,columnNumber:14}}),purviewCode:"basics",children:[{id:"/index/system/syr/feature",title:"系统功能",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:260,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/roletrue",title:"系统角色",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:266,columnNumber:23}}),purviewCode:"basics"},{id:"/index/system/project/feature",title:"项目功能",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:272,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/project/role",title:"项目角色",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:278,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/todoTask",title:"待办任务",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:284,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/task",title:"待办事项",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:290,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/todoTemp",title:"代办模板 ",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:296,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/todoType",title:"代办类型 ",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:302,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/logTemplate",title:"日志模板",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:308,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/logType",title:"日志类型",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:314,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/mes/management",title:"消息管理",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:320,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/mes/type",title:"消息类型",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:326,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/mes/sendtrue",title:"消息通知类型",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:332,columnNumber:22}}),purviewCode:"basics"},{id:"/index/system/mes/noticetrue",title:"通知方案",icon:o.a.createElement(v.a,{__source:{fileName:w,lineNumber:338,columnNumber:22}}),purviewCode:"basics"}]}];(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(E.register(h,"departmentRouters","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js"),E.register(C,"departmentUnifyRouters","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js"),E.register(x,"applicationRouters","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js"),E.register(j,"applicationRouter","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js"),E.register(L,"templateRouter","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,i(36)(e))}}]);