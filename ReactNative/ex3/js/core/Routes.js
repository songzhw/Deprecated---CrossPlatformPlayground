import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import SessionDetailScreen from '../screen/SessionDetailScreen'
import ScheduleScreen from '../screen/ScheduleScreen'
import FirstScreen from '../screen/FirstScreen'
import ChallengeOneScreen from "../screen/ChallengeOneScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home' },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: { headerTitle: 'Log In' },
    },
    ScheduleScreen: {
      screen: ScheduleScreen,
      navigationOptions: { headerTitle: 'Schedule' },
    },
    SessionDetailScreen: {
      screen: SessionDetailScreen,
      navigationOptions: { headerTitle: 'Session Detail' },
    },
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: { headerTitle: 'First Screen' },
    },
    ChallengeOneScreen: {
      screen: ChallengeOneScreen,
      navigationOptions: {headerTitle: 'Challenge One'}
    }
  },
  {
    headerMode: 'screen',
  },
)

export default HomeStack