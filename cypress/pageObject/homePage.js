export class HomePage{
    constructor() {
        this.dogsLogo = "//a/img[contains(@src, 'BANNERS_HOME_TEST')]"
    }

    validateHomePagePresence() {
        cy.xpath(
            this.dogsLogo,
            {timeout:8000}
        ).first().should('be.visible')
    }
}

export const homePage = new HomePage();