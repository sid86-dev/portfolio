describe('Navigation', () => {
	it('should navigate to the meet page', () => {
		// Start from the index page
		cy.visit('http://localhost:3000');

		// Find a link with an href attribute containing "meet" and click it
		cy.get('a[href*="meet"]').click();

		// The new url should include "/meet"
		cy.url().should('include', '/meet');

		// The new page should contain an h1 with "meet page"
		cy.get('h1').contains("Let's Connect !");
	});
});

export {};
