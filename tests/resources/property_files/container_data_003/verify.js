var adbCokiSyncCntxObj = {dvObj: $dvbs, impId: '13f146a3b9e4464aa75ac9ca87223fb4', eventToSubscribe: 'AfterDecisionRender'};adbCokiSyncCntxObj.dvObj.pubSub.subscribe(adbCokiSyncCntxObj.eventToSubscribe, adbCokiSyncCntxObj.impId, 'AdobeCookieSync', function () { var url = 'https://dpm.demdex.net/ibs:dpid=149710&dpuuid=-1964411373484216273&redir=' + encodeURIComponent('https://tps711.doubleverify.com/bsevent.gif?impid=13f146a3b9e4464aa75ac9ca87223fb4&admpid=${DD_UUID}');adbCokiSyncCntxObj.dvObj.domUtilities.addImage(url, adbCokiSyncCntxObj.dvObj.tags[adbCokiSyncCntxObj.impId].tagElement.parentElement, 1); });setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'13f146a3b9e4464aa75ac9ca87223fb4',
                comparisonItems:[{name : 'cmp', value : 12493197},{name : 'plmt', value : 12495205}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_621410751975');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);
(function() {var dvObj = $dvbs;var impId = '13f146a3b9e4464aa75ac9ca87223fb4';var dvParams = {'useDvp': 'false','logRate': '100'};dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"BHL", function() {function f(){var c="true"===dvParams.useDvp?"dvp_":"",d="";this.exec=function(){var a={},b;a:{try{b=history.length;break a}catch(e){d+="|"+e.message}b=void 0}b&&(a[c+"brh"]=b);c&&d&&(a.dvp_brherr=d);try{a&&dvObj.registerEventCall(impId,a)}catch(e){}}}try{(new f).exec()}catch(c){};});})();(function() {var dvObj = $dvbs;var impId = '13f146a3b9e4464aa75ac9ca87223fb4';dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"CTITS",function(){var a=-1;try{top.frames&&(a=top.frames.length),dvObj.registerEventCall(impId,{fcifrms:a})}catch(b){}});})();var dvObj = $dvbs;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("13f146a3b9e4464aa75ac9ca87223fb4",false);


try{__tagObject_callback_621410751975({ImpressionID:"13f146a3b9e4464aa75ac9ca87223fb4", ServerPublicDns:"tps711.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "13f146a3b9e4464aa75ac9ca87223fb4");}catch(e){}
try{__verify_callback_621410751975({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "13f146a3b9e4464aa75ac9ca87223fb4");}catch(e){}
