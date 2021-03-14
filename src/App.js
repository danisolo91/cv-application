import React from 'react';
import uniqid from 'uniqid';
import Modal from 'bootstrap/js/dist/modal';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullname: 'Daniel Solomon',
        email: 'example@example.com',
        phoneNumber: '+34-666-555-444'
      },
      educations: [
        {
          id: uniqid.time(),
          schoolName: 'TheOdinProject',
          title: 'Fullstack Developer',
          dateFrom: '1980-09-20',
          dateTo: '1984-06-15'
        },
        {
          id: uniqid.time(),
          schoolName: 'Oxford University',
          title: 'Computer Science Degree',
          dateFrom: '1976-09-20',
          dateTo: '1980-06-15'
        }
      ],
      jobs: [
        {
          id: uniqid.time(),
          companyName: 'Facebook,Inc',
          position: 'Software Engineer',
          tasks: 'I was the lead of a scrum team. Developing new functions and lorem ipsum dolor set amet.',
          dateFrom: '1976-09-20',
          dateTo: '1988-05-20'
        },
        {
          id: uniqid.time(),
          companyName: 'Alphabet Company',
          position: 'Backend Developer',
          tasks: 'I was the lead of a scrum team. Developing new functions and lorem ipsum dolor set amet.',
          dateFrom: '1983-09-20',
          dateTo: '1988-09-20'
        }
      ]
    };

    this.editPerson = this.editPerson.bind(this);
    this.saveEducation = this.saveEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.editEducation = this.editEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.saveExperience = this.saveExperience.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  editPerson(e) {
    e.preventDefault();
    this.setState({
      person: {
        fullname: e.target[0].value,
        email: e.target[1].value,
        phoneNumber: e.target[2].value
      }
    });
    Modal.getInstance(document.getElementById('generalInfoModal')).hide();
  }

  saveEducation(id, e) {
    e.preventDefault();
    id ? this.editEducation(id, e) : this.addEducation(uniqid.time(), e);
    Modal.getInstance(document.getElementById('educationModal')).hide();
  }

  addEducation(id, e) {
    this.setState({
      educations: this.state.educations.concat({
        id: id,
        schoolName: e.target[0].value,
        title: e.target[1].value,
        dateFrom: e.target[2].value,
        dateTo: e.target[3].value
      })
    });
  }

  editEducation(id, e) {
    this.setState({
      educations: this.state.educations.map(education => {
        if(education.id === id) {
          education.schoolName = e.target[0].value;
          education.title = e.target[1].value;
          education.dateFrom = e.target[2].value;
          education.dateTo = e.target[3].value;
        }
        return education;
      })
    });
  }

  deleteEducation(id) {
    this.setState({
      educations: this.state.educations.filter(ed => ed.id !== id)
    });
  }

  saveExperience(id, e) {
    e.preventDefault();
    id ? this.editExperience(id, e) : this.addExperience(uniqid.time(), e);
    Modal.getInstance(document.getElementById('experienceModal')).hide();
  }

  addExperience(id, e) {
    this.setState({
      jobs: this.state.jobs.concat({
        id: id,
        companyName: e.target[0].value,
        position: e.target[1].value,
        tasks: e.target[2].value,
        dateFrom: e.target[3].value,
        dateTo: e.target[4].value
      })
    });
  }

  editExperience(id, e) {
    this.setState({
      jobs: this.state.jobs.map(job => {
        if(job.id === id) {
          job.companyName = e.target[0].value;
          job.position = e.target[1].value;
          job.tasks = e.target[2].value;
          job.dateFrom = e.target[3].value;
          job.dateTo = e.target[4].value;
        }
        return job;
      })
    });
  }

  deleteExperience(id) {
    this.setState({
      jobs: this.state.jobs.filter(job => job.id !== id)
    });
  }

  render() {
    return (
      <div className="container mb-5">
        <h1 className="text-center mt-3 mb-3">CV Application</h1>
        <div className="container-fluid border p-3 rounded">
          <GeneralInfo person={this.state.person} editPerson={this.editPerson} />
          <Education 
            educations={this.state.educations} 
            save={this.saveEducation} 
            delete={this.deleteEducation}
          />
          <Experience 
            jobs={this.state.jobs} 
            save={this.saveExperience}
            delete={this.deleteExperience}
          />
        </div>
        <div className="text-center mt-3 text-small">Made by Daniel Solomon</div>
      </div>
    );
  }
}

export default App;
