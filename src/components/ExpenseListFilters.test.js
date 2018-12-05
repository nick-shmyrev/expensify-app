import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from './ExpenseListFilters';

describe('ExpenseListFilters component', () => {
  let setTextFilter;
  let sortByDate;
  let sortByAmount;
  let setStartDate;
  let setEndDate;
  let wrapper;
  const defaultFilters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const altFilters = {
    text: 'bill',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days'),
  };

  
  beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
  });
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should render with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should set text filter correctly', () => {
    const value = 'New filter text';
    wrapper.find('input[name="textFilter"]').simulate('change', {
      target: { value },
    });
    
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });
  
  test('should set filter type to amount', () => {
    const value = 'amount';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select[name="sortBy"]').simulate('change', {
      target: { value },
    });
    
    expect(sortByAmount).toHaveBeenCalled();
  });
  
  test('should set filter type to date', () => {
    const value = 'date';
    wrapper.find('select[name="sortBy"]').simulate('change', {
      target: { value },
    });
    
    expect(sortByDate).toHaveBeenCalled();
  });
  
  test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });
  
  test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    
    expect(wrapper.state('datePickerFocused')).toBe(calendarFocused);
  });
});
