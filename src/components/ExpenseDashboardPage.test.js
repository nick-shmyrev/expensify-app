import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from './ExpenseDashboardPage';

describe('ExpenseDashboardPage component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
  });
});
