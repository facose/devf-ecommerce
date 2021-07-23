import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {LOGIN, SIGNUP, PRIVATE, HOME} from './config/router/paths';
import {Login} from './components/views/Login';
import {Home} from './components/views/Home';
import {Signup} from './components/views/Signup';
import {Private} from './components/views/Private';
import {PrivateRoute} from './components/router/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={LOGIN} component={Login} exact />
        <Route path={SIGNUP} component={Signup} />
        <PrivateRoute path={PRIVATE} component={Private} />
        <Route path={HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
