import React, { ReactNode } from 'react';
import { ProjectMeta } from '../../types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { tagColors } from '../../lib/constants';
import Highlighter from 'react-highlight-words';
import { useRouter } from 'next/router';

interface IProps {
	data: ProjectMeta[];
}

const ProjectCard: Function = ({ data }: IProps): ReactNode[] => {
	const router = useRouter();

	const { query } = router;

	return data.map((item) => (
		<div
			className='col-md-5 col-xl-3 my-4 px-md-3 mx-md-3 pt-lg-3 card-wrapper rounded-3'
			key={item.slug}
		>
			<div className='card border-0 rounded-0 rounded-top'>
				{/* card navbar */}
				{/* <div className='card-header d-flex align-items-center border-0'>
					<BsCircleFill className='circle text-danger' size={10} />
					<BsCircleFill className='circle text-warning mx-1' size={10} />
					<BsCircleFill className='circle text-success' size={10} />
					<input
						type='text'
						name={item.slug}
						id={item.slug}
						className='border-0 fs-9 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center'
						value={item.link.replace('https://', '').slice(0, -1)}
						disabled
					/>
					<label htmlFor={item.slug}></label>
				</div> */}
			</div>
			<div className='card-body w-100'>
				{/* main image */}
				<motion.div
					whileHover={{ scale: 1.005 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				>
					<Link href={`/project/${item.slug}`}>
						<a className='h-100 w-100'>
							<Image
								src={item.image}
								className='card-img-top pointer rounded shadow'
								alt='...'
								height='578px'
								width='900px'
								priority
							/>
						</a>
					</Link>
				</motion.div>

				{/* body */}
				<div className='row align-items-center mt-3'>
					{/* Project Title */}
					<div className='col-md-12 mb-3'>
						<h5 className='card-title col-12'>
							<Highlighter
								highlightClassName='search-highlight'
								searchWords={[query.q as string]}
								autoEscape={true}
								textToHighlight={item.title}
							/>
						</h5>
					</div>

					{/* Project description */}
					<div className='col-12'>
						<p className='card-text mt-1 mb-5'>
							<Highlighter
								highlightClassName='search-highlight'
								searchWords={[query.q as string]}
								autoEscape={true}
								textToHighlight={item.excerpt}
							/>
						</p>
					</div>
				</div>
			</div>
			{/* Project tags */}
			<div className='col-12 mb-4 card-footer'>
				<div className='justify-content-start'>
					{item.tags?.map((tag, index) => (
						<span
							key={index}
							style={{ marginRight: '8px' }}
							className={`badge py-1 fs-7 mb-1 text-dark border-dark border-0 ${
								tagColors.find((data) => data.tag === tag)?.class
							}`}
						>
							<Highlighter
								highlightClassName='search-highlight'
								searchWords={[query.q as string]}
								autoEscape={true}
								textToHighlight={`#${tag}`}
							/>
						</span>
					))}
				</div>
			</div>
		</div>
	));
};

export default ProjectCard;
