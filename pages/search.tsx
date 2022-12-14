import React, {
	ChangeEvent,
	useContext,
	useEffect,
	useState,
	startTransition,
} from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Wrapper } from '../components/Wrapper';
import { IProjectApiResponse, ProjectMeta } from '../types';
import SearchIcon from '@mui/icons-material/Search';
import { TagBar } from '../components/Search/TagBar';
import { SearchResults } from '../components/Search/SearchResults';
import { NextPage } from 'next';
import { Context } from '../contexts/store';
import axios from 'axios';
import { useRouter } from 'next/router';
import { checkString, checkTag } from '../utils/searchHandlers';

const Search: NextPage = () => {
	const [filteredProjects, setFilteredprojects] = useState<ProjectMeta[]>([]);
	const [projects, setprojects] = useState<ProjectMeta[]>([]);
	const [state, setState] = useContext(Context);

	const router = useRouter();

	const getProjects = async () => {
		const data: IProjectApiResponse = (await axios.get('/api/projects')).data;
		setprojects(data.projects);
		setFilteredprojects(data.projects);
	};

	useEffect(() => {
		if (projects.length === 0) {
			getProjects();
		}
	}, [projects, state, setState, filteredProjects]);

	const filterProjects = (keyword: string) => {
		if (keyword === '') setFilteredprojects(projects);
		const filtered = projects.filter((project: ProjectMeta) =>
			checkString(keyword, project)
		);
		setFilteredprojects(filtered);
	};

	const handleResetData = () => {
		setFilteredprojects(projects);
	};

	const tagFilterHandler = async (tag: string) => {
		const filtered = projects.filter((project: ProjectMeta) =>
			checkTag(tag, project)
		);
		setFilteredprojects(filtered);
	};

	const stringFilterHandler = (e: ChangeEvent<HTMLInputElement>) => {
		startTransition(() => {
			router.push(`/search?q=${e.target.value}`);
			filterProjects(e.target.value);
		});
	};

	return (
		<Wrapper>
			<Navbar />
			<div className='container-fluid px-3'>
				{/* Search Tags */}
				<TagBar
					handleResetData={handleResetData}
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
								onChange={(e) => stringFilterHandler(e)}
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
				{projects && <SearchResults projects={filteredProjects} />}
			</div>

			<hr className='' />
			<Footer />
		</Wrapper>
	);
};

export default Search;
