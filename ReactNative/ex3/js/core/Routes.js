import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import SessionDetailScreen from '../screen/SessionDetailScreen'
import ScheduleScreen from '../screen/ScheduleScreen'
import LayoutDemoScreen from '../screen/LayoutDemoScreen'

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
    LayoutDemoScreen: {
      screen: LayoutDemoScreen,
      navigationOptions: { headerTitle: 'Layout Demo' },
    },
  },
  {
    headerMode: 'screen',
  },
)

export default HomeStack