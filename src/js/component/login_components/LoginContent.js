import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "../../../img/logo2.png";

export const LoginContent = () => {
	return (
		<>
			<div className="container h-100">
				<div className="row">
					<div className="col mt-5">
						<div className="row align-items-center mt-5">
							<div className="col-xl-3 col-lg-2 col-md-1"></div>
							<div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded">
								<p className="text-center fs-2 text-md-center text-sm-center">
									<img src={Logo2} />
									Teach Key
								</p>
								<p className="text-secondary text-md-center text-sm-center text-center">
									<div>
										{"Don't have an account? Register as a "}
										<Link to="/signup/student" className="aLinkDecoration text-danger">
											Student{" "}
										</Link>
										or as a{" "}
										<Link to="/signup/professor" className="text-danger aLinkDecoration">
											Professor
										</Link>
									</div>
								</p>
								<div className="container-fluid">
									<div className="row pt-3 loginInput text-center">
										<div className="col-12">
											<input
												className="pt-5 pt-sm-5 pt-md-5 pt-lg-3 text-center"
												type="email"
												placeholder="Email"
												maxLength="100"
											/>
										</div>
									</div>
									<div className="row pt-3 loginInput text-center">
										<div className="col-12">
											<input
												id="input1"
												className="pt-5 pt-sm-5 pt-md-5 pt-lg-5 text-center"
												type="password"
												placeholder="Password"
												maxLength="100"></input>
											<input
												className="bi bi-eye-slash"
												type="checkbox"
												onClick={e => {
													let showPassword = document.getElementById("input1");
													if (showPassword.type === "password") {
														showPassword.type = "text";
													} else {
														showPassword.type = "password";
													}
												}}
											/>
										</div>
									</div>
									<div className="row pt-3 text-center pt-5 pt-sm-5 pt-md-5 pt-lg-5 text-center">
										<div className="col">
											<button className="btn btn-outline-danger">Login</button>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-lg-2 col-md-1"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
