import { productPage } from "./productsPage"

export class SearchPage {
    constructor() {
        this.productTitle = "//a[text()='PRODUCT']"
        this.productSet = "//div[@class='row']/descendant::div[@class='profile-widget']/descendant::p/a"
    }

    findTheProduct(product) {
        cy.xpath(this.productSet)
        .each(($el, index, $list) => {
            if($el.text().trim() == product.toString().toUpperCase()){
                cy.wrap($el).should('be.visible').invoke('text')
                .then((text) => {
                    Cypress.env({
                        productFound:text.trim()
                    })
                })
            }
        })
    }

    findProductByPage(product) {
            for(let i = 0; i<=4; i++) {
                this.findTheProduct(product)
                if(Cypress.env('productFound') == product.toString().toUpperCase()) {
                    break;
                }
                productPage.goToTheNextPage()
            }
    }

    validateThatTheProductIsPresent(product) {
        const PRODUCT = this.productTitle.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT, {timeout:8000}).first().should('be.visible')
    }
}

export const searchPage = new SearchPage();