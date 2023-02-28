// @ts-check
const { test, expect } = require("@playwright/test");
const selectors  = require('../constant/constant')

test.beforeEach(async ({ page })=>{
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await expect(page).toHaveTitle(/Your Store/);
})

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshotPath = testInfo.outputPath(`failure.png`);
    testInfo.attachments.push({ name: 'screenshot', path: screenshotPath, contentType: 'image/png' });
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
})

test("Structure Login page content C4", async ({ page }) => {
  await test.step("Click on the Login button.", async () => {
    await page.locator(selectors.loginBtn).click();
    await expect.soft(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');    
    const text = await page.locator('h2>>nth=0')
    await expect.soft(text).toHaveText('New Customer')
    const text1 = await page.locator('h2>>nth=1')
    await expect.soft(text1).toHaveText('Returning Customer')
  });
});


test("Verify the login functionality C6", async ({ page }) => {
  await test.step("Click on the Login button.", async () => {
    await page.locator(selectors.loginBtn).click();
    await expect.soft(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');    
    
    await page.locator("#input-email").fill('tigran.alexanyan.im@gmail.com');
    const emailValue = await page.locator("#input-email").inputValue()
    expect.soft(emailValue).toContain('tigran.alexanyan.im@gmail.com')

    await page.locator("#input-password").fill('kjkj');
    const passwordValue = await page.locator("#input-password").inputValue()
    expect.soft(passwordValue).toContain('kjkj')

    await page.locator(".btn-primary>>nth=2").click();
    const alertDanger = await page.locator('.alert-danger').innerText()
    await expect.soft(alertDanger).toContain('Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
  });
});
