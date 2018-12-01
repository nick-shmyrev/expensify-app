import moment from 'moment';
import filtersReducer from './filters-reducer';

describe('Filters reducer', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  
  test('should set default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    
    expect(state).toEqual(defaultState);
  });
  
  test('should set text filter', () => {
    const text = 'Filter text';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
    
    expect(state).toEqual({ ...defaultState, text });
  });
  
  test('should set sortBy to "date"', () => {
    const prevState = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
    const state = filtersReducer(prevState, { type: 'SORT_BY_DATE' });
    
    expect(state.sortBy).toBe('date');
  });
  
  test('should set sortBy to "amount"', () => {
    const prevState = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
    const state = filtersReducer(prevState, { type: 'SORT_BY_AMOUNT' });
    
    expect(state.sortBy).toBe('amount');
  });
  
  test('should set startDate', () => {
    const startDate = moment(0).add(2, 'days');
    const prevState = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
    const state = filtersReducer(prevState, { type: 'SET_START_DATE', startDate });
  
    expect(state).toEqual({ ...prevState, startDate });
  });
  
  test('should set endDate', () => {
    const endDate = moment(0).add(2, 'days');
    const prevState = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
    const state = filtersReducer(prevState, { type: 'SET_END_DATE', endDate });
    
    expect(state).toEqual({ ...prevState, endDate });
  });
});
