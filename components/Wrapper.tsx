import React from 'react';

type Props = {
	children: JSX.Element | JSX.Element[] | string | string[];
};

// Theme wrapper over app
export const Wrapper = ({ children }: Props) => {
	return <div className='wrapper'>{children}</div>;
};
