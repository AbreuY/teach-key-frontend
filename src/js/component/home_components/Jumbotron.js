import React from "react";

export const Jumbotron = () => {
	return (
		<div className="container-fluid ps-0 pe-0">
			<div id="myCarousel" className="home carousel slide carousel-fade" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#myCarousel"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
					<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
				</div>
				<div className="carousel-inner">
					<div className="home carousel-item active">
						<img
							className="home bd-placeholder-img"
							width="100%"
							height="100%"
							src="https://i.imgur.com/uNPNlLp.jpg"
						/>

						<div className="container">
							<div className="home carousel-caption text-start">
								<h1>Example headline.</h1>
								<p>Some representative placeholder content for the first slide of the carousel.</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Sign up today
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="home carousel-item">
						<img
							className="home bd-placeholder-img"
							width="100%"
							height="100%"
							src="https://eduglobal.cl/wp-content/uploads/2020/11/Profesor-pro-800.png"
						/>

						<div className="container">
							<div className="home carousel-caption">
								<h1>Another example headline.</h1>
								<p>Some representative placeholder content for the second slide of the carousel.</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Learn more
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="home carousel-item">
						<img
							className="home bd-placeholder-img"
							width="100%"
							height="100%"
							src="https://tec.mx/sites/default/files/styles/share/public/2020-03/cinco_tips_clases_virtuales_irapuato.jpg?itok=Tshg-VUd"
						/>

						<div className="container">
							<div className="home carousel-caption text-end">
								<h1>One more for good measure.</h1>
								<p>Some representative placeholder content for the third slide of this carousel.</p>
								<p>
									<a className="btn btn-lg btn-primary" href="#">
										Browse gallery
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};
