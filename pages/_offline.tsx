import React from 'react';

const Offline = () => {
	return (
		<div
			className='wrapper'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '80vh',
				flexDirection: 'column',
			}}
		>
			<h1>You are Offline</h1>
			<button type='button' onClick={() => window.location.reload()}></button>
		</div>
	);
};

export default Offline;
