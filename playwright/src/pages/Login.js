const baseUrl = require("../constant/baseUrl");
const loginConstant = require("../constant/login");

exports.Login = class Login {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.newCustomer = page.locator(loginConstant.newCustomer);
    this.returnCustomer = page.locator(loginConstant.returnCustomer);
    this.email = page.locator(loginConstant.email);
    this.password = page.locator(loginConstant.password);
    this.loginBtn = page.locator(loginConstant.loginBtn);
    this.alertDanger = page.locator(loginConstant.alertDanger);
  }

  async goto() {
    await this.page.goto(`${baseUrl.url}/index.php?route=account/login`);
  }

  async emailAddress(email) {
    await this.email.fill(email);
  }

  async passwordAddress(password) {
    await this.password.fill(password);
  }

  async loginButton() {
    await this.loginBtn.click();
  }

  async alertDangerText(){
    return await this.alertDanger.innerText();
  }
};
