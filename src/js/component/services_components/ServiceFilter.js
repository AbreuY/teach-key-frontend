import React from "react";

export const ServiceFilter = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 text-center fs-2 mt-4">
						<header>Services</header>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="container-fluid">
							<div
								className="accordion accordion-flush shadow-lg p-3 mb-5 bg-body rounded mt-4"
								id="accordionFlushExample">
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingOne">
										<button
											style={{ padding: "revert" }}
											className="accordion-button collapsed text-danger fs-2"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseOne"
											aria-expanded="false"
											aria-controls="flush-collapseOne">
											Filter
										</button>
									</h2>
									<div
										id="flush-collapseOne"
										className="accordion-collapse collapse"
										aria-labelledby="flush-headingOne"
										data-bs-parent="#accordionFlushExample">
										<div className="accordion-body row">
											<div className="col-12 d-flex justify-content-around">
												<input placeholder="Title"></input>
												<button className="btn btn-outline-danger">Filter</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
