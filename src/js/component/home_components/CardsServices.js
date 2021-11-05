import React from "react";

export const CardsServices = () => {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-4">
			<div className="col">
				<div className="card bg-ligth-green h-100">
					<img src="http://via.placeholder.com/640x360" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<div className="d-flex justify-content-start">
							<div className="text-center">
								<div className="stars">
									<i className="fa fa-star" /> <i className="fa fa-star" />{" "}
									<i className="fa fa-star" /> <i className="fa fa-star" />{" "}
									<i className="fa fa-star" />
								</div>
							</div>
						</div>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
					</div>
					<div className="card-footer">{"Footer text"}</div>
				</div>
			</div>
		</div>
	);
};
