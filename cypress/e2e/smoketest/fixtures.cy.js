
describe('Understanding fixtures', () => {
    
     before(function(){
        cy.fixture('register').then(function (data){
            this.data=data;   
        })
    
     })
      it('valid registration', () => {
      cy.visit( 'https://shop.demoqa.com/my-account/')
      cy.get('input[type="text"]').type(this.data.username)
       cy.get('#reg_email').type(this.data.emailid)
    })
  })

