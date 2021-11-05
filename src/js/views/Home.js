import React from "react";
import { TopServices } from "../component/home_components/TopServices";
import { TopProfessors } from "../component/home_components/TopProfessors";
import { Container3 } from "../component/home_components/Container3";

import { Jumbotron } from "../component/home_components/Jumbotron";

export const Home = () => {
	return (
		<>
			<Jumbotron />
			<TopServices />
			<Container3 />
			<TopProfessors />
		</>
	);
};
