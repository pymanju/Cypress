import { Given,then } from "cypress-cucumber-preprocessor/steps";

//const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit('https://google.com')
})

Then(' I see "Google" in the title')