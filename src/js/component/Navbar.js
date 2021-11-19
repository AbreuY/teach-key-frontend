import React, { useContext, useMemo } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import Logo from "../../img/logo2.png";

export const Navbar = () => {
	const location = useLocation();
	const params = useParams();
	const { store, actions } = useContext(AppContext);
	const token = useMemo(() => {
		return localStorage.getItem("token");
	}, [localStorage]);

	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-blizzard">
			<div className="container anchorStyle">
				<Link to="/" className="navbar-brand anchorStyle">
					<div
						className="d-flex ps-5 ms-1 text-center shadow rounded-corners-card bg-white align-self-center"
						style={{ width: "17rem", height: "2.8rem" }}>
						<img style={{ height: "2.3rem" }} src={Logo} className="mt-1" />
						<div className="h4 ms-2 align-self-center mt-1 ">Teach Key</div>
					</div>
				</Link>

				<div className="">
					{location.pathname == "/signup/professor" ? (
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<div className="d-flex">
									<p className="my-auto">Do you have an account? Login here as</p>
									<Link to="/login/professor" className="linkDecoration text-danger nav-link active">
										{" "}
										<strong>Professor</strong>{" "}
									</Link>
									<p className="my-auto">or </p>
									<Link to="/login/student" className="linkDecoration text-danger nav-link">
										<strong>Student</strong>
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
										<strong>Professor</strong>{" "}
									</Link>
									<p className="my-auto">or </p>
									<Link to="/login/student" className="linkDecoration text-danger nav-link">
										<strong>Student</strong>
									</Link>
								</div>
							</li>
						</ul>
					) : (
						<ul className="d-flex navbar-nav ms-auto mb-2 mb-lg-0">
							{store.token && (
								<>
									<div className="d-flex">
										<div>
											<Link to="/services" className="btn cinnabar-outline-btn fw-bold">
												Services
											</Link>
										</div>
										<div>
											<Link
												to={`/${localStorage.getItem("role")}/${localStorage.getItem(
													"id"
												)}/profile`}
												className="btn cinnabar-outline-btn mx-3 fw-bold">
												My Profile
											</Link>
										</div>
										<div>
											<button
												className="btn cinnabar-outline-btn fw-bold"
												onClick={e => {
													actions.Logout();
												}}
												aria-current="page">
												Logout
											</button>
										</div>
									</div>
								</>
							)}
							{!localStorage.getItem("token") && (
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle btn cinnabar-outline-btn anchorStyle"
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
							{!localStorage.getItem("token") && (
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle anchorStyle  btn cinnabar-outline-btn"
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
