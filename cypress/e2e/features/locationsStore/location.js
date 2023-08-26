const {
    Given,
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const { headerSection } = require('../../../pageObject/headerSection');
const { locationSection } = require('../../../pageObject/locationSection');

Given("The user goes to the locations section",
    function() {
        headerSection.goToTheStoreSection()
    }
) 

When(/^The user selects (.*) as store to be selected$/,
    function(store) {
        locationSection.goToLocation(store)
    }
)

Then(/^the user should see (.*) as store located in Google Maps$/,
    function(store) {
        locationSection.validateLocation(store)
    }
)