import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

class ExpenseForm extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    amount: this.props.expense ? this.props.expense.amount / 100 : '',
    note: this.props.expense ? this.props.expense.note : '',
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    datePickerFocused: false,
    error: '',
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || /^[0-9]+([,.][0-9]{0,2})?$/g.test(amount)) {
      this.setState(() => ({ amount }));
    }
  };
  
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };
  
  onFormSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and/or amount',
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onExpenseFormSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        {!!this.state.error && <p className="form-error">{this.state.error}</p>}
        <input
          type="text"
          name="description"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.datePickerFocused}
          onFocusChange={({ focused }) => this.setState({ datePickerFocused: focused })}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          name="note"
          placeholder="Add a note to your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ExpenseForm;
