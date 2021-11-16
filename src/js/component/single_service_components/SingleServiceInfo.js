import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const SingleServiceInfo = ({ info }) => {
	return (
		<div className="mt-5">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4 col-md-12 col-sm-12 align-self-center">
						<img src={info.image} className="shadow-lg 		 bg-body rounded w-100 h-100 " />
					</div>
					<div className="col-12 col-lg-8 col-md-12 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded">
						<header className="fs-2 text-center">{info.title}</header>
						<p className="mt-2 mb-4 fs-5">{info.description}</p>
						<div className="row mt-4 mb-5">
							<div className="col-6">
								<p className="text-danger text-center fs-4">{`Price: ${info.price} $`}</p>
							</div>
							<div className="col-6">
								<p className="text-black text-center fs-4">{`${info.schedule} ${
									info.schedule == 1 ? "Hour" : "Hours"
								} `}</p>
							</div>
						</div>
						<div className="row mt-0">
							<div className="col-12 text-center">
								<Link className="btn btn-outline-danger" to={`/professor/${info.professor_id}/profile`}>
									See professor profile!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SingleServiceInfo.propTypes = {
	info: PropTypes.object
};
