const selectValues = {
    "Más reciente": "new",
    "Menor Precio": "minorprice",
    "Mayor Precio": "majorprice",
    "Más vendidos": "ranking",
    "A - Z": "AZ",
    "Z - A": "ZA",
    "Mejor Descuento":"discount"
}

export class ProductSection {
    constructor() {
        this.titleSection = "//h1[text()='SECTION']"
        this.titleProduct = "//div[@style='background: transparent;']/descendant::p/a"
        this.sectionButtton = "//a[text()='SECTION']"
        this.subSectionButton = "//span[text()='SUB-SECTION']/ancestor::a"
        this.hamburguerOptions = {
            hamburguer_button: "//h1[text()='SECTION']/ancestor::div[1]/i",
            option_product: "//span[text()='SECTION'] ",
            extend_information_button: "//span[text()='SECTION']/ancestor::li/descendant::div[text()='+']",
            reduce_information_button: "//span[text()='SECTION']/ancestor::li/descendant::div[text()='-']"
        };
        this.dateFilter = "#sort"
        this.footer = {
            la_paz_reference: "//span[text()='La Paz: 76759953']",
            santa_cruz_reference: "//span[text()='Santa Cruz: 76759951']",
            cochabamba_reference: "//span[text()='Cochabamba: 76759952']",
            personal_information: "//span[text()='Mis datos personales']",
            my_purchases: "//span[text()='Mis compras']"
        }
    }

    validateHeaderSection() {
        cy.xpath(this.sectionButton).should('be.visible')
        cy.xpath(this.hamburguerOptions.hamburguer_button).should('be.visible')
        cy.get(this.dateFilter).should('be.visible')
    }

    validateFooterSection() {
        cy.xpath(this.footer.la_paz_reference).should('be.visible')
        cy.xpath(this.footer.my_purchases).should('be.visible')
    }

    validateCorrectSection(section) {
        const TITLE_SECTION = this.titleSection.replace('SECTION', section.toString())
        cy.xpath(TITLE_SECTION).should('be.visible')
    }

    validateThatAProductExists() {
        cy.xpath(this.titleProduct).first().should('be.visible')
    }

    selectFilter(filter) {
        cy.get(this.dateFilter).select(filter).should('have.value', selectValues[filter])
    }

    navigateToASection(section, subsection) {
        const SECTION_BUTTON = this.sectionButtton.replace('SECTION', section.toString().toUpperCase())
        const SUB_SECTION_BUTTON = this.subSectionButton.replace('SUB-SECTION', subsection.toString())
        cy.wait(4000)
        cy.xpath(SECTION_BUTTON, {timeout:8000}).should('be.visible').realHover()
        cy.wait(1000)
        cy.xpath(SUB_SECTION_BUTTON, {timeout:8000}).last().should('be.visible').click()
    }
    goToASpecificSectionFromHamburguerButton(section) {
        const HAMBURGUER_BUTTON = this.hamburguerOptions.hamburguer_button.replace('SECTION', section.toString())
        const SELECT_OPTION = this.hamburguerOptions.option_product.replace('SECTION', section.toString())
        cy.xpath(HAMBURGUER_BUTTON, {timeout:8000}).click()
        cy.xpath(SELECT_OPTION, {timeout:8000}).last().click()
    }
}

export const productSection = new ProductSection();