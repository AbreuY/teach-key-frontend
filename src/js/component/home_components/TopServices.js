import React from "react";
import { CardsServices } from "./CardsServices";

export const TopServices = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="text-center">
					<h1 className="display-4">Popular Services</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sapien at massa
						accumsan, sed vestibulum lacus facilisis. Cras eleifend tortor sed faucibus tristique.
					</p>
				</div>
			</div>
			{/* Aqui hariamos una consulta a la API para consultar en la base de datos los servicios
				mejor calificados. Ejemplo, maximo 5 */}
			<CardsServices />
		</div>
	);
};
