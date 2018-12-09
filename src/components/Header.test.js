import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header component', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout}/>);
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should call startLogout on button click', () => {
    wrapper.find('button[name="btn-logout"]').simulate('click');
    
    expect(startLogout).toHaveBeenCalled();
  });
});
