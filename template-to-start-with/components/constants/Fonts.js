// Fonts are loaded via Font.loadAsync method 
// should be loaded before component renders
const FontsCall = async () => {
  await Font.loadAsync({
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.woff2"),
    "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.woff2"),
    "OpenSans-Bolder": require("../../assets/fonts/OpenSans-Bolder.woff2")
  });
}
export default FontsCall;

/**
 * USAGE
  // load font import in app.js // in main component so it spreads across the app 
  import * as Font from "expo-font";

  // then use font call in component that needs fonts, e.g. textComponent
  import FontsCall from "../constants/Fonts";

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
 * */ 

// or load fonts is App.js
