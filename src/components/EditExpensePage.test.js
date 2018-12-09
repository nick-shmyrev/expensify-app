import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './EditExpensePage';

describe('EditExpensePage component', () => {
  let history;
  let wrapper;
  let startEditExpense;
  let startRemoveExpense;
  const expense = {
    id: '023-abc',
    description: 'Description',
    amount: 39.5,
    note: 'A note',
    createdAt: 0,
  };
  
  beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expense} startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history}/>);
  });
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onExpenseFormSubmit')(expense);
  
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
  });
  
  test('should handle removeExpense', () => {
    wrapper.find('button[name="removeExpense"]').simulate('click', {
      preventDefault: () => {},
    });
    
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense.id);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  });
});
