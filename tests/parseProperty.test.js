/* eslint-env jest */
// tests/parseFilings.test.js
const fs = require('fs');
const path = require('path');

const { parseProperty, parseRealtor } = require('../parsing');

describe('test parseProperty', () => {
    it('should be off market', () => {
      const htmlPath = path.join(__dirname, 'resources', 'property.html');
      const html = fs.readFileSync(htmlPath);
      const propertyDetails = parseProperty(html);

      expect(propertyDetails).toEqual({
        brokerage: "",
        dateUpdated: "01/17/2018",
        daysOnMarket: "",
        latestEvent: "Estimated",
        latestEventDate: "Today",
        latestEventPrice: "$120,000",
        latestEventPriceSqft: "—",
        latestEventSource: "",
        realtor: "",
        realtorLink: "",
        status: 'Off Market',
      });
    });
});

describe('test parseProperty', () => {
    it('should be just sold', () => {
      const htmlPath = path.join(__dirname, 'resources', 'sold.html');
      const html = fs.readFileSync(htmlPath);
      const propertyDetails = parseProperty(html);

      expect(propertyDetails).toEqual({
        brokerage: "Total Real Estate Services, LLC",
        dateUpdated: "01/17/2018",
        daysOnMarket: "57",
        latestEvent: "Sold",
        latestEventDate: "09/08/2017",
        latestEventPrice: "-",
        latestEventPriceSqft: "—",
        latestEventSource: "Houston",
        realtor: "Diane Hermis Schrakamp",
        realtorLink: "/realestateagents/Diane-Hermis-Schrakamp_Houston_TX_1414591_796744491",
        status: 'Just sold',
      });
    });
});

describe('test parseProperty', () => {
    it('all price history fields should be blank', () => {
      const htmlPath = path.join(__dirname, 'resources', 'noHistory.html');
      const html = fs.readFileSync(htmlPath);
      const propertyDetails = parseProperty(html);

      expect(propertyDetails).toEqual({
        brokerage: "",
        dateUpdated: "01/31/2018",
        daysOnMarket: "",
        latestEvent: "",
        latestEventDate: "",
        latestEventPrice: "",
        latestEventPriceSqft: "",
        latestEventSource: "",
        realtor: "",
        realtorLink: "",
        status: "Off Market",
      });
    });
});

describe('test parseRealtor', () => {
    it('should get realtor info', () => {
      const htmlPath = path.join(__dirname, 'resources', 'realtorPage.html');
      const html = fs.readFileSync(htmlPath);
      const realtorDetails = parseRealtor(html);

      expect(realtorDetails).toEqual({
        phone: "(832) 620-6304",
      });
    });
});