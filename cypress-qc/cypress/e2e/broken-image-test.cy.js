describe("Images", () => {

    it("Check images", () => {
  
      cy.visit('/?_ab=0&_fd=0&_sc=1&preview_theme_id=155066925235')
  
      cy.get('img:visible').each(($img) => {
  
        const src = $img.prop('src')
        const alt = $img.attr('alt')
  
        cy.log(`Image: ${src}`)
        cy.log(`Alt: ${alt}`)
  
        expect(src).to.not.be.empty
        expect($img[0].naturalWidth).to.be.greaterThan(0)
  
      })
  
    })
  
  })