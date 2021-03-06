import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Início" />
    </ListItem>
    </Link>
    <Link to="/vendas" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Vendas" />
      </ListItem>
    </Link>
    <Link to="/conselhos" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Conselhos Financeiros" />
      </ListItem>
    </Link>
    <Link to="/cadastroProduto" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Cadastrar Produto" />
      </ListItem>
    </Link>
    <Link to="/painel" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Painel de Produtos" />
      </ListItem>
    </Link>
  </div>
);
