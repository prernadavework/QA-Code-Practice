describe('Check Should Assertion', () => {

    it('Check RAM predictive search', () => {

        cy.visit('https://ocmounts.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=142251753606')

        cy.get('.search-form__input')
            .filter(':visible')
            .should('have.length', 1)
            .click()
            .type('RAM')

        cy.wait(1000)

        cy.get('.predictive-search')
            .should('be.visible')

        cy.get('.predictive-search__results-list')
            .should('have.length.greaterThan', 0)


        cy.get('.predictive-search__results-list').each(($result) => {

            cy.wrap($result).should('contain.text', 'RAM')
        })
    })

})