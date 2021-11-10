import React from "react";

export const UserDetails = () => {
	return (
		<div className="card">
			<div className="card-body">
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">User Name</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input type="text" className="form-control" defaultValue="My User Name" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Date of Birth</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input type="text" className="form-control" defaultValue="01/01/1900" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Country</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input type="text" className="form-control" defaultValue="Narnia" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Email</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input type="text" className="form-control" defaultValue="email@email.email" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Secondary email</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input type="text" className="form-control" defaultValue="second.email@email.email" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Contact Methods</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input type="text" className="form-control" defaultValue="Contact List" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Password</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input type="password" className="form-control" defaultValue="123456" />
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-9 text-secondary">
						<input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" />
					</div>
				</div>
			</div>
		</div>
	);
};
