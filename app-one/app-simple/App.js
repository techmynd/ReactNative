import React from 'react';
import { StyleSheet, Text, View, InputText } from 'react-native';
import InputBox from './components/input'
import TextBox from './components/text'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputBox />
        <TextBox 
          value="Open up App.js to start working on your app!" 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
