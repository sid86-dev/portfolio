import { GetStaticPaths, GetStaticProps } from 'next';
import { Footer } from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Wrapper } from '../../components/Wrapper';
import { getPostsFromSlug, getSlugs } from '../../utils/helpers';
import { ProjectMeta } from '../../types';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { Main } from '../../components/MDX/Main';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';

interface IMDXPost {
	Source: MDXRemoteSerializeResult<Record<string, unknown>>;
	meta: ProjectMeta;
}

const ProjectView = ({ project }: { project: IMDXPost }) => {
	const SEO = {
		type: 'website',
		title: `${project.meta.title} | Sid86`,
		description: project.meta.excerpt,
		openGraph: {
			title: `${project.meta.title} | Sid86`,
			description: project.meta.excerpt,
			url: `https://sid86.me/project/${project.meta.slug}`,
			images: [
				{
					url: project.meta.image,
					width: 800,
					height: 600,
					alt: project.meta.title,
					type: 'image/jpeg',
				},
			],
			siteName: `sid86`,
		},
	};
	return (
		<Wrapper>
			<NextSeo {...SEO} />
			<Navbar />
			<div className='m-lg-5 pt-5 pt-md-2 px-3 px-lg-4'>
				<Main project={project.meta}>
					<MDXRemote {...project.Source} components={{ Image }} />
				</Main>
			</div>
			<hr className=' mt-5' />
			<Footer />
		</Wrapper>
	);
};

export default ProjectView;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };
	const { content, meta } = getPostsFromSlug(slug);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [rehypeHighlight],
			remarkPlugins: [remarkGfm, emoji],
		},
	});

	return { props: { project: { Source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map((slug) => ({ params: { slug } }));
	return {
		paths,
		fallback: false,
	};
};
