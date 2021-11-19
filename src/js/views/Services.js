import React, { useContext } from "react";
import { ServiceContent } from "../component/services_components/ServiceContent";
import { AppContext } from "../store/appContext";
import { useHistory } from "react-router";

export const Services = () => {
	const { store, actions } = useContext(AppContext);
	const history = useHistory();

	return (
		<>
			{localStorage.getItem("token") && (
				<>
					<ServiceContent />
				</>
			)}
			{!localStorage.getItem("token") && history.push("/")}
		</>
	);
};
