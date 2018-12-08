import db from '../firebase/firebase';

const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };
  
    return db.ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      })
      .catch();
  };
};

const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const startRemoveExpense = (id) => {
  return (dispatch) => {
    return db.ref(`expenses/${id}`).remove()
      .then(() => {
        dispatch(removeExpense(id));
      })
      .catch();
  };
};

const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update,
});

const startEditExpense = (id, update) => {
  return (dispatch) => {
    return db.ref(`expenses/${id}`)
      .update(update)
      .then(() => {
        dispatch(editExpense(id, update));
      })
      .catch();
  };
};

const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

const startSetExpenses = () => {
  return (dispatch) => {
    return db.ref('expenses')
      .once('value')
      .then((snap) => {
        const dbExpenses = snap.val();
        const expenses = Object.keys(dbExpenses || {}).map(id => ({
          id,
          description: dbExpenses[id].description,
          amount: dbExpenses[id].amount,
          note: dbExpenses[id].note,
          createdAt: dbExpenses[id].createdAt,
        }));
        
        dispatch(setExpenses(expenses));
      })
      .catch();
  };
};

export {
  addExpense,
  startAddExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses,
};
