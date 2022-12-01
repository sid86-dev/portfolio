import { collection, getDocs } from 'firebase/firestore';
import { ISkillCard, ITagColors, Post, Project } from '../types';
import { db } from './firebase-config';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

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

export const stackIcons = [
	{ tag: 'react', class: 'fa-react' },
	{ tag: 'bootstrap', class: 'fa-bootstrap' },
];

export const tagColors: ITagColors[] = [
	{ tag: 'react', class: 'bg-light-200' },
	{ tag: 'nextjs', class: 'bg-black' },
	{ tag: 'nodejs', class: 'bg-green-500' },
	{ tag: 'ethereum', class: 'bg-gray-600' },
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
	{ tag: 'graphql', class: 'bg-purple' },
	{ tag: 'google-cloud', class: 'bg-blue-300' },
	{ tag: 'AI', class: 'bg-red-500' },
];

export const projectCollectionRef = collection(db, 'projects');

export const getdbData = new Promise<Project[]>((resolve) => {
	getDocs(projectCollectionRef)
		.then((dbData) => {
			const data = dbData.docs.map((doc) => ({
				...(doc.data() as Project),
				id: doc.id,
			}));
			if (data) resolve(data);
		})
		.catch((err) => console.log(err));
});

const POSTS_PATH = path.join(process.cwd(), 'content/projects');

export const getAllProjects = async () => {
	const posts = getSlugs()
		.map((slug) => getPostsFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) {
				return 1;
			}
			if (a.meta.date < b.meta.date) {
				return -1;
			}
			return 0;
		})
		.reverse();
	return posts;
};

export const getMdxContent = async (slug: string) => {
	const POSTS_PATH = path.join(process.cwd(), 'content');
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(postPath);
	const { content, data } = matter(source);

	return {
		content,
		meta: data,
	};
};

export const getPostsFromSlug = (slug: string): Post => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(postPath);
	const { content, data } = matter(source);

	return {
		content,
		meta: {
			slug,
			excerpt: data.excerpt ?? '',
			title: data.title ?? slug,
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString(),
			link: data.link ?? '',
			image: data.image ?? '',
			githubUrl: data.githubUrl ?? '',
		},
	};
};

export const getSlugs = (): string[] => {
	const paths = sync(`${POSTS_PATH}/*.mdx`);
	return paths.map((path) =>
		path.replace(`${POSTS_PATH}/`, '').replace('.mdx', '')
	);
};
