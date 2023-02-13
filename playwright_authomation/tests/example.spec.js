const { test, expect } = require('@playwright/test');
import { PlaywrightDevPage } from './playwright-dev-page';

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
  await expect(page).toHaveURL('https://buy.am/en/register/index/sTarget/note/sTargetAction/index');
  await playwrightDev.goto()

  await playwrightDev.clickChart();
  await playwrightDev.clickAccount();
  // await playwrightDev.clickSettings();
  // await playwrightDev.clickSupermarket();
  await playwrightDev.clicklogoButton();

  await playwrightDev.clickMuchacho();
  await expect(page).toHaveURL('https://buy.am/hy/muchacho');
  await playwrightDev.goto()
  await playwrightDev.clickKaufman();
  await expect(page).toHaveURL('https://buy.am/hy/kaufmann');
  await playwrightDev.goto()
  await playwrightDev.clickMadeInChina();
  await expect(page).toHaveURL('https://buy.am/hy/made-in-china');
  await playwrightDev.goto()
  await playwrightDev.clickManufacturer();
  await expect(page).toHaveURL('https://buy.am/hy/listing/manufacturer/sSupplier/1571');
  await playwrightDev.goto();
  await playwrightDev.clickPreapa();
  await expect(page).toHaveURL('https://buy.am/hy/listing/manufacturer/sSupplier/1554');
  await playwrightDev.goto();
  await playwrightDev.clickFoodPark();
  await expect(page).toHaveURL('https://buy.am/hy/listing/manufacturer/sSupplier/1567');
  await playwrightDev.goto();

  await playwrightDev.clickSlide()
});
