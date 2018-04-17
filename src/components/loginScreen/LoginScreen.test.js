import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import LoginScreen from './LoginScreen';
import LoginButton from '../loginButton/LoginButton';
import { TouchableOpacity } from 'react-native';

describe('<LoginScreen>', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<LoginScreen />);
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call login when press the login button', () => {
    const spy = sinon.spy(LoginScreen.prototype, "login");
    const loginButtonWrapper = shallow(<LoginButton onPressButton={spy} />);
    loginButtonWrapper.find(TouchableOpacity).simulate('press');
    expect(spy.calledOnce).toBe(true);
  });

});