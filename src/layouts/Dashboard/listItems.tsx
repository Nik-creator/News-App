import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles
} from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

const mainListItems = (
  <div>
    <NavLink to="/" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Новости" />
      </ListItem>
    </NavLink>
    <NavLink to="/help" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Помощь" />
      </ListItem>
    </NavLink>
    <NavLink to="/settings" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Настройки" />
      </ListItem>
    </NavLink>
    <NavLink to="/about" style={{ color: '#000', textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="О нас" />
      </ListItem>
    </NavLink>
  </div>
);

export default mainListItems;
