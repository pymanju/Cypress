class LoginPage{
orangeHRMLogo(){

    return  ' img[alt="company-branding"]'

}
    usernameInput(){

        return cy.get('input[name="username"]')
    }
    passwordInput(){
        return cy.get( 'input[type="password"]')
    }
       loginButton(){
        return cy.get('button[type="submit"]')
    }
    dashboard(){
        return cy.get('a[class="oxd-main-menu-item active"]')
    }
    pim(){
        return cy.contains('PIM').first()
    }
    swetha(){
        
    }
}
const login=new LoginPage ()
 export default login
