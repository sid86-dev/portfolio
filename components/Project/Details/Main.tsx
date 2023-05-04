import Image from 'next/image';
import React, { FC } from 'react';
import { tagColors } from '../../../lib/constants';
import { ProjectMeta } from '../../../types';
import Header from './Header';

interface IProps {
	project: ProjectMeta;
	children: JSX.Element | JSX.Element[] | string | string[];
}

export const Main: FC<IProps> = ({ project, children }) => {
	return (
		<>
			<Header project={project} />
			<div className='container-table py-5 d-flex row justify-content-center '>
				{/* Image Container */}
				<div className='mb-5 d-flex row justify-content-center'>
					<div className='col-12'>
						<Image
							priority
							src={project?.image}
							height='640px'
							width={'1050px'}
							className='w-50 rounded shadow'
							alt={project.title}
							blurDataURL='data:...'
							placeholder='blur'
						/>
					</div>
					<div className='col-12'>
						<p className='text-muted fs-7 mt-3'>
							Screenshort from the demo app
						</p>
					</div>
				</div>

				<div className='col-12'>
					{/* Stacks */}
					<h2 className='py-4'>🛠️ Stacks</h2>
					<div
						className='btn-group'
						role='group'
						aria-label='Large button group'
					>
						{project.tags?.map((tag, index) => (
							<button
								type='button'
								key={index}
								className={`btn fs-6
                   ${tagColors.find((data) => data.tag === tag)?.class}`}
							>
								{tag}
							</button>
						))}
					</div>
				</div>

				<div className='mdx-content'>{children}</div>
			</div>
		</>
	);
};
