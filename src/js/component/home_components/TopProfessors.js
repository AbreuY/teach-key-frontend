import React, { useContext } from "react";
import { AppContext } from "../../store/appContext";
import { CardsProfessors } from "./CardsProfessors";

export const TopProfessors = () => {
	const { store, actions } = useContext(AppContext);
	return (
		<div className="container mt-5" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="text-center">
					<h1 className="display-4">Top Profesores</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sapien at massa
						accumsan, sed vestibulum lacus facilisis. Cras eleifend tortor sed faucibus tristique.
					</p>
				</div>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{store.topProfessor &&
					store.topProfessor.map((svc, index) => {
						return <CardsProfessors key={index} data={svc} />;
					})}
			</div>
		</div>
	);
};
