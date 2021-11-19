import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ServicesCard = ({ item }) => {
	return (
		<>
			<div className="card mb-3 border-0">
				<div className="row g-0">
					<div className="col-md-4 align-self-center">
						<img
							src={item.image}
							className=" shadow-sm img-fluid w-100 me-md-1 me-lg-1 me-0 me-sm-0 rounded"
							alt="..."
							style={{ height: "200px" }}
						/>
					</div>

					<div className="col-md-8 align-self-center ps-2">
						<div className="card-body shadow-sm px-5 py-4 bg-body rounded">
							<h4 className="card-title text-center mb-4" style={{ textDecoration: "underline red" }}>
								<strong>{item.title}</strong>
							</h4>
							<p className="card-text">{item.description}</p>
							<div className="text-center">
								<Link className="btn btn-danger" to={`/services/${item.id}`}>
									See more
								</Link>
							</div>
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
