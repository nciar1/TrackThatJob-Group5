import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component{
    constructor () {
        super()
        this.state = {
          who: "React"
        }
      }
      render () {
        return (
          <div>
            {`Hello ${this.state.who}`}
          </div>
        )
      }
}