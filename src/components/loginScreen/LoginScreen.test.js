import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from './LoginScreen';
import LoginButton from '../loginButton/LoginButton';
import { TouchableOpacity } from 'react-native';

describe('<LoginScreen>', () => {
  let loginWrapper;

  beforeAll(() => {
    loginWrapper = shallow(<LoginScreen />);
  });

  it('renders correctly', () => {
    expect(loginWrapper).toMatchSnapshot();
  });

  describe('when LoginButton is pressed', () => {
    it('should show an error message if credentials are empty', () => {
      const button = loginWrapper.find(LoginButton).dive();

      button.find(TouchableOpacity).simulate('press');
      loginWrapper.update();
      
      expect(loginWrapper.find('#error-message').length).toBe(1);
    });
  })
});