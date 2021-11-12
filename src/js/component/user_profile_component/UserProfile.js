import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { CardsGroup } from "./CardsGroup";
import { UserDetails } from "./UserDetails";

export const UserProfile = () => {
	const [test, setTest] = useState("");
	const params = useParams();
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
								<span className="text-primary">Description</span>
							</div>
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
														<CardsGroup />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
