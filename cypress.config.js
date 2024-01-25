const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
   // "specPattern":"**/*.feature",
    projectId: "kvq4be",
   // "baseUrl":"https://opensource-demo.orangehrmlive.com",
   // "video":"true",
   // "defaultCommandTimeout":20000,
    //"pageLoadTimeout":120000,
    "viewportWidth":1000,
    "viewportHeight":997,

    // "retries":{openMode:1,runMode:1},
    // "watchForFileChanges":false,
   // "video":"true",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile}) 
      allureWriter(on, config);
            return config;
    },
    env:{
      "username":"Admin",
      "password":"admin123",
     "loginurl":"https://opensource-demo.orangehrmlive.com",
    },

  },
});
