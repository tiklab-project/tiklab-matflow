(window.webpackJsonp=window.webpackJsonp||[]).push([[24,10],{111:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!u(c))return!1;var s=e[c],m=t[c];if(!1===(o=r?r.call(n,s,m,c):void 0)||void 0===o&&s!==m)return!1}return!0}},288:function(e,t){var r=[],n=[];function o(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,i=!0===t.prepend?"prepend":"append",a=void 0!==t.container?t.container:document.querySelector("head"),u=r.indexOf(a);return-1===u&&(u=r.push(a)-1,n[u]={}),void 0!==n[u]&&void 0!==n[u][i]?o=n[u][i]:(o=n[u][i]=function(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}(),"prepend"===i?a.insertBefore(o,a.childNodes[0]):a.appendChild(o)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),o.styleSheet?o.styleSheet.cssText+=e:o.textContent+=e,o}e.exports=o,e.exports.insertCss=o},542:function(e,t,r){"use strict";r(36);var n=r(24),o=r(0),i=r.n(o),a="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\btn\\Btn.js";t.a=function(e){var t=e.icon,r=e.type,o=e.title,u=e.onClick,l=e.isMar,c=e.children;return i.a.createElement("div",{className:"mf-btn ".concat(r?"mf-btn-".concat(r):""," ").concat(l?"mf-btn-mar":""),onClick:u,__source:{fileName:a,lineNumber:19,columnNumber:9}},c||i.a.createElement(n.default,{__source:{fileName:a,lineNumber:22,columnNumber:21}},t&&i.a.createElement("span",{className:"mf-btn-icon",__source:{fileName:a,lineNumber:24,columnNumber:38}},t),o))}},544:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\emptyText\\EmptyText.js";t.a=function(e){var t=e.title;return o.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:i,lineNumber:13,columnNumber:13}},o.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:i,lineNumber:14,columnNumber:17}},o.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:i,lineNumber:15,columnNumber:21}})),o.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:i,lineNumber:17,columnNumber:17}},t||"暂无数据"))}},545:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(49),o=r(191),i=r(132),a=r(33),u=function(){function e(t,r){var o;if(void 0===t&&(t=""),void 0===r&&(r={}),t instanceof e)return t;"number"==typeof t&&(t=Object(n.d)(t)),this.originalInput=t;var a=Object(i.a)(t);this.originalInput=t,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=r.format)&&void 0!==o?o:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},e.prototype.getLuminance=function(){var e=this.toRgb(),t=e.r/255,r=e.g/255,n=e.b/255;return.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(e){return this.a=Object(a.b)(e),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var e=Object(n.h)(this.r,this.g,this.b);return{h:360*e.h,s:e.s,v:e.v,a:this.a}},e.prototype.toHsvString=function(){var e=Object(n.h)(this.r,this.g,this.b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.v);return 1===this.a?"hsv(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var e=Object(n.g)(this.r,this.g,this.b);return{h:360*e.h,s:e.s,l:e.l,a:this.a}},e.prototype.toHslString=function(){var e=Object(n.g)(this.r,this.g,this.b),t=Math.round(360*e.h),r=Math.round(100*e.s),o=Math.round(100*e.l);return 1===this.a?"hsl(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(e){return void 0===e&&(e=!1),Object(n.f)(this.r,this.g,this.b,e)},e.prototype.toHexString=function(e){return void 0===e&&(e=!1),"#"+this.toHex(e)},e.prototype.toHex8=function(e){return void 0===e&&(e=!1),Object(n.j)(this.r,this.g,this.b,this.a,e)},e.prototype.toHex8String=function(e){return void 0===e&&(e=!1),"#"+this.toHex8(e)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb(".concat(e,", ").concat(t,", ").concat(r,")"):"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var e=function(e){return"".concat(Math.round(100*Object(a.a)(e,255)),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var e=function(e){return Math.round(100*Object(a.a)(e,255))};return 1===this.a?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var e="#"+Object(n.f)(this.r,this.g,this.b,!1),t=0,r=Object.entries(o.a);t<r.length;t++){var i=r[t],a=i[0];if(e===i[1])return a}return!1},e.prototype.toString=function(e){var t=Boolean(e);e=null!=e?e:this.format;var r=!1,n=this.a<1&&this.a>=0;return t||!n||!e.startsWith("hex")&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this.a?this.toName():this.toRgbString()},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.l+=t/100,r.l=Object(a.c)(r.l),new e(r)},e.prototype.brighten=function(t){void 0===t&&(t=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),new e(r)},e.prototype.darken=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.l-=t/100,r.l=Object(a.c)(r.l),new e(r)},e.prototype.tint=function(e){return void 0===e&&(e=10),this.mix("white",e)},e.prototype.shade=function(e){return void 0===e&&(e=10),this.mix("black",e)},e.prototype.desaturate=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.s-=t/100,r.s=Object(a.c)(r.s),new e(r)},e.prototype.saturate=function(t){void 0===t&&(t=10);var r=this.toHsl();return r.s+=t/100,r.s=Object(a.c)(r.s),new e(r)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(t){var r=this.toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,new e(r)},e.prototype.mix=function(t,r){void 0===r&&(r=50);var n=this.toRgb(),o=new e(t).toRgb(),i=r/100;return new e({r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a})},e.prototype.analogous=function(t,r){void 0===t&&(t=6),void 0===r&&(r=30);var n=this.toHsl(),o=360/r,i=[this];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,i.push(new e(n));return i},e.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new e(t)},e.prototype.monochromatic=function(t){void 0===t&&(t=6);for(var r=this.toHsv(),n=r.h,o=r.s,i=r.v,a=[],u=1/t;t--;)a.push(new e({h:n,s:o,v:i})),i=(i+u)%1;return a},e.prototype.splitcomplement=function(){var t=this.toHsl(),r=t.h;return[this,new e({h:(r+72)%360,s:t.s,l:t.l}),new e({h:(r+216)%360,s:t.s,l:t.l})]},e.prototype.onBackground=function(t){var r=this.toRgb(),n=new e(t).toRgb();return new e({r:n.r+(r.r-n.r)*r.a,g:n.g+(r.g-n.g)*r.a,b:n.b+(r.b-n.b)*r.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(t){for(var r=this.toHsl(),n=r.h,o=[this],i=360/t,a=1;a<t;a++)o.push(new e({h:(n+a*i)%360,s:r.s,l:r.l}));return o},e.prototype.equals=function(t){return this.toRgbString()===new e(t).toRgbString()},e}()},551:function(e,t,r){"use strict";r(36);var n=r(24),o=r(0),i=r.n(o),a=r(134),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\breadcrumb\\Breadcrumb.js";t.a=function(e){var t=e.firstItem,r=e.secondItem,o=e.goBack;return i.a.createElement("div",{className:"breadcrumbContent",__source:{fileName:u,lineNumber:16,columnNumber:13}},i.a.createElement(n.default,{__source:{fileName:u,lineNumber:17,columnNumber:17}},o&&i.a.createElement(a.default,{onClick:o,style:{color:"#0063FF"},__source:{fileName:u,lineNumber:18,columnNumber:32}}),i.a.createElement("span",{className:r?"breadcrumbContent-span":"",__source:{fileName:u,lineNumber:19,columnNumber:21}},t),r&&i.a.createElement("span",{__source:{fileName:u,lineNumber:22,columnNumber:36}}," /   ",r)))}},552:function(e,t,r){"use strict";function n(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function i(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function a(e,t,r,n,o,i,a,u){return i<e&&a>t||i>e&&a<t?0:i<=e&&u<=r||a>=t&&u>=r?i-e-n:a>t&&u<r||i<e&&u>r?a-t+o:0}var u=function(e,t){var r=window,o=t.scrollMode,u=t.block,l=t.inline,c=t.boundary,s=t.skipOverflowHiddenElements,m="function"==typeof c?c:function(e){return e!==c};if(!n(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,b=[],d=e;n(d)&&m(d);){if((d=d.parentElement)===f){b.push(d);break}null!=d&&d===document.body&&i(d)&&!i(document.documentElement)||null!=d&&i(d,s)&&b.push(d)}for(var h=r.visualViewport?r.visualViewport.width:innerWidth,p=r.visualViewport?r.visualViewport.height:innerHeight,N=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),g=y.height,_=y.width,w=y.top,E=y.right,O=y.bottom,j=y.left,k="start"===u||"nearest"===u?w:"end"===u?O:w+g/2,S="center"===l?j+_/2:"end"===l?E:j,x=[],H=0;H<b.length;H++){var M=b[H],I=M.getBoundingClientRect(),C=I.height,A=I.width,T=I.top,D=I.right,P=I.bottom,R=I.left;if("if-needed"===o&&w>=0&&j>=0&&O<=p&&E<=h&&w>=T&&O<=P&&j>=R&&E<=D)return x;var V=getComputedStyle(M),F=parseInt(V.borderLeftWidth,10),W=parseInt(V.borderTopWidth,10),B=parseInt(V.borderRightWidth,10),L=parseInt(V.borderBottomWidth,10),U=0,q=0,z="offsetWidth"in M?M.offsetWidth-M.clientWidth-F-B:0,Y="offsetHeight"in M?M.offsetHeight-M.clientHeight-W-L:0;if(f===M)U="start"===u?k:"end"===u?k-p:"nearest"===u?a(v,v+p,p,W,L,v+k,v+k+g,g):k-p/2,q="start"===l?S:"center"===l?S-h/2:"end"===l?S-h:a(N,N+h,h,F,B,N+S,N+S+_,_),U=Math.max(0,U+v),q=Math.max(0,q+N);else{U="start"===u?k-T-W:"end"===u?k-P+L+Y:"nearest"===u?a(T,P,C,W,L+Y,k,k+g,g):k-(T+C/2)+Y/2,q="start"===l?S-R-F:"center"===l?S-(R+A/2)+z/2:"end"===l?S-D+B+z:a(R,D,A,F,B+z,S,S+_,_);var $=M.scrollLeft,X=M.scrollTop;k+=X-(U=Math.max(0,Math.min(X+U,M.scrollHeight-C+Y))),S+=$-(q=Math.max(0,Math.min($+q,M.scrollWidth-A+z)))}x.push({el:M,top:U,left:q})}return x};function l(e){return e===Object(e)&&0!==Object.keys(e).length}t.a=function(e,t){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(l(t)&&"function"==typeof t.behavior)return t.behavior(r?u(e,t):[]);if(r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:l(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,i=e.left;n.scroll&&r?n.scroll({top:o,left:i,behavior:t}):(n.scrollTop=o,n.scrollLeft=i)}))}(u(e,n),n.behavior)}}},553:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return c}));var n=r(114),o=r.n(n);o()().format("YYYY-MM-DD HH:mm:ss"),o()().format("HH:mm");var i=function(e){for(var t=window.location.search.substring(1).split("&"),r=0;r<t.length;r++){var n=t[r].split("=");if(n[0]===e)return n[1]}return!1},a=function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120},u=function(e){var t=parseInt(e/86400),r=parseInt(e%86400/3600),n=parseInt(e%3600/60),o=parseInt(e%60);return t>=1?t+" 天 "+r+" 时 "+n+" 分 "+o+" 秒":r>=1?r+" 时 "+n+" 分 "+o+" 秒":n>=1?n+" 分 "+o+" 秒":o+" 秒"},l=function(e,t){return t?e.split("/index/pipeline/"+t):e.split("/")},c=function(e){return{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}}},558:function(e,t,r){"use strict";r(290);var n=r(204),o=r(0),i=r.n(o),a=r(296),u=r(6),l="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\profile\\Profile.js";t.a=function(e){var t=e.userInfo,r=void 0===t?void 0:t,o=r||Object(u.getUser)();return i.a.createElement("div",{className:"tiklab-profile",__source:{fileName:l,lineNumber:26,columnNumber:13}},o.avatar&&"null"!==o.avatar?i.a.createElement(n.default,{src:o.avatar,__source:{fileName:l,lineNumber:12,columnNumber:20}}):o.nickname&&"null"!==o.nickname?i.a.createElement(n.default,{__source:{fileName:l,lineNumber:16,columnNumber:20}},o.nickname.substring(0,1)):o.name&&"null"!==o.name?i.a.createElement(n.default,{__source:{fileName:l,lineNumber:20,columnNumber:20}},o.name.substring(0,1)):i.a.createElement(n.default,{size:32,icon:i.a.createElement(a.default,{__source:{fileName:l,lineNumber:23,columnNumber:40}}),__source:{fileName:l,lineNumber:23,columnNumber:16}}))}},565:function(e,t,r){var n={"./es":546,"./es-do":547,"./es-do.js":547,"./es-mx":548,"./es-mx.js":548,"./es-us":549,"./es-us.js":549,"./es.js":546,"./zh-cn":550,"./zh-cn.js":550};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=565},569:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(483),a=r(542),u="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\modalTitle\\ModalTitle.js";t.a=function(e){var t=e.setVisible,r=e.title;return o.a.createElement("div",{className:"modalTitle",__source:{fileName:u,lineNumber:17,columnNumber:9}},o.a.createElement("div",{className:"modalTitle-title",__source:{fileName:u,lineNumber:18,columnNumber:13}},o.a.createElement("span",{__source:{fileName:u,lineNumber:19,columnNumber:17}},r)),o.a.createElement("div",{className:"modalTitle-icon",__source:{fileName:u,lineNumber:21,columnNumber:13}},o.a.createElement(a.a,{title:o.a.createElement(i.a,{style:{fontSize:16},__source:{fileName:u,lineNumber:23,columnNumber:28}}),type:"text",onClick:function(){return t(!1)},__source:{fileName:u,lineNumber:22,columnNumber:17}})))}},572:function(e,t,r){"use strict";r(602);var n=r(601),o=(r(74),r(39)),i=r(0),a=r.n(i),u=r(151),l=r(97),c="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\list\\Listaction.js";t.a=function(e){var t=e.edit,r=e.del;return a.a.createElement("span",{className:"mf-listAction",__source:{fileName:c,lineNumber:14,columnNumber:12}},a.a.createElement(o.default,{title:"修改",__source:{fileName:c,lineNumber:15,columnNumber:17}},a.a.createElement("span",{onClick:t,className:"edit",style:{cursor:"pointer",marginRight:15},__source:{fileName:c,lineNumber:16,columnNumber:21}},a.a.createElement(u.default,{__source:{fileName:c,lineNumber:17,columnNumber:25}}))),a.a.createElement(o.default,{title:"删除",__source:{fileName:c,lineNumber:20,columnNumber:17}},a.a.createElement(n.a,{placement:"topRight",title:"你确定删除吗",onConfirm:r,okText:"确定",cancelText:"取消",__source:{fileName:c,lineNumber:21,columnNumber:21}},a.a.createElement("span",{className:"del",style:{cursor:"pointer"},__source:{fileName:c,lineNumber:28,columnNumber:25}},a.a.createElement(l.default,{__source:{fileName:c,lineNumber:29,columnNumber:29}})))))}},594:function(e,t,r){"use strict";r(52);var n=r(26),o=(r(81),r(23)),i=(r(119),r(45)),a=r(0),u=r.n(a),l="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\authCommon\\AuthType.js";t.a=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(o.default.Item,{label:"认证类型",name:"authType",__source:{fileName:l,lineNumber:14,columnNumber:13}},u.a.createElement(i.default,{__source:{fileName:l,lineNumber:15,columnNumber:17}},u.a.createElement(i.default.Option,{value:1,__source:{fileName:l,lineNumber:16,columnNumber:21}},"username&password"),u.a.createElement(i.default.Option,{value:2,__source:{fileName:l,lineNumber:17,columnNumber:21}},"私钥"))),u.a.createElement(o.default.Item,{shouldUpdate:function(e,t){return e.authType!==t.authType},__source:{fileName:l,lineNumber:20,columnNumber:13}},(function(e){return 1===(0,e.getFieldValue)("authType")?u.a.createElement(u.a.Fragment,null,u.a.createElement(o.default.Item,{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}],__source:{fileName:l,lineNumber:26,columnNumber:29}},u.a.createElement(n.default,{__source:{fileName:l,lineNumber:30,columnNumber:30}})),u.a.createElement(o.default.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}],__source:{fileName:l,lineNumber:32,columnNumber:29}},u.a.createElement(n.default.Password,{__source:{fileName:l,lineNumber:36,columnNumber:30}}))):u.a.createElement(o.default.Item,{label:"私钥",name:"privateKey",rules:[{required:!0,message:"请输入私钥"}],__source:{fileName:l,lineNumber:40,columnNumber:25}},u.a.createElement(n.default.TextArea,{autoSize:{minRows:2,maxRows:8},__source:{fileName:l,lineNumber:44,columnNumber:26}}))})))}},605:function(e,t,r){},610:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){var t=e.text,r=e.colors;return o.a.createElement("span",{className:"mf-listname-icon ".concat(r?"mf-icon-".concat(r):"mf-icon-1"),__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\list\\ListIcon.js",lineNumber:13,columnNumber:13}},t&&t.substring(0,1).toUpperCase())}},611:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\common\\tabs\\Tabs.js";t.a=function(e){var t=e.tabLis,r=e.type,n=e.onClick;return o.a.createElement("div",{className:"mf-tabs",__source:{fileName:i,lineNumber:15,columnNumber:9}},t.map((function(e){return o.a.createElement("div",{key:e.id,className:"mf-tab ".concat(r===e.id?"mf-active-tab":""),onClick:function(){return n(e)},__source:{fileName:i,lineNumber:18,columnNumber:21}},e.title)})))}},678:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(98),a=r(28),u=r(542),l=(r(291),r(205)),c=(r(74),r(39)),s=(r(52),r(26)),m=(r(119),r(45)),f=(r(81),r(23)),b=r(485),d=r(594),h=r(553),p=r(569),N="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\authHost\\component\\HostModal.js";function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=function(e){var t=e.visible,r=e.setVisible,i=e.createAuthHost,a=e.formValue,_=e.updateAuthHost,w=g(f.default.useForm(),1)[0],E=g(Object(n.useState)(1),2),O=(E[0],E[1]),j=g(Object(n.useState)(0),2),k=j[0],S=j[1];Object(n.useEffect)((function(){return S(Object(h.b)()),function(){window.onresize=null}}),[k]),window.onresize=function(){S(Object(h.b)())},Object(n.useEffect)((function(){t&&(""===a?w.resetFields():w.setFieldsValue(a))}),[t]);var x=o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{onClick:function(){return r(!1)},title:"取消",isMar:!0,__source:{fileName:N,lineNumber:70,columnNumber:13}}),o.a.createElement(u.a,{onClick:function(){w.validateFields().then((function(e){if(a){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({hostId:a.hostId},e);_(t)}else i(e);r(!1)}))},title:"确定",type:"primary",__source:{fileName:N,lineNumber:71,columnNumber:13}}));return o.a.createElement(l.default,{visible:t,onCancel:function(){return r(!1)},closable:!1,footer:x,style:{height:k,top:60},bodyStyle:{padding:0},destroyOnClose:!0,className:"mf",__source:{fileName:N,lineNumber:76,columnNumber:9}},o.a.createElement("div",{className:"resources-modal",__source:{fileName:N,lineNumber:86,columnNumber:13}},o.a.createElement("div",{className:"resources-modal-up",__source:{fileName:N,lineNumber:87,columnNumber:17}},o.a.createElement(p.a,{setVisible:r,title:a?"修改":"添加",__source:{fileName:N,lineNumber:88,columnNumber:21}})),o.a.createElement("div",{className:"resources-modal-content",__source:{fileName:N,lineNumber:93,columnNumber:17}},o.a.createElement(f.default,{form:w,layout:"vertical",autoComplete:"off",initialValues:{type:31,authPublic:1,authWay:1,authType:2},__source:{fileName:N,lineNumber:94,columnNumber:21}},o.a.createElement(f.default.Item,{name:"type",label:"授权类型",__source:{fileName:N,lineNumber:100,columnNumber:25}},o.a.createElement(m.default,{onChange:function(e){O(e)},disabled:!0,__source:{fileName:N,lineNumber:104,columnNumber:29}},o.a.createElement(m.default.Option,{value:31,__source:{fileName:N,lineNumber:109,columnNumber:33}},"普通"),o.a.createElement(m.default.Option,{value:2,__source:{fileName:N,lineNumber:110,columnNumber:33}},"aliyun"),o.a.createElement(m.default.Option,{value:3,__source:{fileName:N,lineNumber:111,columnNumber:33}},"腾讯云主机"))),o.a.createElement(f.default.Item,{name:"authPublic",label:"认证权限",__source:{fileName:N,lineNumber:114,columnNumber:25}},o.a.createElement(m.default,{__source:{fileName:N,lineNumber:115,columnNumber:29}},o.a.createElement(m.default.Option,{value:1,__source:{fileName:N,lineNumber:116,columnNumber:33}},"全局"),o.a.createElement(m.default.Option,{value:2,__source:{fileName:N,lineNumber:117,columnNumber:33}},"私有"))),o.a.createElement(f.default.Item,{name:"name",label:"名称",rules:[{required:!0,message:"名称不能空"},Object(h.a)("名称")],__source:{fileName:N,lineNumber:120,columnNumber:25}},o.a.createElement(s.default,{__source:{fileName:N,lineNumber:125,columnNumber:29}})),o.a.createElement(f.default.Item,{label:o.a.createElement(o.a.Fragment,null,"Ip地址",o.a.createElement(c.default,{title:"Ip地址",__source:{fileName:N,lineNumber:128,columnNumber:42}},o.a.createElement(b.a,{style:{paddingLeft:5,cursor:"pointer"},__source:{fileName:N,lineNumber:129,columnNumber:33}}))),name:"ip",rules:[{required:!0,message:"Ip地址不能为空"},{pattern:/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)/,message:"请输入正确的Ip地址"}],__source:{fileName:N,lineNumber:127,columnNumber:25}},o.a.createElement(s.default,{__source:{fileName:N,lineNumber:140,columnNumber:29}})),o.a.createElement(f.default.Item,{label:"端口",name:"port",rules:[{required:!0,message:"端口不能为空"},{pattern:/^[0-9]*$/,message:"端口只包含整数"}],__source:{fileName:N,lineNumber:142,columnNumber:25}},o.a.createElement(s.default,{__source:{fileName:N,lineNumber:152,columnNumber:29}})),o.a.createElement(d.a,{__source:{fileName:N,lineNumber:154,columnNumber:25}})))))},E="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\authHost\\component\\HostAddBtn.js";function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=Object(a.inject)("hostStore")(Object(a.observer)((function(e){var t=e.hostStore,r=e.isConfig,a=e.type,l=t.createAuthHost,c=t.modalVisible,s=t.setModalVisible,m=t.formValue,f=t.setFormValue,b=t.updateAuthHost,d=O(Object(n.useState)(!1),2),h=d[0],p=d[1],N=function(){switch(f(""),a){case 52:p(!0);break;default:s(!0)}};return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(u.a,{type:"row",onClick:N,title:"添加",icon:o.a.createElement(i.default,{__source:{fileName:E,lineNumber:68,columnNumber:31}}),__source:{fileName:E,lineNumber:64,columnNumber:21}}):o.a.createElement(u.a,{onClick:N,type:"primary",title:"添加配置",icon:o.a.createElement(i.default,{__source:{fileName:E,lineNumber:75,columnNumber:31}}),__source:{fileName:E,lineNumber:71,columnNumber:21}}),o.a.createElement(w,{visible:function(){switch(a){case 52:return h;default:return c}}(),setVisible:function(){switch(a){case 52:return p;default:return s}}(),createAuthHost:l,formValue:m,updateAuthHost:b,__source:{fileName:E,lineNumber:79,columnNumber:13}}))})))},925:function(e,t,r){"use strict";r.r(t);r(41);var n=r(31),o=(r(36),r(24)),i=r(0),a=r.n(i),u=r(28),l=r(551),c=r(544),s=r(610),m=r(572),f=r(558),b=r(611),d=r(678),h=(r(605),"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\authHost\\component\\Host.js");function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(u.inject)("hostStore")(Object(u.observer)((function(e){var t=e.hostStore,r=t.findAllAuthHostList,u=t.hostList,N=t.hostFresh,v=t.setModalVisible,y=t.setFormValue,g=t.deleteAuthHost,_=p(Object(i.useState)(0),2),w=_[0],E=_[1];Object(i.useEffect)((function(){r(w)}),[N,w]);var O=[{title:"名称",dataIndex:"name",key:"name",width:"20%",ellipsis:!0,render:function(e){return a.a.createElement("span",{__source:{fileName:h,lineNumber:86,columnNumber:25}},a.a.createElement(s.a,{text:e,__source:{fileName:h,lineNumber:87,columnNumber:29}}),a.a.createElement("span",{__source:{fileName:h,lineNumber:88,columnNumber:29}},e))}},{title:"ip地址",dataIndex:"ip",key:"ip",width:"10%",ellipsis:!0},{title:"端口",dataIndex:"port",key:"port",width:"8%",ellipsis:!0},{title:"认证类型",dataIndex:"authType",key:"authType",width:"10%",ellipsis:!0,render:function(e){switch(e){case 1:return"username&password";case 2:return"私钥"}}},{title:"创建人",dataIndex:["user","nickname"],key:"user",width:"10%",ellipsis:!0,render:function(e,t){return a.a.createElement(o.default,{__source:{fileName:h,lineNumber:128,columnNumber:25}},a.a.createElement(f.a,{userInfo:t.user,__source:{fileName:h,lineNumber:129,columnNumber:29}}),e)}},{title:"权限",dataIndex:"authPublic",key:"authPublic",width:"8%",ellipsis:!0,render:function(e){switch(e){case 1:return"全局";case 2:return"私有"}}},{title:"创建时间",dataIndex:"createTime",key:"createTime",width:"15%",ellipsis:!0},{title:"操作",dataIndex:"action",key:"action",width:"9%",ellipsis:!0,render:function(e,t){return a.a.createElement(m.a,{edit:function(){return function(e,t){v(!0),y(t)}(0,t)},del:function(){return function(e,t){g(t.hostId)}(0,t)},__source:{fileName:h,lineNumber:163,columnNumber:25}})}}];return a.a.createElement("div",{className:"resources mf-home-limited mf",__source:{fileName:h,lineNumber:172,columnNumber:9}},a.a.createElement("div",{className:"resources-upper",__source:{fileName:h,lineNumber:173,columnNumber:13}},a.a.createElement(l.a,{firstItem:"主机配置",__source:{fileName:h,lineNumber:174,columnNumber:17}}),a.a.createElement(d.a,{__source:{fileName:h,lineNumber:175,columnNumber:17}})),a.a.createElement(b.a,{tabLis:[{id:0,title:"全部"},{id:31,title:"普通"},{id:2,title:"aliyun"},{id:3,title:"腾讯云主机"}],type:w,onClick:function(e){E(e.id)},__source:{fileName:h,lineNumber:177,columnNumber:13}}),a.a.createElement("div",{className:"resources-content",__source:{fileName:h,lineNumber:182,columnNumber:13}},a.a.createElement(n.default,{columns:O,dataSource:u,rowKey:function(e){return e.hostId},pagination:!1,locale:{emptyText:a.a.createElement(c.a,{title:"暂无主机配置",__source:{fileName:h,lineNumber:188,columnNumber:41}})},__source:{fileName:h,lineNumber:183,columnNumber:17}})))})))},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return N}));var n,o=r(0),i=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=o.createContext(null),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return o.createElement(a.Provider,{value:this.props.store},this.props.children)},t}(o.Component),l=r(111),c=r.n(l),s=r(206),m=r.n(s),f=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),b=function(){return(b=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var d=function(){return{}};function h(e,t){void 0===t&&(t={});var r=!!e,n=e||d;return function(i){var u=function(t){function u(e,r){var o=t.call(this,e,r)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var e=n(o.store.getState(),o.props);o.setState({subscribed:e})}},o.store=o.context,o.state={subscribed:n(o.store.getState(),e),store:o.store,props:e},o}return f(u,t),u.getDerivedStateFromProps=function(t,r){return e&&2===e.length&&t!==r.props?{subscribed:n(r.store.getState(),t),props:t}:{props:t}},u.prototype.componentDidMount=function(){this.trySubscribe()},u.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},u.prototype.shouldComponentUpdate=function(e,t){return!c()(this.props,e)||!c()(this.state.subscribed,t.subscribed)},u.prototype.trySubscribe=function(){r&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},u.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},u.prototype.render=function(){var e=b(b(b({},this.props),this.state.subscribed),{store:this.store});return o.createElement(i,b({},e,{ref:this.props.miniStoreForwardedRef}))},u.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(i)+")",u.contextType=a,u}(o.Component);if(t.forwardRef){var l=o.forwardRef((function(e,t){return o.createElement(u,b({},e,{miniStoreForwardedRef:t}))}));return m()(l,i)}return m()(u,i)}}var p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function N(e){var t=e,r=[];return{setState:function(e){t=p(p({},t),e);for(var n=0;n<r.length;n++)r[n]()},getState:function(){return t},subscribe:function(e){return r.push(e),function(){var t=r.indexOf(e);r.splice(t,1)}}}}}}]);