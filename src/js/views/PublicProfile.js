import React, { useContext, useEffect, useState } from "react";
import { CardServices } from "../component/user_profile_component/CardServices";
import { UserDetails } from "../component/user_profile_component/UserDetails";
import { AppContext } from "../store/appContext";
import default_img from "../../img/default_avatar.jpg";
import { useHistory, useParams } from "react-router";
export const PublicProfile = () => {
	const [data, setData] = useState([]);
	const history = useHistory();
	const { store, actions } = useContext(AppContext);
	let uid = localStorage.getItem("uid");
	const getServicesForUser = async () => {
		console.log(uid);
		const response = await fetch(`${store.BASE_URL}/professor/${uid}/profile?uid=${uid}`, {
			headers: {
				"Content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				Authorization: "Bearer " + localStorage.getItem("token")
			}
		});

		if (response.ok) {
			const body = await response.json();
			console.log(body);
			setData(body);
		}
	};

	useEffect(() => {
		if (uid) {
			getServicesForUser();
		}
	}, [uid]);
	return (
		<>
			{store.authorized == false
				? showAlert()
				: localStorage.getItem("token") && (
						<div className="container">
							<div style={{ marginTop: "1vh" }} className="row justify-content-center">
								<div className="col-md-7 col-lg-3 mb-5 mb-lg-0">
									<div className="card border-0 shadow">
										<img
											src={
												data.img_profile == undefined ||
												"" ||
												typeof data.img_profile == "object"
													? default_img
													: data.img_profile
											}
											className="mx-auto rounded-circle border border-4 border-light h-75 w-75"
											alt="User Profile Photo"
										/>
										<div className="card-body text-center">
											<div className="mb-4">
												<h3 className="h4 mb-0">
													<span className="badge bg-success fs-5">Professor</span>

													<br />
													{data["user_name"] == undefined ? (
														""
													) : (
														<span className="badge bg-warning text-dark fs-6">
															{data.user_name}
														</span>
													)}
												</h3>
											</div>

											<hr style={{ width: "100%" }} />
											<div className="text-center">
												<h4 className="mb-0 mt-2 text-primary">Contacts</h4>
											</div>
											<ul className="social-icon-style2 ps-0">
												<li>
													<a
														href={data["facebook"] == undefined ? "#!" : data.facebook}
														className="rounded-icon-3">
														<i className="fab fa-facebook"></i>
													</a>
												</li>
												<li>
													<a
														href={data["twitter"] == undefined ? "#!" : data.twitter}
														className="rounded-icon-3">
														<i className="fab fa-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href={data["instagram"] == undefined ? "#!" : data.instagram}
														className="rounded-icon-3">
														<i className="fab fa-instagram"></i>
													</a>
												</li>
												<li>
													<a
														href={data["whatsapp"] == undefined ? "#!" : data.whatsapp}
														className="rounded-icon-3">
														<i className="fab fa-whatsapp"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="ps-lg-1-6 ps-xl-5">
										<div className="mb-5 wow fadeIn">
											<div className="row mt-n4">
												<h2 className="mb-0 mt-2 text-primary">Services</h2>
												<div className="row row-cols-1 row-cols-md-2 g-4">
													{data.services == undefined
														? ""
														: data.services.map((svc, index) => {
																return <CardServices key={svc.id} data={svc} />;
														  })}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				  )}
			{!localStorage.getItem("token") && history.push("/")}
		</>
	);
};
