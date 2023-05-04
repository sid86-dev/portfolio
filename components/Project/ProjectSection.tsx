import React, { FC } from 'react';
import { ProjectMeta } from '../../types';
import ProjectCard from './ProjectCard';
import { sortProjectArray } from '../../lib/utils';

interface IProps {
	projects: ProjectMeta[];
}

const ProjectSection: FC<IProps> = ({ projects }) => {
	const sortedProjects = sortProjectArray(projects);

	return (
		<div className='container-fuild px-3 px-md-0 justify-content-center py-4'>
			<h2 className='text-center mb-5'>Projects</h2>
			<div className='row justify-content-center'>
				{/* pre rendered projects */}
				{projects && <ProjectCard data={sortedProjects} />}
			</div>
		</div>
	);
};

export default ProjectSection;
