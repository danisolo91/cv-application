const ExperienceForm = (props) => {
    return (
        <form onSubmit={(e) => props.save(props.job.id, e)}>
            <div className="mb-3">
                <label htmlFor="companyName" className="form-label">Company Name</label>
                <input type="text" className="form-control" id="companyName" defaultValue={props.job.companyName} required />
            </div>
            <div className="mb-3">
                <label htmlFor="position" className="form-label">Position of title</label>
                <input type="text" className="form-control" id="position" defaultValue={props.job.position} required />
            </div>
            <div className="mb-3">
                <label htmlFor="tasks" className="form-label">Tasks</label>
                <textarea className="form-control" id="tasks" defaultValue={props.job.tasks} />
            </div>
            <div className="mb-3">
                <label htmlFor="dateFrom" className="form-label">Date From</label>
                <input type="date" className="form-control" id="dateFrom" defaultValue={props.job.dateFrom} required />
            </div>
            <div className="mb-3">
                <label htmlFor="dateTo" className="form-label">To</label>
                <input type="date" className="form-control" id="dateTo" defaultValue={props.job.dateTo} required />
            </div>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary ms-2">Save</button>
        </form>
    )
};

export default ExperienceForm;