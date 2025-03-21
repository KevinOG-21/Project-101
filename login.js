import { Given, When, defineStep, Then } from "@badeball/cypress-cucumber-preprocessor";
const homeSaucePage = require('../cypress/e2e/features/homeSauce')


Given('A user lands on the Login page',() =>{
    cy.visit('https://www.saucedemo.com/')
});

When('A user enters the username {string}',(username)=>{
    //cy.get('#user-name').type(username)
    console.log("Received username:", username);
    homeSaucePage.typeUsername(username)
});

defineStep('A user enters the password {string}',(passO)=> {
    //cy.get('#password').type(passO)
    console.log("Received password:", password);
    homeSaucePage.typePassword(passO)
});

defineStep('The user clicks on the Login button', ()=> {
    //cy.get('#login-button').click()
    homeSaucePage.clickLogin()
});

Then('A user successfully gets login', ()=> {
    cy.url().should('contains','/inventory.html')
});

Then('A user is failed to login & error message is displayed',()=>{
   // cy.get('h3').should('contain','Epic sadface: Sorry, this user has been locked out.')
   homeSaucePage.elements.errorMessage().should('contain','Epic sadface: Sorry, this user has been locked out.')    
})


Then('A user is failed to login due to invalid username or password & error message is displayed',()=>{
    // cy.get('h3').should('contain','Epic sadface: Sorry, this user has been locked out.')
    homeSaucePage.elements.errorMessage().should('contain','Epic sadface: Username and password do not match any user in this service')    
})


//-3
Given('A user is on the Product page',()=>{
    cy.url().should('contains','/inventory.html')
})

When('A user clicks on the SauceLabs Backpack',()=>{
    cy.get('#item_4_title_link').click()
})

defineStep('A user adds the Product to cart', ()=>{
    cy.get('#add-to-cart').click()
})

defineStep('The user checks if the Product is added to cart',()=>{
    cy.get('#shopping_cart_container')
    cy.scrollTo(topRight)
})

Then('A user is back on the Product page where Backpack Product has remove option',()=>{
    cy.get('#back-to-products').click()
    cy.get('#remove-sauce-labs-backpack').should('contain','Remove')
})


Then('I print {string}', (message) => {
    console.log("DEBUG:", message);
  });
