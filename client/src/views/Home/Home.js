import React from 'react';
import './Home.css';
import EventCalendar from '../../components/Calendar/Calendar';
import Notepad from '../../components/Notepad/Notepad';


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                   Home Page
                   {/* <Calendar/> */}
                </p>
            </header>
            <body className="App-Body">
                <p>
                    Notepad
                   <Notepad/>
                </p>
            </body>
        </div>
    );
}

export default Home;
