(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{183:function(e,t,r){"use strict";r.r(t),function(e){r(892);var n,a=r(893),o=r(49),i=r.n(o),u=r(1),c=r.n(u),l=r(58);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,d,f=function(e){var t=e.pipelineStore.pipelineId;return c.a.createElement(a.a,i()({},e,{domainId:t,__source:{fileName:"D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\projectSet\\members\\projectSetUser.js",lineNumber:9,columnNumber:12}}))},m=Object(l.b)("pipelineStore")(Object(l.c)(f));t.default=m,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(f,"ProjectSetUser","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\projectSet\\members\\projectSetUser.js"),s.register(m,"default","D:\\idea\\pipeline\\doublekit-pipeline-ui\\src\\modules\\projectSet\\members\\projectSetUser.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}.call(this,r(13)(e))},892:function(e,t,r){},893:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));r(240);var n=r(241),a=(r(265),r(264)),o=(r(235),r(236)),i=(r(213),r(212)),u=(r(251),r(253)),c=(r(217),r(216)),l=(r(358),r(289)),s=(r(293),r(294)),d=r(1),f=r.n(d),m=r(58),p=r(9),b=r(915),y=(r(247),r(246)),g=(r(266),r(257)),v=(r(223),r(222));function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){var t=Object(b.a)().t,r=e.visible,u=e.onCancel,l=e.domainId,s=S(Object(d.useState)([]),2),m=s[0],h=s[1],j=S(Object(d.useState)([]),2),P=j[0],E=j[1],I=S(Object(d.useState)(10),1)[0],k=S(Object(d.useState)(1),2),A=k[0],x=k[1],U=S(Object(d.useState)(0),2),D=U[0],L=U[1],z=S(Object(d.useState)({}),2),C=z[0],T=z[1],G=S(Object(d.useState)({pageParam:{pageSize:I,currentPage:A}}),2),H=G[0],N=G[1],R=S(Object(d.useState)([]),2),M=R[0],F=R[1];Object(d.useEffect)((function(){return K(),function(){return F([])}}),[]);var K=function(){p.Axios.post("/userdir/findAllList").then((function(e){e.code||F(e.data)}))},J=[{title:t("orga-table.surname"),dataIndex:"name",key:"name",width:"20%",ellipsis:!0},{title:t("orga-table.phone"),dataIndex:"phone",key:"phone",width:"20%",ellipsis:!0},{title:t("orga-table.email"),dataIndex:"email",key:"email",width:"20%",ellipsis:!0},{title:t("orga-table.org"),dataIndex:"org",key:"org",width:"20%",ellipsis:!0},{title:t("orga-table.type"),dataIndex:"userType",key:"userType",width:"10%",ellipsis:!0,render:function(e){var t=M.findIndex((function(t){return t.id==e}));return t>-1?M[t].name:"--"}}],$=S(v.a.useForm(),1)[0],_=Object(d.useRef)(null);Object(d.useEffect)((function(){return _.current=!0,B(H),function(){_.current=!1}}),[H]);var B=function(e){p.Axios.post("user/findUserPage",e).then((function(e){!e.code&&_.current&&(L(e.data.totalRecord),E(e.data.dataList))}))},q={selectedRowKeys:m,onChange:function(e){h(e)}};return f.a.createElement(y.a,{title:"添加用户",visible:r,onOk:function(){p.Axios.post("dmUser/findDmUserList",{domainId:l}).then((function(e){if(!e.code){var t,r=!1,n=e.data.map((function(e){return e.user.id})),a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=w(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}(m);try{var o=function(){var e=t.value;if(r)return"break";r=n.some((function(t){return e===t}))};for(a.s();!(t=a.n()).done;){if("break"===o())break}}catch(e){a.e(e)}finally{a.f()}if(r)return g.b.error("存在关联的用户");var i=m.map((function(e){return t={domainId:l,user:{id:e}},p.Axios.post("dmUser/createDmUser",t);var t}));Promise.all(i).then((function(e){N({pageParam:{pageSize:I,currentPage:1}}),h([]),x(1),L(0),u()}))}}))},onCancel:function(){$.resetFields(),N({pageParam:{pageSize:I,currentPage:1}}),h([]),x(1),L(0),T({}),u()},closable:!1,width:800,destroyOnClose:!0},f.a.createElement(o.a,null,f.a.createElement(n.a,{span:24},f.a.createElement(v.a,{preserve:!1,layout:"inline",onFinish:function(e){var t=O(O({},e),{},{pageParam:{pageSize:I,currentPage:1}});T(e),x(1),N(t)},form:$},f.a.createElement(v.a.Item,{name:"name",label:t("orga-table.name")},f.a.createElement(c.a,null)),f.a.createElement(v.a.Item,null,f.a.createElement(i.a,{type:"primary",htmlType:"submit"},t("orga-common.search")))))),f.a.createElement(o.a,null,f.a.createElement(n.a,{span:24},f.a.createElement("div",{style:{width:"100%"}},f.a.createElement(a.a,{columns:J,dataSource:P,rowSelection:q,rowKey:function(e){return e.id},pagination:{current:A,pageSize:I,total:D,onChange:function(e){x(e);var t=O(O(O({},t),C),{},{pageParam:{pageSize:I,currentPage:e}});N(t)}}})))))},I=function(e,t){return e.visible===t.visible},k=Object(d.memo)(E,I),A=r(47);function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=Object(m.b)(A.a)(Object(m.c)((function(e){var t=e.domainId,r=e.domainUserStore,m=e.isPortal,y=void 0!==m&&m,g=r.getDomainUser,v=r.deleteDomainUser,h=r.privilegeDomainUsers,O=Object(b.a)().t,j=z(Object(d.useState)([]),2),S=j[0],w=j[1];Object(d.useEffect)((function(){return P(),function(){return w([])}}),[]);var P=function(){p.Axios.post("/userdir/findAllList").then((function(e){if(!e.code)if(y){var t=e.data.filter((function(e){return"6"!==e.id}));w(t)}else w(e.data)}))},E=[{title:O("orga-table.surname"),dataIndex:["user","name"],key:"name"},{title:O("orga-table.phone"),dataIndex:["user","phone"],key:"phone"},{title:O("orga-table.email"),dataIndex:["user","email"],key:"email"},{title:O("orga-table.org"),dataIndex:["user","org"],key:"org",width:"20%"},{title:O("orga-table.type"),dataIndex:["user","userType"],key:"userType",width:"15%",render:function(e){var t=S.findIndex((function(t){return t.id==e}));return t>-1?S[t].name:"--"}},{title:O("orga-common.action"),key:"action",width:"10%",render:function(e,t){return f.a.createElement(s.b,{size:"middle"},f.a.createElement("a",{onClick:function(){return Q(t.id)}},O("orga-common.delete")))}}],I=z(Object(d.useState)(!1),2),A=I[0],U=I[1],L=z(Object(d.useState)(""),2),C=L[0],T=L[1],G=z(Object(d.useState)(10),1)[0],H=z(Object(d.useState)(1),2),N=H[0],R=H[1],M=z(Object(d.useState)(0),2),F=M[0],K=M[1],J=z(Object(d.useState)({domainId:t,pageParam:{pageSize:G,currentPage:N}}),2),$=J[0],_=J[1],B=Object(d.useRef)(null);Object(d.useEffect)((function(){return B.current=!0,q($),function(){B.current=!1}}),[$]);var q=function(e){p.Axios.post("/dmUser/findDmUserPage",e).then((function(e){!e.code&&B.current&&(K(e.data.totalRecord),g(e.data.dataList))}))},Q=function(e){var t=new FormData;t.append("id",e),p.Axios.post("/dmUser/deleteDmUser",t).then((function(t){t.code||(v(e),F-1<G*(N-1)+1&&(R(1===N?1:N-1),_({pageParam:{pageSize:G,currentPage:1===N?1:N-1}})),K(F-1))}))},V=function(){U(!1),q($)};return f.a.createElement("div",{className:"privilege-domain-user"},f.a.createElement(o.a,null,f.a.createElement(n.a,null,f.a.createElement(l.a,{routes:[{disabled:!0,breadcrumbName:"成员管理 "},{path:"first",breadcrumbName:"成员列表"}]}),f.a.createElement("div",{style:{paddingRight:8}},f.a.createElement(o.a,{style:{paddingBottom:8},justify:"space-between"},f.a.createElement(s.b,null,f.a.createElement(c.a,{placeholder:O("orga-label.searchUserPhoneEmail"),value:C,onChange:function(e){return T(e.target.value)},onPressEnter:function(e){return function(e){R(1);var t=D(D({},$),{},{pageParam:{pageSize:G,currentPage:1}});e.target.value?t.name=e.target.value:delete t.name,_(t)}(e)}}),f.a.createElement(u.a,{placeholder:"请选择用户目录"},S.map((function(e){return f.a.createElement(u.a.Option,{key:e.id,value:e.id},e.name)})))),f.a.createElement(s.b,null,f.a.createElement(i.a,{onClick:function(){return U(!0)}},"+",O("orga-label.addUser")))),f.a.createElement(o.a,null,f.a.createElement(n.a,{span:24},f.a.createElement(a.a,{columns:E,dataSource:h,rowKey:function(e){return e.id},tableLayout:"fixed",pagination:{current:N,pageSize:G,total:F},onChange:function(e,t,r){return function(e,t,r){var n=[];R(e.current),Array.isArray(r)?n=r.map((function(e){return{name:e.field,sortType:void 0!==e.order?"ascend"===e.order?"asc":"desc":void 0}})):r.field&&n.push({name:r.field,sortType:void 0!==r.order?"ascend"===r.order?"asc":"desc":void 0});var a=D(D({},$),{},{orderParams:n,pageParam:{pageSize:G,currentPage:e.current}});_(a)}(e,0,r)}})))))),Object(d.useMemo)((function(){return f.a.createElement(k,x({},e,{domainId:t,visible:A,params:$,onCancel:V}))}),[A]))})))}}]);