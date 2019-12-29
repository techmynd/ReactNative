import React from 'react';
import { StyleSheet, View, InputText } from 'react-native';

export default class InputBox extends React.Component {
  render() {
    return (
      <InputText 
        style={styles.blockStyle}
      />
    )
  }
}

const styles = StyleSheet.create({
  blockStyle: {
    marginVertical: 20,
    color: '#333'
  },
});
