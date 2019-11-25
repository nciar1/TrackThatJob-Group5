import React from 'react';
import './Home.css';
import EventCalendar from '../../components/Calendar/Calendar';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                   Home Page
                   {/* <Calendar/> */}
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
}

export default Home;
