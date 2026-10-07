describe("Navigation Test",()=>{

    it("Given navigation item",()=>{
        cy.prompt([
            'visit https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235',
            'varify navigation menu in header contains "Amsteel-Blue" navigation item is visible',
            'click the "Amsteel-Blue" navigation item in header',
            'verify page loads',
            'varify page contains breadcumb',
            'check page heading text contains "Amsteel-Blue"',
            'verify page contains element "#dropdown-button"',
            'click on "#dropdown-button"',
            // 'verify it opens dropdown'

            
        ])
        .then(($el)=>{
            $el.css('outline', '4px solid red')
        })
    })
})