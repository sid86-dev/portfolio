import React, { FC } from 'react';
import { ProjectMeta } from '../../types';
import ProjectCard from '../Project/ProjectCard';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

interface ISearchResultsProps {
	projects: ProjectMeta[];
}

export const ProjectSkeleton: FC = () => {
	return (
		<>
			<div className='col-md-4 card-wrapper rounded-3 my-3 mx-5 p-5'>
				<Box sx={{ pt: 0.5 }}>
					<Skeleton variant='rectangular' width={'100%'} height={250} />
					<Skeleton animation='wave' className='py-3 mb-5' />
					<Skeleton width='100%' />
					<Skeleton width='80%' />
				</Box>
			</div>
			<div className='col-md-4 card-wrapper rounded-3 my-3 mx-5 p-5'>
				<Box sx={{ pt: 0.5 }}>
					<Skeleton variant='rectangular' width={'100%'} height={250} />
					<Skeleton animation='wave' className='py-3 mb-5' />
					<Skeleton width='100%' />
					<Skeleton width='80%' />
				</Box>
			</div>
		</>
	);
};

export const SearchResults: FC<ISearchResultsProps> = ({ projects }) => {
	return (
		<div className='container-fluid mt-2 mb-3 pb-5'>
			<div className='row justify-content-center'>
				{/* pre rendered projects */}
				{projects.length === 0 ? (
					<ProjectSkeleton />
				) : (
					<ProjectCard data={projects} />
				)}
			</div>
		</div>
	);
};
