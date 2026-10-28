describe("Cart Process Test",()=>{
    it("It Checks Cart Process",()=>{
        const producttName="Givenchy – Shark Ankle Boots for Women in Black Calfskin with Gold Detail";
        cy.prompt([
            'Visit the product page at "https://stileifs.com/en/"',
            'Find Product Grid Section, Scroll to that section.',
            `Find Product ${producttName}`,
            `Hover on the Product image with name ${producttName}`,
            'Click the "Choose" button that appears',
            'Find add to cart button on popup',
            'Click add to cart button on popup',
            'Click on  cart icon on header',
            'Verify Checkout button is visible on cart drawer',
            'Click on checkout button'
        ]);
    })
})