if(typeof truste=="undefined"||!truste||typeof truste.ca2=="undefined"||!truste.ca2){if(typeof truste==="undefined"||!truste){var truste={}
}if(typeof truste.ca==="undefined"||!truste.ca){truste.ca={};truste.ca._contRegistry={};truste.ca.contRegistryListeners=[];
truste.ts=new Date();truste.ca.hasRegistered=false;truste.ca.storedParentEvents=[];truste.ca.tagReferrer="";
truste.ca.dominantTag={};truste.ca.creativeMap={};truste.ca.isTopAd=true}truste.ca2={};truste.ic={};truste.ts=new Date();
truste.ca2.contMap={};truste.ca2.intMap={};truste.imgic=new Image(1,1);truste.ca2.intervalStack=[];truste.ca2.bindMap={};
truste.ca2.bindingInitMap={};truste.ca2.cidToInt={};truste.ca2.target={};truste.ca2.jsMap={};truste.ca2.adTypeMap={};
truste.ca2.osMap={};truste.ca.host=(typeof window.location.origin!=="undefined")?window.location.origin:window.location.protocol+"//"+window.location.host;
truste.ca2.customDecodeURL=function(a){var c=/\"\\/g;var b=decodeURI(a);b=b.replace(c,"").replace(/&/g,"").toLowerCase();
return b};truste.ca2.adtype=[truste.ca2.customDecodeURL("T&P%22%5CC%22%5C.%22%5CG&O&O%22%5CG%22%5CL%22%5CE%22%5CS&Y&N%22%5CD%22%5CI%22%5CC%22%5CA%22%5CT&I%22%5CO&N%22%5C.%22%5CC%22%5CO&M"),truste.ca2.customDecodeURL("F&W%22%5C.A%22%5C&DS%22%5CA%22%5C&F&E%22%5CP&R%22%5CO%22%5CT&%22%5CEC%22%5C&T&E%22%5CD.C%22%5C&O&M"),truste.ca2.customDecodeURL("D&O%22%5C&&U%22%5CB%22%5CL&E%22%5C&C&%22%5C&L%22%5CI&C&K&.N%22%5CE&T%22%5C"),truste.ca2.customDecodeURL("A%22%5CD&S%22%5C.B&R&%22%5CA&N%22%5CD&.N%22%5C&E&T")];
truste.ca2.mapDFA={adtype:[truste.ca2.customDecodeURL("S%22%5C0.&2%22%5CM&D&%22%5CN.&N%22%5CE%22%5C&T"),truste.ca2.customDecodeURL("%22%5CS1.&2&%22%5CM&%22%5CD&N.%22%5C&N&%22%5CE&T&")],domain:truste.ca2.customDecodeURL("A%22%5CD%22%5CV&E%22%5CR&T%22%5CI&S%22%5CE&R%22%5CS.&D%22%5CO&U%22%5CB&L%22%5CC&L%22%5CI%22%5CC&K.%22%5CN&E%22%5CT")};
truste.ca2.addEvent=function(d,c,b,a){if(d.addEventListener){d.addEventListener(c,b,false);return true
}else{if(d.attachEvent){return d.attachEvent("on"+c,b)}else{if(a){b();return true}else{return false}}}};
truste.ca.openPreferenceManager=function(c){var a=c.optoutLink;var b=/_LB(?=sidLB_)/;if(typeof c.sid!="undefined"&&c.sid.length>0&&!b.test(c.sid)){a=c.mobilePrefUrl+c.sid+"/?pid="+c.pid+"&aid="+c.aid+"&cid="+c.cid
}window.open(a)};truste.ca2.addBinding=function(b){var a=truste.ca2.copyBinding(b);truste.ca2.bindMap[a.baseName]=a;
return a};truste.ca.addRegistryListener=function(a){if(a&&a.apply){truste.ca.contRegistryListeners.push(a)
}};truste.ca.contRegister=function(a){if(a&&a.element&&a.baseName){if(!truste.ca._contRegistry[a.baseName]){for(var b=truste.ca.contRegistryListeners.length;
b-->0;){var c=truste.ca.contRegistryListeners[b];try{if(c.call({},a)){return true}}catch(d){}}}truste.ca._contRegistry[a.baseName]=a
}return false}}truste.ca2.contains=function(a){return this.indexOf(a)>-1};truste.ca2.containsAll=function(){if(this.length>0&&arguments.length>0){for(var a=0;
a<arguments.length;a++){if(!truste.ca2.contains.call(this,arguments[a])){return false}}}return true};
truste.ca2.getScriptElement=truste.ca2.getScriptElement||function(d,b,h,g){var a,f,c;var e=(d&&d.test)?d:new RegExp(d);
if(h){a=h}else{a=document.scripts&&document.scripts[document.scripts.length-1]}if(a&&!a.getAttribute("st-found")&&a.src&&(!d||e.test(a.src))){if(!b){a.setAttribute("st-found","true")
}return a}c=(f=document.getElementsByTagName("script")).length;while(c-->0){a=f[c];if(!a.getAttribute("st-found")&&e.test(a.src)&&g&&truste.ca2.containsAll.call(a.src,"pid="+g.pid,"aid="+g.aid)){if(!b){a.setAttribute("st-found","true")
}return a}}return null};truste.ca2.tagProtocol=function(a){if(window.location.protocol=="https:"){return window.location.protocol
}else{var a=truste.ca2.getScriptElement(/\/\/[^\.]+\.(intranet\.)?(truste|trustarc)(-labs|-svc)?\.(com|net)(:\n+)?\/[^\?#;]*ca(\?|\.js)/,true);
if(a){return a.src.substring(0,(a.src.indexOf("://")+1))}}return window.location.protocol}();truste.ca.initParameterMap=truste.ca.initParameterMap||function(d,g){if(d===null){g._query=g._url=""
}else{var b,a=g._url=d.src||g._url;a=(g._query=a.replace(/^[^;?#]*[;?#]/,"").replace(/&(amp|#38|#x00026);/ig,"&").replace(/&(equals|#61|#x0003d);/ig,"=").replace(/&(semi|#59|#x0003b);/ig,";")).replace(/[#;?]|&(num|#35|#x00023|quest|#63|#x0003f);/ig,"&");
if(a){for(a=a.split("&"),b=a.length;b-->0;){var c=a[b].split("=");try{g[String(c.shift()).toLowerCase()]=decodeURIComponent(c.length?c.join("="):"")
}catch(f){window.console&&console.log(f)}}}}return g};truste.ca2.isTypeMatch=function(a,d){if(typeof a==="undefined"||!a){return null
}var c,b;for(c=0;c<truste.ca2.adtype.length;c++){b=truste.ca2.adtype[c];if(a.indexOf(b)>-1){return b}}if(d.docRef.location.href.indexOf(truste.ca2.mapDFA.domain)!=-1){for(c=0;
c<truste.ca2.mapDFA.adtype.length;c++){b=truste.ca2.mapDFA.adtype[c];if(a.indexOf(b)>-1){return b}}}return null
};truste.ca.uuid=truste.ca2.uuid=function(){return"te-"+(((1+Math.random())*65536)|0).toString(16).substring(1)
};truste.ca2.copyBinding=function(d){var b={};for(var a in d){b[a]=d[a]}var c=truste.ca2.uuid();b.baseName=c;
b.containerId=c;b.iconSpanId=c+"-icon";b.intDivName=c+"-itl";b.anchName=c+"-anch";b.target="over";return b
};truste.ca2.initializePM=function(a){truste.ca.initParameterMap(a.script,a.directParams);truste.ca2.addToJsMapPM(a);
truste.ca2.initBindingPM(a)};truste.ca.isSecure=(truste.ca2.tagProtocol!="http:");truste.ca2.protocolCheck=function(a){return(truste.ca.isSecure)?a.replace("http:","https:"):a
};var te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_ib='  <div id="te-clr1-74975051-37c6-48f4-a016-6653d7af9fd7-itl" style="position: absolute; margin: 0 auto; width:240px; height:220px; border: 1px solid #ccc; display:block; background:#FFF; overflow:hidden; padding:0; font-size:12px; font-family: arial,helvetica,clean,sans-serif; text-align:left; z-index:1001;">\n    <div class="closeTag" style="float:right; padding:5px"><a style="cursor:pointer; color:#456d88; text-decoration:none; " alt="close" onclick="javascript:truste.ca.hideoverlay(te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi)"/>[close]</a></div> \n    <div class="mainRolloverSection" style="padding:5px 15px"> \n      <a onclick="truste.ca.interstitial_click(\'001\', te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi )" href="https://www.att.com" target="_blank"><img src="https://choices.trustarc.com/get?name=att_logo.png" alt="ad choices" class="advertiserLogo"/></a> \n      <br /> \n      <p style="padding:0 0 5px;><b><a style="color:#456d88; text-decoration:none;" href="https://www.att.com" target="_blank">AT&T</a> cares about your privacy.</b> \n            <a style="color:#456d88; text-decoration:none;" href="https://www.att.com" target="_blank">AT&T</a> delivered this personalized ad based on your interests. \n      </p> \n      <div style="padding-bottom:5px; ">\n        <a style="color:#456d88; text-decoration:none;" onclick="truste.ca.interstitial_click(\'005\', te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi )" href="https://preferences-mgr.trustarc.com/?type=att_hs&pid=att01&aid=att_hs&cid=20737064_97987455_214634864&w=120&h=240" target="_blank"><b>More information &amp; opt-out options &raquo;</b></a><br /> \n        <a style="color:#456d88; text-decoration:none;" onclick="truste.ca.interstitial_click(\'002\', te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi )" href="https://about.att.com/sites/privacy_policy" target="_blank"><b>AT&amp;T Privacy FAQ &raquo;</b></a><br /> \n      </div> \n    </div> \n    <div style="padding:5px 15px; height:100%; background:#efefef"> \n      <h2 style="font-weight:bold;font-size:12px;">AdChoices by <a style="color:#456d88; text-decoration:none;" href="http://www.truste.com" target="_blank"><img style="vertical-align:middle; border:none; width:70px;" src="http://choices.truste.com/get?name=TRUSTe_logo.png" /></a></h2>\n    </div> \n  </div> \n\n';
var te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi={baseName:"te-clr1-74975051-37c6-48f4-a016-6653d7af9fd7",baseUrl:truste.ca2.protocolCheck("http://choices.trustarc.com/"),anchName:"te-clr1-74975051-37c6-48f4-a016-6653d7af9fd7-anch",width:120,height:240,ox:2,oy:2,plc:"tr",iplc:"rel",intDivName:"te-clr1-74975051-37c6-48f4-a016-6653d7af9fd7-itl",iconSpanId:"te-clr1-74975051-37c6-48f4-a016-6653d7af9fd7-icon",backgroundColor:"white",opacity:0.8,filterOpacity:80,containerId:"te-clr1-74975051-37c6-48f4-a016-6653d7af9fd7",noticeBaseUrl:truste.ca2.protocolCheck("http://choices.trustarc.com/camsg?"),oBaseUrl:truste.ca2.protocolCheck("http://choices.trustarc.com/"),irBaseUrl:truste.ca2.protocolCheck("http://choices.trustarc.com/cair?"),icBaseUrl:truste.ca2.protocolCheck("http://choices.trustarc.com/caic?"),capBaseUrl:truste.ca2.protocolCheck("http://choices.trustarc.com/cap?"),interstitial:te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_ib,interstitialWidth:240,interstitialHeight:200,popTab:false,showLink:"javascript:truste.ca.showoverlay(te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi)",hideLink:"javascript:truste.ca.hideoverlay(te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi)",icon:truste.ca2.protocolCheck("http://choices.trustarc.com/assets/forward_i.png"),icon_cam:truste.ca2.protocolCheck("http://choices.trustarc.com/assets/admarker.png"),icon_cam_daa:truste.ca2.protocolCheck("http://choices.trustarc.com/")+"assets/ad_choices_i.png",icon_cam_mo:truste.ca2.protocolCheck("http://choices.trustarc.com/")+"assets/ad_choices_en.png",iconText:"&nbsp;AdChoices",aid:"att_hs",pid:"att01",sid:"_LBsidLB_",zindex:"100002",cam:"3",admarker:"default",cid:"20737064_97987455_214634864",priority:"0-0",optoutLink:"https://preferences-mgr.trustarc.com/?type=att_hs&pid=att01&aid=att_hs&cid=20737064_97987455_214634864&w=120&h=240",mobilePrefUrl:"https://mobile.truste.com/mobile/preferences/",target:"over",docRef:document,language:"en",directParams:{}};
if(te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi.aid.endsWith("-ma")||te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi.aid.endsWith("-mw")){(new Image(1,1)).src=((window.location.protocol=="http:")?"http://choices.trustarc.com/cap?":"http://choices.trustarc.com/cap?".replace("http:","https:"))+"aid=mata01&pid=mata01&cid=mamw-"+te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi.aid+"&w=120&h=240&c="+(((1+Math.random())*65536)|0).toString(16).substring(1)
}(function initSmarttags(){var a=false;var b=truste.ca2.addBinding(te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi);
b.script=truste.ca2.getScriptElement(/\/\/[^\.]+\.(intranet\.)?(truste|trustarc)(-labs|-svc)?\.(com|net)(:\n+)?\/[^\?#;]*ca\?.*?js=st((_0)|(_vc0)|(_v0)|0).*/,false,document.currentScript,b);
if(document.readyState=="complete"){a=true;setTimeout(function(){truste.ca2.initializePM(b)},700)}if(!a){a=true;
truste.ca2.addEvent(window,"load",function(){setTimeout(function(){truste.ca2.initializePM(b)},750)})
}})();truste.ca2.getParamByName=function(b,a){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var d=new RegExp("[\\?&]"+b+"=([^&#]*)");
var c=d.exec(a);if(c===null){return""}else{return decodeURIComponent(c[1].replace(/\+/g," "))}};truste.ca2.addToJsMapPM=function(c){var a=null;
script=c.script;for(var d in truste.ca2.jsMap){var e=truste.ca2.jsMap[d];if(e===script){a=e;return true
}}if(!a){truste.ca2.jsMap[c.baseName]=script;return true}return false};truste.ca2.getSz=function(a){var b="sz=";
var e=new RegExp(b+"[0-9]+x[0-9]+","g");var c=e.exec(a);if(c&&c.length>0){var d=c[0];if(d.length>b.length){return d.substring(b.length,d.length)
}}return null};if(typeof truste.ca.mobile=="undefined"&&!truste.ca.mobile){truste.ca.mobile=function(){var b=navigator.userAgent||navigator.vendor||window.opera;
var d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|nexus (7|s|one)|galaxy.*nexus|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
var c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
return(d.test(b)||c.test(b.substr(0,4)))};truste.ca.checkDimensions=function(){var a=window.matchMedia&&window.matchMedia("(orientation: portrait)");
var c=screen.width/(window.innerHeight||0);var b;var d=false;if((a&&a.matches)||(screen.height>screen.width)){d=((screen.height*c)-document.documentElement.clientHeight)>0?true:false
}else{d=(window.parent.innerHeight<255)?true:false}return d};truste.ca.inApp=truste.ca.inApp||function(){var b=window.navigator.standalone,e=window.navigator.userAgent.toLowerCase(),d=/safari/.test(e),c=/iphone|ipod|ipad/.test(e),a=/\bandroid (\d+(?:\.\d+)+);/g.exec(e);
isInApp=false;if(c){if(!b&&!d){isInApp=true}}else{if(a&&a[1]>="4.4"){isInApp=/\bversion\/\d+\.\d+/.test(e)||/\bwv/.test(e)
}else{if(window.mraid||truste.ca.checkDimensions()){isInApp=true}}}return isInApp};truste.ca.isMobile=truste.ca.mobile();
truste.ca.isInApp=truste.ca.isMobile&&truste.ca.inApp()}truste.ca2.getInterstitialPM=function(f){var a=f.width+"x"+f.height;
var b=document.createElement("script");b.type="text/javascript";var g="aid="+f.aid;if(truste.ca.isMobile&&!f.suffix){f.suffix=true;
if(g.endsWith("-ma")){g=g.substring(0,g.indexOf("-ma"))}else{if(g.endsWith("-mw")){g=g.substring(0,g.indexOf("-mw"))
}}g=g+((truste.ca.isInApp)?"-ma":"-mw")}if(!f.impression){(new Image(1,1)).src=f.capBaseUrl+g+"&pid="+f.pid+"&cid="+f.cid+"&w="+f.width+"&h="+f.height+"&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
f.impression=1}if(!f.set){var d=g+"&pid="+f.pid+"&cid="+f.cid+"&js=st_1pm&sz="+a+"&c="+f.containerId;
if(f.directParams.plc){d=d+"&plc="+f.directParams.plc}if(f.directParams.iplc){d=d+"&iplc="+f.directParams.iplc
}if(f.directParams.cam){d=d+"&cam="+f.directParams.cam}if(f.directParams.admarker){d=d+"&admarker="+f.directParams.admarker
}if(f.directParams.language){d=d+"&language="+f.directParams.language}if(f.directParams.locale){d=d+"&locale="+f.directParams.locale
}if(f.directParams.sid){d=d+"&sid="+f.directParams.sid}if(f.directParams.zi){d=d+"&zi="+f.directParams.zi
}if(f.directParams.ox){d+="&ox="+f.directParams.ox}if(f.directParams.oy){d+="&oy="+f.directParams.oy}b.src=((truste.ca2.tagProtocol=="https:")?f.baseUrl.replace("http:","https:"):f.baseUrl)+"ca?"+d;
document.body.appendChild(b)}if(!truste.ca2.addClearAdIcon){var e=document.createElement("script");var c="aid="+f.aid+"&pid="+f.pid+"&cid="+f.cid;
e.src=((truste.ca2.tagProtocol=="https:")?f.baseUrl.replace("http:","https:"):f.baseUrl)+"ca?"+c+"&js=st_2";
document.body.appendChild(e)}};truste.ca2.getObjectParamValue=function(e,d){if(typeof e=="undefined"||e.nodeName.toLowerCase()!=="object"){return null
}var f=e.getElementsByTagName("param");if(f){for(var c=0;c<f.length;c++){var a=f[c];var b=a.getAttribute("name");
if(b&&b===d){return a.getAttribute("value")}}}return null};truste.ca2.initDoubleclickPM=function(b,k){var c=false;
var a=window.location.href;if(truste.ca2.isTypeMatch(a,k)){c=truste.ca2.assignSizeFromScript(a,k);var n=truste.ca2.getSz(a);
truste.ca2.getInterstitialPM(k)}if(!c){var f=function(i){return(i.gotParent)?null:(i.gotParent=1,(i.parentElement||i.parentNode))
};var e=b.previousSibling||f(b);do{if(e&&e.nodeType===1){if(e.nodeName.toLowerCase()==="script"){var m=e.src;
if(m&&truste.ca2.isTypeMatch(m,k)){c=truste.ca2.assignSizeFromScript(m,k);if(c){truste.ca2.getInterstitialPM(k);
break}}}else{if(e.nodeName.toLowerCase()==="object"&&e.width>1&&e.height>1){k.width=e.width;k.height=e.height;
truste.ca2.getInterstitialPM(k);c=true;break}else{if(e.nodeName.toLowerCase()=="div"||e.nodeName.toLowerCase()=="a"){var h=truste.ca2.findObjectOrImg(e);
if(!h&&e.nodeName.toLowerCase()==="div"&&(e.className==="GoogleActiveViewClass"||e.className==="spongecell-ad")){h=truste.ca2.findObjectOrImg(e,"iframe")
}if(h){k.width=(h.width&&h.width.toString().indexOf("%")==-1)?h.width:h.offsetWidth;k.height=(h.height&&h.height.toString().indexOf("%")==-1)?h.height:h.offsetHeight;
truste.ca2.getInterstitialPM(k);c=true;break}}}}}}while(e=(e&&e.previousSibling)?e.previousSibling:f(b))
}if(!c){var l=document.getElementsByTagName("head");if(l&&l.length>0){var j=l[0].getElementsByTagName("script");
for(var g=0;g<j.length;g++){var m=j[g].src;if(m&&truste.ca2.isTypeMatch(m,k)){c=truste.ca2.assignSizeFromScript(m,k);
if(c){truste.ca2.getInterstitialPM(k);break}}}}}if(!c){if(top!==self&&window.frameElement&&window.frameElement.clientWidth==k.width&&window.frameElement.clientHeight==k.height){truste.ca2.getInterstitialPM(k)
}}if(!c){var d=document.getElementById("celtra-banner");if(d){k.width=d.offsetWidth;k.height=d.offsetHeight;
truste.ca2.getInterstitialPM(k)}}};truste.ca2.assignSizeFromScript=function(d,c){var a=truste.ca2.getSz(d);
if(a&&a!==""){var b=a.split("x");if(b.length==2){c.width=b[0];c.height=b[1];return true}}return false
};truste.ca2.findObjectOrImg=function(f,d){var a=[];a.push(f);while(a.length>0){var i=a.pop();if(i.nodeName.toLowerCase()=="object"){var k=(i.width&&i.width.toString().indexOf("%")==-1)?i.width:i.offsetWidth;
var j=(i.height&&i.height.toString().indexOf("%")==-1)?i.height:i.offsetHeight;if(k>1&&j>1){return i}}else{if(i.nodeName.toLowerCase()=="a"){var g=(i.childElementCount||i.children.length);
var e=(i.firstElementChild||i.children[0]);if(g>0&&e.nodeName.toLowerCase()=="img"&&e.width>1&&e.height>1){return e
}}else{if(i.nodeName.toLowerCase()=="img"&&i.style.visibility!="hidden"&&i.parentElement.style.visibility!="hidden"&&i.width>1&&i.height>1){return i
}else{if(d&&i.nodeName.toLowerCase()===d&&i.offsetWidth>1&&i.offsetHeight>1&&i.style.visibility!="hidden"&&i.style.display!="none"){return i
}}}}var b=i.childNodes;if(b&&b.length>0){for(var c=0;c<b.length;c++){a.push(b[c])}}}return null};truste.ca2.initBindingPM=function(b){b.count=b.count||0;
var a=truste.ca2.jsMap[b.baseName];if(a){truste.ca2.initDoubleclickPM(a,b)}if(!b.impression){if(b.count<10){b.count++;
setTimeout(function(){truste.ca2.initBindingPM(b)},250)}else{(new Image(1,1)).src=b.capBaseUrl+"aid="+b.aid+"&pid="+b.pid+"&cid="+b.cid+"&w=1&h=1&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
b.impression=1}}};truste.ca.getConsent=function(){var a={PrivacyManagerAPI:{action:"getConsent",timestamp:new Date().getTime(),domain:window.location.hostname,self:window.location.hostname,authority:"truste.com"}};
var b=JSON.stringify(a);window.top.postMessage(b,"*")};truste.ca.getCreativeId=function(a){var c=null;
if(a!==null){for(var b in truste.ca.creativeMap){if(truste.ca.creativeMap.hasOwnProperty(b)&&truste.ca.creativeMap[b]===a){c=b;
break}}if(c===null){c=truste.ca.uuid();truste.ca.creativeMap[c]=a}}return c};truste.ca.getCreativeIdOfWindow=function(b){var c=null;
for(var a in truste.ca.dominantTag){if(truste.ca.dominantTag.hasOwnProperty(a)){creative=truste.ca.dominantTag[a].creative;
if(creative.tagName==="IFRAME"&&creative.contentWindow===b){c=a;break}}}return c};truste.ca.checkIfParentHasCaJS=function(){var a;
if(self!=top){a={DeCollision:{action:"hasCaJS"}};window.parent.postMessage(JSON.stringify(a),"*")}};truste.ca.checkCollision=function(d){var c,f,a,e;
if(truste.ca2.findCreative){e=truste.ca2.findCreative(d)}if(!e&&truste.ca){e=truste.ca.findCreative&&truste.ca.findCreative(d)
}c=truste.ca.getCreativeId(e);if(typeof d.priority==="string"){f=d.priority.split("-")}else{f=[d.priority,0]
}if(typeof truste.ca.dominantTag[c]==="undefined"){truste.ca.dominantTag[c]={baseName:d.baseName,priority:f,creative:e,host:truste.ca.host}
}else{a=truste.ca.dominantTag[c].priority;if(a[1]==f[1]){if(a[0]<f[0]){truste.ca2.removeIcon(d.baseName)
}else{truste.ca2.removeIcon(truste.ca.dominantTag[c].baseName);truste.ca.dominantTag[c].baseName=d.baseName;
truste.ca.dominantTag[c].priority=f}}else{if(a[1]<f[1]){truste.ca2.removeIcon(d.baseName)}else{truste.ca2.removeIcon(truste.ca.dominantTag[c].baseName);
truste.ca.dominantTag[c].baseName=d.baseName;truste.ca.dominantTag[c].priority=f}}}setTimeout(function(){truste.ca.checkIfParentHasCaJS()
},750)};truste.ca.removeBaseNameInIframes=function(c,a){var b={DeCollision:{action:"suppress",baseName:c}};
a.contentWindow.postMessage(JSON.stringify(b),"*")};truste.ca.removeTag=function(d){var b,a;a=false;var c;
for(c in truste.ca2.bindMap){if(truste.ca2.bindMap.hasOwnProperty(c)){if(truste.ca2.bindMap[c].baseName===d){truste.ca2.removeIcon(d);
a=true;break}}}if(!a){for(c in truste.ca.dominantTag){if(truste.ca.dominantTag.hasOwnProperty(c)){b=truste.ca.dominantTag[c].creative;
if(b.tagName=="IFRAME"){truste.ca.removeBaseNameInIframes(d,b)}}}}};truste.ca.processCheckCollision=function(e){var b,a,c,f,d;
b=e.creativeHash;if(e.baseName!==truste.ca.dominantTag[b].baseName){a=truste.ca.dominantTag[b].priority;
c=e.priority;if(a[1]==c[1]){if(a[0]<c[0]){d=e.baseName}else{d=truste.ca.dominantTag[b].baseName;truste.ca.dominantTag[b].baseName=e.baseName;
truste.ca.dominantTag[b].priority=e.priority;truste.ca.dominantTag[b].host=e.host}}else{if(a[1]<c[1]){d=e.baseName
}else{d=truste.ca.dominantTag[b].baseName;truste.ca.dominantTag[b].baseName=e.baseName;truste.ca.dominantTag[b].priority=e.priority;
truste.ca.dominantTag[b].host=e.host}}truste.ca.removeTag(d)}else{console.log("Abort Collision check, no need to compare same baseName")
}};truste.ca.passDominantTagToParent=function(d){var c,a;c={};for(var b in d){if(d.hasOwnProperty(b)){c[b]={baseName:d[b].baseName,priority:d[b].priority,host:d[b].host}
}}a={DeCollision:{action:"dominantTagPass",dominantTag:c}};window.parent.postMessage(JSON.stringify(a),"*")
};truste.ca.processDominantTagPass=function(e){var d,a,c;d=JSON.parse(e.data);if(truste.ca.isTopAd){a=truste.ca.getCreativeIdOfWindow(e.source);
for(var b in d.DeCollision.dominantTag){if(d.DeCollision.dominantTag.hasOwnProperty(b)){c=d.DeCollision.dominantTag[b];
truste.ca.processCheckCollision({baseName:c.baseName,source:e.source,priority:c.priority,creativeHash:a,host:c.host})
}}}else{truste.ca.passDominantTagToParent(d.DeCollision.dominantTag)}};truste.ca.processPostMessage=function(h){var l,d,c;
try{try{d=JSON.parse(h.data)}catch(j){d=h.data}if(d&&d.PrivacyManagerAPI){truste.ca.tagReferrer=h.origin
}else{if(d&&d.DeCollision){c=d.DeCollision.action;switch(c){case"hasCaJS":l={DeCollision:{action:"hasCaJSResponse"}};
h.source.postMessage(JSON.stringify(l),h.origin);break;case"hasCaJSResponse":truste.ca.isTopAd=false;
setTimeout(function(){truste.ca.passDominantTagToParent(truste.ca.dominantTag)},750);break;case"dominantTagPass":truste.ca.processDominantTagPass(h);
break;case"suppress":truste.ca.removeTag(d.DeCollision.baseName);break;default:break}}else{if(d&&d==="AMZNOVRIDE"){var a="http://www.amazon.com/adprefs/?pn=1&pg=daaedisc&pp=1,t,";
var n;for(var k in truste.ca2.bindMap){if(truste.ca2.bindMap.hasOwnProperty(k)){truste.ca2.bindMap[k].target="directlink";
n=a;n=n+truste.ca2.bindMap[k].pid+",";n=n+truste.ca2.bindMap[k].aid+",";n=n+truste.ca2.bindMap[k].cid+",";
n=n+truste.ca2.bindMap[k].width+",";n=n+truste.ca2.bindMap[k].height;truste.ca2.bindMap[k].optoutLink=n
}}}else{if(h.source===self.parent){if(!truste.ca.hasRegistered){var g={};g.source=h.source;g.data=h.data;
g.origin=h.origin;truste.ca.storedParentEvents.push(g)}else{for(var f in truste.ca._contRegistry){var b=truste.ca._contRegistry[f];
if(d.priority<=b.priority){truste.ca2.removeIcon(b.baseName)}else{var m=JSON.stringify({suppress:true});
h.source.postMessage(m,h.origin)}}}}else{if(d.suppress){for(var f in truste.ca._contRegistry){truste.ca2.removeIcon(truste.ca._contRegistry[f].baseName)
}}}}}}}catch(h){}};truste.ca2.removeIcon=function(b){var a=document.getElementById(b+"-icon")||document.getElementById(b);
if(a&&a.parentNode){a.parentNode.removeChild(a)}delete truste.ca._contRegistry[b]};truste.ca.addRegistryListener(function(b){var a=te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi.baseName;
var f=truste.ca._contRegistry[a];var e=function e(h,g){for(var i=g;i!==null;i=i.parentNode){if(i==h){return true
}}return false};if(b.baseName==a){if(!a){return true}for(var c in truste.ca._contRegistry){var d=truste.ca._contRegistry[c];
if(e(d.element,b.element)||e(b.element,d.element)){return true}}}if(!f){return}if(f.priority&&(!b.priority||f.priority<b.priority)){if(e(b.element,f.element)||e(f.element,b.element)){var d=document.getElementById(f.baseName+"-icon");
if(d&&d.parentNode){d.parentNode.removeChild(d)}delete truste.ca._contRegistry[f.baseName];te_clr1_74975051_37c6_48f4_a016_6653d7af9fd7_bi.baseName=null
}}return false});