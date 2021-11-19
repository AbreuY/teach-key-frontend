import React from "react";
import { SignupContent } from "../component/signupComponents/SignupContent";
import GirlStudying from "../../img/girlstudying.jpg";

const URL = "http://127.0.0.1:3010/register/student";

export const SignupStudent = () => {
	return (
		<>
			<SignupContent
				title="Sign Up as a Student"
				titleDescription="To start learning!"
				image={GirlStudying}
				url={URL}
				sendTo="/student"
			/>
		</>
	);
};
