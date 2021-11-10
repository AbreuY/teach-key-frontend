import React from "react";
import { CardsProfessors } from "./CardsProfessors";

export const TopProfessors = () => {
	return (
		<div className="container mt-5" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="text-center">
					<h1 className="display-4">Top Professors</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sapien at massa
						accumsan, sed vestibulum lacus facilisis. Cras eleifend tortor sed faucibus tristique.
					</p>
				</div>
			</div>
			{/* Aqui hariamos una llamada a la API para consultar en la base de datos los profesores 
				mejor calificados. para renderizar las cardsprofessors. Ejmeplo: 5 cards.
			*/}

			<CardsProfessors />
		</div>
	);
};
