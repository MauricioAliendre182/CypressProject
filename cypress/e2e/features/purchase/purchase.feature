Feature: purchase section

    Background: 
        Given The user selects the city "La Paz"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password
        And The user selects the section "Muebles" and subsection "Mesas"
    
    @Acceptance
    Scenario: Make a purchase
        When the user selects the product "Mesa comedor mdf PP madera" and aggregates 1 of it to the cart
        Then the user should see that the product was added correctly
        When the user reviews the cart icon
        Then the user should see the product "Mesa comedor mdf PP madera" just added in the cart