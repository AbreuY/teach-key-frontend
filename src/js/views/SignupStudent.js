import React from "react";
import { SignupContent } from "../component/signupComponents/SignupContent";
import GirlStudying from "../../img/girlstudying.jpg";

const URL = "http://127.0.0.1:3010/register/student";

export const SignupStudent = () => {
	return (
		<>
			<SignupContent
				title="Registrate Como Estudiante"
				titleDescription="Y empieza a aprender!"
				image={GirlStudying}
				url={URL}
				sendTo="/student"
			/>
		</>
	);
};
