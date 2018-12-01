import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './Header';

describe('Header component', () => {
  test('should render correctly', () => {
    const renderer = new ShallowRenderer();
    
    renderer.render(<Header/>);
    console.log(renderer.getRenderOutput());
    
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
