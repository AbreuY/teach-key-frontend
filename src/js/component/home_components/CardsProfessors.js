import React from "react";
import PropTypes from "prop-types";

export const CardsProfessors = ({ data }) => {
	return (
		<div className="col">
			<div className="card rounded-corners-card p-3 h-100" data-aos="fade-up" data-aos-duration="2000">
				<img src={data.img_profile} className="card-img-top rounded-3" alt="..." />
				<div className="card-body text-center">
					<h5 className="card-title">{data.user_name}</h5>
					<div className="d-flex justify-content-center">
						<div className="text-center">
							<div className="stars">
								<i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
								<i className="fa fa-star" /> <i className="fa fa-star" />
							</div>
						</div>
					</div>
					<p className="card-text">{data.country}</p>
				</div>
			</div>
		</div>
	);
};
CardsProfessors.propTypes = {
	data: PropTypes.object
};
