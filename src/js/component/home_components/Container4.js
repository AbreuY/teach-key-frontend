import React, { useContext } from "react";
import { AppContext } from "../../store/appContext";
import PropTypes from "prop-types";

export const Container4 = props => {
	return (
		<div
			className="container-fluid bg-black bg-gradient text-white mt-5"
			data-aos="fade-up"
			data-aos-duration="2000">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
						<div className="text-center">
							<h2>{props.section.title}</h2>
							<p>{props.section.description}</p>
						</div>
					</div>
					<div className="col-md-6">
						<div>
							<img alt="info" className="img-fluid p-4 img-rounded" src={props.section.imgUrl} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Container4.propTypes = {
	section: PropTypes.object
};
