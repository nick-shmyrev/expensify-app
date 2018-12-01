import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from './Header';

describe('Header component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Header/>);
  
    expect(wrapper).toMatchSnapshot();
  
  });
});
