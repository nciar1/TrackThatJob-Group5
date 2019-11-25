import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


class TrackerNav extends Component {
  render() {
    return (
        
    <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Application Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link
                        className="nav-link" to="/trackers">mainTrackerPage
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/trackers">trackers
                    </Link>               
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add">Add tracker
                    </Link>               
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Sort By</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
    )
  }
}

export default TrackerNav;