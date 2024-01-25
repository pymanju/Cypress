const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    
   // "defaultCommandTimeout":20000,
    //"pageLoadTimeout":120000,
    "viewportWidth":1000,
    "viewportHeight":997,
     "retries":{openMode:1,runMode:1},
      env :{

       "username":"manju",
        "password":"manju123",
        "loginurl":"https://preprod.opensource-demo.orangehrmlive.com",
   
},

  
  

setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
