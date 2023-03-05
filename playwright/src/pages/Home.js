const homeConstant = require("../constant/home");
const baseUrl = require("../constant/baseUrl");
const { Login } = require("../pages/Login")

exports.Home = class Home {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginBtnSelect = page.locator(homeConstant.loginBtnSelect);
    this.blogBtn = page.locator(homeConstant.blog);
    this.specialHotBtn = page.locator(homeConstant.specialHot);
  }

  async goto() {
    await this.page.goto(`${baseUrl.url}`);
  }

  async loginButtonSelect() {
   await this.loginBtnSelect.click();
   return new Login(this.page);
  }

  async blogButton() {
    await this.blogBtn.click();
  }

  async specialHotButton() {
    await this.specialHotBtn.click();
  }
};
