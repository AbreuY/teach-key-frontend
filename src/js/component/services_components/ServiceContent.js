import React, { useState, useEffect, useContext } from "react";
import { ServicesCard } from "./ServicesCard";
import { AppContext } from "../../store/appContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
			<div className="container">
				<div className="row mb-4">
					<div className="col-4"></div>
					<div
						className="col-4 text-center fs-1 text-danger shadow py-3 mb-3 rounded"
						data-aos="fade-down"
						data-aos-duration="1500"
						style={{ marginTop: "6rem" }}>
						<header>
							<strong>Services</strong>
						</header>
					</div>
					<div className="col-4"></div>
				</div>
				<div className="container">
					<div className="row justify-content-center shadow p-3 bg-body rounded mb-5">
						<div className="col-8 align-self-center">
							<input
								className="border-0 w-100 shadow p-3 bg-body rounded filterInput"
								type="text"
								value={queryString}
								onChange={event => {
									setQueryString(event.target.value);
								}}
								placeholder="Search for an specific topic"></input>
						</div>
						<div className="col-4 my-4 text-center align-self-center">
							<button
								onClick={event => {
									getFilter();
								}}
								className="btn btn-danger w-50 shadow p-3">
								Filter
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				{services.map((service, index) => {
					return (
						<div key={index} className="row" data-aos="fade-right" data-aos-duration="1500">
							<div className="shadow p-3 mb-5 bg-body rounded col-12">
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
						<strong>Load more</strong>
					</button>
				</div>
				<div className="col-4"></div>
			</div>
			<div className="row">
				<div className="col-4"></div>
				<div className="col-4 text-center">
					<Link to="/" className="btn btn-outline-danger mb-4">
						<strong>Main Page</strong>
					</Link>
				</div>
				<div className="col-4"></div>
			</div>
		</>
	);
};
