import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';

import {NavBar} from './components/NavBar';
import {MyProfile} from './components/MyProfile';
import {AppTracker} from './components/AppTracker';



const App = () => {
  return (
   <div>

     <NavBar />

     <Switch>
        
        <Route exact path='/AppTracker' component={AppTracker} />
        <Route exact path='/MyProfile' component={MyProfile}/>
     
        
      </Switch>
     
   </div>

   


  );
}

export default App;

