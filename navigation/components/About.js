import React from 'react';
import {View, Text} from 'react-native';

const About = (props) => {
  return(
    <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
      <Text style={{fontSize: 22, marginBottom: 20}}>About</Text>
      <Text>This is about page...</Text>
    </View>
  );
}

export default About;