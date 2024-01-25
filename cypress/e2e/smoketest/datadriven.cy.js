
 ///<reference types="cypress"/>

import data from "../../fixtures/register.json"

describe('Automation - Working With Data driven testing json', function () {

  data.forEach((data) =>{

        it('Cypress Test Case - Understanding Data driven testing json', function () {
            cy.visit('https://the-internet.herokuapp.com/login'); 
            cy.get('#username').type(data.username);
            cy.get('#password').type(data.password);
            cy.get('button[type="submit"]').click();
            cy.get('.flash.error').should("be.visible")

          })

    })
    
  })


     