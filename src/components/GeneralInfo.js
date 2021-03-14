const GeneralInfo = (props) => {
    
    const { fullname, email, phoneNumber } = props.person;

    return (
        <div>
            <div className="container p-3 bg-primary text-light rounded">
                <div className="row">
                    <div className="col">
                        <h2>{fullname}</h2>
                        <div>
                            <i className="bi bi-envelope"> </i> 
                            <span>{email}</span>
                        </div>
                        <div>
                        <i className="bi bi-telephone"> </i>
                            <span>{phoneNumber}</span>
                        </div>
                    </div>
                    <div className="col-2 text-light text-end">
                        <i 
                            className="bi bi-pencil-square"
                            data-bs-toggle="modal" 
                            data-bs-target="#generalInfoModal"
                        ></i>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="generalInfoModal" tabIndex="-1" aria-labelledby="generalInfoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="generalInfoLabel">General information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={props.editPerson}>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Fullname</label>
                                <input type="text" className="form-control" id="fullname" defaultValue={fullname} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" defaultValue={email} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumber" defaultValue={phoneNumber} />
                            </div>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary ms-2">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GeneralInfo;