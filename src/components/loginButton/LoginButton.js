import React from 'react';
import { View, TouchableOpacity, Text, Button, Alert } from 'react-native';
import Styles from './Styles.js';

const LoginButton = ({ onPressButton }) => (
    <View>
        <TouchableOpacity activeOpacity={.5} onPress={onPressButton}>
            <View style={Styles.button}>
                <Text style={Styles.buttonText}>Logar</Text>   
            </View>
        </TouchableOpacity>
    </View>
);

export default LoginButton;
