import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import AppStateScreen from '../screen/AppStateScreen'
import ReduxSagaScreen from '../screen/ReduxSagaScreen'
import AsyncStorageScreen from '../screen/AsyncStorageScreen'
import UiLoginScreen from '../screen/UiLoginScreen'

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
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack