import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../store/selectors/expenses-selector';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    
    <ul>
      {props.expenses.map(expense => (
        <ExpenseListItem {...expense} key={expense.id}/>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);

