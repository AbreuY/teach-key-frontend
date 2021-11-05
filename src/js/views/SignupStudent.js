import React from "react";
import { SignupContent } from "../component/signupComponents/SignupContent";
import GirlStudying from "../../img/girlstudying.jpg";

export const SignupStudent = () => {
	return (
		<>
			<SignupContent title="Sign Up as a Student" titleDescription="To start learning!" image={GirlStudying} />
		</>
	);
};
