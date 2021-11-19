import React from "react";
import { SignupContent } from "../component/signupComponents/SignupContent";
import ProfessorImage from "../../img/professorimage.jpg";

const URL = "http://127.0.0.1:3010/register/professor";

export const SignupProfessor = () => {
	return (
		<>
			<SignupContent
				title="Registrate como Profesor"
				titleDescription="Sin pagar nada!"
				image={ProfessorImage}
				url={URL}
				sendTo="/professor"
			/>
		</>
	);
};
