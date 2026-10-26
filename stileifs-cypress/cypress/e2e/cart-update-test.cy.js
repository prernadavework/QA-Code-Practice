describe('Stile IFS - Cart count change', () => {

    it('should increase cart quantity after adding a product', () => {

        cy.visit(
            'https://stileifs.com/en/products/alexander-mcqueen-black-cotton-chunky-sneakers?variant=53674062414163'
        );
        cy.request('/cart.js').then((response) => {
            expect(response.status).to.equal(200);


            const cart = typeof response.body === 'string'
            ? JSON.parse(response.body)
            : response.body;

            expect(cart.items).to.be.an('array');

            const before = cart.items.reduce(
                (total, item) => total + item.quantity,
                0
            );
            cy.log('Cart quantity before: ' + before);
            cy.intercept('POST', '**/cart/add*').as('addToCart');

            // cy.get('button:visible').each(($button, index) => {
            //     cy.log(
            //         'Button ' + index + ': ' + $button.text().trim()
            //     );
            // });

            cy.contains('button:visible', /add to cart/i)
            .should('be.visible')
                .first()
                .click();

            cy.wait('@addToCart');

            cy.request('/cart.js').then((response) => {
                expect(response.status).to.equal(200);


                const cart = typeof response.body === 'string'
                ? JSON.parse(response.body)
                : response.body;
    
                expect(cart.items).to.be.an('array');

                const after = cart.items.reduce(
                    (total, item) => total + item.quantity,
                    0
                );

                cy.log(expect(after).to.be.greaterThan(before));
                 expect(after).to.be.greaterThan(before);

            });

        });

         
    }); 
});