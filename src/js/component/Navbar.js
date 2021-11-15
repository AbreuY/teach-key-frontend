import React, { useContext, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const Navbar = () => {
	const location = useLocation();
	const { store, actions } = useContext(AppContext);
	const token = useMemo(() => {
		return localStorage.getItem("token");
	}, [localStorage]);
	const logout = event => {
		actions.deleteToken();
	};

	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
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
				{store.token && (
					<>
						<button
							className="btn btn-outline-danger"
							onClick={e => {
								logout();
							}}>
							Logout
						</button>
					</>
				)}
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{location.pathname == "/signup/professor" ? (
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<div className="d-flex">
									<p className="my-auto">Do you have an account? Login here as</p>
									<Link to="/login/professor" className="linkDecoration text-danger nav-link active">
										{" "}
										Professor{" "}
									</Link>
									<p className="my-auto">or </p>
									<Link to="/login/student" className="linkDecoration text-danger nav-link">
										Student
									</Link>
								</div>
							</li>
						</ul>
					) : location.pathname == "/signup/student" ? (
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<div className="d-flex">
									<p className="my-auto">Do you have an account? Login here as</p>
									<Link to="/login/professor" className="linkDecoration text-danger nav-link active">
										{" "}
										Professor{" "}
									</Link>
									<p className="my-auto">or </p>
									<Link to="/login/student" className="linkDecoration text-danger nav-link">
										Student
									</Link>
								</div>
							</li>
						</ul>
					) : (
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							{store.token && (
								<li className="nav-item dropdown">
									<Link to="/services" className="nav-link active" aria-current="page" href="#">
										Services
									</Link>
								</li>
							)}
							{!store.token && (
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
											<Link to="/login/professor" className="dropdown-item">
												Login as professor
											</Link>
										</li>
										<li>
											<Link to="/login/student" className="dropdown-item">
												Login as student
											</Link>
										</li>
									</ul>
								</li>
							)}
							{!store.token && (
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
											<Link to="/signup/student" className="linkDecoration dropdown-item">
												{" "}
												Register as Student
											</Link>
										</li>

										<li>
											<Link to="/signup/professor" className="linkDecoration dropdown-item">
												{" "}
												Register as Professor
											</Link>
										</li>
									</ul>
								</li>
							)}
						</ul>
					)}
				</div>
			</div>
		</nav>
	);
};
