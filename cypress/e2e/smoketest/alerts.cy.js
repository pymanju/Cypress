
describe('Automation - Working with Alerts', function () {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    })

    it.only('Cypress Test Case - Simple Alert', function () {

        cy.contains('Click for JS Alert').click();

        cy.on('window:alert', (str) => {

            expect(str).to.equal(`I am a JS Alert`)
            return true
        })
    })

    it.only('Cypress Test Case - test Confirm Alert - Cancel', function () {

        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', () => {
            return true;
        })
    })
})