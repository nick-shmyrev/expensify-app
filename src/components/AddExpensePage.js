import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses-actions';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm
      onExpenseFormSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
