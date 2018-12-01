import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './filters-actions';
describe('Filters Action Generators', () => {
  
  describe('setTextFilter()', () => {
    test('should return correct action object with custom text', () => {
      const text = 'Filter text';
      const action = setTextFilter(text);
      
      expect(action).toEqual({ type: 'SET_TEXT_FILTER', text });
    });
    
    test('should return correct action object with default text', () => {
      const action = setTextFilter();
      
      expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
    });
  });
  
  test('sortByDate() should return correct action object', () => {
    const action = sortByDate();
    
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
  });
  
  test('sortByAmount() should return correct action object', () => {
    const action = sortByAmount();
    
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
  });
  
  test('setStartDate() should return correct action object', () => {
    const startDate = moment();
    const action = setStartDate(startDate);
    
    expect(action).toEqual({ type: 'SET_START_DATE', startDate });
  });
  
  test('setEndDate() should return correct action object', () => {
    const endDate = moment();
    const action = setEndDate(endDate);
    
    expect(action).toEqual({ type: 'SET_END_DATE', endDate });
  });
});

