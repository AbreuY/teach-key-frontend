import React from "react";

export const CardsGroup = () => {
	return (
		<div className="row row-cols-1 row-cols-md-2 g-4">
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Service
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
									<input type="text" className="form-control" id="recipient-title" />
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
									<input type="text" className="form-control" id="schedule-text" />
								</div>
								<div className="mb-3">
									<label htmlFor="description-text" className="col-form-label">
										Description:
									</label>
									<textarea className="form-control" id="description-text"></textarea>
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
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Send message
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<div className="d-flex flex-row justify-content-start mt-auto mt-sm-2 mb-2">
							<button
								href="#"
								className="me-1 btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
								data-bs-whatever="@mdo">
								Edit
							</button>
							<a href="#" className="btn btn-danger">
								Delete
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<div className="d-flex flex-row justify-content-start mt-auto mt-sm-2 mb-2">
							<a href="#" className="me-1 btn btn-primary">
								Edit
							</a>
							<a href="#" className="btn btn-danger">
								Delete
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
						</p>
						<div className="d-flex flex-row justify-content-start mt-auto mt-sm-2 mb-2">
							<a href="#" className="me-1 btn btn-primary">
								Edit
							</a>
							<a href="#" className="btn btn-danger">
								Delete
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img
						src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<div className="d-flex flex-row justify-content-start mt-auto mt-sm-2 mb-2">
							<a href="#" className="me-1 btn btn-primary">
								Edit
							</a>
							<a href="#" className="btn btn-danger">
								Delete
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
