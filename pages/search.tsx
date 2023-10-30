import React, { ChangeEvent, startTransition } from 'react';
import { ProjectMeta } from '../types';
import SearchIcon from '@mui/icons-material/Search';
import { TagBar } from '../components/Search/TagBar';
import { SearchResults } from '../components/Search/SearchResults';
import { GetServerSideProps, NextPage } from 'next';
import Fuse from 'fuse.js';
import axios from 'axios';
import { useRouter } from 'next/router';
import { checkTag } from '../lib/utils';

interface IProps {
	projects: ProjectMeta[];
	queryText: string;
}

const Search: NextPage<IProps> = ({ queryText, projects }) => {
	const router = useRouter();

	// handle search with query
	const searchQueryhandler = async (e: ChangeEvent<HTMLInputElement>) => {
		startTransition(() => {
			router.push({
				pathname: '/search',
				query: { q: e.target.value },
			});
		});
	};

	// handle search with tag
	const tagFilterHandler = async (tag: string) => {
		startTransition(() => {
			router.push({
				pathname: '/search',
				query: { tag: tag },
			});
		});
	};

	return (
		<>
			<div className='container-fluid px-3'>
				{/* Search Tags */}
				<TagBar
					handleResetData={() => router.push('/search')}
					handleSearchByTag={tagFilterHandler}
				/>
				{/* Search Box */}
				<div className='col-md-7 mx-auto mt-3 pt-2'>
					<form className='d-flex' role='search'>
						<div className='input-group mb-3'>
							<input
								className='form-control mx-0 search border-0 fs-5 py-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
								value={queryText}
								onChange={(e) => searchQueryhandler(e)}
							/>
							<span className='input-group-text px-4 search-icon border-0 pointer'>
								<SearchIcon />
							</span>
						</div>
					</form>

					{/* Search Results */}
				</div>

				<hr className='' />

				{/* Search Results */}
				{projects && <SearchResults projects={projects} />}
			</div>

			<hr className='' />
		</>
	);
};

export default Search;

export const getServerSideProps: GetServerSideProps<IProps> = async ({
	query,
}) => {
	let filteredprojects = [];
	let queryText = query.q as string;
	let tagText = query.tag as string;

	// Get all project data
	const projects: ProjectMeta[] = (
		await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/project/data`)
	).data.projects;

	const options = {
		includeScore: true,
		keys: [
			{
				name: 'title',
				weight: 0.7,
			},
			{
				name: 'excerpt',
				weight: 0.3,
			},
		],
	};

	const fuse = new Fuse(projects, options);

	// Filter project function
	if (queryText) {
		filteredprojects = fuse.search(queryText).map((project) => project.item);
		console.log(filteredprojects);
	}
	if (tagText) {
		filteredprojects = projects.filter((project: ProjectMeta) =>
			checkTag(tagText, project)
		);
	} else {
		filteredprojects = projects;
	}

	return {
		props: {
			projects: filteredprojects,
			queryText: queryText ? queryText : '',
		},
	};
};
