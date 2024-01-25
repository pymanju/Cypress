class Addemployee{

    Addemployee(){
        return cy.contains('Add Employee').first()
    }
    firstname(){
        return cy.get('input[name="firstName"]')
    }
    lastname(){
        return cy.get('input[name="lastName"]')
    }
    savebutton(){
        return cy.contains(' Save')
    }
     sucessMessage(){
    return cy.contains('Successfully Saved').should("have.text",'Successfully Saved')
     }
     employeeList(){
        return cy.contains('Employee List')
     }
     employeeName(){
        return cy.get('input[placeholder="Type for hints..."]').first()
     }
    search(){
        return cy.contains(' Search').first()
    }

    }


const addemployee=new Addemployee()
export default addemployee