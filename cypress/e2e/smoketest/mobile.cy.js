import { beforeEach } from "mocha"

describe(' pick the  moblie in the store', function () {


    beforeEach( "" ,() =>{
        cy.visit("https://demoblaze.com/index.html")
    })


    it('verify the product ', function () {

       
        cy.contains("Samsung galaxy s6").click()
        cy.url().should("eq", "https://demoblaze.com/prod.html?idp_=1")
        
        cy.contains("Add to cart").click()
       
        cy.contains("Cart").click()
        cy.get('.success > :nth-child(3)').then((txt) => {

            var currentprice = Number(txt.text() )
            cy.log(typeof currentprice)

             expect(currentprice).to.equal(360)





        })
        it('verify the product ', function () {

       
            cy.contains("Nokia lumia 1520").click()
            cy.url().should("eq", "https://demoblaze.com/prod.html?idp_=2")
            
            cy.contains("Add to cart").click()
           
            cy.contains("Cart").click()
            cy.get('.success > :nth-child(3)').then((txt) => {
    
                var currentprice = Number(txt.text() )
                cy.log(typeof currentprice)
    
                 expect(currentprice).to.equal(820)
    
    
    
    
    
            })
            






    })


})


})