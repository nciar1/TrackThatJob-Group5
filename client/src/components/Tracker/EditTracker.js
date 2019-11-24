import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

class EditTracker extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       jobTitle: "",
       companyName: "",
       linkToJobApp: "",
       appDeadline: "",
        redirect: false
    }
    this.handlejobTitleChange = this.handlejobTitleChange.bind(this);
    this.handlecompanyNameChange = this.handlecompanyNameChange.bind(this);
    this.handlelinkToJobAppChange = this.handlelinkToJobAppChange.bind(this);
    this.handleappDeadlineChange = this.handleappDeadlineChange.bind(this);
    this.updateTracker = this.updateTracker.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/trackers/${this.props.match.params.id}`)
    .then(res => {
        this.setState({ 
            jobTitle: res.data.jobTitle,
            companyName: res.data.companyName,
            linkToJobApp: res.data.linkToJobApp,
            appDeadline: res.data.appDeadline
        })
        console.log(res)
    });
  }

  handlejobTitleChange(e) {
    this.setState({name: e.target.value})
  }

  handlecompanyNameChange(e) {
    this.setState({email: e.target.value})
  }

  handlelinkToJobAppChange(e) {
    this.setState({phone: e.target.value})
  }

  handleappDeadlineChange(e) {
    this.setState({job: e.target.value})
  }



  updateTracker(event) {
    event.preventDefault();
    const trackerUpdate = {
        jobTitle: this.state.jobTitle,
        companyName: this.state.companyName,
        linkToJobApp: this.state.linkToJobApp,
        appDeadline: this.state.AppDeadline
        
    }
    console.log(trackerUpdate)
    axios.post(`http://localhost:4000/api/tracker/update/${this.props.match.params.id}`, trackerUpdate)
    .then(res => { 
        console.log(res);
        this.setState({ redirect: this.state.redirect === false })
    })
    .catch(err => { console.log(err) });
  }

  render() {
    return (
      <div className="container" style={{marginTop: "50px"}}>
        <form onSubmit={this.updateTracker} method="tracker">
        <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Job Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handlejobTitleChange} name="jobTitle" value={this.state.jobTitle}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Company Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handlecompanyNameChange} name="companyName" value={this.state.email}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Link to Job App</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handlelinkToJobAppChange} name="linkToJobApp" value={this.state.linktoJobApp}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">App Deadline</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleappDeadlineChange} name="job" value={this.state.appDeadline}/>
                    </div>
                </div>
                
                
            <hr/>
            <div style={{marginLeft: "0px"}} className="row">
                <button type="submit" className="btn btn-success" style={{marginLeft: "0px"}}>Update tracker</button>
            </div>
        </form>
        {this.state.redirect && (
            <Redirect to={'/trackers'}/>
        )}
      </div>
    )
  }
}
export default EditTracker;