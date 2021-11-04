import React from "react";
import GirlStudying from "../../../img/girlstudying.jpg";

export const SignupProfessorContent = () => {
	return (
		<>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-md-6 col-sm-12 col-lg-6 text-md-center text-sm-center signupBox text-center shadow-lg p-3 mb-5 bg-body rounded">
						<div className="fs-2">Sign Up as a Professor</div>
						<p className="text-secondary pt-3">Without paying anything!</p>
						<div className="row pt-3 signupInput">
							<div className="col-12 col-md-12 col-sm-6 col-lg-6 pt-3">
								<input className="pt-3 pt-sm-3 pt-md-2 pt-lg-0" type="text" placeholder="Username" />
							</div>
							<div className="col-12 col-md-12 col-sm-6 col-lg-6 pt-3">
								<input className="pt-3 pt-sm-3 pt-md-2 pt-lg-0" type="email" placeholder="Email" />
							</div>
						</div>
						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4 signupInput">
							<div className="col-12 col-md-12 col-sm-6 col-lg-6 pt-0 pt-sm-3 pt-md-0 pt-lg-3">
								<input className="pt-3 pt-sm-3 pt-md-2 pt-lg-0" type="text" placeholder="Password" />
							</div>
							<div className="col-12 col-md-12 col-sm-6 col-lg-6 pt-3">
								<input
									className="pt-3 pt-sm-3 pt-md-2 pt-lg-0"
									type="email"
									placeholder="Confirm Password"
								/>
							</div>
						</div>
						<div className="row pt-0 pt-sm-0 pt-md-0 pt-lg-3 mt-4 signupInput" />
					</div>
					<div className="col-md-6 text-md-center text-sm-center text-center">
						<div className="row">
							<div className="col">
								<img
									className="rounded-circle m-2 shadow-lg mb-5 bg-body"
									style={{ height: "25rem", width: "32.5rem" }}
									src={GirlStudying}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
