import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from './AddExpensePage';

describe('AddExpensePage component', () => {
  let addExpense;
  let history;
  let wrapper;
  
  beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
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
    expect(addExpense).toHaveBeenLastCalledWith(expense);
  });
});
