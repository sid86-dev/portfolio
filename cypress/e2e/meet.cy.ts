describe('Navigation', () => {
	it('should navigate to the meet page', () => {
		// Start from the index page
		cy.visit('/');

		cy.wait(2000);

		// Find a link with an href attribute containing "meet" and click it
		cy.get('a[href*="meet"]').click({
			waitForAnimations: false,
			force: true,
		});

		// The new url should include "/meet"
		cy.url().should('include', '/meet');

		cy.wait(3000);

		// The new page should contain an h1 with "meet page"
		cy.get('h1').contains("Let's Connect !");
	});
});

export {};
