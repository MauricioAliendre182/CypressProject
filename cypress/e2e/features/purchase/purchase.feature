@UI
Feature: purchase section

    Background: 
        Given The user selects the city "La Paz"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password
    
    @Acceptance
    Scenario: Make a purchase
        Given The user selects the section "Muebles" and subsection "Mesas"
        When the user selects the product "Mesa comedor mdf PP madera" and aggregates 1 of it to the cart
        Then the user should see that the product was added correctly
        When the user reviews the cart icon
        Then the user should see the product "Mesa comedor mdf PP madera" just added in the cart
    
    @Acceptance
    Scenario: Go to the next section
        Given The user selects the section "Niños" and subsection "Bebé"
        When the user goes to the next section
        Then the user should see the product "Set sabana estampada" in this section
    
    @Acceptance
    Scenario: Go to the final section
        Given The user selects the section "Niños" and subsection "Bebé"
        When the user goes to the final section
        Then the user should see the product "Sonajero bebe" in this section