const {
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const { headerSection } = require('../../../pageObject/headerSection');
const { searchPage } = require('../../../pageObject/searchPage');

When("the user searches a product with the name {string}",
    function(product) {
        headerSection.searchAProduct(product)
    }
)

When("the user finds the product {string}",
    function(product) {
        searchPage.findProductByPage(product)
    }
)

Then("the user should see the product {string}",
    function(product) {
        searchPage.validateThatTheProductIsPresent(product)
    }
)