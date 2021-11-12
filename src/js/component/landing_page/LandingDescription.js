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
									<div className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50">
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
									<div className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50">
										<h3>
											<strong>Estudiantes</strong>
										</h3>
										<p>
											Aquí los Estudiantes pueden buscar el tutor que necesiten y las areas de
											estudio que requieran
										</p>
										<p>
											pudiendo elegir entre los mejores tutores, calificados por ellos mismos y
											tambien comentar
										</p>
										<p>sobre los tutores.</p>
									</div>
								</div>
							</div>
							<div className="home carousel-item">
								<img
									className="home bd-placeholder-img"
									width="100%"
									height="100%"
									src="https://previews.123rf.com/images/quartadis/quartadis1711/quartadis171100196/90741678-mapa-con-marcadores-de-ubicaci%C3%B3n-en-vista-isom%C3%A9trica-ilustraci%C3%B3n-de-dibujos-animados-de-vector-plano.jpg"
								/>

								<div className="container">
									<div className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50">
										<h3>
											<strong>Estudiantes</strong>
										</h3>
										<p>
											Pueden filtrar sus busquedas a las areas de ubicacion que se les hagan mas
											favorables
										</p>
										<p>escogiendo el radio de busqueda a lo largo de sus preferencias.</p>
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
									<div className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50">
										<h3>
											<strong>Estudiantes</strong>
										</h3>
										<p>
											Los Estudiantes tienen la facilidad de comunicacion directa con los
											profesores
										</p>
										<p>
											para realizar preguntas, acordar pagos, horarios y todo lo referente con las
											clases y el profesor.
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
									<div className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50">
										<h3>
											<strong>Profesores</strong>
										</h3>
										<p>
											Al registrarse los profesores pueden agregar las areas que desean impartir
											al perfil
										</p>
										<p>
											y agregar tambien los datos que sirven de informacion a sus posibles
											estudiantes a la hora de
										</p>
										<p>contratarlos.</p>
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
									<div className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50">
										<h3>
											<strong>Profesores</strong>
										</h3>
										<p>
											Pueden dar respuestas a las dudas que tengan los estudiantes, asi como
											hablar directamente
										</p>
										<p>
											con ellos y cuentan con un sistema de calificaciones para asi poder
											posicionarse como los
										</p>
										<p>mejores en su area gracias a la calificacion que tengan.</p>
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
									<div className="home carousel-caption text-start badge bg-light text-dark bg-opacity-50">
										<h3>
											<strong>Profesores</strong>
										</h3>
										<p>
											Los Profesores pueden subir previews de sus clases en el perfil cuando estan
											iniciando en la
										</p>
										<p>
											pagina si los estudiantes podran ver como dan sus clases y tener mas
											seguridad a la hora de
										</p>
										<p>contratarlos.</p>
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
			<div className="h3 py-5">
				{
					"Aqui podras leer comentarios y opiniones; de estudiantes y profesores que se han registrado en Teach Key"
				}{" "}
				{"y han llevado el aprendizaje a otro nivel"}
			</div>
			<div className="container pb-5">
				<LandingCarrousel />
			</div>
		</div>
	);
};
