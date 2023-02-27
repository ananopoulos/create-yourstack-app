import { Given } from "@badeball/cypress-cucumber-preprocessor"

Given('the user visits the page at route {string}', (route) => {
  cy.visit(route)
})

Given('the user clicks on the {string} link', (route) => {
  cy.get('a').contains(route).click()
})

Given('the user clicks on the link with href {string}', (href) => {
  cy.get(`a[href*="${href}"]`).click()
})

Given('the user navigates to the page at route {string}', (route) => {
  cy.location('pathname').should('eq', route)
})

Given('the user is using a desktop', () => {
  cy.viewport('macbook-13')
})