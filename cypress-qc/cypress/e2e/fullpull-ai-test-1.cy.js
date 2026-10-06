describe('Cypress AI Practice', () => {

    it('uses AI to interact with the page', () => {
  
      cy.prompt([
        'visit https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235',
        'verify the homepage contains the announcment text "We are your trusted source for synthetic lines and rigging, providing solutions to commercial, industrial, construction, B2B, and consumers across the USA."',
      ])
     
  
    })
  
  })