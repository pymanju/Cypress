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
// Cypress.Commands.add('login', (email, password) => { ... })
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
require('cypress-downloadfile/lib/downloadFileCommand')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('login', () => {

   //   var menuitems={
   //      value1:"Admin",
   //      value1:"PIM",
   //      value1:"Leave",
   //      value1:"Time",
   //      value1:"Recuriment",
   //      value1:"My Info",

   //   }

  

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[type="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
            // Assertions
cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //cy.contains('menuitems[i]').should("be.visible") 
   
 })


  






  




