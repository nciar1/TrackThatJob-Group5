import React, {Component} from 'react';
import TrackerNav from '../../components/Tracker/TrackerNav';
import Trackers from '../../components/Tracker/Trackers';

class TrackerNavBar extends Component {
    render() {
        return <TrackerNav />;
    }
}

class AppTracker extends Component {
    render() {
        return <Trackers />
    }
}

/*function AppTracker() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                   AppTracker Page
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}*/

export default AppTracker;