(window.webpackJsonp=window.webpackJsonp||[]).push([[58,10],{111:function(t,n){t.exports=function(t,n,r,e){var o=r?r.call(e,t,n):void 0;if(void 0!==o)return!!o;if(t===n)return!0;if("object"!=typeof t||!t||"object"!=typeof n||!n)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(n),u=0;u<i.length;u++){var c=i[u];if(!a(c))return!1;var h=t[c],p=n[c];if(!1===(o=r?r.call(e,h,p,c):void 0)||void 0===o&&h!==p)return!1}return!0}},249:function(t,n){var r=[],e=[];function o(t,n){if(n=n||{},void 0===t)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,i=!0===n.prepend?"prepend":"append",s=void 0!==n.container?n.container:document.querySelector("head"),a=r.indexOf(s);return-1===a&&(a=r.push(s)-1,e[a]={}),void 0!==e[a]&&void 0!==e[a][i]?o=e[a][i]:(o=e[a][i]=function(){var t=document.createElement("style");return t.setAttribute("type","text/css"),t}(),"prepend"===i?s.insertBefore(o,s.childNodes[0]):s.appendChild(o)),65279===t.charCodeAt(0)&&(t=t.substr(1,t.length)),o.styleSheet?o.styleSheet.cssText+=t:o.textContent+=t,o}t.exports=o,t.exports.insertCss=o},440:function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var e=r(41),o=r(169),i=r(128),s=r(27),a=function(){function t(n,r){var o;if(void 0===n&&(n=""),void 0===r&&(r={}),n instanceof t)return n;"number"==typeof n&&(n=Object(e.d)(n)),this.originalInput=n;var s=Object(i.a)(n);this.originalInput=n,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=r.format)&&void 0!==o?o:s.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),n=t.r/255,r=t.g/255,e=t.b/255;return.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Object(s.b)(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=Object(e.h)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Object(e.h)(this.r,this.g,this.b),n=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Object(e.g)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Object(e.g)(this.r,this.g,this.b),n=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(n,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(n,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),Object(e.f)(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),Object(e.j)(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(n,", ").concat(r,")"):"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*Object(s.a)(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*Object(s.a)(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+Object(e.f)(this.r,this.g,this.b,!1),n=0,r=Object.entries(o.a);n<r.length;n++){var i=r[n],s=i[0];if(t===i[1])return s}return!1},t.prototype.toString=function(t){var n=Boolean(t);t=null!=t?t:this.format;var r=!1,e=this.a<1&&this.a>=0;return n||!e||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.l+=n/100,r.l=Object(s.c)(r.l),new t(r)},t.prototype.brighten=function(n){void 0===n&&(n=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-n/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-n/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-n/100*255))),new t(r)},t.prototype.darken=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.l-=n/100,r.l=Object(s.c)(r.l),new t(r)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.s-=n/100,r.s=Object(s.c)(r.s),new t(r)},t.prototype.saturate=function(n){void 0===n&&(n=10);var r=this.toHsl();return r.s+=n/100,r.s=Object(s.c)(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(n){var r=this.toHsl(),e=(r.h+n)%360;return r.h=e<0?360+e:e,new t(r)},t.prototype.mix=function(n,r){void 0===r&&(r=50);var e=this.toRgb(),o=new t(n).toRgb(),i=r/100;return new t({r:(o.r-e.r)*i+e.r,g:(o.g-e.g)*i+e.g,b:(o.b-e.b)*i+e.b,a:(o.a-e.a)*i+e.a})},t.prototype.analogous=function(n,r){void 0===n&&(n=6),void 0===r&&(r=30);var e=this.toHsl(),o=360/r,i=[this];for(e.h=(e.h-(o*n>>1)+720)%360;--n;)e.h=(e.h+o)%360,i.push(new t(e));return i},t.prototype.complement=function(){var n=this.toHsl();return n.h=(n.h+180)%360,new t(n)},t.prototype.monochromatic=function(n){void 0===n&&(n=6);for(var r=this.toHsv(),e=r.h,o=r.s,i=r.v,s=[],a=1/n;n--;)s.push(new t({h:e,s:o,v:i})),i=(i+a)%1;return s},t.prototype.splitcomplement=function(){var n=this.toHsl(),r=n.h;return[this,new t({h:(r+72)%360,s:n.s,l:n.l}),new t({h:(r+216)%360,s:n.s,l:n.l})]},t.prototype.onBackground=function(n){var r=this.toRgb(),e=new t(n).toRgb();return new t({r:e.r+(r.r-e.r)*r.a,g:e.g+(r.g-e.g)*r.a,b:e.b+(r.b-e.b)*r.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(n){for(var r=this.toHsl(),e=r.h,o=[this],i=360/n,s=1;s<n;s++)o.push(new t({h:(e+s*i)%360,s:r.s,l:r.l}));return o},t.prototype.equals=function(n){return this.toRgbString()===new t(n).toRgbString()},t}()},443:function(t,n,r){"use strict";function e(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function o(t,n){return(!n||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function i(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return o(r.overflowY,n)||o(r.overflowX,n)||function(t){var n=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!n&&(n.clientHeight<t.scrollHeight||n.clientWidth<t.scrollWidth)}(t)}return!1}function s(t,n,r,e,o,i,s,a){return i<t&&s>n||i>t&&s<n?0:i<=t&&a<=r||s>=n&&a>=r?i-t-e:s>n&&a<r||i<t&&a>r?s-n+o:0}var a=function(t,n){var r=window,o=n.scrollMode,a=n.block,u=n.inline,c=n.boundary,h=n.skipOverflowHiddenElements,p="function"==typeof c?c:function(t){return t!==c};if(!e(t))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,f=[],d=t;e(d)&&p(d);){if((d=d.parentElement)===l){f.push(d);break}null!=d&&d===document.body&&i(d)&&!i(document.documentElement)||null!=d&&i(d,h)&&f.push(d)}for(var b=r.visualViewport?r.visualViewport.width:innerWidth,g=r.visualViewport?r.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,m=t.getBoundingClientRect(),w=m.height,O=m.width,M=m.top,S=m.right,j=m.bottom,x=m.left,H="start"===a||"nearest"===a?M:"end"===a?j:M+w/2,R="center"===u?x+O/2:"end"===u?S:x,C=[],k=0;k<f.length;k++){var _=f[k],E=_.getBoundingClientRect(),W=E.height,P=E.width,A=E.top,N=E.right,B=E.bottom,D=E.left;if("if-needed"===o&&M>=0&&x>=0&&j<=g&&S<=b&&M>=A&&j<=B&&x>=D&&S<=N)return C;var T=getComputedStyle(_),I=parseInt(T.borderLeftWidth,10),V=parseInt(T.borderTopWidth,10),L=parseInt(T.borderRightWidth,10),U=parseInt(T.borderBottomWidth,10),Y=0,F=0,X="offsetWidth"in _?_.offsetWidth-_.clientWidth-I-L:0,q="offsetHeight"in _?_.offsetHeight-_.clientHeight-V-U:0;if(l===_)Y="start"===a?H:"end"===a?H-g:"nearest"===a?s(y,y+g,g,V,U,y+H,y+H+w,w):H-g/2,F="start"===u?R:"center"===u?R-b/2:"end"===u?R-b:s(v,v+b,b,I,L,v+R,v+R+O,O),Y=Math.max(0,Y+y),F=Math.max(0,F+v);else{Y="start"===a?H-A-V:"end"===a?H-B+U+q:"nearest"===a?s(A,B,W,V,U+q,H,H+w,w):H-(A+W/2)+q/2,F="start"===u?R-D-I:"center"===u?R-(D+P/2)+X/2:"end"===u?R-N+L+X:s(D,N,P,I,L+X,R,R+O,O);var J=_.scrollLeft,z=_.scrollTop;H+=z-(Y=Math.max(0,Math.min(z+Y,_.scrollHeight-W+q))),R+=J-(F=Math.max(0,Math.min(J+F,_.scrollWidth-P+X)))}C.push({el:_,top:Y,left:F})}return C};function u(t){return t===Object(t)&&0!==Object.keys(t).length}n.a=function(t,n){var r=t.isConnected||t.ownerDocument.documentElement.contains(t);if(u(n)&&"function"==typeof n.behavior)return n.behavior(r?a(t,n):[]);if(r){var e=function(t){return!1===t?{block:"end",inline:"nearest"}:u(t)?t:{block:"start",inline:"nearest"}}(n);return function(t,n){void 0===n&&(n="auto");var r="scrollBehavior"in document.body.style;t.forEach((function(t){var e=t.el,o=t.top,i=t.left;e.scroll&&r?e.scroll({top:o,left:i,behavior:n}):(e.scrollTop=o,e.scrollLeft=i)}))}(a(t,e),e.behavior)}}},895:function(t,n,r){"use strict";r.r(n);r(326);var e=r(389),o=r(0),i=r.n(o);function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}n.default=function(t){return i.a.createElement(e.a,s({},t,{bgroup:"matflow",__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\message\\MessageNotice.js",lineNumber:9,columnNumber:12}}))}},93:function(t,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return b})),r.d(n,"c",(function(){return v}));var e,o=r(0),i=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),s=o.createContext(null),a=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.render=function(){return o.createElement(s.Provider,{value:this.props.store},this.props.children)},n}(o.Component),u=r(111),c=r.n(u),h=r(182),p=r.n(h),l=function(){var t=function(n,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(n,r)};return function(n,r){function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),f=function(){return(f=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};var d=function(){return{}};function b(t,n){void 0===n&&(n={});var r=!!t,e=t||d;return function(i){var a=function(n){function a(t,r){var o=n.call(this,t,r)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var t=e(o.store.getState(),o.props);o.setState({subscribed:t})}},o.store=o.context,o.state={subscribed:e(o.store.getState(),t),store:o.store,props:t},o}return l(a,n),a.getDerivedStateFromProps=function(n,r){return t&&2===t.length&&n!==r.props?{subscribed:e(r.store.getState(),n),props:n}:{props:n}},a.prototype.componentDidMount=function(){this.trySubscribe()},a.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},a.prototype.shouldComponentUpdate=function(t,n){return!c()(this.props,t)||!c()(this.state.subscribed,n.subscribed)},a.prototype.trySubscribe=function(){r&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},a.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},a.prototype.render=function(){var t=f(f(f({},this.props),this.state.subscribed),{store:this.store});return o.createElement(i,f({},t,{ref:this.props.miniStoreForwardedRef}))},a.displayName="Connect("+function(t){return t.displayName||t.name||"Component"}(i)+")",a.contextType=s,a}(o.Component);if(n.forwardRef){var u=o.forwardRef((function(t,n){return o.createElement(a,f({},t,{miniStoreForwardedRef:n}))}));return p()(u,i)}return p()(a,i)}}var g=function(){return(g=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function v(t){var n=t,r=[];return{setState:function(t){n=g(g({},n),t);for(var e=0;e<r.length;e++)r[e]()},getState:function(){return n},subscribe:function(t){return r.push(t),function(){var n=r.indexOf(t);r.splice(n,1)}}}}}}]);