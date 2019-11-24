import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class AddTracker extends Component {
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
            this.addTracker = this.addTracker.bind(this);
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
        
        addTracker(event) {
            event.preventDefault();
            const trackerAdd = {
                jobTitle: this.state.jobTitle,
                companyName: this.state.companyName,
                linkToJobApp: this.state.linkToJobApp,
                appDeadline: this.state.AppDeadline
                
            }
      
        console.log(trackerAdd)
        axios.post('http://localhost:4000/api/trackers/add', trackerAdd)
        .then(res => { 
            console.log(res);
            this.setState({ redirect: this.state.redirect === false });
        })
        .catch(err => { console.log(err) });
      }
    
    render() {
        return (
            <div className="container" style={{marginTop: "50px"}}>
            <form onSubmit={this.addTracker} method="tracker">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Job Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handlejobTitleChange} name="jobTitle" value={this.state.jobTitle}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Company Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handlecompanyNameChange} name="companyName" value={this.state.companyName}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">Link to App</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handlelinkToAppChange} name="linkToApp" value={this.state.linkToApp}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label text-left">App Deadline</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={this.handleappDeadlineChange} name="appDeadline" value={this.state.appDeadline}/>
                    </div>
                </div>
               
                <hr/>
                <div style={{marginLeft: "0px"}} className="row">
                    <button type="submit" className="btn btn-warning" style={{marginLeft: "0px"}}>Add App</button>
                </div>
            </form>
            {this.state.redirect && (
                <Redirect to={'/trackers'}/>
            )}
          </div>
        );
    }
}

export default AddTracker;