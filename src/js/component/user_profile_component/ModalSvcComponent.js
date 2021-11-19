import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext";
export const ModalSvcComponent = ({ svcData }) => {
	const { store, actions } = useContext(AppContext);
	return (
		<div className="modal fade" id="svcModal" tabIndex="-1" aria-labelledby="svcModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="svcModalLabel">
							Service
						</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
										store.isFromEdit == true
											? store.singleService.title
											: store.newService.title == undefined
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
										store.isFromEdit == true
											? store.singleService.price
											: store.newService.price == undefined
											? ""
											: store.newService.price
									}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="schedule-text" className="col-form-label">
									Schedule Hours:
								</label>
								<input
									type="number"
									className="form-control"
									id="schedule-text"
									onChange={e => {
										actions.setSchedule(e.target.value);
									}}
									value={
										store.isFromEdit == true
											? store.singleService.schedule
											: store.newService.schedule == undefined
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
									className="form-control"
									id="description-text"
									maxLength="300"
									onChange={e => {
										actions.setDescription(e.target.value);
									}}
									value={
										store.isFromEdit == true
											? store.singleService.description
											: store.newService.description == undefined
											? ""
											: store.newService.description
									}></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="fileForm" className="form-label">
									Upload Image
								</label>
								<input
									className="form-control"
									type="file"
									id="fileForm"
									onChange={e => {
										actions.setImageSelected(e.target.files[0]);
									}}
								/>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" id="#closeMyModal" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={e => {
								store.isFromEdit == true ? actions.updateSvc(store.serviceId) : actions.uploadImage();
							}}>
							{store.isFromEdit == true ? "Update" : "Publish"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
ModalSvcComponent.propTypes = {
	svcData: PropTypes.object
};
