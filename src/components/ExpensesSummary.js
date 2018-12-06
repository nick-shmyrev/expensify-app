import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { getVisibleExpenses, getExpensesTotal } from '../store/selectors/expenses-selectors';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    <p>Viewing {expensesCount} {expensesCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</p>
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
