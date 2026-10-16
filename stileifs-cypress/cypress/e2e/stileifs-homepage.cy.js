
describe("Stile ifs -Homepage", () => {
  beforeEach(() => {
    cy.visit("https://stileifs.com/en");

  });

  //check homepage load
  it("should load homepage", () => {
    cy.url().should('include', "stileifs.com");
    cy.get('body').should('be.visible').then(($el) => {
      $el.css('outline', '4px solid red')
    });
  });

  //check logo visible
  it("should load site logo", () => {
    cy.get('.header-logo__image').should('be.visible').then(($el) => {
      $el.css('outline', '4px solid red')
    });
  })


  // check navigation loads
  it("should load site navigation", () => {

    //woman
    cy.contains('a', 'Woman').should('be.visible').and('have.attr', 'href').then((url) => {
      expect(url).to.not.be.empty
      cy.log(`woman link : ${url}`)
    })
      .then(() => {
        cy.contains('a', 'Woman').then(($el) => {
          $el.css('outline', '4px solid red')
        })
      });




    //man
    cy.contains('a', 'Man').should('be.visible').and('have.attr', 'href').then((url) => {
      expect(url).to.not.be.empty
      cy.log(`man link : ${url}`)
    })
      .then(() => {
        cy.contains('a', 'Man').then(($el) => {
          $el.css('outline', '4px solid red')
          $el.click();
        })
      });

    //contact

  });



  it('should check the Contact link in the header', () => {
    cy.get('.header__columns').should('be.visible')
      .contains('a span', 'Contact')
      .and('have.attr', 'href')
      .then((url) => {
        expect(url).to.not.be.empty
        cy.log(`Header Contact link: ${url}`)
      })

    cy.get('header')
      .contains('a', 'Contact')
      .then(($el) => {
        $el.css('outline', '4px solid red')
      })
  })


  // homepage content
  it('should display the homepage content', () => {
    cy.contains('Explore Collection')
      .should('be.visible').then(($el) => { $el.css('outline', '4px solid red') });

    cy.contains('Discover the Selection')
      .should('be.visible');
  });

  it('should display hero content', () => {
    cy.get('deferred-media.spacing-style > video').should('be.visible');
  })
}) 