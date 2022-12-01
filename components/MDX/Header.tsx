import React, { FC } from 'react';
import { Project, ProjectMeta } from '../../types';

interface IProps {
	project: ProjectMeta;
}

const Header: FC<IProps> = ({ project }) => {
	return (
		<div className='container text-center'>
			<div className='col-12'>
				<h2 className='fs-1'>{project.title}</h2>
				<p>{project.excerpt}</p>
			</div>
		</div>
	);
};

export default Header;
