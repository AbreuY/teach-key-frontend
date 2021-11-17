import React from "react";
import { LoginContent } from "../component/login_components/LoginContent";
const URL = "http://localhost:3010/login/professor";

export const LoginProfessor = () => {
	return (
		<>
			<LoginContent url={URL} header="Hello, Professor!" headerDescription="Start creating your own courses!" />
		</>
	);
};
