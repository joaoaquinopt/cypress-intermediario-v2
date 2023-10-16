/// <reference types="Cypress" />

describe('Logout', () => {
    beforeEach(() => {
      cy.login_success()
      cy.visit('/')
    })
  
    it('successfully', () => {
      cy.logout_success()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })