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

When("the user goes to the next section",
    function() {
        productPage.goToTheNextPage()
    }
) 

When("the user goes to the final section",
    function() {
        productPage.goToTheFinalPage()
    }
) 

When("the user reviews the cart icon", 
    function () {
        headerSection.clickOnCartIcon()
});

When("the user eliminates the product {string} just added in the cart",
    function(product) {
        headerSection.eliminateProductFromCart(product)
    }
)

Then("the user should see that the product was added correctly", function () {
    productPage.validateThatAProductWasAddedToTheCart()
});

Then("the user should see the product {string} just added in the cart", 
    function (product) {
        headerSection.validateProductInTheCart(product)
});

Then("the user should see the message that a product was removed from the cart",
    function() {
       productPage.validateThatAProductWasEliminatedFromCart()
    }
)

Then("the user should see the product {string} in this section",
    function (product) {
        productPage.validateNextPage(product)
    }
)