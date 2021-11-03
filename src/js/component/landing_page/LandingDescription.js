import React from "react";
import Logo from "../../../img/logo.png";
export const LandingDescription = () => {
	return (
		<>
			<div className="d-flex flex-row">
				<img style={{ height: "7.5rem", width: "11rem", paddingLeft: "30px" }} src={Logo} />
				<div className="h2 py-2">
					En nuestra página podrás encontrar toda clase de áreas de aprendizaje y tutores especializados en
					cada una de ellas. !Escoge un tutor en el área que necesites y empieza a aprender con nosotros!
				</div>
			</div>
		</>
	);
};
