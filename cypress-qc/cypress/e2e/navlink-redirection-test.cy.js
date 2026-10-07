describe("Header Navigation", () => {

  it("Verify navigation links", () => {

    cy.visit('/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235')

    cy.get('a.header__menu-item')
      .filter(':visible')
      .each(($link) => {

        const name = $link.text().trim()
        const url = $link.prop('href')

        cy.log(`Checking: ${name}`)
        cy.log(`URL: ${url}`)

        expect(url).to.not.be.empty

        cy.request(url)
          .its('status')
          .should('be.within', 200, 399)

      })

  })

})