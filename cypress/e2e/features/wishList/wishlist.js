const {
    When,
    Then,
} = require('@badeball/cypress-cucumber-preprocessor');
const { productPage } = require('../../../pageObject/productsPage');
const { headerSection } = require('../../../pageObject/headerSection');
const { wishList } = require('../../../pageObject/wishListPage');

When("the user adds to the wishlist the product {string}",
    function(product) {
        productPage.addProductToWishlist(product)
    }
)

When("the user goes to the section {string}",
    function(section) {
        headerSection.goToTheWishListSection(section)
    }
)

When("the user disaggregates the product {string} from wishlist",
    function(product){
        wishList.pressTheWishListButton(product)
    }
)

Then("the user should see that the product was added to the wishlist correctly",
    function() {
        productPage.validateThatAProductWasAddedToTheWishList()
    }
)

Then("the user should see the product {string} in the wishlist",
    function(product) {
        wishList.validateTheProductInTheWishList(product)
    }
)

Then("the user should see that the product was disaggregated from wishlist",
    function() {
        productPage.validateThatAProductWasDeletedFromWishList()
    }
)