import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo2.png";
export const LandingNavbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand" href="#">
					<div className="d-flex">
						<img className=" " style={{ height: "90px", width: "105px" }} src={Logo} />
						<div className="h1 py-3">Teach Key</div>
						<span className="h2 px-5 py-3">Nunca es tarde para aprender algo nuevo</span>
					</div>
					<button type="button" className="btn btn-primary">
						Main Page
					</button>
				</Link>
			</div>
		</nav>
	);
};
