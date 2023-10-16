/// <reference types="Cypress" />

describe('Access to GitLab', () => {
    it('Login with Success', () => {
        const user = Cypress.env('user_name')
        const password = Cypress.env('user_password')
        const options = { cacheSession: false }
        
        cy.login_success(user, password, options)
        cy.get('.qa-user-avatar').should('be.visible')
    });
    
});