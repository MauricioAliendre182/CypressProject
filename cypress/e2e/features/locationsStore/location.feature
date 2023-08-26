Feature: Location

    Background: 
        Given The user selects the city "Cochabamba"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password

    @Acceptance
    Scenario Outline: Select different Casa Ideas locations
        Given The user goes to the locations section
        When The user selects <store> as store to be selected
        Then the user should see <storeInMaps> as store located in Google Maps

        Examples:
            |store       |storeInMaps              |
            |Mega        |La Paz - Megacenter      |
            |Multicine   |La Paz - Multicine       |
            |San Miguel  |La Paz - San Miguel      |
            |Ventura     |Santa Cruz - Ventura Mall|
            |Los Cusis   |Santa Cruz - Av. Banzer  |
            |Pando       |Cochabamba               |