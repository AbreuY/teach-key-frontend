import React from "react";
import "../../styles/home.scss";
import { LandingDescription } from "../component/landing_page/LandingDescription";
import { LandingJumbotron } from "../component/landing_page/LandingJumbotron";

export const LandingPage = () => {
	return (
		<>
			<div className="container">
				<LandingJumbotron />
				<LandingDescription />
			</div>
		</>
	);
};
