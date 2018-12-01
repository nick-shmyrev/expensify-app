import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import major components
import AppRouter from './routers/AppRouter';
import store from './store/redux-store';

// Import store actions & selectors
import { addExpense, editExpense, removeExpense } from './actions/expenses-actions';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters-actions';
import getVisibleExpenses from './store/selectors/expenses-selector';

// Import styles
import './styles/styles.scss';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 9000,
  createdAt: 86399,
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 4500,
  createdAt: 1386399000,
}));

store.dispatch(addExpense({
  description: 'Bought some coffee',
  amount: 200,
  createdAt: 2534364363,
}));

ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('app'));
