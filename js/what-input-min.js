/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.1.6
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!function e(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("whatInput",[],n):"object"==typeof exports?exports.whatInput=n():t.whatInput=n()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(){var e="initial",t=null,n=document.documentElement,o=["input","select","textarea"],i=[],r=[16,17,18,91,93],u={keydown:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},d=[],s=!1,a=!1,c={x:null,y:null},p={2:"touch",3:"touch",4:"mouse"},f=!1;try{var v=Object.defineProperty({},"passive",{get:function e(){f=!0}});window.addEventListener("test",null,v)}catch(e){}var m=function e(){u[b()]="mouse",w(),h()},w=function e(){window.PointerEvent?(n.addEventListener("pointerdown",l),n.addEventListener("pointermove",y)):window.MSPointerEvent?(n.addEventListener("MSPointerDown",l),n.addEventListener("MSPointerMove",y)):(n.addEventListener("mousedown",l),n.addEventListener("mousemove",y),"ontouchstart"in window&&(n.addEventListener("touchstart",x),n.addEventListener("touchend",x))),n.addEventListener(b(),y,!!f&&{passive:!0}),n.addEventListener("keydown",l)},l=function n(i){if(!s){var d=i.which,a=u[i.type];if("pointer"===a&&(a=L(i)),e!==a||t!==a){var c=document.activeElement,p=!1;c&&c.nodeName&&-1===o.indexOf(c.nodeName.toLowerCase())&&(p=!0),("touch"===a||"mouse"===a||"keyboard"===a&&d&&p&&-1===r.indexOf(d))&&(e=t=a,h())}}},h=function t(){n.setAttribute("data-whatinput",e),n.setAttribute("data-whatintent",e),-1===d.indexOf(e)&&(d.push(e),n.className+=" whatinput-types-"+e),E("input")},y=function e(o){if(c.x!==o.screenX||c.y!==o.screenY?(a=!1,c.x=o.screenX,c.y=o.screenY):a=!0,!s&&!a){var i=u[o.type];"pointer"===i&&(i=L(o)),t!==i&&(t=i,n.setAttribute("data-whatintent",t),E("intent"))}},x=function e(t){"touchstart"===t.type?(s=!1,l(t)):s=!0},E=function e(n){for(var o=0,r=i.length;o<r;o++)i[o].type===n&&i[o].function.call(void 0,t)},L=function e(t){return"number"==typeof t.pointerType?p[t.pointerType]:"pen"===t.pointerType?"touch":t.pointerType},b=function e(){var t=void 0;return t="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"};return"addEventListener"in window&&Array.prototype.indexOf&&m(),{ask:function n(o){return"loose"===o?t:e},types:function e(){return d},ignoreKeys:function e(t){r=t},onChange:function e(t,n){i.push({function:t,type:n})}}}()}])});