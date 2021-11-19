import React from "react";
import { LoginContent } from "../component/login_components/LoginContent";
const URL = "http://127.0.0.1:3010/login/professor";

export const LoginProfessor = () => {
	return (
		<>
			<LoginContent
				url={URL}
				header="Hola, Profesor!"
				headerDescription="¡Empieza a crear tus propios servicios!"
			/>
		</>
	);
};
