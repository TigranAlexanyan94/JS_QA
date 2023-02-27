// @ts-check
const { test, expect } = require("@playwright/test");

test("Structure Login page content C4", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await expect(page).toHaveTitle(/Your Store/);

  await test.step("Click on the Login button.", async () => {
    await page.locator(".nav-link>>nth=56").click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');    
    const text = await page.locator('h2>>nth=0')
    await expect(text).toHaveText('New Customer')
    const text1 = await page.locator('h2>>nth=1')
    await expect(text1).toHaveText('Returning Customer')
  });
});


test("Verify the login functionality C8", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await expect(page).toHaveTitle(/Your Store/);

  await test.step("Click on the Login button.", async () => {
    await page.locator(".nav-link>>nth=56").click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');    
    await page.locator("#input-email").fill('tigran.alexanyan.im@gmail.com');
    await page.locator("#input-password").fill('kjkj');
  });
});