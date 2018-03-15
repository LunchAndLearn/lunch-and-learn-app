import React from 'react';
import { Constants } from 'expo';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import LoginScreen from './src/components/loginScreen/LoginScreen.js';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" hidden={false}/>
          <LoginScreen />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'center',
  },
});
