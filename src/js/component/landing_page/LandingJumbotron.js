import React from "react";
import Logo from "../../../img/logo.png";
export const LandingJumbotron = () => {
	return (
		<div className="container-fluid w-100 mb-5">
			<div className="jumbotron pt-5">
				<div className="container d-flex justify-content-evenly" style={{ height: "20rem" }}>
					<div className="d-flex">
						<img
							className="align-self-center"
							style={{
								width: "12.5rem",
								height: "10rem"
							}}
							src={Logo}
						/>
						<h1 className="display-2 align-self-center">
							Teach <br /> Key
						</h1>
					</div>
					<p className="w-50 align-self-center heigth: 100px width: 100px">
						{"Nunca es tarde para aprender algo nuevo"}
					</p>
					<div />
				</div>
				<div className="d-flex justify-content-center">
					<button type="button" className="btn btn-primary mt-2">
						Start Now
					</button>
				</div>
			</div>
		</div>
	);
};
