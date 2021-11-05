import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo2.png";

export const LoginNavbar = () => {
	return (
		<div className="container">
			<div className="row align-items-center m-3 mb-5">
				<div className="col-12 col-md-6 col-sm-12 text-md-start text-sm-center text-center">
					<img src={Logo} style={{ height: "60px" }} />
					<Link to="/" className="navbar-brand text-dark ms-2">
						Teach Key
					</Link>
				</div>
				<div className="col-md-6 text-md-end text-sm-center text-center">
					<span>
						Do you have an account?
						<Link to="/" className="linkDecoration text-danger">
							{" "}
							Login Here.
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};
