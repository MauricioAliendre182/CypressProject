@CI @UI @Details
Feature: About Us Section

    Background: 
        Given The user selects the city "Cochabamba"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password
    
    @Acceptance
    Scenario: See the details
        When The user selects the section "Nosotros" and subsection "Quiénes Somos"
        Then the user should see the about us section