import data from "../fixtures/login.json"
import login from "../pages/login.po"
import addemployee from"../pages/pim.po"
import employee from "../pages/employee.po"
//import data from "../fixtures/pim.json"
describe('add employee functionality',()=> {

    it ('verify add employee in the list',() => {
    cy.visit(Cypress.env("loginurl"))
   login.usernameInput().type(data.username)
    login.passwordInput().type(data.password)
    login. loginButton().click()
    login.dashboard().should('be.visible')
    login.pim().click()
    addemployee.Addemployee().click()
    addemployee.firstname().type(data.firstname)
    addemployee.lastname().type(data.lastname)
    addemployee.savebutton().click()
    addemployee.sucessMessage()
    addemployee.employeeList().click()
    addemployee.employeeName().type("swetha")
   addemployee.search().click()
   cy.get('[class="oxd-table-cell oxd-padding-cell"]').eq(2).should('have.text','swetha ')

    })
    
    })