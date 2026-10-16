export function highlightNavigation() {
    const links = ['Woman', 'Man', 'Contact', 'Brands']

    links.forEach((name) => {
        cy.get('#header-component')
            .find('a:visible')
            .contains('a', new RegExp(`^\\s*${name}\\s*$`, 'i'))
            .filter((index, el) => el.innerText.trim() === name)
            .first()
            .should('be.visible')
            .and('have.attr', 'href')
            .and('not.be.empty')

    })
}

export function checkNavigationRedirect(name) {
    cy.get('#header-component')
    .find('a:visible')
        .contains('a', new RegExp(`^\\s*${name}\\s*$`, 'i'))
        .filter((index, el) => el.innerText.trim() === name)
        .first()
        .should('be.visible')
        .then(($el) => {
            const href = $el.attr('href')

            expect(href, `${name} href`).to.be.a('string').and.not.be.empty

            cy.wrap($el).click()
        })

    cy.location('pathname').should('not.include', '/404')

    cy.get('body').should('be.visible').then(($body) => {
        expect($body.text().toLowerCase()).not.to.include('page not found')
    })
}