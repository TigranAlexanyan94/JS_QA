from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
import pytest
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.actions import interaction
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.pointer_input import PointerInput

caps = {}
caps["platformName"] = "Android"
caps["appium:platformVersion"] = "8.0.0"
caps["appium:deviceName"] = "G3112"
caps["appium:automationName"] = "Appium"
caps["browserName"] = "Chrome"
caps["appium:chromedriverExecutable"] = "/home/tigran/Downloads/chromedriver_linux64/chromedriver"
caps["appium:ensureWebviewsHavePages"] = True
caps["appium:nativeWebScreenshot"] = True
caps["appium:newCommandTimeout"] = 3600
caps["appium:connectHardwareKeyboard"] = True


@pytest.fixture(scope="function")
def data_driver():
    driver = webdriver.Remote("http://localhost:4723/wd/hub", caps)
    return driver


def test_data(data_driver):
    data_driver.get('https://steamhub-im.web.app')
    teacher = data_driver.find_element(AppiumBy.XPATH, '//div[@id="root"]/div[1]/div[1]/div/img[1]')
    teacher.click()
    email = data_driver.find_element(AppiumBy.XPATH, '//input[@name="email"]')
    data_driver.implicitly_wait(10)
    email.send_keys('gayane_n@instigatemobile.com')
    assert email.get_attribute('value') == 'gayane_n@instigatemobile.com'

    password = data_driver.find_element(AppiumBy.XPATH, '//input[@name="password"]')
    password.send_keys('Hey@12')
    assert password.get_attribute('value') == 'Hey@12'

    loginBtn = data_driver.find_element(AppiumBy.XPATH, '//div[@id="root"]/div[1]/div[3]/div/div/div/div[2]/form/div[3]/button')
    data_driver.implicitly_wait(10)
    loginBtn.click()
    