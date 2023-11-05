import { ISkillCard, ITagColors } from '../types';

// List of skill card data
export const cardVarient: ISkillCard[] = [
	{
		id: 1,
		title: 'Full Stack Dev',
		description:
			'Encompass both the frontend (user interface) and backend (server, database, and business logic) components.',
	},
	{
		id: 2,
		title: 'Front End Dev',
		description:
			'Focusing on creating the user interface and user experience of websites using technologies like Tailwind CSS, and React',
	},

	{
		id: 3,
		title: 'Mobile Dev',
		description:
			'Skilled in developing hybrid mobile apps and cross-platform solutions using React Native framework.',
	},
];

// List of skills and their corresponding icons
export const stackIcons = [
	{ tag: 'react', class: 'fa-react' },
	{ tag: 'bootstrap', class: 'fa-bootstrap' },
];

// List of tags and their corresponding colors
export const tagColors: ITagColors[] = [
	{ tag: 'react', class: 'bg-blue-100' },
	{ tag: 'redux', class: 'bg-purple-600' },
	{ tag: 'react-native', class: 'bg-red-500' },
	{ tag: 'nextjs', class: 'bg-black' },
	{ tag: 'nodejs', class: 'bg-purple-300' },
	{ tag: 'ethereum', class: 'bg-orange-200' },
	{ tag: 'python', class: 'bg-yellow-500' },
	{ tag: 'typescript', class: 'bg-blue-800' },
	{ tag: 'web3', class: 'bg-gray-800' },
	{ tag: 'tailwind', class: 'bg-blue-300' },
	{ tag: 'mongodb', class: 'bg-green-400' },
	{ tag: 'postgresql', class: 'bg-blue-700' },
	{ tag: 'mysql', class: 'bg-blue-600' },
	{ tag: 'firebase', class: 'bg-yellow-300' },
	{ tag: 'solidity', class: 'bg-gray-400' },
	{ tag: 'aws', class: 'bg-orange-500' },
	{ tag: 'docker', class: 'bg-blue-400' },
	{ tag: 'bootstrap', class: 'bg-purple-500' },
	{ tag: 'javascript', class: 'bg-yellow-300' },
	{ tag: 'material-ui', class: 'bg-orange-400' },
	{ tag: 'graphql', class: 'bg-pink-300' },
	{ tag: 'google-cloud', class: 'bg-blue-300' },
	{ tag: 'AI', class: 'bg-orange-500' },
	{ tag: 'stripe', class: 'bg-purple-400' },
	{ tag: 'freelance', class: 'bg-green-500' },
];

// List of projects in order of rank
export const projectRankList = [
	'credifyy',
	'shoe-store',
	'deliveroo-clone-rn',
	'google-docs-clone',
	'offerwall',
	'uniswap-clone',
	'tiktok-clone',
	'doggybot',
	'shwt',
];
