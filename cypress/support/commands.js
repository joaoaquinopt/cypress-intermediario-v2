// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login_success', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
    ) => { 
    cy.visit('/');
    cy.get('#user_login').type(user)
    cy.get('#user_password').type(password)
    cy.get('[data-qa-selector="sign_in_button"]').click()
    cy.get('.blank-state-welcome-title').contains('Welcome to GitLab')
});

Cypress.Commands.add('logout_success', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
  })


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })