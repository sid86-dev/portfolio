import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { getMdxContent } from '../utils/helpers';

interface IPageProps {
	Source: MDXRemoteSerializeResult<Record<string, unknown>>;
	meta: { title: string; excerpt: string };
}

const Privacy: NextPage<IPageProps> = ({ Source, meta }) => {
	const SEO = {
		type: 'website',
		title: meta.title,
		description: meta.excerpt,
		openGraph: {
			title: meta.title,
			description: meta.excerpt,
			url: `https://sid86.me/terms`,
			siteName: `Sid86`,
			images: [
				{
					url: 'https://sid86.me/_next/image?url=%2Fimages%2Flogo%2Fdark.png&w=128&q=75',
					width: 128,
					height: 128,
					type: 'image/webp',
					alt: 'Og Image dark',
				},
			],
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<div className='mdx-content container mb-5'>
				<MDXRemote {...Source} components={{ Image }} />
			</div>

			<hr className=' mt-5' />
		</>
	);
};

export default Privacy;

export const getStaticProps: GetStaticProps = async () => {
	const { content, meta } = await getMdxContent('privacy');
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [rehypeHighlight],
			remarkPlugins: [remarkGfm],
		},
	});

	return {
		props: {
			Source: mdxSource,
			meta: meta,
		},
	};
};
