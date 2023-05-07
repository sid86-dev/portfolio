import { defineConfig } from 'cypress';

export default defineConfig({
	defaultCommandTimeout: 10000,
	e2e: {
		baseUrl: 'https://sid86.me',
		defaultCommandTimeout: 11000,
	},
});
