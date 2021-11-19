import React, { useContext, useEffect } from "react";
import { AppContext } from "../../store/appContext";
import { CardsServices } from "./CardsServices";

export const TopServices = () => {
	const { store, actions } = useContext(AppContext);
	return (
		<div className="container mt-4" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="text-center">
					<h1 className="display-4">Servicios Populares</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada sapien at massa
						accumsan, sed vestibulum lacus facilisis. Cras eleifend tortor sed faucibus tristique.
					</p>
				</div>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{store.topServices &&
					store.topServices.map((svc, index) => {
						return <CardsServices key={index} data={svc} />;
					})}
			</div>
		</div>
	);
};
