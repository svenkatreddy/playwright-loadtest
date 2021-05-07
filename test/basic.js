const playwright = require('playwright');

(async () => {
  for (const browserType of ['firefox']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://whatsmyuseragent.org/');
    await page.screenshot({ path: `example-${browserType}.png` });
    console.log('Hey test is done');
    await browser.close();
  }
})();