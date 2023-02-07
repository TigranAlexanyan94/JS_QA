exports.PlaywrightDevPage = class PlaywrightDevPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.wishList = page.locator('.entry--notepad > .btn')
    this.chart = page.locator('.entry--cart')
    this.settings = page.locator('.entry--shop-settings')
    //this.supermarket = page.locator(".navigation-main > .container > .navigation--list-wrapper > .navigation--list > .navigation--entry > .desktop-nav-bg")
  }

  async goto() {
    await this.page.goto('https://buy.am/en');
  }

  async clickWishList(){
    await this.wishList.click()
  }

  async clickChart(){
    await this.chart.click()
  }

  async clickSettings(){
    await this.settings.click()
  }

  // async gotoSuperMarket(){
  //   await this.supermarket.click()
  // }

  async pageObjectModel(){
    await this.goto()
    await this.clickWishList()
    await this.clickChart()
    await this.clickSettings()
    // await this.gotoSuperMarket()
  }
}