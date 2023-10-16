/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

describe('Create New Project on the GitLab', () => {

    beforeEach(() => {
        cy.login_success()
    })
    
    it('Create a project successfully', () => {
        const newProject = {
            nameProject: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(4)
        }

        cy.gui_create_project(newProject.nameProject, newProject.description)

        cy.url().should('include', newProject.nameProject)
        cy.contains(newProject.nameProject).should('be.visible')
        cy.contains(newProject.description).should('be.visible')
    });
});