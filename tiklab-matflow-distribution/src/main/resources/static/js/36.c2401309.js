(window.webpackJsonp=window.webpackJsonp||[]).push([[36,10],{234:function(t,e,n){"use strict";n.r(e),function(t){var r,o=n(0),i=n.n(o),a=n(762),c=n(596),u=n(136),s=n(12),l=n(25),f=n(2),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\container\\project.js";function h(){return(h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(t);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},m=function(t){var e=t.route,n=t.matFlowStore,r=t.configDataStore,s=t.match,l=n.findAllMatFlowStatus,p=n.lastPath,m=n.setLastPath,v=n.setMatFlowId,y=n.setMatFlowName,b=r.isPrompt,g=r.setIsPrompt,w=s.params.matFlowName,_=Object(f.e)().userId;Object(o.useEffect)((function(){y(w),l(_).then((function(t){var e=t.data;0===t.code&&e&&e&&e.map((function(t){t.matFlowName===w&&v(t.matFlowId)}))}))}),[w]),Object(o.useEffect)((function(){return function(){return v("")}}),[]);return i.a.createElement("div",{className:"project",__source:{fileName:d,lineNumber:47,columnNumber:9}},i.a.createElement(a.a,h({},t,{lastPath:p,setLastPath:m,matFlowName:w,__source:{fileName:d,lineNumber:48,columnNumber:13}})),i.a.createElement("div",{className:"project-content",style:{marginLeft:80},__source:{fileName:d,lineNumber:54,columnNumber:13}},Object(u.a)(e.routes)),i.a.createElement(c.a,{isPrompt:b,confirmLeave:function(e){e!=="/home/task/".concat(w,"/config")&&e&&setTimeout((function(){t.history.push(e)})),g(!1)},__source:{fileName:d,lineNumber:57,columnNumber:13}}))};p(m,"useEffect{}\nuseEffect{}");var v,y,b=Object(l.h)(Object(s.b)("matFlowStore","configDataStore")(Object(s.c)(m)));e.default=b,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(m,"Project","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\container\\project.js"),v.register(b,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\container\\project.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(t)}.call(this,n(22)(t))},324:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},327:function(t,e,n){"use strict";(function(t){var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function a(){n&&(n=!1,t()),r&&u()}function c(){i(a)}function u(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);o=t}return u}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),s=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},f=y(0,0,0,0);function d(t){return parseFloat(t)||0}function h(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return f;var r=l(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=d(i)}return e}(r),i=o.left+o.right,a=o.top+o.bottom,c=d(r.width),u=d(r.height);if("border-box"===r.boxSizing&&(Math.round(c+i)!==e&&(c-=h(r,"left","right")+i),Math.round(u+a)!==n&&(u-=h(r,"top","bottom")+a)),!function(t){return t===l(t).document.documentElement}(t)){var s=Math.round(c+i)-e,p=Math.round(u+a)-n;1!==Math.abs(s)&&(c-=s),1!==Math.abs(p)&&(u-=p)}return y(o.left,o.top,c,u)}var m="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function v(t){return r?m(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):p(t):f}function y(t,e,n,r){return{x:t,y:e,width:n,height:r}}var b=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=v(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,r,o,i,a,c,u,l=(r=(n=e).x,o=n.y,i=n.width,a=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(c.prototype),s(u,{x:r,y:o,width:i,height:a,top:o,right:r+i,bottom:a+o,left:r}),u);s(this,{target:t,contentRect:l})},w=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new b(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),_="undefined"!=typeof WeakMap?new WeakMap:new n,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new w(e,n,this);_.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=_.get(this))[t].apply(e,arguments)}}));var N=void 0!==o.ResizeObserver?o.ResizeObserver:O;e.a=N}).call(this,n(83))},334:function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c;n.d(e,"a",(function(){return rt})),n.d(e,"b",(function(){return ot}));var u={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function s(){if(void 0!==c)return c;c="";var t=document.createElement("p").style;for(var e in u)e+"Transform"in t&&(c=e);return c}function l(){return s()?"".concat(s(),"TransitionProperty"):"transitionProperty"}function f(){return s()?"".concat(s(),"Transform"):"transform"}function d(t,e){var n=l();n&&(t.style[n]=e,"transitionProperty"!==n&&(t.style.transitionProperty=e))}function h(t,e){var n=f();n&&(t.style[n]=e,"transform"!==n&&(t.style.transform=e))}var p,m=/matrix\((.*)\)/,v=/matrix3d\((.*)\)/;function y(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function b(t,e,n){var r=n;if("object"!==i(e))return void 0!==r?("number"==typeof r&&(r="".concat(r,"px")),void(t.style[e]=r)):p(t,e);for(var o in e)e.hasOwnProperty(o)&&b(t,o,e[o])}function g(t,e){var n=t["page".concat(e?"Y":"X","Offset")],r="scroll".concat(e?"Top":"Left");if("number"!=typeof n){var o=t.document;"number"!=typeof(n=o.documentElement[r])&&(n=o.body[r])}return n}function w(t){return g(t)}function _(t){return g(t,!0)}function O(t){var e=function(t){var e,n,r,o=t.ownerDocument,i=o.body,a=o&&o.documentElement;return e=t.getBoundingClientRect(),n=Math.floor(e.left),r=Math.floor(e.top),{left:n-=a.clientLeft||i.clientLeft||0,top:r-=a.clientTop||i.clientTop||0}}(t),n=t.ownerDocument,r=n.defaultView||n.parentWindow;return e.left+=w(r),e.top+=_(r),e}function N(t){return null!=t&&t==t.window}function j(t){return N(t)?t.document:9===t.nodeType?t:t.ownerDocument}var x=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),E=/^(top|right|bottom|left)$/,L="left";function k(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function S(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function M(t,e,n){"static"===b(t,"position")&&(t.style.position="relative");var r=-999,o=-999,i=k("left",n),a=k("top",n),c=S(i),u=S(a);"left"!==i&&(r=999),"top"!==a&&(o=999);var s,f="",h=O(t);("left"in e||"top"in e)&&(f=(s=t).style.transitionProperty||s.style[l()]||"",d(t,"none")),"left"in e&&(t.style[c]="",t.style[i]="".concat(r,"px")),"top"in e&&(t.style[u]="",t.style[a]="".concat(o,"px")),y(t);var p=O(t),m={};for(var v in e)if(e.hasOwnProperty(v)){var g=k(v,n),w="left"===v?r:o,_=h[v]-p[v];m[g]=g===v?w+_:w-_}b(t,m),y(t),("left"in e||"top"in e)&&d(t,f);var N={};for(var j in e)if(e.hasOwnProperty(j)){var x=k(j,n),E=e[j]-h[j];N[x]=j===x?m[x]+E:m[x]-E}b(t,N)}function P(t,e){var n=O(t),r=function(t){var e=window.getComputedStyle(t,null),n=e.getPropertyValue("transform")||e.getPropertyValue(f());if(n&&"none"!==n){var r=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(r[12]||r[4],0),y:parseFloat(r[13]||r[5],0)}}return{x:0,y:0}}(t),o={x:r.x,y:r.y};"left"in e&&(o.x=r.x+e.left-n.left),"top"in e&&(o.y=r.y+e.top-n.top),function(t,e){var n=window.getComputedStyle(t,null),r=n.getPropertyValue("transform")||n.getPropertyValue(f());if(r&&"none"!==r){var o,i=r.match(m);if(i)(o=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,o[5]=e.y,h(t,"matrix(".concat(o.join(","),")"));else(o=r.match(v)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,o[13]=e.y,h(t,"matrix3d(".concat(o.join(","),")"))}else h(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,o)}function H(t,e){for(var n=0;n<t.length;n++)e(t[n])}function T(t){return"border-box"===p(t,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(t,e,n){var r=n,o="",i=j(t);return(r=r||i.defaultView.getComputedStyle(t,null))&&(o=r.getPropertyValue(e)||r[e]),o}:function(t,e){var n=t.currentStyle&&t.currentStyle[e];if(x.test(n)&&!E.test(e)){var r=t.style,o=r[L],i=t.runtimeStyle[L];t.runtimeStyle[L]=t.currentStyle[L],r[L]="fontSize"===e?"1em":n||0,n=r.pixelLeft+"px",r[L]=o,t.runtimeStyle[L]=i}return""===n?"auto":n});var G=["margin","border","padding"];function A(t,e,n){var r,o={},i=t.style;for(r in e)e.hasOwnProperty(r)&&(o[r]=i[r],i[r]=e[r]);for(r in n.call(t),e)e.hasOwnProperty(r)&&(i[r]=o[r])}function F(t,e,n){var r,o,i,a=0;for(o=0;o<e.length;o++)if(r=e[o])for(i=0;i<n.length;i++){var c=void 0;c="border"===r?"".concat(r).concat(n[i],"Width"):r+n[i],a+=parseFloat(p(t,c))||0}return a}var W={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function C(t,e,n){var r=n;if(N(t))return"width"===e?W.viewportWidth(t):W.viewportHeight(t);if(9===t.nodeType)return"width"===e?W.docWidth(t):W.docHeight(t);var o="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?Math.floor(t.getBoundingClientRect().width):Math.floor(t.getBoundingClientRect().height),a=T(t),c=0;(null==i||i<=0)&&(i=void 0,(null==(c=p(t,e))||Number(c)<0)&&(c=t.style[e]||0),c=parseFloat(c)||0),void 0===r&&(r=a?1:-1);var u=void 0!==i||a,s=i||c;return-1===r?u?s-F(t,["border","padding"],o):c:u?1===r?s:s+(2===r?-F(t,["border"],o):F(t,["margin"],o)):c+F(t,G.slice(r),o)}H(["Width","Height"],(function(t){W["doc".concat(t)]=function(e){var n=e.document;return Math.max(n.documentElement["scroll".concat(t)],n.body["scroll".concat(t)],W["viewport".concat(t)](n))},W["viewport".concat(t)]=function(e){var n="client".concat(t),r=e.document,o=r.body,i=r.documentElement[n];return"CSS1Compat"===r.compatMode&&i||o&&o[n]||i}}));var D={position:"absolute",visibility:"hidden",display:"block"};function R(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r,o=e[0];return 0!==o.offsetWidth?r=C.apply(void 0,e):A(o,D,(function(){r=C.apply(void 0,e)})),r}function I(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}H(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);W["outer".concat(e)]=function(e,n){return e&&R(e,t,n?0:1)};var n="width"===t?["Left","Right"]:["Top","Bottom"];W[t]=function(e,r){var o=r;return void 0!==o?e?(T(e)&&(o+=F(e,["padding","border"],n)),b(e,t,o)):void 0:e&&R(e,t,-1)}}));var z={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:j,offset:function(t,e,n){if(void 0===e)return O(t);!function(t,e,n){if(n.ignoreShake){var r=O(t),o=r.left.toFixed(0),i=r.top.toFixed(0),a=e.left.toFixed(0),c=e.top.toFixed(0);if(o===a&&i===c)return}n.useCssRight||n.useCssBottom?M(t,e,n):n.useCssTransform&&f()in document.body.style?P(t,e):M(t,e,n)}(t,e,n||{})},isWindow:N,each:H,css:b,clone:function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(n.overflow[e]=t.overflow[e]);return n},mix:I,getWindowScrollLeft:function(t){return w(t)},getWindowScrollTop:function(t){return _(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)z.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};I(z,W);var B=z.getParent;function V(t){if(z.isWindow(t)||9===t.nodeType)return null;var e,n=z.getDocument(t).body,r=z.css(t,"position");if(!("fixed"===r||"absolute"===r))return"html"===t.nodeName.toLowerCase()?null:B(t);for(e=B(t);e&&e!==n&&9!==e.nodeType;e=B(e))if("static"!==(r=z.css(e,"position")))return e;return null}var Y=z.getParent;function X(t,e){for(var n={left:0,right:1/0,top:0,bottom:1/0},r=V(t),o=z.getDocument(t),i=o.defaultView||o.parentWindow,a=o.body,c=o.documentElement;r;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===r.clientWidth||r===a||r===c||"visible"===z.css(r,"overflow")){if(r===a||r===c)break}else{var u=z.offset(r);u.left+=r.clientLeft,u.top+=r.clientTop,n.top=Math.max(n.top,u.top),n.right=Math.min(n.right,u.left+r.clientWidth),n.bottom=Math.min(n.bottom,u.top+r.clientHeight),n.left=Math.max(n.left,u.left)}r=V(r)}var s=null;z.isWindow(t)||9===t.nodeType||(s=t.style.position,"absolute"===z.css(t,"position")&&(t.style.position="fixed"));var l=z.getWindowScrollLeft(i),f=z.getWindowScrollTop(i),d=z.viewportWidth(i),h=z.viewportHeight(i),p=c.scrollWidth,m=c.scrollHeight,v=window.getComputedStyle(a);if("hidden"===v.overflowX&&(p=i.innerWidth),"hidden"===v.overflowY&&(m=i.innerHeight),t.style&&(t.style.position=s),e||function(t){if(z.isWindow(t)||9===t.nodeType)return!1;var e=z.getDocument(t),n=e.body,r=null;for(r=Y(t);r&&r!==n&&r!==e;r=Y(r)){if("fixed"===z.css(r,"position"))return!0}return!1}(t))n.left=Math.max(n.left,l),n.top=Math.max(n.top,f),n.right=Math.min(n.right,l+d),n.bottom=Math.min(n.bottom,f+h);else{var y=Math.max(p,l+d);n.right=Math.min(n.right,y);var b=Math.max(m,f+h);n.bottom=Math.min(n.bottom,b)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function q(t){var e,n,r;if(z.isWindow(t)||9===t.nodeType){var o=z.getWindow(t);e={left:z.getWindowScrollLeft(o),top:z.getWindowScrollTop(o)},n=z.viewportWidth(o),r=z.viewportHeight(o)}else e=z.offset(t),n=z.outerWidth(t),r=z.outerHeight(t);return e.width=n,e.height=r,e}function $(t,e){var n=e.charAt(0),r=e.charAt(1),o=t.width,i=t.height,a=t.left,c=t.top;return"c"===n?c+=i/2:"b"===n&&(c+=i),"c"===r?a+=o/2:"r"===r&&(a+=o),{left:a,top:c}}function J(t,e,n,r,o){var i=$(e,n[1]),a=$(t,n[0]),c=[a.left-i.left,a.top-i.top];return{left:Math.round(t.left-c[0]+r[0]-o[0]),top:Math.round(t.top-c[1]+r[1]-o[1])}}function U(t,e,n){return t.left<n.left||t.left+e.width>n.right}function Z(t,e,n){return t.top<n.top||t.top+e.height>n.bottom}function K(t,e,n){var r=[];return z.each(t,(function(t){r.push(t.replace(e,(function(t){return n[t]})))})),r}function Q(t,e){return t[e]=-t[e],t}function tt(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function et(t,e){t[0]=tt(t[0],e.width),t[1]=tt(t[1],e.height)}function nt(t,e,n,r){var o=n.points,i=n.offset||[0,0],a=n.targetOffset||[0,0],c=n.overflow,u=n.source||t;i=[].concat(i),a=[].concat(a);var s={},l=0,f=X(u,!(!(c=c||{})||!c.alwaysByViewport)),d=q(u);et(i,d),et(a,e);var h=J(d,e,o,i,a),p=z.merge(d,h);if(f&&(c.adjustX||c.adjustY)&&r){if(c.adjustX&&U(h,d,f)){var m=K(o,/[lr]/gi,{l:"r",r:"l"}),v=Q(i,0),y=Q(a,0);(function(t,e,n){return t.left>n.right||t.left+e.width<n.left})(J(d,e,m,v,y),d,f)||(l=1,o=m,i=v,a=y)}if(c.adjustY&&Z(h,d,f)){var b=K(o,/[tb]/gi,{t:"b",b:"t"}),g=Q(i,1),w=Q(a,1);(function(t,e,n){return t.top>n.bottom||t.top+e.height<n.top})(J(d,e,b,g,w),d,f)||(l=1,o=b,i=g,a=w)}l&&(h=J(d,e,o,i,a),z.mix(p,h));var _=U(h,d,f),O=Z(h,d,f);if(_||O){var N=o;_&&(N=K(o,/[lr]/gi,{l:"r",r:"l"})),O&&(N=K(o,/[tb]/gi,{t:"b",b:"t"})),o=N,i=n.offset||[0,0],a=n.targetOffset||[0,0]}s.adjustX=c.adjustX&&_,s.adjustY=c.adjustY&&O,(s.adjustX||s.adjustY)&&(p=function(t,e,n,r){var o=z.clone(t),i={width:e.width,height:e.height};return r.adjustX&&o.left<n.left&&(o.left=n.left),r.resizeWidth&&o.left>=n.left&&o.left+i.width>n.right&&(i.width-=o.left+i.width-n.right),r.adjustX&&o.left+i.width>n.right&&(o.left=Math.max(n.right-i.width,n.left)),r.adjustY&&o.top<n.top&&(o.top=n.top),r.resizeHeight&&o.top>=n.top&&o.top+i.height>n.bottom&&(i.height-=o.top+i.height-n.bottom),r.adjustY&&o.top+i.height>n.bottom&&(o.top=Math.max(n.bottom-i.height,n.top)),z.mix(o,i)}(h,d,f,s))}return p.width!==d.width&&z.css(u,"width",z.width(u)+p.width-d.width),p.height!==d.height&&z.css(u,"height",z.height(u)+p.height-d.height),z.offset(u,{left:p.left,top:p.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:o,offset:i,targetOffset:a,overflow:s}}function rt(t,e,n){var r=n.target||e;return nt(t,q(r),n,!function(t,e){var n=X(t,e),r=q(t);return!n||r.left+r.width<=n.left||r.top+r.height<=n.top||r.left>=n.right||r.top>=n.bottom}(r,n.overflow&&n.overflow.alwaysByViewport))}function ot(t,e,n){var r,i,a=z.getDocument(t),c=a.defaultView||a.parentWindow,u=z.getWindowScrollLeft(c),s=z.getWindowScrollTop(c),l=z.viewportWidth(c),f=z.viewportHeight(c),d={left:r="pageX"in e?e.pageX:u+e.clientX,top:i="pageY"in e?e.pageY:s+e.clientY,width:0,height:0},h=r>=0&&r<=u+l&&i>=0&&i<=s+f,p=[n.points[0],"cc"];return nt(t,d,o(o({},n),{},{points:p}),h)}rt.__getOffsetParent=V,rt.__getVisibleRectForElement=X},335:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(56);function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function h(){}function p(){}function m(){}var v={};s(v,a,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(E([])));b&&b!==e&&n.call(b,a)&&(v=b);var g=m.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var o;this._invoke=function(i,a){function c(){return new e((function(o,c){!function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==Object(r.a)(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=m,s(g,"constructor",m),s(m,"constructor",p),p.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(_.prototype),s(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),s(g,u,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}},596:function(t,e,n){"use strict";(function(t){n(28);var r,o=n(14),i=n(0),a=n.n(i),c=n(25);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(t);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,s,l=function(t){var e=t.isPrompt,n=t.confirmLeave;return a.a.createElement(c.a,{when:e,message:function(t){return!e||(o.a.confirm({title:"有编辑未保存，确定离开吗",okText:"离开",cancelText:"取消",onOk:function(){return n(t.pathname)}}),!1)},__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\prompt\\prompt.js",lineNumber:10,columnNumber:12}})},f=l;e.a=f,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(l,"PromptContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\prompt\\prompt.js"),u.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\prompt\\prompt.js")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(t)}).call(this,n(22)(t))},762:function(t,e,n){"use strict";(function(t){n(222);var r,o=n(221),i=n(0),a=n.n(i),c=(n(763),n(764)),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAside.js";function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(t);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(t){return t},h=function(t){var e=t.matFlowName,n=t.setLastPath,r=t.location.pathname,f=l(Object(i.useState)(""),2),d=f[0],h=f[1];Object(i.useEffect)((function(){0===r.indexOf("/index/task/".concat(e,"/assembly"))&&(r="/index/task/".concat(e,"/assembly")),n(r.substring(r.lastIndexOf("/")+1)),h(r)}),[r]);var p=[{to:"/index/task/".concat(e,"/work"),title:"工作空间",icon:"#icon-gongzuotongji",key:"2",enCode:"AA"},{to:"/index/task/".concat(e,"/config"),title:"配置",icon:"#icon-jiekoupeizhi",key:"3",enCode:"BB"},{to:"/index/task/".concat(e,"/structure"),title:"历史",icon:"#icon-lishijishi",key:"4",enCode:"CC"},{to:"/index/task/".concat(e,"/assembly"),title:"设置",icon:"#icon-shezhi",key:"5",enCode:"DD"}];return a.a.createElement("div",{className:"aside",__source:{fileName:u,lineNumber:77,columnNumber:10}},a.a.createElement("ul",{className:"content",__source:{fileName:u,lineNumber:78,columnNumber:13}},a.a.createElement(c.a,s({},t,{path:r,__source:{fileName:u,lineNumber:79,columnNumber:17}})),function(e){return e&&e.map((function(e){return a.a.createElement(o.a,s({code:e.enCode,key:e.key},t,{__source:{fileName:u,lineNumber:59,columnNumber:17}}),a.a.createElement("li",{key:e.key,className:d===e.to?"aside_content aside_active":"aside_content",onClick:function(){return function(e){t.history.push(e.to)}(e)},__source:{fileName:u,lineNumber:60,columnNumber:21}},a.a.createElement("div",{className:"aside_content_icon",__source:{fileName:u,lineNumber:64,columnNumber:25}},a.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:u,lineNumber:65,columnNumber:29}},a.a.createElement("use",{xlinkHref:e.icon,__source:{fileName:u,lineNumber:66,columnNumber:33}}))),a.a.createElement("div",{className:"aside_content_title",__source:{fileName:u,lineNumber:69,columnNumber:25}},e.title)))}))}(p)))};d(h,'useState{[nav,setNav]("")}\nuseEffect{}');var p,m,v=h;e.a=v,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(h,"ProjectAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAside.js"),p.register(v,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAside.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(t)}).call(this,n(22)(t))},763:function(t,e,n){},764:function(t,e,n){"use strict";(function(t){n(536);var r,o=n(515),i=n(0),a=n.n(i),c=(n(765),n(12)),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js";(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(t);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,f=function(t){var e=t.matFlowStore,n=t.structureListStore,r=t.path,i=e.matFlowName,c=e.matFlowList,s=e.lastPath,l=e.matFlowId,f=n.setState,d=n.setEnforcer,h=n.setMode,p=a.a.createElement("div",{className:"opt",__source:{fileName:u,lineNumber:29,columnNumber:9}},a.a.createElement("div",{className:"opt-content",__source:{fileName:u,lineNumber:30,columnNumber:13}},a.a.createElement("div",{className:"opt-content-title",__source:{fileName:u,lineNumber:31,columnNumber:17}},"流水线名称"),a.a.createElement("div",{className:"opt-content-group",__source:{fileName:u,lineNumber:32,columnNumber:17}},c&&c.map((function(e){return a.a.createElement("div",{onClick:function(){!function(e){i!==e.matFlowName&&(f(0),d(null),h(0),r==="/index/task/".concat(i,"/assembly")?t.history.push("/index/task/".concat(e.matFlowName,"/assembly")):0===r.indexOf("/index/task/".concat(i,"/assembly"))?t.history.push("/index/task/".concat(e.matFlowName,"/assembly/").concat(s)):t.history.push("/index/task/".concat(e.matFlowName,"/").concat(s)))}(e)},key:e.matFlowId,className:"opt-content-group_item ".concat(e.matFlowId===l?"opt-content-active":""),__source:{fileName:u,lineNumber:36,columnNumber:33}},a.a.createElement("span",{__source:{fileName:u,lineNumber:41,columnNumber:37}},e.matFlowName))})))));return a.a.createElement(o.a,{overlay:p,trigger:["click"],overlayStyle:{paddingLeft:10},__source:{fileName:u,lineNumber:54,columnNumber:9}},a.a.createElement("li",{className:"aside_content aside_dropdown",style:{padding:10},onClick:function(t){return t.preventDefault()},__source:{fileName:u,lineNumber:55,columnNumber:13}},a.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:u,lineNumber:59,columnNumber:21}},a.a.createElement("use",{xlinkHref:"#icon-shaixuan1",__source:{fileName:u,lineNumber:60,columnNumber:25}}))))},d=Object(c.b)("structureListStore","matFlowStore")(Object(c.c)(f));e.a=d,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(f,"ProjectAsideOpt","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js"),s.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(t)}).call(this,n(22)(t))},765:function(t,e,n){}}]);