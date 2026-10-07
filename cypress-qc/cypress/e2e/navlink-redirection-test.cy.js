describe("Header Navigation", () => {

    it("Verify navigation links", () => {
  
        cy.visit('https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235')

        cy.get('#HeaderMenu a')
          .filter(':visible')
          .then(($links) => {
        
            const navigationLinks = [...$links].map((link) => ({
              name: link.innerText.trim(),
              url: link.href
            }))
        
            cy.log(JSON.stringify(navigationLinks))
          })
  
    })
  
  })