"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var o,a,n,d,e,i,r,s;function l(e){var t=(e.split("mail/mu/mp/")[1]||"").split("/")[0];t&&window.parent.postMessage({bm_method:"mailSessionId",bm_value:t},d)}function c(e,t){var n=a.querySelectorAll(e);-1===t&&(t=n.length-1),n[t].click()}function m(e){for(var t=e+"/lb_data",n="sp/chrome/"+t,o=Object.keys(window.localStorage),a=0;a<o.length;a++){var r=o[a];if(r.endsWith(t)){n=r;break}}var i,s,l,c=window.localStorage[n];c&&(i=JSON.parse(c),s=function(e){for(var t={masterKey:"wa",nameKey:"name",idKey:"Y",unreadKey:"T",colorKey:"bgColor"},n={},o=0;o<e.length;o++){for(var a=e[o],r=Object.keys(a),i=void 0,s=void 0,l=0;l<r.length;l++){var c=r[l],d=a[c],m=d&&"object"===_typeof(d)&&Object.keys(d);if(m&&4<m.length){t.masterKey=c;for(var u=d.name,p=0;p<m.length;p++){var f=m[p];"name"!==f&&"string"==typeof f&&d[f]===u&&(t.idKey=f)}}else"number"==typeof d&&(!i||d<=s)&&(i=c,s=d)}n[i]?n[i]+=1:n[i]=1}for(var y=Object.keys(n),b="T",h=0;h<y.length;h++){var v=y[h];0<n[v]&&(b=v)}return t.unreadKey=b,t}(i),l=i.map(function(e){var t={};t.unreadCount=e[s.unreadKey];var n=e[s.masterKey];t.name=n[s.nameKey],t.id=n[s.idKey];var o=n[s.colorKey];return o&&(t.color={backgroundColor:o}),t}),window.parent.postMessage({bm_method:"mailCachedLabels",bm_value:l},d))}function t(){var e=function(){var e=(a.head.textContent.split('USER_EMAIL = "')[1]||"").split('"')[0];if(e)return e;var t=(document.cookie.split("GAUSR=")[1]||"").split(";");return t||(Object.keys(window.localStorage).join("").split("pref/")[1]||"").split("/")[0]}();e&&function(t){if(window.openDatabase){var e;try{e=window.openDatabase(t,"","",0)}catch(e){return m(t)}e.transaction(function(e){e.executeSql("SELECT labelId,unreadCount,metadata FROM cached_labels",[],function(e,t){for(var n=[],o=0;o<t.rows.length;o++){var a=t.rows[o],r={id:a.labelId,unreadCount:a.unreadCount},i=a.metadata.startsWith("[")&&JSON.parse(a.metadata),s=i[2],l=i[4];"string"==typeof s&&(r.name=s),"string"==typeof l&&(r.color={backgroundColor:l}),n.push(r)}window.parent.postMessage({bm_method:"mailCachedLabels",bm_value:n},d)},function(){m(t)})})}else m(t)}(e)}function u(){-1!==o.search.indexOf("bm_mail_bigtop")&&(n.dataset.bmCsMailHideStars="1");var e=o.href;l(e),window.parent.postMessage({bm_method:"mailPageUrl",bm_value:e},d),t(),setTimeout(t,1e3),setTimeout(t,5e3)}window.top===window||"https://mail.google.com"===(o=window.location).origin&&-1!==o.pathname.indexOf("/mu/")&&(a=document,d=("undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=o.ancestorOrigins)||1===e.length&&e[0]===d)&&(i=d.startsWith("moz-extension://"),(r=a.createElement("script")).textContent='!function(r,n,t,c,o,i){"use strict";var p=i[t],s=(o.search.split("mui=")[1]||"").split("&")[0];Object.defineProperty(i,t,{get:function(){var t=p;if(-1===t.indexOf("GMAIL_AT=")&&(t+="; GMAIL_AT="+s),-1===t.indexOf(r)){var i=(s+"__").split("__")[1].split("_")[0]||"0",e=(o.pathname.split("/mp/")[1]||"").split("/")[0];t+="; "+r+c+"#"+window.USER_EMAIL+":"+e+":"+i}return t.startsWith(n)||-1!==t.indexOf(" "+n)||(t+="; SID=1"),t}}),i.currentScript&&i.currentScript.remove()}("WML=","SID=","cookie",Date.now(),location,document);',function e(){if(n=a.documentElement){n.insertBefore(r,n.firstChild);var t=n.getAttribute("manifest");if(!t)return;l(t)}else setTimeout(e,.001)}(),s=!1,function e(){var t,n;o.hash.startsWith("#tl")&&(n=(t=a.querySelector('div[style*="translate3d"] > div:first-child'))&&"none"!==t.style.display,s!==n&&(s=n,window.parent.postMessage({bm_method:"mailSelectionState",bm_value:n},d))),setTimeout(e,100)}(),window.addEventListener("message",function(e){var t,n,o,a,r;e.origin===d&&(!e.isTrusted&&!i||"mailClickEle"===(t=e.data||{}).bm_method&&(o=(n=t.bm_value)[0],a=n[2],r=n[1]||0,a?(c(o,a),setTimeout(function(){c(o,r)})):c(o,r)))}),window.addEventListener("hashchange",function(){window.parent.postMessage({bm_method:"mailHashChange",bm_value:o.hash.replace("#","")},d)}),"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?u():window.addEventListener("DOMContentLoaded",u)))}();