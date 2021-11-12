import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CustomDatePicker } from "./CustomDatePicker";

const BASE_URL = "http://localhost:3010";
export const UserDetails = () => {
	const params = useParams();
	const [userName, setUserName] = useState("");
	const [country, setCountry] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [dob, setDob] = useState("");
	const [contactMethod, setContactMethod] = useState("");
	const [secondEmail, setSecondEmail] = useState("");
	var bodyData = undefined;
	const updateUserDetails = async (role, id) => {
		if (role == "student") {
			bodyData = {
				user_name: userName,
				country: country,
				email: email,
				dob: dob,
				password: password
			};
		} else {
			bodyData = {
				contact_methods: contactMethod,
				country: country,
				dob: dob,
				email: email,
				secondary_email: secondEmail,
				user_name: userName
			};
		}
		const response = await fetch(`${BASE_URL}/${role}/${id}/profile`, {
			method: "PUT",
			body: JSON.stringify(bodyData),
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (response.ok) {
			const body = await response.json();
			alert("Data Update");
		}
	};

	const getUserDetails = async (role, id) => {
		const response = await fetch(`${BASE_URL}/${role}/${id}/profile`);
		if (response.ok) {
			const body = await response.json();
			if (role == "student") {
				setCountry(body.country);
				setUserName(body.user_name);
				setEmail(body.email);
				setDob(body.dob);
			} else {
				setCountry(body.country);
				setUserName(body.user_name);
				setEmail(body.email);
				setDob(body.dob);
				setContactMethod(body.contact_methods);
				setSecondEmail(body.secondary_email);
				console.log(country, secondEmail, contactMethod);
			}
		}
	};
	const dobData = dob => {
		setDob(dob);
		console.log(dob);
	};

	useEffect(() => {
		if (params.role && params.id) {
			getUserDetails(params.role, params.id);
		}
	}, [params.role, params.id]);
	return (
		<div className="card">
			<div className="card-body">
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">User Name</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input
							type="text"
							className="form-control"
							onChange={e => {
								setUserName(e.target.value);
							}}
							value={userName}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Date of Birth</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<CustomDatePicker dobData={dobData} />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Country</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input
							type="text"
							className="form-control"
							onChange={e => {
								setCountry(e.target.value);
							}}
							value={country}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Email</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input
							type="text"
							className="form-control"
							onChange={e => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
					</div>
				</div>
				{params.role == "student" ? (
					""
				) : (
					<>
						<div className="row mb-3">
							<div className="col-sm-3">
								<h6 className="mb-0">Secondary email</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								<input
									type="text"
									className="form-control"
									onChange={e => {
										setSecondEmail(e.target.value);
									}}
									value={secondEmail == null ? "write your second email" : secondEmail}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-sm-3">
								<h6 className="mb-0">Contact Methods</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								<input
									type="text"
									className="form-control"
									onChange={e => {
										setContactMethod(e.target.value);
									}}
									value={contactMethod == null ? "write your contact method" : contactMethod}
								/>
							</div>
						</div>
					</>
				)}

				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-9 text-secondary">
						<button
							type="button"
							className="btn btn-primary px-4"
							onClick={() => {
								updateUserDetails(params.role, params.id);
							}}>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
