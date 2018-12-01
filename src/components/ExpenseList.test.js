import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from './ExpenseList';

describe('ExpenseList component', () => {
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
  
  test('should render with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should correctly render without expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
