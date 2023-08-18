Feature: Navigation Product

    Background: 
        Given The user selects the city "La Paz"
        And The user goes to the login page
        And The user is on login page
        And The user fills the credentials with email and password

    
    @Acceptance
    Scenario Outline: Select Different Filters
        Given The user selects the section "Muebles" and subsection "Mesas"
        When The user selects <value> as value for the sort filter
        Then the user should see at least one product

        Examples:
            |value          |
            |Más reciente   |
            |Menor Precio   |
            |Mayor Precio   |
            |Más vendidos   |
            |A - Z          |
            |Z - A          |
            |Mejor Descuento|
