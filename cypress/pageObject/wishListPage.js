export class WishlistPage {
    constructor() {
        this.productTitle = "//a[text()='PRODUCT']"
        this.wishListButton = "//a[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::button[@aria-label='Add To Wishlist']"
    }

    pressTheWishListButton(product){
        const PRODUCT_NAME = this.wishListButton.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    validateTheProductInTheWishList(product) {
        const PRODUCT_NAME = this.productTitle.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible')
    }

}
export const wishList = new WishlistPage(); 