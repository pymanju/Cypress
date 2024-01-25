
describe('Automation - Working scrolling events', function () {
it.only('Cypress Test Case - Unstand Scrlling', function () {

      
    cy.visit("https://docs.cypress.io/api/commands/rightclick")

    cy.wait(10000)

    cy.get('.footer__copyright').scrollIntoView() 
  })

})