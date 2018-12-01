import { createStore, combineReducers } from 'redux';

import expenses from '../reducers/expenses-reducer';
import filters from '../reducers/filters-reducer';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(combineReducers({
  expenses,
  filters,
}), reduxDevTools);

export default store;
