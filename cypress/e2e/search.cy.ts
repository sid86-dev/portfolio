describe('Navigation', () => {
	it('should navigate to the search page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000');

		// Find a link with an href attribute containing "search" and click it
		cy.get('a[href*="search"]').click();

		// The new url should include "/search"
		cy.url().should('include', '/search');

		// Type query into search bar
		cy.get('input').type('Offerwall');

		// The new page should contain an h1 with "search page"
		cy.get('p').contains('Now complete task an earn money while having fun');
	});
});

export {};
