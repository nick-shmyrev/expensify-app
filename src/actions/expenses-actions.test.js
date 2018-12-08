import uuid from 'uuid/v4';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../firebase/firebase';
import { addExpense, startAddExpense, editExpense, removeExpense } from './expenses-actions';

const createMockStore = configureMockStore([thunk]);

describe('Expenses Action Generators', () => {
  const id = uuid();
  
  describe('AddExpense()', () => {
    
    test('should return correct action object with custom values', () => {
      const expense = {
        id: 'someRand0mId',
        description: 'Expense description',
        amount: 96000,
        note: 'Expense note',
        createdAt: 0,
      };
      const action = addExpense(expense);
    
      expect(action).toEqual({ type: 'ADD_EXPENSE', expense });
    });
    
    test('should add expense to database and store', (done) => {
      const store = createMockStore({});
      const expense = {
        description: 'description',
        amount: 350,
        note: 'a note',
        createdAt: 0,
      };
      
      store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expense,
          },
        });
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
      }).then((snap) => {
        expect(snap.val()).toEqual(expense);
        done();
      });
    });
    
    test('should add expense with defaults to database and store', (done) => {
      const store = createMockStore({});
      const defaultExpense = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
      };
      const expense = {};
  
      store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...defaultExpense,
          },
        });
        return db.ref(`expenses/${actions[0].expense.id}`).once('value');
      }).then((snap) => {
        expect(snap.val()).toEqual(defaultExpense);
        done();
      });
    });
  
    // test('should return correct object with default values', () => {
    //   const action = addExpense();
    //
    //   expect(action).toEqual({
    //     type: 'ADD_EXPENSE',
    //     expense: {
    //       description: '',
    //       note: '',
    //       amount: 0,
    //       createdAt: 0,
    //       id: expect.any(String),
    //     },
    //   });
    // });
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
