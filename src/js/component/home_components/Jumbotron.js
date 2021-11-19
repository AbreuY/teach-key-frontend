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
							<div className="home carousel-caption bg-light text-dark bg-opacity-50 text-center rounded-pill">
								<h1>
									<strong>Sobran las razones por las cuales debes registrarte</strong>
								</h1>
								<p>Teach Key ofrece gran cantidad de pobilidades para sus usuarios</p>
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
							<div className="home carousel-caption bg-light text-dark bg-opacity-50 text-center rounded-pill">
								<h1>
									<strong>Uno de nuestros objetivos principales:</strong>
								</h1>
								<p>
									El de posibilitar el encuentro 1 a 1 entre estudiantes y profesores para la
									comodidas y facilidad de los usuarios
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
							<div className="home carousel-caption bg-light text-dark bg-opacity-50 text-center rounded-pill">
								<h1>
									<strong>Teach Key es para todos</strong>
								</h1>
								<p>
									No importa tu edad, genero o lugar de ubicacion; Teach Key llega a ti para darte
									entrada a un mundo de conocimiento
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
					<span className="visually-hidden">Anterior</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#myCarousel"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Siguiente</span>
				</button>
			</div>
		</div>
	);
};
