import React, { useState, createContext } from 'react';

const initialState = {
	projects: null,
};

export const Context = createContext();

const Store = ({ children }) => {
	const [state, setState] = useState(initialState);

	return (
		<Context.Provider value={[state, setState]}>{children}</Context.Provider>
	);
};

export default Store;
