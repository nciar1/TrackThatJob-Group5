import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route  from 'react-router-dom/Route';
import EditTracker from './EditTracker';
import AddTracker from './AddTracker';
import Trackers from './Trackers';
import Tracker from './Tracker';

class AppTracker extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Route path="/trackers" exact strict component={Trackers}/>
          <Route path="/trackers/:id" exact strict component={Tracker}/>
          <Route path="/trackers/:id/edit" exact strict component={EditTracker}/>
          <Route path="/add" exact strict component={AddTracker}/>
        </div>
      </Router>
    );
  }
}

export default AppTracker;