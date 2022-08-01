(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{464:function(e,t,r){"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var e=r(53),n=r(101),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.suspense_list"):60120,g=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,v=o?Symbol.for("react.block"):60121,b=o?Symbol.for("react.fundamental"):60117,C=o?Symbol.for("react.responder"):60118,k=o?Symbol.for("react.scope"):60119,w="function"==typeof Symbol&&Symbol.iterator;function O(e){if(null===e||"object"!=typeof e)return null;var t=w&&e[w]||e["@@iterator"];return"function"==typeof t?t:null}var S={current:null},_={current:null},j=/^(.*)[\\\/]/;function D(e){if(null==e)return null;if("number"==typeof e.tag&&U("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case s:return"Fragment";case a:return"Portal";case c:return"Profiler";case u:return"StrictMode";case h:return"Suspense";case y:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case l:return"Context.Consumer";case p:return"Context.Provider";case d:return n=e,o=e.render,i="ForwardRef",f=o.displayName||o.name||"",n.displayName||(""!==f?i+"("+f+")":i);case g:return D(e.type);case v:return D(e.render);case m:var t=1===(r=e)._status?r._result:null;if(t)return D(t)}var r,n,o,i,f;return null}var R={},P=null;function x(e){P=e}R.getCurrentStack=null,R.getStackAddendum=function(){var e="";if(P){var t=D(P.type),r=P._owner;e+=function(e,t,r){var n="";if(t){var o=t.fileName,i=o.replace(j,"");if(/^index\./.test(i)){var a=o.match(j);if(a){var s=a[1];if(s)i=s.replace(j,"")+"/"+i}}n=" (at "+i+":"+t.lineNumber+")"}else r&&(n=" (created by "+r+")");return"\n    in "+(e||"Unknown")+n}(t,P._source,r&&D(r.type))}var n=R.getCurrentStack;return n&&(e+=n()||""),e};var $={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:e};function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];N("warn",e,r)}function U(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];N("error",e,r)}function N(e,t,r){if(!(r.length>0&&"string"==typeof r[r.length-1]&&0===r[r.length-1].indexOf("\n    in"))){var n=$.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]))}var o=r.map((function(e){return""+e}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o);try{var i=0,a="Warning: "+t.replace(/%s/g,(function(){return r[i++]}));throw new Error(a)}catch(e){}}e($,{ReactDebugCurrentFrame:R,ReactComponentTreeHook:{}});var A={};function I(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;A[o]||(U("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),A[o]=!0)}var M={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){I(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){I(e,"replaceState")},enqueueSetState:function(e,t,r,n){I(e,"setState")}},T={};function L(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||M}Object.freeze(T),L.prototype.isReactComponent={},L.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},L.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var V={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},F=function(e,t){Object.defineProperty(L.prototype,e,{get:function(){E("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var z in V)V.hasOwnProperty(z)&&F(z,V[z]);function H(){}function B(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||M}H.prototype=L.prototype;var W=B.prototype=new H;W.constructor=B,e(W,L.prototype),W.isPureReactComponent=!0;var q,K,Y,J=Object.prototype.hasOwnProperty,G={key:!0,ref:!0,__self:!0,__source:!0};function X(e){if(J.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function Q(e){if(J.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function Z(e,t){var r=function(){q||(q=!0,U("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function ee(e,t){var r=function(){K||(K=!0,U("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function te(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=D(_.current.type);Y[t]||(U('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref',D(_.current.type),e.ref),Y[t]=!0)}}Y={};var re=function(e,t,r,n,o,a,s){var u={$$typeof:i,type:e,key:t,ref:r,props:s,_owner:a,_store:{}};return Object.defineProperty(u._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(u,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(u,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(u.props),Object.freeze(u)),u};function ne(e,t,r){var n,o={},i=null,a=null,s=null,u=null;if(null!=t)for(n in X(t)&&(a=t.ref,te(t)),Q(t)&&(i=""+t.key),s=void 0===t.__self?null:t.__self,u=void 0===t.__source?null:t.__source,t)J.call(t,n)&&!G.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var p=Array(c),l=0;l<c;l++)p[l]=arguments[l+2];Object.freeze&&Object.freeze(p),o.children=p}if(e&&e.defaultProps){var f=e.defaultProps;for(n in f)void 0===o[n]&&(o[n]=f[n])}if(i||a){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;i&&Z(o,d),a&&ee(o,d)}return re(e,i,a,s,u,_.current,o)}function oe(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,i,a=e({},t.props),s=t.key,u=t.ref,c=t._self,p=t._source,l=t._owner;if(null!=r)for(o in X(r)&&(u=r.ref,l=_.current),Q(r)&&(s=""+r.key),t.type&&t.type.defaultProps&&(i=t.type.defaultProps),r)J.call(r,o)&&!G.hasOwnProperty(o)&&(void 0===r[o]&&void 0!==i?a[o]=i[o]:a[o]=r[o]);var f=arguments.length-2;if(1===f)a.children=n;else if(f>1){for(var d=Array(f),h=0;h<f;h++)d[h]=arguments[h+2];a.children=d}return re(t.type,s,u,c,p,l,a)}function ie(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var ae=!1,se=/\/+/g;function ue(e){return(""+e).replace(se,"$&/")}var ce,pe=[];function le(e,t,r,n){if(pe.length){var o=pe.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function fe(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,pe.length<10&&pe.push(e)}function de(e,t,r){return null==e?0:function e(t,r,n,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var u,c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return n(o,t,""===r?"."+he(t,0):r),1;var p=0,l=""===r?".":r+":";if(Array.isArray(t))for(var f=0;f<t.length;f++)p+=e(u=t[f],l+he(u,f),n,o);else{var d=O(t);if("function"==typeof d){d===t.entries&&(ae||E("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead."),ae=!0);for(var h,y=d.call(t),g=0;!(h=y.next()).done;)p+=e(u=h.value,l+he(u,g++),n,o)}else if("object"===s){var m;m=" If you meant to render a collection of children, use an array instead."+R.getStackAddendum();var v=""+t;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===v?"object with keys {"+Object.keys(t).join(", ")+"}":v)+")."+m)}}return p}(e,"",t,r)}function he(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function ye(e,t,r){var n=e.func,o=e.context;n.call(o,t,e.count++)}function ge(e,t,r){var n,o,i=e.result,a=e.keyPrefix,s=e.func,u=e.context,c=s.call(u,t,e.count++);Array.isArray(c)?me(c,i,r,(function(e){return e})):null!=c&&(ie(c)&&(n=c,o=a+(!c.key||t&&t.key===c.key?"":ue(c.key)+"/")+r,c=re(n.type,o,n.ref,n._self,n._source,n._owner,n.props)),i.push(c))}function me(e,t,r,n,o){var i="";null!=r&&(i=ue(r)+"/");var a=le(t,i,n,o);de(e,ge,a),fe(a)}function ve(e){return"string"==typeof e||"function"==typeof e||e===s||e===f||e===c||e===u||e===h||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===p||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===C||e.$$typeof===k||e.$$typeof===v)}function be(){var e=S.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");return e}function Ce(){if(_.current){var e=D(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function ke(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}ce=!1;var we={};function Oe(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Ce();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!we[r]){we[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+D(e._owner.type)+"."),x(e),U('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',r,n),x(null)}}}function Se(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ie(n)&&Oe(n,t)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var o=O(e);if("function"==typeof o&&o!==e.entries)for(var i,a=o.call(e);!(i=a.next()).done;)ie(i.value)&&Oe(i.value,t)}}function _e(e){var t=e.type;if(null!=t&&"string"!=typeof t){var r,o=D(t);if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==d&&t.$$typeof!==g)return;r=t.propTypes}r?(x(e),n(r,e.props,"prop",o,R.getStackAddendum),x(null)):void 0===t.PropTypes||ce||(ce=!0,U("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")),"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||U("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function je(e){x(e);for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){U("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n);break}}null!==e.ref&&U("Invalid attribute `ref` supplied to `React.Fragment`."),x(null)}function De(e,t,r){var n=ve(e);if(!n){var o="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var a,u=ke(t);o+=u||Ce(),null===e?a="null":Array.isArray(e)?a="array":void 0!==e&&e.$$typeof===i?(a="<"+(D(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,U("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,o)}var c=ne.apply(this,arguments);if(null==c)return c;if(n)for(var p=2;p<arguments.length;p++)Se(arguments[p],e);return e===s?je(c):_e(c),c}var Re=!1;try{var Pe=Object.freeze({}),xe=new Map([[Pe,null]]),$e=new Set([Pe]);xe.set(0,0),$e.add(0)}catch(e){}var Ee=De,Ue=function(e,t,r){for(var n=oe.apply(this,arguments),o=2;o<arguments.length;o++)Se(arguments[o],n.type);return _e(n),n},Ne=function(e){var t=De.bind(null,e);return t.type=e,Re||(Re=!0,E("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return E("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},Ae={map:function(e,t,r){if(null==e)return e;var n=[];return me(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;var n=le(null,null,t,r);de(e,ye,n),fe(n)},count:function(e){return de(e,(function(){return null}),null)},toArray:function(e){var t=[];return me(e,t,null,(function(e){return e})),t},only:function(e){if(!ie(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=Ae,t.Component=L,t.Fragment=s,t.Profiler=c,t.PureComponent=B,t.StrictMode=u,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=Ue,t.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&U("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:p,_context:r};var n=!1,o=!1,i={$$typeof:l,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(i,{Provider:{get:function(){return o||(o=!0,U("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return n||(n=!0,U("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}}}),r.Consumer=i,r._currentRenderer=null,r._currentRenderer2=null,r},t.createElement=Ee,t.createFactory=Ne,t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){return null!=e&&e.$$typeof===g?U("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?U("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&U("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||U("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?")),{$$typeof:d,render:e}},t.isValidElement=ie,t.lazy=function(e){var t,r,n={$$typeof:m,_ctor:e,_status:-1,_result:null};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){U("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){U("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){return ve(e)||U("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:g,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return be().useCallback(e,t)},t.useContext=function(e,t){var r=be();if(void 0!==t&&U("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?U("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&U("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},t.useDebugValue=function(e,t){return be().useDebugValue(e,t)},t.useEffect=function(e,t){return be().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return be().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return be().useLayoutEffect(e,t)},t.useMemo=function(e,t){return be().useMemo(e,t)},t.useReducer=function(e,t,r){return be().useReducer(e,t,r)},t.useRef=function(e){return be().useRef(e)},t.useState=function(e){return be().useState(e)},t.version="16.14.0"})()},479:function(e,t,r){"use strict";e.exports=r(464)},698:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(444),o=r.n(n),i=r(37),a=r.n(i),s=r(1),u=r(102);function c(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"==typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var p={};function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"==typeof t[0]&&p[t[0]]||("string"==typeof t[0]&&(p[t[0]]=new Date),c.apply(void 0,t))}function f(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function d(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var a=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!a(n,e)||o&&!a(i,e))))}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return l("i18n.languages were undefined or empty",t.languages),!0;var n=void 0!==t.options.ignoreJSONStructure;return n?t.hasLoadedNamespace(e,{precheck:function(t,n){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):d(e,t,r)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e,t){var r=Object(s.useRef)();return Object(s.useEffect)((function(){r.current=t?r.current:e}),[e,t]),r.current};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=Object(s.useContext)(u.a)||{},i=n.i18n,a=n.defaultNS,c=r||i||Object(u.d)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new u.b),!c){l("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[p,{},!1];return d.t=p,d.i18n={},d.ready=!1,d}c.options.react&&void 0!==c.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var y=g(g(g({},Object(u.c)()),c.options.react),t),v=y.useSuspense,b=y.keyPrefix,C=e||a||c.options&&c.options.defaultNS;C="string"==typeof C?[C]:C||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(C);var k=(c.isInitialized||c.initializedStoreOnce)&&C.every((function(e){return h(e,c,y)}));function w(){return c.getFixedT(null,"fallback"===y.nsMode?C:C[0],b)}var O=Object(s.useState)(w),S=o()(O,2),_=S[0],j=S[1],D=C.join(),R=m(D),P=Object(s.useRef)(!0);Object(s.useEffect)((function(){var e=y.bindI18n,t=y.bindI18nStore;function r(){P.current&&j(w)}return P.current=!0,k||v||f(c,C,(function(){P.current&&j(w)})),k&&R&&R!==D&&P.current&&j(w),e&&c&&c.on(e,r),t&&c&&c.store.on(t,r),function(){P.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,r)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,r)}))}}),[c,D]);var x=Object(s.useRef)(!0);Object(s.useEffect)((function(){P.current&&!x.current&&j(w),x.current=!1}),[c]);var $=[_,c,k];if($.t=_,$.i18n=c,$.ready=k,k)return $;if(!k&&!v)return $;throw new Promise((function(e){f(c,C,(function(){e()}))}))}},713:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i,a=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0}),t.UnControlled=t.Controlled=void 0;var s,u=r(1),c="undefined"==typeof navigator||!0===e.PREVENT_CODEMIRROR_RENDER;c||(s=r(415));var p=function(){function e(){}return e.equals=function(e,t){var r=this,n=Object.keys,i=o(e),a=o(t);return e&&t&&"object"===i&&i===a?n(e).length===n(t).length&&n(e).every((function(n){return r.equals(e[n],t[n])})):e===t},e}(),l=function(){function e(e,t){this.editor=e,this.props=t}return e.prototype.delegateCursor=function(e,t,r){var n=this.editor.getDoc();r&&this.editor.focus(),t?n.setCursor(e):n.setCursor(e,null,{scroll:!1})},e.prototype.delegateScroll=function(e){this.editor.scrollTo(e.x,e.y)},e.prototype.delegateSelection=function(e,t){this.editor.getDoc().setSelections(e),t&&this.editor.focus()},e.prototype.apply=function(e){e&&e.selection&&e.selection.ranges&&this.delegateSelection(e.selection.ranges,e.selection.focus||!1),e&&e.cursor&&this.delegateCursor(e.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1),e&&e.scroll&&this.delegateScroll(e.scroll)},e.prototype.applyNext=function(e,t,r){e&&e.selection&&e.selection.ranges&&t&&t.selection&&t.selection.ranges&&!p.equals(e.selection.ranges,t.selection.ranges)&&this.delegateSelection(t.selection.ranges,t.selection.focus||!1),e&&e.cursor&&t&&t.cursor&&!p.equals(e.cursor,t.cursor)&&this.delegateCursor(r.cursor||t.cursor,t.autoScroll||!1,t.autoCursor||!1),e&&e.scroll&&t&&t.scroll&&!p.equals(e.scroll,t.scroll)&&this.delegateScroll(t.scroll)},e.prototype.applyUserDefined=function(e,t){t&&t.cursor&&this.delegateCursor(t.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1)},e.prototype.wire=function(e){var t=this;Object.keys(e||{}).filter((function(e){return/^on/.test(e)})).forEach((function(e){switch(e){case"onBlur":t.editor.on("blur",(function(e,r){t.props.onBlur(t.editor,r)}));break;case"onContextMenu":t.editor.on("contextmenu",(function(e,r){t.props.onContextMenu(t.editor,r)}));break;case"onCopy":t.editor.on("copy",(function(e,r){t.props.onCopy(t.editor,r)}));break;case"onCursor":t.editor.on("cursorActivity",(function(e){t.props.onCursor(t.editor,t.editor.getDoc().getCursor())}));break;case"onCursorActivity":t.editor.on("cursorActivity",(function(e){t.props.onCursorActivity(t.editor)}));break;case"onCut":t.editor.on("cut",(function(e,r){t.props.onCut(t.editor,r)}));break;case"onDblClick":t.editor.on("dblclick",(function(e,r){t.props.onDblClick(t.editor,r)}));break;case"onDragEnter":t.editor.on("dragenter",(function(e,r){t.props.onDragEnter(t.editor,r)}));break;case"onDragLeave":t.editor.on("dragleave",(function(e,r){t.props.onDragLeave(t.editor,r)}));break;case"onDragOver":t.editor.on("dragover",(function(e,r){t.props.onDragOver(t.editor,r)}));break;case"onDragStart":t.editor.on("dragstart",(function(e,r){t.props.onDragStart(t.editor,r)}));break;case"onDrop":t.editor.on("drop",(function(e,r){t.props.onDrop(t.editor,r)}));break;case"onFocus":t.editor.on("focus",(function(e,r){t.props.onFocus(t.editor,r)}));break;case"onGutterClick":t.editor.on("gutterClick",(function(e,r,n,o){t.props.onGutterClick(t.editor,r,n,o)}));break;case"onInputRead":t.editor.on("inputRead",(function(e,r){t.props.onInputRead(t.editor,r)}));break;case"onKeyDown":t.editor.on("keydown",(function(e,r){t.props.onKeyDown(t.editor,r)}));break;case"onKeyHandled":t.editor.on("keyHandled",(function(e,r,n){t.props.onKeyHandled(t.editor,r,n)}));break;case"onKeyPress":t.editor.on("keypress",(function(e,r){t.props.onKeyPress(t.editor,r)}));break;case"onKeyUp":t.editor.on("keyup",(function(e,r){t.props.onKeyUp(t.editor,r)}));break;case"onMouseDown":t.editor.on("mousedown",(function(e,r){t.props.onMouseDown(t.editor,r)}));break;case"onPaste":t.editor.on("paste",(function(e,r){t.props.onPaste(t.editor,r)}));break;case"onRenderLine":t.editor.on("renderLine",(function(e,r,n){t.props.onRenderLine(t.editor,r,n)}));break;case"onScroll":t.editor.on("scroll",(function(e){t.props.onScroll(t.editor,t.editor.getScrollInfo())}));break;case"onSelection":t.editor.on("beforeSelectionChange",(function(e,r){t.props.onSelection(t.editor,r)}));break;case"onTouchStart":t.editor.on("touchstart",(function(e,r){t.props.onTouchStart(t.editor,r)}));break;case"onUpdate":t.editor.on("update",(function(e){t.props.onUpdate(t.editor)}));break;case"onViewportChange":t.editor.on("viewportChange",(function(e,r,n){t.props.onViewportChange(t.editor,r,n)}))}}))},e}(),f=function(e){function t(t){var r=e.call(this,t)||this;return c||(r.applied=!1,r.appliedNext=!1,r.appliedUserDefined=!1,r.deferred=null,r.emulating=!1,r.hydrated=!1,r.initCb=function(){r.props.editorDidConfigure&&r.props.editorDidConfigure(r.editor)},r.mounted=!1),r}return a(t,e),t.prototype.hydrate=function(e){var t=this,r=e&&e.options?e.options:{},o=n({},s.defaults,this.editor.options,r);Object.keys(o).some((function(e){return t.editor.getOption(e)!==o[e]}))&&Object.keys(o).forEach((function(e){r.hasOwnProperty(e)&&t.editor.getOption(e)!==o[e]&&(t.editor.setOption(e,o[e]),t.mirror.setOption(e,o[e]))})),this.hydrated||(this.deferred?this.resolveChange(e.value):this.initChange(e.value||"")),this.hydrated=!0},t.prototype.initChange=function(e){this.emulating=!0;var t=this.editor.getDoc(),r=t.lastLine(),n=t.getLine(t.lastLine()).length;t.replaceRange(e||"",{line:0,ch:0},{line:r,ch:n}),this.mirror.setValue(e),t.clearHistory(),this.mirror.clearHistory(),this.emulating=!1},t.prototype.resolveChange=function(e){this.emulating=!0;var t=this.editor.getDoc();if("undo"===this.deferred.origin?t.undo():"redo"===this.deferred.origin?t.redo():t.replaceRange(this.deferred.text,this.deferred.from,this.deferred.to,this.deferred.origin),e&&e!==t.getValue()){var r=t.getCursor();t.setValue(e),t.setCursor(r)}this.emulating=!1,this.deferred=null},t.prototype.mirrorChange=function(e){var t=this.editor.getDoc();return"undo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.undo()):"redo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.redo()):this.mirror.replaceRange(e.text,e.from,e.to,e.origin),this.mirror.getValue()},t.prototype.componentDidMount=function(){var e=this;c||(this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&s.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=s(this.ref,this.props.options),this.shared=new l(this.editor,this.props),this.mirror=s((function(){}),this.props.options),this.editor.on("electricInput",(function(){e.mirror.setHistory(e.editor.getDoc().getHistory())})),this.editor.on("cursorActivity",(function(){e.mirror.setCursor(e.editor.getDoc().getCursor())})),this.editor.on("beforeChange",(function(t,r){if(!e.emulating){r.cancel(),e.deferred=r;var n=e.mirrorChange(e.deferred);e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,e.deferred,n)}})),this.editor.on("change",(function(t,r){e.mounted&&e.props.onChange&&e.props.onChange(e.editor,r,e.editor.getValue())})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getOption("autofocus")&&this.editor.focus(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(!c){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1),this.props.autoCursor||void 0===this.props.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.appliedNext||(this.shared.applyNext(e,this.props,t),this.appliedNext=!0),this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0}},t.prototype.componentWillUnmount=function(){c||this.props.editorWillUnmount&&this.props.editorWillUnmount(s)},t.prototype.shouldComponentUpdate=function(e,t){return!c},t.prototype.render=function(){var e=this;if(c)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return u.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(u.Component);t.Controlled=f;var d=function(e){function t(t){var r=e.call(this,t)||this;return c||(r.applied=!1,r.appliedUserDefined=!1,r.continueChange=!1,r.detached=!1,r.hydrated=!1,r.initCb=function(){r.props.editorDidConfigure&&r.props.editorDidConfigure(r.editor)},r.mounted=!1,r.onBeforeChangeCb=function(){r.continueChange=!0}),r}return a(t,e),t.prototype.hydrate=function(e){var t=this,r=e&&e.options?e.options:{},o=n({},s.defaults,this.editor.options,r);if(Object.keys(o).some((function(e){return t.editor.getOption(e)!==o[e]}))&&Object.keys(o).forEach((function(e){r.hasOwnProperty(e)&&t.editor.getOption(e)!==o[e]&&t.editor.setOption(e,o[e])})),!this.hydrated){var i=this.editor.getDoc(),a=i.lastLine(),u=i.getLine(i.lastLine()).length;i.replaceRange(e.value||"",{line:0,ch:0},{line:a,ch:u})}this.hydrated=!0},t.prototype.componentDidMount=function(){var e=this;c||(this.detached=!0===this.props.detach,this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&s.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=s(this.ref,this.props.options),this.shared=new l(this.editor,this.props),this.editor.on("beforeChange",(function(t,r){e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,r,e.editor.getValue(),e.onBeforeChangeCb)})),this.editor.on("change",(function(t,r){e.mounted&&e.props.onChange&&(e.props.onBeforeChange?e.continueChange&&e.props.onChange(e.editor,r,e.editor.getValue()):e.props.onChange(e.editor,r,e.editor.getValue()))})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getDoc().clearHistory(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(this.detached&&!1===this.props.detach&&(this.detached=!1,e.editorDidAttach&&e.editorDidAttach(this.editor)),this.detached||!0!==this.props.detach||(this.detached=!0,e.editorDidDetach&&e.editorDidDetach(this.editor)),!c&&!this.detached){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1,this.applied=!1,this.appliedUserDefined=!1),e.autoCursor||void 0===e.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.applied||(this.shared.apply(e),this.applied=!0),this.appliedUserDefined||(this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0)}},t.prototype.componentWillUnmount=function(){c||this.props.editorWillUnmount&&this.props.editorWillUnmount(s)},t.prototype.shouldComponentUpdate=function(e,t){var r=!0;return c&&(r=!1),this.detached&&e.detach&&(r=!1),r},t.prototype.render=function(){var e=this;if(c)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return u.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(u.Component);t.UnControlled=d}).call(this,r(34))}}]);