
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

import {
    checkVisibleLinksHaveHref
} from '../support/stileifs/links'

import {
    checkImagesLoaded
} from '../support/stileifs/images'

import {
    searchResults,
    noResultsMessage
} from '../support/stileifs/search'
const selectedTests = ['searchresult']

describe('Stile IFS - Homepage QC', () => {
    beforeEach(() => {
        cy.visit('https://stileifs.com/en')
    })

    // if (selectedTests.includes('all') || selectedTests.includes('homepage')) {

    //     it('should load homepage', checkHomepageLoads)
    //     it('should display logo', checkLogo)
    // }



    // if (selectedTests.includes('all') || selectedTests.includes('content')) {
    //     it('should display homepage content', checkHomepageContent)
    //     it('should display hero video', checkHeroVideo)
    // }


    // if (selectedTests.includes('all') || selectedTests.includes('navigationHighlight')) {
    //     it('should highlight navigation links', highlightNavigation)
    // }

    // if (selectedTests.includes('all') || selectedTests.includes('navigationRedirect')) {
    //     ['Woman', 'Man', 'Brands', 'Contact'].forEach((name) => {
    //         it(`should open ${name} without a 404 page`, () => {
    //             checkNavigationRedirect(name)
    //         })
    //     })
    // }

    if (selectedTests.includes('all') || selectedTests.includes('links')) {
        it('should check visible links have href attributes',
            checkVisibleLinksHaveHref)
    }

    if (
        selectedTests.includes('all') ||
        selectedTests.includes('images')
    ) {
        it('should check homepage images load',
            checkImagesLoaded)
    }

    if (
        selectedTests.includes('all') ||
        selectedTests.includes('searchresult')
    ) {
         it('should display matching search results', searchResults)

        it('should display a no-results message', noResultsMessage)
    }

})
