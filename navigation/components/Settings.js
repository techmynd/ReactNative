import React from 'react';
import {View, Text} from 'react-native';

const Settings = (props) => {
  return(
    <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
      <Text style={{fontSize: 22, marginBottom: 20}}>Settings</Text>
      <Text>This is settings page...</Text>
    </View>
  );
}

export default Settings;