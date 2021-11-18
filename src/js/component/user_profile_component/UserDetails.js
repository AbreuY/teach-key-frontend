import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CustomDatePicker } from "./CustomDatePicker";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext";

export const UserDetails = () => {
	const params = useParams();
	const { store, actions } = useContext(AppContext);

	return (
		<div className="card">
			<div className="card-body">
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">User Name</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input
							type="text"
							className="form-control"
							onChange={e => {
								actions.setUserName(e.target.value);
							}}
							value={store.dataForUser["user_name"] == undefined ? "" : store.dataForUser.user_name}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Date of Birth</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<CustomDatePicker />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Country</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input
							type="text"
							className="form-control"
							onChange={e => {
								actions.setCountry(e.target.value);
							}}
							value={store.dataForUser["country"] == undefined ? "" : store.dataForUser.country}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-3">
						<h6 className="mb-0">Email</h6>
					</div>
					<div className="col-sm-9 text-secondary">
						<input
							type="text"
							className="form-control"
							onChange={e => {
								actions.setEmail(e.target.value);
							}}
							value={store.dataForUser["email"] == undefined ? "" : store.dataForUser.email}
						/>
					</div>
				</div>
				{params.role == "student" ? (
					""
				) : (
					<>
						<div className="row mb-3">
							<div className="col-sm-3">
								<h6 className="mb-0">Secondary email</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								<input
									type="text"
									className="form-control"
									onChange={e => {
										actions.setSecondEmail(e.target.value);
									}}
									value={
										store.dataForUser["secondary_email"] == undefined
											? ""
											: store.dataForUser.secondary_email
									}
								/>
							</div>
						</div>
						<hr style={{ width: "100%" }} />
						<div className="row mb-2">
							<div className="text-start">
								<h4 className="mb-0">Contact Methods</h4>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-sm-3">
								<h6 className="mb-0">Facebook</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								<input
									type="text"
									className="form-control"
									onChange={e => {
										actions.setFacebook(e.target.value);
									}}
									value={store.dataForUser["facebook"] == undefined ? "" : store.dataForUser.facebook}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-sm-3">
								<h6 className="mb-0">Twitter</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								<input
									type="text"
									className="form-control"
									onChange={e => {
										actions.setTwitter(e.target.value);
									}}
									value={store.dataForUser["twitter"] == undefined ? "" : store.dataForUser.twitter}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-sm-3">
								<h6 className="mb-0">Instagram</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								<input
									type="text"
									className="form-control"
									onChange={e => {
										actions.setInstagram(e.target.value);
									}}
									value={
										store.dataForUser["instagram"] == undefined ? "" : store.dataForUser.instagram
									}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-sm-3">
								<h6 className="mb-0">WhatsApp</h6>
							</div>
							<div className="col-sm-9 text-secondary">
								<input
									placeholder="Put your number like this https://wa.me/123456789"
									type="text"
									className="form-control"
									onChange={e => {
										actions.setWhatsApp(e.target.value);
									}}
									value={store.dataForUser["whatsapp"] == undefined ? "" : store.dataForUser.whatsapp}
								/>
							</div>
						</div>
					</>
				)}

				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-9 text-secondary">
						<button
							type="button"
							className="btn btn-primary px-4"
							onClick={() => {
								actions.updateProfileImage(params.role, params.id);
							}}>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
