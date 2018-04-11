// index.js
const fs = require('fs');
const { promisify } = require('util');

const puppeteer = require('puppeteer');
const csv = require('csv');
const keyBy = require('lodash/keyBy');
const chunk = require('lodash/chunk');
const shuffle = require('lodash/shuffle');

const { delay, visitRealtorPage, searchProperty } = require('./nav');
const { parseProperty, parseRealtor } = require('./parsing');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const parse = promisify(csv.parse);
const stringify = promisify(csv.stringify);
const request = promisify(require('request'));

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
      return property;
    }

    // if (result.realtorLink && result.realtorLink.length > 1) {
    //   const realtorHtml = await visitRealtorPage(browser, result.realtorLink);
    //   const realtorResults = html && html.length ? parseRealtor(html) : null;

    //   // If we got a realtorLink, but no phone number, something probably went wrong.
    //   if (realtorResults === null) {
    //     return property;
    //   }

    //   // Set phone var.
    //   result.phone = realtorResults.phone;
    // }

    return { ...property, ...result };
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
  return { unscraped, alreadyScraped };
}

async function getProxies() {
  const proxies = await loadCsv('proxies');
  return proxies;
}

async function getProxy() {
  const url = 'http://venus.proxyrotator.com/?';
  const apiKey = 'apiKey=GqMCsm65Kr7hv2a9HBwRQWcNb8VeZYUF';
  const args = '&connectionType=Residential&country=US';
  const { body } = await request(`${url}${apiKey}${args}`);
  return JSON.parse(body);
}

(async () => {
  // Initial batch.
  let { unscraped, alreadyScraped } = await getProps();

  // Until we run out of properties.
  while(unscraped && unscraped.length) {
    console.log(`SCRAPER: ${unscraped.length} properties left.`);

    // Load proxies
    const proxies = await getProxies();
    // Shuffle proxies;
    shuffle(proxies);

    // Do in batches of 5 browsers at a time.
    const chunks = chunk(unscraped, 2);
    const browserChunks = chunk(chunks, 3);
    const firstChunk = browserChunks[0];

    const propsToWrite = await Promise.all(firstChunk.map(async (props, idx) => {
      // // Each browser gets a proxy.
      // const { proxy } = await getProxy();
      // console.log(`proxy: ${proxy}`);
          // Use random proxy from list.
      const proxy = proxies[Math.floor(Math.random()*proxies.length)].proxy;

      const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome',
        // args: [
        //   `--proxy-server=${proxy}`,
        // ],
      });
      const newProps = await Promise.all(props.map(async (item) => {
        return await handleProperty(browser, item);
      }));

      // Close browser, don't keep using same proxy.
      await browser.close();

      return newProps;
    }));

    let newArr = [].concat.apply([], propsToWrite);
    // Write results for each batch so we never lose data.

    console.log(`SCRAPER: writing ${newArr.length} properties.`);
    await writeCsv('results', alreadyScraped.concat(newArr));
    // Reset.
    update = await getProps();
    unscraped = update.unscraped;
    alreadyScraped = update.alreadyScraped;

    await delay(20000);
  }

})();