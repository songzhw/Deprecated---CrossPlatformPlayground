import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import AppStateScreen from '../screen/AppStateScreen'
import ReduxSagaScreen from '../screen/ReduxSagaScreen'
import AsyncStorageScreen from '../screen/AsyncStorageScreen'
import UiLoginScreen from '../screen/UiLoginScreen'
import UiScheduleScreen from '../screen/UiScheduleScreen'
import ScheduleDay1 from '../screen/ScheduleDay1'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home'}
    },
    App_State: {
      screen: AppStateScreen,
      navigationOptions: { headerTitle: 'App-State Demo'}
    },
    Redux_Saga: {
      screen: ReduxSagaScreen,
      navigationOptions: { headerTitle: 'Redux-Saga Demo'}
    },
    AsyncStorageScreen: {
      screen: AsyncStorageScreen,
      navigationOptions: {headerTitle: 'Async Storage Demo'}
    },
    UiLoginScreen: {
      screen: UiLoginScreen,
      navigationOptions: {headerTitle: 'Login Screen'}
    },
    //TODO revert it to back to UiSchedulerScreen here
    UiScheduleScreen: {
      screen: ScheduleDay1,
      navigationOptions: {headerTitle: 'Schedule Screen'}
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack