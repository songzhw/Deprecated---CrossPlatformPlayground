import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import ScheduleDay1 from '../screen/ScheduleDay1'
import SessionDetailScreen from '../screen/SessionDetailScreen'
import ScheduleScreen from '../screen/ScheduleScreen'

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
  },
  {
    headerMode: 'screen',
  },
)

export default HomeStack