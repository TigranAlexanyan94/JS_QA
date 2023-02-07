// @ts-check
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('./playwright-dev-page');

test('Test for website buy.am header', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.clickWishList();
  await playwrightDev.clickChart();
  await playwrightDev.clickSettings()
  // await playwrightDev.gotoSuperMarket()
});

