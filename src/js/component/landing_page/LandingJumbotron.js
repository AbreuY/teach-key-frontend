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
						<h1 className="display-4 align-self-center ">
							<strong>
								Teach <br /> Key
							</strong>
						</h1>
					</div>
					<figure className="w-50 align-self-center h2">
						<blockquote className="blockquote h2">
							<p>{"El genio se hace con 1% de talento y 99% de esfuerzo"}</p>
						</blockquote>
						<figcaption className="blockquote-footer ">Albert Einstein</figcaption>
					</figure>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<button type="button" className="btn btn-primary mt-2">
					Start Now
				</button>
			</div>
		</div>
	);
};
