const puppeteer = require('puppeteer');

const takeScreenshot = async (url) => {
  if (!url) {
    console.log("Please provide a URL.");
    return;
  }

  const browser = await puppeteer.launch(); // headless by default
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle2' }); // wait till page is fully loaded
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  console.log(`Screenshot saved as screenshot.png for URL: ${url}`);
  await browser.close();
};

const userUrl = process.argv[2]; // take URL from command-line argument
takeScreenshot(userUrl);
