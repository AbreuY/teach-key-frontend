import React from "react";
import { SignupProfessorContent } from "../component/signup_professor_component/SignupProfessorContent";
import { SignupProfessorNavbar } from "../component/signup_professor_component/SignupProfessorNavbar";

export const SignupProfessor = () => {
	return (
		<>
			<SignupProfessorNavbar />
			<SignupProfessorContent />
		</>
	);
};
