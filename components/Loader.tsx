import React from 'react';

const Loader = () => {
	return (
		<div className='spinner-grow text-dark py-5 my-5' role='status'>
			<span className='visually-hidden'>Loading...</span>
		</div>
	);
};

export default Loader;
