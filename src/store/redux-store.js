import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expenses from '../reducers/expenses-reducer';
import filters from '../reducers/filters-reducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  expenses,
  filters,
}), composeEnchancers(applyMiddleware(thunk)));

export default store;
