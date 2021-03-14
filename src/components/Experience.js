import React from 'react';
import ExperienceForm from './ExperienceForm';

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            job: {}
        };
        this.loadJob = this.loadJob.bind(this);
        this.clearJob = this.clearJob.bind(this);
    }

    loadJob(job) {
        this.setState({
            job: job
        });
    }

    clearJob() {
        this.setState({
            job: {}
        });
    }

    render() {
        return (
            <div>
                <div className="container-fluid border-bottom border-primary border-5 mt-4 mb-2">
                    <div className="row">
                        <div className="col">
                            <h3 className="text-primary">Experience</h3>
                        </div>
                        <div className="col-4 text-end">
                            <button 
                                onClick={this.clearJob}
                                type="button" 
                                className="btn btn-outline-primary btn-sm min-width-60px"
                                data-bs-toggle="modal" 
                                data-bs-target="#experienceModal"
                            >
                                <i className="bi bi-plus-circle me-2"></i>Add
                            </button>
                        </div>
                    </div>
                </div>
                <div className="list-group list-group-flush">
                    {this.props.jobs.map(job => {
                        return (
                            <div key={job.id} className="container-fluid list-group-item">
                                <div className="row">
                                    <div className="col">
                                        <h5>{job.companyName}</h5>
                                    </div>
                                    <div className="col-3 text-secondary text-end">
                                        <i 
                                            onClick={() => {
                                                this.clearJob();
                                                this.loadJob(job)
                                            }}
                                            className="bi bi-pencil-square"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#experienceModal"
                                        ></i>
                                        <i 
                                            onClick={() => this.props.delete(job.id)}
                                            className="bi bi-trash ms-2"
                                        ></i>
                                    </div>
                                </div>
                                <span className="text-secondary text-small">
                                    <i className="bi bi-calendar3 me-2"></i>{job.dateFrom} - {job.dateTo}
                                </span>
                                <p className="mb-0"><i>{job.position}</i>. {job.tasks}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="modal fade" id="experienceModal" tabIndex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="experienceModalLabel">Professional experience</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ExperienceForm job={this.state.job} save={this.props.save} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Experience;