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
			Swal.fire({
				icon: "info",
				text: `Error al obtener datos ${error}`
			});
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
						className="col-4 text-center fs-1 shadow py-3 mb-3 rounded fw-bold"
						data-aos="fade-down"
						data-aos-duration="1500"
						style={{ marginTop: "6rem", color: "#E14F3F" }}>
						<header>Servicios</header>
					</div>
					<div className="col-4"></div>
				</div>
				<div className="container">
					<div className="row justify-content-center shadow p-3  rounded mb-5">
						<div className="col-8 d-flex align-items-center">
							<input
								className="border-0 w-100 shadow p-3  rounded-corners-card filterInput"
								type="text"
								value={queryString}
								onChange={event => {
									setQueryString(event.target.value);
								}}
								placeholder="Busca un tema en específico"></input>
						</div>
						<div className="col-4 my-4 text-center align-self-center">
							<button
								onClick={event => {
									getFilter();
								}}
								className="btn cinnabar-btn shadow w-25">
								Buscar <i className="fas fa-search ms-2"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				{services.map((service, index) => {
					return (
						<div key={index} className="row" data-aos="fade-right" data-aos-duration="1000">
							<div className="shadow p-3 mb-5 blizzard-blue rounded-corners-card col-12">
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
						className="btn cinnabar-outline-btn mb-3 fw-bold">
						Cargar más
					</button>
				</div>
				<div className="col-4"></div>
			</div>
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 text-center">
					<Link to="/" className="btn cinnabar-outline-btn mb-4 w-25 fw-bold">
						Inicio
					</Link>
				</div>
				<div className="col-3"></div>
			</div>
		</>
	);
};
