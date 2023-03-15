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
caps["appium:app"] = "/home/tigran/Downloads/ApiDemos-debug.apk"
caps["appium:ensureWebviewsHavePages"] = True
caps["appium:nativeWebScreenshot"] = True
caps["appium:newCommandTimeout"] = 3600
caps["appium:connectHardwareKeyboard"] = True


@pytest.fixture(scope="function")
def data_driver():
    driver = webdriver.Remote("http://localhost:4723/wd/hub", caps)
    return driver

def test_data_animation(data_driver):
    animation = data_driver.find_element('xpath','//android.widget.TextView[@content-desc="Animation"]')
    animation.click()

def test_data_app(data_driver):
    app = data_driver.find_element('xpath','//android.widget.TextView[@content-desc="App"]')
    app.click()

def test_data_content(data_driver):
    content = data_driver.find_element('xpath','//android.widget.TextView[@content-desc="Content"]')
    content.click()    

def test_data_graphics(data_driver):
    graphics = data_driver.find_element('xpath','//android.widget.TextView[@content-desc="Graphics"]')
    graphics.click()      

def test_data_media(data_driver):
    media = data_driver.find_element('xpath','//android.widget.TextView[@content-desc="Media"]')
    media.click()  