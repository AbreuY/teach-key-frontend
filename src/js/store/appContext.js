import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		sectionInfo: [
			{
				imgUrl: "https://i.imgur.com/cQIzDHf.jpg",
				title: "Yo soy el h1 de la seccion a",
				description: "Some description",
				orientation: "left"
			},
			{
				imgUrl: "https://i.imgur.com/cQIzDHf.jpg",
				title: "Yo soy el h1 de la seccion b",
				description: "Some description b",
				orientation: "right"
			}
		],

		token: undefined
	});

	const actions = {
		deleteToken: () => {
			localStorage.removeItem("token");
			setStore(prev => ({
				...prev,
				token: undefined
			}));
		},

		setToken: token => {
			localStorage.setItem("token", token);
			setStore(prev => ({
				...prev,
				token: token
			}));
		}
	};

	const context = { store, actions };

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
