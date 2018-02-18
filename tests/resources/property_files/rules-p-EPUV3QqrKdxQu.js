/*
 Quantcast measurement tag
 Copyright (c) 2008-2018, Quantcast Corp.
*/
(function(b,e,f){var h=function(a){var b=f.createElement("a");b.href=a;return b},k=function(a){return a.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g,"")},l=function(a,b){if(!b)return b;var c,d;c="keywords"===a.toLowerCase()||0===a.toLowerCase().indexOf("qc:")?!0:!1;d=0===a.toLowerCase().indexOf("qc:")?!1:!0;d&&(b=b.replace(/\.+/g," "));if(c){d=b.split(",");for(c=0;c<d.length;c++)d[c]=k(d[c]);return d}return k(b.replace(/,+/g," "))},m=function(b,a,c){return b?"nc"===b?!a||!c||0>a.indexOf(c):"eq"===
b?a===c:"sw"===b?0===a.indexOf(c):"ew"===b?(b=a.length-c.length,a=a.lastIndexOf(c,b),-1!==a&&a===b):"c"===b?0<=a.indexOf(c):!1:!1},a=function(a,b,c){var d;d=e.top===e.self?f.location.href:h(f.referrer).href;m(b,d,c)?a(d):a(!1)},c=function(a,b,c){b=document.getElementsByTagName("meta");for(var d,f,e=[],g=0;g<b.length;g++)d=b[g],f=d.getAttribute("name")||d.getAttribute("property"),f==c&&(e=e.concat(l(c,d.getAttribute("content"))));0<e.length?a(e):a(!1)},d=function(a,b){var c=[],d;if("array"==={}.toString.call(b).match(/\s([a-zA-Z]+)/)[1].toLowerCase()){for(d=
0;d<b.length;d++)c.push(a+"."+b[d]);return{labels:c.join(",")}}return{labels:a+"."+b}},a=["rules",[b,null,[[d,"HarperCollins Publishers.HarperCollins.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","harpercollins.com"]]],[b,null,[[d,"HarperCollins Publishers.HarperCollins.Title"]],[[c,"exactmatch","og:title"],[a,"c","harpercollins.com"]]],[b,null,[[d,"HarperCollins Publishers.HarperCollins.Author"]],[[c,"exactmatch","author"],[a,"c","harpercollins.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,
"exactmatch","og:type"],[a,"c","nypost.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","talksport.co.uk"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:tag"],[a,"c","dreamteamfc.com/c"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","dreamteamfc.com/c"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","dreamteamfc.com/c"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","dreamteamfc.com/c"]]],
[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:tag"],[a,"c","talksport.co.uk"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","talksport.co.uk"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","talksport.co.uk"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","prism.section"],[a,"c","foxnews.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","foxnews.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","classification-isa"],
[a,"c","foxnews.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","foxnews.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","thescottishsun.co.uk"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","thescottishsun.co.uk"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:section"],[a,"c","biblegateway.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","biblegateway.com"]]],[b,null,[[d,
"News IQ.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","biblegateway.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","thescottishsun.co.uk"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","biblegateway.com"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:section"],[a,"c","organized-home.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","organized-home.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch",
"article:tag"],[a,"c","organized-home.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","organized-home.com"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:section"],[a,"c","gardenista.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","gardenista.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","gardenista.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","gardenista.com"]]],
[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:section"],[a,"c","remodelista.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","remodelista.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","remodelista.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","remodelista.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","Keywords"],[a,"c","move.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch",
"og:type"],[a,"c","thesun.ie"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:tag"],[a,"c","thesun.ie"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article:section"],[a,"c","realtor.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","realtor.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","thesun.ie"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","realtor.com"]]],[b,null,[[d,"News IQ.Title"]],
[[c,"exactmatch","twitter:title"],[a,"c","realtor.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","thesun.ie"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","page.content.type"],[a,"c","mansionglobal.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","mansionglobal.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","mansionglobal.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","thesun.co.uk"]]],
[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"eq","thesun.co.uk"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article.section"],[a,"c","marketwatch.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","marketwatch.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","news_keywords"],[a,"c","marketwatch.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","marketwatch.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch",
"og:title"],[a,"c","thesun.co.uk"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","thetimes.co.uk"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article.section"],[a,"c","barrons.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","page.content.type"],[a,"c","barrons.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","barrons.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","barrons.com"]]],[b,null,[[d,
"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","thetimes.co.uk"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","article.section"],[a,"c","wsj.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","page.content.type"],[a,"c","wsj.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","wsj.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","wsj.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","decider.com"]]],
[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","news_keywords"],[a,"c","decider.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","decider.com"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","nypost-section"],[a,"c","nypost.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","news_keywords"],[a,"c","nypost.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","nypost.com"]]],[b,null,[[d,"News IQ.Category"]],[[c,"exactmatch","nypost-section"],
[a,"c","pagesix.com"]]],[b,null,[[d,"News IQ.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","pagesix.com"]]],[b,null,[[d,"News IQ.Keywords"]],[[c,"exactmatch","news_keywords"],[a,"c","pagesix.com"]]],[b,null,[[d,"News IQ.Title"]],[[c,"exactmatch","og:title"],[a,"c","pagesix.com"]]],[b,null,[[d,"News Corp UK.Dream Team FC.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","dreamteamfc.com/c"]]],[b,null,[[d,"News Corp UK.Dream Team FC.Category"]],[[c,"exactmatch","article:tag"],[a,"c","dreamteamfc.com/c"]]],
[b,null,[[d,"News Corp UK.Dream Team FC.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","dreamteamfc.com/c"]]],[b,null,[[d,"News Corp UK.Dream Team FC.Title"]],[[c,"exactmatch","og:title"],[a,"c","dreamteamfc.com/c"]]],[b,null,[[d,"News Corp UK.talkSPORT.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","talksport.co.uk"]]],[b,null,[[d,"News Corp UK.talkSPORT.Category"]],[[c,"exactmatch","article:tag"],[a,"c","talksport.co.uk"]]],[b,null,[[d,"News Corp UK.talkSPORT.Keywords"]],[[c,"exactmatch","keywords"],
[a,"c","talksport.co.uk"]]],[b,null,[[d,"News Corp UK.talkSPORT.Title"]],[[c,"exactmatch","og:title"],[a,"c","talksport.co.uk"]]],[b,null,[[d,"News Corp UK.The Scottish Sun.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","thescottishsun.co.uk"]]],[b,null,[[d,"News Corp UK.The Scottish Sun.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","thescottishsun.co.uk"]]],[b,null,[[d,"News Corp UK.The Scottish Sun.Title"]],[[c,"exactmatch","og:title"],[a,"c","thescottishsun.co.uk"]]],[b,null,[[d,"News Corp UK.The Sun Ireland.Content Type"]],
[[c,"exactmatch","og:type"],[a,"c","thesun.ie"]]],[b,null,[[d,"News Corp UK.The Sun Ireland.Category"]],[[c,"exactmatch","article:tag"],[a,"c","thesun.ie"]]],[b,null,[[d,"News Corp UK.The Sun Ireland.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","thesun.ie"]]],[b,null,[[d,"News Corp UK.The Sun Ireland.Title"]],[[c,"exactmatch","og:title"],[a,"c","thesun.ie"]]],[b,null,[[d,"News Corp UK.The Sun UK.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","thesun.co.uk"]]],[b,null,[[d,"News Corp UK.The Sun UK.Keywords"]],
[[c,"exactmatch","keywords"],[a,"eq","thesun.co.uk"]]],[b,null,[[d,"News Corp UK.The Sun UK.Title"]],[[c,"exactmatch","og:title"],[a,"c","thesun.co.uk"]]],[b,null,[[d,"News Corp UK.The Times UK.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","thetimes.co.uk"]]],[b,null,[[d,"News Corp UK.The Times UK.Title"]],[[c,"exactmatch","og:title"],[a,"c","thetimes.co.uk"]]],[b,null,[[d,"Dow Jones.MarketWatch.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","marketwatch.com"]]],[b,null,[[d,"21st Century Fox.FoxNews.Category"]],
[[c,"exactmatch","prism.section"],[a,"c","foxnews.com"]]],[b,null,[[d,"21st Century Fox.FoxNews.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","foxnews.com"]]],[b,null,[[d,"21st Century Fox.FoxNews.Keywords"]],[[c,"exactmatch","classification-isa"],[a,"c","foxnews.com"]]],[b,null,[[d,"21st Century Fox.FoxNews.Title"]],[[c,"exactmatch","og:title"],[a,"c","foxnews.com"]]],[b,null,[[d,"HarperCollins Publishers.BibleGateway.Category"]],[[c,"exactmatch","article:section"],[a,"c","biblegateway.com"]]],
[b,null,[[d,"HarperCollins Publishers.BibleGateway.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","biblegateway.com"]]],[b,null,[[d,"HarperCollins Publishers.BibleGateway.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","biblegateway.com"]]],[b,null,[[d,"HarperCollins Publishers.BibleGateway.Title"]],[[c,"exactmatch","og:title"],[a,"c","biblegateway.com"]]],[b,null,[[d,"Realtor.Organized Home.Category"]],[[c,"exactmatch","article:section"],[a,"c","organized-home.com"]]],[b,null,[[d,"Realtor.Organized Home.Content Type"]],
[[c,"exactmatch","og:type"],[a,"c","organized-home.com"]]],[b,null,[[d,"Realtor.Organized Home.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","organized-home.com"]]],[b,null,[[d,"Realtor.Organized Home.Title"]],[[c,"exactmatch","og:title"],[a,"c","organized-home.com"]]],[b,null,[[d,"Realtor.Gardenista.Category"]],[[c,"exactmatch","article:section"],[a,"c","gardenista.com"]]],[b,null,[[d,"Realtor.Gardenista.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","gardenista.com"]]],[b,null,[[d,"Realtor.Gardenista.Keywords"]],
[[c,"exactmatch","article:tag"],[a,"c","gardenista.com"]]],[b,null,[[d,"Realtor.Gardenista.Title"]],[[c,"exactmatch","og:title"],[a,"c","gardenista.com"]]],[b,null,[[d,"Realtor.Remodelista.Category"]],[[c,"exactmatch","article:section"],[a,"c","remodelista.com"]]],[b,null,[[d,"Realtor.Remodelista.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","remodelista.com"]]],[b,null,[[d,"Realtor.Remodelista.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","remodelista.com"]]],[b,null,[[d,"Realtor.Remodelista.Title"]],
[[c,"exactmatch","og:title"],[a,"c","remodelista.com"]]],[b,null,[[d,"Realtor.Move.Keywords"]],[[c,"exactmatch","Keywords"],[a,"c","move.com"]]],[b,null,[[d,"Realtor.Realtor.Category"]],[[c,"exactmatch","article:section"],[a,"c","realtor.com"]]],[b,null,[[d,"Realtor.Realtor.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","realtor.com"]]],[b,null,[[d,"Realtor.Realtor.Keywords"]],[[c,"exactmatch","article:tag"],[a,"c","realtor.com"]]],[b,null,[[d,"Realtor.Realtor.Title"]],[[c,"exactmatch","twitter:title"],
[a,"c","realtor.com"]]],[b,null,[[d,"Dow Jones.Mansion Global.Content Type"]],[[c,"exactmatch","page.content.type"],[a,"c","mansionglobal.com"]]],[b,null,[[d,"Dow Jones.Mansion Global.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","mansionglobal.com"]]],[b,null,[[d,"Dow Jones.Mansion Global.Title"]],[[c,"exactmatch","og:title"],[a,"c","mansionglobal.com"]]],[b,null,[[d,"Dow Jones.MarketWatch.Category"]],[[c,"exactmatch","article.section"],[a,"c","marketwatch.com"]]],[b,null,[[d,"Dow Jones.MarketWatch.Keywords"]],
[[c,"exactmatch","news_keywords"],[a,"c","marketwatch.com"]]],[b,null,[[d,"Dow Jones.MarketWatch.Title"]],[[c,"exactmatch","og:title"],[a,"c","marketwatch.com"]]],[b,null,[[d,"Dow Jones.Barrons.Category"]],[[c,"exactmatch","article.section"],[a,"c","barrons.com"]]],[b,null,[[d,"Dow Jones.Barrons.Content Type"]],[[c,"exactmatch","page.content.type"],[a,"c","barrons.com"]]],[b,null,[[d,"Dow Jones.Barrons.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","barrons.com"]]],[b,null,[[d,"Dow Jones.Barrons.Title"]],
[[c,"exactmatch","og:title"],[a,"c","barrons.com"]]],[b,null,[[d,"Dow Jones.The Wall Street Journal.Sub-Category"]],[[c,"exactmatch","article.type"],[a,"c","wsj.com"]]],[b,null,[[d,"Dow Jones.The Wall Street Journal.Category"]],[[c,"exactmatch","article.section"],[a,"c","wsj.com"]]],[b,null,[[d,"Dow Jones.The Wall Street Journal.Content Type"]],[[c,"exactmatch","page.content.type"],[a,"c","wsj.com"]]],[b,null,[[d,"Dow Jones.The Wall Street Journal.Keywords"]],[[c,"exactmatch","keywords"],[a,"c","wsj.com"]]],
[b,null,[[d,"Dow Jones.The Wall Street Journal.Title"]],[[c,"exactmatch","og:title"],[a,"c","wsj.com"]]],[b,null,[[d,"The New York Post Network.Decider.Title"]],[[c,"exactmatch","og:title"],[a,"c","decider.com"]]],[b,null,[[d,"The New York Post Network.Decider.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","decider.com"]]],[b,null,[[d,"The New York Post Network.Decider.Keywords"]],[[c,"exactmatch","news_keywords"],[a,"c","decider.com"]]],[b,null,[[d,"The New York Post Network.Page Six.Category"]],
[[c,"exactmatch","nypost-section"],[a,"c","pagesix.com"]]],[b,null,[[d,"The New York Post Network.Page Six.Content Type"]],[[c,"exactmatch","og:type"],[a,"c","pagesix.com"]]],[b,null,[[d,"The New York Post Network.Page Six.Keywords"]],[[c,"exactmatch","news_keywords"],[a,"c","pagesix.com"]]],[b,null,[[d,"The New York Post Network.Page Six.Title"]],[[c,"exactmatch","og:title"],[a,"c","pagesix.com"]]],[b,null,[[d,"The New York Post Network.New York Post.Type"]],[[c,"exactmatch","og:type"],[a,"c","nypost.com"]]],
[b,null,[[d,"The New York Post Network.New York Post.Title"]],[[c,"exactmatch","og:title"],[a,"c","nypost.com"]]],[b,null,[[d,"The New York Post Network.New York Post.Keywords"]],[[c,"exactmatch","news_keywords"],[a,"c","nypost.com"]]],[b,null,[[d,"The New York Post Network.New York Post.Category"]],[[c,"exactmatch","nypost-section"],[a,"c","nypost.com"]]]];__qc.apply(null,a);(function(a){var c=function(){return e.top===e.self?f.location.href:h(f.referrer).href},d=c();setInterval(function(){var e=
c();e!==d&&(d=e,__qc.apply(null,a),__qc("push",{qacct:b,event:"load"},!0))},2E3)})(a)})("p-EPUV3QqrKdxQu",window,document);