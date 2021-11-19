import React, { useContext } from "react";
import { AppContext } from "../../store/appContext";
import PropTypes from "prop-types";

export const Container3 = props => {
	return (
		<div
			className="container-fluid bg-black bg-gradient text-white mt-5"
			data-aos="fade-up"
			data-aos-duration="2000">
			<div className="container container-section">
				<div className="app-shape-1"></div>
				<div className="app-shape-2"></div>
				<div className="app-shape-3"></div>
				<div className="app-shape-4"></div>
				<div className={props.section.orientation == "right" ? "d-flex flex-row-reverse" : "row"}>
					<div className="col-md-6 p-4">
						<img
							alt="info"
							className="img-fluid p-2 border-warning img-rounded border border-3"
							src={props.section.imgUrl}
						/>
					</div>
					<div className="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
						<div className="text-center">
							<h2>{props.section.title}</h2>
							<p>{props.section.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Container3.propTypes = {
	section: PropTypes.object
};
