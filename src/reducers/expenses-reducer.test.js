import expensesReducer from './expenses-reducer';

describe('Expenses reducer', () => {
  const defaultState = [];
  const prevState = [
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
  
  test('should set default filter values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual(defaultState);
  });
  
  test('should add an expense', () => {
    const expense = {
      description: 'New Expense',
      note: 'With a note',
      amount: 42,
      createdAt: 0,
    };
    const state = expensesReducer(undefined, { type: 'ADD_EXPENSE', expense });
    
    expect(state).toEqual([expense]);
  });
  
  test('should edit an expense', () => {
    const update = {
      description: 'Lets keep this',
      note: '',
      amount: 9000,
      createdAt: 200,
    };
    const state = expensesReducer(prevState, { type: 'EDIT_EXPENSE', id: prevState[0].id, update });
    
    expect(state[0]).toEqual({ ...state[0], ...update });
  });
  
  test('should not edit an expense if id not found', () => {
    const update = {
      description: 'Lets keep this',
      note: '',
      amount: 9000,
      createdAt: 200,
    };
    const state = expensesReducer(prevState, { type: 'EDIT_EXPENSE', id: '404', update });
    
    expect(state).toEqual(prevState);
  });
  
  test('should remove an expense', () => {
    const state = expensesReducer(prevState, { type: 'REMOVE_EXPENSE', id: prevState[0].id });
    
    expect(state).toEqual([prevState[1], prevState[2]]);
  });
  
  test('should not remove an expense if id not found', () => {
    const state = expensesReducer(prevState, { type: 'REMOVE_EXPENSE', id: '404' });
    
    expect(state).toEqual(prevState);
  });
  
  test('should set expenses', () => {
    const state = expensesReducer(defaultState, { type: 'SET_EXPENSES', expenses: prevState });
    
    expect(state).toEqual(prevState);
  });
});
