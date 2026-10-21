
export function noResultsMessage() {
    cy.get('.search-action:visible')
        .first()
        .click()

    cy.get('input[name="q"]:visible', { timeout: 10000 })
        .first()
        .should('be.visible')
        .type('zztestproduct987654{enter}')

    cy.url().should('include', '/search')


    cy.get('.search-results__no-results > p').should('contain.text', 'No results found for').then(($el) => {
        $el.each((index, el) => {
            el.style.border = '4px solid red'
            el.style.backgroundColor = 'yellow'
        })
    });
}



export function searchResults() {
    cy.get('.search-action:visible')
        .first()
        .click()

    cy.get('input[name="q"]:visible', { timeout: 10000 })
        .first()
        .should('be.visible')
        .type('Givenchy{enter}')

    cy.url().should('include', '/search')



    // check specifically for products not whole body
    cy.get('a[href*="/products/"]:visible')
        .should('have.length.greaterThan', 0);
    //

    cy.get('body').then(($body) => {
        const matches = $body.find('*').filter((index, el) => {
            return el.children.length === 0 &&
                el.textContent.includes('Givenchy') &&
                Cypress.$(el).is(':visible')
        })

        expect(matches.length, 'visible elements containing Givenchy')
            .to.be.greaterThan(0)

        matches.each((index, el) => {
            el.style.border = '4px solid red'
            el.style.backgroundColor = 'yellow'
        })
    })
}
