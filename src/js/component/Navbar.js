import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{location.pathname == "/signup/professor" ? (
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Do you have an account?
									<Link to="/login" className="linkDecoration text-danger">
										{" "}
										Login Here.
									</Link>
								</a>
							</li>
						</ul>
					) : location.pathname == "/signup/student" ? (
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Do you have an account?
									<Link to="/login" className="linkDecoration text-danger">
										{" "}
										Login Here.
									</Link>
								</a>
							</li>
						</ul>
					) : (
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Item 1
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Item 2
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Login
								</a>
								<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
									<li>
										<Link to="/login" className="dropdown-item" href="#">
											Login
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Register
								</a>
								<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item" href="#">
											<Link to="/signup/student" className="linkDecoration">
												{" "}
												Register as Student
											</Link>
										</a>
									</li>

									<li>
										<a className="dropdown-item" href="#">
											<Link to="/signup/professor" className="linkDecoration">
												{" "}
												Register as Professor
											</Link>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};
