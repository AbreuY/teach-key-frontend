import React from "react";
import Logo from "../../../img/logo2.png";
export const LandingJumbotron = () => {
	return (
		<div className="container-fluid w-100 mb-5">
			<div className="jumbotron pt-5">
				<div
					className="container-fluid bg-dark bg-gradient text-light  mt-5"
					data-aos="fade-up"
					data-aos-duration="2000">
					<div className="container">
						<div className="row">
							<div className="d-flex align-items-center">
								<div className="container d-flex justify-content-evenly" style={{ height: "20rem" }}>
									<h1 className="align-self-center ">
										<strong>
											Teach <br /> Key
										</strong>
									</h1>

									<figure className="w-50 align-self-center h2">
										<blockquote className="blockquote h2">
											<p>{"El genio se hace con 1% de talento y 99% de esfuerzo"}</p>
										</blockquote>
										<figcaption className="blockquote-footer ">Albert Einstein</figcaption>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-center" data-aos="fade-up" data-aos-duration="2000">
					<button type="button" className="btn btn-primary mt-2">
						Start Now
					</button>
				</div>
			</div>
		</div>
	);
};
