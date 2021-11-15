import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(undefined);
const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		sectionInfo: [
			{
				imgUrl: "https://i.imgur.com/cQIzDHf.jpg",
				title: "Yo soy el h1 de la seccion a",
				description: "Some description",
				orientation: "left"
			},
			{
				imgUrl: "https://i.imgur.com/cQIzDHf.jpg",
				title: "Yo soy el h1 de la seccion b",
				description: "Some description b",
				orientation: "right"
			}
		],

		token: undefined,
		BASE_URL: "http://localhost:3010",
		dataForUser: {},
		newService: {},
		imageSelected: ""
	});

	const actions = {
		deleteToken: () => {
			localStorage.removeItem("token");
			setStore(prev => ({
				...prev,
				token: undefined
			}));
		},

		setToken: token => {
			localStorage.setItem("token", token);
			setStore(prev => ({
				...prev,
				token: token
			}));
		},
		//set student/professor data by id
		setUserData: data => {
			setStore(prev => ({
				...prev,
				dataForUser: { ...data }
			}));
		},

		//set data for new service
		setServiceData: data => {
			setStore(prev => ({
				...prev,
				newService: { ...data }
			}));
		},

		/* Functions to handle on change method from Service Modal */
		setTitle: data => {
			let title = (store.newService.title = data);
			setStore(prev => ({
				...prev,
				title
			}));
		},
		setDescription: data => {
			let description = (store.newService.description = data);
			setStore(prev => ({
				...prev,
				description
			}));
		},
		setPrice: data => {
			let price = (store.newService.price = data);
			setStore(prev => ({
				...prev,
				price
			}));
		},
		setSchedule: data => {
			let schedule = (store.newService.schedule = data);
			setStore(prev => ({
				...prev,
				schedule
			}));
		},
		setSchedule: data => {
			let schedule = (store.newService.schedule = data);
			setStore(prev => ({
				...prev,
				schedule
			}));
		},
		setImageUrl: data => {
			let image = (store.newService.image = data);
			setStore(prev => ({
				...prev,
				image
			}));
		},
		setProfessorId: data => {
			let professorId = (store.newService.professor_id = data);

			setStore(prev => ({ ...prev, professorId }));
		},

		//Function to create new service
		createNewService: async () => {
			const response = await fetch(`${store.BASE_URL}/services`, {
				method: "POST",
				body: JSON.stringify(store.newService),
				headers: {
					"Content-Type": "application/json"
				}
			});
			if (response.ok) {
				alert("Service Created");
			}
		},
		//Upload Image to Cloudinary
		setImageSelected: image => {
			let newImage = (store.imageSelected = image);
			setStore(prev => ({
				...prev,
				newImage
			}));
		},
		uploadImage: async () => {
			const formData = new FormData();
			formData.append("file", store.imageSelected);
			formData.append("upload_preset", "teachkey");
			const response = await fetch("https://api.cloudinary.com/v1_1/dzquq6yle/image/upload", {
				method: "POST",
				body: formData
			});
			if (response.ok) {
				const body = await response.json();
				actions.setImageUrl(body.url);
				actions.createNewService();
			}
		},
		/*
		Start
		Functions to handle on change method from UserDetails
		*/
		setUserName: data => {
			let name = (store.dataForUser.user_name = data);
			setStore(prev => ({
				...prev,
				name
			}));
		},
		setCountry: data => {
			let country = (store.dataForUser.country = data);
			setStore(prev => ({
				...prev,
				country
			}));
		},
		setEmail: data => {
			let email = (store.dataForUser.email = data);
			setStore(prev => ({
				...prev,
				email
			}));
		},
		setSecondEmail: data => {
			let second_email = (store.dataForUser.secondary_email = data);
			setStore(prev => ({
				...prev,
				second_email
			}));
		},
		setContactMethod: data => {
			let contact = (store.dataForUser.contact_methods = data);
			setStore(prev => ({
				...prev,
				contact
			}));
		},
		setDob: data => {
			let dob = (store.dataForUser.dob = data);
			setStore(prev => ({
				...prev,
				dob
			}));
		},
		/*
		End
		Functions to handle on change method from UserDetails
		*/

		/*
		Fetch student/professor data by id
		*/
		getUserDetails: async (role, id) => {
			const response = await fetch(`${store.BASE_URL}/${role}/${id}/profile`);
			if (response.ok) {
				const body = await response.json();
				if (role == "student") {
					actions.setUserData(body);
				} else {
					actions.setUserData(body);
				}
			}
		},
		/*
		Update student/professor data by id
		*/
		updateUserDetails: async (role, id) => {
			let bodyData = undefined;

			if (role == "student") {
				bodyData = store.dataForUser;
			} else {
				bodyData = store.dataForUser;
			}
			const response = await fetch(`${store.BASE_URL}/${role}/${id}/profile`, {
				method: "PUT",
				body: JSON.stringify(bodyData),
				headers: {
					"Content-Type": "application/json"
				}
			});
			if (response.ok) {
				const body = await response.json();
				alert("Data Update");
			}
		},

		/*
		Convert a "dd/MM/yyyy" string into a Date object
		Credits to https://stackoverflow.com/a/69873018/2576595
		*/

		convertToDate: dateString => {
			let d = dateString.split("/");
			let dat = new Date(d[2] + "/" + d[1] + "/" + d[0]);
			return dat;
		}
	};

	const context = { store, actions };

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
