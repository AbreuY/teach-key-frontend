import React from "react";

export const CardsProfessors = () => {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-4">
			<div className="col">
				<div className="card h-100">
					<img src="https://i.imgur.com/2o1qfVY.jpg" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Joseprofessor32</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sapien at massa
							accumsan, sed vestibulum lacus facilisis. Cras eleifend tortor sed faucibus tristique.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
					</div>
				</div>
			</div>
		</div>
	);
};
