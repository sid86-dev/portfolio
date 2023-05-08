import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: 'd5udvv',
	defaultCommandTimeout: 10000,
	e2e: {
		baseUrl: 'http://localhost:3000',
		defaultCommandTimeout: 11000,
	},
});
