import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage';

describe('LoginPage component', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should call startLogin on button click', () => {
    wrapper.find('button[name="btn-login"]').simulate('click');
    
    expect(startLogin).toHaveBeenCalled();
  });
});
