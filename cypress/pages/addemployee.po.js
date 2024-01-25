class AddEmployee{
    AddemployeeSubmenu(){
        return 'Add Employee'
    }
    firstnameInput(){
        return 'input[name="firstName"]'
    }
    lastnameInput(){
        return 'input[name="lastName"]'
    }
    submitButton(){
        return  'button[type="submit"]'
    }
}

const addemployee1=new AddEmployee()

export default addemployee1