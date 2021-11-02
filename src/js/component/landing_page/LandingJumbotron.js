import React from "react";

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
							src="https://i.pinimg.com/474x/bb/25/ce/bb25ce214c0f471bc8e861b716442969.jpg"
						/>
						<h1 className="display-2 align-self-center">
							Teach <br /> Key
						</h1>
					</div>
					<p className="w-50 align-self-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras metus felis, semper ut accumsan
						sed, viverra sit amet odio. Aliquam erat volutpat. Praesent pharetra ex egestas elit iaculis
						commodo. Fusce erat ligula, imperdiet iaculis arcu vel, rhoncus dignissim nibh. Quisque sit amet
						egestas lacus. Praesent sodales vehicula sapien ut posuere. Sed laoreet sem arcu, sed interdum
						purus consectetur eu.
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
