import React from "react";
import "../../styles/home.scss";
import { LandingDescription } from "../component/landing_page/LandingDescription";
import { LandingJumbotron } from "../component/landing_page/LandingJumbotron";
import { LandingNavbar } from "../component/landing_page/LandingNavbar";

export const LandingPage = () => {
	return (
		<>
			<LandingNavbar />
			<div className="container">
				<LandingJumbotron />
				<LandingDescription />
			</div>
		</>
	);
};
