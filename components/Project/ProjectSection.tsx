import React, { FC } from 'react';
import { ProjectMeta } from '../../types';
import ProjectCard from './ProjectCard';

interface IProps {
	projects: ProjectMeta[];
}

export const ProjectSection: FC<IProps> = ({ projects }) => {
	return (
		<div className='container-fuild px-3 px-md-0 justify-content-center py-4'>
			<h2 className='text-center'>Projects</h2>
			<div className='row justify-content-center'>
				{/* pre rendered projects */}
				{projects && <ProjectCard data={projects} />}
			</div>
		</div>
	);
};
