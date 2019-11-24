
import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import AppTracker from "./views/AppTracker/AppTrackerView"
import Header from "./components/Header/Header"
import ProfilePage from "./views/ProfilePage/ProfilePage"
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path='/AppTracker' component={AppTracker} />
        <Route exact path='/MyProfile' component={ProfilePage}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;

