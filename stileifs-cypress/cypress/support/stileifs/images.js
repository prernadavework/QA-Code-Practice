
export function checkImagesLoaded() {
    cy.get('img:visible').each(($img, index) => {

// https://the-internet.herokuapp.com/broken_images use this url to varify this test it has broken image demo
        const image = $img[0];
        
        if (image.complete && image.naturalWidth === 0) {
            cy.wrap($img).then(($image) => {
                $image.css({

                    'outline': '3px solid yellow',
                    'border': '3px solid yellow',
                    'background-color': '#ffcccc',
                    'width': '100%'
                });

                cy.log(`Image URL: ${$image.attr('src')}`);
            });
        }
        else {
            image.style.outline = '4px solid red'
            image.style.border = '4px solid red'
        }
    });
}