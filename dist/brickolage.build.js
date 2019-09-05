var Brickolage=function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=n,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(r,t){if(1&t&&(r=o(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)o.d(e,n,function(t){return r[t]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=1)}([function(t,r,e){},function(t,r,e){"use strict";e.r(r);e(0);var n={container:".brickolage--container",item:".brickolage--item",separatorClassName:"brickolage--separator",separatorTagName:"li",originalOrder:!1},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var a={height:null,sortedOrder:[],heights:[],columnsNum:null,separators:[],__changed:{}},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function u(t,r){if(!t)return t;var e=t;switch(void 0===t?"undefined":i(t)){case"string":e=(r||document).querySelectorAll(t);break;case"object":t.nodeType&&(e=[t])}return e}function s(t){var r=function(t){var r=Object.assign({},n);return t&&"object"===(void 0===t?"undefined":o(t))&&(r=Object.assign({},r,t)),r}(t),e=function(t){var r=t.container,n=t.item,o=t.separatorClassName,i=[],e=Array.from(u(r));return e.length&&e.map(function(t,r){var e=Array.from(u(n,t)).filter(function(t){return!(t.classList&&t.classList.contains(o))});e.length&&(i[r]=Object.assign({container:t,items:e},a))}),i}(r);return e.length&&e.map(function(t){return t.container.classList.add("brickolage--initialized")}),[r,e]}var c=function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return e}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function f(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}function l(t,r){var e=[].concat(f(t.sortedOrder)),n=function(t,i){var a=t.columnsNum,r=t.items,u=Array.from({length:a},function(){return[]}),s=Array.from({length:a},function(){return 0}),c=0;return r.filter(function(t){return!!t}).map(function(t,r){var e=t.offsetHeight||1;if(i)u[c].push(r),s[c]+=e,c<a-1?c+=1:c=0;else{var n=Math.min.apply(Math,f(s)),o=s.indexOf(n);u[o].push(r),s[o]+=e}}),[s,u]}(t,!!r.originalOrder),o=c(n,2);t.heights=o[0],t.sortedOrder=o[1],t.__changed=Object.assign({},t.__changed,{sortedOrder:JSON.stringify(e)!==JSON.stringify(t.sortedOrder)})}function y(t){t.height=Math.max.apply(Math,function(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}(t.heights))+5}function m(t){t.separators.map(function(t){return t.remove()})}function d(t,r,e){!function(t){var r=t.container,e=t.items;r.style.height=null,e.map(function(t){return t.style.order=null})}(t),m(t),e[r]=Object.assign({},t,a)}function h(t,r,e){!function(t){var r=t.container,e=t.items,n=t.columnsNum,o=Math.round((r.clientWidth||1)/(e[0].offsetWidth||1));t.columnsNum=o,t.__changed=Object.assign({},t.__changed,{columnsNum:o!==n})}(t),t.columnsNum<2?t.__changed.columnsNum&&t.sortedOrder.length&&d(t,r,e.instances):(l(t,e.options),y(t),function(t){var r=t.container,e=t.height;r.style.height=e+"px"}(t),t.__changed.sortedOrder&&(function(t){var r=t.sortedOrder,e=t.items;t.height,r.map(function(t,r){return t.map(function(t){return e[t].style.order=r+1})})}(t),t.__changed.columnsNum&&function(t,r){var e=t.container,n=t.items,o=(t.separators,t.columnsNum);m(t);for(var i=r.separatorTagName||n[0].tagName.toLowerCase(),a=0;a<o-1;a++){var u=document.createElement(i);u.className=r.separatorClassName,u.style.order=a+1,e.appendChild(u),t.separators[a]=u}}(t,e.options)))}var p=function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,r){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return e}(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function g(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}
/*!
 * Brickolage v.1.0.0
 * A tiny Masonry script alernative, based on CSS3 flexbox layout.
 *
 * Author: Y. Zadziarkouski aka wpSpade
 * 
 * The author of the original idea is Tobias Bjerrome Ahlin.
 * Article: https://tobiasahlin.com/blog/masonry-with-css/
 *
 * Licensed GPLv3 for open source use
 *
 * Copyright 2019 wpSpade
 * https://themeforest.net/user/wpSpade
 */
var v=(function(t,r,e){return r&&g(t.prototype,r),e&&g(t,e),t}(b,[{key:"reLayout",value:function(e){var n=this,t=(this.options,this.instances);t.length&&t.map(function(t,r){h(t,r,n),"function"==typeof e&&e(t,r)})}},{key:"reFresh",value:function(t,r){var e=s(r),n=p(e,2);this.options=n[0],this.instances=n[1],"function"==typeof t&&t()}},{key:"destroy",value:function(e){var n=this.instances,t=this.reLayout;n.length&&(window.removeEventListener("resize",t),n.map(function(t,r){t.container.classList.remove("brickolage--initialized"),d(t,r,n),delete n[r],"function"==typeof e&&e(t,r)}))}}]),b);function b(t){var r=this;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,b),["reLayout","reFresh","destroy"].map(function(t){return r[t]=r[t].bind(r)});var e=s(t),n=p(e,2);return this.options=n[0],this.instances=n[1],this.reLayout(),window.addEventListener("resize",this.reLayout),this}r.default=v}]).default;