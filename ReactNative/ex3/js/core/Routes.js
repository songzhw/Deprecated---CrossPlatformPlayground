import {createStackNavigator} from 'react-navigation'

import HomeScreen from "../screen/HomeScreen";
import LoginScreen from '../screen/LoginScreen'

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: 'Home'}
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {headerTitle: 'Log In'}
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack