(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{170:function(e,a,r){"use strict";r.r(a),function(e){r(891);var l,t=r(208),n=(r(327),r(329)),o=r(8),c=r.n(o),i=(r(213),r(212)),m=r(83),u=r.n(m),s=r(1),d=r.n(s),b=(r(808),r(885)),f=r(9),p=r(58),N=r(15),g="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\homePage\\components\\dynamicDetails.js";function h(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,l)}return r}function y(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?h(Object(r),!0).forEach((function(a){c()(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&l(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},$=function(e){var a=e.homePageStore,r=a.findUserAction,l=a.dynamicList,o=a.page,c=Object(s.useState)(1),m=u()(c,2),p=m[0],N=m[1],h=Object(f.getUser)().userId;Object(s.useEffect)((function(){r({userId:h,page:1,pageSize:15})}),[]);return d.a.createElement("div",{className:"dynamic",__source:{fileName:g,lineNumber:48,columnNumber:9}},d.a.createElement("div",{className:"dynamic-top",__source:{fileName:g,lineNumber:49,columnNumber:13}},d.a.createElement("div",{className:"dynamic-top-title",__source:{fileName:g,lineNumber:50,columnNumber:17}},"全部动态"),d.a.createElement("div",{__source:{fileName:g,lineNumber:51,columnNumber:17}},d.a.createElement(i.a,{onClick:function(){return e.history.push("/index/home")},__source:{fileName:g,lineNumber:52,columnNumber:21}},"返回"))),d.a.createElement(t.a,{locale:b.a,__source:{fileName:g,lineNumber:57,columnNumber:13}},d.a.createElement(n.b,{size:"large",bordered:!0,pagination:y(y({},o),{},{onChange:function(e){!function(e){var a={userId:h,page:e,pageSize:15};N(e),r(a)}(e)},hideOnSinglePage:!0,showQuickJumper:!0,showSizeChanger:!1}),locale:{emptyText:d.a.createElement(s.Fragment,{__source:{fileName:g,lineNumber:69,columnNumber:29}},d.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:g,lineNumber:70,columnNumber:33}},d.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:g,lineNumber:71,columnNumber:37}})),d.a.createElement("div",{__source:{fileName:g,lineNumber:73,columnNumber:33}},"没有数据"))},dataSource:l,renderItem:function(a,r){return d.a.createElement(n.b.Item,{__source:{fileName:g,lineNumber:77,columnNumber:49}},d.a.createElement("div",{className:"dynamic-bottom-listHeader",__source:{fileName:g,lineNumber:78,columnNumber:25}},d.a.createElement("div",{__source:{fileName:g,lineNumber:79,columnNumber:29}},d.a.createElement("span",{__source:{fileName:g,lineNumber:80,columnNumber:33}},r+1+15*(p-1),"、用户"),d.a.createElement("span",{className:"name",onClick:function(){return function(a){a.id===h?e.history.push("/index/system"):e.history.push("/index/system/list")}(a.user)},__source:{fileName:g,lineNumber:81,columnNumber:33}},a.user&&a.user.name),d.a.createElement("span",{__source:{fileName:g,lineNumber:84,columnNumber:33}},a.massage),d.a.createElement("span",{className:"name",onClick:function(){return function(a){e.history.push("/index/task/".concat(a.matflowName,"/work"))}(a.matFlow)},__source:{fileName:g,lineNumber:85,columnNumber:33}},a.matFlow&&a.matFlow.matflowName),d.a.createElement("span",{__source:{fileName:g,lineNumber:88,columnNumber:33}},a.news)),d.a.createElement("div",{__source:{fileName:g,lineNumber:90,columnNumber:29}},a.createTime)))},__source:{fileName:g,lineNumber:58,columnNumber:17}})))};_($,"useState{[pageNumber,setPageNumber](1)}\nuseEffect{}");var v,P,w=Object(N.o)(Object(p.b)("homePageStore")(Object(p.c)($)));a.default=w,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register($,"DynamicDetails","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\homePage\\components\\dynamicDetails.js"),v.register(w,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\homePage\\components\\dynamicDetails.js")),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&P(e)}.call(this,r(13)(e))},808:function(e,a,r){},885:function(e,a,r){"use strict";var l=r(486),t=r(16),n={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"},o={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]},c={lang:Object(t.a)({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},n),timePickerLocale:Object(t.a)({},o)};c.lang.ok="确定";var i=c,m=i,u="${label}不是一个有效的${type}",s={locale:"zh-cn",Pagination:l.a,DatePicker:i,TimePicker:o,Calendar:m,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckall:"全选",filterSearchPlaceholder:"在筛选项中搜索",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"}};a.a=s},891:function(e,a,r){}}]);