import { Given } from "@badeball/cypress-cucumber-preprocessor"

Given('the user sees the text {string}', (text) => {
  cy.contains(text)
})