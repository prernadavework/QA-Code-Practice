describe("Product Recommendations", () => {
    it("Checks recommended product cards", () => {
        const targetVariant = 'EU42.5/US9.5';
        cy.prompt([
            'Visit the product page at "https://stileifs.com/en/products/alexander-mcqueen-black-cotton-chunky-sneakers?variant=53674062414163"',
            'Scroll to "product-recommendations-section" section into view',
            'Verify that at least one product card inside the "product-recommendations-section" is visible',    
            'Hover over first visible card',
            'Click the "Choose" button that appears',
            'Verify Product Detail Pop up is visible',
            `Inside the product popup, find the variant dropdown select "${targetVariant}" option`,
            'Inside the product popup, click on add to cart button',
            'On header find cart icon, click on cart icon',
            `Varify cart contains product with variant "${targetVariant}"`
            
            
            //'Click on select option input on popup'
            //'Click on "Quick add button"'
            
            //'Check "quick-add__button--choose" button should be visible on hover',
            //'Check "quick-add__button--choose" button is visible on hover over "product-card"' 
            // 'Verify that the hover action button inside that same product card is visible'
        ]);
    });
});