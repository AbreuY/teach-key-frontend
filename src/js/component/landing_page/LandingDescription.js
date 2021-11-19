import React from "react";
import Logo from "../../../img/logo2.png";
import { LandingCarrousel } from "./LandingCarrousel";
export const LandingDescription = () => {
	return (
		<div>
			<div className="container-fluid d-flex my-5" style={{ height: "25rem" }}>
				<div className="row">
					<div className="col-12 col-sm-12 col-lg-4 col-md-4 text-center align-self-center">
						<img style={{ height: "8.5rem", width: "11rem" }} src={Logo} />
					</div>
					<div className="col-12 col-sm-12 col-lg-8 col-md-8 align-self-center">
						<div className="h2 py-3 text-center">
							En nuestra página podrás encontrar toda clase de áreas de aprendizaje y tutores
							especializados en cada una de ellas. !Escoge un tutor en el área que necesites y empieza a
							aprender con nosotros!
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="container-fluid ps-0 p-0">
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
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="3"
								aria-label="Slide 4"
							/>
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="4"
								aria-label="Slide 5"
							/>
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="5"
								aria-label="Slide 6"
							/>
							<button
								type="button"
								data-bs-target="#myCarousel"
								data-bs-slide-to="6"
								aria-label="Slide 7"
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
									<div
										className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50"
										style={{ whiteSpace: "normal" }}>
										<h3>
											<strong>
												Quizas te preguntaras ¿Por qué deberias registrarte en Teach Key?
											</strong>
										</h3>
										<p>
											A continuacion te mostraremos los beneficios de ser un Estudiante o Profesor
											en Teach Key...
										</p>
										<p>Veras lo facil que es registrarse y empezar a aprender. </p>
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
									<div
										className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50"
										style={{ whiteSpace: "normal" }}>
										<h3>
											<strong>Estudiantes</strong>
										</h3>
										<p>
											Aquí los Estudiantes pueden buscar el tutor que necesiten y las areas de
											estudio que requieran pudiendo elegir entre los mejores tutores, calificados
											por ellos mismos y tambien comentar sobre los tutores.
										</p>
									</div>
								</div>
							</div>
							<div className="home carousel-item">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://thumbs.dreamstime.com/b/smartphone-y-ejemplo-isom%C3%A9trico-del-vector-indicador-mapa-navegador-plano-tel%C3%A9fono-m%C3%B3vil-de-la-historieta-en-d-el-estilo-114226053.jpg"
								/>

								<div className="container">
									<div
										className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50"
										style={{ whiteSpace: "normal" }}>
										<h3>
											<strong>Estudiantes</strong>
										</h3>
										<p>
											Pueden filtrar sus busquedas a las areas de ubicacion que se les hagan mas
											favorables escogiendo el radio de busqueda a lo largo de sus preferencias.
										</p>
									</div>
								</div>
							</div>
							<div className="home carousel-item">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://pyme.emol.com/wp-content/uploads/2021/03/shutterstock_1752106448.jpg"
								/>

								<div className="container">
									<div
										className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50"
										style={{ whiteSpace: "normal" }}>
										<h3>
											<strong>Estudiantes</strong>
										</h3>
										<p>
											Los Estudiantes tienen la facilidad de comunicacion directa con los
											profesores para realizar preguntas, acordar pagos, horarios y todo lo
											referente con las clases y el profesor.
										</p>
									</div>
								</div>
							</div>
							<div className="home carousel-item">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://webdelmaestrocmf.com/portal/wp-content/uploads/2018/09/1-14.jpeg"
								/>

								<div className="container">
									<div
										className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50"
										style={{ whiteSpace: "normal" }}>
										<h3>
											<strong>Profesores</strong>
										</h3>
										<p>
											Al registrarse los profesores pueden agregar las areas que desean impartir
											al perfil y agregar tambien los datos que sirven de informacion a sus
											posibles estudiantes a la hora de contratarlos.
										</p>
									</div>
								</div>
							</div>
							<div className="home carousel-item">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://universidadean.edu.co/sites/default/files/noticias/internas/universidad-ean-en-el-ranking-u-sapiens-de-investigacion-principal.jpg"
								/>

								<div className="container">
									<div
										className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50"
										style={{ whiteSpace: "normal" }}>
										<h3>
											<strong>Profesores</strong>
										</h3>
										<p>
											Pueden dar respuestas a las dudas que tengan los estudiantes, asi como
											hablar directamente con ellos y cuentan con un sistema de calificaciones
											para asi poder posicionarse como los mejores en su area gracias a la
											calificacion que tengan.
										</p>
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
									<div
										className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50"
										style={{ whiteSpace: "normal" }}>
										<h3>
											<strong>Profesores</strong>
										</h3>
										<p>
											Los Profesores pueden subir previews de sus clases en el perfil cuando estan
											iniciando en la pagina si los estudiantes podran ver como dan sus clases y
											tener mas seguridad a la hora de contratarlos.
										</p>
									</div>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev bg-dark bg-opacity-25 "
							type="button"
							data-bs-target="#myCarousel"
							data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next bg-dark bg-opacity-25"
							type="button"
							data-bs-target="#myCarousel"
							data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="h3 py-5 col-12 col-sm-12 col-lg-12 col-md-12 align-self-center text-center">
					Aqui podras leer comentarios y opiniones; de estudiantes y profesores que se han registrado en Teach
					Key y han llevado el aprendizaje a otro nivel
				</div>
			</div>
			<div className="container pb-5">
				<LandingCarrousel />
			</div>
		</div>
	);
};
