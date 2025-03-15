class homeSaucePage {
    

    elements = {
        userInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),

        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username) {
        this.elements.userInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    clickLogin() {
        this.elements.loginBtn().click()
    }

}

module.exports = new homeSaucePage();