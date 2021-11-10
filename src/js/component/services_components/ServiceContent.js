import React from "react";

export const ServiceContent = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 text-center fs-2">
						<header>Services</header>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded justify-content-end">
							<ul className="navbar-nav">
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle ms-auto"
										href="#"
										id="navbarDarkDropdownMenuLink"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										Dropdown
									</a>
									<ul
										className="dropdown-menu dropdown-menu-dark"
										aria-labelledby="navbarDarkDropdownMenuLink">
										<li>
											<a className="dropdown-item" href="#">
												Action
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Another action
											</a>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Something else here
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};
