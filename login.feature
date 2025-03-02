
Feature: Login Feature

    Feature This Feature is required for a user to Login.

    Scenario: Success Login-1

    Given A user lands on the Login page
    When  A user enters the username "standard_user"
    And  A user enters the password "secret_sauce"
    And The user clicks on the Login button
    Then A user successfully gets login

     Scenario: Failed Login-2

    Given A user lands on the Login page
    When  A user enters the username "locked_out_user"
    And  A user enters the password "secret_sauce"
    And The user clicks on the Login button
    Then A user is failed to login & error message is displayed


    Scenario: Adding SauceLabs Backpack to cart-3

    Given A user lands on the Login page
    When  A user enters the username "standard_user"
    And  A user enters the password "secret_sauce"
    And The user clicks on the Login button
    Given A user is on the Product page
    When  A user clicks on the SauceLabs Backpack
    And  A user adds the Product to cart
    And The user checks if the Product is added to cart
    Then A user is back on the Product page where Backpack Product has remove option