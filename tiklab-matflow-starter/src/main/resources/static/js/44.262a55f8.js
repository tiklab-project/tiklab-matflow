(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),s=0;s<a.length;s++){var u=a[s];if(!c(u))return!1;var l=t[u],f=e[u];if(!1===(o=n?n.call(r,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},288:function(t,e){var n=[],r=[];function o(t,e){if(e=e||{},void 0===t)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,a=!0===e.prepend?"prepend":"append",i=void 0!==e.container?e.container:document.querySelector("head"),c=n.indexOf(i);return-1===c&&(c=n.push(i)-1,r[c]={}),void 0!==r[c]&&void 0!==r[c][a]?o=r[c][a]:(o=r[c][a]=function(){var t=document.createElement("style");return t.setAttribute("type","text/css"),t}(),"prepend"===a?i.insertBefore(o,i.childNodes[0]):i.appendChild(o)),65279===t.charCodeAt(0)&&(t=t.substr(1,t.length)),o.styleSheet?o.styleSheet.cssText+=t:o.textContent+=t,o}t.exports=o,t.exports.insertCss=o},544:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(49),o=n(191),a=n(131),i=n(33),c=function(){function t(e,n){var o;if(void 0===e&&(e=""),void 0===n&&(n={}),e instanceof t)return e;"number"==typeof e&&(e=Object(r.d)(e)),this.originalInput=e;var i=Object(a.a)(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=n.format)&&void 0!==o?o:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,n=t.g/255,r=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Object(i.b)(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=Object(r.h)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Object(r.h)(this.r,this.g,this.b),e=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(n,"%, ").concat(o,"%)"):"hsva(".concat(e,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Object(r.g)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Object(r.g)(this.r,this.g,this.b),e=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(n,"%, ").concat(o,"%)"):"hsla(".concat(e,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),Object(r.f)(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),Object(r.j)(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(n,")"):"rgba(".concat(t,", ").concat(e,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*Object(i.a)(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*Object(i.a)(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+Object(r.f)(this.r,this.g,this.b,!1),e=0,n=Object.entries(o.a);e<n.length;e++){var a=n[e],i=a[0];if(t===a[1])return i}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var n=!1,r=this.a<1&&this.a>=0;return e||!r||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=Object(i.c)(n.l),new t(n)},t.prototype.brighten=function(e){void 0===e&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),new t(n)},t.prototype.darken=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=Object(i.c)(n.l),new t(n)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=Object(i.c)(n.s),new t(n)},t.prototype.saturate=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=Object(i.c)(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,new t(n)},t.prototype.mix=function(e,n){void 0===n&&(n=50);var r=this.toRgb(),o=new t(e).toRgb(),a=n/100;return new t({r:(o.r-r.r)*a+r.r,g:(o.g-r.g)*a+r.g,b:(o.b-r.b)*a+r.b,a:(o.a-r.a)*a+r.a})},t.prototype.analogous=function(e,n){void 0===e&&(e=6),void 0===n&&(n=30);var r=this.toHsl(),o=360/n,a=[this];for(r.h=(r.h-(o*e>>1)+720)%360;--e;)r.h=(r.h+o)%360,a.push(new t(r));return a},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var n=this.toHsv(),r=n.h,o=n.s,a=n.v,i=[],c=1/e;e--;)i.push(new t({h:r,s:o,v:a})),a=(a+c)%1;return i},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),r=new t(e).toRgb();return new t({r:r.r+(n.r-r.r)*n.a,g:r.g+(n.g-r.g)*n.a,b:r.b+(n.b-r.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),r=n.h,o=[this],a=360/e,i=1;i<e;i++)o.push(new t({h:(r+i*a)%360,s:n.s,l:n.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}()},564:function(t,e,n){var r={"./es":545,"./es-do":546,"./es-do.js":546,"./es-mx":547,"./es-mx.js":547,"./es-us":548,"./es-us.js":548,"./es.js":545,"./zh-cn":549,"./zh-cn.js":549};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=564},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return b}));var r,o=n(0),a=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=o.createContext(null),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){return o.createElement(i.Provider,{value:this.props.store},this.props.children)},e}(o.Component),s=n(111),u=n.n(s),l=n(205),f=n.n(l),h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var m=function(){return{}};function d(t,e){void 0===e&&(e={});var n=!!t,r=t||m;return function(a){var c=function(e){function c(t,n){var o=e.call(this,t,n)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var t=r(o.store.getState(),o.props);o.setState({subscribed:t})}},o.store=o.context,o.state={subscribed:r(o.store.getState(),t),store:o.store,props:t},o}return h(c,e),c.getDerivedStateFromProps=function(e,n){return t&&2===t.length&&e!==n.props?{subscribed:r(n.store.getState(),e),props:e}:{props:e}},c.prototype.componentDidMount=function(){this.trySubscribe()},c.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},c.prototype.shouldComponentUpdate=function(t,e){return!u()(this.props,t)||!u()(this.state.subscribed,e.subscribed)},c.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},c.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},c.prototype.render=function(){var t=p(p(p({},this.props),this.state.subscribed),{store:this.store});return o.createElement(a,p({},t,{ref:this.props.miniStoreForwardedRef}))},c.displayName="Connect("+function(t){return t.displayName||t.name||"Component"}(a)+")",c.contextType=i,c}(o.Component);if(e.forwardRef){var s=o.forwardRef((function(t,e){return o.createElement(c,p({},t,{miniStoreForwardedRef:e}))}));return f()(s,a)}return f()(c,a)}}var v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function b(t){var e=t,n=[];return{setState:function(t){e=v(v({},e),t);for(var r=0;r<n.length;r++)n[r]()},getState:function(){return e},subscribe:function(t){return n.push(t),function(){var e=n.indexOf(t);n.splice(e,1)}}}}},944:function(t,e,n){"use strict";n.r(e);n(560);var r=n(559),o=(n(41),n(31)),a=(n(738),n(732)),i=(n(36),n(24)),c=(n(68),n(21)),s=n(0),u=n.n(s),l=n(6),f=n(483),h=(n(290),n(203)),p=n(296),m=function(t){var e=t.userInfo,n=void 0===e?void 0:e,r=n||Object(l.getUser)();return u.a.createElement("div",{className:"tiklab-profile"},r.avatar&&"null"!==r.avatar?u.a.createElement(h.default,{src:r.avatar}):r.nickname&&"null"!==r.nickname?u.a.createElement(h.default,null,r.nickname.substring(0,1)):r.name&&"null"!==r.name?u.a.createElement(h.default,null,r.name.substring(0,1)):u.a.createElement(h.default,{size:32,icon:u.a.createElement(p.default,null)}))},d=(n(37),n(22)),v=(n(44),n(20)),b=function(t){var e=t.title,n=t.icon,r=t.children,o=t.style,a=void 0===o?{}:o;return u.a.createElement(d.default,null,u.a.createElement(v.default,{span:24},u.a.createElement("div",{className:"tiklab_title",style:a},u.a.createElement(i.default,null,n,u.a.createElement("span",null,e)),r)))},y=function(t){var e=t.icon,n=t.type,r=t.title,o=t.onClick,a=t.isMar,c=t.children;return u.a.createElement("div",{className:"licence-btn ".concat(n?"licence-btn-".concat(n):""," ").concat(a?"licence-btn-mar":""),onClick:o},c||u.a.createElement(i.default,null,e&&u.a.createElement("span",{className:"licence-btn-icon"},e),r))},g=(n(291),n(204)),w=["children","title","width"];function E(){return(E=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function O(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var S=function(t){var e=t.children,n=t.title,r=t.width,o=O(t,w);return u.a.createElement(g.default,E({title:n,width:r,style:{maxWidth:"calc(100vw - 120px)",maxHeight:"calc(100vh - 120px)",marginRight:"auto",marginLeft:"auto",position:"absolute",top:60,right:0,left:0,height:"100%",display:"flex",flexDirection:"column"},wrapClassName:"tiklab_modal",closable:!1},o),e)},x=(n(118),n(45));function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],s=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */k=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new N(o||[]);return r(i,"_invoke",{value:E(t,n,c)}),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function p(){}function m(){}var d={};s(d,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(_([])));b&&b!==e&&n.call(b,a)&&(d=b);var y=m.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e((function(o,i){!function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==j(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}(r,a,o,i)}))}return o=o?o.then(i,i):i()}})}function E(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return A()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:p,configurable:!0}),p.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),s(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),s(y,c,"Generator"),s(y,a,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function A(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}var M=function(){var t,e=(t=k().mark((function t(e){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Axios.post("/user/user/findUserList",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){A(a,r,o,i,c,"next",t)}function c(t){A(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();var C=function(t){var e,n,r,o=t.visible,a=t.setVisible,i=t.setFreeUserAuth,c=N(Object(s.useState)([]),2),l=c[0],f=c[1],h=N(Object(s.useState)(null),2),p=h[0],m=h[1],d=function(){m(null),f([]),a(!1)},v=(e=function(t){!function(t){M({nickname:t}).then((function(t){t.code||f(t.data)}))}(t)},n=500,function(){for(var t=this,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];r&&clearTimeout(r),r=setTimeout((function(){return e.apply(t,a)}),n)}),b=u.a.createElement(u.a.Fragment,null,u.a.createElement(y,{onClick:d,title:"取消",isMar:!0}),u.a.createElement(y,{onClick:function(){i(p)},title:"激活",type:"primary"}));return u.a.createElement(S,{visible:o,footer:b,onCancel:d,title:"添加产品授权用户",destroyOnClose:!0},u.a.createElement(x.default,{showSearch:!0,value:p,placeholder:"输入用户昵称查询",showArrow:!1,filterOption:!1,onSearch:v,style:{width:"240"},notFoundContent:null,onChange:function(t){m(t)}},l.map((function(t){return u.a.createElement(x.default.Option,{value:t.id,key:t.id},t.nickname)}))))},L=n(113),H=n.n(L);function P(){return(P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function I(t){return function(t){if(Array.isArray(t))return R(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,c=[],s=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(c.push(r.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||Y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(t,e){if(t){if("string"==typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(t,e):void 0}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var D=function(t){var e=t.bgroup,n=void 0===e?"eas":e,h=t.children,p=T(Object(s.useState)(null),2),d=p[0],v=p[1],g=T(Object(s.useState)(null),2),w=g[0],E=g[1],O=T(Object(s.useState)([]),2),x=O[0],j=O[1],N=T(Object(s.useState)({}),2),_=N[0],k=N[1],A=T(Object(s.useState)([]),2),M=A[0],L=A[1],Y=T(Object(s.useState)(!1),2),R=Y[0],D=Y[1],F=T(Object(s.useState)(!1),2),U=F[0],z=F[1],G=T(Object(s.useState)(!1),2),V=G[0],B=G[1],W=T(Object(s.useState)(!1),2),J=W[0],K=(W[1],window.location.origin);Object(s.useEffect)((function(){q(),$()}),[]);var q=function(){l.Axios.post("/version/getVersion").then((function(t){if(0===t.code){if(k(t.data),localStorage.setItem(l.LOCALSTORAGE_KEY.VERSION_INFO,JSON.stringify(t.data)),1===t.data.release)return;Q(),X()}}))},$=function(){l.Axios.post("/appAuthorization/findAllProductAuth").then((function(t){0===t.code&&L(t.data)}))},Q=function(){l.Axios.post("/licence/findUseLicence").then((function(t){0===t.code&&t.data&&E(t.data),6e3===t.code&&c.default.error(t.msg)}))},X=function(){l.Axios.post("/licence/findAllLicence").then((function(t){0===t.code&&v(t.data)}))},Z={name:"file",action:K+("/"===K.substring(K.length-1,K.length)?"licence/import":"/licence/import"),onChange:function(t){var e=I(t.fileList);if(e=(e=e.slice(-1)).map((function(t){return t.response&&(t.url=t.response.url),t})),j(e),t.file.status,"done"===t.file.status){var n=t.file;return 0===n.response.code?(setTimeout((function(){j([]),q(),$()}),1e3),c.default.success("licence导入成功")):c.default.error("licence导入失败：".concat(n.response.msg))}if("error"===t.file.status)return c.default.error("licence导入失败，请重新上传")}},tt=function(t){var e={user:{id:t}};l.Axios.post("/appAuthorization/createProductAuthUser",e).then((function(t){0===t.code?$():c.default.error(t.msg)}))},et=[{title:"昵称",dataIndex:["user","nickname"],key:["user","nickname"],width:"30%",ellipsis:!0,render:function(t,e){return u.a.createElement(i.default,null,u.a.createElement(m,{userInfo:e})," ",t)}},{title:"过期时间",dataIndex:"expiresTime",key:"expiresTime",width:"30%",ellipsis:!0,render:function(t){return t?H()(t).format("YYYY-MM-DD HH:mm:ss"):"不限"}},{title:"状态",dataIndex:"state",key:"state",width:"25%",ellipsis:!0,render:function(t){return 1===t?u.a.createElement("span",{style:{color:"var(--tiklab-blue)"}},"已激活"):u.a.createElement("span",{style:{color:"#ff0000"}},"未激活")}},{title:"操作",render:function(t,e){if(1===e.type)return null;var n=e.id,r=e.user;return u.a.createElement(u.a.Fragment,null,2===e.state&&u.a.createElement("span",{className:"tailab_productauth-action",onClick:function(){return tt(r.id)}},"激活"),u.a.createElement("span",{className:"tailab_productauth-action",onClick:function(){return r.id,t=n,(e=new FormData).append("id",t),void l.Axios.post("/appAuthorization/deleteProductAuthUser",e).then((function(t){0===t.code?$():c.default.error(t.msg)}));var t,e}},"移除"))}}];return u.a.createElement(r.a,{spinning:J,tip:"导入licence中..."},u.a.createElement("div",{className:"tailab_version"},u.a.createElement("div",{className:"tailab_version_container"},u.a.createElement(b,{title:"版本与许可证"},u.a.createElement("div",{className:"tailab_version_up_btn"},u.a.createElement(a.a,P({},Z,{fileList:x}),u.a.createElement(y,{isMar:2===_.release&&w},"导入licence")),2===_.release&&w&&u.a.createElement(u.a.Fragment,null,u.a.createElement(y,{onClick:function(){return B(!0)}},"历史"),u.a.createElement(S,{visible:V,footer:null,onCancel:function(){return B(!1)},destroyOnClose:!0,width:800},u.a.createElement("div",{className:"info-item-title-te-modal"},u.a.createElement("div",null,"更多详情"),u.a.createElement("div",{onClick:function(){return B(!1)}},u.a.createElement(f.a,null))),u.a.createElement("div",{className:"info-item-title-te-modal-info"},u.a.createElement("div",{className:"te-modal-info-item"},u.a.createElement("div",null,"生效时间"),u.a.createElement("div",null,"过期时间"),u.a.createElement("div",null,"用户数"),u.a.createElement("div",null,"状态")),d&&d.map((function(t,e){return u.a.createElement("div",{key:e,className:"te-modal-info-item"},u.a.createElement("div",null,H()(t.expiryTime).format("YYYY-MM-DD HH:mm:ss")),u.a.createElement("div",null,H()(t.issuedTime).format("YYYY-MM-DD HH:mm:ss")),u.a.createElement("div",null,t.userNum>0?t.userNum:"无限制"),u.a.createElement("div",null,1===t.state&&"已失效",2===t.state&&u.a.createElement("span",{className:"te-modal-info-item-blue"},"生效中"),3===t.state&&"未生效"))}))))))),u.a.createElement("div",{className:"tailab_version_title2"},"版本信息"),u.a.createElement("div",{className:"tailab_version-info"},u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"应用名称："),function(t){switch(t){case"postin":return"PostIn";case"teamwire":return"TeamWire";case"teston":return"TestOn";case"kanass":return"Kanass";case"matflow":return"MatFlow";default:return"EAS"}}(n)),_&&u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"版本类型："),1===_.release?"社区版":"企业版","（",u.a.createElement("span",{className:"info-item-title-te",onClick:function(){return z(!0)}},"企业版特性"),"）",u.a.createElement(S,{visible:U,footer:null,onCancel:function(){return z(!1)},destroyOnClose:!0,width:800},u.a.createElement("div",{className:"info-item-title-te-modal"},u.a.createElement("div",null,"企业版特性"),u.a.createElement("div",{onClick:function(){return z(!1)}},u.a.createElement(f.a,null))),h)),2===_.release&&w?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"状态："),_.expired?w.tryApply?u.a.createElement("span",{className:"state-red"},"试用已过期"):u.a.createElement("span",{className:"state-red"},"订阅已过期"):w.tryApply?u.a.createElement("span",{className:"state-blue"},"试用中"):u.a.createElement("span",{className:"state-blue"},"订阅中")),u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"购买人："),w.userName),u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"用户数："),w.userNum>0?w.userNum+"人":"无限制"),u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"生效时间："),H()(w.expiryTime).format("YYYY-MM-DD HH:mm:ss")),u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"过期时间："),H()(w.issuedTime).format("YYYY-MM-DD HH:mm:ss"))):u.a.createElement("div",{className:"tailab_version-info-item"},u.a.createElement("span",{className:"info-item-title"},"试用企业版："),u.a.createElement("span",{className:"info-item-title-try",onClick:function(){window.open("http://tiklab.net/info/gatherInfo?code=".concat(n))}},"免费试用"),u.a.createElement("span",{className:"info-item-title-te",onClick:function(){window.open("http://tiklab.net/account/subscribe/subscribeList")}},"订阅")),u.a.createElement("div",{className:"tailab_productauth"},u.a.createElement("div",{className:"tailab_productauth_info"},u.a.createElement("div",{className:"tailab_version_title2"},"授权人员列表"),u.a.createElement(y,{title:"添加授权",type:"primary",onClick:function(){return D(!0)}}),u.a.createElement(C,{visible:R,setVisible:D,setFreeUserAuth:tt})),u.a.createElement(o.default,{dataSource:M,columns:et,pagination:!1,rowKey:function(t){return t.id}}))))))},F=n(493),U="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\licence\\Version.js";function z(){return(z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.default=function(t){var e=[{title:"功能",dataIndex:"title",key:"title",colSpan:2,render:function(t,e,n){return{children:t,props:{rowSpan:e.rowSpan}}}},{title:"功能点",dataIndex:"feature",key:"feature",colSpan:0,render:function(t,e,n){return e.colSpan>0?null:t}},{title:"社区版",dataIndex:"ce",key:"ce",render:function(t,e,n){return e.colSpan>0?null:t?u.a.createElement(F.a,{style:{color:"var(--tiklab-blue)",fontSize:"var(--tiklab-icon-size-16)"},__source:{fileName:U,lineNumber:50,columnNumber:36}}):u.a.createElement(f.a,{style:{color:"red"},__source:{fileName:U,lineNumber:50,columnNumber:131}})}},{title:"企业版",dataIndex:"ee",key:"ee",render:function(t,e,n){return t?u.a.createElement(F.a,{style:{color:"var(--tiklab-blue)",fontSize:"var(--tiklab-icon-size-16)"},__source:{fileName:U,lineNumber:59,columnNumber:32}}):u.a.createElement(f.a,{style:{color:"red"},__source:{fileName:U,lineNumber:59,columnNumber:126}})}}];return u.a.createElement(D,z({},t,{bgroup:"matflow",__source:{fileName:U,lineNumber:115,columnNumber:12}}),u.a.createElement(o.default,{bordered:!0,columns:e,dataSource:[{key:"1",title:"基本功能",feature:"用户和部门",ce:!0,ee:!0,rowSpan:2},{key:"2",title:"基本功能",feature:"权限",ce:!0,ee:!0,rowSpan:0},{key:"3",title:"升级功能",feature:"企业微信",ce:!1,ee:!0,rowSpan:4},{key:"4",title:"升级功能",feature:"LDAP",ce:!1,ee:!0,rowSpan:0},{key:"5",title:"升级功能",feature:"插件",ce:!1,ee:!0,rowSpan:0},{key:"6",title:"升级功能",feature:"在线客服",ce:!1,ee:!0,rowSpan:0}],pagination:!1,__source:{fileName:U,lineNumber:116,columnNumber:9}}))}}}]);