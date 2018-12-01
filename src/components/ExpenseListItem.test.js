import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './ExpenseListItem';

describe('ExpenseListItem component', () => {
  const expense = {
    id: '1234-abcd',
    description: 'Expense to remove',
    note: 'With a note',
    amount: 13,
    createdAt: 0,
  };
  
  test('should render correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expense}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
