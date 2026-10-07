describe("Full pull search", () => {
    it("Search Ai prompt test", () => {
        cy.prompt([
            'visit https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235',
            'find the visible search input',
            'search for "Amsteel"',
            'verify search results are displayed',
            'verify at least one product related to "Amsteel" is visible',
            'verify at least one categories related to "Amsteel" is visible',
            'verify at least one Pages related to "Amsteel" is visible',
            'varify "View All" button is visible in search result',
            'click on "View all" button on search result',
            // 'verify page loads',
            // 'verify page loaded is "Search" or "Search Result" page'

        ])
            .then(($el) => {
                $el.css('outline', '4px solid red')
            })
    })
})