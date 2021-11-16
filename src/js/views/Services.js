import React, { useContext } from "react";
import { ServiceContent } from "../component/services_components/ServiceContent";
import { ServiceFilter } from "../component/services_components/ServiceFilter";
import { AppContext } from "../store/appContext";

export const Services = () => {
	const { store, actions } = useContext(AppContext);

	return (
		<>
			{store.token && (
				<>
					<ServiceFilter />
					<ServiceContent />
				</>
			)}
			{!store.token && <header className="fs-1 text-danger">You need to be logged in to see the services</header>}
		</>
	);
};
