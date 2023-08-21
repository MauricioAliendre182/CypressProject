export class HeaderSection {
    constructor() {
        this.offerTabs = {
            new_products_tab: "//a[text()='NUEVO']",
            kids_products_tab: "//a[text()='NIÑOS']",
            furniture_products_tab: "//a[text()='MUEBLES']",
            furniture_products_tab: "//a[text()='PRODUCTOS DE TEMPORADA']",
            house_space_tab: "//a[text()='ESPACIOS DE LA CASA']",
            special_pets_tab: "//a[text()='ESPECIAL DE MASCOTAS']",
            discount_tab: "//a[text()='DESCUENTOS']",
            us_tab: "//a[text()='NOSOTROS']",
        };
        this.optionButtons = {
            track_order_button: "//button[contains(@class, 'mini-stores-icon')]",
            store_button: "//a[contains(@href, 'tiendas')]",
            login_button: "//a[substring(@href, string-length(@href) - string-length('/account') +1) = '/account']",
            purchase_button: "//button[contains(@class, 'mini-cart-icon')]"
        }
        this.searchBar = "#search_input_web"
        this.cityButton = "//button[text()='CITY']"
        this.homeButton = "//input[@placeholder='Escribe tu búsqueda']/ancestor::div[4]/descendant::a[@href='/']"
        this.product = "//div[@class='showCart-active']/descendant::a[text()='PRODUCT']"
        this.quantityProduct = "//div[@class='showCart-active']/descendant::a[text()='PRODUCT']/ancestor::div[1]/input"
        this.eliminateButton = "//div[@class='showCart-active']/descendant::a[text()='PRODUCT']/ancestor::div[5]/descendant::button[1]"
    }

    visit() {
        cy.visit('/')
    }

    validateOptionsButtonsPresence() {
        cy.xpath(this.optionButtons.login_button, {timeout:8000}).should('be.visible')
        cy.xpath(this.optionButtons.store_button, {timeout:8000}).should('be.visible')
        cy.xpath(this.optionButtons.purchase_button, {timeout:8000}).should('be.visible')
        cy.xpath(this.optionButtons.track_order_button, {timeout:8000}).should('be.visible')
    }

    validateOfferTabsPresence() {
        cy.xpath(this.tabs.new_products_tab, {timeout:8000}).should('be.visible')
        cy.xpath(this.tabs.house_space_tab, {timeout:8000}).should('be.visible')
        cy.xpath(this.tabs.special_pets_tabs, {timeout:8000}).should('be.visible')
    }

    validateButtonsAndBarPresence() {
        cy.get(this.searchBar, {timeout:8000}).should('be.visible')
        cy.xpath(this.cityButton, {timeout:8000}).should('be.visible')
        cy.xpath(this.homeButton, {timeout:8000}).should('be.visible')
    }

    validateProductInTheCart(product) {
        const PRODUCT_NAME = this.product.replace('PRODUCT', product.toString().toUpperCase())
        // const QUANTITY_PRODUCT = this.quantityProduct.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(PRODUCT_NAME, {timeout:8000}).should('be.visible')
        // cy.xpath(QUANTITY_PRODUCT).then(($name) => {
        //     const actualQuantity = $name.val()
        //     expect(actualQuantity).to.equal(quantity.toString())
        // })
    }

    selectCity(City) {
        const city = this.cityButton.replace('CITY', City.toString().toUpperCase())
        cy.wait(2500)
        cy.xpath(city, {timeout:8000}).should('be.visible').click()
    }

    clickOnCartIcon() {
        cy.xpath(this.optionButtons.purchase_button, {timeout:8000}).should('be.visible').click()
    }

    eliminateProductFromCart(product) {
        const ELIMINATE_BUTTON = this.eliminateButton.replace('PRODUCT', product.toString().toUpperCase())
        cy.xpath(ELIMINATE_BUTTON, {timeout:8000}).should('be.visible').click()
    }

    goToTheLoginSection() {
        cy.xpath(this.optionButtons.login_button, {timeout:9000}).should('be.visible').click()
    }
}

export const headerSection = new HeaderSection();