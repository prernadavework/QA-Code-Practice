describe("Images", () => {

    it("Check images", () => {

        cy.visit('https://the-internet.herokuapp.com/broken_images')

        cy.get('img').each(($img) => {

            const src = $img.prop('src')
            const alt = $img.attr('alt')
            const naturalWidth = $img[0].naturalWidth
          
            cy.log(`Image: ${src}`)
            cy.log(`Alt: ${alt}`)
            cy.log(`Natural Width: ${naturalWidth}`)
          
            if (naturalWidth === 0) {
              cy.log('❌ Image NOT LOADED')
              $img.css('border', '4px solid red')
            }
          
          })
        // cy.get('svg:visible').each(($svg) => {

        //     cy.log(`SVG: ${$svg.attr('class')}`)

        //     $svg.css('outline', '4px solid red')

        // })
        // cy.get('*:visible').each(($el) => {

        //     const backgroundImage = $el.css('background-image')

        //     if (
        //         backgroundImage &&
        //         backgroundImage !== 'none' &&
        //         backgroundImage.includes('url(')
        //     ) {

        //         cy.log(`Background Image: ${backgroundImage}`)

        //         $el.css('outline', '4px solid red')
        //     }

        // })
        // cy.get('*:visible').each(($el) => {

        //     const backgroundImage = $el.css('background-image')
        
        //     if (
        //         backgroundImage &&
        //         backgroundImage !== 'none' &&
        //         backgroundImage.includes('url(')
        //     ) {
        
        //         cy.log(`Background Image: ${backgroundImage}`)
        
        //         $el.css('outline', '4px solid red')
        //     }
        
        // })

    })

})