(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{111:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var u=i[c];if(!s(u))return!1;var l=t[u],h=e[u];if(!1===(o=n?n.call(r,l,h,u):void 0)||void 0===o&&l!==h)return!1}return!0}},249:function(t,e){var n=[],r=[];function o(t,e){if(e=e||{},void 0===t)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,i=!0===e.prepend?"prepend":"append",a=void 0!==e.container?e.container:document.querySelector("head"),s=n.indexOf(a);return-1===s&&(s=n.push(a)-1,r[s]={}),void 0!==r[s]&&void 0!==r[s][i]?o=r[s][i]:(o=r[s][i]=function(){var t=document.createElement("style");return t.setAttribute("type","text/css"),t}(),"prepend"===i?a.insertBefore(o,a.childNodes[0]):a.appendChild(o)),65279===t.charCodeAt(0)&&(t=t.substr(1,t.length)),o.styleSheet?o.styleSheet.cssText+=t:o.textContent+=t,o}t.exports=o,t.exports.insertCss=o},440:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(41),o=n(169),i=n(128),a=n(27),s=function(){function t(e,n){var o;if(void 0===e&&(e=""),void 0===n&&(n={}),e instanceof t)return e;"number"==typeof e&&(e=Object(r.d)(e)),this.originalInput=e;var a=Object(i.a)(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=n.format)&&void 0!==o?o:a.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,n=t.g/255,r=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=Object(a.b)(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=Object(r.h)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=Object(r.h)(this.r,this.g,this.b),e=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv(".concat(e,", ").concat(n,"%, ").concat(o,"%)"):"hsva(".concat(e,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var t=Object(r.g)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=Object(r.g)(this.r,this.g,this.b),e=Math.round(360*t.h),n=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl(".concat(e,", ").concat(n,"%, ").concat(o,"%)"):"hsla(".concat(e,", ").concat(n,"%, ").concat(o,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(t){return void 0===t&&(t=!1),Object(r.f)(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),Object(r.j)(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb(".concat(t,", ").concat(e,", ").concat(n,")"):"rgba(".concat(t,", ").concat(e,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var t=function(t){return"".concat(Math.round(100*Object(a.a)(t,255)),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*Object(a.a)(t,255))};return 1===this.a?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+Object(r.f)(this.r,this.g,this.b,!1),e=0,n=Object.entries(o.a);e<n.length;e++){var i=n[e],a=i[0];if(t===i[1])return a}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var n=!1,r=this.a<1&&this.a>=0;return e||!r||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=Object(a.c)(n.l),new t(n)},t.prototype.brighten=function(e){void 0===e&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),new t(n)},t.prototype.darken=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=Object(a.c)(n.l),new t(n)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=Object(a.c)(n.s),new t(n)},t.prototype.saturate=function(e){void 0===e&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=Object(a.c)(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,new t(n)},t.prototype.mix=function(e,n){void 0===n&&(n=50);var r=this.toRgb(),o=new t(e).toRgb(),i=n/100;return new t({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},t.prototype.analogous=function(e,n){void 0===e&&(e=6),void 0===n&&(n=30);var r=this.toHsl(),o=360/n,i=[this];for(r.h=(r.h-(o*e>>1)+720)%360;--e;)r.h=(r.h+o)%360,i.push(new t(r));return i},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var n=this.toHsv(),r=n.h,o=n.s,i=n.v,a=[],s=1/e;e--;)a.push(new t({h:r,s:o,v:i})),i=(i+s)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),r=new t(e).toRgb();return new t({r:r.r+(n.r-r.r)*n.a,g:r.g+(n.g-r.g)*n.a,b:r.b+(n.b-r.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),r=n.h,o=[this],i=360/e,a=1;a<e;a++)o.push(new t({h:(r+a*i)%360,s:n.s,l:n.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}()},468:function(t,e,n){var r={"./es":445,"./es-do":446,"./es-do.js":446,"./es-mx":447,"./es-mx.js":447,"./es-us":448,"./es-us.js":448,"./es.js":445,"./zh-cn":449,"./zh-cn.js":449};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=468},868:function(t,e,n){"use strict";n(49);var r=n(21),o=(n(51),n(19)),i=(n(46),n(23)),a=n(0),s=n.n(a);e.a=function(t){var e=t.title,n=t.icon,a=t.children,c=t.style,u=void 0===c?{}:c;return s.a.createElement(r.default,null,s.a.createElement(o.default,{span:24},s.a.createElement("div",{className:"tiklab_title",style:u},s.a.createElement(i.default,null,n,s.a.createElement("span",null,e)),a)))}},917:function(t,e,n){"use strict";n.r(e);n(645);var r=n(635),o=(n(81),n(31)),i=(n(67),n(18)),a=(n(46),n(23)),s=n(0),c=n.n(s),u=n(6),l=n(868),h=n(113),p=n.n(h),f=n.p+"images/vip.jpg";function d(){return(d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,s=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(t,e)||v(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(t){if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var y=function(t){var e=t.bgroup,n=void 0===e?"eas":e,h=t.children,v=b(Object(s.useState)([]),2),g=v[0],y=v[1],w=b(Object(s.useState)({}),2),O=w[0],S=w[1],E=b(Object(s.useState)([]),2),j=E[0],N=E[1],x=window.location.origin;Object(s.useEffect)((function(){_(),M()}),[]);var _=function(){u.Axios.post("/licence/detail").then((function(t){!t.code&&t.data&&y(t.data)}))},M=function(){u.Axios.post("/version/getVersion").then((function(t){t.code||(S(t.data),localStorage.setItem(u.LOCALSTORAGE_KEY.VERSION_INFO,JSON.stringify(t.data)))}))},H={name:"file",action:x+("/"===x.substring(x.length-1,x.length)?"licence/import":"/licence/import"),onChange:function(t){var e=m(t.fileList);return e=(e=e.slice(-1)).map((function(t){return t.response&&(t.url=t.response.url),t})),N(e),t.file.status,"done"===t.file.status?(setTimeout((function(){N([]),_()}),1e3),i.default.success("".concat(t.file.name," file uploaded successfully"))):"error"===t.file.status?i.default.error("".concat(t.file.name," file upload failed.")):void 0}};return c.a.createElement("div",{className:"tailab_version"},c.a.createElement("div",{className:"tailab_version_container"},c.a.createElement(l.a,{title:"版本与许可证"},c.a.createElement(r.a,d({},H,{fileList:j}),c.a.createElement(o.default,null,"导入"))),c.a.createElement("div",{className:"tailab_version_title2"},"版本信息"),c.a.createElement("div",{className:"tailab_version-info"},c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"应用名称："),function(t){switch(t){case"postin":return"PostIn";case"teamwire":return"TeamWire";case"teston":return"TestOn";case"kanass":return"Kanass";case"matflow":return"MatFlow";case"xcode":return"XCode";case"xpack":return"XPack";default:return"Eas"}}(n)),c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"版本号："),"1.0.0"),O&&c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"版本类型："),function(t){switch(t){case 1:return c.a.createElement(a.default,null,c.a.createElement("img",{src:f,height:30,width:30,alt:"vip",style:{borderRadius:"50%"}}),c.a.createElement("span",null,"社区版"));case 2:return c.a.createElement(a.default,null,c.a.createElement("img",{src:f,height:30,width:30,alt:"vip",style:{borderRadius:"50%"}}),c.a.createElement("span",null,"企业版"));default:return c.a.createElement(a.default,null,c.a.createElement("img",{src:f,height:30,width:30,alt:"vip",style:{borderRadius:"50%"}}),c.a.createElement("span",null,"社区版"))}}(O.release)),1!==O.release&&g&&g.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"Licence 名称："),g[0].name),c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"购买人："),g[0].userId),c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"用户数："),g[0].userNum>0?g[0].userNum:"无限制"),c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"购买日期："),p()(g[0].expiryTime).format("YYYY-MM-DD HH:mm:ss")),c.a.createElement("div",{className:"tailab_version-info-item"},c.a.createElement("span",{className:"info-item-title"},"过期日期："),p()(g[0].issuedTime).format("YYYY-MM-DD HH:mm:ss")))),c.a.createElement("div",{className:"tailab_version_title2"},"企业版特性"),h))},w=(n(80),n(35)),O=n(386),S=n(376),E="D:\\idea\\tiklab\\tiklab-matflow-ui\\src\\setting\\licence\\Version.js";function j(){return(j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.default=function(t){var e=function(t){return t?c.a.createElement(O.a,{style:{color:"#0063FF"},__source:{fileName:E,lineNumber:16,columnNumber:20}}):c.a.createElement(S.a,{style:{color:"#ff0000"},__source:{fileName:E,lineNumber:18,columnNumber:20}})},n=[{title:"功能",dataIndex:"title",key:"title",colSpan:2,render:function(t,e,n){var r={children:t,props:{}};return 0===n&&(r.props.rowSpan=3),n>0&&n<3&&(r.props.rowSpan=0),3===n&&(r.props.rowSpan=2),n>3&&(r.props.rowSpan=0),r}},{title:"功能",dataIndex:"feature",key:"feature",colSpan:0},{title:"社区版",dataIndex:"ce",key:"ce",render:function(t){return e(t)}},{title:"企业版",dataIndex:"ee",key:"ee",render:function(t){return e(t)}}];return c.a.createElement(y,j({},t,{bgroup:"matflow",__source:{fileName:E,lineNumber:106,columnNumber:12}}),c.a.createElement(w.default,{bordered:!0,columns:n,dataSource:[{key:"1",title:"基本功能",feature:"LDAP",ce:!1,ee:!0},{key:"2",title:"基本功能",feature:"在线客服",ce:!1,ee:!0},{key:"3",title:"基本功能",feature:"用户和部门",ce:!0,ee:!0},{key:"4",title:"升级功能",feature:"插件",ce:!1,ee:!0},{key:"5",title:"升级功能",feature:"权限",ce:!0,ee:!0}],pagination:!1,__source:{fileName:E,lineNumber:107,columnNumber:9}}))}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return v}));var r,o=n(0),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=o.createContext(null),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.render=function(){return o.createElement(a.Provider,{value:this.props.store},this.props.children)},e}(o.Component),c=n(111),u=n.n(c),l=n(182),h=n.n(l),p=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(){return(f=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var d=function(){return{}};function m(t,e){void 0===e&&(e={});var n=!!t,r=t||d;return function(i){var s=function(e){function s(t,n){var o=e.call(this,t,n)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var t=r(o.store.getState(),o.props);o.setState({subscribed:t})}},o.store=o.context,o.state={subscribed:r(o.store.getState(),t),store:o.store,props:t},o}return p(s,e),s.getDerivedStateFromProps=function(e,n){return t&&2===t.length&&e!==n.props?{subscribed:r(n.store.getState(),e),props:e}:{props:e}},s.prototype.componentDidMount=function(){this.trySubscribe()},s.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},s.prototype.shouldComponentUpdate=function(t,e){return!u()(this.props,t)||!u()(this.state.subscribed,e.subscribed)},s.prototype.trySubscribe=function(){n&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},s.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},s.prototype.render=function(){var t=f(f(f({},this.props),this.state.subscribed),{store:this.store});return o.createElement(i,f({},t,{ref:this.props.miniStoreForwardedRef}))},s.displayName="Connect("+function(t){return t.displayName||t.name||"Component"}(i)+")",s.contextType=a,s}(o.Component);if(e.forwardRef){var c=o.forwardRef((function(t,e){return o.createElement(s,f({},t,{miniStoreForwardedRef:e}))}));return h()(c,i)}return h()(s,i)}}var b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function v(t){var e=t,n=[];return{setState:function(t){e=b(b({},e),t);for(var r=0;r<n.length;r++)n[r]()},getState:function(){return e},subscribe:function(t){return n.push(t),function(){var e=n.indexOf(t);n.splice(e,1)}}}}}}]);