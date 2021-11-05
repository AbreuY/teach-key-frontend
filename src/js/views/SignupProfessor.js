import React from "react";
import { SignupContent } from "../component/signupComponents/SignupContent";
import ProfessorImage from "../../img/professorimage.jpg";

export const SignupProfessor = () => {
	return (
		<>
			<SignupContent
				title="Sign Up as a Professor"
				titleDescription="Without paying anything!"
				image={ProfessorImage}
			/>
		</>
	);
};
