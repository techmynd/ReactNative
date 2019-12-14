import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  TextRegular: {
    fontFamily: 'open-sans-regular',
    fontSize: 16
  },
  TextBold: {
    fontFamily: 'open-sans-bold',
    fontSize: 24
  },
});

// usage 
// import DefaultStyles from '../constants/DefaultStyles';
// <Text style={{DefaultStyles.TextRegular}}>Hello World</Text>