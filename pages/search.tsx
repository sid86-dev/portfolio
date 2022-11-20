import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/Project/ProjectCard';
import { Wrapper } from '../components/Wrapper';
import { getdbData } from '../lib/helpers';
import { Project } from '../types';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
	const [projects, setprojects] = useState<Project[]>([]);

	useEffect(() => {
		const getProjects = async () => {
			const projects = await getdbData;
			setprojects(projects);
		};
		if (!projects.length) getProjects();
	}, [projects]);

	const ProjectSkeleton: FC = () => {
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

	return (
		<Wrapper>
			<Navbar />
			<div className='col-md-7 mx-auto mt-5'>
				<form className='d-flex' role='search'>
					<div className='input-group mb-3'>
						<input
							className='form-control mx-0 search border-0 fs-5 py-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<span className='input-group-text px-4 search-icon border-0'>
							<SearchIcon />
						</span>
					</div>
				</form>
			</div>
			<div className='container my-5 pb-5'>
				<div className='row justify-content-center'>
					{/* pre rendered projects */}
					{!projects ? <ProjectSkeleton /> : <ProjectCard data={projects} />}
				</div>
			</div>

			<hr className='divider' />
			<Footer />
		</Wrapper>
	);
};

export default Search;
