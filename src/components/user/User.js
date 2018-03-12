import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from './Styles.js';

class User extends Component {
    render() {
        return (
            <View style={Styles.inputUserWrap}>
                <View style={Styles.iconWrap}>
                    <Ionicons name='ios-person' size={20} />
                </View>
                <TextInput
                    placeholder="Usuário"
                    placeholderTextColor="#000"
                    style={Styles.input}/>
            </View>
        );
    }
}

export default User;