const SEO = {
	title: 'Sid86',
	description:
		'Hello! I am Siddharth, a developer based in India. I am a full stack developer with a passion for building applications.',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://sid86.me',
		site_name: 'Sid86',
		images: [
			{
				url: '/images/logo/dark.png',
				width: 800,
				height: 600,
				type: 'image/png',
				alt: 'Og Image dark',
			},
			{
				url: '/images/logo/light.png',
				width: 800,
				height: 600,
				type: 'image/png',
				alt: 'Og Image Light',
			},
		],
		profile: {
			firstName: 'Siddhartha',
			lastName: 'Roy',
			username: 'Sid86',
			gender: 'male',
		},
	},
	twitter: {
		handle: '@sid86__',
		cardType: 'summary_large_image',
	},
};

const MeetSEO = {
	title: 'Sid86 | Meet',
	description:
		"Let's meet and talk about your project. Set up a meeting with me via Zoom or send me an email.",
	openGraph: {
		title: 'Sid86 | Meet',
		images: [
			{
				url: '/images/logo/dark.png',
				width: 800,
				height: 600,
				alt: 'Og Image dark',
				type: 'image/png',
			},
			{
				url: '/images/logo/light.png',
				width: 800,
				height: 600,
				type: 'image/png',
				alt: 'Og Image Light',
			},
		],
		description:
			"Let's meet and talk about your project. Set up a meeting with me via Zoom or send me an email.",
	},
};

export { SEO, MeetSEO };
