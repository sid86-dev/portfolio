import React, { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Wrapper } from '../components/Wrapper';
import { getdbData, projectCollectionRef } from '../lib/helpers';
import { Project } from '../types';
import SearchIcon from '@mui/icons-material/Search';
import { query, where, getDocs } from 'firebase/firestore';
import { TagBar } from '../components/Search/TagBar';
import { SearchResults } from '../components/Search/SearchResults';
import { NextPage } from 'next';

const Search: NextPage = () => {
	const [projects, setprojects] = useState<Project[]>([]);
	const [keyword, setKeyword] = useState('');
	const [isSearching, setisSearching] = useState(false);

	useEffect(() => {
		const getProjects = async () => {
			const projects = await getdbData;
			setprojects(projects);
		};
		if (projects.length === 0 && !isSearching) getProjects();
	}, [projects, isSearching]);

	const handleSearchByKeyword = async (
		e: React.FormEvent<HTMLFormElement | HTMLSpanElement>
	) => {
		e.preventDefault();
		setisSearching(true);
		setprojects([]);
		const q = query(
			projectCollectionRef,
			where(
				'keywords',
				'array-contains',
				keyword.toLowerCase().replaceAll(' ', '')
			)
		);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			let data = doc.data();
			const newData = { ...data, id: doc.id };
			setprojects((prev) => [...prev, newData as Project]);
		});
	};

	const handleSearchByTag = async (tag: string) => {
		setisSearching(true);
		setprojects([]);
		const q = query(
			projectCollectionRef,
			where('keywords', 'array-contains', tag)
		);
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			let data = doc.data();
			const newData = { ...data, id: doc.id };
			setprojects((prev) => [...prev, newData as Project]);
		});
	};

	const handleResetData = () => {
		setisSearching(false);
		setprojects([]);
	};

	return (
		<Wrapper>
			<Navbar />
			<div className='container-fluid px-3'>
				{/* Search Tags */}
				<TagBar
					handleResetData={handleResetData}
					handleSearchByTag={handleSearchByTag}
				/>
				{/* Search Box */}
				<div className='col-md-7 mx-auto mt-3 pt-2'>
					<form
						className='d-flex'
						onSubmit={(e) => handleSearchByKeyword(e)}
						role='search'
					>
						<div className='input-group shadow-sm mb-3'>
							<input
								className='form-control mx-0 search border-0 fs-5 py-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
								onChange={(e) => setKeyword(e.target.value)}
								value={keyword}
							/>
							<span
								onClick={handleSearchByKeyword}
								className='input-group-text px-4 search-icon border-0 pointer'
							>
								<SearchIcon />
							</span>
						</div>
					</form>

					{/* Search Results */}
				</div>

				<hr className='' />

				{/* Search Results */}
				<SearchResults projects={projects} />
			</div>

			<hr className='' />
			<Footer />
		</Wrapper>
	);
};

export default Search;
