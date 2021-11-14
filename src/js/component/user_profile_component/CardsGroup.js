import React, { useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";

export const CardsGroup = ({ data }) => {
	useEffect(() => {}, [data.description]);
	return (
		<>
			<div className="col">
				<div className="card">
					<img src={data.image} className="card-img-top-services" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{data.title}</h5>
						<p className="card-text">{data.description}</p>
						<div className="d-flex flex-row justify-content-start mt-auto mt-sm-2 mb-2">
							<button
								href="#"
								className="me-1 btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#editSvcModal">
								Edit
							</button>
							<a href="#" className="btn btn-danger">
								Delete
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
CardsGroup.propTypes = {
	data: PropTypes.object
};
