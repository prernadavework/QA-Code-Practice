describe('OCMounts Scroll Practice', () => {

    it('scrolls to the footer', () => {

        cy.visit('https://ocmounts.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=142251753606')

        cy.get('footer')
            .scrollIntoView()

        cy.get('footer')
            .should('be.visible')

    })

})
