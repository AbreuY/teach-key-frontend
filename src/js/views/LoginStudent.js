import React from "react";
import { LoginContent } from "../component/login_components/LoginContent";
const URL = "http://localhost:3010/login/student";

export const LoginStudent = () => {
	return (
		<>
			<LoginContent
				url={URL}
				header="Hello, Student!"
				headerDescription="Log in and start looking for your perfect Teacher!"
			/>
		</>
	);
};
