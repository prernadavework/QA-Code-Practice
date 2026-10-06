describe('RAM Search QC', () => {

  it('should open the website', () => {

    cy.visit('https://ocmounts.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=142251753606')

    cy.contains('Shop by Device, Brand and Model')
      .should('be.visible')

  })

})