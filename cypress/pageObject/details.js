export class DetailsPage {
    constructor() {
        this.titleProduct = "//h1[text()='PRODUCT']"
        this.productOptions = {
            add_product_button: "//h1[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::i[contains(@class, 'plus')]/ancestor::button",
            reduce_product_button: "//h1[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::i[contains(@class, 'minus')]/ancestor::button",
            input_quantity: "//h1[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::input",
            add_to_cart_button: "//h1[text()='PRODUCT']/ancestor::div[2]/descendant::button[text()='AGREGAR AL CARRO']",
            heart_button: "//h1[text()='PRODUCT']/ancestor::div[2]/descendant::div[4]/descendant::i[contains(@class, 'heart')]/ancestor::button"
            
        }
        this.generalInformation = {
            materiality: "//b[text()='MATERIALIDAD:']/ancestor::div[2]/descendant::p[text()='MATERIAL']",
            measurements: "//b[text()='MEDIDAS:']/ancestor::div[2]/descendant::p[text()='MEASUREMENT']"
        }
        this.productDescription = "//span[text()='DESCRIPCIÓN DEL PRODUCTO']/ancestor::div[3]/descendant::p[text()='DESCRIPTION.']"
    }

    setAQuanityOfProductsToTheCart(product, quantity) {
        const PRODUCT_INPUT = this.productOptions.input_quantity.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_INPUT, {timeout:8000}).type('{selectAll}{backspace}')
        cy.xpath(PRODUCT_INPUT).type(quantity.toString())
    }

    addAProductToTheCart(product) {
        const PRODUCT_NAME = this.productOptions.add_product_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    reduceAProductToTheCart(product) {
        const PRODUCT_NAME = this.productOptions.reduce_product_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    addToCart(product) {
        const PRODUCT_NAME = this.productOptions.add_to_cart_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    addProductToWishlist(product) {
        const PRODUCT_NAME = this.productOptions.heart_button.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible').click()
    }

    validateTheProductDescription(description) {
        const DESCRIPTION = this.productDescription.replace('DESCRIPTION', description.toString().toUpperCase())
        cy.xpath(DESCRIPTION, {timeout:8000}).should('be.visible')
    }

    validateTheProductMaterial(material) {
        const MATERIAL = this.generalInformation.materiality.replace('MATERIAL', material.toString().toUpperCase())
        cy.xpath(MATERIAL, {timeout:8000}).should('be.visible')
    }

    validateTheProductMeasurement(measurement) {
        const MEASUREMENT = this.generalInformation.measurements.replace('MEASUREMENT', measurement.toString().toUpperCase())
        cy.xpath(MEASUREMENT, {timeout:8000}).last().should('be.visible')
    }
}