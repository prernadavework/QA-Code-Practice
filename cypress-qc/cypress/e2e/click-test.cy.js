describe('OC Mounts Homepage QC', () => {

    it('checks homepage', () => {

        cy.visit('https://ocmounts.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=142251753606')

        cy.contains('Click Here for More')
            .click()

    })

})