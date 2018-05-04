import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from './Styles.js';

const LoginTextInput = ({ iconName, placeholder, isSecure, value, changeText }) => (
  <View style={ Styles.inputWrap }>
    <View style={ Styles.iconWrap }>
      <Ionicons name={ iconName } size={ 20 } />
    </View>
    <TextInput
      placeholderTextColor="#000"
      placeholder={ placeholder }
      style={ Styles.input }
      onChangeText={ (value) => changeText(value) }
      value={ value }
      secureTextEntry={ isSecure }
    />
  </View>
);

export default LoginTextInput;
