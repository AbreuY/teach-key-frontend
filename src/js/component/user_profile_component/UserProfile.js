import React from "react";

export const UserProfile = () => {
	return (
		<div className="container">
			<div className="col-md-12">
				<div className="col-md-4">
					<div className="portlet light profile-sidebar-portlet bordered">
						<div className="profile-userpic">
							<img
								src="https://bootdey.com/img/Content/avatar/avatar6.png"
								className="img-responsive"
								alt=""
							/>{" "}
						</div>
						<div className="profile-usertitle">
							<div className="profile-usertitle-name"> Marcus Doe </div>
							<div className="profile-usertitle-job"> Developer </div>
						</div>
						<div className="profile-userbuttons">
							<button type="button" className="btn btn-info  btn-sm">
								Follow
							</button>
							<button type="button" className="btn btn-info  btn-sm">
								Message
							</button>
						</div>
						<div className="profile-usermenu">
							<ul className="nav">
								<li className="active">
									<a href="#">
										<i className="icon-home"></i> Ticket List{" "}
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon-settings"></i> Support Staff{" "}
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon-info"></i> Configurations{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="portlet light bordered">
						<div className="portlet-title tabbable-line">
							<div className="caption caption-md">
								<i className="icon-globe theme-font hide"></i>
								<span className="caption-subject font-blue-madison bold uppercase">Your info</span>
							</div>
						</div>
						<div className="portlet-body">
							<div>
								{/*<!-- Nav tabs -->*/}
								<ul className="nav nav-tabs" role="tablist">
									<li role="presentation" className="active">
										<a href="#home" aria-controls="home" role="tab" data-toggle="tab">
											Update
										</a>
									</li>
									<li role="presentation">
										<a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
											Profile
										</a>
									</li>
									<li role="presentation">
										<a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
											Messages
										</a>
									</li>
									<li role="presentation">
										<a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">
											Settings
										</a>
									</li>
								</ul>

								{/*<!-- Tab panels -->*/}
								<div className="tab-content">
									<div role="tabpanel" className="tab-pane active" id="home">
										<form>
											<div className="form-group">
												<label htmlFor="inputName">Name</label>
												<input
													type="text"
													className="form-control"
													id="inputName"
													placeholder="Name"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="inputLastName">Last Name</label>
												<input
													type="text"
													className="form-control"
													id="inputLastName"
													placeholder="Last Name"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Email address</label>
												<input
													type="email"
													className="form-control"
													id="exampleInputEmail1"
													placeholder="Email"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputPassword1">Password</label>
												<input
													type="password"
													className="form-control"
													id="exampleInputPassword1"
													placeholder="Password"
												/>
											</div>
											<div className="form-group">
												<label htmlFor="exampleInputFile">File input</label>
												<input type="file" id="exampleInputFile" />
												<p className="help-block">Example block-level help text here.</p>
											</div>
											<div className="checkbox">
												<label>
													<input type="checkbox" /> Check me out
												</label>
											</div>
											<button type="submit" className="btn btn-default">
												Submit
											</button>
										</form>
									</div>
									<div role="tabpanel" className="tab-pane" id="profile">
										Profile
									</div>
									<div role="tabpanel" className="tab-pane" id="messages">
										Messages
									</div>
									<div role="tabpanel" className="tab-pane" id="settings">
										Settings
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
