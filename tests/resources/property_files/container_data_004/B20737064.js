document.write('\x3cscript\x3e(function() {(function(){var h\x3dthis,k\x3dfunction(a){var b\x3dtypeof a;if(\x22object\x22\x3d\x3db)if(a){if(a instanceof Array)return\x22array\x22;if(a instanceof Object)return b;var c\x3dObject.prototype.toString.call(a);if(\x22[object Window]\x22\x3d\x3dc)return\x22object\x22;if(\x22[object Array]\x22\x3d\x3dc||\x22number\x22\x3d\x3dtypeof a.length\x26\x26\x22undefined\x22!\x3dtypeof a.splice\x26\x26\x22undefined\x22!\x3dtypeof a.propertyIsEnumerable\x26\x26!a.propertyIsEnumerable(\x22splice\x22))return\x22array\x22;if(\x22[object Function]\x22\x3d\x3dc||\x22undefined\x22!\x3dtypeof a.call\x26\x26\x22undefined\x22!\x3dtypeof a.propertyIsEnumerable\x26\x26!a.propertyIsEnumerable(\x22call\x22))return\x22function\x22}else return\x22null\x22;else if(\x22function\x22\x3d\x3db\x26\x26\x22undefined\x22\x3d\x3dtypeof a.call)return\x22object\x22;return b},l\x3dfunction(a,b){var c\x3dArray.prototype.slice.call(arguments,1);return function(){var b\x3dc.slice();b.push.apply(b,arguments);return a.apply(this,b)}};var m\x3dfunction(a,b){for(var c in a)b.call(void 0,a[c],c,a)};var n\x3dfunction(a){a\x3da?a.toLowerCase():\x22\x22;switch(a){case \x22normal\x22:return\x22normal\x22;case \x22lightbox\x22:return\x22lightbox\x22;case \x22push_down\x22:return\x22push_down\x22}return null};var p\x3d{i:\x22ad_container_id\x22,A:\x22hideObjects\x22,X:\x22mtfTop\x22,W:\x22mtfLeft\x22,ca:\x22zindex\x22,m:\x22mtfDuration\x22,aa:\x22wmode\x22,Z:\x22preferFlash\x22,s:\x22as_kw\x22,u:\x22as_lat\x22,v:\x22as_lng\x22,B:\x22mtfIFPath\x22,o:\x22expansionMode\x22,U:\x22top_container\x22,T:\x22mtfTopFloat\x22,S:\x22mtfTopDuration\x22,V:\x22mtfTopWmode\x22,P:\x22right_container\x22,O:\x22mtfRightFloat\x22,N:\x22mtfRightDuration\x22,R:\x22mtfRightWmode\x22,H:\x22bottom_container\x22,G:\x22mtfBottomFloat\x22,F:\x22mtfBottomDuration\x22,I:\x22mtfBottomWmode\x22,L:\x22left_container\x22,K:\x22mtfLeftFloat\x22,J:\x22mtfLeftDuration\x22,M:\x22mtfLeftWmode\x22,$:\x22mtfRenderFloatInplace\x22,ba:\x22tryToWriteHtmlInline\x22,j:\x22debugjs\x22,C:\x22dcapp\x22,g:\x22breakoutiframe\x22,D:\x22inMobileAdSdk\x22},r\x3dfunction(a){m(a,function(b,c){if(c.toLowerCase()in q){var e\x3dq[c.toLowerCase()];c in a\x26\x26delete a[c];a[e]\x3db}})},q\x3dfunction(){var a\x3d{};m(p,function(b){a[b.toLowerCase()]\x3db});return a}();var u\x3dfunction(a){this.a\x3da;a:{for(c in a.displayConfigParameters){b:if(a\x3dt,\x22string\x22\x3d\x3dtypeof a)a\x3d\x22string\x22\x3d\x3dtypeof c\x26\x261\x3d\x3dc.length?a.indexOf(c,0):-1;else{for(var b\x3d0;b\x3ca.length;b++)if(b in a\x26\x26a[b]\x3d\x3d\x3dc){a\x3db;break b}a\x3d-1}if(!(0\x3c\x3da)){var c\x3d!0;break a}}c\x3d!1}this.f\x3dc},t\x3d[\x22ad_container_id\x22],v\x3dfunction(a){return a.f?a.a.displayConfigParameters:a.a.creativeParameters},w\x3dfunction(a,b){for(var c\x3d0;c\x3ca.a.primaryFiles.length;++c)if(a.a.primaryFiles[c].type\x3d\x3db)return!0;return!1};var x\x3d{pattern:/rendering_lib_((?:[0-9_]+)|(?:latest))\\.js$/,c:\x22rendering_lib_db_$1.js\x22},y\x3d{pattern:/\\/[a-z_0-9]+_rendering_lib/,c:\x22/iframe_buster\x22},z\x3d{pattern:/(.*\\/)(.*_)rendering_lib_((?:[0-9_]+)|(?:latest))\\.js$/,c:\x22$1inapp_html_inpage_rendering_lib_$3.js\x22},A\x3d{pattern:/\\/[0-9]+\\/[a-z_0-9]+rendering_lib.+$/,c:\x22/ads/studio/cached_libs/modernizr_2.8.3_ec185bb44fe5e6bf7455d6e8ef37ed0e_no-classes.js\x22},B\x3dfunction(){var a\x3d[];a.push(\x22e\x3d101\x22);a.push(\x22renderingType\x3d2\x22);a.push(\x22leftOffset\x3d0\x22);a.push(\x22topOffset\x3d0\x22);a.push(\x22t\x3d1\x22);return\x22?\x22+a.join(\x22\x26\x22)},F\x3dfunction(a){var b\x3dv(a),c\x3da.a,e\x3dc.renderingLibraryData,f\x3de.renderingLibrary,d\x3de.version;if(!/express|image_gallery|dfa7banner|inapp/.test(f)\x26\x26(\x22latest\x22\x3d\x3dd||0\x3c\x3dC(d,\x22200_74\x22))){if(d\x3d!w(a,\x22FLASH\x22)){a:{for(d\x3d0;d\x3ca.a.primaryFiles.length;++d){var g\x3da.a.primaryFiles[d].expandingDisplayProperties;if(g\x26\x26\x22lightbox\x22\x3d\x3dn(g.expansionMode)){d\x3d!0;break a}}d\x3d!1}d\x3d!d}d\x3dd\x26\x26null!\x3dwindow.mraid}else d\x3d!1;d\x26\x26(f\x3df.replace(z.pattern,z.c));\x22true\x22\x3d\x3db.debugjs\x26\x26(f\x3df.replace(x.pattern,x.c));(b\x3dh.self\x3d\x3dh.top)||(b\x3dwindow.Y\x26\x26window.Y.SandBox\x26\x26window.Y.SandBox.vendor,d\x3dwindow.$sf\x26\x26window.$sf.ext,g\x3dwindow.$WLXRmAd,b\x3d!!(window.IN_ADSENSE_IFRAME||b||d||g));if(!b){a:if(b\x3dv(a).breakoutiframe)b\x3d!!b\x26\x26\x22true\x22\x3d\x3db.toLowerCase();else{b\x3da.a.primaryFiles;for(d\x3d0;d\x3cb.length;d++){g\x3db[d].renderAs;var N\x3d0\x3d\x3d(parseInt(b[d].width,10)||0)\x26\x260\x3d\x3d(parseInt(b[d].height,10)||0);if(\x22EXPANDABLE\x22\x3d\x3dg||\x22FLOATING\x22\x3d\x3dg\x26\x26!N){b\x3d!0;break a}}b\x3d!1}b\x3d!b}if(b||a.a.previewMode){a:{a\x3df;b\x3dD();for(d\x3d0;d\x3cb.renderingLibraries.length;d++)if(g\x3db.renderingLibraries[d],g.url\x3d\x3da\x26\x26g.bootstrapFunction){a\x3dg;break a}a\x3dnull}a?a.bootstrapFunction():(a\x3dD(),E(f,!!c.a,void 0,void 0,void 0,!0),a.renderingLibraries.push({version:e.version,url:f,loading:!0,bootstrapFunction:null}))}else c\x3df.replace(y.pattern,y.c),E(c,!0)},C\x3dfunction(a,b){a\x3dG(a);b\x3dG(b);for(var c\x3dMath.min(a.length,b.length),e\x3d0;e\x3cc;e++)if(a[e]!\x3db[e])return a[e]-b[e];return a.length-b.length},G\x3dfunction(a){a\x3da.split(\x22_\x22);for(var b\x3d[],c\x3d0;c\x3ca.length;c++)b.push(parseInt(a[c],10));return b},E\x3dfunction(a,b,c,e,f,d){var g\x3ddocument.createElement(\x22script\x22);g.src\x3da;g.type\x3dc?c:\x22text/javascript\x22;g.async\x3d!!b;d\x26\x26(g.crossOrigin\x3d\x22anonymous\x22);e\x26\x26(g.onload\x3de);f\x26\x26(g.onerror\x3df);a\x3ddocument.getElementsByTagName(\x22head\x22);(a\x26\x260!\x3da.length?a[0]:document.documentElement).appendChild(g)},D\x3dfunction(){return window.dclkStudioV3\x3dwindow.dclkStudioV3||{creatives:[],renderingLibraries:[],creativeCount:1}},H\x3dfunction(a){try{if(null!\x3d(a[\x22cps-top-iframe-beacon\x22]?a[\x22cps-top-iframe-beacon\x22]:null))return!0}catch(b){}return a\x3d\x3da.parent?!1:H(a.parent)},I\x3dfunction(a){if(null!\x3da){r(a.creativeParameters);if(null!\x3da.html5Features)for(var b\x3d0;b\x3ca.html5Features.length;++b)\x22CSS_ANIMATIONS\x22\x3d\x3da.html5Features[b]\x26\x26(a.html5Features[b]\x3d\x22Modernizr.cssanimations\x22);!a.previewMode\x26\x26H(h)\x26\x26(a.previewMode\x3d!0);a\x3dnew u(a);b\x3dD();b.creatives.push(a.a);var c\x3da.a.creativeParameters;c.creative_unique_id\x3dc.cid+\x22_\x22+b.creativeCount++;b\x3dv(a).ad_container_id;a:if((c\x3dv(a).mtfRenderFloatInplace)\x26\x26\x22true\x22\x3d\x3dc.toLowerCase())c\x3d!0;else{c\x3da.a.primaryFiles;for(var e\x3d0;e\x3cc.length;e++){var f\x3dc[e].renderAs;if(\x22EXPANDABLE\x22\x3d\x3df||\x22BANNER\x22\x3d\x3df){c\x3d!0;break a}}c\x3d!1}if(c\x26\x26(!b||\x22\x22\x3d\x3db)){b\x3d\x22dclk-studio-creative_\x22+(new Date).getTime();c\x3da.a;if(c.a){var d\x3da.a.primaryFiles[0].url;e\x3ddocument.createElement(\x22div\x22);e.setAttribute(\x22id\x22,b);f\x3ddocument.createElement(\x22div\x22);f.setAttribute(\x22id\x22,\x22st-rl-html-component\x22);var g\x3ddocument.createElement(\x22iframe\x22);g.setAttribute(\x22src\x22,d+B());g.setAttribute(\x22frameborder\x22,0);g.setAttribute(\x22scrolling\x22,\x22no\x22);g.setAttribute(\x22allowfullscreen\x22,!0);f.appendChild(g);a:{for(d\x3d0;d\x3ca.a.primaryFiles.length;++d)if(\x22EXPANDABLE\x22\x3d\x3da.a.primaryFiles[d].renderAs){d\x3d!0;break a}d\x3d!1}d?(d\x3ddocument.createElement(\x22div\x22),d.setAttribute(\x22id\x22,\x22st-rl-expanding-component\x22),d.appendChild(f),e.appendChild(d)):e.appendChild(f);document.body.appendChild(e)}else document.write([\x27\x3cdiv id\x3d\x22\x27,b,\x27\x22\x3e\x3c/div\x3e\x27].join(\x22\x22));c.creativeParameters.ad_container_id\x3db;c.creativeParameters.generate_ad_slot\x3d\x22true\x22;null\x3d\x3dc.displayConfigParameters\x26\x26(c.displayConfigParameters\x3d{});c.displayConfigParameters.ad_container_id\x3db}c\x3da.a;b\x3dc.renderingLibraryData;e\x3db.version;if(w(a,\x22HTML5\x22)\x26\x26!(\x22latest\x22\x3d\x3de||0\x3c\x3dC(e,\x22200_108\x22))\x26\x26(c\x3dc.html5Features,!(\x22Modernizr\x22in h)\x26\x26\x22array\x22\x3d\x3dk(c)\x26\x260\x3cc.length)){e\x3d!1;for(f\x3d0;f\x3cc.length;f++)if(\x22svgFilters\x22!\x3dc[f]\x26\x26\x22svgFeImage\x22!\x3dc[f]){e\x3d!0;break}e\x26\x26E(b.renderingLibrary.replace(A.pattern,A.c),!1)}b\x3dv(a);c\x3db.inMobileAdSdk;\x221\x22\x3d\x3db.dcapp||\x221\x22\x3d\x3dc||/Android ([2-3]|4\\.[0-3])/.test(navigator.userAgent)?(b\x3dl(F,a),window.mraid?(E(\x22mraid.js\x22,!1,\x22text/x-do-not-download\x22,null,null),F(a)):E(\x22mraid.js\x22,!1,\x22text/javascript\x22,b,b)):F(a)}},J\x3d[\x22studio\x22,\x22rendering\x22,\x22BowResponse\x22,\x22processCreativeData\x22],K\x3dh;J[0]in K||!K.execScript||K.execScript(\x22var \x22+J[0]);for(var L;J.length\x26\x26(L\x3dJ.shift());){var M;if(M\x3d!J.length)M\x3dvoid 0!\x3d\x3dI;M?K[L]\x3dI:K[L]\x26\x26K[L]!\x3d\x3dObject.prototype[L]?K\x3dK[L]:K\x3dK[L]\x3d{}};}).call(this);var creativeData \x3d {width: \x27728\x27,height: \x2790\x27,slotWidth: \x27728\x27,slotHeight: \x2790\x27,renderingLibraryData: {version: \x27200_226\x27,renderingLibrary: \x27https://s0.2mdn.net/879366/express_html_inpage_rendering_lib_200_226.js\x27},impressionUrl: \x27https://googleads4.g.doubleclick.net/pcs/view?xai\\x3dAKAOjstH75K7mtv91F5oH1gp-uFoSPvFT3nwldv4-9GCoSktvACwf17dmBMB3ZuUvmVeo_Lu3AZ9iDVh7lGZRC2wDFb3JSkgz2ntt00fwDRotS-h-bpcKt015mqNztZT2ijW3461n2xy8ci5KQO2SNGExvHwI2k\\x26sig\\x3dCg0ArKJSzLFzS23uqjCfEAE\\x26urlfix\\x3d1\\x26adurl\\x3d\x27,eventTrackingBaseUrl: \x27https://ade.googlesyndication.com/ddm/activity/dc_oe\\x3dChMI3rCvxLqt2QIVTHhiCh2hGAiZEAAYACDwmdku\x27,customEventTrackingBaseUrl: \x27https://ad.doubleclick.net/activity;src\\x3d6145527;pid\\x3d214659448;aid\\x3d413683186;ko\\x3d0;cid\\x3d97930480;rid\\x3d97992638;rv\\x3d1;\x27,clickUrl: \x27https://adclick.g.doubleclick.net/pcs/click?xai\\x3dAKAOjssla1XVuvft7jGs1sfifp6UZSbYp0sJ5vGZLLOx24uouA9OJ4BG7MlWI8BhxXYkm9SiAnwaIZpFfy0qwoLhxbQugwJDVmuODINUeoq6iD4S_Qb0B8AUAYeZPSBSE-10U7uBQZGyStEFVbK5JNT2GOGcuKHuZ4_fTOTEdy6PvyBgMli5s8w0h1j2HA\\x26sig\\x3dCg0ArKJSzHy5IUB77MEIEAE\\x26urlfix\\x3d1\\x26rm_eid\\x3d[rm_exit_id]\\x26adurl\\x3dhttps://adclick.g.doubleclick.net/pcs/click%3Fxai%3DAKAOjstNqd_iec1mfD5ZfRZ2k0zei0n7U9rqNRWFTTTEKpoLRviLgIZplbqUj_PwzcsXIaD4WygvjHBqb2XTXJl1f5wEyBoa41i3Vw-zRqCAo_iHP8ASQpVzDwESXy9uZL6UpX4oQ7atH1GL6ILs3yY5M3xBDEIXtSKF1mL-AkVhHuCTRevWc_na7auVFljKTCflaVfg68jqaAsNRQnA9hWcAaag8xSE0Y6pKV0-lz32IjeZfT3V6ANUp7RMWVok83HmVAenF94%26sig%3DCg0ArKJSzP2L7n2r8seIEAE%26urlfix%3D1%26adurl%3D\x27,thirdPartyUrls: [{type: \x27IMPRESSION_IMG\x27,url: \x27https://d.agkn.com/pixel/2387/?ct\\x3dUS\\x26st\\x3dCA\\x26city\\x3d13318\\x26dma\\x3d195\\x26zp\\x3d91367\\x26bw\\x3d4\\x26che\\x3d285995793\\x26col\\x3d20737064,3112343,214659448,413683186,97930480\x27,scrub: \x27false\x27}, {type: \x27IMPRESSION_IMG\x27,url: \x27https://ad.atdmt.com/i/img;adv\\x3d11022204320002;ec\\x3d11022204321451;adv.a\\x3d6145527;c.a\\x3d20737064;s.a\\x3d3112343;p.a\\x3d214659448;a.a\\x3d413683186;cache\\x3d285995793?cid\\x3d97930480;\x27,scrub: \x27false\x27}, {type: \x27IMPRESSION_JS\x27,url: \x27https://att.demdex.net/event?d_event\\x3dimp\\x26d_src\\x3d127123\\x26d_creative\\x3d97930480\\x26d_placement\\x3d214659448\\x26d_campaign\\x3d20737064\\x26d_site\\x3d3112343\\x26d_cb\\x3d285995793\\x26d_var\\x3d__AP1_np_dv_1094004427PA__\x27,scrub: \x27false\x27}, {type: \x27IMPRESSION_JS\x27,url: \x27https://cdn.doubleverify.com/dvtp_src.js?ctx\\x3d607671\\x26cmp\\x3d20737064\\x26sid\\x3d3112343\\x26plc\\x3d214659448\\x26num\\x3d\\x26adid\\x3d\\x26advid\\x3d6145527\\x26adsrv\\x3d1\\x26region\\x3d30\\x26btreg\\x3d413683186\\x26btadsrv\\x3ddoubleclick\\x26crt\\x3d97930480\\x26crtname\\x3d\\x26chnl\\x3d\\x26unit\\x3d\\x26pid\\x3d\\x26uid\\x3d\\x26tagtype\\x3d\\x26dvtagver\\x3d6.1.src\\x26dvp_att_uid\\x3d__AP1_np_dv_1094004427PA__\x27,scrub: \x27false\x27}, {type: \x27IMPRESSION_JS\x27,url: \x27https://choices.truste.com/ca?pid\\x3datt01\\x26aid\\x3datt_hs\\x26cid\\x3d20737064_97930480_214659448\\x26js\\x3dst0\x27,scrub: \x27false\x27}, {type: \x27CLICK\x27,url: \x27https://ad.atdmt.com/c/img;adv\\x3d11022204320002;ec\\x3d11022204321451;adv.a\\x3d6145527;c.a\\x3d20737064;s.a\\x3d3112343;p.a\\x3d214659448;a.a\\x3d413683186;cache\\x3d285995793;qpb\\x3d1;?cid\\x3d97930480\\x26h\\x3dhttps://d.agkn.com/pixel/2389/?che\\x3d285995793\\x26col\\x3d20737064,3112343,214659448,413683186,97930480\\x26l1\\x3d\x27,scrub: \x27false\x27}],clickString: \x27BdgaBC2SIWp7_C8zwiQOhsaDICQAAAAAQATgB4AQCiAWo2PEJoAZH\x27,activeViewUrlPrefix: \x27https://pagead2.googlesyndication.com/pcs/activeview?xai\\x3dAKAOjsv0DWH7CCLZnB0TCfnFZRQFWeb_hPSe2fL0Xmll-VY_Myox1bjUpd5JISASW3h5KJO3E_wAedhtsgfQREOFKUw\\x26sig\\x3dCg0ArKJSzCBs7uLfyu8FEAE\x27,activeViewMetadata: \x27la\\x3d0\\x26\x27,dynamicData: \x27\x27,creativeParameters: {\x27clickN\x27: \x270\x27, \x27CREATIVE_PARAMETER_ASSETS_DATA\x27: \x27{\\\\\\x221518270364403/I_ABD_FIB_001_HTM_CRS_728x90_S_N_EN_NA_Tickets_1/index.html\\\\\\x22:\\\\\\x226145527/1518270364403/I_ABD_FIB_001_HTM_CRS_728x90_S_N_EN_NA_Tickets_1/index.html\\\\\\x22,\\\\\\x223-I_ABD_FIB_001_STB_CRS_728x90_S_N_EN_NA_Tickets_1.jpg\\\\\\x22:\\\\\\x226145527/3-I_ABD_FIB_001_STB_CRS_728x90_S_N_EN_NA_Tickets_1.jpg\\\\\\x22}\x27, \x27CREATIVE_PARAMETER_VIDEO_ASSETS_DATA\x27: \x27[]\x27, \x27CREATIVE_PARAMETER_VIDEO_DATA\x27: \x27[]\x27, \x27CREATIVE_PARAMETER_LAYOUT_CONFIG\x27: \x27\x27, \x27sn\x27: \x27N424004.2047300REALTOR\x27, \x27sid\x27: \x273112343\x27, \x27aid\x27: \x27413683186\x27, \x27buy\x27: \x2720737064\x27, \x27cid\x27: \x2797930480\x27, \x27pid\x27: \x27214659448\x27, \x27rv\x27: \x271\x27, \x27adv\x27: \x276145527\x27, \x27exit_suffix\x27: \x27\x27, \x27geo\x27: \x27ct\\x3dUS\\x26st\\x3dCA\\x26city\\x3d13318\\x26dma\\x3d195\\x26zp\\x3d91367\\x26bw\\x3d4\x27, \x27clickN\x27: \x271\x27, \x27dc_ver\x27: \x2741.108\x27, \x27xdt\x27: \x271\x27, \x27prcl\x27: \x27s\x27, \x27sttr\x27: \x27149\x27, \x27osda\x27: \x272\x27, \x27crlt\x27: \x27YZ6(yN.-v4\x27, \x27av_ad_key\x27: \x271579724370\x27, \x27displayHTML5\x27: \x27true\x27, \x27CREATIVE_PARAMETER_EXPERIMENTS\x27: \x27{ \\\\\\x22disable_h5_mraid_imp_ping\\\\\\x22 : true }\x27},previewMode: false,flashVersion: \x270\x27,html5Features: [\x27Modernizr.opacity\x27, \x27Modernizr.generatedcontent\x27],translated_layout: false,enableAsyncLoading: false,primaryFiles: [{type: \x27HTML5\x27,renderAs: \x27BANNER\x27,width: \x27728\x27,height: \x2790\x27,url: \x27https://s0.2mdn.net/6145527/1518270364403/I_ABD_FIB_001_HTM_CRS_728x90_S_N_EN_NA_Tickets_1/index.html\x27,hideFlashObjects: false,zIndex: \x27\x27,customCss: \x27\x27}, {type: \x27IMAGE\x27,renderAs: \x27BACKUP_IMAGE\x27,width: \x27728\x27,height: \x2790\x27,url: \x27https://s0.2mdn.net/6145527/3-I_ABD_FIB_001_STB_CRS_728x90_S_N_EN_NA_Tickets_1.jpg\x27,hideFlashObjects: false,zIndex: \x27\x27,customCss: \x27\x27}],standardEvents: [{name: \x27DISPLAY_TIMER\x27,reportingId: \x272\x27}, {name: \x27INTERACTION_TIMER\x27,reportingId: \x273\x27}, {name: \x27INTERACTIVE_IMPRESSION\x27,reportingId: \x274\x27}, {name: \x27FULL_SCREEN_VIDEO_PLAYS\x27,reportingId: \x275\x27}, {name: \x27FULL_SCREEN_VIDEO_COMPLETES\x27,reportingId: \x276\x27}, {name: \x27FULL_SCREEN_AVERAGE_VIEW_TIME\x27,reportingId: \x277\x27}, {name: \x27MANUAL_CLOSE\x27,reportingId: \x278\x27}, {name: \x27BACKUP_IMAGE_IMPRESSION\x27,reportingId: \x279\x27}, {name: \x27EXPAND_TIMER\x27,reportingId: \x2710\x27}, {name: \x27VIDEO_PLAY\x27,reportingId: \x2711\x27}, {name: \x27VIDEO_VIEW_TIMER\x27,reportingId: \x2712\x27}, {name: \x27VIDEO_COMPLETE\x27,reportingId: \x2713\x27}, {name: \x27VIDEO_INTERACTION\x27,reportingId: \x2714\x27}, {name: \x27VIDEO_PAUSE\x27,reportingId: \x2715\x27}, {name: \x27VIDEO_MUTE\x27,reportingId: \x2716\x27}, {name: \x27VIDEO_REPLAY\x27,reportingId: \x2717\x27}, {name: \x27VIDEO_MIDPOINT\x27,reportingId: \x2718\x27}, {name: \x27FULL_SCREEN_VIDEO\x27,reportingId: \x2719\x27}, {name: \x27VIDEO_STOP\x27,reportingId: \x2720\x27}, {name: \x27VIDEO_ABANDON\x27,reportingId: \x2722\x27}, {name: \x27VIDEO_UNMUTE\x27,reportingId: \x27149645\x27}, {name: \x27FULL_SCREEN\x27,reportingId: \x27286263\x27}, {name: \x27DYNAMIC_CREATIVE_IMPRESSION\x27,reportingId: \x27536393\x27}, {name: \x27HTML5_CREATIVE_IMPRESSION\x27,reportingId: \x27871060\x27}, {name: \x27VIDEO_FIRST_QUARTILE\x27,reportingId: \x27960584\x27}, {name: \x27VIDEO_THIRD_QUARTILE\x27,reportingId: \x27960585\x27}],exitEvents: [{name: \x27clickTag\x27,reportingId: \x273798598\x27,destinationUrl: \x27https://www.att.com/getfiber\x27,targetWindow: \x27_blank\x27,windowProperties: \x27\x27,backUpExit: false}, {name: \x27backup image click through url\x27,reportingId: \x273798597\x27,destinationUrl: \x27https://www.att.com/getfiber\x27,targetWindow: \x27_blank\x27,windowProperties: \x27\x27,backUpExit: true}],timerEvents: [],counterEvents: []};try {studio.rendering.BowResponse.processCreativeData(creativeData);} catch (e) {/* ignore errors but don\x27t kill js execution. */}})();\x3c/script\x3e\x3cnoscript\x3e\x3ca target\x3d\x22_blank\x22 href\x3d\x22https://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjssla1XVuvft7jGs1sfifp6UZSbYp0sJ5vGZLLOx24uouA9OJ4BG7MlWI8BhxXYkm9SiAnwaIZpFfy0qwoLhxbQugwJDVmuODINUeoq6iD4S_Qb0B8AUAYeZPSBSE-10U7uBQZGyStEFVbK5JNT2GOGcuKHuZ4_fTOTEdy6PvyBgMli5s8w0h1j2HA\x26amp;sig\x3dCg0ArKJSzHy5IUB77MEIEAE\x26amp;urlfix\x3d1\x26amp;rm_eid\x3d3798597\x26amp;adurl\x3dhttps://adclick.g.doubleclick.net/pcs/click%3Fxai%3DAKAOjstNqd_iec1mfD5ZfRZ2k0zei0n7U9rqNRWFTTTEKpoLRviLgIZplbqUj_PwzcsXIaD4WygvjHBqb2XTXJl1f5wEyBoa41i3Vw-zRqCAo_iHP8ASQpVzDwESXy9uZL6UpX4oQ7atH1GL6ILs3yY5M3xBDEIXtSKF1mL-AkVhHuCTRevWc_na7auVFljKTCflaVfg68jqaAsNRQnA9hWcAaag8xSE0Y6pKV0-lz32IjeZfT3V6ANUp7RMWVok83HmVAenF94%26sig%3DCg0ArKJSzP2L7n2r8seIEAE%26urlfix%3D1%26adurl%3Dhttps://ad.atdmt.com/c/img;adv\x3d11022204320002;ec\x3d11022204321451;adv.a\x3d6145527;c.a\x3d20737064;s.a\x3d3112343;p.a\x3d214659448;a.a\x3d413683186;cache\x3d285995793;qpb\x3d1;?cid\x3d97930480\x26amp;h\x3dhttps://d.agkn.com/pixel/2389/?che\x3d285995793\x26amp;col\x3d20737064,3112343,214659448,413683186,97930480\x26amp;l1\x3dhttps://www.att.com/getfiber\x22\x3e\x3cimg src\x3d\x22https://s0.2mdn.net/6145527/3-I_ABD_FIB_001_STB_CRS_728x90_S_N_EN_NA_Tickets_1.jpg\x22 width\x3d\x22728\x22 height\x3d\x2290\x22 border\x3d\x220\x22 /\x3e\x3c/a\x3e\x3cimg width\x3d\x220px\x22 height\x3d\x220px\x22 style\x3d\x22visibility:hidden\x22 border\x3d\x220\x22 src\x3d\x22https://d.agkn.com/pixel/2387/?ct\x3dUS\x26amp;st\x3dCA\x26amp;city\x3d13318\x26amp;dma\x3d195\x26amp;zp\x3d91367\x26amp;bw\x3d4\x26amp;che\x3d285995793\x26amp;col\x3d20737064,3112343,214659448,413683186,97930480\x22 /\x3e\x3cimg width\x3d\x220px\x22 height\x3d\x220px\x22 style\x3d\x22visibility:hidden\x22 border\x3d\x220\x22 src\x3d\x22https://ad.atdmt.com/i/img;adv\x3d11022204320002;ec\x3d11022204321451;adv.a\x3d6145527;c.a\x3d20737064;s.a\x3d3112343;p.a\x3d214659448;a.a\x3d413683186;cache\x3d285995793?cid\x3d97930480;\x22 /\x3e\x3c/noscript\x3e\x3cscript type\x3d\x22text/javascript\x22\x3e(function() {if (!window.GoogleTyFxhY || typeof window.GoogleTyFxhY.push !\x3d\x3d \x27function\x27) {window.GoogleTyFxhY \x3d [];}window.GoogleTyFxhY.push({\x27_scs_\x27: \x27B3QhNC2SIWp7_C8zwiQOhsaDICQAAAAA4AeAEAg\x27,\x27_bgu_\x27: \x27https://pagead2.googlesyndication.com/bg/uAlgA5R-Mb7FNC9FPdGWR5vy2eueAEOnFxF8za7MevE.js\x27,\x27_bgp_\x27: \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\\x3d\x27,\x27_ifr_\x27: \x27false\x27});var gsodar \x3d document.createElement(\x27script\x27);gsodar.type \x3d \x27text/javascript\x27;gsodar.async \x3d true;gsodar.src \x3d \x27//tpc.googlesyndication.com/sodar/V6zvOIoD.js\x27;var s \x3d document.getElementsByTagName(\x27script\x27)[0];s.parentNode.insertBefore(gsodar, s);})();\x3c/script\x3e');