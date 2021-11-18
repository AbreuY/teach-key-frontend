import React, { useContext } from "react";
import { SingleServiceContent } from "../component/single_service_components/SingleServiceContent";
import { useHistory } from "react-router";
import { AppContext } from "../store/appContext";

export const SingleService = () => {
	const { store, actions } = useContext(AppContext);
	const history = useHistory();
	return (
		<>
			{store.token && <SingleServiceContent />}

			{!store.token && history.push("/")}
		</>
	);
};
