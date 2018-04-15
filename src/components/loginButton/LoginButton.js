import React from 'react';
import { View, TouchableOpacity, Text, Button, Alert } from 'react-native';
import Styles from './Styles.js';

const LoginButton = ({ onPressButton }) => (
    <View>
        <TouchableOpacity activeOpacity={.5}>
            <View style={Styles.button}>
                <Text style={Styles.buttonText} onPress={onPressButton}>Logar</Text>   
            </View>
        </TouchableOpacity>
    </View>
);

export default LoginButton;
