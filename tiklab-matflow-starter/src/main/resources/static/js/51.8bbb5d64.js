(window.webpackJsonp=window.webpackJsonp||[]).push([[51,10,62],{110:function(t,r){t.exports=function(t,r,n,e){var o=n?n.call(e,t,r):void 0;if(void 0!==o)return!!o;if(t===r)return!0;if("object"!=typeof t||!t||"object"!=typeof r||!r)return!1;var i=Object.keys(t),s=Object.keys(r);if(i.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(r),u=0;u<i.length;u++){var c=i[u];if(!a(c))return!1;var h=t[c],p=r[c];if(!1===(o=n?n.call(e,h,p,c):void 0)||void 0===o&&h!==p)return!1}return!0}},253:function(t,r){var n=[],e=[];function o(t,r){if(r=r||{},void 0===t)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,i=!0===r.prepend?"prepend":"append",s=void 0!==r.container?r.container:document.querySelector("head"),a=n.indexOf(s);return-1===a&&(a=n.push(s)-1,e[a]={}),void 0!==e[a]&&void 0!==e[a][i]?o=e[a][i]:(o=e[a][i]=function(){var t=document.createElement("style");return t.setAttribute("type","text/css"),t}(),"prepend"===i?s.insertBefore(o,s.childNodes[0]):s.appendChild(o)),65279===t.charCodeAt(0)&&(t=t.substr(1,t.length)),o.styleSheet?o.styleSheet.cssText+=t:o.textContent+=t,o}t.exports=o,t.exports.insertCss=o},449:function(t,r,n){"use strict";n.d(r,"a",(function(){return a}));var e=n(41),o=n(172),i=n(128),s=n(27),a=function(){function t(r,n){var o;if(void 0===r&&(r=""),void 0===n&&(n={}),r instanceof t)return r;"number"==typeof r&&(r=Object(e.d)(r)),this.originalInput=r;var s=Object(i.a)(r);this.originalInput=r,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=n.format)&&void 0!==o?o:s.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),r=t.r/255,n=t.g/255,e=t.b/255;return.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Object(s.b)(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=Object(e.h)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Object(e.h)(this.r,this.g,this.b),r=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(r,", ").concat(n,"%, ").concat(o,"%)"):"hsva(".concat(r,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Object(e.g)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Object(e.g)(this.r,this.g,this.b),r=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(r,", ").concat(n,"%, ").concat(o,"%)"):"hsla(".concat(r,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),Object(e.f)(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),Object(e.j)(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),r=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(r,", ").concat(n,")"):"rgba(".concat(t,", ").concat(r,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*Object(s.a)(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*Object(s.a)(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+Object(e.f)(this.r,this.g,this.b,!1),r=0,n=Object.entries(o.a);r<n.length;r++){var i=n[r],s=i[0];if(t===i[1])return s}return!1},t.prototype.toString=function(t){var r=Boolean(t);t=null!=t?t:this.format;var n=!1,e=this.a<1&&this.a>=0;return r||!e||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(r){void 0===r&&(r=10);var n=this.toHsl();return n.l+=r/100,n.l=Object(s.c)(n.l),new t(n)},t.prototype.brighten=function(r){void 0===r&&(r=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-r/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-r/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-r/100*255))),new t(n)},t.prototype.darken=function(r){void 0===r&&(r=10);var n=this.toHsl();return n.l-=r/100,n.l=Object(s.c)(n.l),new t(n)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(r){void 0===r&&(r=10);var n=this.toHsl();return n.s-=r/100,n.s=Object(s.c)(n.s),new t(n)},t.prototype.saturate=function(r){void 0===r&&(r=10);var n=this.toHsl();return n.s+=r/100,n.s=Object(s.c)(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(r){var n=this.toHsl(),e=(n.h+r)%360;return n.h=e<0?360+e:e,new t(n)},t.prototype.mix=function(r,n){void 0===n&&(n=50);var e=this.toRgb(),o=new t(r).toRgb(),i=n/100;return new t({r:(o.r-e.r)*i+e.r,g:(o.g-e.g)*i+e.g,b:(o.b-e.b)*i+e.b,a:(o.a-e.a)*i+e.a})},t.prototype.analogous=function(r,n){void 0===r&&(r=6),void 0===n&&(n=30);var e=this.toHsl(),o=360/n,i=[this];for(e.h=(e.h-(o*r>>1)+720)%360;--r;)e.h=(e.h+o)%360,i.push(new t(e));return i},t.prototype.complement=function(){var r=this.toHsl();return r.h=(r.h+180)%360,new t(r)},t.prototype.monochromatic=function(r){void 0===r&&(r=6);for(var n=this.toHsv(),e=n.h,o=n.s,i=n.v,s=[],a=1/r;r--;)s.push(new t({h:e,s:o,v:i})),i=(i+a)%1;return s},t.prototype.splitcomplement=function(){var r=this.toHsl(),n=r.h;return[this,new t({h:(n+72)%360,s:r.s,l:r.l}),new t({h:(n+216)%360,s:r.s,l:r.l})]},t.prototype.onBackground=function(r){var n=this.toRgb(),e=new t(r).toRgb();return new t({r:e.r+(n.r-e.r)*n.a,g:e.g+(n.g-e.g)*n.a,b:e.b+(n.b-e.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(r){for(var n=this.toHsl(),e=n.h,o=[this],i=360/r,s=1;s<r;s++)o.push(new t({h:(e+s*i)%360,s:n.s,l:n.l}));return o},t.prototype.equals=function(r){return this.toRgbString()===new t(r).toRgbString()},t}()},458:function(t,r,n){"use strict";function e(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function o(t,r){return(!r||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function i(t,r){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return o(n.overflowY,r)||o(n.overflowX,r)||function(t){var r=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!r&&(r.clientHeight<t.scrollHeight||r.clientWidth<t.scrollWidth)}(t)}return!1}function s(t,r,n,e,o,i,s,a){return i<t&&s>r||i>t&&s<r?0:i<=t&&a<=n||s>=r&&a>=n?i-t-e:s>r&&a<n||i<t&&a>n?s-r+o:0}var a=function(t,r){var n=window,o=r.scrollMode,a=r.block,u=r.inline,c=r.boundary,h=r.skipOverflowHiddenElements,p="function"==typeof c?c:function(t){return t!==c};if(!e(t))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,l=[],d=t;e(d)&&p(d);){if((d=d.parentElement)===f){l.push(d);break}null!=d&&d===document.body&&i(d)&&!i(document.documentElement)||null!=d&&i(d,h)&&l.push(d)}for(var b=n.visualViewport?n.visualViewport.width:innerWidth,g=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,m=t.getBoundingClientRect(),w=m.height,O=m.width,M=m.top,S=m.right,j=m.bottom,x=m.left,H="start"===a||"nearest"===a?M:"end"===a?j:M+w/2,R="center"===u?x+O/2:"end"===u?S:x,C=[],k=0;k<l.length;k++){var _=l[k],E=_.getBoundingClientRect(),W=E.height,A=E.width,P=E.top,V=E.right,D=E.bottom,N=E.left;if("if-needed"===o&&M>=0&&x>=0&&j<=g&&S<=b&&M>=P&&j<=D&&x>=N&&S<=V)return C;var T=getComputedStyle(_),B=parseInt(T.borderLeftWidth,10),I=parseInt(T.borderTopWidth,10),U=parseInt(T.borderRightWidth,10),L=parseInt(T.borderBottomWidth,10),Y=0,F=0,X="offsetWidth"in _?_.offsetWidth-_.clientWidth-B-U:0,q="offsetHeight"in _?_.offsetHeight-_.clientHeight-I-L:0;if(f===_)Y="start"===a?H:"end"===a?H-g:"nearest"===a?s(y,y+g,g,I,L,y+H,y+H+w,w):H-g/2,F="start"===u?R:"center"===u?R-b/2:"end"===u?R-b:s(v,v+b,b,B,U,v+R,v+R+O,O),Y=Math.max(0,Y+y),F=Math.max(0,F+v);else{Y="start"===a?H-P-I:"end"===a?H-D+L+q:"nearest"===a?s(P,D,W,I,L+q,H,H+w,w):H-(P+W/2)+q/2,F="start"===u?R-N-B:"center"===u?R-(N+A/2)+X/2:"end"===u?R-V+U+X:s(N,V,A,B,U+X,R,R+O,O);var J=_.scrollLeft,$=_.scrollTop;H+=$-(Y=Math.max(0,Math.min($+Y,_.scrollHeight-W+q))),R+=J-(F=Math.max(0,Math.min(J+F,_.scrollWidth-A+X)))}C.push({el:_,top:Y,left:F})}return C};function u(t){return t===Object(t)&&0!==Object.keys(t).length}r.a=function(t,r){var n=t.isConnected||t.ownerDocument.documentElement.contains(t);if(u(r)&&"function"==typeof r.behavior)return r.behavior(n?a(t,r):[]);if(n){var e=function(t){return!1===t?{block:"end",inline:"nearest"}:u(t)?t:{block:"start",inline:"nearest"}}(r);return function(t,r){void 0===r&&(r="auto");var n="scrollBehavior"in document.body.style;t.forEach((function(t){var e=t.el,o=t.top,i=t.left;e.scroll&&n?e.scroll({top:o,left:i,behavior:r}):(e.scrollTop=o,e.scrollLeft=i)}))}(a(t,e),e.behavior)}}},903:function(t,r,n){"use strict";n.r(r);n(376);var e=n(364),o=n(0),i=n.n(o);function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}r.default=function(t){return i.a.createElement(e.a,s({},t,{bgroup:"matflow",__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\message\\MessageManagement.js",lineNumber:12,columnNumber:12}}))}},932:function(t,r,n){"use strict";var e,o=new Uint8Array(16);function i(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"==typeof t&&s.test(t)},u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));var h=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[r+0]]+u[t[r+1]]+u[t[r+2]]+u[t[r+3]]+"-"+u[t[r+4]]+u[t[r+5]]+"-"+u[t[r+6]]+u[t[r+7]]+"-"+u[t[r+8]]+u[t[r+9]]+"-"+u[t[r+10]]+u[t[r+11]]+u[t[r+12]]+u[t[r+13]]+u[t[r+14]]+u[t[r+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};r.a=function(t,r,n){var e=(t=t||{}).random||(t.rng||i)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){n=n||0;for(var o=0;o<16;++o)r[n+o]=e[o];return r}return h(e)}},95:function(t,r,n){"use strict";n.d(r,"a",(function(){return a})),n.d(r,"b",(function(){return b})),n.d(r,"c",(function(){return v}));var e,o=n(0),i=(e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)},function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}),s=o.createContext(null),a=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return i(r,t),r.prototype.render=function(){return o.createElement(s.Provider,{value:this.props.store},this.props.children)},r}(o.Component),u=n(110),c=n.n(u),h=n(185),p=n.n(h),f=function(){var t=function(r,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(r,n)};return function(r,n){function e(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}(),l=function(){return(l=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};var d=function(){return{}};function b(t,r){void 0===r&&(r={});var n=!!t,e=t||d;return function(i){var a=function(r){function a(t,n){var o=r.call(this,t,n)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var t=e(o.store.getState(),o.props);o.setState({subscribed:t})}},o.store=o.context,o.state={subscribed:e(o.store.getState(),t),store:o.store,props:t},o}return f(a,r),a.getDerivedStateFromProps=function(r,n){return t&&2===t.length&&r!==n.props?{subscribed:e(n.store.getState(),r),props:r}:{props:r}},a.prototype.componentDidMount=function(){this.trySubscribe()},a.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},a.prototype.shouldComponentUpdate=function(t,r){return!c()(this.props,t)||!c()(this.state.subscribed,r.subscribed)},a.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},a.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},a.prototype.render=function(){var t=l(l(l({},this.props),this.state.subscribed),{store:this.store});return o.createElement(i,l({},t,{ref:this.props.miniStoreForwardedRef}))},a.displayName="Connect("+function(t){return t.displayName||t.name||"Component"}(i)+")",a.contextType=s,a}(o.Component);if(r.forwardRef){var u=o.forwardRef((function(t,r){return o.createElement(a,l({},t,{miniStoreForwardedRef:r}))}));return p()(u,i)}return p()(a,i)}}var g=function(){return(g=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function v(t){var r=t,n=[];return{setState:function(t){r=g(g({},r),t);for(var e=0;e<n.length;e++)n[e]()},getState:function(){return r},subscribe:function(t){return n.push(t),function(){var r=n.indexOf(t);n.splice(r,1)}}}}}}]);