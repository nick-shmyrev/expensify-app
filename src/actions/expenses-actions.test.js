import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../firebase/firebase';
import { addExpense, startAddExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from './expenses-actions';

const createMockStore = configureMockStore([thunk]);

describe('Expenses Action Generators', () => {
  const expenses = [
    {
      id: '1234-abcd',
      description: 'Expense to remove',
      note: 'With a note',
      amount: 13,
      createdAt: 0,
    },
    {
      id: 'ccd-42',
      description: 'Expense to keep',
      note: 'With a note',
      amount: 42,
      createdAt: 0,
    },
    {
      id: 'ccd-43',
      description: 'Expense to keep too',
      note: 'With a note',
      amount: 42,
      createdAt: 0,
    },
  ];
  
  // Generate expenses in the db before each test
  beforeEach((done) => {
    const expensesData = expenses.reduce((acc, { id, description, note, amount, createdAt }) => {
      acc[id] = { description, note, amount, createdAt };
      return acc;
    }, {});
    
    db.ref('expenses')
      .set(expensesData)
      .then(() => done());
  });
  
  // Clear test db after all tests completed
  afterAll(() => {
    db.ref().set(null);
  });
  
  describe('AddExpense()', () => {
    test('should return correct action object with custom values', () => {
      const action = addExpense(expenses[0]);
    
      expect(action).toEqual({ type: 'ADD_EXPENSE', expense: expenses[0] });
    });
    
    test('startAddExpense() should add expense to database and store', (done) => {
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
  });
  
  test('removeExpense() should return correct action object', () => {
    const action = removeExpense(expenses[0].id);
    
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id: expenses[0].id });
  });
  
  test('editExpense() should return correct action object', () => {
    const update = {
      description: 'Expense description',
      amount: 96000,
      note: 'Expense note',
    };
    const action = editExpense(expenses[0].id, update);
    
    expect(action).toEqual({ type: 'EDIT_EXPENSE', id: expenses[0].id, update });
  });
  
  describe('setExpenses()', () => {
    test('should return correct action object', () => {
      const action = setExpenses(expenses);
    
      expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses,
      });
    });
    
    test('startSetExpenses() should fetch expenses from db', (done) => {
      const store = createMockStore({});
      
      store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
          type: 'SET_EXPENSES',
          expenses,
        });
        done();
      });
    });
  });
});
