


///<reference types="cypress"/>


describe('Automation - Write file and Read file ', function () {

    it('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/fixtures/module1/visible.text', "manju\n")

 
     
    })


    it('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/visible.text', "sathish",{flag: 'a+'});
     
    })

    it('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/visible6.json', { firstname: 'H', lastname: 'Manjula'});
     
    })

    it.skip('Cypress Test Case - Validation of Data both Text file and Json ', function () {

        cy.fixture('addjobtittle.json').as("jsondata")

        cy.get('@jsondata').then((data)=>{
            cy.readFile('cypress/fixtures/addjobtittle.json').should("eq", data)

        })
       
         cy.readFile('cypress/fixtures/addjobtittle.json').should('exist')

       

          cy.readFile('cypress/fixtures/module1/visible.text').should('contain','manju');

         cy.readFile('cypress/fixtures/module1/visible.text').should('contain','manju\nsathish') 
         cy.readFile('cypress/fixtures/module1/visible.text').should('exist')
      
    })


    it.skip('Cypress Test Case - Capture Text ', function () {
        
        cy.visit("/")
        cy.xpath(login.Orangehrmlogo).should("be.visible")
        //actions
        cy.login(logindata.username, logindata.password)
    
        //Assertions
    
        cy.url().should("eq", logindata.dashboardurl)
    
        cy.url().should("include", logindata.partialdashurl)
    
        //or
        cy.contains(dashboard.dashboardpageheader()).should("be.visible")

        cy.contains("Buzz").click()
    
       cy.xpath("(//div[@class='orangehrm-buzz-post-body']/p)[3]").then((txt) =>{

             var textvalue = txt.text()

             cy.writeFile('cypress/fixtures/module1/test5.txt', textvalue)
             cy.writeFile('cypress/fixtures/module1/test5.json', { text: textvalue});    

       })
    })

  })