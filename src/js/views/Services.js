import React from "react";
import { ServiceContent } from "../component/services_components/ServiceContent";
import { ServiceFilter } from "../component/services_components/ServiceFilter";

export const Services = () => {
	return (
		<>
			<ServiceFilter />
			<ServiceContent />
		</>
	);
};
