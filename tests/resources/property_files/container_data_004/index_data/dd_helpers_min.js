function dd_log(e){(DD_LOCAL||LOG_ALL)&&console.log(e)}function addElement(e,t){void 0!==window[e]||(window[e]=[]),window[e].push(t)}function beginSubload(e,t){arrayLoadStarted[e+"Subload"+t]||beginLoad(e,e+"Subload"+t)}function loadAssets(e){arrayLoadStarted[e+"Elements"]||beginLoad(e,e+"Elements")}function beginLoad(e,t){var n=(new Date).getTime(),i=window[t],o=document.getElementById(e);document.getElementById(e)||((o=document.createElement("div")).id=e,o.className="panel",document.getElementById("media").insertBefore(o,document.getElementById("border")));for(var a in i){i[a].id;"img"==i[a].tagName.toLowerCase()&&(i[a].src=i[a].imgLoc),null!=i[a].addHTML&&(i[a].innerHTML=i[a].addHTML),o.appendChild(i[a])}if(!arrayLoadStarted[t]){animationShouldStart=!1,arrayLoadStarted[t]=!0;var r=setInterval(function(){var e=0,o=0;for(var a in i)"img"==i[a].tagName.toLowerCase()&&(e++,i[a].complete&&o++);if(e==o){clearInterval(r),arrayLoadCompleted[t]=!0,animationShouldStart=!0;for(var a in i)setOrigins(i[a]);dd_log(t+" loaded in: "+((new Date).getTime()-n)/1e3)}else dd_log(t+" - "+(e-o)+" images remaining")},50)}}function createBorder(){var e=document.getElementById("border");null!=e&&document.getElementById("media").removeChild(e),(e=createNewElement("canvas","border")).height=getStyle("media","height")+2,e.width=getStyle("media","width")+2;var t=e.getContext("2d");t.strokeStyle=borderColor,t.lineWidth=4,t.strokeRect(0,0,getStyle("media","width")+2,getStyle("media","height")+2),document.getElementById("media").appendChild(e),TweenLite.set(e,{x:-1,y:-1})}function loadLibraries(){var e=setInterval(function(){var t=!0;try{com.greensock.TweenLite}catch(e){t=!1}try{com.greensock.easing}catch(e){t=!1}try{com.greensock.plugins.CSSPlugin}catch(e){t=!1}t&&(clearInterval(e),initializeAd())},50),t=document.createElement("script");t.type="text/javascript",t.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js",t.src="https://s0.2mdn.net/ads/studio/cached_libs/tweenlite_1.19.0_422f021fad4c20f20cf3640a06ac39e9_min.js";var n=document.createElement("script");n.type="text/javascript",n.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/easing/EasePack.min.js",n.src="https://s0.2mdn.net/ads/studio/cached_libs/easepack_1.19.0_be87087c08fcec83e2b64c70571fe91f_min.js";var i=document.createElement("script");i.type="text/javascript",i.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js",i.src="https://s0.2mdn.net/ads/studio/cached_libs/cssplugin_1.19.0_cfbff7d208ccfdbe176b9855af1eb1fa_min.js",document.querySelector("head").appendChild(i),document.querySelector("head").appendChild(n),document.querySelector("head").appendChild(t)}function removeHotspots(){for(var e=document.getElementsByClassName("hotspot"),t=0;t<e.length;t++)removeListeners(e[t]),TweenLite.set(e[t],{visibility:"hidden"})}function initializeHotspots(){for(var e=document.getElementsByClassName("hotspot"),t=0;t<e.length;t++)initializeHotspot(e[t])}function initializeHotspot(e){addListeners(e),TweenLite.set(e,{visibility:"visible"})}function preventMenu(e){PREVENT_MENU&&!DD_LOCAL&&e.preventDefault()}function addListeners(e){TweenLite.set(e,{cursor:"pointer"}),e.addEventListener("click",buttonClick),e.addEventListener("mouseover",buttonOver),e.addEventListener("mouseout",buttonOut),e.addEventListener("contextmenu",preventMenu)}function removeListeners(e){TweenLite.set(e,{cursor:"default"}),e.removeEventListener("click",buttonClick),e.removeEventListener("mouseover",buttonOver),e.removeEventListener("mouseout",buttonOut),e.removeEventListener("contextmenu",preventMenu)}function resetPanel(e){null==e.childNodes&&(e=document.getElementById(e));for(var t=0;t<e.childNodes.length;t++)try{var n=e.childNodes[t];1==n.nodeType&&"hotspot"!=n.className&&(TweenLite.killTweensOf(n),n.removeAttribute("style"))}catch(n){dd_log("Unable to remove style on "+e[t])}for(t=0;t<frame.length;t++)TweenLite.killTweensOf(frame[t])}function getStyle(e,t){var n;if("string"==typeof e?n=window.getComputedStyle(document.getElementById(e),""):"null"!=e&&void 0!=e&&(n=window.getComputedStyle(e,"")),n){var i=parseInt(n.getPropertyValue(t));return isNaN(i)&&(i=0),i}return null}function getOrigin(e,t){var n;"string"==typeof e?n=document.getElementById(e).origin[t]:"null"!=e&&(n=e.origin[t]);var i=parseInt(n);return isNaN(i)&&(i=0),i}function setOrigins(e){for(var t=0;t<e.childNodes.length;t++)1==e.childNodes[t].nodeType&&(setOrigin(e.childNodes[t]),setOrigins(e.childNodes[t]))}function setOrigin(e){e.origin=new Object,e.origin.top=getStyle(e,"top"),e.origin.left=getStyle(e,"left"),e.origin.width=getStyle(e,"width"),e.origin.height=getStyle(e,"height"),e.origin.opacity=getStyle(e,"opacity")}function createNewElement(e,t,n,i){var o=document.createElement(e);return"img"==e?(null!=n&&(o.imgLoc=n),null!=i&&(o.className=i)):null!=n&&(o.className=n),o.id=t,o}function animationIsComplete(){animationComplete=!0,dd_log(currentPanel+" runtime: "+getAnimationRuntime())}function getAnimationRuntime(){return((new Date).getTime()-startTime)/1e3}var PREVENT_MENU=!0;