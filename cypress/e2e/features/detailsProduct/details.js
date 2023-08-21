const {
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const { productPage } = require('../../../pageObject/productsPage');
const { detailsPage } = require('../../../pageObject/detailsPage');

When("the user selects the product {string} to see the details",
    function(product) {
        productPage.goToTheDetailsOfTheProduct(product)
    }
) 

When("the user add the product {string} to the cart and set {int} as quantity",
    function(product, quantity) {
        detailsPage.setAQuanityOfProductsToTheCart(product, quantity)
        detailsPage.addToCart(product)
    }
)

Then("the user should see the text {string} as description",
    function(description) {
        detailsPage.validateTheProductDescription(description)
    }
) 

Then("the user should see the text {string} as materiality", 
    function (material) {
        detailsPage.validateTheProductMaterial(material)
});

Then("the user should see the text {string} as measurments", 
    function (measurement) {
        detailsPage.validateTheProductMeasurement(measurement)
});