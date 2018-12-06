import moment from 'moment';
import { getVisibleExpenses, getExpensesTotal } from './expenses-selectors';

describe('Expenses Selectors', () => {
  const expenses = [
    {
      id: 0,
      description: 'Hydro expense',
      amount: 900,
      note: 'some note',
      createdAt: 0,
    },
    {
      id: 1,
      description: 'Coffee',
      amount: 1300,
      note: '',
      createdAt: moment(0).add(2, 'day').valueOf(),
    },
    {
      id: 2,
      description: 'Gas expense',
      amount: 4500,
      note: '',
      createdAt: moment(0).subtract(4, 'day').valueOf(),
    },
  ];
  
  describe('getVisibleExpenses', () => {
    test('should filter by text value', () => {
      const filters = {
        text: 'expense',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
      };
      const result = getVisibleExpenses(expenses, filters);
    
      expect(result).toEqual([expenses[0], expenses[2]]);
    });
  
    test('should filter by startDate', () => {
      const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
      };
      const result = getVisibleExpenses(expenses, filters);
    
      expect(result).toEqual([expenses[1], expenses[0]]);
    });
  
    test('should filter by endDate', () => {
      const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0),
      };
      const result = getVisibleExpenses(expenses, filters);
    
      expect(result).toEqual([expenses[0], expenses[2]]);
    });
  
    test('should sort by amount', () => {
      const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
      };
      const result = getVisibleExpenses(expenses, filters);
    
      expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
    });
  
    test('should sort by date', () => {
      const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
      };
      const result = getVisibleExpenses(expenses, filters);
    
      expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
    });
  });
  
  describe('getExpensesTotal', () => {
    test('should return a sum of a single expense', () => {
      expect(getExpensesTotal([expenses[1]])).toBe(expenses[1].amount);
    });
    
    test('should return a sum of several expenses', () => {
      const expensesSum = expenses.reduce((a, c) => a + c.amount, 0);
      expect(getExpensesTotal(expenses)).toBe(expensesSum);
    });
    
    test('should return 0 if no expenses provided', () => {
      expect(getExpensesTotal()).toBe(0);
    });
  });

});
