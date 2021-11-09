import React from "react";
import { SignupContent } from "../component/signupComponents/SignupContent";
import ProfessorImage from "../../img/professorimage.jpg";

const URL = "http://localhost:3010/register/professor";

export const SignupProfessor = () => {
	return (
		<>
			<SignupContent
				title="Sign Up as a Professor"
				titleDescription="Without paying anything!"
				image={ProfessorImage}
				url={URL}
			/>
		</>
	);
};
