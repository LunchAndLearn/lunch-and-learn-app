import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles.js';

class LoginButton extends Component {
    render() {
        return (
            <View>
            <TouchableOpacity activeOpacity={.5}>
                <View style={Styles.button}>
                    <Text style={Styles.buttonText}>Logar</Text>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
}

export default LoginButton;