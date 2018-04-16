import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from './LoginScreen';

describe('<LoginScreen>', () => {
  const component = <LoginScreen />;
  it('renders correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});