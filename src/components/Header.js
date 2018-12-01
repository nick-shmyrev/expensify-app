import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to="/" exact activeClassName="active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="active">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="active">Help Page</NavLink>
    </nav>
  </header>
);

export default Header;
