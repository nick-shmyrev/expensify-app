import uuid from 'uuid/v4';
import moment from 'moment';
import { addExpense, editExpense, removeExpense } from './expenses-actions';

describe('Expenses Action Generators', () => {
  const id = uuid();
  
  describe('AddExpense()', () => {
    test('should return correct action object with custom values', () => {
      const expense = {
        description: 'Expense description',
        amount: 96000,
        note: 'Expense note',
        createdAt: moment(),
      };
      const action = addExpense(expense);
    
      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...expense,
          id: expect.any(String),
        },
      });
    
    });
  
    test('should return correct object with default values', () => {
      const action = addExpense();
    
      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          description: '',
          note: '',
          amount: 0,
          createdAt: 0,
          id: expect.any(String),
        },
      });
    });
  });
  
  test('removeExpense() should return correct action object', () => {
    const action = removeExpense(id);
    
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id });
  });
  
  test('editExpense() should return correct action object', () => {
    const update = {
      description: 'Expense description',
      amount: 96000,
      note: 'Expense note',
    };
    const action = editExpense(id, update);
    
    expect(action).toEqual({ type: 'EDIT_EXPENSE', id, update });
  });
  
});
