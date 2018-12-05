import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses-actions';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onExpenseFormSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  
  render() {
    return (
      <div>
        <h2>Add Expense</h2>
        <ExpenseForm
          onExpenseFormSubmit={this.onExpenseFormSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
