_satellite.pushAsyncScript(function(event, target, $variables){
  // DO NOT REMOVE WHILE PARITY TESTING
window.preventSegmentCalls = !_satellite.getVar('aa:shouldCreateParityId');

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  vendors: {
    segment: 'segment',
    siteCatalyst: 'siteCatalyst',
    mixPanel: 'mixPanel'
  },

  qaSegmentWriteKey: "sbqueQfGqhUZ2iz0B4eJlvH2fIXhHxBW",
  prodSegmentWriteKey: "AQDwyFATlYKIsir9uod3ma82uVwkfkGN",
  adobeOrgID: "8853394255142B6A0A4C98A4@AdobeOrg",

  b2bQaSegmentWriteKey: 'iKC8jcXRs42XjEtHcuzmNXrZoQTJyIy3',

  b2cRealtorTestWriteKey: 'arOyexceTY81QFumuEfuvoQ0XVLzhj0I'
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var constants = __webpack_require__(0);

module.exports = function(segmentAdaptor, utils) {
  var vendors = constants.vendors;
  //Default Configuration
  var MOVEConfig = {
    segmentWriteKey: constants.qaSegmentWriteKey, //QA Segment Write Key
    adobeOrgID: constants.adobeOrgID, //MOVE OrgID
    sampling: {}
  };

  var eventQueue = [];
  //Default sampling to 100% for all vendors
  for (var key in vendors) {
    MOVEConfig.sampling[key] = 100;
  }

  var preventSegmentCalls = window.preventSegmentCalls || false;

  if (window._satellite && !preventSegmentCalls) {
    window._satellite.getVar('parityId');
  }

  function getParityId(isModalRule) {
    if (typeof window.parityIdGenerator === 'undefined') {
      return '';
    }

    if (isModalRule) {
      return window.parityIdGenerator.getId('segment', 'modal');
    }

    return window.parityIdGenerator.getId('segment');
  }

  var retries = 20;
  function transmitBeacon(segCall){
    var adobeMcid = utils.getVisitorID();
    if ((adobeMcid == null || adobeMcid == "") && retries != 0){
      retries--;
      setTimeout(function(){transmitBeacon(segCall)}, 250);
    } else {
      segCall.call();
    }
  }

  return {
    //Init function for MOVEAnalytics
    //Only requires if you do not use default configuration
    init: function(config) {
      var segmentKeyUpdated = false;
      for (var key in config){
        if (key=='segmentWriteKey') segmentKeyUpdated = true;
        MOVEConfig[key] = config[key];
      }
      if (segmentKeyUpdated)
        segmentAdaptor.initializeSegment(MOVEConfig.segmentWriteKey);
    },
    //Tracking API for page view
    trackPage: function(pageName, properties, integrations) {
      if (preventSegmentCalls) {
        return;
      }
      properties = properties || {};
      var isModalRule = properties.isModalRule || false;
      var parityId = getParityId(isModalRule);
      if (parityId) {
        properties.parityId = parityId;
      }
      utils.setCurrentPage(pageName);

      if (utils.qualifiedAfterSampling(vendors.segment, MOVEConfig)) {
        transmitBeacon(function(){
            segmentAdaptor.trackPage(
              pageName,
              utils.getGlobalVariables(properties, true),
              utils.processFiltersOnIntegration(integrations, MOVEConfig)
            );
          });
      }

    },

    //Tracking API for any custom event
    trackEvent: function(event, properties, integrations, sendEventOnNextPage) {
      if (preventSegmentCalls) {
        return;
      }

      properties = properties || {};
      var isModalRule = properties.isModalRule || false;
      var parityId = getParityId(isModalRule);
      if (parityId) {
        properties.parityId = parityId;
      }

      if (utils.qualifiedAfterSampling(vendors.segment, MOVEConfig)) {
        if (sendEventOnNextPage && utils.checkLocalStorageAvailability()){
          //Store pixel in Local storage
          var beaconObj = {
            evt: event,
            props: utils.getGlobalVariables(properties, false),
            integrations: utils.processFiltersOnIntegration(integrations, MOVEConfig),
            ts: (new Date()).getTime()
          }
          window.localStorage["moveAnalytics.beacons"] = JSON.stringify(beaconObj);

        }else{
          transmitBeacon(
              function(){
                segmentAdaptor.trackEvent(
                  event,
                  utils.getGlobalVariables(properties, false),
                  utils.processFiltersOnIntegration(integrations, MOVEConfig)
                );
              });
        }
      }
    },

    //Enable/Disable debugging
    debug: function(enable) {
      segmentAdaptor.debug(enable);
      utils.setDebugState(enable);
    },

    log: function(message) {
      utils.log(message);
    },

    //Keys for integrations
    integrations: vendors,

    getMoveConfig: function() {
      return MOVEConfig;
    },

    getPreventSegmentCalls: function() {
      return preventSegmentCalls;
    },

    setPreventSegmentCalls: function(bool) {
      preventSegmentCalls = bool;
    }
  };
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function createQueueProcessor(MOVEAnalytics) {
  return function queueProcessor(entry) {
    try {
      var props = (entry.a.length > 1)?entry.a[1]:undefined;
      var integrations = (entry.a.length > 2)?entry.a[2]:undefined;
      switch(entry.t){
        case 'init':
          MOVEAnalytics.init(entry.a[0]);
          break;
        case 'trackPage':
          MOVEAnalytics.trackPage(entry.a[0], props, integrations);
          break;
        case 'trackEvent':
          MOVEAnalytics.trackEvent(entry.a[0], props, integrations);
          break;
      }
    } catch(ex) {
      MOVEAnalytics.log("Error processing Queue: " + ex.message);
    }
  }
}

module.exports = createQueueProcessor;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

//Sent delay Beacon
function delayBeaconProcessor(segmentAdaptor, utils){
  //1 min life span
  var beaconLifeSpan = 60000; //in milliseconds
  var delayBeacon = utils.checkLocalStorageAvailability() ? window.localStorage["moveAnalytics.beacons"] : false;

  if (delayBeacon) {
    delayBeacon = JSON.parse(delayBeacon);
    var now = new Date().getTime();
    var beaconStillAlive = now - delayBeacon.ts <= beaconLifeSpan;
    if (beaconStillAlive){
      segmentAdaptor.trackEvent(delayBeacon.evt, delayBeacon.props, delayBeacon.integrations)
    }
    if (window.localStorage["moveAnalytics.beacons"]) {
        delete window.localStorage["moveAnalytics.beacons"];
    }
  }
}

module.exports = delayBeaconProcessor;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function wrapMoveAnalyticsQueue(MOVEAnalyticsQueue, queueProcessor) {
  if (typeof MOVEAnalyticsQueue !== 'undefined' && MOVEAnalyticsQueue !== null){
    while (MOVEAnalyticsQueue.length > 0) {
      queueProcessor(MOVEAnalyticsQueue.shift());
    }
  }
}
module.exports = wrapMoveAnalyticsQueue;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(segmentWriteKey) {
  //This map holds the constant strings for the method names and the properties objects.
  var segmentConsts = {
    TRACK: "track",
    PAGE: "page"
  };

  var isSegmentInitialized = false;

  // Segment.io initialization
  function initSegment(key){
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
      if (key !== null && typeof key !== "undefined"){
        analytics.load(key);
      } else {
        analytics.load(segmentWriteKey);
      }
      analytics.debug(false);
    }}();

    isSegmentInitialized = true;
  }

  // Check whether Segment is initialized before making any Segment API call
  function checkSegmentInitialized() {
    if (!isSegmentInitialized) {
      initSegment();
    }
  }

  function buildSegmentIntegrations(ary){
    var retValue = null;
    if (ary !== null && ary.length > 0){
      retValue = {
          All: false
        };

      for (var i = 0; i < ary.length; i++) {
        retValue[ary[i]] = true;
      }
    }
    return retValue;
  }

  function buildSegmentContext(props){
    var scObj = {};
    var pageObj = {};
    //if (props.hasOwnProperty("adobeS_vi") && props["adobeS_vi"] != null){
    //  retValue["visitorId"] = props["adobeS_vi"].replace("[CS]v1|", "").replace("[CE]", "");
    //}
    if (props.hasOwnProperty("adobeMcid") && props["adobeMcid"] != null){
      scObj["marketingCloudVisitorId"] = scObj["visitorId"] = props["adobeMcid"];
    }
    //Key custVisitorID can overwrite any visitor ID
    if (props.hasOwnProperty("custVisitorID") && props["custVisitorID"] != null){
      scObj["visitorId"] = props["custVisitorID"];
    }


    if (props.hasOwnProperty("url") && props["url"] != null){
      pageObj["url"] = props["url"];
    }
    if (props.hasOwnProperty("path") && props["path"] != null){
      pageObj["path"] = props["path"];
    }
    if (props.hasOwnProperty("search") && props["search"] != null){
      pageObj["search"] = props["search"];
    }
    if (props.hasOwnProperty("title") && props["title"] != null){
      pageObj["title"] = props["title"];
    }

    return {
      "Adobe Analytics": scObj,
      "page": pageObj
    };
  }

  //Translates integrations array into Segment specific integration object
  // TODO: check with Mabel about default return
  function convertToSegmentOptions(ary, props) {
    var retValue = {};
    var integrations = buildSegmentIntegrations(ary);
    if (integrations != null){
      retValue.integrations = integrations;
    }
    //Add SiteCatalyst Context Visitor ID and pageUrl
    retValue.context = buildSegmentContext(props);
    return retValue;
  }

  //Translates MOVEAnalytics tracking calls to Segment API
  function callSegment(trackType, data, integrations, callback) {
    var defaultedArgs = [];

    switch (trackType) {
      //analytics.page([category], [name], [properties], [options], [callback]);
      case segmentConsts.PAGE:
        defaultedArgs[0] = "unknown"; //cat
        defaultedArgs[1] = "unknown"; //name

        if (data["siteSection"]) {
          defaultedArgs[0] = data["siteSection"];
        }

        if (data["pageName"]) {
          defaultedArgs[1] = data["pageName"];
        }

        break;
      default:
        //analytics.track('event name', [props, options, callback])
        defaultedArgs[0] = data["event"];
        break;
    }

    try {
      //Generic call: analytics.Method(REQ1, [REQ2], properties, options, callback)
      //SEND page
      if (defaultedArgs.length == 2) {
        analytics.ready(function() {
          analytics[trackType](defaultedArgs[0], defaultedArgs[1], data, integrations, callback);
        });
      }

      //SEND track, alias, identify
      else {
        analytics.ready(function() {
          analytics[trackType](defaultedArgs[0], data, integrations, callback);
        });
      }

    } catch (theException) {
      throw "Error on callSegment: " + theException.message;
    }
  }

  return {
    initializeSegment: function(key) {
      if (key === null || typeof key === "undefined"){
        checkSegmentInitialized();
      }else{
        if (!isSegmentInitialized) {
          initSegment(key);
        }
      }
    },

    getIsSegmentInitialized: function() {
      return isSegmentInitialized;
    },

    trackEvent: function (event, properties, integrations, callback) {
      checkSegmentInitialized();
      properties.event = event;
      callSegment(
        segmentConsts.TRACK,
        properties,
        convertToSegmentOptions(integrations, properties),
        callback
      );
    },

    trackPage: function (pageName, properties, integrations, callback) {
      checkSegmentInitialized();
      properties.pageName = pageName;
      callSegment(
        segmentConsts.PAGE,
        properties,
        convertToSegmentOptions(integrations, properties),
        callback
      );
    },

    debug: function(enable){
      checkSegmentInitialized();
      if (enable){
        analytics.debug();
      } else {
        analytics.debug(false);
      }
    }
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(window, document) {
  var debug = false;
  var messages = [];
  var currPageName = "";
  var currPageUrl = "";
  var currPagePath = "";
  var currPageSearch = "";
  var currPageTitle = "";

  function log(msg){
    if (debug) {
      if (typeof console === "undefined" || typeof console.log === "undefined") {
        console = {};
        console.log = function() {};
      }
      console.log(msg);
      messages.push(msg);
    }
  }

  return {
    getDebugState: function() {
      return debug;
    },

    setDebugState: function(bool) {
      debug = bool;
    },

    log: function(message) {
      debug = true;
      log(message);
    },

    getMessages: function() {
      return messages;
    },

    setCurrentPage: function (page){
      currPageName = page;
      currPageUrl = window.location.href;
      currPagePath = window.location.pathname;
      currPageSearch = window.location.search;
      currPageTitle = document.title;
    },

    //Retrieve sampling size for given vendor
    getSamplingPercentage: function(integration, MOVEConfig) {
      MOVEConfig = MOVEConfig || {};
      var segmentPercentage = 100;

      if (typeof MOVEConfig.sampling !== 'undefined' && MOVEConfig.sampling !== null){
        if (MOVEConfig.sampling.hasOwnProperty('segment')) {
          segmentPercentage = MOVEConfig.sampling.segment;
        }

        if (MOVEConfig.sampling.hasOwnProperty(integration)) {
          if (MOVEConfig.sampling[integration] <= segmentPercentage){
            return MOVEConfig.sampling[integration];
          }
        }
      }

      return segmentPercentage;
    },

    //Process sampling
    //Check whether vendor qualifies to receive event
    qualifiedAfterSampling: function(integration, MOVEConfig) {
      var samplingPercentage = this.getSamplingPercentage(integration, MOVEConfig);

      if (samplingPercentage != 100) {
        var visitorID = this.getVisitorID(MOVEConfig);
        if (visitorID != null){
          var visitorIDEndWith = parseInt(visitorID.substring(visitorID.length - 2, visitorID.length));

          return (visitorIDEndWith <= samplingPercentage);
        } else {
          return false; //Return false when visitor ID not found.
        }
      }

      return true;
    },

    //Retrieve Adobe Marketing Cloud Visitor ID
    //Realtor uses Adobe Marketing Cloud ID as visitor ID as of Feb 2017
    getVisitorID: function(MOVEConfig) {
      try {
        if (typeof window._satellite !== 'undefined') {
          return window._satellite.getVisitorId().getMarketingCloudVisitorID();
        }

        if (typeof window.Visitor !== 'undefined') {
          return window.Visitor
            .getInstance(MOVEConfig.adobeOrgID)
            .getMarketingCloudVisitorID();
        }
        return null;
      } catch (e) {
        return null;
      }
    },

    //Take integrations from tracking APIs
    //Feed integrations through the sampling process
    //Return a list of integrations that will recieve event
    // TODO: Check with Mabel and Segment docs for defaults
    processFiltersOnIntegration: function(integrations, MOVEConfig) {
      if (integrations === undefined || integrations === null) {
        return [];
      }

      if (!(integrations instanceof Array)) {
        console.error('Expected integrations to be an array.');
        return [];
      }

      return integrations.filter(function(integration) {
        return this.qualifiedAfterSampling(integration, MOVEConfig);
      }, this);
    },

    //Returns the first available/valid object from array
    //Return null when not found
    getFirstAvailable: function(ary) {
      var retValue = null,
        len = ary.length,
        i = 0;

      while (!retValue && i < len) {
        if (typeof ary[i] !== 'undefined' && ary[i] !== null) {
          retValue = ary[i];
        }

        i = i + 1;
      }

      return retValue;
    },

    //Retrieve Adobe DTM data element by any given key
    //Return null when not found
    getDataElement: function(key) {
      if (typeof window._satellite !== 'undefined') {
        try {
          return window._satellite.getVar(key);
        } catch (ex) {
          log(ex.message);
        }
      } else {
        return null;
      }
    },

    //Retrieve value of any given URL query string param
    //Return null when not found
    getQueryParam: function(key) {
      try {
        if (key === null || typeof key === "undefined") return null;

        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx control chars

        var allQueries = document.location.search;
        var match = allQueries.match(new RegExp("[?&]" + key.toLowerCase() + "=([^&]+)(&|$)", "i"));

        if (match && match[1] != null) {
          return decodeURIComponent(match[1].replace(/\+/gi, " "));
        }

        return null;
      } catch (ex) {
        log(ex.message);
      }
    },

    //Retrieve value of any given cookie name
    //Return null when not found
    getCookie: function(key) {
      try {
        if (key === null || typeof key === "undefined") {
          return null;
        }

        var i, x, y, cookies = document.cookie.split(";");

        for (i = 0, len = cookies.length; i < len; i++) {
          x = cookies[i].substr(0, cookies[i].indexOf("="));
          y = cookies[i].substr(cookies[i].indexOf("=") + 1);
          x = x.replace(/^\s+|\s+$/g, "");

          if (x == key) {
            return (y === null || typeof y === "undefined" ? null : unescape(y));
          }
        }

        return null;
      } catch (ex) {
        log(ex.message);
      }
    },

    getGlobalVariables: function(additionalProperties, isPageView) {
      if (isPageView == null) isPageView = true;
      additionalProperties = additionalProperties || {};
      beaconParams = {};

      //Page Information
      beaconParams["protocol"] = window.location.protocol;
      beaconParams["hostName"] = window.location.hostname;
      beaconParams["pageUrl"] = window.location.href;
      beaconParams["pagePath"] = window.location.pathname;
      beaconParams["queryParam"] = window.location.search;
      beaconParams["pageTitle"] = document.title;
      beaconParams["pageName"] = currPageName;
      beaconParams["url"] = currPageUrl;
      beaconParams["path"] = currPagePath;
      beaconParams["search"] = currPageSearch;
      beaconParams["title"] = currPageTitle;

      //Identifications
      beaconParams["adobeVisitorId"] = beaconParams["adobeMcid"] = this.getVisitorID();
      beaconParams["adobeS_vi"] = this.getCookie("s_vi");
      beaconParams["edwVisitorId"] = this.getCookie("__vst");
      beaconParams["edwSessionId"] = this.getCookie("__ssn"); //TO DO
      beaconParams["userId"] = this.getDataElement("userID");

      //OS & browser
      beaconParams["locale"] = this.getFirstAvailable([
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        navigator.systemLanguage
      ]);

      beaconParams["os"] = navigator.platform;
      beaconParams["browserName"] = navigator.appVersion;
      beaconParams["browserAcceptLanguage"] = navigator.language;

      beaconParams["browserHeight"] = this.getFirstAvailable([
        window.innerHeight,
        document.documentElement.clientHeight,
        document.body.clientHeight
      ]);

      beaconParams["browserWidth"] = this.getFirstAvailable([
        window.innerWidth,
        document.documentElement.clientWidth,
        document.body.clientWidth
      ]);

      beaconParams["browserCookieEnabled"] = navigator.cookieEnabled;

      // for SiteCatalyst
      beaconParams["browserCookieEnabledYn"] = navigator.cookieEnabled ? "Y": "N";

      beaconParams["browserEncoding"] = this.getFirstAvailable([
        document.characterSet,
        document.charset
      ]);

      beaconParams["userAgent"] = navigator.userAgent;
      beaconParams["referrer"] = document.referrer;
      beaconParams["browserJavaEnabled"] = navigator.javaEnabled();
      beaconParams["screenColorDepth"] = screen.colorDepth;
      beaconParams["screenHeight"] = screen.height;
      beaconParams["screenWidth"] = screen.width;
      beaconParams["screenResolution"] = screen.width + "x" + screen.height;

      beaconParams["application"] = this.getDataElement("site");
      beaconParams["appVersion"] = this.getDataElement("appVersion");

      beaconParams["pageId"] = this.getDataElement("pageID");
      //beaconParams["parityId"] = this.getDataElement("parityId");
      //Capture on page view only
      if (isPageView){
        //Set a flag to ensure cid is tracked once per page load only
        if (typeof moveAnalyticsTrackCID === "undefined"){
          beaconParams["campaign"] = this.getQueryParam("cid");
          moveAnalyticsTrackCID = false;
        }

      }
      beaconParams["userTesting"] = this.getDataElement("userTesting");
      beaconParams["siteSection"] = beaconParams["channel"] = this.getDataElement("siteSection");

      for (var key in additionalProperties) {
        beaconParams[key] = additionalProperties[key];
      }

      return beaconParams;
    },

    checkLocalStorageAvailability: function(){
      var test = 'test';
      try {
          window.localStorage.setItem(test, test);
          window.localStorage.removeItem(test);
          return true;
      } catch(e) {
          return false;
      }
    }
  };
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var MOVEAnalytics = __webpack_require__(1);
var constants = __webpack_require__(0);
var utils = __webpack_require__(6)(window, document);
var SegmentAdaptor = __webpack_require__(5);
var wrapMoveAnalyticsQueue = __webpack_require__(4);
var createQueueProcessor = __webpack_require__(2);
var delayBeaconProcessor = __webpack_require__(3);

var segmentWriteKey = _satellite.settings.isStaging?constants.qaSegmentWriteKey:constants.prodSegmentWriteKey;
var segmentAdaptor = SegmentAdaptor(segmentWriteKey);

window._moveAnalyticsQueue = (typeof window.MOVEAnalytics !== 'undefined')
  ? window.MOVEAnalytics.q
  : [];

window.MOVEAnalytics = MOVEAnalytics(segmentAdaptor, utils);

//Initilize Segment as soon as possible
//Note: User can no longer alter segment write key in implementation and init shouldn't be called in implementation
window.MOVEAnalytics.init({segmentWriteKey:segmentWriteKey});

wrapMoveAnalyticsQueue(
  window._moveAnalyticsQueue,
  createQueueProcessor(window.MOVEAnalytics)
);

/**
 * Workaround for Renovate: Global Search Box
 * rule in Safari
 */
function trackGlobalSearch() {
   //event37 search
  var dataElementNames = [
    'pageType', 'searchboxName', 'searchBoxType',
    'searchFeature', 'searchMatch', 'searchQuery',
    'searchUserEnteredText', 'searchRank'
  ];

  var data = {};

  for (var i = 0; i < dataElementNames.length; i++) {
    data[dataElementNames[i]] = _satellite.getVar(dataElementNames[i]);
  }

  var linkName = data.pageType + ':searchBox:' +
    data.searchboxName + '-search';

  var searchBox = data.searchboxName + ':' +
    data.searchFeature + ':' +
    data.searchMatch;

  var props = _satellite.getVar('globalVariables');
  props.linkName = linkName;
  props.searchType = data.searchBoxType;
  props.searchBox = searchBox;
  props.searchQuery = data.searchQuery;
  props.pageType = data.pageType,
  props.searchUserEnteredText = data.searchUserEnteredText;
  props.searchBoxSelectionRank = data.searchRank;
  props.ruleName = 'Renovate: Global Search Box';
  window.MOVEAnalytics.trackEvent('search', props, null, true);
}

function includes(string, value) {
  return string.indexOf(value) > -1;
}

function isSafari(userAgentString) {
  return !includes(userAgentString, 'Chrome') &&
    !includes(userAgentString, 'Edge') &&
    includes(userAgentString, 'Safari');
}

function patchSatelliteTrack() {
  var original = window._satellite.track;

  window._satellite.track = function() {
    if (arguments[0] === 'searchbox:Controller') {
      trackGlobalSearch();
    }

    original.apply(this, arguments);
  }
}

// Only patch _satellite.track if the browser is Safari.
try {
  if (isSafari(navigator.userAgent)) {
    patchSatelliteTrack();
  }
} catch(e) {

}

// END SAFARI WORKAROUND

delayBeaconProcessor(segmentAdaptor, utils);


/***/ })
/******/ ]);
});
