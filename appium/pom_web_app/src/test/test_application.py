from appium import webdriver
import pytest
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.actions import interaction
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.pointer_input import PointerInput
from ..pages.webApplication import Login
from ..constant.constant import locators


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
    login = Login(data_driver, locators)

    login.teacher_click()
    data_driver.implicitly_wait(10)
    login.set_email()
    data_driver.implicitly_wait(10)
    login.set_password()
    data_driver.implicitly_wait(10)
    login.sign_In()
    