(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{278:function(e,t){var r=[],n=[];function a(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var a,i=!0===t.prepend?"prepend":"append",o=void 0!==t.container?t.container:document.querySelector("head"),u=r.indexOf(o);return-1===u&&(u=r.push(o)-1,n[u]={}),void 0!==n[u]&&void 0!==n[u][i]?a=n[u][i]:(a=n[u][i]=function(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}(),"prepend"===i?o.insertBefore(a,o.childNodes[0]):o.appendChild(a)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),a.styleSheet?a.styleSheet.cssText+=e:a.textContent+=e,a}e.exports=a,e.exports.insertCss=a},534:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\emptyText\\EmptyText.js";t.a=function(e){var t=e.title;return a.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:i,lineNumber:13,columnNumber:13}},a.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:i,lineNumber:14,columnNumber:17}},a.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:i,lineNumber:15,columnNumber:21}})),a.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:i,lineNumber:17,columnNumber:17}},t||"暂无数据"))}},535:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(36),a=r(177),i=r(116),o=r(25),u=function(){function e(t,r){var a;if(void 0===t&&(t=""),void 0===r&&(r={}),t instanceof e)return t;"number"==typeof t&&(t=Object(n.d)(t)),this.originalInput=t;var o=Object(i.a)(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(a=r.format)&&void 0!==a?a:o.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},e.prototype.getLuminance=function(){var e=this.toRgb(),t=e.r/255,r=e.g/255,n=e.b/255;return.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(e){return this.a=Object(o.b)(e),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var e=Object(n.h)(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}},e.prototype.toHsvString=function(){var e=Object(n.h)(this.r,this.g,this.b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.v);return 1===this.a?"hsv(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var e=Object(n.g)(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}},e.prototype.toHslString=function(){var e=Object(n.g)(this.r,this.g,this.b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.l);return 1===this.a?"hsl(".concat(t,", ").concat(r,"%, ").concat(a,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(a,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(e){return void 0===e&&(e=!1),Object(n.f)(this.r,this.g,this.b,e)},e.prototype.toHexString=function(e){return void 0===e&&(e=!1),"#"+this.toHex(e)},e.prototype.toHex8=function(e){return void 0===e&&(e=!1),Object(n.j)(this.r,this.g,this.b,this.a,e)},e.prototype.toHex8String=function(e){return void 0===e&&(e=!1),"#"+this.toHex8(e)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb(".concat(e,", ").concat(t,", ").concat(r,")"):"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var e=function(e){return"".concat(Math.round(100*Object(o.a)(e,255)),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var e=function(e){return Math.round(100*Object(o.a)(e,255))};return 1===this.a?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var e="#"+Object(n.f)(this.r,this.g,this.b,!1),t=0,r=Object.entries(a.a);t<r.length;t++){var i=r[t],o=i[0];if(e===i[1])return o}return!1},e.prototype.toString=function(e){var t=Boolean(e);e=null!=e?e:this.format;var r=!1,n=this.a<1&&this.a>=0;return t||!n||!e.startsWith("hex")&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this.a?this.toName():this.toRgbString()},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=Object(o.c)(r.l),new e(r)},e.prototype.brighten=function(t){void 0===t&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),new e(r)},e.prototype.darken=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=Object(o.c)(r.l),new e(r)},e.prototype.tint=function(e){return void 0===e&&(e=10),this.mix("white",e)},e.prototype.shade=function(e){return void 0===e&&(e=10),this.mix("black",e)},e.prototype.desaturate=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=Object(o.c)(r.s),new e(r)},e.prototype.saturate=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=Object(o.c)(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new e(r)},e.prototype.mix=function(t,r){void 0===r&&(r=50);var n=this.toRgb(),a=new e(t).toRgb(),i=r/100;return new e({r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a})},e.prototype.analogous=function(t,r){void 0===t&&(t=6),void 0===r&&(r=30);var n=this.toHsl(),a=360/r,i=[this];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,i.push(new e(n));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){void 0===t&&(t=6);for(var r=this.toHsv(),n=r.h,a=r.s,i=r.v,o=[],u=1/t;t--;)o.push(new e({h:n,s:a,v:i})),i=(i+u)%1;return o},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),n=new e(t).toRgb();return new e({r:n.r+(r.r-n.r)*r.a,g:n.g+(r.g-n.g)*r.a,b:n.b+(r.b-n.b)*r.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),n=r.h,a=[this],i=360/t,o=1;o<t;o++)a.push(new e({h:(n+o*i)%360,s:r.s,l:r.l}));return a},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}()},536:function(e,t,r){"use strict";r(41);var n=r(42),a=r(0),i=r.n(a),o=r(118),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\breadcrumb\\Breadcrumb.js";t.a=function(e){var t=e.firstItem,r=e.secondItem,a=e.goBack;return i.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:u,lineNumber:16,columnNumber:13}},i.a.createElement(n.default,{__source:{fileName:u,lineNumber:17,columnNumber:17}},a&&i.a.createElement(o.default,{onClick:a,style:{color:"#0063FF"},__source:{fileName:u,lineNumber:18,columnNumber:32}}),i.a.createElement("span",{className:r?"breadcrumbContent-span":"",__source:{fileName:u,lineNumber:19,columnNumber:21}},t),r&&i.a.createElement("span",{__source:{fileName:u,lineNumber:22,columnNumber:36}}," /   ",r)))}},544:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return s}));r(548);var n=r(546),a=r(0),i=r.n(a),o=r(478),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\loading\\Loading.js",c=function(e){return i.a.createElement("div",{className:"mf-loading",__source:{fileName:u,lineNumber:14,columnNumber:9}},i.a.createElement("div",{className:"mf-shape",__source:{fileName:u,lineNumber:15,columnNumber:13}}),i.a.createElement("div",{className:"mf-shape",__source:{fileName:u,lineNumber:16,columnNumber:13}}),i.a.createElement("div",{className:"mf-shape",__source:{fileName:u,lineNumber:17,columnNumber:13}}))},l=function(e){var t=e.size,r=e.type,a=e.title;return"table"===r?i.a.createElement("div",{style:{textAlign:"center",padding:"25px 0"},__source:{fileName:u,lineNumber:33,columnNumber:17}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:u,lineNumber:34,columnNumber:21}})):i.a.createElement("div",{className:"mf-spin-loading",__source:{fileName:u,lineNumber:38,columnNumber:13}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:u,lineNumber:39,columnNumber:17}}),a&&i.a.createElement("div",{className:"spin-loading-title",__source:{fileName:u,lineNumber:41,columnNumber:30}},a))},s=function(e){var t=e.title;return i.a.createElement("div",{className:"mf-server-loading",__source:{fileName:u,lineNumber:55,columnNumber:9}},i.a.createElement("div",{className:"server-loading-content",__source:{fileName:u,lineNumber:56,columnNumber:13}},i.a.createElement(n.a,{indicator:i.a.createElement(o.a,{style:{fontSize:14},__source:{fileName:u,lineNumber:57,columnNumber:34}}),__source:{fileName:u,lineNumber:57,columnNumber:17}}),i.a.createElement("span",{className:"loading-content-title",__source:{fileName:u,lineNumber:58,columnNumber:17}},t)))}},555:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(118),o=r(280),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\page\\Page.js";t.a=function(e){var t=e.pageCurrent,r=e.changPage,n=e.page;return!n||n.total<2?null:a.a.createElement("div",{className:"mf-page",__source:{fileName:u,lineNumber:51,columnNumber:13}},1===t?a.a.createElement("span",{className:"mf-page-ban",__source:{fileName:u,lineNumber:19,columnNumber:17}},a.a.createElement(i.default,{__source:{fileName:u,lineNumber:20,columnNumber:21}})):a.a.createElement("span",{className:"mf-page-allow",onClick:function(){return r(t-1)},__source:{fileName:u,lineNumber:25,columnNumber:17}},a.a.createElement(i.default,{__source:{fileName:u,lineNumber:26,columnNumber:21}})),a.a.createElement("span",{className:"mf-page-current",__source:{fileName:u,lineNumber:53,columnNumber:17}},t),a.a.createElement("span",{__source:{fileName:u,lineNumber:54,columnNumber:17}}," / ",(null==n?void 0:n.total)||1),t===n.total?a.a.createElement("span",{className:"mf-page-ban",__source:{fileName:u,lineNumber:36,columnNumber:17}},a.a.createElement(o.default,{__source:{fileName:u,lineNumber:37,columnNumber:21}})):a.a.createElement("span",{className:"mf-page-allow",onClick:function(){return r(t+1)},__source:{fileName:u,lineNumber:42,columnNumber:17}},a.a.createElement(o.default,{__source:{fileName:u,lineNumber:43,columnNumber:21}})))}},957:function(e,t,r){"use strict";r.r(t);r(102);var n=r(101),a=r(0),i=r.n(a),o=r(27),u=r(88),c=r(536),l=r(534),s=r(544),m=r(555),b="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\pipeline\\test\\Test.js";function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){u=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(o.inject)("testOnStore","pipelineStore")(Object(o.observer)((function(e){var t=e.testOnStore,r=e.pipelineStore.pipeline,o=t.findAllRelevance,p=t.testList,d=t.deleteRelevance,g=N(Object(a.useState)({pageSize:10,currentPage:1}),1)[0],v=N(Object(a.useState)({total:1}),2),_=v[0],y=v[1],E=N(Object(a.useState)({pageParam:g}),2),w=E[0],O=E[1],j=N(Object(a.useState)(!0),2),S=j[0],M=j[1],x=N(Object(a.useState)(null),2),k=x[0],H=x[1];Object(a.useEffect)((function(){o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({pipelineId:r.id},w)).then((function(e){var t;y({total:(null===(t=e.data)||void 0===t?void 0:t.totalPage)||1}),M(!1)}))}),[w]);var P=function(e){e.stopPropagation(),H(null)};return S?i.a.createElement(s.c,{size:"large",title:"加载中……",__source:{fileName:b,lineNumber:123,columnNumber:16}}):i.a.createElement("div",{className:"test",__source:{fileName:b,lineNumber:127,columnNumber:9}},i.a.createElement("div",{className:"test-content mf-home-limited mf",__source:{fileName:b,lineNumber:128,columnNumber:13}},i.a.createElement(c.a,{firstItem:"测试",__source:{fileName:b,lineNumber:129,columnNumber:17}}),i.a.createElement("div",{className:"test-table",__source:{fileName:b,lineNumber:130,columnNumber:17}},p&&p.length>0?p.map((function(e){var t=e.object;return i.a.createElement(n.default,{key:e.relevanceId,title:2===e.status&&"该测试记录详情已被删除",visible:k===e.relevanceId,onOpenChange:function(){!function(e){if(2===e.status)H(k?null:e.relevanceId)}(e)},__source:{fileName:b,lineNumber:136,columnNumber:33}},i.a.createElement("div",{className:"test-table-item",style:{backgroundColor:2===e.status?"#f0f0f0":"#ffffff"},onClick:function(){return function(e){if(2!==e.status)return window.open(e.object.url)}(e)},onMouseOver:function(){return function(e){if(2===e.status)return H(e.relevanceId)}(e)},onMouseLeave:function(){return H(null)},__source:{fileName:b,lineNumber:142,columnNumber:37}},i.a.createElement("div",{className:"test-item-name",__source:{fileName:b,lineNumber:149,columnNumber:41}},(null==t?void 0:t.testPlanName)||"--"),i.a.createElement("div",{className:"test-item-total",__source:{fileName:b,lineNumber:150,columnNumber:41}},i.a.createElement("div",{__source:{fileName:b,lineNumber:151,columnNumber:45}},"用例数"),i.a.createElement("div",{__source:{fileName:b,lineNumber:152,columnNumber:45}},(null==t?void 0:t.total)||"--")),i.a.createElement("div",{className:"test-item-passNum",__source:{fileName:b,lineNumber:154,columnNumber:41}},i.a.createElement("div",{__source:{fileName:b,lineNumber:155,columnNumber:45}},"成功数"),i.a.createElement("div",{__source:{fileName:b,lineNumber:156,columnNumber:45}},(null==t?void 0:t.passNum)||"--")),i.a.createElement("div",{className:"test-item-failNum",__source:{fileName:b,lineNumber:158,columnNumber:41}},i.a.createElement("div",{__source:{fileName:b,lineNumber:159,columnNumber:45}},"失败数"),i.a.createElement("div",{__source:{fileName:b,lineNumber:160,columnNumber:45}},(null==t?void 0:t.failNum)||"--")),i.a.createElement("div",{className:"test-item-passRate",__source:{fileName:b,lineNumber:162,columnNumber:41}},i.a.createElement("div",{__source:{fileName:b,lineNumber:163,columnNumber:45}},"成功率"),i.a.createElement("div",{__source:{fileName:b,lineNumber:164,columnNumber:45}},(null==t?void 0:t.passRate)||"--")),i.a.createElement("div",{className:"test-item-time",__source:{fileName:b,lineNumber:166,columnNumber:41}},i.a.createElement("div",{__source:{fileName:b,lineNumber:167,columnNumber:45}},"时间"),i.a.createElement("div",{__source:{fileName:b,lineNumber:168,columnNumber:45}},(null==e?void 0:e.time)||"--")),i.a.createElement("div",{className:"test-item-action",__source:{fileName:b,lineNumber:170,columnNumber:41}},i.a.createElement("span",{onClick:function(t){return function(e,t){e.stopPropagation(),d(t.relevanceId).then((function(e){if(0===e.code)return O({pageParam:g})}))}(t,e)},onMouseOver:function(e){return P(e)},onMouseLeave:function(e){return P(e)},__source:{fileName:b,lineNumber:171,columnNumber:45}},i.a.createElement(n.default,{title:"删除",__source:{fileName:b,lineNumber:176,columnNumber:49}},i.a.createElement(u.default,{__source:{fileName:b,lineNumber:177,columnNumber:53}}))))))})):i.a.createElement(l.a,{title:"暂无测试记录",__source:{fileName:b,lineNumber:186,columnNumber:25}}),i.a.createElement(m.a,{pageCurrent:w.pageParam.currentPage,changPage:function(e){O({pageParam:{pageSize:10,currentPage:e}})},page:_,__source:{fileName:b,lineNumber:189,columnNumber:21}}))))})))}}]);