// index.js
const fs = require('fs');
const { promisify } = require('util');

const puppeteer = require('puppeteer');
const csv = require('csv');
const keyBy = require('lodash/keyBy');
const chunk = require('lodash/chunk');

const { delay, visitRealtorPage, searchProperty } = require('./nav');
const { parseProperty, parseRealtor } = require('./parsing');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const parse = promisify(csv.parse);
const stringify = promisify(csv.stringify);

async function loadCsv(filename) {
  const fileData = await readFile(`${filename}.csv`, 'utf8');
  const properties = await parse(fileData, { columns: true });
  return properties;
}

async function writeCsv(filename, rows) {
  const columns = [
    'address',
    'city',
    'state',
    'zip',
    'brokerage',
    'dateUpdated',
    'daysOnMarket',
    'latestEvent',
    'latestEventDate',
    'latestEventPrice',
    'latestEventPriceSqft',
    'latestEventSource',
    'phone',
    'realtor',
    'status',
  ];
  const fileData = await stringify(rows, { columns, header: true });
  await writeFile(`${filename}.csv`, fileData);
}

function getUnscraped(properties, scrapedProperties) {
  const addressMap = keyBy(scrapedProperties, ({ address, city, state, zip }) => {
    return `${address} ${city} ${state} ${zip}`;
  });

  const unscraped = properties.filter(({ address, city, state, zip }) => {
    return !(`${address} ${city} ${state} ${zip}` in addressMap);
  });
  return unscraped;
}

async function handleProperty(browser, property) {
  await delay((Math.floor(Math.random() * 10) + 3) * 1000);
  const html = await searchProperty(browser, property);
    const result = html && html.length ? parseProperty(html) : null;
    if (result === null) {
      return;
    }

    let phone = '';

    if (result.realtorLink && result.realtorLink.length > 1) {
      const realtorHtml = await visitRealtorPage(browser, result.realtorLink);
      const realtorResults = html && html.length ? parseRealtor(html) : null;

      // If we got a realtorLink, but no phone number, something probably went wrong.
      if (realtorResults === null) {
        return;
      }

      // Set phone var.
      phone = realtorResults.phone;
    }

    return { ...property, ...result, phone };
}

async function getProps() {
  // Load properties from csv.
  const properties = await loadCsv('properties');
  // Determine which ones have not been scraped.
  let alreadyScraped;
  try {
    alreadyScraped = await loadCsv('results');
  } catch(e) {
    alreadyScraped = [];
  }
  const unscraped = getUnscraped(properties, alreadyScraped);
  return unscraped;
}

(async () => {
  // Initial batch.
  let unscraped = getProps();

  // Until we run out of properties.
  while(unscraped && unscraped.length) {
    console.log(`${unscraped.length} properties left to scrape.`);

    // Do in batches of 3 at a time.
    const props = chunk(unscraped, 3);
    const browser = await puppeteer.launch({ headless: false });

    // Main loop.
    for (let propArr of props) {
      const newProps = await Promise.all(propArr.map(async (item) => {
        return await handleProperty(browser, item);
      }));
  
      // Write results for each batch so we never lose data.
      await writeCsv('results', alreadyScraped.concat(newProps.filter(i => i)));
    }

    // Reset.
    unscraped = getProps();
    await browser.close();
  }

})();