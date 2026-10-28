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
            `Varify cart contains product with variant "${targetVariant}"`,
            'find close icon on cart drawer, click it.',
            'Find sticky add to cart at the bottom of the product page before footer',
            'On Sticky add to cart find add to cart button, click it'
        ]);
    });
});