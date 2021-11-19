import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const SingleServiceInfo = ({ info }) => {
	return (
		<div className="mt-5">
			<div className="container">
				<div className="row align-items-center" style={{ marginTop: "10rem", marginBottom: "6rem" }}>
					<div
						className="col-12 col-lg-4 col-md-12 col-sm-12 align-self-center px-md-0 px-0 px-sm-0 px-lg-2 "
						data-aos="fade-right">
						<img src={info.image} className="shadow-lg bg-body rounded-corners-card w-100 h-100 " />
					</div>
					<div
						className="col-12 col-lg-8 col-md-12 col-sm-12 shadow-lg p-3 bg-body  rounded-corners-card"
						data-aos="fade-left">
						<header className="fs-2 text-center fw-bold" style={{ textDecoration: "underline #25BCC2" }}>
							{info.title}
						</header>
						<p className="mt-2 mb-4 fs-5 px-4">{info.description}</p>
						<div className="row mt-4 mb-5">
							<div className="col-6 mt-2 text-center">
								<span className="text-center fs-4" style={{ color: "#E14F3F" }}>
									<strong>Precio: </strong>
									{`${info.price} `}
									<i className="fas fa-dollar-sign fw-bold"></i>
								</span>
							</div>
							<div className="col-6 mt-2 text-center">
								<span className="text-black text-center fs-4">
									<strong>Tiempo: </strong>
									{`${info.schedule} ${info.schedule == 1 ? "Hour" : "Hours"} `}
									<i className="far fa-clock"></i>
								</span>
							</div>
						</div>
						<div className="row mt-0">
							<div className="col-12 text-center">
								<Link
									className="btn cinnabar-btn"
									onClick={e => {
										localStorage.setItem("uid", `${info.professor_id}`);
									}}
									to={`/user/profile`}>
									Ver perfil de profesor
								</Link>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-12 text-center">
								<Link to="/services" className="btn cinnabar-btn">
									Regresar a servicios
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
