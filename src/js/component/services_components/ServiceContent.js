import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ServicesCard } from "./ServicesCard";

const URL = "http://localhost:3010/services";

export const ServiceContent = () => {
	const [services, setServices] = useState([]);

	const adquireServices = async () => {
		try {
			const response = await fetch("http://localhost:3010/services");
			const body = await response.json();
			setServices(body);
		} catch (error) {
			alert(`failed to fetch ${error}`);
		}
	};

	useEffect(() => {
		adquireServices();
	}, []);

	return (
		<>
			<div className="container">
				{services.map((service, index) => {
					return (
						<>
							<div className="row">
								<div className="col-12">
									<ServicesCard item={service} key={index} />
								</div>
							</div>
						</>
					);
				})}
			</div>
			<div className="row">
				<div className="col-4"></div>
				<div className="col-4 text-center">
					<button className="btn btn-outline-danger mb-3">Load more</button>
				</div>
				<div className="col-4"></div>
			</div>
		</>
	);
};
