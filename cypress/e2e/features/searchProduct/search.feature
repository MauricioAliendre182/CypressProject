@UI @Search
Feature: purchase section

    Background: 
        Given The user selects the city "La Paz"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password
    
    @Acceptance
    Scenario: Search an specific product
        When the user searches a product with the name "Muebles"
        Then the user should see the product "Repisa 2 bandejas larga plegable de 37cm bambú"