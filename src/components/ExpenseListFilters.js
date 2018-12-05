import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters-actions';

export class ExpenseListFilters extends React.Component {
  state = {
    datePickerFocused: null,
  };
  
  onTextChange = e => this.props.setTextFilter(e.target.value);
  
  onSortChange = (e) => {
    switch (e.target.value) {
      case 'date': this.props.sortByDate(); break;
      case 'amount': this.props.sortByAmount(); break;
    }
  };
  
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  
  onFocusChange = (datePickerFocused) => {
    this.setState(() => ({ datePickerFocused }));
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          name="textFilter"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <label>
          Sort by:&nbsp;
          <select
            name="sortBy"
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </label>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.datePickerFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});
const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
