"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var r,m,e,n,t,c,d,b,w,f,l;function o(){document.body.classList.toggle("dark-mode",t)}function s(e){document.documentElement.dataset.bmMessagesHideMenus="1",document.querySelector("button[data-e2e-main-nav-menu]").click(),setTimeout(function(){setTimeout(function(){document.documentElement.dataset.bmMessagesHideMenus="0"},50),document.querySelector(e).click()},50)}function a(){(document.querySelector('a[href="/web/conversations"]')||document.querySelector(".back-button")).click()}function i(){s("button[data-e2e-main-nav-menu-archived], a[data-e2e-main-nav-menu-archived]")}window.top===window||"https://messages.google.com"===(r=window.location).origin&&(m=("undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=window.location.ancestorOrigins)||1===e.length&&e[0]===m)&&(n=m.startsWith("moz-extension://"),t=-1!==window.location.search.indexOf("bm_udm=1"),function e(){document.body?(o(),setTimeout(o,100),setTimeout(o,200),setTimeout(o,1e3)):setTimeout(e,10)}(),function e(){var t,o,n=r.href;c!==n&&(c=n,t="conversations",(b=r.pathname).startsWith("/web/auth")?t="authentication":b.startsWith("/web/settings")?t="settings":b.startsWith("/web/conversations/new")?t=-1===c.indexOf("mode=group")?"newConversation":"newGroupConversation":b.startsWith("/web/conversations/")&&(t="conversation"),t!==d&&(d=t,window.parent.postMessage({bm_method:"messagesWebsiteView",bm_value:d},m)),o="/web/conversations"!==b&&"/web"!==b&&!b.startsWith("/web/auth"),l!==o&&window.parent.postMessage({bm_method:"messagesBackState",bm_value:o},m));var s=document.querySelector("h2[data-e2e-header-title]"),a=s&&s.textContent;w!==a&&(w=a,window.parent.postMessage({bm_method:"messagesUpdateTitle",bm_value:a},m));var i=document.querySelector("button.notifications-button[data-e2e-is-muted"),u=i&&"true"===i.dataset.e2eIsMuted;f!==u&&(f=u,window.parent.postMessage({bm_method:"messagesMutedState",bm_value:u},m)),setTimeout(e,100)}(),window.addEventListener("message",function(e){var t,o;e.origin===m&&(!e.isTrusted&&!n||"messagesActivateMenuItem"===(t=e.data||{}).bm_method&&("archived"===(o=t.bm_value)?b.startsWith("/web/conversation")?i():(a(),setTimeout(i,50)):"settings"===o?s('a[data-e2e-main-nav-menu-settings], a[href="/web/settings"]'):a()))})))}();