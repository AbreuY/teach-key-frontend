import React, { useState, useEffect, useContext } from "react";
import { ServicesCard } from "./ServicesCard";
import { AppContext } from "../../store/appContext";
import Swal from "sweetalert2";

export const ServiceContent = () => {
	const { store, actions } = useContext(AppContext);
	const [services, setServices] = useState([]);
	const [queryString, setQueryString] = useState("");

	const getFilter = async event => {
		let data = {
			title: queryString
		};

		let response = await fetch(`${store.BASE_URL}/filter/services`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (response.ok) {
			const body = await response.json();
			console.log(typeof body, body);
			if (body.length == 0) {
				Swal.fire({
					icon: "info",

					text: "Servicio no encontrado!"
				});
			} else {
				setServices(body);
			}
		}
	};

	const adquireServices = async () => {
		try {
			const response = await fetch(`${store.BASE_URL}/services?limit=5`);
			const body = await response.json();
			setServices(body);
		} catch (error) {
			alert(`failed to fetch ${error}`);
		}
	};

	const loadMoreServices = async limit => {
		try {
			const response = await fetch(`${store.BASE_URL}/services?${limit}`);
			const body = await response.json();
			setServices(body);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		adquireServices();
	}, []);

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 text-center fs-2 mt-4">
						<header>Services</header>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="container-fluid">
							<div
								className="accordion accordion-flush shadow-lg p-3 mb-5 bg-body rounded mt-4"
								id="accordionFlushExample">
								<div className="accordion-item">
									<h2 className="accordion-header" id="flush-headingOne">
										<button
											style={{ padding: "revert" }}
											className="accordion-button collapsed text-danger fs-2"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#flush-collapseOne"
											aria-expanded="false"
											aria-controls="flush-collapseOne">
											Filter
										</button>
									</h2>
									<div
										id="flush-collapseOne"
										className="accordion-collapse collapse"
										aria-labelledby="flush-headingOne"
										data-bs-parent="#accordionFlushExample">
										<div className="accordion-body row">
											<div className="col-12 d-flex justify-content-around">
												<input
													type="text"
													value={queryString}
													onChange={event => {
														setQueryString(event.target.value);
													}}
													placeholder="Search for an specific topic"></input>
												<button
													onClick={event => {
														getFilter();
													}}
													className="btn btn-outline-danger">
													Filter
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
					<button
						onClick={event => {
							loadMoreServices(10);
							if (services.length < 10) {
								loadMoreServices(15);
							} else if (services.length < 15) {
								loadMoreServices(20);
							}
						}}
						className="btn btn-outline-danger mb-3">
						Load more
					</button>
				</div>
				<div className="col-4"></div>
			</div>
		</>
	);
};
