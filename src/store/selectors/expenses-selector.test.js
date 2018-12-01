import moment from 'moment';
import getVisibleExpenses from './expenses-selector';

describe('Expenses Selector', () => {
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
