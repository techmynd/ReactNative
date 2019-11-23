import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Alert,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback, 
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import StatusBarStyle from './components/constants/StatusBarStyle';

import { useScreens } from 'react-native-screens';
useScreens();

// load fonts from start
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

import About from './components/ChildElement';

export default function App() {
  
  // fonts loaded check
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // check fonts loaded or else wait 
  // return will keep it waiting
  if(!fontsLoaded){
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const alertHandler = () => {
    Alert.alert(
      'Alert Title!', 'Some alert details go here...', 
      [{text: 'Ok', style: 'destructive', onPress: anotherFunction}]
      );
  }

  const anotherFunction = () => {
    // console.log("..."); 
  }

  return (
    <SafeAreaView>
      <StatusBarStyle backgroundColor="#772ea2" barStyle="light-content"/>
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} accessible={false}>
            <View style={styles.container}>
              {/* <Image source={} /> */}
              <Text style={{fontSize: 40, fontFamily: 'open-sans-regular'}}>Title</Text>
              <Text style={styles.mainText}>Regular Open Sans Font!</Text>
              <About />
              <TextInput style={{borderBottomColor: '#000', borderBottomWidth: 1, width: 200, marginVertical: 10}} />
              <Button onPress={alertHandler} title="Show Alert!" />
              <TouchableOpacity activeOpacity={0.5} style={{marginVertical: 10}}>
                <Button title="Touch Button" />
              </TouchableOpacity>
              <View style={{marginVertical: 10, justifyContent: 'center'}}>
                <Ionicons name="md-remove" size={20} color="blue" /> 
                <Ionicons name="md-apps" size={20} color="blue" />
                <Ionicons name="md-appstore" size={20} color="blue" />
                <Ionicons name="md-arrow-round-back" size={20} color="blue" />
                <Ionicons name="md-arrow-round-forward" size={20} color="blue" />
              </View>
              <Text style={styles.mainText} style={{padding: 10}}>lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet </Text>
              <Text style={styles.mainText} style={{padding: 10}}>lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet </Text>
              <Text style={styles.mainText} style={{padding: 10}}>lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet </Text>
              <Text style={styles.mainText} style={{padding: 10}}>lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum dolor set amet </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    // below is the variable
    fontFamily: 'open-sans-regular'
  }
});
