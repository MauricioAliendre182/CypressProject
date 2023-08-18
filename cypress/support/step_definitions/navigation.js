const {
    Given,
    When,
    Then
} = require('@badeball/cypress-cucumber-preprocessor');
const { productSection } = require('../../pageObject/producCommonSection');


Given("The user selects the section {string} and subsection {string}", 
    function (section, subsection) {
       productSection.navigateToASection(section, subsection)
});

When(/^The user selects (.*) as value for the sort filter$/, 
    function (value) {
        productSection.selectFilter(value)
});

Then("the user should see at least one product", function () {
    productSection.validateThatAProductExists()
});