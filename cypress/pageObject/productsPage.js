//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']
//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']/ancestor::div[3]/div/a

// Price
//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']/ancestor::div[2]/descendant::div[2]/div/span

// Buy section
//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']/ancestor::div[2]/descendant::div[4]/descendant::i[contains(@class, 'minus')]/ancestor::button
//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']/ancestor::div[2]/descendant::div[4]/descendant::i[contains(@class, 'plus')]/ancestor::button
//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']/ancestor::div[2]/descendant::div[4]/descendant::input
//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']/ancestor::div[2]/descendant::div[4]/descendant::span[text()='Agregar al carro']/ancestor::button
//a[text()='SPRAY AROMÁTICO 200 ML - VERBENA']/ancestor::div[2]/descendant::div[4]/descendant::button[@aria-label='Add To Wishlist']

// #next
// #doublenext
// select1

// Aggregate something to the cart
//div[text()='Agregado Correctamente al carro']
export class ProductPage {
    constructor() {
        this.productOptions = {
            img_reference_button: "//a[text()='PRODUCT']/ancestor::div[3]/div/a",
            name_reference_button: "//a[text()='PRODUCT']",
            name_product_label: "//h1[text()='PRODUCT']",
            price_label: "//a[text()='PRODUCT']/ancestor::div[2]/descendant::div[2]/div/span",
            add_quantity_button: "//a[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::i[contains(@class, 'minus')]/ancestor::button",
            reduce_quantity_button: "//a[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::i[contains(@class, 'plus')]/ancestor::button",
            input_quantity: "//a[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::input",
            add_to_cart_button: "//a[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::span[text()='Agregar al carro']/ancestor::button",
            add_to_wishlist_button: "//a[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::button[@aria-label='Add To Wishlist']",
        };
        this.nextPage = "#next"
        this.doubleNext = "#doublenext"
        this.alertAddToCart = "//div[text()='Agregado Correctamente al carro']"
    }

    goToTheDetailsOfTheProduct(product) {
        const PRODUCT_NAME = this.productOptions.img_reference_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click().should('be.visible')
    }

    setAQuanityOfProductsToTheCart(product, quantity) {
        const PRODUCT_INPUT = this.productOptions.input_quantity.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_INPUT, {timeout:8000}).type('{selectAll}{backspace}')
        cy.xpath(PRODUCT_INPUT).type(quantity.toString())
    }

    addAProductToTheCart(product) {
        const PRODUCT_NAME = this.productOptions.add_quantity_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    reduceAProductToTheCart(product) {
        const PRODUCT_NAME = this.productOptions.reduce_quantity_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    addToCart(product) {
        const PRODUCT_NAME = this.productOptions.add_to_cart_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    addProductToWishlist(product) {
        const PRODUCT_NAME = this.productOptions.add_to_wishlist_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    goToTheNextPage() {
        cy.get(this.nextPage, {timeout:8000}).should('be.visible').click()
    }

    goToTheFinalPage() {
        cy.get(this.doubleNext, {timeout:8000}).should('be.visible').click()
    }

    goToTheProduct(product) {
        const PRODUCT_NAME = this.productOptions.img_reference_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible')
    }

    validateThePrice(product) {
        const PRODUCT_NAME = this.productOptions.price_label.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible')
    }

    validateThatAProductWasAddedToTheCart() {
        cy.xpath(this.alertAddToCart, {timeout:8000}).contains('Agregado Correctamente al carro').should('be.visible')
    }

    validateThatTheUserIsOnDetailsProduct(product) {
        const PRODUCT_NAME = this.productOptions.name_product_label.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible')
    }

    validateNextPage(product) {
        const PRODUCT_NAME = this.productOptions.name_reference_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).last().should('be.visible')
    }
}

export const productPage = new ProductPage();