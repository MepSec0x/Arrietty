"use strict";cjce.registerTemplate("bm-p-fonts",function(e,n){var a=!cjBasics.wrif.supported,c="https://fonts.google.com",i=c+"/",t={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_01317","Directory"),newTabUrl:i},featured:{iconName:"__mdi:star_outline",label:cjBasics.lang.i18n("cj_i18n_01318","Featured"),newTabUrl:i+"featured"},about:{iconName:"__mdi:info",label:cjBasics.lang.i18n("cj_i18n_00838","About"),newTabUrl:i+"about",divider:!0},articles:{iconName:"__mdi:article",label:cjBasics.lang.i18n("cj_i18n_01320","Articles"),newTabUrl:"https://design.google/library/google-fonts/",external:!a}};function l(e,a){n.openTab(a.newTabUrl)}if(a){var s=cjce.createElement("bm-ogb",{searchbox:{submitInNewTab:!0,onSubmit:function(e){var a=cjBasics.urlParams.attach(i,{query:e});n.openTab(a)}},serviceIcon:"fonts",serviceLabel:cjBasics.lang.i18n("cj_i18n_00415","Fonts"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:n,onNewTab:function(){n.openTab(i)}});e.appendChild(s),n.setOnPageDisplayHandler(s.cjceSearchboxEl.select);var o=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"}),r=cjce.createElement("bm-navlist",{items:t,onClick:l,onNewTab:l});return o.appendChild(r),void e.appendChild(o)}var b=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"fonts",serviceLabel:cjBasics.lang.i18n("cj_i18n_00415","Fonts"),pageLabel:t.home.label,bmApis:n,onNewTab:function(){u.cjceGetCleanUrl(c).then(function(e){var a=e||i;n.openTab(a)})}});e.appendChild(b);var m=b.cjceDrawerEl,d=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"home",items:t,onChange:function(e,a){u.cjceSendFrameCommand({method:"bmCstUpdatePath",value:"home"===e?"":e},c),b.cjceSetPageLabel(a.label)},onNewTab:l});m.appendChild(d);var j=cjBasics.uniqueId.generate(),p=cjBasics.urlParams.attach(i,{bm_cid:"fonts",bm_iid:j,bm_cst:"1"});cjBasics.webRequest.handleIframeHeaders([c+"/*bm_iid="+j+"*"]);var u=cjce.createElement("bm-iframe",{solid:"#fff",src:p,shadow:!0,onLoad:function(){b.cjceSetLoading(!1)}});e.appendChild(u)});