
export function checkVisibleLinksHaveHref() {
    cy.get('a').each(($link) => {
        cy.wrap($link)
            .should('have.attr', 'href')
            .and('not.be.empty')

        $link[0].style.outline = '4px solid red'
    })
}