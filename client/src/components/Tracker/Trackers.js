import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Trackers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          trackers: []
        }
      }

    componentDidMount() {
        axios.get('http://localhost:4000/api/trackers')
        .then(res => {
            console.log(res);
            this.setState({ trackers: res.data })
        });
    }
    
    render() {

        var data = this.state.trackers;

        return (
        <div className="trackers" style={{marginTop: "50px"}}>
            <div className="container"> 
            <div className="row">
                {data.length > 0 ? 
                    data.map((tracker, i) => {                        
                        return (
                            <div className="col-lg-6" key={tracker._id.toString()}>
                                <div className="card" style={{ marginBottom: "20px"}}>
                                    <div className="card-header text-left">{tracker.jobTitle}</div>
                                    <div className="card-body text-left">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <Link to={"trackers/"+tracker._id}>
                                                    <button className="btn btn-outline-dark btn-sm">View Tracker</button>
                                                </Link>
                                            </div>   
                                            <div className="col-lg-9">
                                                <ul className="list-group">
                                                    <li className="list-group-item"><b>Job Title </b>: {tracker.jobTitle}</li>
                                                    <li className="list-group-item"><b>Company Name </b>:{tracker.companyName}</li>
                                                    <li className="list-group-item"><b>Link to Job App </b>: {tracker.linkToJobApp}</li>
                                                    <li className="list-group-item"><b>App Deadline </b>: {tracker.appDeadline}</li>

                                                </ul>
                                            </div>      
                                        </div>
                                    </div>                                
                                </div>
                            </div>
                        )}                       
                    ) : null}                                           
                </div>
            </div>
        </div>
        );
    }
}
export default Trackers;