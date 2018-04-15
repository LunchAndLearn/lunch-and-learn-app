import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import NewAccount from '../newAccount/NewAccount.js';
import LoginButton from '../loginButton/LoginButton.js';
import Styles from './Styles.js';
import LoginTextInput from '../loginTextInput/LoginTextInput.js';

const mark = require("./logo.jpg");

export default class LoginScreen extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  login = () => {

  }

  handleTextChange = (value, key) => {
    this.setState({
      [`${key}`]: value
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <View style={Styles.container}>
          <View style={Styles.markWrap}>
            <Image source={mark} style={Styles.mark} resizeMode="contain" />
            <Text style={Styles.title}>Lunch & Learn</Text>
          </View>
          <View style={Styles.wrapper}>
            <LoginTextInput 
              iconName={'ios-person'} 
              placeholder={'Usuário'} 
              isSecure={false}
              value={username}
              changeText={(value) => this.handleTextChange(value, 'username')} 
            />

            <LoginTextInput 
              iconName={'ios-lock'} 
              placeholder={'Senha'} 
              isSecure={true}
              value={password}
              changeText={(value) => this.handleTextChange(value, 'password')} 
            />
            <LoginButton onPressButton={this.login}/>
          </View>
          <NewAccount />
      </View>
    );
  }
}
