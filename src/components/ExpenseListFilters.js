import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters-actions';

class ExpenseListFilters extends React.Component {
  state = {
    datePickerFocused: null,
  };
  
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  
  onFocusChange = (datePickerFocused) => {
    this.setState(() => ({ datePickerFocused }));
  };
  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <label>
          Sort by:&nbsp;
          <select
            value={this.props.filters.sortBy}
            onChange={(e) => {
              switch (e.target.value) {
                case 'date': this.props.dispatch(sortByDate()); break;
                case 'amount': this.props.dispatch(sortByAmount()); break;
              }
            }}
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

export default connect(mapStateToProps)(ExpenseListFilters);
