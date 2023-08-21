@UI @Details
Feature: Product Detail

    Background: 
        Given The user selects the city "Cochabamba"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password
    
    @Acceptance
    Scenario: See the details
        Given The user selects the section "Niños" and subsection "Bebé"
        When the user selects the product "Babero con mangas estampado" to see the details
        Then the user should see the text "Babero impermeable estampado con mangas" as description
        And the user should see the text "Cubierta frente: 100% peva." as materiality
        And the user should see the text "Ancho 39 cm | alto 35 cm" as measurments
    
    @Acceptance
    Scenario: Make a Purchase for details page
        Given The user selects the section "Niños" and subsection "Bebé"
        When the user selects the product "Babero con mangas estampado" to see the details
        And the user add the product "Babero con mangas estampado" to the cart and set 1 as quantity
        Then the user should see that the product was added correctly
        When the user reviews the cart icon
        Then the user should see the product "Babero con mangas estampado" just added in the cart

