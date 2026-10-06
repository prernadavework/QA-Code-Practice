describe('Cypress AI Practice', () => {

    it('uses AI to interact with the page', () => {
  
      cy.prompt([
        'visit https://example.cypress.io',
        'click the Commands link',
        'click the Querying link',
        'verify that the page contains the text "Querying"',
      ])
  
    })
  
  })