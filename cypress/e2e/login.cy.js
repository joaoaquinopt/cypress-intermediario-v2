/// <reference types="Cypress" />

describe('Access to GitLab', () => {

    it('Login with Success', () => {
        cy.login_success()
        cy.get('.qa-user-avatar').should('be.visible')
    });
    
});