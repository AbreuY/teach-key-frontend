import React from "react";
import Logo from "../../../img/logo2.png";
import { LandingCarrousel } from "./LandingCarrousel";
export const LandingDescription = () => {
	return (
		<div>
			<div className="d-flex flex-row">
				<img style={{ height: "7.5rem", width: "11rem", paddingLeft: "30px" }} src={Logo} />
				<div className="h2 py-3 text-center">
					En nuestra página podrás encontrar toda clase de áreas de aprendizaje y tutores especializados en
					cada una de ellas. !Escoge un tutor en el área que necesites y empieza a aprender con nosotros!
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
