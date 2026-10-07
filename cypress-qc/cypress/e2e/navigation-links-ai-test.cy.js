describe("Header Navigation", () => {
    it("Check All Navigation Links", () => {
        cy.prompt([
            'visit https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235',
            'verify header navigation menu is visible',
            'click on each navigation link one at a time',
            'verify that the destination page successfully loads',
            
        ])

    })
})