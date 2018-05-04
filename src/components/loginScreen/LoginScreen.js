import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import NewAccount from '../newAccount/NewAccount.js';
import LoginButton from '../loginButton/LoginButton.js';
import Styles from './Styles.js';
import LoginTextInput from '../loginTextInput/LoginTextInput';
import { PlainTextConversionStream } from 'parse5';
const mark = require("./logo.jpg");

export default class LoginScreen extends Component {

  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
      // errorMessage
    }
    this.login = this.login.bind(this);
  }

  login() {
    const { username, password } = this.state;
    if (!username.trim().length || !password.trim().length){
      console.log('aaaaaaaa');
      this.setState({ errorMessage: "Preencha os campos obrigatórios" } );
      return;
    }
  }

  handleTextChange = (value, key) => {
    this.setState({
      [`${key}`]: value
    })
  }

  render() {
    const { username, password, errorMessage } = this.state;
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

            {errorMessage && 
              <Text id="error-message">{errorMessage}</Text>
            }
            <LoginButton onPressButton={this.login}/>
          </View>
          <NewAccount />
      </View>
    );
  }
}
