describe('highlight found text', () => {
    it('find text and add border', () => {
        cy.visit('https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235')
        cy.get('#HeaderMenu-about-us > span').contains('About Us')
        .should('be.visible')
        .then(($el) => {
          $el.css('outline', '4px solid red')
        })
    })


})