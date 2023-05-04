import { GetStaticPaths, GetStaticProps } from 'next';
import {
	getPostsFromSlug,
	getSlugs,
	sortGithubData,
} from '../../utils/helpers';
import { ProjectMeta } from '../../types';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { Main } from '../../components/Project/Details/Main';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';
import Insight from '../../components/Project/Details/Insight';
import axios from 'axios';

interface IMDXPost {
	Source: MDXRemoteSerializeResult<Record<string, unknown>>;
	meta: ProjectMeta;
}

const ProjectView = ({
	project,
	graphData,
}: {
	project: IMDXPost;
	graphData: any;
}) => {
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
					url: 'https://sid86.me/_next/image?url=%2Fimages%2Flogo%2Fdark.png&w=128&q=75',
					width: 128,
					height: 128,
					type: 'image/webp',
					alt: 'Og Image dark',
				},
			],
			siteName: `sid86`,
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<div className='m-lg-5 pt-5 pt-md-2 px-3 px-lg-4'>
				<Main project={project.meta}>
					<MDXRemote {...project.Source} components={{ Image }} />
				</Main>
			</div>
			<hr className='mt-5' />
			<Insight graphData={graphData} project={project.meta} />
			<hr className='mt-5' />
		</>
	);
};

export default ProjectView;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };
	const { content, meta } = getPostsFromSlug(slug);

	// GET REPO DATA FROM GITHUB API
	const { data } = await axios.get(
		`${process.env.NEXT_PUBLIC_SITE_URL}/api/project/commits/${meta.slug}`
	);

	const { commitData, dataLabels } = sortGithubData(data.commits);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [rehypeHighlight],
			remarkPlugins: [remarkGfm, emoji],
		},
	});

	return {
		props: {
			project: { Source: mdxSource, meta },
			graphData: { commitData, dataLabels },
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map((slug) => ({ params: { slug } }));
	return {
		paths,
		fallback: false,
	};
};
