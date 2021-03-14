const EducationForm = (props) => {

    return (
        <form onSubmit={(e) => props.save(props.education.id, e)}>
            <div className="mb-3">
                <label htmlFor="schoolName" className="form-label">School Name</label>
                <input type="text" className="form-control" id="schoolName" defaultValue={props.education.schoolName} required />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title of study</label>
                <input type="text" className="form-control" id="title" defaultValue={props.education.title} required />
            </div>
            <div className="mb-3">
                <label htmlFor="dateFrom" className="form-label">From</label>
                <input type="date" className="form-control" id="dateFrom" defaultValue={props.education.dateFrom} required />
            </div>
            <div className="mb-3">
                <label htmlFor="dateTo" className="form-label">To</label>
                <input type="date" className="form-control" id="dateTo" defaultValue={props.education.dateTo} required />
            </div>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary ms-2">Save</button>
        </form>
    )
};

export default EducationForm;