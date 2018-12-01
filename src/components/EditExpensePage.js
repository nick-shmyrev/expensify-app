import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses-actions';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => (
  <div>
    {console.log(props.match.params.id)}
    <ExpenseForm
      expense={props.expense}
      onExpenseFormSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
      }}
    />
    <button onClick={(e) => {
      e.preventDefault();
      props.dispatch(removeExpense({ id: props.expense.id }));
      props.history.push('/');
    }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(el => el.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
