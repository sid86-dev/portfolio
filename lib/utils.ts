import { collection, getDocs } from 'firebase/firestore';
import { Post, Project, ProjectMeta } from '../types';
import { db } from './firebase-config';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { projectRankList } from './constants';

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

const POSTS_PATH = path.join(process.cwd(), 'content/Projects');

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

// process mdx content
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
			rank: data.rank ?? '',
		},
	};
};

// get all project mdx slugs
export const getSlugs = (): string[] => {
	const paths = sync(`${POSTS_PATH}/*.mdx`);
	return paths.map((path) =>
		path.replace(`${POSTS_PATH}/`, '').replace('.mdx', '')
	);
};

// sort github data from Api
export const sortGithubData = (data: any[]) => {
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	let dates: string[] = [];
	data.map((item: any) => {
		let date = new Date(item.commit.committer.date);
		dates.push(date.getDate() + ' ' + month[date.getMonth()]);
	});

	let dataLabels: string[] = [];

	const occurance = dates.reduce(function (acc, curr) {
		// @ts-ignore
		return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
	}, {});

	let commitData: number[] = [];

	for (const [key, value] of Object.entries(occurance)) {
		dataLabels.push(key);
		// @ts-ignore
		commitData.push(value);
	}

	return { commitData, dataLabels };
};

// Sort projects based on rank
export const sortProjectArray = (projects: ProjectMeta[]) => {
	let sortedProjects: ProjectMeta[] = [];
	projectRankList.map((title) => {
		projects.filter((project) => {
			if (project.slug === title) {
				sortedProjects.push(project);
			}
		});
	});

	return sortedProjects;
};
