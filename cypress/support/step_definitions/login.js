const {
    Before,
    Given,
    When,
    Then
} = require('@badeball/cypress-cucumber-preprocessor')
const { loginPage } = require('../../pageObject/LoginPage');
const { headerSection } = require('../../pageObject/headerSection');
const { homePage } = require('../../pageObject/homePage');

Before(function(){
    headerSection.visit()
})

Given(/^The user is on login page$/, function() {
    loginPage.validateLoginPage();
})

Given("The user selects the city {string}", 
    function (city) {
       headerSection.selectCity(city);
});

Given(/^The user goes to the login page$/, function () {
       headerSection.goToTheLoginSection()
});

When(/^The user fills the credentials with email and password$/, function () {
    loginPage.login()
});

When(/^The user fills the credentials with invalid credentials$/, function () {
    loginPage.invalidCredentials()
});

Then(/^The user should validate that he is logged in$/, function () {
    homePage.validateHomePagePresence()
});

Then(/^The user should validate that he is not logged in$/, function () {
    loginPage.validateErrorLogin()
});