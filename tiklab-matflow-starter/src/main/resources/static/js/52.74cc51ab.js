(window.webpackJsonp=window.webpackJsonp||[]).push([[52,10],{110:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),s=Object.keys(e);if(i.length!==s.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var u=i[c];if(!a(u))return!1;var h=t[u],p=e[u];if(!1===(o=n?n.call(r,h,p,u):void 0)||void 0===o&&h!==p)return!1}return!0}},252:function(t,e){var n=[],r=[];function o(t,e){if(e=e||{},void 0===t)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,i=!0===e.prepend?"prepend":"append",s=void 0!==e.container?e.container:document.querySelector("head"),a=n.indexOf(s);return-1===a&&(a=n.push(s)-1,r[a]={}),void 0!==r[a]&&void 0!==r[a][i]?o=r[a][i]:(o=r[a][i]=function(){var t=document.createElement("style");return t.setAttribute("type","text/css"),t}(),"prepend"===i?s.insertBefore(o,s.childNodes[0]):s.appendChild(o)),65279===t.charCodeAt(0)&&(t=t.substr(1,t.length)),o.styleSheet?o.styleSheet.cssText+=t:o.textContent+=t,o}t.exports=o,t.exports.insertCss=o},448:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(40),o=n(171),i=n(128),s=n(27),a=function(){function t(e,n){var o;if(void 0===e&&(e=""),void 0===n&&(n={}),e instanceof t)return e;"number"==typeof e&&(e=Object(r.d)(e)),this.originalInput=e;var s=Object(i.a)(e);this.originalInput=e,this.r=s.r,this.g=s.g,this.b=s.b,this.a=s.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=n.format)&&void 0!==o?o:s.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=s.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,n=t.g/255,r=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Object(s.b)(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=Object(r.h)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Object(r.h)(this.r,this.g,this.b),e=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(n,"%, ").concat(o,"%)"):"hsva(".concat(e,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Object(r.g)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Object(r.g)(this.r,this.g,this.b),e=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(n,"%, ").concat(o,"%)"):"hsla(".concat(e,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),Object(r.f)(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),Object(r.j)(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(n,")"):"rgba(".concat(t,", ").concat(e,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*Object(s.a)(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*Object(s.a)(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+Object(r.f)(this.r,this.g,this.b,!1),e=0,n=Object.entries(o.a);e<n.length;e++){var i=n[e],s=i[0];if(t===i[1])return s}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var n=!1,r=this.a<1&&this.a>=0;return e||!r||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=Object(s.c)(n.l),new t(n)},t.prototype.brighten=function(e){void 0===e&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),new t(n)},t.prototype.darken=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=Object(s.c)(n.l),new t(n)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=Object(s.c)(n.s),new t(n)},t.prototype.saturate=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=Object(s.c)(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,new t(n)},t.prototype.mix=function(e,n){void 0===n&&(n=50);var r=this.toRgb(),o=new t(e).toRgb(),i=n/100;return new t({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},t.prototype.analogous=function(e,n){void 0===e&&(e=6),void 0===n&&(n=30);var r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*e>>1)+720)%360;--e;)r.h=(r.h+o)%360,i.push(new t(r));return i},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var n=this.toHsv(),r=n.h,o=n.s,i=n.v,s=[],a=1/e;e--;)s.push(new t({h:r,s:o,v:i})),i=(i+a)%1;return s},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),r=new t(e).toRgb();return new t({r:r.r+(n.r-r.r)*n.a,g:r.g+(n.g-r.g)*n.a,b:r.b+(n.b-r.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),r=n.h,o=[this],i=360/e,s=1;s<e;s++)o.push(new t({h:(r+s*i)%360,s:n.s,l:n.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}()},454:function(t,e,n){"use strict";function r(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function o(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function i(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return o(n.overflowY,e)||o(n.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function s(t,e,n,r,o,i,s,a){return i<t&&s>e||i>t&&s<e?0:i<=t&&a<=n||s>=e&&a>=n?i-t-r:s>e&&a<n||i<t&&a>n?s-e+o:0}var a=function(t,e){var n=window,o=e.scrollMode,a=e.block,c=e.inline,u=e.boundary,h=e.skipOverflowHiddenElements,p="function"==typeof u?u:function(t){return t!==u};if(!r(t))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,f=[],d=t;r(d)&&p(d);){if((d=d.parentElement)===l){f.push(d);break}null!=d&&d===document.body&&i(d)&&!i(document.documentElement)||null!=d&&i(d,h)&&f.push(d)}for(var b=n.visualViewport?n.visualViewport.width:innerWidth,g=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,y=window.scrollY||pageYOffset,m=t.getBoundingClientRect(),w=m.height,x=m.width,O=m.top,S=m.right,M=m.bottom,j=m.left,H="start"===a||"nearest"===a?O:"end"===a?M:O+w/2,C="center"===c?j+x/2:"end"===c?S:j,R=[],D=0;D<f.length;D++){var E=f[D],k=E.getBoundingClientRect(),A=k.height,_=k.width,P=k.top,W=k.right,N=k.bottom,T=k.left;if("if-needed"===o&&O>=0&&j>=0&&M<=g&&S<=b&&O>=P&&M<=N&&j>=T&&S<=W)return R;var U=getComputedStyle(E),B=parseInt(U.borderLeftWidth,10),I=parseInt(U.borderTopWidth,10),V=parseInt(U.borderRightWidth,10),L=parseInt(U.borderBottomWidth,10),X=0,Y=0,F="offsetWidth"in E?E.offsetWidth-E.clientWidth-B-V:0,q="offsetHeight"in E?E.offsetHeight-E.clientHeight-I-L:0;if(l===E)X="start"===a?H:"end"===a?H-g:"nearest"===a?s(y,y+g,g,I,L,y+H,y+H+w,w):H-g/2,Y="start"===c?C:"center"===c?C-b/2:"end"===c?C-b:s(v,v+b,b,B,V,v+C,v+C+x,x),X=Math.max(0,X+y),Y=Math.max(0,Y+v);else{X="start"===a?H-P-I:"end"===a?H-N+L+q:"nearest"===a?s(P,N,A,I,L+q,H,H+w,w):H-(P+A/2)+q/2,Y="start"===c?C-T-B:"center"===c?C-(T+_/2)+F/2:"end"===c?C-W+V+F:s(T,W,_,B,V+F,C,C+x,x);var J=E.scrollLeft,z=E.scrollTop;H+=z-(X=Math.max(0,Math.min(z+X,E.scrollHeight-A+q))),C+=J-(Y=Math.max(0,Math.min(J+Y,E.scrollWidth-_+F)))}R.push({el:E,top:X,left:Y})}return R};function c(t){return t===Object(t)&&0!==Object.keys(t).length}e.a=function(t,e){var n=t.isConnected||t.ownerDocument.documentElement.contains(t);if(c(e)&&"function"==typeof e.behavior)return e.behavior(n?a(t,e):[]);if(n){var r=function(t){return!1===t?{block:"end",inline:"nearest"}:c(t)?t:{block:"start",inline:"nearest"}}(e);return function(t,e){void 0===e&&(e="auto");var n="scrollBehavior"in document.body.style;t.forEach((function(t){var r=t.el,o=t.top,i=t.left;r.scroll&&n?r.scroll({top:o,left:i,behavior:e}):(r.scrollTop=o,r.scrollLeft=i)}))}(a(t,r),r.behavior)}}},567:function(t,e){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach((function(e){t.addRange(e)})),e&&e.focus()}}},654:function(t,e,n){"use strict";var r=n(567),o={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,i,s,a,c,u=!1;e||(e={}),e.debug;try{if(i=r(),s=document.createRange(),a=document.getSelection(),(c=document.createElement("span")).textContent=t,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),e.format)if(n.preventDefault(),void 0===n.clipboardData){window.clipboardData.clearData();var r=o[e.format]||o.default;window.clipboardData.setData(r,t)}else n.clipboardData.clearData(),n.clipboardData.setData(e.format,t);e.onCopy&&(n.preventDefault(),e.onCopy(n.clipboardData))})),document.body.appendChild(c),s.selectNodeContents(c),a.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(r){try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(r){n=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(n,t)}}finally{a&&("function"==typeof a.removeRange?a.removeRange(s):a.removeAllRanges()),c&&document.body.removeChild(c),i()}return u}},896:function(t,e,n){"use strict";n.r(e);n(332);var r=n(329),o=n(0),i=n.n(o);function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.default=function(t){return i.a.createElement(r.a,s({},t,{bgroup:"matflow",__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\message\\MessageNotice.js",lineNumber:9,columnNumber:12}}))}},94:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return v}));var r,o=n(0),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=o.createContext(null),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return o.createElement(s.Provider,{value:this.props.store},this.props.children)},e}(o.Component),c=n(110),u=n.n(c),h=n(184),p=n.n(h),l=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var d=function(){return{}};function b(t,e){void 0===e&&(e={});var n=!!t,r=t||d;return function(i){var a=function(e){function a(t,n){var o=e.call(this,t,n)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var t=r(o.store.getState(),o.props);o.setState({subscribed:t})}},o.store=o.context,o.state={subscribed:r(o.store.getState(),t),store:o.store,props:t},o}return l(a,e),a.getDerivedStateFromProps=function(e,n){return t&&2===t.length&&e!==n.props?{subscribed:r(n.store.getState(),e),props:e}:{props:e}},a.prototype.componentDidMount=function(){this.trySubscribe()},a.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},a.prototype.shouldComponentUpdate=function(t,e){return!u()(this.props,t)||!u()(this.state.subscribed,e.subscribed)},a.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},a.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},a.prototype.render=function(){var t=f(f(f({},this.props),this.state.subscribed),{store:this.store});return o.createElement(i,f({},t,{ref:this.props.miniStoreForwardedRef}))},a.displayName="Connect("+function(t){return t.displayName||t.name||"Component"}(i)+")",a.contextType=s,a}(o.Component);if(e.forwardRef){var c=o.forwardRef((function(t,e){return o.createElement(a,f({},t,{miniStoreForwardedRef:e}))}));return p()(c,i)}return p()(a,i)}}var g=function(){return(g=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function v(t){var e=t,n=[];return{setState:function(t){e=g(g({},e),t);for(var r=0;r<n.length;r++)n[r]()},getState:function(){return e},subscribe:function(t){return n.push(t),function(){var e=n.indexOf(t);n.splice(e,1)}}}}}}]);