import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Index = () => {
	const [data, setData] = useState([]);

	const getRepoData = async () => {
		const { data } = await axios.get(
			'https://api.github.com/repos/sid86-dev/portfolio/commits'
		);
		console.log(data);
		setData(data.commiter);
	};

	useEffect(() => {
		if (!data.length) {
			getRepoData();
		}
	}, [data]);

	return (
		<div className='text-white container'>
			{data.map((item, index) => {
				return <div key={index}>ss</div>;
			})}
		</div>
	);
};

export default Index;
