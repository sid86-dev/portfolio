import { ISkillCard, ITagColors } from '../types';

// List of skill card data
export const cardVarient: ISkillCard[] = [
	{
		id: 1,
		title: 'Software Development',
		description:
			'Experienced in both functional and OOP: Python, JavaScript, Typescript, Solidity. MongoDB, GraphQL, SQL.',
	},
	{
		id: 2,
		title: 'Frontenv Dev',
		description:
			'Over three years of frontend development experience in React, Next.js framework. Bootstrap, Tailwind CSS, Firebase, HTML5.',
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
	{ tag: 'react', class: 'bg-light-200' },
	{ tag: 'redux', class: 'bg-purple-600' },
	{ tag: 'react-native', class: 'bg-red-500' },
	{ tag: 'nextjs', class: 'bg-black' },
	{ tag: 'nodejs', class: 'bg-purple-300' },
	{ tag: 'ethereum', class: 'bg-orange-200' },
	{ tag: 'python', class: 'bg-yellow-500' },
	{ tag: 'typescript', class: 'bg-blue-500' },
	{ tag: 'web3', class: 'bg-gray-500' },
	{ tag: 'tailwind', class: 'bg-blue-400' },
	{ tag: 'mongodb', class: 'bg-green-300' },
	{ tag: 'postgresql', class: 'bg-blue-700' },
	{ tag: 'mysql', class: 'bg-blue-800' },
	{ tag: 'firebase', class: 'bg-yellow' },
	{ tag: 'solidity', class: 'bg-gray-400' },
	{ tag: 'aws', class: 'bg-orange-500' },
	{ tag: 'docker', class: 'bg-blue-900' },
	{ tag: 'bootstrap', class: 'bg-purple-500' },
	{ tag: 'javascript', class: 'bg-yellow' },
	{ tag: 'material-ui', class: 'bg-blue-100' },
	{ tag: 'graphql', class: 'bg-pink-300' },
	{ tag: 'google-cloud', class: 'bg-blue-300' },
	{ tag: 'AI', class: 'bg-brown-200' },
	{ tag: 'stripe', class: 'bg-purple-400' },
];

// List of projects in order of rank
export const projectRankList = [
	'shoe-store',
	'deliveroo-clone-rn',
	'dall-e',
	'google-docs-clone',
	'offerwall',
	'uniswap-clone',
	'tiktok-clone',
	'doggybot',
	'shwt',
];
