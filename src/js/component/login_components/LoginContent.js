import React from "react";
import PropTypes from "prop-types";

export const LoginContent = props => {
	return (
		<>
			<div className="container">
				<div className="row align-items-center mt-5">
					<div className="col-xl-3 col-lg-2 col-md-1"></div>
					<div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 shadow-lg p-3 mb-5 bg-body rounded">
						<p className="text-center fs-2 text-md-center text-sm-center">Login</p>
						<p className="text-secondary text-md-center text-sm-center text-center">
							And start learning/teaching!
						</p>
						<div className="container-fluid">
							<div className="row pt-3 loginInput text-center">
								<div className="col-12">
									<input
										className="pt-5 pt-sm-5 pt-md-5 pt-lg-3 text-center"
										type="text"
										placeholder="Username"
										maxLength="100"
									/>
								</div>
							</div>
							<div className="row pt-3 loginInput text-center">
								<div className="col-12">
									<input
										className="pt-5 pt-sm-5 pt-md-5 pt-lg-5 text-center"
										type="text"
										placeholder="Username"
										maxLength="100"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-3 col-lg-2 col-md-1"></div>
				</div>
			</div>
		</>
	);
};
