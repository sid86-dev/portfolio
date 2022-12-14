import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import { ProjectSection } from '../components/Project/ProjectSection';
import { Footer } from '../components/Footer';
import SkillSection from '../components/Skills/SkillSection';
import { Wrapper } from '../components/Wrapper';
import { ProjectMeta } from '../types';
import { getAllProjects } from '../utils/helpers';

interface IProps {
	projects: ProjectMeta[];
}

const Home: NextPage<IProps> = ({ projects }) => {
	return (
		<Wrapper>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>

			<Script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
				crossOrigin='anonymous'
			></Script>

			<Navbar />

			{/* landing intro section */}
			<Main />

			<hr className='' />

			{/* TechStack section */}
			<SkillSection />

			<hr className='' />

			{/* Project showcase section */}
			<ProjectSection projects={projects} />

			<hr className=' mt-5' />

			<Footer />
		</Wrapper>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const posts = (await getAllProjects()).map((post) => post.meta);
	return { props: { projects: posts } };
};
