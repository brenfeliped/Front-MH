import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/Singnup';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignUp} />
        <Route path='/' exact component={SignIn} />
        <Route path='/dashboard' exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}