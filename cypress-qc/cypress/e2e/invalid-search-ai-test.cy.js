describe("invalid search test", () => {
    it("Invalid input search result", () => {
        cy.prompt([
            'visit https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235',
            'find the visible search input',
            'search for "PX2@#$%%#(@Y*&#"',
            'verify search results are displayed',
            'verify search results displays message text contains "nothing found"'
        ])
            .then(($el) => {
                $el.css('outline', '4px solid red')
            })
    })
})