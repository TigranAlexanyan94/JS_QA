const config = {
    verbose: true,
    testRunner: "jest-jasmine2",
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    reporters: ["default", "jest-allure"],
};
  
module.exports = config;
