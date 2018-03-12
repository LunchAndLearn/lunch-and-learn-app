import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Styles from './Styles.js';
import { Ionicons } from '@expo/vector-icons';

class Password extends Component {
    render() {
        return (
            <View style={Styles.inputPasswordWrap}>
                <View style={Styles.iconWrap}>
                    <Ionicons name='ios-lock' size={20} />
                </View>
                <TextInput
                    placeholderTextColor="#000"
                    placeholder="Senha"
                    style={Styles.input}
                    secureTextEntry/>
            </View>
        );
    }
}

export default Password;