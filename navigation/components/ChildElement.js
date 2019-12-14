import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About(props) {
  
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.mainText}>Bold Open Sans!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: 'open-sans-bold'
  }
});
