import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Signin from './components/signin';
import Home from './components/home';
import Welcome from './components/welcome';
import requireAuth from './components/requireAuth';
import SignedIn from './components/signedin';
import Signout from './components/signout';
import Maps from './components/maps';
import Dashboard from './components/dashboard';
import Settings from './components/settings';
import Channels from './components/channels';


const Routes = () => {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signedin" component={SignedIn} />
        <Route path="home" component={requireAuth(Home)}>
          <IndexRoute component={Dashboard} />
          <Route path="maps" component={Maps} />
          <Route path="channels" component={Channels} />
          <Route path="settings" component={Settings} />
        </Route>
      </Route>
    </Router>
  );
};

export default Routes;