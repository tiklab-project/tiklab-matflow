(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{539:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},568:function(e,t,n){"use strict";var o=n(539),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,c,i,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},75:function(e,t){e.exports=function(e,t,n,o){var a=n?n.call(o,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var r=Object.keys(e),c=Object.keys(t);if(r.length!==c.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),l=0;l<r.length;l++){var s=r[l];if(!i(s))return!1;var u=e[s],p=t[s];if(!1===(a=n?n.call(o,u,p,s):void 0)||void 0===a&&u!==p)return!1}return!0}},788:function(e,t,n){"use strict";n.r(t);n(716);var o=n(695),a=n(0),r=n.n(a);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}t.default=function(e){return r.a.createElement(o.a,c({},e,{__source:{fileName:"D:\\idea\\pipeline\\tiklab-matflow-ui\\src\\modules\\eam\\noProductAuthUser.js",lineNumber:9,columnNumber:12}}))}}}]);