from appium.webdriver.common.appiumby import AppiumBy

class Login:
    def __init__(self, driver, locators):
        self.driver = driver
        self.teacher = locators.get('teacher')
        self.email = locators.get('email')
        self.password = locators.get('password')
        self.loginBtn = locators.get('loginBtn')


    def teacher_click(self):
        self.driver.find_element(AppiumBy.XPATH, self.teacher).click()
    
    def set_email(self):
        self.driver.find_element(AppiumBy.XPATH, self.email).send_keys('gayane_n@instigatemobile.com')

    def set_password(self):
        self.driver.find_element(AppiumBy.XPATH, self.password).send_keys('Hey@12')

    def sign_In(self):
        self.driver.find_element(AppiumBy.XPATH, self.loginBtn).click()

