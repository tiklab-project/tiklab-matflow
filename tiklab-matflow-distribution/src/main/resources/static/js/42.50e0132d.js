(window.webpackJsonp=window.webpackJsonp||[]).push([[42,9],{229:function(e,t,r){"use strict";r.r(t),function(e){var n,o=r(0),a=r.n(o),i=r(774),u=r(606),s=r(134),c=r(11),l=r(23),f=r(2),d="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\container\\project.js";function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},h=function(e){var t=e.route,r=e.matFlowStore,n=e.configDataStore,c=e.match,l=r.findAllMatFlowStatus,m=r.lastPath,h=r.setLastPath,y=r.setMatFlowId,v=r.setMatFlowName,g=n.isPrompt,b=n.setIsPrompt,w=c.params.matFlowName,N=Object(f.e)().userId;Object(o.useEffect)((function(){v(w),l(N).then((function(e){var t=e.data;0===e.code&&t&&t&&t.map((function(e){e.matFlowName===w&&y(e.matFlowId)}))}))}),[w]);Object(o.useEffect)((function(){return function(){return y("")}}),[]);return a.a.createElement("div",{className:"project",__source:{fileName:d,lineNumber:61,columnNumber:9}},a.a.createElement(i.a,p({},e,{lastPath:m,setLastPath:h,matFlowName:w,__source:{fileName:d,lineNumber:62,columnNumber:13}})),a.a.createElement("div",{className:"project-content",style:{marginLeft:80},__source:{fileName:d,lineNumber:68,columnNumber:13}},Object(s.a)(t.routes)),a.a.createElement(u.a,{isPrompt:g,confirmLeave:function(t){t!=="/home/task/".concat(w,"/config")&&t&&setTimeout((function(){e.history.push(t)})),b(!1)},__source:{fileName:d,lineNumber:71,columnNumber:13}}))};m(h,"useEffect{}\nuseEffect{}");var y,v,g=Object(l.h)(Object(c.b)("matFlowStore","configDataStore")(Object(c.c)(h)));t.default=g,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(h,"Project","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\container\\project.js"),y.register(g,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\container\\project.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)}.call(this,r(22)(e))},313:function(e,t,r){var n=r(314).default;function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=x(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p={};function m(){}function h(){}function y(){}var v={};l(v,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(q([])));b&&b!==r&&a.call(b,u)&&(v=b);var w=y.prototype=m.prototype=Object.create(v);function N(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){var r;this._invoke=function(o,i){function u(){return new t((function(r,u){!function r(o,i,u,s){var c=d(e[o],e,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,u,s)}),(function(e){r("throw",e,u,s)})):t.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return r("throw",e,u,s)}))}s(c.arg)}(o,i,r,u)}))}return r=r?r.then(u,u):u()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function q(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y,l(w,"constructor",y),l(y,"constructor",h),h.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},N(j.prototype),l(j.prototype,s,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(w),l(w,c,"Generator"),l(w,u,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=q,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:q(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},314:function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},326:function(e,t,r){var n=r(313)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},332:function(e,t,r){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,t,r){return(i=a()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a}).apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return i(e,arguments,n(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o(a,e)})(e)}var s=/%[sdj%]/g,c=function(){};function l(e){if(!e||!e.length)return null;var t={};return e.forEach((function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)})),t}function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=1,o=t[0],a=t.length;if("function"==typeof o)return o.apply(null,t.slice(1));if("string"==typeof o){var i=String(o).replace(s,(function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(t[n++]);case"%d":return Number(t[n++]);case"%j":try{return JSON.stringify(t[n++])}catch(e){return"[Circular]"}break;default:return e}}));return i}return o}function d(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(t)||"string"!=typeof e||e))}function p(e,t,r){var n=0,o=e.length;!function a(i){if(i&&i.length)r(i);else{var u=n;n+=1,u<o?t(e[u],a):r([])}}([])}void 0!==e&&e.env&&"undefined"!=typeof window&&"undefined"!=typeof document&&(c=function(e,t){"undefined"!=typeof console&&console.warn&&t.every((function(e){return"string"==typeof e}))});var m=function(e){var t,r;function n(t,r){var n;return(n=e.call(this,"Async Validation Error")||this).errors=t,n.fields=r,n}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,o(t,r),n}(u(Error));function h(e,t,r,n){if(t.first){var o=new Promise((function(t,o){p(function(e){var t=[];return Object.keys(e).forEach((function(r){t.push.apply(t,e[r])})),t}(e),r,(function(e){return n(e),e.length?o(new m(e,l(e))):t()}))}));return o.catch((function(e){return e})),o}var a=t.firstFields||[];!0===a&&(a=Object.keys(e));var i=Object.keys(e),u=i.length,s=0,c=[],f=new Promise((function(t,o){var f=function(e){if(c.push.apply(c,e),++s===u)return n(c),c.length?o(new m(c,l(c))):t()};i.length||(n(c),t()),i.forEach((function(t){var n=e[t];-1!==a.indexOf(t)?p(n,r,f):function(e,t,r){var n=[],o=0,a=e.length;function i(e){n.push.apply(n,e),++o===a&&r(n)}e.forEach((function(e){t(e,i)}))}(n,r,f)}))}));return f.catch((function(e){return e})),f}function y(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"==typeof t?t():t,field:t.field||e.fullField}}}function v(e,t){if(t)for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];"object"==typeof o&&"object"==typeof e[n]?e[n]=r({},e[n],o):e[n]=o}return e}function g(e,t,r,n,o,a){!e.required||r.hasOwnProperty(e.field)&&!d(t,a||e.type)||n.push(f(o.messages.required,e.fullField))}var b={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},w={integer:function(e){return w.number(e)&&parseInt(e,10)===e},float:function(e){return w.number(e)&&!w.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(e){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!w.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(b.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(b.url)},hex:function(e){return"string"==typeof e&&!!e.match(b.hex)}};var N={required:g,whitespace:function(e,t,r,n,o){(/^\s+$/.test(t)||""===t)&&n.push(f(o.messages.whitespace,e.fullField))},type:function(e,t,r,n,o){if(e.required&&void 0===t)g(e,t,r,n,o);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?w[a](t)||n.push(f(o.messages.types[a],e.fullField,e.type)):a&&typeof t!==e.type&&n.push(f(o.messages.types[a],e.fullField,e.type))}},range:function(e,t,r,n,o){var a="number"==typeof e.len,i="number"==typeof e.min,u="number"==typeof e.max,s=t,c=null,l="number"==typeof t,d="string"==typeof t,p=Array.isArray(t);if(l?c="number":d?c="string":p&&(c="array"),!c)return!1;p&&(s=t.length),d&&(s=t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?s!==e.len&&n.push(f(o.messages[c].len,e.fullField,e.len)):i&&!u&&s<e.min?n.push(f(o.messages[c].min,e.fullField,e.min)):u&&!i&&s>e.max?n.push(f(o.messages[c].max,e.fullField,e.max)):i&&u&&(s<e.min||s>e.max)&&n.push(f(o.messages[c].range,e.fullField,e.min,e.max))},enum:function(e,t,r,n,o){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(t)&&n.push(f(o.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,t,r,n,o){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||n.push(f(o.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||n.push(f(o.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function j(e,t,r,n,o){var a=e.type,i=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t,a)&&!e.required)return r();N.required(e,t,n,i,o,a),d(t,a)||N.type(e,t,n,i,o)}r(i)}var x={string:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t,"string")&&!e.required)return r();N.required(e,t,n,a,o,"string"),d(t,"string")||(N.type(e,t,n,a,o),N.range(e,t,n,a,o),N.pattern(e,t,n,a,o),!0===e.whitespace&&N.whitespace(e,t,n,a,o))}r(a)},method:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o),void 0!==t&&N.type(e,t,n,a,o)}r(a)},number:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===t&&(t=void 0),d(t)&&!e.required)return r();N.required(e,t,n,a,o),void 0!==t&&(N.type(e,t,n,a,o),N.range(e,t,n,a,o))}r(a)},boolean:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o),void 0!==t&&N.type(e,t,n,a,o)}r(a)},regexp:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o),d(t)||N.type(e,t,n,a,o)}r(a)},integer:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o),void 0!==t&&(N.type(e,t,n,a,o),N.range(e,t,n,a,o))}r(a)},float:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o),void 0!==t&&(N.type(e,t,n,a,o),N.range(e,t,n,a,o))}r(a)},array:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==t&&!e.required)return r();N.required(e,t,n,a,o,"array"),null!=t&&(N.type(e,t,n,a,o),N.range(e,t,n,a,o))}r(a)},object:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o),void 0!==t&&N.type(e,t,n,a,o)}r(a)},enum:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o),void 0!==t&&N.enum(e,t,n,a,o)}r(a)},pattern:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t,"string")&&!e.required)return r();N.required(e,t,n,a,o),d(t,"string")||N.pattern(e,t,n,a,o)}r(a)},date:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t,"date")&&!e.required)return r();var i;if(N.required(e,t,n,a,o),!d(t,"date"))i=t instanceof Date?t:new Date(t),N.type(e,i,n,a,o),i&&N.range(e,i.getTime(),n,a,o)}r(a)},url:j,hex:j,email:j,required:function(e,t,r,n,o){var a=[],i=Array.isArray(t)?"array":typeof t;N.required(e,t,n,a,o,i),r(a)},any:function(e,t,r,n,o){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(d(t)&&!e.required)return r();N.required(e,t,n,a,o)}r(a)}};function _(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var O=_();function E(e){this.rules=null,this._messages=O,this.define(e)}E.prototype={messages:function(e){return e&&(this._messages=v(_(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");var t,r;for(t in this.rules={},e)e.hasOwnProperty(t)&&(r=e[t],this.rules[t]=Array.isArray(r)?r:[r])},validate:function(e,t,n){var o=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var a,i,u=e,s=t,c=n;if("function"==typeof s&&(c=s,s={}),!this.rules||0===Object.keys(this.rules).length)return c&&c(),Promise.resolve();if(s.messages){var d=this.messages();d===O&&(d=_()),v(d,s.messages),s.messages=d}else s.messages=this.messages();var p={};(s.keys||Object.keys(this.rules)).forEach((function(t){a=o.rules[t],i=u[t],a.forEach((function(n){var a=n;"function"==typeof a.transform&&(u===e&&(u=r({},u)),i=u[t]=a.transform(i)),(a="function"==typeof a?{validator:a}:r({},a)).validator=o.getValidationMethod(a),a.field=t,a.fullField=a.fullField||t,a.type=o.getType(a),a.validator&&(p[t]=p[t]||[],p[t].push({rule:a,value:i,source:u,field:t}))}))}));var m={};return h(p,s,(function(e,t){var n,o=e.rule,a=!("object"!==o.type&&"array"!==o.type||"object"!=typeof o.fields&&"object"!=typeof o.defaultField);function i(e,t){return r({},t,{fullField:o.fullField+"."+e})}function u(n){void 0===n&&(n=[]);var u=n;if(Array.isArray(u)||(u=[u]),!s.suppressWarning&&u.length&&E.warning("async-validator:",u),u.length&&void 0!==o.message&&(u=[].concat(o.message)),u=u.map(y(o)),s.first&&u.length)return m[o.field]=1,t(u);if(a){if(o.required&&!e.value)return void 0!==o.message?u=[].concat(o.message).map(y(o)):s.error&&(u=[s.error(o,f(s.messages.required,o.field))]),t(u);var c={};if(o.defaultField)for(var l in e.value)e.value.hasOwnProperty(l)&&(c[l]=o.defaultField);for(var d in c=r({},c,e.rule.fields))if(c.hasOwnProperty(d)){var p=Array.isArray(c[d])?c[d]:[c[d]];c[d]=p.map(i.bind(null,d))}var h=new E(c);h.messages(s.messages),e.rule.options&&(e.rule.options.messages=s.messages,e.rule.options.error=s.error),h.validate(e.value,e.rule.options||s,(function(e){var r=[];u&&u.length&&r.push.apply(r,u),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(u)}a=a&&(o.required||!o.required&&e.value),o.field=e.field,o.asyncValidator?n=o.asyncValidator(o,e.value,u,e.source,s):o.validator&&(!0===(n=o.validator(o,e.value,u,e.source,s))?u():!1===n?u(o.message||o.field+" fails"):n instanceof Array?u(n):n instanceof Error&&u(n.message)),n&&n.then&&n.then((function(){return u()}),(function(e){return u(e)}))}),(function(e){!function(e){var t,r,n,o=[],a={};for(t=0;t<e.length;t++)r=e[t],n=void 0,Array.isArray(r)?o=(n=o).concat.apply(n,r):o.push(r);o.length?a=l(o):(o=null,a=null),c(o,a)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!x.hasOwnProperty(e.type))throw new Error(f("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;var t=Object.keys(e),r=t.indexOf("message");return-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0]?x.required:x[this.getType(e)]||!1}},E.register=function(e,t){if("function"!=typeof t)throw new Error("Cannot register a validator by type, validator is not a function");x[e]=t},E.warning=c,E.messages=O,E.validators=x,t.a=E}).call(this,r(129))},606:function(e,t,r){"use strict";(function(e){r(29);var n,o=r(17),a=r(0),i=r.n(a),u=r(23);(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,c,l=function(e){var t=e.isPrompt,r=e.confirmLeave;return i.a.createElement(u.a,{when:t,message:function(e){return!t||(o.a.confirm({title:"有编辑未保存，确定离开吗",okText:"离开",cancelText:"取消",onOk:function(){return r(e.pathname)}}),!1)},__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\prompt\\prompt.js",lineNumber:10,columnNumber:12}})},f=l;t.a=f,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(l,"PromptContent","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\prompt\\prompt.js"),s.register(f,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\common\\prompt\\prompt.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,r(22)(e))},774:function(e,t,r){"use strict";(function(e){r(217);var n,o=r(216),a=r(0),i=r.n(a),u=(r(775),r(776)),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAside.js";function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},p=function(e){var t=e.matFlowName,r=e.setLastPath,n=e.location.pathname,f=l(Object(a.useState)(""),2),d=f[0],p=f[1];Object(a.useEffect)((function(){0===n.indexOf("/index/task/".concat(t,"/assembly"))&&(n="/index/task/".concat(t,"/assembly")),r(n.substring(n.lastIndexOf("/")+1)),p(n)}),[n]);var m=[{to:"/index/task/".concat(t,"/work"),title:"工作空间",icon:"#icon-gongzuotongji",key:"2",enCode:"AA"},{to:"/index/task/".concat(t,"/config"),title:"配置",icon:"#icon-jiekoupeizhi",key:"3",enCode:"BB"},{to:"/index/task/".concat(t,"/structure"),title:"历史",icon:"#icon-lishijishi",key:"4",enCode:"CC"},{to:"/index/task/".concat(t,"/assembly"),title:"设置",icon:"#icon-shezhi",key:"5",enCode:"DD"}];return i.a.createElement("div",{className:"aside",__source:{fileName:s,lineNumber:77,columnNumber:10}},i.a.createElement("ul",{className:"content",__source:{fileName:s,lineNumber:78,columnNumber:13}},i.a.createElement(u.a,c({},e,{path:n,__source:{fileName:s,lineNumber:79,columnNumber:17}})),function(t){return t&&t.map((function(t){return i.a.createElement(o.a,c({code:t.enCode,key:t.key},e,{__source:{fileName:s,lineNumber:59,columnNumber:17}}),i.a.createElement("li",{key:t.key,className:d===t.to?"aside_content aside_active":"aside_content",onClick:function(){return function(t){e.history.push(t.to)}(t)},__source:{fileName:s,lineNumber:60,columnNumber:21}},i.a.createElement("div",{className:"aside_content_icon",__source:{fileName:s,lineNumber:64,columnNumber:25}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:s,lineNumber:65,columnNumber:29}},i.a.createElement("use",{xlinkHref:t.icon,__source:{fileName:s,lineNumber:66,columnNumber:33}}))),i.a.createElement("div",{className:"aside_content_title",__source:{fileName:s,lineNumber:69,columnNumber:25}},t.title)))}))}(m)))};d(p,'useState{[nav,setNav]("")}\nuseEffect{}');var m,h,y=p;t.a=y,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(p,"ProjectAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAside.js"),m.register(y,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAside.js")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,r(22)(e))},775:function(e,t,r){},776:function(e,t,r){"use strict";(function(e){r(539);var n,o=r(515),a=r(0),i=r.n(a),u=(r(777),r(11)),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,l,f=function(e){var t=e.matFlowStore,r=e.structureListStore,n=e.path,a=t.matFlowName,u=t.matFlowList,c=t.lastPath,l=t.matFlowId,f=r.setState,d=r.setEnforcer,p=r.setMode,m=i.a.createElement("div",{className:"opt",__source:{fileName:s,lineNumber:29,columnNumber:9}},i.a.createElement("div",{className:"opt-content",__source:{fileName:s,lineNumber:30,columnNumber:13}},i.a.createElement("div",{className:"opt-content-title",__source:{fileName:s,lineNumber:31,columnNumber:17}},"流水线名称"),i.a.createElement("div",{className:"opt-content-group",__source:{fileName:s,lineNumber:32,columnNumber:17}},u&&u.map((function(t){return i.a.createElement("div",{onClick:function(){!function(t){a!==t.matFlowName&&(f(0),d(null),p(0),n==="/index/task/".concat(a,"/assembly")?e.history.push("/index/task/".concat(t.matFlowName,"/assembly")):0===n.indexOf("/index/task/".concat(a,"/assembly"))?e.history.push("/index/task/".concat(t.matFlowName,"/assembly/").concat(c)):e.history.push("/index/task/".concat(t.matFlowName,"/").concat(c)))}(t)},key:t.matFlowId,className:"opt-content-group_item ".concat(t.matFlowId===l?"opt-content-active":""),__source:{fileName:s,lineNumber:36,columnNumber:33}},i.a.createElement("span",{__source:{fileName:s,lineNumber:40,columnNumber:37}},t.matFlowName))})))));return i.a.createElement(o.a,{overlay:m,trigger:["click"],overlayStyle:{paddingLeft:10},__source:{fileName:s,lineNumber:53,columnNumber:9}},i.a.createElement("li",{className:"aside_content aside_dropdown",style:{padding:10},onClick:function(e){return e.preventDefault()},__source:{fileName:s,lineNumber:54,columnNumber:13}},i.a.createElement("svg",{className:"icon","aria-hidden":"true",__source:{fileName:s,lineNumber:58,columnNumber:21}},i.a.createElement("use",{xlinkHref:"#icon-shaixuan1",__source:{fileName:s,lineNumber:59,columnNumber:25}}))))},d=Object(u.b)("structureListStore","matFlowStore")(Object(u.c)(f));t.a=d,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(f,"ProjectAsideOpt","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js"),c.register(d,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\project\\common\\components\\projectAsideOpt.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,r(22)(e))},777:function(e,t,r){}}]);