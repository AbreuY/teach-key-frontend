import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { LandingPage } from "./views/LandingPage";
import injectContext from "./store/appContext";
import { SignupProfessor } from "./views/SignupProfessor";
import { SignupStudent } from "./views/SignupStudent";
import { Home } from "./views/Home";
import AppContextProvider from "./store/appContext";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { Login } from "./views/Login";
import { UserProfile } from "./component/user_profile_component/UserProfile";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<AppContextProvider>
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/landing/">
								<LandingPage />
							</Route>
							<Route exact path="/signup/professor">
								<SignupProfessor />
							</Route>
							<Route exact path="/signup/student">
								<SignupStudent />
							</Route>
							<Route exact path="/login/student">
								<LoginStudent />
							</Route>
							<Route exact path="/login/professor">
								<LoginProfessor />
							</Route>
							<Route exact path="/user/profile" component={UserProfile} />
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</AppContextProvider>
		</div>
	);
};

export default Layout;
