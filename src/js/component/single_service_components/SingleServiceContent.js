import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { SingleServiceInfo } from "./SingleServiceInfo";
import { AppContext } from "../../store/appContext";

export const SingleServiceContent = () => {
	const { store, actions } = useContext(AppContext);
	const params = useParams();
	const [info, setInfo] = useState({});
	const getInfo = async id => {
		try {
			const response = await fetch(`${store.BASE_URL}/services/${id}`);
			const body = await response.json();
			setInfo(body);
		} catch (error) {
			alert(`Something happened! 123 ${error}`);
		}
	};
	useEffect(() => {
		if (params.id) {
			getInfo(params.id);
		}
	}, [params.id]);
	return (
		<>
			<SingleServiceInfo info={info} />{" "}
		</>
	);
};
