import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Logo2 from "../../../img/logo2.png";
import { AppContext } from "../../store/appContext";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

export const LoginContent = props => {
	const location = useLocation();
	const { store, actions } = useContext(AppContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const Swal = require("sweetalert2");

	async function login(event) {
		let data = {
			email: email,
			password: password
		};

		let response = await fetch(props.url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*"
			}
		});
		const body = await response.json();
		if (response.ok) {
			actions.setAuthorized(true);
			actions.setToken(body.token);
			localStorage.setItem("id", body.id);
			localStorage.setItem("role", body.role);
			if (body.role == "student") {
				history.push("/services");
			} else {
				history.push(`/${body.role}/${body.id}/profile`);
			}
		} else {
			let timerInterval = Swal.fire({
				icon: "error",
				title: "Invalid Data",
				html: "Try again!",
				timer: 2500,

				willClose: () => {
					clearInterval(timerInterval);
				}
			}).then(result => {
				if (result.dismiss === Swal.DismissReason.timer) {
				}
			});
		}
	}

	return (
		<>
			<div className="container h-100">
				<div className="row align-items-center mt-5">
					<div
						className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5 shadow-sm p-3 mb-5 bg-body rounded "
						data-aos="fade-right"
						data-aos-duration="1500"
						data-aos-easing="ease-in-sine">
						<header className=" fs-1 text-center text-danger">
							<strong>{props.header}</strong>
						</header>
						<p
							className="text-center"
							data-aos="fade-right"
							data-aos-duration="2500"
							data-aos-easing="ease-in-sine">
							{props.headerDescription}
						</p>
					</div>
					<div className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5" data-aos="zoom-out-left">
						<div className="row align-items-center">
							<div className="col-xl-2 col-lg-1 col-md-1"></div>
							<div className="col-xl-8 col-lg-10 col-md-10 col-sm-12  p-3 mb-5 rounded">
								<p className="text-center fs-2 text-md-center text-sm-center">
									<img src={Logo2} />
								</p>
								<div>
									<p className="inputPText1  text-md-center text-sm-center text-center">
										{"Don't have an account? Register as a "}
										<Link to="/signup/student" className="aLinkDecoration text-danger">
											<strong>Student </strong>
										</Link>
										or as a{" "}
										<Link to="/signup/professor" className="text-danger aLinkDecoration">
											<strong>Professor</strong>
										</Link>
									</p>
								</div>
								<div className="container-fluid">
									<div className="row pt-3 loginInput text-center">
										<div className="col-12">
											<input
												className="pt-5 pt-sm-5 pt-md-5 pt-lg-3 text-center"
												type="email"
												placeholder="Email"
												maxLength="100"
												onChange={e => {
													setEmail(e.target.value);
												}}
												value={email}
											/>
										</div>
									</div>
									<div className="row pt-3 loginInput text-center">
										<div className="col-12">
											<input
												id="input1"
												className="pt-5 pt-sm-5 pt-md-5 pt-lg-5 text-center inputFocus"
												type="password"
												placeholder="Password"
												maxLength="100"
												onChange={e => {
													setPassword(e.target.value);
												}}
												value={password}
											/>
										</div>
										<a
											id="changeIcon1"
											style={{ textDecoration: "none", paddingTop: "1rem" }}
											className="far fa-eye text-black text-center"
											type="checkbox"
											onClick={e => {
												let showPassword = document.getElementById("input1");
												if (showPassword.type === "password") {
													showPassword.type = "text";
												} else {
													showPassword.type = "password";
												}

												let changeIcon = document.getElementById("changeIcon1");
												if (changeIcon.className === "far fa-eye text-black text-center") {
													changeIcon.className = "far fa-eye-slash text-black text-center";
												} else {
													changeIcon.className = "far fa-eye text-black text-center";
												}
											}}
										/>
									</div>
									<div className="row pt-3 text-center pt-5 pt-sm-5 pt-md-5 pt-lg-5 text-center">
										<div className="col">
											<button className="btn cinnabar-outline-btn" onClick={login}>
												Iniciar sesión
											</button>
										</div>
									</div>
									<div className="row pt-1 text-center pt-1 pt-sm-1 pt-md-1 pt-lg-1 text-center">
										<div className="col">
											<Link className="btn cinnabar-outline-btn" to="/">
												Página principal
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-2 col-lg-1 col-md-1"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

LoginContent.propTypes = {
	headerDescription: PropTypes.string,
	header: PropTypes.string,
	url: PropTypes.string
};
