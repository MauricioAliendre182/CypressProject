const {
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const { productPage } = require('../../../pageObject/productsPage');
const { headerSection } = require('../../../pageObject/headerSection');


When("the user selects the product {string} and aggregates {int} of it to the cart", 
    function (product, quantity) {
        productPage.goToTheProduct(product)
        productPage.setAQuanityOfProductsToTheCart(product, quantity)
        productPage.addToCart(product)
});

When("the user reviews the cart icon", 
    function () {
        headerSection.clickOnCartIcon()
});

Then("the user should see that the product was added correctly", function () {
    productPage.validateThatAProductWasAddedToTheCart()
});

Then("the user should see the product {string} just added in the cart", 
    function (product) {
        headerSection.validateProductInTheCart(product)
        headerSection.eliminateProductFromCart(product)
});