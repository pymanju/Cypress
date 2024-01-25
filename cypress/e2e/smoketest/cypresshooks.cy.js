const { beforeEach } = require("mocha")




describe('cypress hooks', () => {
  afterEach("afterEach all",  ()    =>{ 
    cy.log("before all this line print")
  })
    
  after("after all",  ()    =>{ 
    cy.log("after all this line print")
  })
    
  beforeEach("before all",  ()    =>{ 
    cy.log("beforeeach all this line print")
  })
    

  before("before all",  ()    =>{ 
    cy.log("before all this line print")
  })
    
    it('1st test case', () => {
     cy.log("this is first it block body") 
    })

    it('2nd test case', () => {
      cy.log("this is second  it block body") 
    })
    it('3rd test case', () => {
      cy.log("this is third it block body") 
    })

  })