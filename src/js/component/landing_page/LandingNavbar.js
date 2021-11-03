import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo2.png";
export const LandingNavbar = () => {
	return (
		<div className="container-fluid bg-light">
			<nav className="navbar navbar-expand-lg navbar-light row">
				<div className="container">
					<Link to="/" className="navbar-brand" href="#">
						<div className="d-flex">
							<img
								className="col-2 col-md-3 col-lg-3 "
								style={{ height: "3.75rem", width: "6.5" }}
								src={Logo}
							/>
							<div className="col-2 col-md-3 col-lg-3 ">Teach Key</div>
							<span className="col-2 col-md-3 col-lg-3 h2 ps-8">
								{" "}
								Nunca es tarde para aprender algo nuevo
							</span>
						</div>
					</Link>
					<button type="button" className="btn btn-primary w-75 h-50">
						Main Page
					</button>
				</div>
			</nav>
		</div>
	);
};
