/**
 * JS Tag v3.3.4 (Wed Dec 27 17:17:29 UTC 2017)
 * RevJet
 * http://www.revjet.com/
 */
(function(){function f(a,b){function c(){}c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};var h="undefined"!==typeof window?window:this;function l(a){a=a.split(".");for(var b=h,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function m(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){return a.call.apply(a.bind,arguments)}
function q(a,b,c){q=Function.prototype.bind&&-1!==Function.prototype.bind.toString().indexOf("native code")?n:m;return q.apply(null,arguments)}var r=q;function t(a){try{window.document.write(a)}catch(b){}}function u(a,b,c){c=void 0===c?window.document:c;a=c.createElement(a);for(var d in b.j)b.j.hasOwnProperty(d)&&a.setAttribute(d,b.j[d]);for(var e in b.style)b.style.hasOwnProperty(e)&&(a.style[e]=b.style[e]);return a}function v(a){var b={margin:0,padding:0,position:"relative",left:0,top:0,opacity:1,visibility:"visible",overflow:"hidden",border:"none",cssFloat:"none"};if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b};function w(a,b,c){if("string"==typeof b)a.style[b]=c;else for(var d in b)a.style[d]=b[d]};var x=null;function y(){this.g=l("extern")||l("$sf.ext");this.a=!1;this.c=[]}y.prototype.f=function(a,b){for(var c=this.c,d=0;d<c.length;d++)c[d](a,b)};var z=0;function A(a,b){var c=a.getSlotResponseObject();this.N=!!window.inDapIF;this.s=a;var d=window.parent;if(this.N&&window!==d){var e=this.s.getSlotObjectName();d[e]?z=++d[e].instanceNumber:(d[e]={},d[e].instanceNumber=++z)}else z++;this.I=b;this.H=c.content||"";this.M=c.failover_query_string;this.g=a.getAdWidth();this.m=a.getAdHeight();this.F=!1;this.C=window;x||(x=new y);c=this.G=x;if(c.g&&!c.a)try{$sf.ext.register(this.g,this.m,r(c.f,c)),c.a=!0}catch(k){}}A.prototype.P=function(){return this.I};
A.prototype.getAdType=A.prototype.P;
function B(a){var b=a.M;return b?'<!DOCTYPE html>\n<html>\n<head></head>\n<body style="background-color: #fff;">\n<iframe '+['src="'+((-1!==b.toString().indexOf("msgCode=1005")?C(a,"/~cdn/Ads/ad_shared/static/406.html"):C(a,"/~cdn/Ads/ad_shared/static/failover.html"))+"?"+b)+'"','allowtransparency="false" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"','width="'+a.g+'"','height="'+a.m+'"','style="border:0;vertical-align:bottom;width:'+a.g+"px;height:"+a.m+'px;"'].join(" ")+"></iframe>\n</body>\n</html>":
a.H}A.prototype.A=function(){window.context&&window.context.reportRenderedEntityIdentifier&&window.context.reportRenderedEntityIdentifier(D(this))};A.prototype.showAd=A.prototype.A;A.prototype.v=function(){};A.prototype.hideAd=A.prototype.v;A.prototype.u=function(){this.F=!0;this.G.c=[]};A.prototype.destroyAd=A.prototype.u;A.prototype.B=function(){return[]};A.prototype.getFrames=A.prototype.B;A.prototype.O=function(){return this.F};A.prototype.adDestroyed=A.prototype.O;
function C(a,b){var c=a.s,d=c.getAdapter();return"https://"+c.getCdnDomainName()+(d?"/"+d:"")+b}function D(a){if(a=B(a)){var b=/<title>([0-9]+)\/[0-9]+<\/title>/gi.exec(a);return b&&0<b.length?"revjet-"+b[1]:"revjet-S"+a.length}return"revjet-S0"};function E(a){return a.replace(/<script[^>]*/ig,function(a){return a.replace(/(\s+)(type)(\s*=\s*)/ig,"$1data-revjet-script-type$3").replace(/(\s+)(language)(\s*=\s*)/ig,"$1data-revjet-script-language$3").replace(/(\s+)(src)(\s*=\s*)/ig,"$1data-revjet-script-src$3")+' type="text/revjet"'})}function F(a,b){var c=r(b,this);a.addEventListener?a.addEventListener("load",c,!1):a.onreadystatechange=function(){if("loaded"===a.readyState||"complete"===a.readyState)a.onreadystatechange=null,c()}}
function G(a,b,c,d){return function(){if(b.length){var e=b.shift(),k=G(a,b,c,d);if("SCRIPT"===e.nodeName&&"text/revjet"===e.type){var g=c.createElement("script");g.async=!1;var p=e.getAttribute("data-revjet-script-type");p&&(g.type=p);g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";(p=e.getAttribute("data-revjet-script-language"))&&g.setAttribute("language",p);e.charset&&(g.charset=e.charset);if(e=e.getAttribute("data-revjet-script-src"))g.src=e;g.src&&F(g,k);a.insertBefore(g,null);g.src||
k()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(g=[];e.firstChild;)g.push(e.removeChild(e.firstChild));a.insertBefore(e,null);G(e,g,c,k)()}else a.insertBefore(e,null),k()}else d&&d()}};var H=/<\/body>\s*<\/html>/i;function I(a,b){A.call(this,a,b);var c=a.getSlotResponseObject();this.L=c.embd_tag_id;this.K=c.disable_iframe;this.J=c.deliveryWrapper;this.f=this.c=this.a=null;this.D=!!c.close_button;this.o=this.i=null}f(I,A);function J(a,b){try{var c=a.contentDocument||a.contentWindow.document;c.open();c.write(b);c.close()}catch(d){}}
function K(a){a={width:a.g,height:a.m,name:"revjet-single-iframe"};var b={allowtransparency:"false",frameborder:"0",hspace:"0",marginwidth:"0",marginheight:"0",scrolling:"no",vspace:"0"};if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return u("iframe",{j:b,style:v()})}
function L(a){if(!/loaded|complete/.test(window.document.readyState)){var b=a.s,c=B(a);a.K||!H.test(c)?t(c):(t('<ins id="'+b.getHolderId()+'"></ins>'),a.C.setTimeout(function(){var d=a.C.document.getElementById(b.getHolderId());a.f=d;w(d,v({width:a.g+"px",height:a.m+"px"}));var e=K(a);a.a=e;d.appendChild(e);J(e,c)},0))}}function M(a){if(a.D&&a.i){a.o=N(a);var b=a.i;a=a.o;"undefined"!==typeof window.addEventListener?b.addEventListener("click",a,!1):b.attachEvent("onclick",a)}}
function O(a){if(a.o&&a.i){var b=a.i,c=a.o;"undefined"!==typeof window.removeEventListener?b.removeEventListener("click",c,!1):b.detachEvent("onclick",c);a.o=null}}
I.prototype.A=function(){A.prototype.A.call(this);if(this.c)w(this.c,"display","inline-block"),M(this);else{var a=this.s,b=this.C.document;if(a.getIsSyncLoading())L(this);else{var c=this.L||a.getContainerId();if(c=b.getElementById(c)){var d=b.getElementById(a.getWrapperId()),e=b.getElementById(a.getHolderId());if("div"===this.J){d&&(d&&d.parentNode&&d.parentNode.removeChild(d),this.a=this.f=this.c=null);e=B(this);if(e){d=b.createElement("div");d.innerHTML="L<div>"+E(e)+"</div>";e=[];for(d=d.lastChild;d.firstChild;)e.push(d.removeChild(d.firstChild));
d=e}else d=[];G(c,d,b)()}else{b=v({display:"inline-block",width:this.g+"px",height:this.m+"px"});d?(w(d,b),this.c=d):this.c=u("ins",{j:{id:a.getWrapperId()},style:b});b.display="block";e?(w(e,b),this.f=e):this.f=u("ins",{j:{id:a.getHolderId()},style:b});this.a=K(this);this.f.appendChild(this.a);if(this.D&&!this.i){var b=C(this,"/~cdn/JS/03/3.3.4/x-button.28x28.png");var k=void 0===k?window.document:k;b=u("img",{j:{src:b},style:{margin:0,padding:0,position:"absolute",left:"auto",bottom:"auto",right:0,
top:0,border:0,zIndex:999999,width:"18px",height:"18px",cursor:"pointer",overflow:"hidden",cssFloat:"none",webkitAppearance:"none"}},k);w(b,{zIndex:989999,left:this.g-18+"px",right:"auto",pointerEvents:"auto"});this.i=b;this.f.appendChild(b)}if(!d||!e){for(this.c.appendChild(this.f);c.firstChild;)c.removeChild(c.firstChild);c.appendChild(this.c)}J(this.a,B(this));M(this)}}}}};I.prototype.showAd=I.prototype.A;function N(a){return function(){a.s.hide()}}
I.prototype.v=function(){A.prototype.v.call(this);O(this);this.c&&w(this.c,"display","none")};I.prototype.hideAd=I.prototype.v;I.prototype.u=function(){A.prototype.u.call(this);O(this);if(this.a){var a=this.a;a&&a.parentNode&&a.parentNode.removeChild(a);this.i=this.c=this.f=this.a=null}};I.prototype.destroyAd=I.prototype.u;I.prototype.B=function(){return this.a?[this.a]:[]};I.prototype.getFrames=I.prototype.B;REVJET_Tag.ModuleManager.getInstance().setLoaded("banner",I);})();

