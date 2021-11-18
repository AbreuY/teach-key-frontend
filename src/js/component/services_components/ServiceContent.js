import React, { useState, useEffect, useContext } from "react";
import { ServicesCard } from "./ServicesCard";
import { AppContext } from "../../store/appContext";

export const ServiceContent = () => {
	const { store, actions } = useContext(AppContext);
	const [services, setServices] = useState([]);

	const adquireServices = async () => {
		try {
			const response = await fetch(`${store.BASE_URL}/services`);
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
						<div key={index} className="row">
							<div className="col-12">
								<ServicesCard item={service} />
							</div>
						</div>
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
