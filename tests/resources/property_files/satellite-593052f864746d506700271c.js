var dataElementNames = [
  'listingNeighborhoood', 'ListingPropertyType', 'orientation',
  'privateFlag', 'buyerAPI', 'ListingCity', 'propertyStatusDesc',
  'productTypeFinal', 'thresholdValue', 'ListingState', 'pageType',
  'listingEnhancements', 'ListingZip', 'ListingPrice', 'dataSourceSwitch',
  'listingSource', 'roleType', 'optimizelyServer', 'listingLeadDelivery',
  'optimizelyServerEvar', 'ListingActivity', 'photoCount', 'listingID',
  'mprID', 'listingClickSource', 'listingRank', 'pageNumber-ldp', 'turboStatus',
  'listingLeadEnhancements', 'propertyChannel', 'listingStatus', 'realtipCount',
  'GlobalRegistrationStatus', 'dataScienceProducts', 'listingRank', 'optimizelyMultiTestVar',
  'advertiserID-agent', 'advertiserID-office', 'advertiserID-broker', 'planID', 'subID', 'communityID', 
  'advertiserID-listing', 'advertiserID-local', 'additionalRR-listingID', 'additionalRR-comID',
  'turboCampaignID', 'schid', 'turboStatus', 'propertyStatus', 'propertyStatusSub' 
];
  
var data = {};

for (var i = 0; i < dataElementNames.length; i++) {
  data[dataElementNames[i]] = _satellite.getVar(dataElementNames[i]);
}
var pageName = data.propertyChannel + ':' + 
    data.pageType + ':' +
    data.listingStatus + ':' +
    data.propertyStatusDesc;

window.MOVEAnalytics = window.MOVEAnalytics || {q: [], init: function() {this.q.push({t: 'init', a: arguments }) }, trackPage: function() {this.q.push({t: 'trackPage', a: arguments }) }, trackEvent: function() {this.q.push({t: 'trackEvent', a: arguments }) } };

var props = _satellite.getVar('globalVariables');
props.city = data.ListingCity;
props.state = data.ListingState;
props.zip = data.ListingZip;
props.neighborhood = data.listingNeighborhoood;
props.propertyType = 'ldp:' + data.ListingPropertyType;
props.brandExperience = 'rdc-responsive';
props.listingClickSource = data.listingClickSource;
props.searchResultPosition = data.listingRank;
props.dsSegment = 'buyer-api:' + data.buyerAPI;
props.dsProducts = data.dataScienceProducts;
props.ldpPropertyStatus = 'ldp:' + data.propertyStatusDesc;
props.productType = 'ldp:' + data.productTypeFinal;
props.productAddOns = 'ldp:' + data.turboStatus;
props.threshold = data.thresholdValue;
props.registeredUserActivity = data.GlobalRegistrationStatus;
props.pageType = data.pageType;
props.listingEnhancements = data.listingEnhancements;
props.leadEnhancements = data.listingLeadEnhancements;
props.listingPrice = data.ListingPrice;
props.rentalDataSource = data.dataSourceSwitch;
props.listingMls = data.listingSource;
props.roleType = data.roleType;
props.serverSideTestingSlot1 = data.optimizelyServer + ':' + data.optimizelyServerEvar;
props.listingActivity = 'ldp:' + data.ListingActivity;
props.photoCount = data.photoCount;
props.listingId = data.listingID;
props.mprId = data.mprID;
props.siteSection = props.channel =data.propertyChannel;
props.rankingOnSrp = data.listingRank;
props.abTestLdp = data.optimizelyMultiTestVar;
props.realtipCount = data.realtipCount;

props.advertiserIdAgent = data["advertiserID-agent"];
props.advertiserIdOffice = data["advertiserID-office"];
props.advertiserIdBroker = data["advertiserID-broker"];
props.planId = data.planID;
props.subId = data.subID;
props.communityId = data.communityID;
props.advertiserIdListing = data["advertiserID-listing"];
props.advertiserIdLocal = data["advertiserID-local"];
props.additionalRRListingId = data["additionalRR-listingID"];
props.additionalRRComId = data["additionalRR-comID"];
props.turboCampaignId = data.turboCampaignID;
props.searchId = data.schid;
props.turboStatus = data.turboStatus;
props.leadDelivery = data.listingLeadDelivery;
props.propertyStatus = data.propertyStatus;
props.propertyStatusSub = data.propertyStatusSub;

props.ruleName = 'Renovate: LDP';
window.MOVEAnalytics.trackPage(pageName, props);

