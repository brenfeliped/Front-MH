import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/Singnup';
import CadastroProduto from './pages/Dashboard/CadastroProduto'
import Conselhos from './pages/Dashboard/Conselhos'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/cadastrar' exact component={SignUp} />
        <Route path='/' exact component={SignIn} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/cadastroProduto' exact component={CadastroProduto} />
        <Route path='/conselhos' exact component={Conselhos} />
      </Switch>
    </BrowserRouter>
  )
}