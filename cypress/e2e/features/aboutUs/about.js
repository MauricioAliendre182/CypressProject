const {
    Then
} = require('@badeball/cypress-cucumber-preprocessor');
const { aboutUsPage } = require('../../../pageObject/aboutUsPage');


Then("the user should see the about us section",
    function() {
        aboutUsPage.validateToBeInAboutUsSection()
    }
) 