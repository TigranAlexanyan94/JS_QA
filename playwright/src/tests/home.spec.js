const { test, expect } = require("@playwright/test");
const baseUrl = require("../constant/baseUrl");
const { Home } = require("../pages/Home");

let home;

test.beforeEach(async ({ page }) => {
  home = new Home(page);
  await home.goto();
  await expect(page).toHaveTitle(/Your Store/);
  await expect(page).toHaveURL(`${baseUrl.url}`);
});

test("Structure Home page content", async ({ page }) => {
  await test.step("Click on the Blog button.", async () => {
    await home.blogButton();
    await expect(page).toHaveTitle(/Blog/);
    await expect(page).toHaveURL(
      `${baseUrl.url}/index.php?route=extension/maza/blog/home`
    );
  });

  await test.step("Click on the SpecialHot button.", async () => {
    await home.specialHotButton();
    await expect(page).toHaveTitle(/Special Offers/);
    await expect(page).toHaveURL(
      `${baseUrl.url}/index.php?route=product/special`
    );
  });
});
