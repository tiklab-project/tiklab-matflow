(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{270:function(e,t,r){"use strict";r.r(t),function(e){var n,a=r(0),o=r.n(a),l=(r(765),r(766)),i=r(23),c=r(155),u="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\system.js";function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var f,m,d=function(e){var t=e.route;return o.a.createElement("div",{className:"system",__source:{fileName:u,lineNumber:10,columnNumber:9}},o.a.createElement(l.a,s({},e,{__source:{fileName:u,lineNumber:11,columnNumber:13}})),o.a.createElement("div",{className:"system-content",__source:{fileName:u,lineNumber:12,columnNumber:13}},Object(c.a)(t.routes)))},b=Object(i.g)(d);t.default=b,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(d,"System","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\system.js"),f.register(b,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\system.js")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,r(22)(e))},327:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(147);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},328:function(e,t,r){var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(333);var a=r(330),o=r(334);function l(e,t){return Object(n.a)(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,t)||Object(a.a)(e,t)||Object(o.a)()}},330:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(332);function a(e,t){if(e){if("string"==typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},332:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},333:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return n}))},334:function(e,t,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,"a",(function(){return n}))},336:function(e,t,r){"use strict";function n(e,t){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===t?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:e=360===t?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t))}function a(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function o(e){return e<=1?"".concat(100*Number(e),"%"):e}function l(e){return 1===e.length?"0"+e:String(e)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l}))},341:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(73);function a(e,t){if(null==e)return{};var r,a,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},343:function(e,t,r){"use strict";r.d(t,"g",(function(){return a})),r.d(t,"b",(function(){return l})),r.d(t,"f",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return f}));var n=r(336);function a(e,t,r){return{r:255*Object(n.a)(e,255),g:255*Object(n.a)(t,255),b:255*Object(n.a)(r,255)}}function o(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(t-e):r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function l(e,t,r){var a,l,i;if(e=Object(n.a)(e,360),t=Object(n.a)(t,100),r=Object(n.a)(r,100),0===t)l=r,i=r,a=r;else{var c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;a=o(u,c,e+1/3),l=o(u,c,e),i=o(u,c,e-1/3)}return{r:255*a,g:255*l,b:255*i}}function i(e,t,r){e=Object(n.a)(e,255),t=Object(n.a)(t,255),r=Object(n.a)(r,255);var a=Math.max(e,t,r),o=Math.min(e,t,r),l=0,i=a,c=a-o,u=0===a?0:c/a;if(a===o)l=0;else{switch(a){case e:l=(t-r)/c+(t<r?6:0);break;case t:l=(r-e)/c+2;break;case r:l=(e-t)/c+4}l/=6}return{h:l,s:u,v:i}}function c(e,t,r){e=6*Object(n.a)(e,360),t=Object(n.a)(t,100),r=Object(n.a)(r,100);var a=Math.floor(e),o=e-a,l=r*(1-t),i=r*(1-o*t),c=r*(1-(1-o)*t),u=a%6;return{r:255*[r,i,l,l,c,r][u],g:255*[c,r,r,i,l,l][u],b:255*[l,l,c,r,r,i][u]}}function u(e,t,r,a){var o=[Object(n.d)(Math.round(e).toString(16)),Object(n.d)(Math.round(t).toString(16)),Object(n.d)(Math.round(r).toString(16))];return a&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function s(e){return f(e)/255}function f(e){return parseInt(e,16)}},364:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(343),a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},o=r(336);function l(e){var t={r:0,g:0,b:0},r=1,l=null,i=null,c=null,u=!1,m=!1;return"string"==typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var t=!1;if(a[e])e=a[e],t=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=s.rgb.exec(e);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=s.rgba.exec(e))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=s.hsl.exec(e))return{h:r[1],s:r[2],l:r[3]};if(r=s.hsla.exec(e))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=s.hsv.exec(e))return{h:r[1],s:r[2],v:r[3]};if(r=s.hsva.exec(e))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=s.hex8.exec(e))return{r:Object(n.d)(r[1]),g:Object(n.d)(r[2]),b:Object(n.d)(r[3]),a:Object(n.a)(r[4]),format:t?"name":"hex8"};if(r=s.hex6.exec(e))return{r:Object(n.d)(r[1]),g:Object(n.d)(r[2]),b:Object(n.d)(r[3]),format:t?"name":"hex"};if(r=s.hex4.exec(e))return{r:Object(n.d)(r[1]+r[1]),g:Object(n.d)(r[2]+r[2]),b:Object(n.d)(r[3]+r[3]),a:Object(n.a)(r[4]+r[4]),format:t?"name":"hex8"};if(r=s.hex3.exec(e))return{r:Object(n.d)(r[1]+r[1]),g:Object(n.d)(r[2]+r[2]),b:Object(n.d)(r[3]+r[3]),format:t?"name":"hex"};return!1}(e)),"object"==typeof e&&(f(e.r)&&f(e.g)&&f(e.b)?(t=Object(n.g)(e.r,e.g,e.b),u=!0,m="%"===String(e.r).substr(-1)?"prgb":"rgb"):f(e.h)&&f(e.s)&&f(e.v)?(l=Object(o.c)(e.s),i=Object(o.c)(e.v),t=Object(n.c)(e.h,l,i),u=!0,m="hsv"):f(e.h)&&f(e.s)&&f(e.l)&&(l=Object(o.c)(e.s),c=Object(o.c)(e.l),t=Object(n.b)(e.h,l,c),u=!0,m="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=Object(o.b)(r),{ok:u,format:e.format||m,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}var i="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),c="[\\s|\\(]+(".concat(i,")[,|\\s]+(").concat(i,")[,|\\s]+(").concat(i,")\\s*\\)?"),u="[\\s|\\(]+(".concat(i,")[,|\\s]+(").concat(i,")[,|\\s]+(").concat(i,")[,|\\s]+(").concat(i,")\\s*\\)?"),s={CSS_UNIT:new RegExp(i),rgb:new RegExp("rgb"+c),rgba:new RegExp("rgba"+u),hsl:new RegExp("hsl"+c),hsla:new RegExp("hsla"+u),hsv:new RegExp("hsv"+c),hsva:new RegExp("hsva"+u),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function f(e){return Boolean(s.CSS_UNIT.exec(String(e)))}},765:function(e,t,r){},766:function(e,t,r){"use strict";(function(e){r(247);var n,a=r(245),o=r(0),l=r.n(o),i=r(587),c=r(874),u=r(767),s="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\systemAside.js";function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},y=function(e){var t=e.location.pathname,r=m(Object(o.useState)(t),2),n=r[0],d=r[1],b=m(Object(o.useState)(["/index/system/syr/feature"]),2),y=b[0],p=b[1],g=JSON.parse(localStorage.getItem("authConfig")).authType;Object(o.useEffect)((function(){d(t)}),[t]);var h=function(t,r){return l.a.createElement(a.a,f({key:t.key,code:t.enCode},e,{__source:{fileName:s,lineNumber:24,columnNumber:13}}),l.a.createElement("li",{style:{cursor:"pointer",paddingLeft:"".concat(20*r+20)},className:"system-aside-li system-aside-second ".concat(t.key===n?"system-aside-select":null),onClick:function(){return r=t.key,void e.history.push(r);var r},key:t.key,__source:{fileName:s,lineNumber:25,columnNumber:17}},l.a.createElement("span",{style:{paddingRight:5},__source:{fileName:s,lineNumber:30,columnNumber:21}},t.icon),l.a.createElement("span",{__source:{fileName:s,lineNumber:31,columnNumber:21}},t.label)))},N=function t(r,n){return l.a.createElement(a.a,f({key:r.key,code:r.enCode},e,{__source:{fileName:s,lineNumber:39,columnNumber:13}}),l.a.createElement("li",{key:r.code,className:"system-aside-li",__source:{fileName:s,lineNumber:40,columnNumber:17}},l.a.createElement("div",{className:"system-aside-item system-aside-first",style:{paddingLeft:"".concat(20*n+20)},onClick:function(){return j(r.key)},__source:{fileName:s,lineNumber:41,columnNumber:21}},l.a.createElement("span",{style:{color:"$blue-main"},__source:{fileName:s,lineNumber:45,columnNumber:25}},l.a.createElement("span",{style:{paddingRight:5},__source:{fileName:s,lineNumber:46,columnNumber:29}},r.icon),l.a.createElement("span",{className:"system-aside-title",__source:{fileName:s,lineNumber:47,columnNumber:29}},r.label)),l.a.createElement("div",{className:"system-aside-item-icon",__source:{fileName:s,lineNumber:49,columnNumber:25}},r.children?v(r.key)?l.a.createElement(i.a,{style:{fontSize:"10px"},__source:{fileName:s,lineNumber:53,columnNumber:41}}):l.a.createElement(c.a,{style:{fontSize:"10px"},__source:{fileName:s,lineNumber:54,columnNumber:41}}):"")),l.a.createElement("ul",{className:"system-aside-ul ".concat(v(r.key)?null:"system-aside-hidden"),__source:{fileName:s,lineNumber:59,columnNumber:21}},r.children&&r.children.map((function(e){var r=n+1;return e.children&&e.children.length?t(e,r):h(e,r)})))))},v=function(e){return y.some((function(t){return t===e}))},j=function(e){v(e)?p(y.filter((function(t){return t!==e}))):p(y.concat(e))};return l.a.createElement("div",{className:"system-aside",__source:{fileName:s,lineNumber:86,columnNumber:9}},l.a.createElement("ul",{style:{padding:"10px 0 0"},key:"0",className:"system-aside-top",__source:{fileName:s,lineNumber:87,columnNumber:13}},g&&u.b.map((function(e){return e.children&&e.children.length>0?N(e,0):h(e,0)})),u.a.map((function(e){return e.children&&e.children.length>0?N(e,0):h(e,0)})),!1))};b(y,'useState{[selectKey,setSelectKey](path)}\nuseState{[expandedTree,setExpandedTree](["/index/system/syr/feature"])}\nuseEffect{}');var p,g,h=y;t.a=h,(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(y,"SystemAside","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\systemAside.js"),p.register(h,"default","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\systemAside.js")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)}).call(this,r(22)(e))},767:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return k})),r.d(t,"a",(function(){return O}));var n,a=r(0),o=r.n(a),l=r(864),i=r(865),c=r(817),u=r(866),s=r(867),f=r(868),m=r(869),d=r(846),b=r(870),y=r(871),p=r(850),g=r(872),h=r(873),N="D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js";(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var v,j,k=[{key:"1",label:"账号与成员",enCode:"I",icon:o.a.createElement(l.a,{__source:{fileName:N,lineNumber:12,columnNumber:14}}),children:[{key:"/index/system/dashbord",label:"组织管理",icon:o.a.createElement(i.a,{__source:{fileName:N,lineNumber:17,columnNumber:22}}),enCode:"F"},{key:"/index/system/list",label:"用户列表",icon:o.a.createElement(l.a,{__source:{fileName:N,lineNumber:23,columnNumber:22}}),enCode:"H"},{key:"/index/system/directory",label:"目录管理",icon:o.a.createElement(c.a,{__source:{fileName:N,lineNumber:29,columnNumber:22}}),enCode:"G"}]}],O=[{key:"/index/system/syr/role",label:"权限",icon:o.a.createElement(u.a,{__source:{fileName:N,lineNumber:40,columnNumber:15}}),enCode:"E"},{key:"/index/system/proof",label:"凭证管理",icon:o.a.createElement(s.a,{__source:{fileName:N,lineNumber:46,columnNumber:14}}),enCode:"F"},{key:"/index/system/envi",label:"环境配置",icon:o.a.createElement(f.a,{__source:{fileName:N,lineNumber:52,columnNumber:14}}),enCode:"J"},{key:"/index/system/mes/sendType",label:"消息通知",icon:o.a.createElement(m.a,{__source:{fileName:N,lineNumber:58,columnNumber:14}}),enCode:"I"},{key:"3",label:"待办事项",icon:o.a.createElement(d.a,{__source:{fileName:N,lineNumber:64,columnNumber:14}}),enCode:"I",children:[{key:"/index/system/task",label:"待办事项",icon:o.a.createElement(d.a,{__source:{fileName:N,lineNumber:70,columnNumber:22}}),enCode:"J"},{key:"/index/system/myTodoTask",label:"我的待办事项 ",icon:o.a.createElement(d.a,{__source:{fileName:N,lineNumber:76,columnNumber:22}}),enCode:"F"}]},{key:"/index/system/plugin",label:"插件管理",icon:o.a.createElement(b.a,{__source:{fileName:N,lineNumber:84,columnNumber:14}}),enCode:"G"},{key:"2",label:"安全",icon:o.a.createElement(y.a,{__source:{fileName:N,lineNumber:90,columnNumber:14}}),enCode:"I",children:[{key:"/index/system/myLog",label:"操作日志",icon:o.a.createElement(y.a,{__source:{fileName:N,lineNumber:96,columnNumber:22}}),enCode:"H"}]},{key:"/index/system/info",label:"系统信息",icon:o.a.createElement(p.a,{__source:{fileName:N,lineNumber:104,columnNumber:14}}),enCode:"H"}],_=[{key:"4",label:"基础数据",icon:o.a.createElement(g.a,{__source:{fileName:N,lineNumber:113,columnNumber:14}}),enCode:"E",children:[{key:"/index/system/syr/feature",label:"系统功能",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:119,columnNumber:22}}),enCode:"E1"},{key:"/index/system/project/feature",label:"项目功能",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:125,columnNumber:22}}),enCode:"I2"},{key:"/index/system/project/role",label:"项目角色",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:131,columnNumber:22}}),enCode:"I"},{key:"/index/system/todoTemp",label:"代办模板 ",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:137,columnNumber:22}}),enCode:"F"},{key:"/index/system/logTemplate",label:"日志模板",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:143,columnNumber:22}}),enCode:"H"},{key:"/index/system/mes/management",label:"消息管理",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:149,columnNumber:22}}),enCode:"J"},{key:"/index/system/mes/type",label:"消息类型管理",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:155,columnNumber:22}}),enCode:"J"},{key:"/index/system/mes/template",label:"消息模板管理",icon:o.a.createElement(h.a,{__source:{fileName:N,lineNumber:161,columnNumber:22}}),enCode:"J"}]}];(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(k,"departmentRouter","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js"),v.register(O,"applicationRouter","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js"),v.register(_,"templateRouter","D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\system\\common\\sysRouters.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}).call(this,r(22)(e))}}]);