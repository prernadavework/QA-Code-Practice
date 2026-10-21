
export function noResultsMessage() {
    cy.get('.search-action:visible')
        .first()
        .click()

    cy.get('input[name="q"]:visible', { timeout: 10000 })
        .first()
        .should('be.visible')
        .type('zztestproduct987654{enter}')

    cy.url().should('include', '/search')

    cy.contains('.search-results__no-results > p', 'No results found for')
        .should('be.visible')
        .then(($body) => {
            const elements = $body.find('*').filter((index, el) => {
                return el.children.length === 0 &&
                    el.textContent.includes('No results found for')
            })

            // expect(elements.length).to.be.greaterThan(0)
            // elements[0].style.outline = '4px solid red'
            // elements[0].style.backgroundColor = 'yellow'
        })
}


export function searchResults() {
    cy.get('input[name="q"]:visible')
        .first()
        .should('be.visible')
        .type('Givenchy{enter}');

    cy.url().should('include', '/search');

    cy.get('body').should('contain.text', 'Givenchy');
}
