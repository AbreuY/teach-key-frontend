import React from "react";
import { Container } from "../component/home_components/Container";
import { Container2 } from "../component/home_components/Container2";
import { Container3 } from "../component/home_components/Container3";

import { Jumbotron } from "../component/home_components/Jumbotron";

export const Home = () => {
	return (
		<>
			<Jumbotron />
			<Container />
			<Container3 />
			<Container2 />
		</>
	);
};
