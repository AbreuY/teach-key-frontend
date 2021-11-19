import React from "react";
import { LoginContent } from "../component/login_components/LoginContent";
const URL = "http://127.0.0.1:3010/login/student";

export const LoginStudent = () => {
	return (
		<>
			<LoginContent
				url={URL}
				header="Hola, Estudiante!"
				headerDescription="¡Inicia sesión y comienza a buscar a tu profesor!"
			/>
		</>
	);
};
