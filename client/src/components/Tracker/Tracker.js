import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tracker: {},
      redirect: false
    }
    this.deleteTracker = this.deleteTracker.bind(this);
  }

  componentDidMount() {
      axios.get(`http://localhost:4000/api/trackers/${this.props.match.params.id}`)
      .then(res => {
        console.log(res)
          this.setState({ tracker: res.data })
      });
  }

  deleteTracker(event) {
    event.preventDefault();
    console.log(this.state.tracker._id)
    axios.post(`http://localhost:4000/api/trackers/delete/${this.state.tracker._id}`)
      .then(res => {
        console.log(res)
          this.setState({ redirect: this.state.redirect === false })
      });
  }

  render() {
    return (
      <div className="container" style={{marginTop: "50px"}}>
        <div className="card text-left">
          <div className="card-header">Job Title : {this.state.tracker.jobTitle}</div>
              <div className="card-body"> 
                <div className="row">
                  <div className="col-lg-3">
                                               
                  </div>
                  <div className="col-lg-9">
                    <p className="card-text"> Company Name: {this.state.tracker.companyName}</p>                 
                    <p className="card-text">Link to Job App: {this.state.tracker.linkToJobApp}</p>
                    <p className="card-text">App Deadline: {this.state.tracker.appDeadline}</p>
                    
                  </div>
                </div>                                        
                  <hr/>
                  <div className="row" style={{marginLeft: "0px"}}>
                    <Link to={this.state.tracker._id+"/edit"}>
                      <button className="btn btn-primary">Edit Tracker</button>
                    </Link>                  
                    <form onSubmit={this.deleteTracker}>
                      <button type="submit" className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                    </form>
                  </div> 
                
                  {this.state.redirect && (
                    <Redirect to={'/trackers'}/>
                  )}

              </div>
          </div>
      </div>
    )
  }
}
export default Tracker;