import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './AddExpensePage';

describe('AddExpensePage component', () => {
  let startAddExpense;
  let history;
  let wrapper;
  
  beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>);
  });
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should handle onExpenseFormSubmit', () => {
    const expense = {
      description: 'Description',
      amount: 39.5,
      note: 'A note',
      createdAt: 0,
    };
    
    wrapper.find('ExpenseForm').prop('onExpenseFormSubmit')(expense);
    
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expense);
  });
});
