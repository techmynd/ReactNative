// Fonts are loaded via Font.loadAsync method and these should be loaded before component renders
const FontsCall = async () => {
  await Font.loadAsync({
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.woff2"),
    "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.woff2"),
    "OpenSans-Bolder": require("../../assets/fonts/OpenSans-Bolder.woff2")
  });
}
export default FontsCall;

// usage

// load font import in app.js // in main component so it spreads across the app 
// import * as Font from "expo-font";

// then use font call in component that needs fonts, e.g. textComponent
// import FontsCall from "../constants/Fonts";
/*
const InputBlock = props => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
    if (!fontsLoaded)
      FontsCall().then(() => {
        setFontsLoaded(true)
      });
    });
    if (!fontsLoaded) {
    return null 
    }
    return (...);
};
*/

// or
// in app.js 
// at the top do this 

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
const fetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Bolder": require("../../assets/fonts/OpenSans-Bolder.ttf")
  })
}


export default function(App) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded){
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      >
    );
  }

  // everything else

}


