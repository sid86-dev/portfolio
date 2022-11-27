import React, { ReactNode } from 'react';
import { ProjectMeta } from '../../types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { tagColors } from '../../lib/helpers';
import CircleIcon from '@mui/icons-material/Circle';

interface IProps {
	data: ProjectMeta[];
}

const ProjectCard: Function = ({ data }: IProps): ReactNode[] => {
	return data.map((item) => (
		<div
			className='col-md-5 col-xl-4 my-4 px-lg-3 pt-lg-4 card-wrapper mx-3 rounded-3'
			key={item.slug}
		>
			<div className='card border-0 rounded-0 rounded-top'>
				{/* card navbar */}
				<div className='card-header d-flex align-items-center border-0'>
					<CircleIcon className='fs-8 text-danger' />
					<CircleIcon className='fs-8 mx-1 text-warning' />
					<CircleIcon className='fs-8 text-success' />
					<input
						type='text'
						className='border-0 fs-7 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center'
						value={item.link.replace('https://', '').slice(0, -1)}
						disabled
					/>
				</div>
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
								className='card-img-top pointer rounded-0 rounded-bottom shadow'
								alt='...'
								height='500px'
								width='900px'
								priority
							/>
						</a>
					</Link>
				</motion.div>

				{/* body */}
				<div className='row align-items-center mt-3'>
					{/* Project Title */}
					<div className='col-md-12 mb-4'>
						<h5 className='card-title col-12'>{item.title}</h5>
					</div>

					{/* Project description */}
					<div className='col-12'>
						<p className='card-text my-4'>{item.excerpt}</p>
					</div>
				</div>
			</div>
			{/* Project tags */}
			<div className='col-12 mb-3 card-footer'>
				<div className='justify-content-start'>
					{item.tags?.map((tag, index) => (
						<span
							key={index}
							style={{ marginRight: '5px' }}
							className={`badge py-1 fs-7 text-dark border-dark border-0 ${
								tagColors.find((data) => data.tag === tag)?.class
							}`}
						>
							#{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	));
};

export default ProjectCard;
