export class AboutUsPage{
    constructor() {
        this.textInformation = "//span[contains(text(),'Somos especialistas de diseño y pensamos en ti en el proceso de diseño de cada uno de nuestros productos para el hogar. Compra 100% online y encuentra los diferentes estilos para tu casa.')]"
    }

    validateToBeInAboutUsSection() {
        cy.xpath(
            this.textInformation,
            {timeout:8000}
        ).should('be.visible')
    }
}

export const aboutUsPage = new AboutUsPage();