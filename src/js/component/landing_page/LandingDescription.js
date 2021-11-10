import React from "react";
import Logo from "../../../img/logo2.png";
import { LandingCarrousel } from "./LandingCarrousel";
export const LandingDescription = () => {
	return (
		<div>
			<div></div>
			<div className="d-flex flex-row">
				<img style={{ height: "7.5rem", width: "11rem", paddingLeft: "30px" }} src={Logo} />
				<div className="h2 py-3 text-center">
					En nuestra página podrás encontrar toda clase de áreas de aprendizaje y tutores especializados en
					cada una de ellas. !Escoge un tutor en el área que necesites y empieza a aprender con nosotros!
				</div>
			</div>
			<div>
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
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							/>
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							/>
						</div>
						<div className="carousel-inner">
							<div className="home carousel-item active">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://www.cetys.mx/noticias/wp-content/uploads/2020/06/Comunicado-clases-1.png"
								/>

								<div className="container">
									<div className="home carousel-caption text-start badge bg-light text-dark">
										<h4>¿Por que deberias registrarte en Teach Key?</h4>
										<p>
											A continuacion veras los beneficios que poseen profesores y alumnos al
											registrarse
										</p>
										<p></p>
									</div>
								</div>
							</div>
							<div className="home carousel-item">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://ik.imagekit.io/antonagenccy/wp-content/uploads/2020/10/Estrategias-de-marketing-digital.png"
								/>

								<div className="container">
									<div className="home carousel-caption">
										<h1>Another example headline.</h1>
										<p>
											Some representative placeholder content for the second slide of the
											carousel.
										</p>
										<p></p>
									</div>
								</div>
							</div>
							<div className="home carousel-item">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://www.magisnet.com/wp-content/uploads/2021/04/Streamers.jpg"
								/>

								<div className="container">
									<div className="home carousel-caption text-end">
										<h1>One more for good measure.</h1>
										<p>
											Some representative placeholder content for the third slide of this
											carousel.
										</p>
										<p></p>
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
			</div>
			<div className="h3 py-5">
				{
					"Aqui podras leer comentarios y opiniones; de estudiantes y profesores que se han registrado en Teach Key"
				}{" "}
				{"y han llevado el aprendizaje a otro nivel"}
			</div>
			<div className="pb-5">
				<LandingCarrousel />
			</div>
		</div>
	);
};
