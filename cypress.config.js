const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
  } = require('cypress-image-snapshot/plugin');
// Import the libraries just installed
const webpack = require('@cypress/webpack-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')

// Import allure
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

const values = {}


// We will create an async function for the setupNodeEvents
async function setupNodeEvents(on, config) {
  // implement node event listeners here

  // Implement the plugin
  // in this case Image Snapshot
  addMatchImageSnapshotPlugin(on ,config);

  // We have access to the env variables
  // config.env.variable = process.env.NODE_ENV ?? 'There is no variable'
  
  // Create the plugin to not use the cu.origin (case when
  // your cypress version is lower than 10.00)
  // IMPORTANT: At the moment to state a plugin
  // we need to return something, no matter what (can be NULL)
  // on('task', {
  //   store(value){
  //     const key =Object.keys(value)[0]
  //     values[key] = value[key]
  //     return null
  //   },
  //   get(key){
  //     console.log('values', values)
  //     return values[key] ?? "There is no value"
  //   }
  // })

  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  // Configuration of webpack to determine the .feature extension in BDD
  
  // First Configuration
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // This line is to configure allure
  allureWriter(on, config)

  return config
}


module.exports = defineConfig({
  projectId: 'hxre8a',
  // Configuration for multiple reports plugin
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  e2e: {
    baseUrl: "https://www.casaideas.com.bo/",

    // This line was for cookies and localstorage
    // But it can work with the case of different domains
    experimentalSessionAndOrigin: true,
    setupNodeEvents,
    // retries: 2,
    // Way to separate the headless mode from the ui mode in the retries
    retries: {
      // this is for 'cypress run'
      runMode:2,
      // this is for 'cypress open'
      openMode:2,
    },
    // Change the pattern of the tests
    specPattern: "**/*.feature",
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  }
});
