import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import AppStateScreen from '../screen/AppStateScreen'
import ReduxSagaScreen from '../screen/ReduxSagaScreen'
import AsyncStorageScreen from '../screen/AsyncStorageScreen'

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
    }
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack