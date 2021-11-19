import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import { CardServices } from "./CardServices";
import { UserDetails } from "./UserDetails";
import { AppContext } from "../../store/appContext";
import { ModalSvcComponent } from "./ModalSvcComponent";
import Swal from "sweetalert2";
import default_img from "../../../img/default_avatar.jpg";
export const UserProfile = () => {
	const params = useParams();
	const history = useHistory();
	const { store, actions } = useContext(AppContext);
	const showAlert = () => {
		Swal.fire({
			icon: "error",
			title: "Session expired, please login again!",
			confirmButtonText: "Ok"
		}).then(result => {
			if (result.isConfirmed) {
				actions.Logout();
				history.push("/");
			}
		});
	};
	useEffect(() => {
		if (params.role && params.id) {
			console.log(params.role, params.id, "from user profile");
			actions.getUserDetails(params.role, params.id);
			actions.setProfessorId(params.id);
		}
	}, [params.role, params.id]);

	return (
		<>
			{store.authorized == false
				? showAlert()
				: localStorage.getItem("token") && (
						<div className="container mt-2">
							<div style={{ marginTop: "1vh" }} className="row justify-content-center">
								<div className="col-md-7 col-lg-3 mb-5 mb-lg-0">
									<div className="card border-0 shadow pt-2">
										{console.log(store.dataForUser.img_profile)}
										<img
											src={
												store.dataForUser.img_profile == undefined ||
												"" ||
												typeof store.dataForUser.img_profile == "object"
													? default_img
													: store.dataForUser.img_profile
											}
											className="mx-auto rounded-3 border border-4 border-black h-75 w-75"
											alt="User Profile Photo"
										/>
										<div className="card-body text-center">
											<div className="mb-4">
												<h3 className="h4 mb-0">
													{localStorage.getItem("role") == "student" ? (
														<span className="badge bg-success fs-5">Student</span>
													) : (
														<span className="badge bg-success fs-5">Professor</span>
													)}
													<br />
													{store.dataForUser["user_name"] == undefined ? (
														""
													) : (
														<span className="badge bg-warning text-dark fs-6">
															{store.dataForUser.user_name}
														</span>
													)}
												</h3>
												{/* <span className="text-primary">Description</span> */}
											</div>
											{
												<div className="mb-3">
													<form>
														<label htmlFor="profileformFile" className="form-label">
															Update profile image
														</label>
														<input
															className="form-control"
															type="file"
															id="profileformFile"
															onChange={e => {
																actions.setProfileImage(e.target.files[0]);
															}}
														/>
													</form>
												</div>
											}
											{/* <ul className="list-unstyled mb-4">
												<li className="mb-3">
													<Link to={"#!"} className="links">
														<i className="far fa-envelope display-25 me-3 text-secondary"></i>
														email@email.email
													</Link>
												</li>
												<li className="mb-3">
													<Link to={"#!"} className="links">
														<i className="far fa-envelope display-25 me-3 text-secondary"></i>
														phone or email?
													</Link>
												</li>
												<li className="mb-3">
													<Link to={"#!"} className="links">
														<i className="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>
														Country
													</Link>
												</li>
											</ul> */}
											{localStorage.getItem("role") == "professor" ? (
												<>
													<hr style={{ width: "100%" }} />
													<ul className="social-icon-style2 ps-0">
														<li>
															<a
																href={
																	store.dataForUser["facebook"] == undefined
																		? "#!"
																		: store.dataForUser.facebook
																}
																className="rounded-icon-3">
																<i className="fab fa-facebook"></i>
															</a>
														</li>
														<li>
															<a
																href={
																	store.dataForUser["twitter"] == undefined
																		? "#!"
																		: store.dataForUser.twitter
																}
																className="rounded-icon-3">
																<i className="fab fa-twitter"></i>
															</a>
														</li>
														<li>
															<a
																href={
																	store.dataForUser["instagram"] == undefined
																		? "#!"
																		: store.dataForUser.instagram
																}
																className="rounded-icon-3">
																<i className="fab fa-instagram"></i>
															</a>
														</li>
														<li>
															<a
																href={
																	store.dataForUser["whatsapp"] == undefined
																		? "#!"
																		: store.dataForUser.whatsapp
																}
																className="rounded-icon-3">
																<i className="fab fa-whatsapp"></i>
															</a>
														</li>
													</ul>
												</>
											) : (
												""
											)}
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="ps-lg-1-6 ps-xl-5">
										<div className="mb-5 wow fadeIn">
											<div className="text-start mb-1-6 wow fadeIn">
												<h2 className="h1 mb-0 text-primary">Profile</h2>
											</div>
											<UserDetails />
										</div>
										{params.role == "student" ? (
											""
										) : (
											<>
												<div className="mb-5 wow fadeIn">
													{/* <div className="text-start mb-1-6 wow fadeIn">
								<h2 className="mb-0 text-primary">Services</h2>
							</div> */}
													<div className="row mt-n4">
														<div
															className="accordion accordion-flush"
															id="accordionFlushExample">
															<div className="accordion-item">
																<h2 className="accordion-header" id="flush-headingOne">
																	<button
																		className="accordion-button collapsed"
																		type="button"
																		data-bs-toggle="collapse"
																		data-bs-target="#flush-collapseOne"
																		aria-expanded="false"
																		aria-controls="flush-collapseOne">
																		<h2 className="mb-0 text-primary">Services</h2>
																	</button>
																</h2>
																<div
																	id="flush-collapseOne"
																	className="accordion-collapse collapse"
																	aria-labelledby="flush-headingOne"
																	data-bs-parent="#accordionFlushExample">
																	<div className="accordion-body">
																		<div className="d-flex justify-content-end mb-4">
																			<span
																				data-bs-toggle="tooltip"
																				data-bs-placement="top"
																				title="Crear nuevo servicio">
																				<button
																					onClick={e => {
																						actions.setEditToFalse();
																					}}
																					type="button"
																					className="btn btn-success"
																					data-bs-toggle="modal"
																					data-bs-target="#svcModal">
																					<i className="fas fa-plus"></i>
																				</button>
																			</span>
																		</div>

																		<div className="row row-cols-1 row-cols-md-2 g-4">
																			{store.dataForUser.services == undefined
																				? ""
																				: store.dataForUser.services.map(
																						(svc, index) => {
																							return (
																								<CardServices
																									key={svc.id}
																									data={svc}
																								/>
																							);
																						}
																				  )}
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<ModalSvcComponent svcData={store.newService} />
											</>
										)}
									</div>
								</div>
							</div>
						</div>
				  )}
			{!localStorage.getItem("token") && history.push("/")}
		</>
	);
};
