// @ts-check
const { test, expect } = require("@playwright/test");
const { PlaywrightDevPage } = require("../pom/Home");

test.beforeEach(async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await expect(page).toHaveTitle(/Your Store/);
  await playwrightDev.clickLoginBtnSelect();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshotPath = testInfo.outputPath(`failure.png`);
    testInfo.attachments.push({
      name: "screenshot",
      path: screenshotPath,
      contentType: "image/png",
    });
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
});

test("Structure Login page content C4", async ({ page }) => {
  await test.step("Click on the Login button.", async () => {
    const playwrightDev = new PlaywrightDevPage(page);
    const text = await playwrightDev.newCustomer;
    await expect.soft(text).toHaveText('New Customer')
    const text1 = await playwrightDev.returnCustomer;
    await expect.soft(text1).toHaveText('Returning Customer')
  });
});

test("Verify the login functionality C6", async ({ page }) => {
  await test.step("Click on the Login button.", async () => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.fillEmailAddress('tigran.alexanyan.im@gmail.com');
    const emailValue = await playwrightDev.email.inputValue();
    await expect.soft(emailValue).toBe('tigran.alexanyan.im@gmail.com')

    await playwrightDev.fillPassword('kjkj');
    const passwordValue = await playwrightDev.password.inputValue();
    await expect.soft(passwordValue).toBe('kjkj')

    await playwrightDev.clickLoginBtn();
    const alertDanger = await playwrightDev.alertDangerText();
    await expect.soft(alertDanger).toHaveText('Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
  });
});
