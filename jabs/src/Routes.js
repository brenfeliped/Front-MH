import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/Singnup';
import CadastroProduto from './pages/Dashboard/CadastroProduto';
import ListarProdutos from './pages/Dashboard/ListarProdutos';
import Conselhos from './pages/Dashboard/Conselhos';
import Vendas from './pages/Dashboard/Vendas';
import EditarProduto from './pages/Dashboard/EditarProduto';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/cadastrar' exact component={SignUp} />
        <Route path='/' exact component={SignIn} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/cadastroProduto' exact component={CadastroProduto} />
        <Route path='/painel' exact component={ListarProdutos} />
        <Route path='/conselhos' exact component={Conselhos} />
        <Route path='/vendas' exact component={Vendas} />
        <Route path='/editarProduto' exact component={EditarProduto} />
      </Switch>
    </BrowserRouter>
  )
}