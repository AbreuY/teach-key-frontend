import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext";

export const CardServices = ({ data }) => {
	const { store, actions } = useContext(AppContext);
	useEffect(() => {}, []);
	return (
		<>
			<div className="col">
				<div className="card">
					<img src={data.image} className="card-img-top-services" alt="..." />
					<div className="card-body">
						<h5 className="card-title char-limit">
							{data.title} {data.id}
						</h5>
						<p className="card-text char-limit">{data.description}</p>
						<div className="d-flex flex-row justify-content-start mt-auto mt-sm-2 mb-2">
							<button
								onClick={e => {
									actions.getSingleServiceDetail(data.id, true);
								}}
								className="me-1 btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#svcModal">
								Edit
							</button>
							<button
								onClick={e => {
									actions.deleteService(data.id);
								}}
								className="btn btn-danger">
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
CardServices.propTypes = {
	data: PropTypes.object
};
