# Casa Ideas Automation Project
This project is intended to automate the most important features of [Casa Ideas](https://www.casaideas.com.bo/) in UI side, using Cypress and different browsers, Cucumber will be used to pose the different scenarios.

![image](https://github.com/RodrigoValda/TestTitanWordpress/assets/86843637/f0b543c5-94ec-456b-9707-90443a6ec754)

# Installation
## Local way
You can execute the folowing line:
```sh
cd cypressProject
npm install --legacy-peer-deps
```

If this does not work, you can install the libraries one by one
```sh
cd cypressProject
npm i @shelex/cypress-allure-plugin --legacy-peer-deps
npm i @badeball/cypress-cucumber-preprocessor --legacy-peer-deps
npm install webpack --legacy-peer-deps
npm install @cypress/webpack-preprocessor --legacy-peer-deps
npm install -D cypress-xpath --legacy-peer-deps
npm i cypress-real-events -D --legacy-peer-deps
npm i cypress-multi-reporters --legacy-peer-deps
npm i -g junit-report-merger
npm i mocha-junit-reporter --legacy-peer-deps
npm i mochawesome --legacy-peer-deps
npm i mochawesome-merge --legacy-peer-deps
npm i -g mochawesome-report-generator
```

# Execution
## Local way
There a few commands that you can execute, they are the following:
- Run the whole tests
```sh
npm run cucumber:tags:report
```
- Generate a Mochawesome report
```sh
npm run mochawesome:report
```
- Generate a JUnit report
```sh
npm run junit:report
```
- Delete the JUnit and Mochaawesome reports
```sh
npm run delete:results
```
- Raise the server for the allure report
```sh
npm run allure:serve
```
- Run the tests in the dashboard
```sh
npm run run:dashboard
```
- Run the tests in parallel in dashboard (For this type of running it is neccesary to have a pipeline from a CI tool like Jenkins)
```sh
npm run run:dashboard:parallel
```

## Docker
- Run the whole tests
```sh
docker-compose up
```

- Raise the server for the allure report
```sh
npm run allure:serve:docker
```

## CI
For every **pull request** and merge to the **main** branch, the CI will be executed, running the whole tests

## Configurations
### Dashboard run
To run the dashboard it is neccesary to set the **projectId** and the **key**, the projectId must be replaced in the file **cypress.config.js** as the following:

![ImagenCy2](https://github.com/RodrigoValda/TestTitanWordpress/assets/86843637/e4c1a503-b40f-49d0-a2de-627bb1e0cfb5)

The key must be replaced in the file **package.json** instead of ***** symbols, which are the following:

![ImagenCy1](https://github.com/RodrigoValda/TestTitanWordpress/assets/86843637/320c6f4f-32bb-450e-abfa-f6e737aa2c27)

Both the **projectId** and the **key** can be found in the **Cypress Cloud settings**