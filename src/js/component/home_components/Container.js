import React from "react";

export const Container = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="text-center">
					<h1 className="display-4">Popular Services</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sapien at massa
						accumsan, sed vestibulum lacus facilisis. Cras eleifend tortor sed faucibus tristique.
					</p>
				</div>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card bg-ligth-green h-100">
						<img src="http://via.placeholder.com/640x360" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
						</div>
						<div className="card-text">
							<div className="d-flex justify-content-center">
								<div className="text-center">
									<span className="service-rating">4.6</span>
									<span>/5</span>
									<div className="stars">
										<i className="fa fa-star" /> <i className="fa fa-star" />{" "}
										<i className="fa fa-star" /> <i className="fa fa-star" />{" "}
									</div>
									<span>46 ratings & 15 reviews</span>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card bg-ligth-green h-100">
						<img src="http://via.placeholder.com/640x360" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This card has supporting text below as a natural lead-in to additional content.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card bg-ligth-green h-100">
						<img src="http://via.placeholder.com/640x360" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This card has even longer content than the first to show that equal height
								action.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
