(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return y}));var r,o=n(0),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=o.createContext(null),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return o.createElement(u.Provider,{value:this.props.store},this.props.children)},e}(o.Component),c=n(121),a=n.n(c),f=n(211),l=n.n(f),p=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){return(d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var h=function(){return{}};function b(t,e){void 0===e&&(e={});var n=!!t,r=t||h;return function(i){var s=function(e){function s(t,n){var o=e.call(this,t,n)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var t=r(o.store.getState(),o.props);o.setState({subscribed:t})}},o.store=o.context,o.state={subscribed:r(o.store.getState(),t),store:o.store,props:t},o}return p(s,e),s.getDerivedStateFromProps=function(e,n){return t&&2===t.length&&e!==n.props?{subscribed:r(n.store.getState(),e),props:e}:{props:e}},s.prototype.componentDidMount=function(){this.trySubscribe()},s.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},s.prototype.shouldComponentUpdate=function(t,e){return!a()(this.props,t)||!a()(this.state.subscribed,e.subscribed)},s.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},s.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},s.prototype.render=function(){var t=d(d(d({},this.props),this.state.subscribed),{store:this.store});return o.createElement(i,d({},t,{ref:this.props.miniStoreForwardedRef}))},s.displayName="Connect("+function(t){return t.displayName||t.name||"Component"}(i)+")",s.contextType=u,s}(o.Component);if(e.forwardRef){var c=o.forwardRef((function(t,e){return o.createElement(s,d({},t,{miniStoreForwardedRef:e}))}));return l()(c,i)}return l()(s,i)}}var v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function y(t){var e=t,n=[];return{setState:function(t){e=v(v({},e),t);for(var r=0;r<n.length;r++)n[r]()},getState:function(){return e},subscribe:function(t){return n.push(t),function(){var e=n.indexOf(t);n.splice(e,1)}}}}},121:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),u=Object.keys(e);if(i.length!==u.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var a=i[c];if(!s(a))return!1;var f=t[a],l=e[a];if(!1===(o=n?n.call(r,f,l,a):void 0)||void 0===o&&f!==l)return!1}return!0}},390:function(t,e,n){"use strict";function r(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function o(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function i(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return o(n.overflowY,e)||o(n.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function u(t,e,n,r,o,i,u,s){return i<t&&u>e||i>t&&u<e?0:i<=t&&s<=n||u>=e&&s>=n?i-t-r:u>e&&s<n||i<t&&s>n?u-e+o:0}var s=function(t,e){var n=window,o=e.scrollMode,s=e.block,c=e.inline,a=e.boundary,f=e.skipOverflowHiddenElements,l="function"==typeof a?a:function(t){return t!==a};if(!r(t))throw new TypeError("Invalid target");for(var p=document.scrollingElement||document.documentElement,d=[],h=t;r(h)&&l(h);){if((h=h.parentElement)===p){d.push(h);break}null!=h&&h===document.body&&i(h)&&!i(document.documentElement)||null!=h&&i(h,f)&&d.push(h)}for(var b=n.visualViewport?n.visualViewport.width:innerWidth,v=n.visualViewport?n.visualViewport.height:innerHeight,y=window.scrollX||pageXOffset,m=window.scrollY||pageYOffset,g=t.getBoundingClientRect(),w=g.height,O=g.width,j=g.top,C=g.right,_=g.bottom,S=g.left,E="start"===s||"nearest"===s?j:"end"===s?_:j+w/2,W="center"===c?S+O/2:"end"===c?C:S,k=[],R=0;R<d.length;R++){var V=d[R],H=V.getBoundingClientRect(),M=H.height,P=H.width,x=H.top,D=H.right,T=H.bottom,U=H.left;if("if-needed"===o&&j>=0&&S>=0&&_<=v&&C<=b&&j>=x&&_<=T&&S>=U&&C<=D)return k;var I=getComputedStyle(V),N=parseInt(I.borderLeftWidth,10),B=parseInt(I.borderTopWidth,10),L=parseInt(I.borderRightWidth,10),A=parseInt(I.borderBottomWidth,10),F=0,X=0,Y="offsetWidth"in V?V.offsetWidth-V.clientWidth-N-L:0,J="offsetHeight"in V?V.offsetHeight-V.clientHeight-B-A:0;if(p===V)F="start"===s?E:"end"===s?E-v:"nearest"===s?u(m,m+v,v,B,A,m+E,m+E+w,w):E-v/2,X="start"===c?W:"center"===c?W-b/2:"end"===c?W-b:u(y,y+b,b,N,L,y+W,y+W+O,O),F=Math.max(0,F+m),X=Math.max(0,X+y);else{F="start"===s?E-x-B:"end"===s?E-T+A+J:"nearest"===s?u(x,T,M,B,A+J,E,E+w,w):E-(x+M/2)+J/2,X="start"===c?W-U-N:"center"===c?W-(U+P/2)+Y/2:"end"===c?W-D+L+Y:u(U,D,P,N,L+Y,W,W+O,O);var $=V.scrollLeft,q=V.scrollTop;E+=q-(F=Math.max(0,Math.min(q+F,V.scrollHeight-M+J))),W+=$-(X=Math.max(0,Math.min($+X,V.scrollWidth-P+Y)))}k.push({el:V,top:F,left:X})}return k};function c(t){return t===Object(t)&&0!==Object.keys(t).length}e.a=function(t,e){var n=t.isConnected||t.ownerDocument.documentElement.contains(t);if(c(e)&&"function"==typeof e.behavior)return e.behavior(n?s(t,e):[]);if(n){var r=function(t){return!1===t?{block:"end",inline:"nearest"}:c(t)?t:{block:"start",inline:"nearest"}}(e);return function(t,e){void 0===e&&(e="auto");var n="scrollBehavior"in document.body.style;t.forEach((function(t){var r=t.el,o=t.top,i=t.left;r.scroll&&n?r.scroll({top:o,left:i,behavior:e}):(r.scrollTop=o,r.scrollLeft=i)}))}(s(t,r),r.behavior)}}},799:function(t,e,n){"use strict";n.r(e);n(367);var r=n(350),o=n(0),i=n.n(o);function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.default=function(t){return i.a.createElement(r.a,u({},t,{bgroup:"matflow",__source:{fileName:"D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\message\\MessageManagement.js",lineNumber:12,columnNumber:12}}))}},821:function(t,e,n){"use strict";var r,o=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(t){return"string"==typeof t&&u.test(t)},c=[],a=0;a<256;++a)c.push((a+256).toString(16).substr(1));var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};e.a=function(t,e,n){var r=(t=t||{}).random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return f(r)}}}]);