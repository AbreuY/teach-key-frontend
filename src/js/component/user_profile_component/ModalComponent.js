import React from "react";

export const ModalComponent = () => {

    return(<div
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
    </div>);
};