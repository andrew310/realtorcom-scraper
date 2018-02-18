//EDW If Turbo Status = Active, pull agent ID, otherwise Office ID
var edwAdType = _satellite.getVar('productType');
var productType = _satellite.getVar('productType');
var isAdvantage = _satellite.getVar('isAdvantage');
if (isAdvantage != '1')
	edwAdType += ":"+_satellite.getVar('productTypeSub')+":"+_satellite.getVar('turboStatus');

var dataSource = _satellite.getVar('dataSourceType'); // collect data source type from Front End
var comidKey = "&comid="+ encodeURIComponent(_satellite.getVar('communityID')); // Collect community ID from Front End
var lidKey = "&lid="+ encodeURIComponent(_satellite.getVar('listingID')); // Collect Listing ID from Front End

var edwQueryParam = _satellite.getVar('edwGlobal')
+"&ptnid="+ encodeURIComponent( "page_view") 
+"&page="+ encodeURIComponent( _satellite.getVar('pageType')) 
+"&adtyp="+ encodeURIComponent( edwAdType) 
//+"&pgvar="+ encodeURIComponent( _satellite.getVar('pageType')) 
//+"&lid="+ encodeURIComponent( _satellite.getVar('lidSwitch')) 
+"&adtsid="+ encodeURIComponent( _satellite.getVar('advertiserID-selector')) 
//+"&comid="+ encodeURIComponent( _satellite.getVar('communityID')) 
+"&planid=" + encodeURIComponent( _satellite.getVar('planID')) 
+"&SubId="+ encodeURIComponent( _satellite.getVar('subID')) 
+"&listing_adtsid=" + encodeURIComponent( _satellite.getVar('advertiserID-listing')) 
+"&local_adtsid=" + encodeURIComponent( _satellite.getVar('advertiserID-local')) 
+"&nearbyhomes_lid=" + encodeURIComponent( _satellite.getVar('nearbyRR-listingID')) 
+"&agentsother_lid=" + encodeURIComponent( _satellite.getVar('additionalRR-listingID')) 
+"&agentsother_comid=" + encodeURIComponent( _satellite.getVar('additionalRR-comID')) 
+"&nearbyhomes_adtsid=" + encodeURIComponent( _satellite.getVar('nearbyRR-advertiserID')) 
+"&chnl="+ encodeURIComponent( _satellite.getVar('propertyStatus') +":"+  _satellite.getVar('propertyStatusSub')) 
+"&zip="+ encodeURIComponent( _satellite.getVar('ListingZip')) 
+"&city="+ encodeURIComponent( _satellite.getVar('ListingCity')) 
+"&state="+ encodeURIComponent( _satellite.getVar('ListingState')) 
+"&campid="+ encodeURIComponent( _satellite.getVar('turboCampaignID')) 
+"&ppage="+ encodeURIComponent( _satellite.getVar('listingClickSource')) 
+"&rank="+ encodeURIComponent( _satellite.getVar('listingRank')) 
+"&listing_enhancement="+ encodeURIComponent( _satellite.getVar('listingEnhancements')) 
+"&listing_lead_delivery="+ encodeURIComponent( _satellite.getVar('listingLeadDelivery')) 
+"&listing_lead_enhancement="+ encodeURIComponent( _satellite.getVar('listingLeadEnhancements'))
+"&schid=" + encodeURIComponent( _satellite.getVar('schid'))
+"&real_tip_count=" + encodeURIComponent(_satellite.getVar('realtipCount'))
+"&turbo_status="+ encodeURIComponent( _satellite.getVar('turboStatus'));

if(dataSource === 'community' || dataSource === 'aptlist'){
  //return comidKey;
  edwQueryParam += comidKey;
}// if community, grab the community ID key
else{
  //return lidKey;
  edwQueryParam += lidKey;
} // otherwise return listing ID


if(productType == "building"){
  edwQueryParam += "&pgvar="+ encodeURIComponent( _satellite.getVar('pageType'))+ ":" + productType;
}
else{
	edwQueryParam += "&pgvar="+ encodeURIComponent( _satellite.getVar('pageType'));
}


var endPointAry=[];
var edwEndpoint = _satellite.getVar('edw-endpoint');
if (edwEndpoint.constructor !== Array)  
	endPointAry=[edwEndpoint]; 
else 
	endPointAry = edwEndpoint;
for (var i=0; i<endPointAry.length;i++){
	var img = document.createElement("img");    
	img.setAttribute("src",  endPointAry[i] + edwQueryParam);  
	img.setAttribute("style", 'display:none'); 
	document.body.appendChild(img); 
}


//fb

!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
if (!fbq.disablePushState){
  fbq.disablePushState = true;
  fbq('init', '754678604575607');
}
fbq('track', 'PageView');
fbq('track', 'ViewContent', {
content_ids: [_satellite.getVar('listingID')],
content_type: ['product', 'home_listing'],
listing_id: _satellite.getVar('listingID'),
pageType: _satellite.getVar('pageType'),
propertyStatus: _satellite.getVar('propertyStatus'),
listingPrice: _satellite.getVar('ListingPrice'),
listingState: _satellite.getVar('ListingState'),
listingBeds: _satellite.getVar('listingBeds'),
listingBaths: _satellite.getVar('listingBaths'),
listingSqFt: _satellite.getVar('listingSqFt'),
listingCity: _satellite.getVar('ListingCity'),
listingZip: _satellite.getVar('ListingZip'),
propertyType: _satellite.getVar('ListingPropertyType'),
productType: _satellite.getVar('productType')
});

//Costar Listing
//var costarListing = _satellite.getVar('costarKey');
//var costarEndpoint = 'http://www.apartments.com/impression/al.gif?FrontDoorAffiliateId=MOVE&SiteId=1&VisitId=12345678-0000-0000-0000-000000000000&VisitorId=00000000-0000-0000-0000-000000000000&SearchId=00000000-0000-0000-0000-000000000000&ContainerTypeId=0&ImpressionCount=1&EventTypeId=0&Media=4005'
//var costarContent = '&ListingKey='+_satellite.getVar('costarKey')+'&r='+_satellite.getVar('utc')
//var costarPixel = costarEndpoint + costarContent
//if(costarListing !== 'null') {
//var x = document.createElement("img");     
//x.setAttribute("src", costarPixel);     document.body.appendChild(x); 
//}

// forsee
;(function (g) {
    var d = document, i, am = d.createElement('script'), h = d.head || d.getElementsByTagName("head")[0],
            aex = {
                "src": _satellite.getVar('forseeEndpoint'),
                "type": "text/javascript",
                "async": "true",
                "data-vendor": "acs",
                "data-role": "gateway"
            };
    for (var attr in aex) { am.setAttribute(attr,aex[attr]); }
    h.appendChild(am);
    g['acsReady'] = function () {var aT = '__acsReady__', args = Array.prototype.slice.call(arguments, 0),k = setInterval(function () {if (typeof g[aT] === 'function') {clearInterval(k);for (i = 0; i < args.length; i++) {g[aT].call(g, function(fn) { return function() { setTimeout(fn, 1) };}(args[i]));}}}, 50);};
})(window);

//comscore
var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "6036093",});
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
  

