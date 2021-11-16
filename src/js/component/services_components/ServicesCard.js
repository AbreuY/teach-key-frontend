import React from "react";
import PropTypes from "prop-types";

export const ServicesCard = ({ item }) => {
	return (
		<>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={item.image} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{item.title}</h5>
							<p className="card-text">{item.description}</p>
							<p className="card-text">
								<small className="text-muted">{item.schedule}</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

ServicesCard.propTypes = {
	item: PropTypes.object
};
