"use strict";cjce.registerTemplate("bm-p-gasuite",function(e,i){var n="recentlyviewed",c=i.instanceParameters.productId||"gasuite",a=cjBasics.lang.i18n("cj_i18n_01107","Recently viewed"),t=!cjBasics.wrif.supported,l="0"===i.account.authuser?null:i.account.authuser,r=l?"?authuser="+l:"",s="https://marketingplatform.google.com",o="https://tagmanager.google.com/"+r,m="https://optimize.google.com/optimize/home/"+r,_="https://analytics.google.com/analytics/",g=_+"web/"+r,d={gasuite:{serviceIcon:"marketing_platform",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:s+"/home"+r},analytics:{serviceIcon:"analytics",label:cjBasics.lang.i18n("cj_i18n_00186","Analytics"),newTabUrl:g+"#/report-home/"},tagmanager:{serviceIcon:"tag_manager",label:cjBasics.lang.i18n("cj_i18n_00513","Tag Manager"),newTabUrl:o},optimize:{serviceIcon:"optimize",label:cjBasics.lang.i18n("cj_i18n_00664","Optimize"),newTabUrl:m},datastudio:{serviceIcon:"data_studio",label:cjBasics.lang.i18n("cj_i18n_00333","Data Studio"),shortcutId:"366"},surveys:{serviceIcon:"surveys",label:cjBasics.lang.i18n("cj_i18n_00467","Surveys"),shortcutId:"37"},attribution:{serviceIcon:"attribution",label:cjBasics.lang.i18n("cj_i18n_00666","Attribution"),shortcutId:"369"},audiencecenter:{serviceIcon:"audience_center",label:cjBasics.lang.i18n("cj_i18n_00665","Audience Center"),shortcutId:"368"}},b=d[c]||d.gasuite;var u,j,p,h,w,T,B=(u={iconName:"__mdi:person",label:cjBasics.lang.i18n("cj_i18n_02169","Certified partners"),newTabUrl:s+"/about/partners/find-a-partner",external:!t},"gasuite"===c?{gasuite:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:s+"/home"+r,external:!t},recentlyviewed:{iconName:"__mdi:history",label:a,newTabUrl:s+"/home/recents"+r},integrationcenter:{iconName:"__mdi:swap_horiz",label:cjBasics.lang.i18n("cj_i18n_01105","Integration Center"),newTabUrl:s+"/home/integrations"+r,external:!t},administration:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_01106","Administration"),newTabUrl:s+"/home/orgs"+r,external:!t},partners:u}:"tagmanager"===c?{home:{iconName:"__mdi:people",label:cjBasics.lang.i18n("cj_i18n_02168","Accounts"),newTabUrl:o+"#/home",external:!t},recentlyviewed:{iconName:"__mdi:history",label:a,newTabUrl:o+"#/home"},admin:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_01385","Admin"),newTabUrl:o+"#/admin/",external:!t},usersettings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:o+"#/admin/user/settings",external:!t},partners:u}:"optimize"===c?{home:{iconName:"__mdi:people",label:cjBasics.lang.i18n("cj_i18n_02168","Accounts"),newTabUrl:m+"#/accounts",external:!t},recentlyviewed:{iconName:"__mdi:history",label:a,newTabUrl:m+"#/accounts"},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:m+"#/user/settings",external:!t},resourcehub:{iconName:"__mdi:developer_board",label:cjBasics.lang.i18n("cj_i18n_02167","Resource hub"),newTabUrl:"https://support.google.com/optimize"+r,external:!t},userforum:{iconName:"__mdi:forum",label:cjBasics.lang.i18n("cj_i18n_02166","User forum"),newTabUrl:"https://support.google.com/optimize/community"+r,external:!t},partners:u}:"analytics"===c?{home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:g+"#/report-home/",external:!t},recentlyviewed:{iconName:"__mdi:history",label:a,newTabUrl:g},gallery:{iconName:"__mdi:developer_board",label:cjBasics.lang.i18n("cj_i18n_02170","Solutions gallery"),newTabUrl:_+"gallery/",external:!t},attribution:{iconName:"__mdi:swap_calls",label:cjBasics.lang.i18n("cj_i18n_00666","Attribution"),newTabUrl:_+"attribution/",external:!t},partners:u}:null),v=cjBasics.uniqueId.generate(),U=cjBasics.urlParams.attach(s+"/home/recents",{bm_cid:"gasuite",bm_wiz:"1",bm_iid:v,bm_pid:c,bm_udm:i.darkMode?"1":null,authuser:l,hl:cjBasics.lang.current});function y(e,a){var n=a.newTabUrl||cjgShortcuts.getUrl(a.shortcutId,i.account);i.openTab(n)}cjBasics.webRequest.handleIframeHeaders([s+"/*bm_iid="+v+"*"],{handleFirefoxInject:!0}),T=cjce.createElement("bm-ogb",{loading:!0,serviceIcon:b.serviceIcon,serviceLabel:b.label,pageLabel:t?cjBasics.lang.i18n("cj_i18n_01167","Links"):a,drawer:!t&&B?{}:null,aboveTopDrawer:!0,bmApis:i,onNewTab:function(){var e=B&&B[n]||d[c],a=e.newTabUrl||cjgShortcuts.getUrl(e.shortcutId,i.account);i.openTab(a)}}),e.appendChild(T),cjce.applyTemplate(T,"append-g-marketing-toggle",{cjgShortcuts:cjgShortcuts,bmApis:i,selectedId:c}),B&&(j=cjce.createElement("bm-navlist",{selectedId:t?null:n,items:B,onClick:function(e,a){!t&&"recentlyviewed"===e||y(0,a)},onNewTab:y}),t?((p=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"})).appendChild(j),e.appendChild(p)):T.cjceDrawerEl.appendChild(j)),"tagmanager"===c&&(h=cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_02171","Create account"),onClick:function(){i.openTab(o+"#/admin/accounts/create")}}),e.appendChild(h)),t||(w=cjce.createElement("bm-iframe",{src:U,shadow:!0,solid:!0,onLoad:function(){T.cjceSetLoading(!1)}}),e.appendChild(w))});