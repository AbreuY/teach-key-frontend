import React from "react";
import Logo from "../../../img/logo2.png";
export const LandingDescription = () => {
	return (
		<div>
			<div className="d-flex flex-row">
				<img style={{ height: "7.5rem", width: "11rem", paddingLeft: "30px" }} src={Logo} />
				<div className="h2 p-5 text-center">
					En nuestra página podrás encontrar toda clase de áreas de aprendizaje y tutores especializados en
					cada una de ellas. !Escoge un tutor en el área que necesites y empieza a aprender con nosotros!
				</div>
			</div>
			<div className="h3">
				{
					"Aqui podras leer comentarios y opiniones; de estudiantes y profesores que se han registrado en Teach Key"
				}
				{"y han llevado el aprendizaje a otro nivel"}
			</div>
			<div className="pb-5">
				<div
					id="carouselExampleIndicators"
					className="carousel slide pb-5 carousel-dark"
					data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="1"
							aria-label="Slide 2"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="2"
							aria-label="Slide 3"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="3"
							aria-label="Slide 4"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="4"
							aria-label="Slide 5"
						/>
						<button
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="5"
							aria-label="Slide 6"
						/>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active ">
							<img
								style={{ height: "250px", width: "250px", marginLeft: "225px", marginTop: "105px" }}
								src="https://thumbs.dreamstime.com/b/el-hombre-feliz-joven-con-los-pulgares-para-arriba-firma-adentro-casual-38928366.jpg"
								className=" rounded-circle "
								alt="..."
							/>
							<div
								className="h4 py-2"
								style={{ marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla nunc nec
									sem euismod, eu porttitor lacus malesuada. Integer sit amet mi nulla. Mauris
									ultrices nisi mauris, quis volutpat erat fermentum eu.
								</span>
							</div>
						</div>
						<div className="carousel-item ">
							<img
								style={{ height: "250px", width: "250px", marginLeft: "225px", marginTop: "105px" }}
								src="https://image.freepik.com/foto-gratis/retrato-estudio-expresion-sonrisa-cara-personas-adultas_53876-45363.jpg"
								className="rounded-circle "
								alt="..."
							/>
							<div
								className="h4 py-2"
								style={{ marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla nunc nec
									sem euismod, eu porttitor lacus malesuada. Integer sit amet mi nulla. Mauris
									ultrices nisi mauris, quis volutpat erat fermentum eu.
								</span>
							</div>
							<div className="carousel-item active ">
								<img
									style={{ height: "250px", width: "250px", marginLeft: "225px", marginTop: "105px" }}
									src="https://thumbs.dreamstime.com/b/el-hombre-feliz-joven-con-los-pulgares-para-arriba-firma-adentro-casual-38928366.jpg"
									className=" rounded-circle "
									alt="..."
								/>
								<div
									className="h4 py-2"
									style={{ marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
									<span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla nunc
										nec sem euismod, eu porttitor lacus malesuada. Integer sit amet mi nulla. Mauris
										ultrices nisi mauris, quis volutpat erat fermentum eu.
									</span>
								</div>
							</div>
							<div className="carousel-item ">
								<img
									style={{ height: "250px", width: "250px", marginLeft: "225px", marginTop: "105px" }}
									src="https://image.freepik.com/foto-gratis/retrato-estudio-expresion-sonrisa-cara-personas-adultas_53876-45363.jpg"
									className="rounded-circle "
									alt="..."
								/>
								<div
									className="h4 py-2"
									style={{ marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
									<span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla nunc
										nec sem euismod, eu porttitor lacus malesuada. Integer sit amet mi nulla. Mauris
										ultrices nisi mauris, quis volutpat erat fermentum eu.
									</span>
								</div>
							</div>
							<div className="carousel-item">
								<img
									style={{ height: "250px", width: "250px", marginLeft: "225px", marginTop: "105px" }}
									src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg"
									className="rounded-circle "
									alt="..."
								/>
								<div
									className="h4 py-2"
									style={{ marginLeft: "200px", marginRight: "200px", marginTop: "30px" }}>
									<span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla nunc
										nec sem euismod, eu porttitor lacus malesuada. Integer sit amet mi nulla. Mauris
										ultrices nisi mauris, quis volutpat erat fermentum eu.
									</span>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev bg-danger p-2 bg-opacity-50"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next bg-danger p-2 bg-opacity-50"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
