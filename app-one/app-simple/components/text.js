import React from 'react';
import { StyleSheet, Text, View, InputText } from 'react-native';

export default class TextBox extends React.Component {
  render() {
    return (
      <Text style={styles.blockStyle}>
        {this.props.value}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  blockStyle: {
    marginVertical: 20,
    color: '#ff6600'
  },
});
