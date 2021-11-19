import React from "react";
import PropTypes from "prop-types";

export const CardsServices = ({ data }) => {
	return (
		<div className="col">
			<div className="card rounded-corners-card p-3 h-100" data-aos="flip-right">
				<img src={data.image} className="card-img-top rounded-3" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{data.title}</h5>
					<div className="d-flex justify-content-start">
						<div className="text-center">
							<div className="stars">
								<i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
								<i className="fa fa-star" /> <i className="fa fa-star" />
							</div>
						</div>
					</div>
					<p className="card-text">{data.description}</p>
				</div>
			</div>
		</div>
	);
};
CardsServices.propTypes = {
	data: PropTypes.object
};
