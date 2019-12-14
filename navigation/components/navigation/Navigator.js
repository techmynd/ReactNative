import { createStackNavigator } from 'react-navigation';
import Home from '../../App';

const Navigator = createStackNavigator({
  Home: { screen: Home },
});

export default Navigator;