import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext";
import default_image from "../../../img/default_image.jpg";
import { Link } from "react-router-dom";
export const CardServices = ({ data }) => {
	const { store, actions } = useContext(AppContext);
	const history = useHistory();
	const getRole = () => {
		return localStorage.getItem("role");
	};
	useEffect(() => {}, []);
	return (
		<>
			<div className="col">
				<div className="card">
					<img
						src={data.image == null ? default_image : data.image}
						className="card-img-top-services"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title char-limit">
							<Link to={`/services/${data.id}`}>{data.title}</Link>
						</h5>
						<p className="card-text char-limit">{data.description}</p>
						<div className="d-flex flex-row justify-content-start mt-auto mt-sm-2 mb-2">
							{getRole() == "student" ? (
								<button
									onClick={e => {
										history.push(`/services/${data.id}`);
									}}
									className="me-1 btn btn-primary rounded-pill">
									View Service
								</button>
							) : (
								<>
									<button
										onClick={e => {
											actions.getSingleServiceDetail(data.id, true);
										}}
										className="me-1 btn btn-primary rounded-pill"
										data-bs-toggle="modal"
										data-bs-target="#svcModal">
										Edit
									</button>
									<button
										onClick={e => {
											actions.deleteService(data.id);
										}}
										className="btn btn-danger rounded-pill">
										Delete
									</button>
								</>
							)}
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
