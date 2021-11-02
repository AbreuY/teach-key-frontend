import React from "react";
import { Link } from "react-router-dom";

export const LandingNavbar = () => {
	return (
		<div className="container-fluid bg-light">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					<Link to="/" className="navbar-brand" href="#">
						<div className="d-flex">
							<img
								style={{ height: "3.75rem", width: "6.875rem" }}
								src="https://i.pinimg.com/474x/bb/25/ce/bb25ce214c0f471bc8e861b716442969.jpg"
							/>
							<h3 className="ms-2 align-self-center">Teach Key</h3>
						</div>
					</Link>
					<button type="button" className="btn btn-primary">
						Main Page
					</button>
				</div>
			</nav>
		</div>
	);
};
