import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		data: []
	});

	const actions = {};
	const context = { store, actions };

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
