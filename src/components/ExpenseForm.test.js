import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from './ExpenseForm';

describe('ExpenseForm component', () => {
  const expense = {
    description: 'Sample description',
    amount: 93.5,
    note: 'Sample note',
    createdAt: moment(),
  };
  
  test('should render correctly without expense prop provided', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should render correctly with expense prop provided', () => {
    const wrapper = shallow(<ExpenseForm expense={expense}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should render error message for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    
    expect(wrapper).toMatchSnapshot();
    
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm/>);
    
    wrapper.find('input[name="description"]').simulate('change', {
      target: { value },
    });
    
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should set note on input change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm/>);
    
    wrapper.find('textarea[name="note"]').simulate('change', {
      target: { value },
    });
    
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should set amount for valid value', () => {
    const value = 42.5;
    const wrapper = shallow(<ExpenseForm/>);
  
    wrapper.find('input[name="amount"]').simulate('change', {
      target: { value },
    });
  
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should not set amount for invalid value', () => {
    const value = 23.456;
    const wrapper = shallow(<ExpenseForm/>);
  
    wrapper.find('input[name="amount"]').simulate('change', {
      target: { value },
    });
  
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should call onExpenseFormSubmit prop for valid form submission', () => {
    const expense = {
      description: 'Description',
      amount: 39.5,
      note: 'A note',
      createdAt: 0,
    };
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expense} onExpenseFormSubmit={onSubmitSpy}/>);
    
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
    });
    
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expense);
  });
  
  test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    const onDateChange = wrapper.find('SingleDatePicker').prop('onDateChange');
    
    onDateChange(now);
    
    expect(wrapper.state('createdAt')).toEqual(now);
  });
  
  test('should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const onFocusChange = wrapper.find('SingleDatePicker').prop('onFocusChange');
    
    onFocusChange({ focused: true });
    
    expect(wrapper.state('datePickerFocused')).toEqual(true);
  });
});
