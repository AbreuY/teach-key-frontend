import React from "react";
import PropTypes from "prop-types";
import { SignupCountryInputs } from "./SignupCountryInputs";

export const SignupContent = props => {
	return (
		<>
			<div className="container">
				<div className="row align-items-center mt-5">
					<div className="col-12 col-md-12 col-sm-12 col-lg-6 text-md-center text-sm-center signupBox text-center shadow-lg p-3 mb-5 bg-body rounded">
						<div className="fs-2">{props.title}</div>
						<p className="text-secondary pt-3">{props.titleDescription}</p>
						<div className="row pt-3 signupInput">
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-3">
								<input
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="text"
									placeholder="Username"
									maxLength="100"
								/>
							</div>
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-3">
								<input
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="email"
									placeholder="Email"
									maxLength="100"
								/>
							</div>
						</div>
						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4 signupInput">
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-0 pt-sm-3 pt-md-3 pt-lg-3">
								<input
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="password"
									placeholder="Password"
									maxLength="30"
								/>
							</div>
							<div className="col-12 col-md-6 col-sm-6 col-lg-6 pt-3">
								<input
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
									<p style={{ color: "rgb(236, 73, 73)", fontSize: "21px" }}>Country</p>
									<div>
										<SignupCountryInputs />
									</div>
								</div>
							</div>
						</div>

						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4">
							<div className="col">
								<button className="btn btn-outline-danger">Join now!</button>
							</div>
						</div>
						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4 signupInput" />
					</div>
					<div className="col-md-12 col-lg-6 text-md-center text-sm-center text-center">
						<div className="row">
							<div className="col">
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
	image: PropTypes.string
};
