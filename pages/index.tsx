import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Main from '../components/Main';
import dynamic from 'next/dynamic';
const ProjectSection = dynamic(
	() => import('../components/Project/ProjectSection'),
	{ ssr: false, loading: () => <Loader /> }
);
const SkillSection = dynamic(
	() => import('../components/Skills/SkillSection'),
	{ ssr: false, loading: () => <Loader /> }
);

import { ProjectMeta } from '../types';
import { getAllProjects } from '../lib/utils';
import Loader from '../components/Loader';

interface IProps {
	projects: ProjectMeta[];
}

const Home: NextPage<IProps> = ({ projects }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>

			{/* landing intro section */}
			<Main />

			<hr className='' />

			{/* TechStack section */}
			<SkillSection />

			<hr className='' />

			{/* Project showcase section */}
			<ProjectSection projects={projects} />

			<hr className=' mt-5' />
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const posts = (await getAllProjects()).map((post) => post.meta);
	return { props: { projects: posts } };
};
