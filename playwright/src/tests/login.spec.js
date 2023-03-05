// @ts-check
const { test, expect } = require("@playwright/test");
const baseUrl = require("../constant/baseUrl");
const { Login } = require("../pages/Login");
const utils = require("../utils/utils");

let login;

const emailPassword = {
  email: Buffer.from(utils.email, "base64").toString("utf8"),
  password: Buffer.from(utils.password, "base64").toString("utf8"),
};

test.beforeEach(async ({ page }) => {
  login = new Login(page);
  await login.goto();
  await expect(page).toHaveTitle(/Account Login/);
  await expect(page).toHaveURL(`${baseUrl.url}/index.php?route=account/login`);
});

test("Structure Login page content C4", async () => {
  await test.step("Click on the Login button.", async () => {
    const newCustomerText = login.newCustomer;
    await expect(newCustomerText).toHaveText("New Customer");
    const returnCustomerText = login.returnCustomer;
    await expect(returnCustomerText).toHaveText("Returning Customer");
  });
});

test("Verify the login functionality C6", async () => {
  await test.step("Click on the Login button.", async () => {
    await login.emailAddress(emailPassword.email);
    const emailValue = await login.email;
    await expect(emailValue).toHaveValue(emailPassword.email);

    await login.passwordAddress(emailPassword.password);
    const passwordValue = await login.password;
    await expect(passwordValue).toHaveValue(emailPassword.password);

    await login.loginButton();
    const alertDanger = await login.alertDanger;
    await expect(alertDanger).toHaveText(
      "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
    );
  });
});
