describe("Broken Image AI Test", () => {
    it("Images Loads", () => {
        cy.prompt([

            'visit /?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235',
            'Find every visible Images on homepage',
            "Check for each image src URL is not empty",
            "Check for every visible image width is greater than 0",
            'do not stop after checking the first image check every visible image'
        ]
        )
    })

})
