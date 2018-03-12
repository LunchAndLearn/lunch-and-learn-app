import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles.js';

class NewAccount extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.signupWrap}>
                    <Text style={Styles.accountText}>Não tem uma conta?</Text>
                    <TouchableOpacity activeOpacity={.5}>
                        <View>
                            <Text style={Styles.signupLinkText}>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default NewAccount;