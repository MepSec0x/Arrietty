"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){if(window.top!==window&&window.location.origin.endsWith(".google.com")){var t=("undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser).runtime.getURL("PATH/").replace("/PATH/",""),e=window.location.ancestorOrigins;if("object"===_typeof(e)){if(e.length<1||2<e.length)return;if(e[0]!==t&&e[1]!==t)return;if(2===e.length&&!e[0].endsWith(".google.com"))return}var n=document.createElement("script");n.textContent="(function (win, doc, ns) { 'use strict'; var data = win[ns]; function update () { if (data.w2btAe) { data.w2btAe = data.w2btAe.replace('\",false', '\",true') } if (data.liWUH) { data.liWUH = '' } if (data.ikfjnc) { delete data.ikfjnc }} if (data) { update() } else { Object.defineProperty(win, ns, { 'get': function () { return data }, 'set': function (newValue) { data = newValue; update() } }) } doc.currentScript && doc.currentScript.remove() })(window, document, 'WIZ_global_data');",function t(){document.documentElement?document.documentElement.insertBefore(n,document.documentElement.firstChild):setTimeout(t,.001)}()}}();