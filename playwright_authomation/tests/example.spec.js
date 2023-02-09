// @ts-check
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('./playwright-dev-page');

test('Test for website buy.am header', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.clicklogoButton();
  await playwrightDev.getTelNumberText();
  await playwrightDev.getLogoInfoText();
  await playwrightDev.clickSearchCategorySelection();
  await playwrightDev.searchFieldText();
  await playwrightDev.clickSearchBtn();
  await playwrightDev.clickWishList();
  await playwrightDev.clickChart();
  await playwrightDev.clickAccount();
  // await playwrightDev.clickSettings();
  await playwrightDev.clickSupermarket()
});

