@CI @UI
Feature: Login
    Background: 
        Given The user selects the city "La Paz"
        And The user goes to the login page

    @Acceptance
    Scenario: Login with valid credentials
        Given The user is on login page
        When The user fills the credentials with email and password
        Then The user should validate that he is logged in
    
    @Negative
    Scenario: Login with invalid credentials
        Given The user is on login page
        When The user fills the credentials with invalid credentials
        Then The user should validate that he is not logged in