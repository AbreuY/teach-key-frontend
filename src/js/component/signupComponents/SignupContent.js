import React, { useState } from "react";
import PropTypes from "prop-types";
import { SignupCountryInputs } from "./SignupCountryInputs";
import { useHistory } from "react-router";

import Swal from "sweetalert2";

export const SignupContent = props => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [country, setCountry] = useState("");
	const history = useHistory();

	const Swal = require("sweetalert2");

	const countryData = country => {
		setCountry(country);
	};
	async function signup(event) {
		let data = {
			user_name: username,
			email: email,
			password: password,
			country: country
		};

		let response = await fetch(props.url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (response.ok) {
			history.push("/login" + props.sendTo);
		} else {
			alert(response.statusText);
		}
	}
	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	return (
		<>
			<div className="container">
				<div className="row align-items-center mt-5">
					<div
						className="col-12 col-md-12 col-sm-12 col-lg-6 text-md-center text-sm-center signupBox text-center shadow-lg p-3 mb-5 bg-body rounded "
						data-aos="zoom-in"
						data-aos-duration="1500">
						<div className="fs-2">
							<strong>{props.title}</strong>
						</div>
						<p className="inputPText1 pt-3">{props.titleDescription}</p>
						<div className="row pt-3 signupInput">
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-3">
								<input
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="text"
									placeholder="Username"
									maxLength="100"
									onChange={event => {
										setUsername(event.target.value);
									}}
									value={username}
									id="signupUsername"
								/>
							</div>
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-3">
								<input
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="text"
									placeholder="Email"
									maxLength="100"
									onChange={event => {
										setEmail(event.target.value);
									}}
									value={email}
									id="signupEmail"
								/>
							</div>
						</div>
						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4 signupInput">
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-0 pt-sm-3 pt-md-3 pt-lg-3">
								<input
									id="inputPassword1"
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="password"
									placeholder="Password"
									maxLength="30"
									onChange={event => {
										setPassword(event.target.value);
									}}
									value={password}
								/>
							</div>
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-3">
								<input
									style={{}}
									id="inputConfirmPassword1"
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="password"
									placeholder="Confirm Password"
									maxLength="30"
								/>
							</div>
						</div>

						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4">
							<div className="col-12 col-md-12 col-sm-12 col-lg-12 pt-3">
								<div className="pt-3 pt-sm-3 pt-md-2 pt-lg-0 ">
									<p style={{ color: "rgb(236, 73, 73)", fontSize: "21px" }}>
										<strong>Country</strong>
									</p>
									<div>
										<SignupCountryInputs id="country1" countryData={countryData} />
									</div>
								</div>
							</div>
						</div>

						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4">
							<div className="col">
								<button
									onClick={event => {
										let inputPassword = document.getElementById("inputPassword1");
										let inputConfirmPassword = document.getElementById("inputConfirmPassword1");
										let inputUsername = document.getElementById("signupUsername");
										let inputEmail = document.getElementById("signupEmail");
										let inputCountry = country;
										if (
											inputPassword.value == "" ||
											inputUsername.value == "" ||
											inputEmail.value == "" ||
											inputConfirmPassword.value == ""
										) {
											Swal.fire({
												icon: "error",
												title: "Oops...",
												text: "You need to fill up all the forms!"
											});
											inputPassword.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 errorInput";
											inputConfirmPassword.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 errorInput";
											inputEmail.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 errorInput";
											inputUsername.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 errorInput";
										} else if (
											inputPassword.value != inputConfirmPassword.value ||
											inputPassword.value == "" ||
											inputConfirmPassword.value == ""
										) {
											Swal.fire({
												icon: "error",
												title: "Oops...",
												text: "Passwords aren't matching!"
											});
											inputPassword.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 errorInput";
											inputConfirmPassword.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 errorInput";
											inputEmail.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 ";
											inputUsername.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 ";
										} else if (
											inputCountry == "Select" ||
											inputCountry == "" ||
											inputCountry == "0"
										) {
											Swal.fire({
												icon: "info",

												text: "Please, choose your country"
											});
											inputPassword.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0 ";
											inputConfirmPassword.className = "pt-3 pt-sm-3 pt-md-2 pt-lg-0";
										} else if (!validateEmail(inputEmail.value)) {
											Swal.fire({
												icon: "info",

												text: "Please, write a valid email"
											});
										} else signup();
									}}
									type="button"
									className="btn btn-outline-danger">
									<strong>Join now!</strong>
								</button>
							</div>
						</div>
						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4 signupInput" />
					</div>
					<div className="col-md-12 col-lg-6 text-md-center text-sm-center text-center">
						<div className="row">
							<div className="col " data-aos="zoom-in" data-aos-duration="1500">
								<div className="ms-lg-3 ms-md">
									<img
										className="rounded-circle shadow-lg mb-5 bg-body h-100 w-100"
										style={{ height: "25rem", width: "32.5rem" }}
										src={props.image}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

SignupContent.propTypes = {
	title: PropTypes.string,
	titleDescription: PropTypes.string,
	image: PropTypes.string,
	url: PropTypes.string,
	sendTo: PropTypes.string
};
