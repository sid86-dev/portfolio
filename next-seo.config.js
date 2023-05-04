const SEO = {
	title: 'Sid86',
	description:
		'Hello! I am Siddharth, a developer based in India. I am a full stack developer with a passion for building applications.',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://sid86.me',
		site_name: 'Sid86',
		themecolor: '#12181b',
		images: [
			{
				url: 'https://sid86.me/_next/image?url=%2Fimages%2Flogo%2Fdark.png&w=128&q=75',
				width: 128,
				height: 128,
				type: 'image/webp',
				alt: 'Og Image dark',
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
				url: 'https://sid86.me/_next/image?url=%2Fimages%2Flogo%2Fdark.png&w=128&q=75',
				width: 128,
				height: 128,
				type: 'image/webp',
				alt: 'Og Image dark',
			},
		],
		description:
			"Let's meet and talk about your project. Set up a meeting with me via Zoom or send me an email.",
	},
};

export { SEO, MeetSEO };
