describe('Navigation', () => {
	it('should navigate to the search page', () => {
		// Start from the index page
		cy.visit('/');

		cy.wait(2000);

		// Find a link with an href attribute containing "search" and click it
		cy.get('a[href*="search"]').click({
			waitForAnimations: false,
			force: true,
		});

		// The new url should include "/search"
		cy.url().should('include', '/search');

		cy.wait(3000);

		// Type query into search bar
		cy.get('input').type('Offerwall', { delay: 500 });

		// The new page should contain an h1 with "search page"
		cy.get('p').contains('Now complete task an earn money while having fun');
	});
});

export {};
