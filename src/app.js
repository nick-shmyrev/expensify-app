import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import major components
import AppRouter from './routers/AppRouter';
import store from './store/redux-store';

// Import styles
import './styles/styles.scss';

// Import firebase
import './firebase/firebase';

import { startSetExpenses } from './actions/expenses-actions';

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses())
  .then(() => {
    ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('app'));
  })
  .catch();
