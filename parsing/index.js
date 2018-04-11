// parsing/index
const cheerio = require('cheerio');

function parseProperty(html) {
    const $ = cheerio.load(html);

    // Basic details.
    const status = $('.ldp-property-status > .label > span').first().text().trim();
    const updated = $(".list-default > .col-sm-6:contains(Date updated)").text().split(':');
    const dateUpdated = updated && updated.length > 1 ? updated[1].trim() : null;

    // Property history.
    const latestEventDate = $('.listing-section-history #ldp-history-price .table > tbody tr:nth-child(1) td:nth-child(1)').first().text().trim();
    const latestEvent = $('.listing-section-history #ldp-history-price .table > tbody tr:nth-child(1) td:nth-child(2)').first().text().trim();
    const latestEventPrice = $('.listing-section-history #ldp-history-price .table > tbody tr:nth-child(1) td:nth-child(3)').first().text().trim();
    const latestEventPriceSqft = $('.listing-section-history #ldp-history-price .table > tbody tr:nth-child(1) td:nth-child(4)').first().text().trim();
    const latestEventSource = $('.listing-section-history #ldp-history-price .table > tbody tr:nth-child(1) td:nth-child(5)').first().text().trim();

    // Days on market.
    const daysOnMarket = $('.data-tile-box:has(span:contains("Days on market")) .summary-datapoint').first().text().trim();

    // Realtor info.
    let realtor = $('.business-card-content a[data-label="additional-agent-name"]').first().text().trim();
    let brokerage = $('span[data-label="branding-office-name"]').first().text().trim();
    let realtorLink = null;
    let phone = $('span[data-label="additional-office-phone"] a').first().text().trim();

    // Second handler for realtor, in case first is missing.
    if (!(realtor && realtor.length)) {
        realtor = $('.business-card-content:has(li:contains("Seller represented by")) > ul > li:nth-child(2) > a[data-label="additional-seller-agent-name"]').first().text().trim();
        brokerage = $('.business-card-content:has(li:contains("Seller represented by")) > ul > li:nth-child(2) > span[data-label="additional-seller-broker-name"]').first().text().trim();
        brokerage = brokerage.includes('\n') ? brokerage.split('\n')[1].trim() : brokerage;
        realtorLink = $('.business-card-content:has(li:contains("Seller represented by")) > ul > li:nth-child(2) > a').attr('href') || '';
    }
    
    return {
        brokerage,
        dateUpdated,
        daysOnMarket,
        latestEvent,
        latestEventDate,
        latestEventPrice,
        latestEventPriceSqft,
        latestEventSource,
        phone,
        realtor,
        realtorLink,
        status,
    };
}

function parseRealtor(html) {
    const $ = cheerio.load(html);
    const phoneRe = /(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/;
    const phoneHtml = $('.sticky-bar-content .container .sticky-agent-info').html();
    const phoneMatches = phoneRe.exec(phoneHtml);
    const phone = phoneMatches && phoneMatches.length ? phoneMatches[0] : '';
    return { phone };
}

module.exports = { parseProperty, parseRealtor };