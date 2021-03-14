import React from "react";
import EducationForm from "./EducationForm";

class Education extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            education: {}
        };

        this.loadEducation = this.loadEducation.bind(this);
        this.clearEducation = this.clearEducation.bind(this);
    }

    loadEducation(education) {
        this.setState({
            education: education
        });
    }

    clearEducation() {
        this.setState({
            education: {}
        });
    }

    render() {
        return (
            <div>
                <div className="container-fluid border-bottom border-primary border-5 mt-4 mb-2">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-primary">Education</h3>
                        </div>
                        <div className="col-4 text-end">
                            <button 
                                onClick={this.clearEducation}
                                type="button" 
                                className="btn btn-outline-primary btn-sm min-width-60px"
                                data-bs-toggle="modal" 
                                data-bs-target="#educationModal"
                            >
                                <i className="bi bi-plus-circle me-2"></i>Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="list-group list-group-flush">
                    {this.props.educations.map(education => {
                        return (
                            <div key={education.id} className="container-fluid list-group-item">
                                <div className="row">
                                    <div className="col">
                                        <h5>{education.schoolName}</h5>
                                    </div>
                                    <div className="col-3 text-secondary text-end">
                                        <i 
                                            onClick={(e) => this.loadEducation(education, e)} 
                                            className="bi bi-pencil-square"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#educationModal"
                                        ></i>
                                        <i 
                                            onClick={() => this.props.delete(education.id)}
                                            className="bi bi-trash ms-2" 
                                        ></i>
                                    </div>
                                </div>
                                <span className="text-secondary text-small">
                                    <i className="bi bi-calendar3 me-2"></i>{education.dateFrom} - {education.dateTo}
                                </span>
                                <p className="mb-0">{education.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="modal fade" id="educationModal" tabIndex="-1" aria-labelledby="educationModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="educationModalLabel">Educational experience</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <EducationForm education={this.state.education} save={this.props.save} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Education;