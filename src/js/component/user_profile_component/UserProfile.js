import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { CardServices } from "./CardServices";
import { UserDetails } from "./UserDetails";
import { AppContext } from "../../store/appContext";
import { ModalSvcComponent } from "./ModalSvcComponent";

export const UserProfile = () => {
	const params = useParams();
	const { store, actions } = useContext(AppContext);

	useEffect(() => {
		if (params.role && params.id) {
			actions.getUserDetails(params.role, params.id);
			actions.setProfessorId(params.id);
		}
	}, [params.role, params.id]);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-7 col-lg-4 mb-5 mb-lg-0">
					<div className="card border-0 shadow">
						<img
							src="https://randomuser.me/api/portraits/lego/2.jpg"
							className="mx-auto pt-2 rounded-circle h-75 w-75"
							alt="..."
						/>
						<div className="card-body p-1-9 p-xl-5">
							<div className="mb-4">
								<h3 className="h4 mb-0">User Name</h3>
								{/* <span className="text-primary">Description</span> */}
							</div>
							{/* <div className="mb-3">
								<form>
									<label htmlFor="formFile" className="form-label">
										Update profile image
									</label>
									<input className="form-control" type="file" id="formFile" />
								</form>
							</div> */}
							<ul className="list-unstyled mb-4">
								<li className="mb-3">
									<Link to={"#!"} className="links">
										<i className="far fa-envelope display-25 me-3 text-secondary"></i>
										email@email.email
									</Link>
								</li>
								<li className="mb-3">
									<Link to={"#!"} className="links">
										<i className="far fa-envelope display-25 me-3 text-secondary"></i>phone or
										email?
									</Link>
								</li>
								<li>
									<Link to={"#!"} className="links">
										<i className="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>Country
									</Link>
								</li>
							</ul>
							<ul className="social-icon-style2 ps-0">
								<li>
									<Link to={"#!"} className="rounded-icon-3">
										<i className="fab fa-facebook-f"></i>
									</Link>
								</li>
								<li>
									<Link to={"#!"} className="rounded-icon-3">
										<i className="fab fa-twitter"></i>
									</Link>
								</li>
								<li>
									<Link to={"#!"} className="rounded-icon-3">
										<i className="fab fa-youtube"></i>
									</Link>
								</li>
								<li>
									<Link to={"#!"} className="rounded-icon-3">
										<i className="fab fa-linkedin-in"></i>
									</Link>
								</li>
							</ul>
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
										<div className="accordion accordion-flush" id="accordionFlushExample">
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
														<div className="row mb-2">
															<button
																onClick={e => {
																	actions.setEditToFalse();
																}}
																type="button"
																className="btn btn-success"
																data-bs-toggle="modal"
																data-bs-target="#svcModal">
																Create new service
															</button>
														</div>

														<div className="row row-cols-1 row-cols-md-2 g-4">
															{store.dataForUser.services == undefined
																? ""
																: store.dataForUser.services.map((svc, index) => {
																		return <CardServices key={svc.id} data={svc} />;
																  })}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<ModalSvcComponent svcData={store.newService} />
								{/* <div
									className="modal fade"
									id="editSvcModal"
									tabIndex="-1"
									aria-labelledby="editSvcModalLabel"
									aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="editSvcModalLabel">
													Edit Service
												</h5>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<form>
													<div className="mb-3">
														<label htmlFor="recipient-title" className="col-form-label">
															Title:
														</label>
														<input
															type="text"
															className="form-control"
															id="recipient-title"
														/>
													</div>
													<div className="mb-3">
														<label htmlFor="price-text" className="col-form-label">
															Price:
														</label>
														<input type="text" className="form-control" id="price-text" />
													</div>
													<div className="mb-3">
														<label htmlFor="schedule-text" className="col-form-label">
															Schedule:
														</label>
														<input
															type="text"
															className="form-control"
															id="schedule-text"
														/>
													</div>
													<div className="mb-3">
														<label htmlFor="description-text" className="col-form-label">
															Description:
														</label>
														<textarea
															className="form-control"
															id="description-text"></textarea>
													</div>
													<div className="mb-3">
														<label htmlFor="formFile" className="form-label">
															Upload Image
														</label>
														<input className="form-control" type="file" id="formFile" />
													</div>
												</form>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-bs-dismiss="modal">
													Close
												</button>
												<button type="button" className="btn btn-primary">
													Send message
												</button>
											</div>
										</div>
									</div>
								</div>
								
								<div
									className="modal fade"
									id="createNewSvcModal"
									tabIndex="-1"
									aria-labelledby="newSvcModalLabel"
									aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="newSvcModalLabel">
													Create New Service
												</h5>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<form>
													<div className="mb-3">
														<label htmlFor="recipient-title" className="col-form-label">
															Title:
														</label>
														<input
															type="text"
															className="form-control"
															id="recipient-title"
															onChange={e => {
																actions.setTitle(e.target.value);
															}}
															value={
																store.newService.title == undefined
																	? ""
																	: store.newService.title
															}
														/>
													</div>
													<div className="mb-3">
														<label htmlFor="price-text" className="col-form-label">
															Price:
														</label>
														<input
															type="number"
															className="form-control"
															id="price-text"
															onChange={e => {
																actions.setPrice(e.target.value);
															}}
															value={
																store.newService["price"] == undefined
																	? ""
																	: store.newService.price
															}
														/>
													</div>
													<div className="mb-3">
														<label htmlFor="schedule-text" className="col-form-label">
															Schedule:
														</label>
														<input
															type="text"
															className="form-control"
															id="schedule-text"
															onChange={e => {
																actions.setSchedule(e.target.value);
															}}
															value={
																store.newService["schedule"] == undefined
																	? ""
																	: store.newService.schedule
															}
														/>
													</div>
													<div className="mb-3">
														<label htmlFor="description-text" className="col-form-label">
															Description:
														</label>
														<textarea
															maxLength="300"
															className="form-control"
															id="description-text"
															onChange={e => {
																actions.setDescription(e.target.value);
															}}
															value={
																store.newService["description"] == undefined
																	? ""
																	: store.newService.description
															}></textarea>
													</div>
													<div className="mb-3">
														<label htmlFor="formFile" className="form-label">
															Upload Image
														</label>
														<input
															className="form-control"
															type="file"
															id="formFile"
															onChange={e => {
																actions.setImageSelected(e.target.files[0]);
															}}
														/>
													</div>
												</form>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-bs-dismiss="modal">
													Close
												</button>
												<button
													type="button"
													onClick={actions.uploadImage}
													className="btn btn-primary">
													Create Service
												</button>
											</div>
										</div>
									</div>
								</div> */}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
