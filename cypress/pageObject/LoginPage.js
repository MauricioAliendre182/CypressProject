export class LoginPage{
    constructor() {
        this.userInput = "#form_1_email";
        this.passwordInput = "#form_1_password";
        this.loginButton = "//button[text()='Iniciar sesión']";
        this.error = "//div[@role='alert']";
    }
    validateErrorLogin() {
        cy.xpath(this.error).contains('Usuario o Password Incorrecto').should('be.visible')
    }

    validateLoginPage() {
        cy.get(this.userInput, {timeout:6000}).should('be.visible')
        cy.get(this.passwordInput, {timeout:6000}).should('be.visible')
        cy.xpath(this.loginButton, {timeout:6000}).should('be.visible')
    }

    login() {
        cy.get(this.userInput, {timeout:7000}).type(Cypress.env('credentials').email)
        cy.get(this.passwordInput, {timeout:7000}).type(Cypress.env('credentials').password)
        cy.xpath(this.loginButton, {timeout:7000}).click()
    }

    invalidCredentials() {
        cy.get(this.userInput, {timeout:7000}).type(Cypress.env('invalidCredentials').email)
        cy.get(this.passwordInput, {timeout:7000}).type(Cypress.env('invalidCredentials').password)
        cy.xpath(this.loginButton, {timeout:7000}).click()
    }
}

export const loginPage = new LoginPage();