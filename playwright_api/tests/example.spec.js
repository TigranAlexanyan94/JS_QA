// @ts-check
const { test, expect, chromium } = require("@playwright/test");
const fs = require("fs");

test("Get all api under website and collect to file", async ({ page }) => {
  (async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    page.on("request", (request) => {
      fs.appendFileSync("data.txt", JSON.stringify(request.url()));
    });

    page.on("response", (response) => {
      fs.appendFileSync("data.txt", JSON.stringify(response.url()));
    });

    await page.goto("https://www.etsy.com/");

    await page.click("text=Accept");
    await page.fill("input", "jeans");
    await page.keyboard.press("Enter");

    await browser.close();
  })();
});
