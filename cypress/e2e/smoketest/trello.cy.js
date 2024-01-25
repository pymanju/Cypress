describe('Validate Trello Login functionality', function () {
  
  

 it('Cypress Test Case ', function () {

      
    cy.visit("https://trello.com/home")
 cy.contains("Log in").click()
 //cy.origin("https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3FreturnUrl%3D%252F%26display%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D%26aaOnboarding%3D%26updateEmail%3D%26traceId%3D656ee013ae7c48558276ca9597896b49%26ssoVerified%3D%26createMember%3Dfalse&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D&email=pymanju0106%40gmail.com&login_hint=pymanju0106%40gmail.com&restrict=true",()=>{
  cy.origin("https://id.atlassian.com",()=>{
    cy.get('#username').type("pymanju0106@gmail.com")
    //cy.get('input[name="password"]').type("PYmanju01")
    cy.get('.css-178ag6o').eq(0).click()
    
  })
  
 
  } )
 
  })
//})


