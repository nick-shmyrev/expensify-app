import React from 'react';
import { connect } from 'react-redux';
import { getVisibleExpenses } from '../store/selectors/expenses-selectors';

import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = props => (
  <div>
    {
      props.expenses.length === 0 ?
        (<p>No expenses to display.</p>) :
        (<ul>
          {props.expenses.map(expense => (
            <ExpenseListItem {...expense} key={expense.id}/>
          ))}
        </ul>)
    }
  </div>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);

