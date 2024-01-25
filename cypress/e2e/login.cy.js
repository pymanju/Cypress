describe('template spec', () => {

  // 1 ST APPROACH
  // it('passes', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //       cy.get('input[name="username"]').type(Cypress.env("username"))
  //       cy.get('input[type="password"]').type(Cypress.env("password") )
  //       cy.get('button[type="submit"]').click()
  // })
  
  // it('passes', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //       cy.get('input[name="username"]').type(Cypress.env("username"))
  //       cy.get('input[type="password"]').type(Cypress.env("password") )
  //       cy.get('button[type="submit"]').click()
  // })
  
  // it('passes', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //       cy.get('input[name="username"]').type(Cypress.env("username"))
  //       cy.get('input[type="password"]').type(Cypress.env("password") )
  //       cy.get('button[type="submit"]').click()
  // })
  
  // it('passes', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //       cy.get('input[name="username"]').type(Cypress.env("username"))
  //       cy.get('input[type="password"]').type(Cypress.env("password") )
  //       cy.get('button[type="submit"]').click()
  // })
  
  // 2nd approach 

beforeEach('',()=>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
  cy.get('input[name="username"]').type(Cypress.env("username"))
  cy.get('input[type="password"]').type(Cypress.env("password") )
  cy.get('button[type="submit"]').click()
})

  it('passes', () => {
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  })
  
  it('passes', () => {
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
       
  })
  
  it('passes', () => {
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
        
  })
  
  it('passes', () => {
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   
       
  })
 
})