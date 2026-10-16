export function checkHomepageLoads() {
    cy.url().should('include', 'stileifs.com')
    cy.get('body').should('be.visible')
}

export function checkLogo() {
    cy.get('.header-logo__image')
        .should('be.visible')
        .then(($el) => {
            $el.css('outline', '4px solid red')
        })
}