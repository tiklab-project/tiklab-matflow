(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{263:function(e,o,a){"use strict";(function(e){a(295);var r,t=a(291),l=a(1),m=a.n(l),n=(a(269),a(15)),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,c,s=function(e){var o=e.config,a=e.type,r=e.firstItem,l=e.secondItem,n=e.match;return function(e){switch(e){case"project":return m.a.createElement("div",{className:o?"breadcrumb-topOver":"breadcrumb",__source:{fileName:u,lineNumber:13,columnNumber:25}},m.a.createElement(t.a,{separator:">",__source:{fileName:u,lineNumber:14,columnNumber:29}},m.a.createElement(t.a.Item,{__source:{fileName:u,lineNumber:15,columnNumber:33}},"流水线"),m.a.createElement(t.a.Item,{__source:{fileName:u,lineNumber:16,columnNumber:33}},n.params.matFlowName)));case"system":return m.a.createElement("div",{className:"breadcrumb",__source:{fileName:u,lineNumber:22,columnNumber:25}},m.a.createElement(t.a,{separator:">",__source:{fileName:u,lineNumber:23,columnNumber:29}},m.a.createElement(t.a.Item,{__source:{fileName:u,lineNumber:24,columnNumber:33}},r),l?m.a.createElement(t.a.Item,{__source:{fileName:u,lineNumber:25,columnNumber:45}},l):null))}}(a)},f=Object(n.o)(s);o.a=f,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(s,"BreadcrumbContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js"),i.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\breadcrumb\\breadcrumb.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a(13)(e))},269:function(e,o,a){},310:function(e,o,a){"use strict";(function(e){var r,t=a(201),l=a.n(t);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,n,u={moment:l()().format("YYYY-MM-DD HH:mm:ss")};o.a=u,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&m.register(u,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\moment\\moment.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,a(13)(e))},349:function(e,o,a){"use strict";(function(e){a(247);var r,t=a(246),l=(a(217),a(216)),m=(a(235),a(236)),n=(a(240),a(241)),u=(a(333),a(311)),i=(a(223),a(222)),c=a(83),s=a.n(c),f=(a(251),a(253)),b=a(1),d=a.n(b),N=(a(433),a(310)),p="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},E=f.a.Option,w=function(e){var o=e.visible,a=e.setVisible,r=e.createProof,c=e.userId,_=e.fresh,w=e.setFresh,y=e.isAuthority,v=e.type,L=e.matFlowList,h=e.matFlowId,I=i.a.useForm(),H=s()(I,1)[0],F=Object(b.useState)(1),G=s()(F,2),S=G[0],g=G[1];return d.a.createElement(t.a,{visible:o,closable:!1,okText:"确认",cancelText:"取消",onCancel:function(){return a(!1)},onOk:function(){H.validateFields().then((function(e){H.resetFields(),function(e){var o,t;t=L?e.proofList:["".concat(h)],o=y?e.proofScope:v;var l={user:{id:c},type:e.type,proofScope:o,proofType:e.proofType,proofName:e.proofName,proofUsername:e.proofUsername,proofPassword:e.proofPassword,proofDescribe:e.proofDescribe,proofCreateTime:N.a.moment,proofList:t};r(l).then((function(){w(!_)})).catch((function(e){console.log(e)})),a(!1)}(e)}))},bodyStyle:{maxHeight:700,overflow:"auto"},__source:{fileName:p,lineNumber:52,columnNumber:9}},d.a.createElement(i.a,{form:H,layout:"vertical",name:"userForm",autoComplete:"off",initialValues:{proofType:"password",type:1,proofScope:1},__source:{fileName:p,lineNumber:68,columnNumber:13}},d.a.createElement(i.a.Item,{label:"凭证级别",name:"type",__source:{fileName:p,lineNumber:74,columnNumber:17}},d.a.createElement(f.a,{onChange:function(e){g(e)},__source:{fileName:p,lineNumber:75,columnNumber:21}},d.a.createElement(E,{value:1,__source:{fileName:p,lineNumber:76,columnNumber:25}},"全局凭证"),d.a.createElement(E,{value:2,__source:{fileName:p,lineNumber:77,columnNumber:25}},"项目凭证"))),L&&2===S?d.a.createElement(i.a.Item,{label:"项目作用域",name:"proofList",className:"proofModal-showMatFlow",rules:[{required:!0,message:"请选择项目作用域"}],__source:{fileName:p,lineNumber:82,columnNumber:21}},d.a.createElement(u.a.Group,{__source:{fileName:p,lineNumber:88,columnNumber:25}},L&&L.map((function(e){return d.a.createElement(m.a,{key:e.matFlowId,__source:{fileName:p,lineNumber:91,columnNumber:41}},d.a.createElement(n.a,{__source:{fileName:p,lineNumber:92,columnNumber:45}},d.a.createElement(u.a,{value:e.matFlowId,__source:{fileName:p,lineNumber:93,columnNumber:49}},e.matFlowName)))})))):null,y?d.a.createElement(i.a.Item,{label:"凭证作用域",name:"proofScope",__source:{fileName:p,lineNumber:105,columnNumber:21}},d.a.createElement(f.a,{__source:{fileName:p,lineNumber:106,columnNumber:25}},d.a.createElement(E,{value:1,__source:{fileName:p,lineNumber:107,columnNumber:29}},"源码凭证"),d.a.createElement(E,{value:5,__source:{fileName:p,lineNumber:108,columnNumber:29}},"部署凭证"))):null,d.a.createElement(i.a.Item,{label:"凭证名称",name:"proofName",rules:[{required:!0,message:"请输入凭证名称"}],__source:{fileName:p,lineNumber:113,columnNumber:17}},d.a.createElement(l.a,{placeholder:"名称",__source:{fileName:p,lineNumber:118,columnNumber:21}})),d.a.createElement(i.a.Item,{label:"凭证类型",name:"proofType",__source:{fileName:p,lineNumber:120,columnNumber:17}},d.a.createElement(f.a,{placeholder:"选择类型",__source:{fileName:p,lineNumber:121,columnNumber:21}},d.a.createElement(E,{value:"SSH",__source:{fileName:p,lineNumber:122,columnNumber:25}},"SSH"),d.a.createElement(E,{value:"password",__source:{fileName:p,lineNumber:123,columnNumber:25}},"password"))),d.a.createElement(i.a.Item,{shouldUpdate:function(e,o){return e.proofType!==o.proofType},__source:{fileName:p,lineNumber:126,columnNumber:17}},(function(e){return"password"===(0,e.getFieldValue)("proofType")?d.a.createElement(d.a.Fragment,null,d.a.createElement(i.a.Item,{label:"用户名",name:"proofUsername",__source:{fileName:p,lineNumber:130,columnNumber:33}},d.a.createElement(l.a,{placeholder:"账号",__source:{fileName:p,lineNumber:131,columnNumber:37}})),d.a.createElement(i.a.Item,{label:"密码",name:"proofPassword",__source:{fileName:p,lineNumber:133,columnNumber:33}},d.a.createElement(l.a.Password,{placeholder:"密码",__source:{fileName:p,lineNumber:134,columnNumber:37}}))):d.a.createElement(i.a.Item,{name:"proofPassword",label:"私钥",__source:{fileName:p,lineNumber:138,columnNumber:29}},d.a.createElement(l.a.TextArea,{placeholder:"私钥",__source:{fileName:p,lineNumber:139,columnNumber:33}}))})),d.a.createElement(i.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:p,lineNumber:143,columnNumber:17}},d.a.createElement(l.a.TextArea,{placeholder:"备注",__source:{fileName:p,lineNumber:144,columnNumber:21}}))))};_(w,"useForm{[form]}\nuseState{[isShowMatFlow,setIsShowMatFlow](1)}");var y,v,L=w;o.a=L,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(E,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js"),y.register(w,"AddProofModal","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js"),y.register(L,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofModal.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}).call(this,a(13)(e))},432:function(e,o,a){"use strict";(function(e){a(213);var r,t=a(212),l=a(83),m=a.n(l),n=a(1),u=a.n(n),i=a(349),c=a(58),s=a(9),f="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},d=function(e){var o=e.proofStore,a=e.matFlowStore,r=e.type,l=e.style,c=e.matFlowList,b=o.createProof,d=o.fresh,N=o.setFresh,p=a.matFlowId,_=Object(s.getUser)().userId,E=Object(n.useState)(!1),w=m()(E,2),y=w[0],v=w[1],L=Object(n.useState)(!1),h=m()(L,2),I=h[0],H=h[1];Object(n.useEffect)((function(){l&&H(!0)}),[]);return u.a.createElement(n.Fragment,{__source:{fileName:f,lineNumber:29,columnNumber:9}},u.a.createElement(t.a,{className:"config-details-link",type:l,onClick:function(){v(!0)},__source:{fileName:f,lineNumber:30,columnNumber:13}},"添加"),u.a.createElement(i.a,{visible:y,setVisible:v,createProof:b,userId:_,fresh:d,setFresh:N,isAuthority:I,type:r,style:l,matFlowList:c,matFlowId:p,__source:{fileName:f,lineNumber:33,columnNumber:13}}))};b(d,"useState{[visible,setVisible](false)}\nuseState{[isAuthority,setIsAuthority](false)}\nuseEffect{}");var N,p,_=Object(c.b)("proofStore","matFlowStore")(Object(c.c)(d));o.a=_,(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(N.register(d,"AddProofButton","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js"),N.register(_,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\addProofButton.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a(13)(e))},433:function(e,o,a){},662:function(e,o,a){"use strict";(function(e){a(265);var r,t=a(264),l=(a(353),a(354)),m=a(83),n=a.n(m),u=a(1),i=a.n(u),c=(a(878),a(432)),s=a(263),f=a(879),b=a(58),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var o=e.proofList,a=e.proofStore,r=e.firstItem,m=e.type,b=e.matFlowList,N=e.matFlowId,p=a.updateProof,_=a.deleteProof,E=a.setFresh,w=a.fresh,y=Object(u.useState)(""),v=n()(y,2),L=v[0],h=v[1],I=Object(u.useState)(!1),H=n()(I,2),F=H[0],G=H[1],S=Object(u.useState)(!1),g=n()(S,2),P=g[0],k=g[1],j=Object(u.useState)(1),M=n()(j,2),D=M[0],T=M[1],O=[{title:"作用域",dataIndex:"type",key:"type",render:function(e){switch(e){case 1:return"全局凭证";default:return"项目凭证"}}},{title:"名称",dataIndex:"proofName",key:"proofName"},{title:"类型",dataIndex:"proofType",key:"proofType"},{title:"创建时间",dataIndex:"proofCreateTime",key:"proofCreateTime"},{title:"备注",dataIndex:"proofDescribe",key:"proofDescribe"},{title:"操作",dataIndex:"action",key:"action",render:function(e,o){return i.a.createElement("span",{className:"proof-content-action",__source:{fileName:d,lineNumber:79,columnNumber:21}},i.a.createElement("span",{className:"edit",onClick:function(){return function(e,o){2===o.proofScope||3===o.proofScope?k(!0):k(!1),h(o),T(o.type),console.log(o),G(!0)}(0,o)},__source:{fileName:d,lineNumber:80,columnNumber:25}},"编辑"),i.a.createElement(l.a,{style:{marginTop:100},title:"你确定删除吗",onConfirm:function(){return function(e,o){_(o.proofId).then((function(){E(!w)})).catch((function(e){console.log(e)}))}(0,o)},okText:"确定",cancelText:"取消",__source:{fileName:d,lineNumber:83,columnNumber:26}},i.a.createElement("span",{className:"del",__source:{fileName:d,lineNumber:90,columnNumber:30}},"删除")))}}];return i.a.createElement("div",{className:"proof",__source:{fileName:d,lineNumber:101,columnNumber:9}},i.a.createElement(s.a,{firstItem:r,type:m,__source:{fileName:d,lineNumber:102,columnNumber:13}}),i.a.createElement("div",{className:"proof-content",__source:{fileName:d,lineNumber:103,columnNumber:13}},i.a.createElement("div",{className:"proof-content-btn",__source:{fileName:d,lineNumber:104,columnNumber:17}},i.a.createElement(c.a,{style:"primary",matFlowList:b,__source:{fileName:d,lineNumber:105,columnNumber:21}})),i.a.createElement(t.a,{bordered:!0,rowKey:function(e){return e.proofId},columns:O,dataSource:o,pagination:{pageSize:12,hideOnSinglePage:!0},__source:{fileName:d,lineNumber:107,columnNumber:17}})),i.a.createElement(f.a,{visible:F,setVisible:G,formValue:L,fresh:w,setFresh:E,displayPart:P,matFlowList:b,isShowMatFlow:D,setIsShowMatFlow:T,updateProof:p,matFlowId:N,__source:{fileName:d,lineNumber:115,columnNumber:13}}))};N(p,'useState{[formValue,setFormValue]("")}\nuseState{[visible,setVisible](false)}\nuseState{[displayPart,setDisplayPart](false)}\nuseState{[isShowMatFlow,setIsShowMatFlow](1)}');var _,E,w=Object(b.b)("proofStore")(Object(b.c)(p));o.a=w,(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(p,"Proof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js"),_.register(w,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\container\\proof.js")),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}).call(this,a(13)(e))},878:function(e,o,a){},879:function(e,o,a){"use strict";(function(e){a(247);var r,t=a(246),l=(a(217),a(216)),m=(a(235),a(236)),n=(a(240),a(241)),u=(a(333),a(311)),i=(a(223),a(222)),c=a(83),s=a.n(c),f=(a(251),a(253)),b=a(1),d=a.n(b),N="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},_=f.a.Option,E=function(e){var o=e.visible,a=e.setVisible,r=e.formValue,c=e.updateProof,p=e.setFresh,E=e.fresh,w=e.displayPart,y=e.matFlowList,v=e.matFlowId,L=e.isShowMatFlow,h=e.setIsShowMatFlow,I=i.a.useForm(),H=s()(I,1)[0];Object(b.useEffect)((function(){o&&H.setFieldsValue(r)}),[o]);return d.a.createElement(t.a,{visible:o,closable:!1,okText:"确认",cancelText:"取消",onCancel:function(){return a(!1)},onOk:function(){H.validateFields().then((function(e){var o={matFlow:{matflowId:1===e.type?null:v},proofId:r.proofId,proofScope:e.proofScope,proofType:e.proofType,proofName:e.proofName,proofUsername:e.proofUsername,proofPassword:e.proofPassword,proofDescribe:e.proofDescribe,type:e.type,proofList:e.proofList};c(o).then((function(){p(!E)})).catch((function(e){console.log(e)})),a(!1)}))},bodyStyle:{maxHeight:700,overflow:"auto"},__source:{fileName:N,lineNumber:53,columnNumber:9}},d.a.createElement(i.a,{form:H,layout:"vertical",name:"userForm",autoComplete:"off",__source:{fileName:N,lineNumber:62,columnNumber:13}},d.a.createElement(i.a.Item,{label:"凭证级别",name:"type",__source:{fileName:N,lineNumber:63,columnNumber:17}},d.a.createElement(f.a,{onChange:function(e){h(e)},__source:{fileName:N,lineNumber:64,columnNumber:21}},d.a.createElement(_,{value:1,__source:{fileName:N,lineNumber:65,columnNumber:25}},"全局凭证"),d.a.createElement(_,{value:2,__source:{fileName:N,lineNumber:66,columnNumber:25}},"项目凭证"))),2===L?d.a.createElement(i.a.Item,{label:"项目作用域",name:"proofList",className:"proofModal-showMatFlow",rules:[{required:!0,message:"请选择项目作用域"}],__source:{fileName:N,lineNumber:71,columnNumber:25}},d.a.createElement(u.a.Group,{__source:{fileName:N,lineNumber:77,columnNumber:29}},y&&y.map((function(e){return d.a.createElement(m.a,{key:e.matFlowId,__source:{fileName:N,lineNumber:80,columnNumber:48}},d.a.createElement(n.a,{__source:{fileName:N,lineNumber:81,columnNumber:53}},d.a.createElement(u.a,{value:e.matFlowId,__source:{fileName:N,lineNumber:82,columnNumber:57}},e.matFlowName)))})))):null,d.a.createElement(i.a.Item,{label:"凭证作用域",name:"proofScope",__source:{fileName:N,lineNumber:92,columnNumber:17}},w?d.a.createElement(f.a,{disabled:w,__source:{fileName:N,lineNumber:95,columnNumber:29}},d.a.createElement(_,{value:2,__source:{fileName:N,lineNumber:96,columnNumber:33}},"Gitee凭证"),d.a.createElement(_,{value:3,__source:{fileName:N,lineNumber:97,columnNumber:33}},"Github凭证")):d.a.createElement(f.a,{__source:{fileName:N,lineNumber:100,columnNumber:29}},d.a.createElement(_,{value:1,__source:{fileName:N,lineNumber:101,columnNumber:33}},"源码凭证"),d.a.createElement(_,{value:5,__source:{fileName:N,lineNumber:102,columnNumber:33}},"部署凭证"))),d.a.createElement(i.a.Item,{label:"凭证名称",name:"proofName",rules:[{required:!0,message:"请输入凭证名称"}],__source:{fileName:N,lineNumber:106,columnNumber:17}},d.a.createElement(l.a,{placeholder:"名称",__source:{fileName:N,lineNumber:111,columnNumber:21}})),d.a.createElement(i.a.Item,{label:"凭证类型",name:"proofType",__source:{fileName:N,lineNumber:113,columnNumber:17}},d.a.createElement(f.a,{placeholder:"选择类型",disabled:w,__source:{fileName:N,lineNumber:114,columnNumber:21}},d.a.createElement(_,{value:"SSH",__source:{fileName:N,lineNumber:115,columnNumber:25}},"SSH"),d.a.createElement(_,{value:"password",__source:{fileName:N,lineNumber:116,columnNumber:25}},"password"))),d.a.createElement(i.a.Item,{shouldUpdate:function(e,o){return e.proofType!==o.proofType},__source:{fileName:N,lineNumber:119,columnNumber:17}},(function(e){return"password"===(0,e.getFieldValue)("proofType")?d.a.createElement(d.a.Fragment,null,d.a.createElement(i.a.Item,{label:"用户名",name:"proofUsername",__source:{fileName:N,lineNumber:123,columnNumber:37}},d.a.createElement(l.a,{disabled:w,__source:{fileName:N,lineNumber:124,columnNumber:41}})),d.a.createElement(i.a.Item,{label:"密码",name:"proofPassword",__source:{fileName:N,lineNumber:126,columnNumber:37}},d.a.createElement(l.a.Password,{disabled:w,__source:{fileName:N,lineNumber:127,columnNumber:41}}))):d.a.createElement(i.a.Item,{name:"proofPassword",label:"私钥",__source:{fileName:N,lineNumber:131,columnNumber:29}},d.a.createElement(l.a.TextArea,{disabled:w,__source:{fileName:N,lineNumber:132,columnNumber:33}}))})),d.a.createElement(i.a.Item,{name:"proofDescribe",label:"描述",__source:{fileName:N,lineNumber:136,columnNumber:17}},d.a.createElement(l.a.TextArea,{__source:{fileName:N,lineNumber:137,columnNumber:21}}))))};p(E,"useForm{[form]}\nuseEffect{}");var w,y,v=E;o.a=v,(w="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(w.register(_,"Option","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js"),w.register(E,"UpdateProof","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js"),w.register(v,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\proof\\components\\updateProof.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a(13)(e))}}]);