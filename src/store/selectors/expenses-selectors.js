import moment from 'moment';

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  const visibleExpenses = expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    
    return textMatch && startDateMatch && endDateMatch;
  });
  
  visibleExpenses.sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
  
  return visibleExpenses;
};

// Get expenses total
const getExpensesTotal = (expenses) => {
  if (!Array.isArray(expenses) || expenses.length < 1) return 0;
  
  return expenses.reduce((a, c) => a + c.amount, 0);
};

export { getVisibleExpenses, getExpensesTotal };
