import React from "react";

export const ServiceFilter = () => {
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
						<div className="container-fluid">
							<nav className="navbar shadow-lg p-3 mb-5 bg-body rounded">
								<button
									type="button"
									className="btn btn-outline-danger"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal">
									Filter by
								</button>

								<input className="" placeholder="Filter by key words"></input>

								<div
									className="modal fade"
									id="exampleModal"
									tabIndex="-1"
									aria-labelledby="exampleModalLabel"
									aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLabel">
													Modal title
												</h5>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"></button>
											</div>
											<div className="modal-body">...</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-bs-dismiss="modal">
													Close
												</button>
												<button type="button" className="btn btn-primary">
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
