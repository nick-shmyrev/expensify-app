import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth-actions';

export const LoginPage = props => (
  <div>
    <button name="btn-login" onClick={props.startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

