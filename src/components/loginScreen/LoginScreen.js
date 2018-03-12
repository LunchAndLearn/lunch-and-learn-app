import React, { Component } from 'react';
import { View, Image } from 'react-native';
import User from '../user/User.js';
import Password from '../password/Password.js';
import NewAccount from '../newAccount/NewAccount.js';
import LoginButton from '../loginButton/LoginButton.js';
import Styles from './Styles.js';

const mark = require("./logo.jpg");

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
          <View style={Styles.markWrap}>
            <Image source={mark} style={Styles.mark} resizeMode="contain" />
          </View>
          <View style={Styles.wrapper}>
            <User />
            <Password />
            <LoginButton/>
          </View>
          <NewAccount />
      </View>
    );
  }
}