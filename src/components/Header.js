import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth-actions';

export const Header = props => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to="/dashboard" exact activeClassName="active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="active">Create Expense</NavLink>
      <button name="btn-logout" onClick={props.startLogout}>Logout</button>
    </nav>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
