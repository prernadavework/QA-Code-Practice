export function checkHomepageContent() {
    cy.contains('Explore Collection').should('be.visible')
    cy.contains('Discover the Selection').should('be.visible')
}

export function checkHeroVideo() {
    cy.get('deferred-media.spacing-style > video')
        .should('be.visible').then(($el) => {
            $el.css('outline', '4px solid red');
            $el.css('border', '4px solid red')
        })
}