const constant = require("../constant/constant");

exports.PlaywrightDevPage = class PlaywrightDevPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginBtnSelect = page.locator(constant.loginBtnSelect);
    this.newCustomer = page.locator(constant.newCustomer);
    this.returnCustomer = page.locator(constant.returnCustomer);
    this.email = page.locator(constant.email);
    this.password = page.locator(constant.password);
    this.loginBtn = page.locator(constant.loginBtn);
    this.alertDanger = page.locator(constant.alertDanger);
  }

  async goto() {
    await this.page.goto("https://ecommerce-playground.lambdatest.io");
  }

  async clickLoginBtnSelect() {
    await this.loginBtnSelect.click();
  }

  async newCustomerText() {
    await this.newCustomer;
  }

  async returnCustomerText() {
    await this.returnCustomer;
  }

  async fillEmailAddress(email) {
    await this.email.fill(email);
  }

  async fillPassword(password) {
    await this.password.fill(password);
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async alertDangerText(){
    await this.alertDanger;
  }
};
