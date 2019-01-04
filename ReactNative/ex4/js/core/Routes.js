import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import SessionDetailScreen from '../screen/SessionDetailScreen'
import ScheduleScreen from '../screen/ScheduleScreen'
import FirstScreen from '../screen/FirstScreen'
import ChallengeOneScreen from "../screen/ChallengeOneScreen";
import SetStatePitfallScreen from "../screen/SetStatePitfallScreen";
import LoadingListScreen from "../screen/LoadingListScreen";
import ActionSheetDemo from "../screen/ActionSheetDemo";

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
    LoadingListScreen: {
      screen: LoadingListScreen,
      navigationOptions: { headerTitle: 'Loading More + Refresh' },
    },
    SetStatePitfallScreen: {
      screen: SetStatePitfallScreen,
      navigationOptions: { headerTitle: 'setState() pitfall' },
    },
    ChallengeOneScreen: {
      screen: ChallengeOneScreen,
      navigationOptions: {headerTitle: 'Challenge One'}
    },
    ActionSheetDemo: {
      screen: ActionSheetDemo,
      navigationOptions: {headerTitle: 'Custom ActionSheet'}
    }
  },
  {
    headerMode: 'screen',
  },
)

export default HomeStack