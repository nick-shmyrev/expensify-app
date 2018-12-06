import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './ExpensesSummary';
import moment from 'moment';

describe('ExpensesSummary component', () => {
  test('should render correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={4213}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should render correctly with 0 or 2+ expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={4213}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
