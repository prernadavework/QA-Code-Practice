describe("Check Product Cards", () => {

    it("Product Cards Check", () => {
  
      cy.prompt([
        'visit https://fullpullrope.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235',
        'find the "Best Sellers" section',
        'verify that the Best Sellers section is visible',
        'find all visible product cards inside the Best Sellers section',
        'verify that there is at least one visible product card',
        'verify that every visible product card has a product title',
        'verify that every visible product card has a price'
      ])

      cy.get('.product-slide').each(($card) => {

        cy.wrap($card)
          .find('.card__heading')
          .then(($title) => {
            $title.css('outline', '4px solid red')
          })
      
        cy.wrap($card)
          .find('.price-item')
          .then(($price) => {
            $price.css('outline', '4px solid blue')
          })
      
      })
  
    })
  
  })