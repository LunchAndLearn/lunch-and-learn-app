import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Button, Alert } from 'react-native';
import Styles from './Styles.js';

class LoginButton extends Component {

    _onPressButton() {
        Alert.alert('Preencha o usuário e senha.')
      }

    render() {
        return (
            <View>
                <TouchableOpacity activeOpacity={.5}>
                    <View style={Styles.button}>
                        <Text style={Styles.buttonText} onPress={this._onPressButton}>Logar</Text>   
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LoginButton;