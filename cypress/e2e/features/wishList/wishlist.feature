@CI @UI @Wishlist
Feature: Product Detail

    Background: 
        Given The user selects the city "Cochabamba"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password
    
    @Acceptance
    Scenario: See the details
        Given The user selects the section "Niños" and subsection "Bebé"
        When the user adds to the wishlist the product "Babero con mangas estampado"
        Then the user should see that the product was added to the wishlist correctly
        When the user goes to the section "Mi lista de deseos"
        Then the user should see the product "Babero con mangas estampado" in the wishlist
        When the user disaggregates the product "Babero con mangas estampado" from wishlist
        Then the user should see that the product was disaggregated from wishlist