import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import styles
import './styles/styles.scss';

// Import major components
import AppRouter, { history } from './routers/AppRouter';
import store from './store/redux-store';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses-actions';
import { userLogin, userLogout } from './actions/auth-actions';

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(userLogin(user.uid));
    store.dispatch(startSetExpenses(user.uid)).then(() => {
      renderApp();
      if (history.location === '/') {
        history.push('/dashboard');
      }
    });
    
    history.push('/dashboard');
  } else {
    store.dispatch(userLogout());
    renderApp();
    history.push('/');
  }
});
