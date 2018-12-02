import {createStackNavigator} from 'react-navigation'

import HomeScreen from "../screen/HomeScreen";
import LoginScreen from '../screen/LoginScreen'
import ScheduleDay1 from "../screen/ScheduleDay1";

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
    ScheduleScreen:{
      screen: ScheduleDay1,
      navigationOptions: {headerTitle: 'Schedule'}
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack