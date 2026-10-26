describe("Product Recommendations", () => {
    it("Checks recommended product cards", () => {
        cy.prompt([
            'Visit the product page at "https://stileifs.com/en/products/alexander-mcqueen-black-cotton-chunky-sneakers?variant=53674062414163"',
            'Scroll to "product-recommendations-section" section into view',
            'Verify that the element with ID "product-recommendations-section" is visible',
            'Verify that at least one product card inside the product recommendations section is visible',
            'Hover on that "product-card" Check "quick-add__button--choose" button is visible',
            //'Check "quick-add__button--choose" button is visible on hover over "product-card"' 
            // 'Verify that the hover action button inside that same product card is visible'
        ]);
    });
});