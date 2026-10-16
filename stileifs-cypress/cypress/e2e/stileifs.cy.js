
import {
    checkHomepageLoads,
    checkLogo
} from '../support/stileifs/homepage'

import {
    highlightNavigation,
    checkNavigationRedirect
} from '../support/stileifs/navigation'

import {
    checkHomepageContent,
    checkHeroVideo
} from '../support/stileifs/content'

// Choose which tests to run here.
// Use 'all' to run every test.
const selectedTests = ['all']

describe('Stile IFS - Homepage QC', () => {
    beforeEach(() => {
        cy.visit('https://stileifs.com/en')
    })

    // if (selectedTests.includes('all') || selectedTests.includes('homepage')) {
   
    //     it('should load homepage', checkHomepageLoads)
    //     it('should display logo', checkLogo)
    // }

    // if (selectedTests.includes('all') || selectedTests.includes('navigationHighlight')) {
    //     it('should highlight navigation links', highlightNavigation)
    // }

    if (selectedTests.includes('all') || selectedTests.includes('navigationRedirect')) {
        ['Woman', 'Man', 'Contact', 'Brands'].forEach((name) => {
            it(`should open ${name} without a 404 page`, () => {
                checkNavigationRedirect(name)
            })
        })
    }

    // if (selectedTests.includes('all') || selectedTests.includes('content')) {
    //     it('should display homepage content', checkHomepageContent)
    //     it('should display hero video', checkHeroVideo)
    // }
})
