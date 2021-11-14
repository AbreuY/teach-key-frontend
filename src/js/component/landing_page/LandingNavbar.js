import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo2.png";
export const LandingNavbar = () => {
	return (
		<div className="container-fluid bg-light">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<Link to="/" className="navbar-brand" href="#">
						<div className="d-flex text-center">
							<img style={{ height: "3.75rem", width: "6.5" }} src={Logo} />
							<div className="h1 ms-2 align-self-center ">Teach Key</div>
							<span className="h2 px-5 py-2 d-flex">
								Nuestro lema es: Nunca es tarde para aprender algo nuevo
							</span>
						</div>
					</Link>
					<button type="button" className="btn btn-primary ">
						Main Page
					</button>
				</div>
			</nav>
		</div>
	);
};
