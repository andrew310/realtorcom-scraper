// nav/index

// SearchProperty opens new page, attempts to search for property
async function searchProperty(browser, { address, city, state, zip }) {
  // Open new page.
  const page = await browser.newPage();

  // Goto realtorcom
  try {
    await page.goto('https://www.realtor.com', { waitUntil: 'domcontentloaded', timeout: 5000 });
  } catch(e) {
    console.log('Error loading page...');
    await page.screenshot({ path: 'errors/landingPage.png'});
    return;
  }
  
  // Make sure searchbox is loaded.
  try {
    await page.waitForSelector('#searchBox', { timeout: 5000 });
  } catch(e) {
    console.log('#searchBox not found...');
    await page.screenshot({ path: 'errors/searchBox.png'});
    return;
  }

  // Focus on searchbox and type in address.
  try {
    await page.focus('#searchBox', { timeout: 5000 });
    await page.keyboard.type(`${address}, ${city}, ${state} ${zip}`);
    await page.click('.js-searchButton')
  } catch(e) {
    console.log('Error typing in address...');
    await page.screenshot({ path: 'errors/address.png'});
    return;
  }

  try {
    await page.waitForSelector('.ldp-key-fact-item', { timeout: 10000 });
  } catch(e) {
    console.log('Error loading listing page...');
    await page.screenshot({ path: 'errors/listingPage.png'});
    return
  }

  // If we make it here, the listing page loaded.
  const contents = await page.content();

  // Close page.
  await page.close();

  // Return HTML.
  return contents;
}

async function visitRealtorPage(browser, link) {
  const page = await browser.newPage();

  // Goto realtorcom/${link}
  try {
    await page.goto(`https://www.realtor.com${link}`, { waitUntil: 'domcontentloaded', timeout: 5000 });
  } catch(e) {
    console.log('Error loading realtor info page...');
    return;
  }

  try {
    await page.waitForSelector('.sticky-agent-info', { timeout: 5000 });
  } catch(e) {
    console.log('Error loading phone number...');
    return;
  }

  // If we made it here, phone html is visible.
  const contents = await page.content();

  // Close page.
  await page.close();

  // Return html.
  return contents;
}


function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

module.exports = { delay, searchProperty, visitRealtorPage };