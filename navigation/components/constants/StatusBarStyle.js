/**
 * Takes backgroundColor as prop from parent
 * Set backGroundColor from App.js / main component
 */
import React from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';
const StatusBarStyle = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default StatusBarStyle;

const styles = StyleSheet.create({
  statusBar: {
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
  }
});