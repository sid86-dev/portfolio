module.exports = {
	extends: 'lighthouse:default',
	settings: {
		emulatedFormFactor: 'desktop',
		audits: [
			{
				path: 'metrics/first-contentful-paint',
				options: { scorePODR: 800, scoreMedian: 1600 },
			},
		],
	},
};
