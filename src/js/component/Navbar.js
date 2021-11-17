import React, { useContext, useEffect, useMemo } from "react";
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
	const logout = event => {
		actions.deleteToken();
	};

	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
			{console.log(store.token, "from navbar")}
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					<div className="d-flex text-center">
						<img style={{ height: "3.75rem", width: "6.5" }} src={Logo} />
						<div className="h1 ms-2 align-self-center ">Teach Key</div>
					</div>
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
								<>
									{/* <li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="navbarDropdownMenuLink"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											Menu
										</a> */}
									<div className="dropdown">
										<button
											className="btn btn-outline-primary dropdown-toggle"
											type="button"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											Menu
										</button>
										<ul
											className="dropdown-menu dropdown-menu-end"
											aria-labelledby="navbarDropdownMenuLink">
											<li>
												<Link to="/services" className="dropdown-item" aria-current="page">
													Services
												</Link>
											</li>
											<li>
												<button
													className="dropdown-item"
													onClick={e => {
														logout();
													}}
													aria-current="page">
													Logout
												</button>
											</li>
											<li>
												<Link
													to={`/${localStorage.getItem("role")}/${localStorage.getItem(
														"id"
													)}/profile`}
													className="dropdown-item"
													aria-current="page">
													My Profile
												</Link>
											</li>
										</ul>
									</div>

									{/* <li className="nav-item dropdown">
										<Link to="/services" className="nav-link active" aria-current="page" href="#">
											Services
										</Link>
									</li>
									<button
										className="btn btn-outline-danger"
										onClick={e => {
											logout();
										}}>
										Logout
									</button> */}
								</>
							)}
							{!localStorage.getItem("token") && (
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
							{!localStorage.getItem("token") && (
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
