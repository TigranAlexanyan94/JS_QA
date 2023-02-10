exports.PlaywrightDevPage = class PlaywrightDevPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.logoBtn = page.locator('.logo--shop > .logo--link>>nth=0')
    this.telNumber = page.locator('.logo--supportinfo > .tel-number')
    this.logoInfoText = page.locator('.logo--supportinfo > .support-info-text')
    this.searchCategorySelectOption = page.locator('.search-container > .main-search--form > #searchCategorySelectionBox')
    this.searchField = page.locator('.main-search--field')
    this.serchBtn = page.locator('.main-search--button')
    this.wishList = page.locator('.entry--notepad > .btn')
    this.chart = page.locator('.entry--cart')
    this.account = page.locator('.btn>>nth=6')
    // this.settings = page.locator('.entry--shop-settings > .btn')
    // this.supermarket = page.locator('.navigation-main > div.navigation--list-wrapper>>nth=1 > .js--menu-scroller--list > .js--menu-scroller--item>>nth=0 > .desktop-nav-bg>>nth=0')
    this.muchacho = page.locator('.emotion--banner>>nth=3')
    this.kaufman = page.locator('.emotion--banner>>nth=4')
    this.madeInChina = page.locator('.emotion--banner>>nth=5')
    this.manufacturer = page.locator('.emotion--banner>>nth=6')
    this.prepa = page.locator('.emotion--banner>>nth=7')
    this.foodPark = page.locator('.emotion--banner>>nth=8')
  }
​
  async goto() {
    await this.page.goto('https://buy.am/en');
  }
​
  async clicklogoButton(){
    await this.logoBtn.click()
  }
​
  async getTelNumberText(){
    await this.telNumber.getByText('+374 10 311 111')
  }
​
  async getLogoInfoText(){
    await this.logoInfoText.getByText('Զանգերի կենտրոն')
  }
​
  async clickSearchCategorySelection(){
    await this.searchCategorySelectOption.click()
  }
​
  async searchFieldText(){
    await this.searchField.fill('սուպերմարկետ')
  }
​
  async clickSearchBtn(){
    await this.serchBtn.click()
  }
​
  async clickWishList(){
    await this.wishList.click()
  }
​
  async clickChart(){
    await this.chart.click()
  }
​
  async clickAccount(){
    await this.account.click()
  }
​
  async clickManufacturer(){
    await this.manufacturer.click()
  }
​
  // async clickSettings(){
  //   console.log(this.settings.innerHTML)
  //   await this.settings.click()
  // }
​
  // async clickSupermarket(){
  //   console.log(await this.supermarket)
  //   await this.supermarket.click()
  // }
​
  async clicklogoButton(){
    await this.logoBtn.click()
  }
​
  async clickMuchacho(){
    await this.muchacho.click()
  }
​
  async clickKaufman(){
    await this.kaufman.click()
  }
​
  async clickMadeInChina(){
    await this.madeInChina.click()
  }
​
  async clickPreapa(){
    await this.prepa.click()
  }
​
  async clickFoodPark(){
    await this.foodPark.click()
  }
​
  async pageObjectModel(){
    await this.goto()
    await this.clicklogoButton()
    await this.getTelNumberText()
    await this.getLogoInfoText()
    await this.clickSearchCategorySelection()
​
    await this.searchFieldText()
    await this.clickWishList()
    await this.clickChart()
    await this.clickUser()
    await this.clickSettings()
    await this.clickSupermarket()
    await this.clicklogoButton()
​
    await this.clickMuchacho()
    await this.clickKaufman()
    await this.clickMadeInChina()
    await this.clickManufacturer()
    await this.clickPreapa()
    await this.clickFoodPark()
  }
}

