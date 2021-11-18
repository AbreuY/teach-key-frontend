import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import $ from "jquery";

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
		BASE_URL: "http://127.0.0.1:3010",
		dataForUser: {},
		newService: {},
		singleService: {},
		serviceId: undefined,
		isFromEdit: false,
		imageSelected: "",
		profileImage: "",
		authorized: undefined,
		topServices: undefined
	});

	const actions = {
		Logout: () => {
			localStorage.removeItem("token");
			localStorage.removeItem("role");
			localStorage.removeItem("id");
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
		/* deleteService(arg) Delete a service by id  */
		deleteService: async id => {
			const response = await fetch(`${store.BASE_URL}/services/${id}`, {
				method: "DELETE",
				body: []
			});
			if (response.status == 204) {
				actions.getUserDetails(localStorage.getItem("role"), localStorage.getItem("id"));
			}
		},

		/* Functions to handle onChange method from Service Modal */
		setTitle: data => {
			let title = "";
			if (store.isFromEdit) {
				title = store.singleService.title = data;
			} else {
				title = store.newService.title = data;
			}
			setStore(prev => ({
				...prev,
				title
			}));
		},
		setDescription: data => {
			let description = "";
			if (store.isFromEdit) {
				description = store.singleService.description = data;
			} else {
				description = store.newService.description = data;
			}
			setStore(prev => ({
				...prev,
				description
			}));
		},
		setPrice: data => {
			let price = 0;
			if (store.isFromEdit) {
				price = store.singleService.price = data;
			} else {
				price = store.newService.price = data;
			}
			setStore(prev => ({
				...prev,
				price
			}));
		},
		setSchedule: data => {
			let schedule = 0;
			if (store.isFromEdit) {
				schedule = store.singleService.schedule = data;
			} else {
				schedule = store.newService.schedule = data;
			}
			setStore(prev => ({
				...prev,
				schedule
			}));
		},
		/* 
		setImageUrl(arg) 
		Put the url of the image obtained from the upload response to cloudinary into newService Object.
		*/
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
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token")
				}
			});
			if (response.ok) {
				$("[data-bs-dismiss=modal]").trigger({ type: "click" });
				Swal.fire({
					icon: "success",
					title: "Service Created",
					showConfirmButton: false,
					timer: 2000
				}).then(result => {
					/* Read more about handling dismissals below */
					if (result.dismiss === Swal.DismissReason.timer) {
						actions.getUserDetails(localStorage.getItem("role"), localStorage.getItem("id"));
					}
				});
			}
		},
		//Function to set isFromEdit to false
		setEditToFalse: comeFromEdit => {
			let isForEdit = (store.isFromEdit = comeFromEdit);
			setStore(prev => ({
				...prev,
				isForEdit
			}));
		},

		/* 
		Get single service to edit passing two arguments, id for the service,
			and comeFromEdit to know if the user with role of professor wants to 
			edit a published service
		*/
		getSingleServiceDetail: async (id, comeFromEdit) => {
			let isForEdit = (store.isFromEdit = comeFromEdit);
			let svcId = (store.serviceId = id);
			const response = await fetch(`${store.BASE_URL}/services/${id}`);
			if (response.ok) {
				const body = await response.json();
				let svc = (store.singleService = body);
				setStore(prev => ({
					...prev,
					singleService: svc,
					isForEdit,
					svcId
				}));
			}
		},
		/* Function to update a desired service, passing one argument, the id of the service */
		updateSingleService: async id => {
			const response = await fetch(`${store.BASE_URL}/services/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(store.singleService)
			});

			if (response.ok) {
				Swal.fire({
					icon: "success",
					title: "Service Updated",
					text: "This service has been updated correctly",
					showConfirmButton: false,
					timer: 2000
				});
			}
		},
		/* 
		setImageSelected(arg)
		This function saves the selected image from the input, in the store. 
		To be used later and uploaded to the cloudinary service. 
		*/
		setImageSelected: image => {
			let newImage = (store.imageSelected = image);
			setStore(prev => ({
				...prev,
				newImage
			}));
		},

		/* Update Service Image, if no image is selected just update the text */
		updateSvc: async id => {
			if (store.imageSelected == undefined || store.imageSelected == "") {
				actions.updateSingleService(id);
				return;
			}
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
				actions.updateSingleService(id);
			}
		},
		/*
		uploadImage()
		This function uploads the image to cloudinary and returns an object with load information, 
		from which we obtain the path where the image is hosted in the cloud. 
		To be used later as an image of the service. 
		*/
		uploadImage: async () => {
			if (store.imageSelected == undefined || store.imageSelected == "") {
				actions.createNewService();
				return;
			}
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
				if (!store.isFromEdit) {
					actions.createNewService();
				}
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
		setFacebook: data => {
			let facebook = (store.dataForUser.facebook = data);
			setStore(prev => ({
				...prev,
				facebook
			}));
		},
		setTwitter: data => {
			let twitter = (store.dataForUser.twitter = data);
			setStore(prev => ({
				...prev,
				twitter
			}));
		},
		setInstagram: data => {
			let instagram = (store.dataForUser.instagram = data);
			setStore(prev => ({
				...prev,
				instagram
			}));
		},
		setWhatsApp: data => {
			let whatsapp = (store.dataForUser.whatsapp = data);
			setStore(prev => ({
				...prev,
				whatsapp
			}));
		},
		setDob: data => {
			let dob = (store.dataForUser.dob = data);
			setStore(prev => ({
				...prev,
				dob
			}));
		},
		setAuthorized: data => {
			setStore(prev => ({
				...prev,
				authorized: data
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
			const response = await fetch(`${store.BASE_URL}/${role}/${id}/profile`, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Headers": "*",
					Authorization: "Bearer " + localStorage.getItem("token")
				}
			});
			if (response.ok) {
				const body = await response.json();
				if (role == "student") {
					actions.setUserData(body);
				} else {
					actions.setUserData(body);
				}
			} else if (response.status == 401) {
				localStorage.removeItem("token");
				setStore(prev => ({
					...prev,
					authorized: false
				}));
				actions.Logout();
			}
		},
		setProfileImage: image => {
			let newImage = (store.profileImage = image);
			setStore(prev => ({
				...prev,
				newImage
			}));
		},
		setProfileImageUrl: data => {
			let image = (store.dataForUser.img_profile = data);
			setStore(prev => ({
				...prev,
				image
			}));
		},
		/* updateProfileImage for User */
		updateProfileImage: async (role, id) => {
			if (store.profileImage == undefined || store.profileImage == "") {
				actions.updateUserDetails(role, id);
				return;
			}
			const formData = new FormData();
			formData.append("file", store.profileImage);
			formData.append("upload_preset", "teachkey");
			const response = await fetch("https://api.cloudinary.com/v1_1/dzquq6yle/image/upload", {
				method: "POST",
				body: formData
			});
			if (response.ok) {
				const body = await response.json();
				actions.setProfileImageUrl(body.url);
				actions.updateUserDetails(role, id);
				document.getElementById("profileformFile").value = "";
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
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token")
				}
			});
			if (response.ok) {
				//const body = await response.json();
				Swal.fire({
					icon: "success",
					title: "Data Updated",
					text: "Your info has been updated",
					showConfirmButton: false,
					timer: 2000
				});
			}
		},
		setTopServices: data => {
			setStore(prev => ({
				...prev,
				topServices: data
			}));
		},
		getTopServices: async () => {
			const response = await fetch(`${store.BASE_URL}/services?limit=3`);
			if (response.ok) {
				const body = await response.json();
				actions.setTopServices(body);
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

	useEffect(() => {
		actions.getTopServices();
		let localToken = localStorage.getItem("token");
		if (localToken != null) {
			setStore(prev => ({
				...prev,
				token: localToken
			}));
		}
	}, [store.token]);

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
