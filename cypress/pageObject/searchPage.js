export class SearchPage {
    constructor() {
        this.productTitle = "//a[text()='PRODUCT']"
    }

    validateThatTheProductIsPresent(product) {
        const PRODUCT = this.productTitle.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT, {timeout:8000}).first().should('be.visible')
    }
}

export const searchPage = new SearchPage();