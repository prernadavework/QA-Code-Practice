
describe("Cart Update On Add to Cart", () => {
    it("Cart Updates", () => {
        cy.prompt([
            'Visit the product page at "https://stileifs.com/en/products/alexander-mcqueen-black-cotton-chunky-sneakers?variant=53674062414163"',

            'Check header cart icon is visible',
            'Click on cart icon on header',
            'Check the message "cart is empty" is visible',
            'Check close icon is visible in cart drawer',
            'Click on close icon on drawer',
            'Click on Add to Cart Button',
            'Check header cart icon has badge with number indicating cart items count',
            'Click on cart icon on header',
            'Verify Product is visible in cart drawer',
            'Check Product Quantity is visible in cart drawer',
            'Click on increament button icon in quantity button',
            'Check quantity is increased',
            'Check close icon is visible in cart drawer',
            'Click on close icon on drawer',
            'Scroll to you may also like section',
            'Check product card is visible',
            'Hover over the first visible product card',
            'Verify on hover action button is visible',
            'Click on choose action button',
            'Check product detail Pop up is visible',
            'Check product detail pop up has image visible',
            'Check variant selection input is visible',
            'Click variant selection input',
            //'Click on "variant-option__select" input',
            // 'On Click Check variant dropdown is visible'

        ]);
    });
});
