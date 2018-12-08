import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses-actions';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onExpenseFormSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  
  handleRemoveExpense = (e) => {
    e.preventDefault();
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/');
  };
  
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onExpenseFormSubmit={this.onExpenseFormSubmit}
        />
        <button
          name="removeExpense"
          onClick={this.handleRemoveExpense}
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(el => el.id === props.match.params.id),
});
const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
  startRemoveExpense: id => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
