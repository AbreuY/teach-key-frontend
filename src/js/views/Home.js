import React, { useContext } from "react";
import { TopServices } from "../component/home_components/TopServices";
import { TopProfessors } from "../component/home_components/TopProfessors";
import { Container3 } from "../component/home_components/Container3";

import { Jumbotron } from "../component/home_components/Jumbotron";
import { AppContext } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(AppContext);
	return (
		<>
			<Jumbotron />
			<TopServices />

			<Container3 section={store.sectionInfo[0]} />
			<TopProfessors />
			<Container3 section={store.sectionInfo[1]} />
		</>
	);
};
