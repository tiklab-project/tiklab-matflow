(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{278:function(e,t){var n=[],r=[];function i(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var i,a=!0===t.prepend?"prepend":"append",o=void 0!==t.container?t.container:document.querySelector("head"),u=n.indexOf(o);return-1===u&&(u=n.push(o)-1,r[u]={}),void 0!==r[u]&&void 0!==r[u][a]?i=r[u][a]:(i=r[u][a]=function(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}(),"prepend"===a?o.insertBefore(i,o.childNodes[0]):o.appendChild(i)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),i.styleSheet?i.styleSheet.cssText+=e:i.textContent+=e,i}e.exports=i,e.exports.insertCss=i},534:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\emptyText\\EmptyText.js";t.a=function(e){var t=e.title;return i.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:a,lineNumber:13,columnNumber:13}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:a,lineNumber:14,columnNumber:17}},i.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:a,lineNumber:15,columnNumber:21}})),i.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:a,lineNumber:17,columnNumber:17}},t||"暂无数据"))}},535:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(36),i=n(177),a=n(116),o=n(25),u=function(){function e(t,n){var i;if(void 0===t&&(t=""),void 0===n&&(n={}),t instanceof e)return t;"number"==typeof t&&(t=Object(r.d)(t)),this.originalInput=t;var o=Object(a.a)(t);this.originalInput=t,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(i=n.format)&&void 0!==i?i:o.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},e.prototype.getLuminance=function(){var e=this.toRgb(),t=e.r/255,n=e.g/255,r=e.b/255;return.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(e){return this.a=Object(o.b)(e),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var e=Object(r.h)(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}},e.prototype.toHsvString=function(){var e=Object(r.h)(this.r,this.g,this.b),t=Math.round(360*e.h),n=Math.round(100*e.s),i=Math.round(100*e.v);return 1===this.a?"hsv(".concat(t,", ").concat(n,"%, ").concat(i,"%)"):"hsva(".concat(t,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var e=Object(r.g)(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}},e.prototype.toHslString=function(){var e=Object(r.g)(this.r,this.g,this.b),t=Math.round(360*e.h),n=Math.round(100*e.s),i=Math.round(100*e.l);return 1===this.a?"hsl(".concat(t,", ").concat(n,"%, ").concat(i,"%)"):"hsla(".concat(t,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(e){return void 0===e&&(e=!1),Object(r.f)(this.r,this.g,this.b,e)},e.prototype.toHexString=function(e){return void 0===e&&(e=!1),"#"+this.toHex(e)},e.prototype.toHex8=function(e){return void 0===e&&(e=!1),Object(r.j)(this.r,this.g,this.b,this.a,e)},e.prototype.toHex8String=function(e){return void 0===e&&(e=!1),"#"+this.toHex8(e)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb(".concat(e,", ").concat(t,", ").concat(n,")"):"rgba(".concat(e,", ").concat(t,", ").concat(n,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var e=function(e){return"".concat(Math.round(100*Object(o.a)(e,255)),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var e=function(e){return Math.round(100*Object(o.a)(e,255))};return 1===this.a?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var e="#"+Object(r.f)(this.r,this.g,this.b,!1),t=0,n=Object.entries(i.a);t<n.length;t++){var a=n[t],o=a[0];if(e===a[1])return o}return!1},e.prototype.toString=function(e){var t=Boolean(e);e=null!=e?e:this.format;var n=!1,r=this.a<1&&this.a>=0;return t||!r||!e.startsWith("hex")&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this.a?this.toName():this.toRgbString()},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.l+=t/100,n.l=Object(o.c)(n.l),new e(n)},e.prototype.brighten=function(t){void 0===t&&(t=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),new e(n)},e.prototype.darken=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.l-=t/100,n.l=Object(o.c)(n.l),new e(n)},e.prototype.tint=function(e){return void 0===e&&(e=10),this.mix("white",e)},e.prototype.shade=function(e){return void 0===e&&(e=10),this.mix("black",e)},e.prototype.desaturate=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.s-=t/100,n.s=Object(o.c)(n.s),new e(n)},e.prototype.saturate=function(t){void 0===t&&(t=10);var n=this.toHsl();return n.s+=t/100,n.s=Object(o.c)(n.s),new e(n)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)},e.prototype.mix=function(t,n){void 0===n&&(n=50);var r=this.toRgb(),i=new e(t).toRgb(),a=n/100;return new e({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},e.prototype.analogous=function(t,n){void 0===t&&(t=6),void 0===n&&(n=30);var r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){void 0===t&&(t=6);for(var n=this.toHsv(),r=n.h,i=n.s,a=n.v,o=[],u=1/t;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+u)%1;return o},e.prototype.splitcomplement=function(){var t=this.toHsl(),n=t.h;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var n=this.toRgb(),r=new e(t).toRgb();return new e({r:r.r+(n.r-r.r)*n.a,g:r.g+(n.g-r.g)*n.a,b:r.b+(n.b-r.b)*n.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var n=this.toHsl(),r=n.h,i=[this],a=360/t,o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}()},544:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return m}));n(548);var r=n(546),i=n(0),a=n.n(i),o=n(478),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\loading\\Loading.js",c=function(e){return a.a.createElement("div",{className:"mf-loading",__source:{fileName:u,lineNumber:14,columnNumber:9}},a.a.createElement("div",{className:"mf-shape",__source:{fileName:u,lineNumber:15,columnNumber:13}}),a.a.createElement("div",{className:"mf-shape",__source:{fileName:u,lineNumber:16,columnNumber:13}}),a.a.createElement("div",{className:"mf-shape",__source:{fileName:u,lineNumber:17,columnNumber:13}}))},l=function(e){var t=e.size,n=e.type,i=e.title;return"table"===n?a.a.createElement("div",{style:{textAlign:"center",padding:"25px 0"},__source:{fileName:u,lineNumber:33,columnNumber:17}},a.a.createElement(r.a,{size:t||"default ",__source:{fileName:u,lineNumber:34,columnNumber:21}})):a.a.createElement("div",{className:"mf-spin-loading",__source:{fileName:u,lineNumber:38,columnNumber:13}},a.a.createElement(r.a,{size:t||"default ",__source:{fileName:u,lineNumber:39,columnNumber:17}}),i&&a.a.createElement("div",{className:"spin-loading-title",__source:{fileName:u,lineNumber:41,columnNumber:30}},i))},m=function(e){var t=e.title;return a.a.createElement("div",{className:"mf-server-loading",__source:{fileName:u,lineNumber:55,columnNumber:9}},a.a.createElement("div",{className:"server-loading-content",__source:{fileName:u,lineNumber:56,columnNumber:13}},a.a.createElement(r.a,{indicator:a.a.createElement(o.a,{style:{fontSize:14},__source:{fileName:u,lineNumber:57,columnNumber:34}}),__source:{fileName:u,lineNumber:57,columnNumber:17}}),a.a.createElement("span",{className:"loading-content-title",__source:{fileName:u,lineNumber:58,columnNumber:17}},t)))}},677:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(28),o=n(280),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\guide\\Guide.js";t.a=Object(a.o)((function(e){var t=e.title,n=e.type,r=e.icon,a=e.pipelineId;return i.a.createElement("div",{className:"mf-guide",__source:{fileName:u,lineNumber:31,columnNumber:9}},i.a.createElement("div",{className:"mf-guide-title",__source:{fileName:u,lineNumber:32,columnNumber:13}},i.a.createElement("span",{className:"mf-guide-title-icon",__source:{fileName:u,lineNumber:33,columnNumber:17}},r&&r),i.a.createElement("span",{className:"mf-guide-title-name",__source:{fileName:u,lineNumber:34,columnNumber:17}},t)),n&&n.total>1&&i.a.createElement("div",{className:"mf-guide-ac",__source:{fileName:u,lineNumber:38,columnNumber:17}},i.a.createElement("span",{onClick:function(){return function(t){switch(t){case"我的待办":e.history.push("/index/agency");break;case"近期动态":e.history.push("/index/dyna");break;case"流水线动态":e.history.push("/index/pipeline/".concat(a,"/survey/dyna"))}}(t)},__source:{fileName:u,lineNumber:39,columnNumber:21}},i.a.createElement(o.default,{__source:{fileName:u,lineNumber:40,columnNumber:25}}))))}))},950:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(27),o=n(499),u=n(500),c=n(501),l=n(534),m="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\list\\AgentList.js",s=function(e){var t=e.agentList;return i.a.createElement("div",{className:"agent-center",__source:{fileName:m,lineNumber:18,columnNumber:9}},t&&t.length>0?t.map((function(e){return function(e){return i.a.createElement("div",{key:e.id,className:"agent-item",__source:{fileName:m,lineNumber:10,columnNumber:13}},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data},__source:{fileName:m,lineNumber:11,columnNumber:17}}),i.a.createElement("div",{className:"agent-item-time",__source:{fileName:m,lineNumber:12,columnNumber:17}},e.createTime))}(e)})):i.a.createElement(l.a,{title:"暂无代办",__source:{fileName:m,lineNumber:23,columnNumber:21}}))},h=n(677),b=n(544),N="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\home\\components\\HomePage.js";function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){u=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=Object(a.inject)("homePageStore")(Object(a.observer)((function(e){var t=e.homePageStore,n=t.findPipelineRecently,a=t.newlyBuild,m=t.findAllOpen,f=t.newlyOpen,d=p(Object(r.useState)(!0),2),g=d[0],v=d[1],_=p(Object(r.useState)(!0),2),y=_[0],E=_[1];Object(r.useEffect)((function(){m(5).then((function(){return v(!1)})),n(6).then((function(){return E(!1)}))}),[]);var x=function(t){var n;return i.a.createElement("div",{key:t.pipelineId,className:"pipelineBuild-item",onClick:function(){return function(t){e.history.push("/index/pipeline/".concat(t.pipelineId,"/structure/").concat(t.instanceId,"/post"))}(t)},__source:{fileName:N,lineNumber:83,columnNumber:9}},i.a.createElement("div",{className:"mf-icon-".concat(null==t?void 0:t.color," pipeline-icon"),__source:{fileName:N,lineNumber:84,columnNumber:13}},null===(n=t.pipelineName)||void 0===n?void 0:n.substring(0,1).toUpperCase()),i.a.createElement("div",{className:"pipelineBuild-item-info",__source:{fileName:N,lineNumber:87,columnNumber:13}},i.a.createElement("div",{className:"pipelineBuild-item-name",__source:{fileName:N,lineNumber:88,columnNumber:17}},t.pipelineName),i.a.createElement("div",{className:"pipelineBuild-item-desc",__source:{fileName:N,lineNumber:89,columnNumber:17}},i.a.createElement("span",{className:"desc-number",__source:{fileName:N,lineNumber:90,columnNumber:21}},"#",t.number),i.a.createElement("span",{className:"desc-lastRunState",__source:{fileName:N,lineNumber:91,columnNumber:21}},function(e){switch(e){case"success":return"成功";case"error":return"失败";case"run":return"运行中";case"halt":return"终止"}}(t.lastRunState)))),i.a.createElement("div",{className:"pipelineBuild-item-execTime",__source:{fileName:N,lineNumber:94,columnNumber:13}},t.execTime))};return i.a.createElement("div",{className:"homePage",__source:{fileName:N,lineNumber:101,columnNumber:9}},i.a.createElement("div",{className:"homePage-content mf-home-limited",__source:{fileName:N,lineNumber:102,columnNumber:13}},i.a.createElement("div",{className:"home-recent",__source:{fileName:N,lineNumber:103,columnNumber:17}},i.a.createElement(h.a,{title:"我最近访问的",icon:i.a.createElement(o.a,{__source:{fileName:N,lineNumber:104,columnNumber:51}}),__source:{fileName:N,lineNumber:104,columnNumber:21}}),g?i.a.createElement(b.c,{type:"table",__source:{fileName:N,lineNumber:107,columnNumber:29}}):f&&f.length>0?i.a.createElement("div",{className:"pipelineRecent-content",__source:{fileName:N,lineNumber:110,columnNumber:29}},f.map((function(t){return function(t){var n,r;return i.a.createElement("div",{className:"pipelineRecent-item",key:null===(n=t.pipeline)||void 0===n?void 0:n.id,onClick:function(){return e.history.push("/index/pipeline/".concat(t.pipeline&&t.pipeline.id,"/survey"))},__source:{fileName:N,lineNumber:46,columnNumber:17}},t&&t.pipeline&&i.a.createElement("div",{className:"pipelineRecent-item-title",__source:{fileName:N,lineNumber:51,columnNumber:17}},i.a.createElement("div",{className:"mf-icon-".concat(t.pipeline.color?t.pipeline.color:0," pipeline-icon"),__source:{fileName:N,lineNumber:52,columnNumber:21}},t.pipeline.name&&t.pipeline.name.substring(0,1).toUpperCase()),i.a.createElement("div",{className:"pipelineRecent-name",__source:{fileName:N,lineNumber:55,columnNumber:21}},null===(r=t.pipeline)||void 0===r?void 0:r.name)),i.a.createElement("div",{className:"pipelineRecent-item-details",__source:{fileName:N,lineNumber:60,columnNumber:13}},i.a.createElement("div",{className:"pipelineRecent-item-detail",__source:{fileName:N,lineNumber:61,columnNumber:17}},i.a.createElement("span",{className:"details-desc",__source:{fileName:N,lineNumber:62,columnNumber:21}},"成功"),i.a.createElement("span",{__source:{fileName:N,lineNumber:63,columnNumber:21}},t.pipelineExecState.successNumber)),i.a.createElement("div",{className:"pipelineRecent-item-detail",__source:{fileName:N,lineNumber:65,columnNumber:17}},i.a.createElement("span",{className:"details-desc",__source:{fileName:N,lineNumber:66,columnNumber:21}},"失败"),i.a.createElement("span",{__source:{fileName:N,lineNumber:67,columnNumber:21}},t.pipelineExecState.errorNumber))))}(t)}))):i.a.createElement(l.a,{title:"暂无访问流水线",__source:{fileName:N,lineNumber:116,columnNumber:29}})),i.a.createElement("div",{className:"home-build",__source:{fileName:N,lineNumber:119,columnNumber:17}},i.a.createElement(h.a,{title:"我最近构建的",icon:i.a.createElement(u.a,{__source:{fileName:N,lineNumber:120,columnNumber:51}}),__source:{fileName:N,lineNumber:120,columnNumber:21}}),y?i.a.createElement(b.c,{type:"table",__source:{fileName:N,lineNumber:123,columnNumber:29}}):a&&a.length>0?i.a.createElement("div",{className:"pipelineBuild-content",__source:{fileName:N,lineNumber:126,columnNumber:33}},a.map((function(e){return x(e)}))):i.a.createElement(l.a,{title:"暂无构建流水线",__source:{fileName:N,lineNumber:132,columnNumber:33}})),i.a.createElement("div",{className:"home-agent",__source:{fileName:N,lineNumber:135,columnNumber:17}},i.a.createElement(h.a,{title:"我的代办",icon:i.a.createElement(c.a,{__source:{fileName:N,lineNumber:136,columnNumber:49}}),__source:{fileName:N,lineNumber:136,columnNumber:21}}),i.a.createElement(s,{agentList:[],__source:{fileName:N,lineNumber:137,columnNumber:21}}))))})))}}]);