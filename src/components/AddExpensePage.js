import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses-actions';
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onExpenseFormSubmit = (expense) => {
    this.props.startAddExpense(expense);
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
  startAddExpense: expense => dispatch(startAddExpense(expense)),
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
