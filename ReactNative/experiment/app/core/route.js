import {StatusBar} from 'react-native'
import {createStackNavigator} from 'react-navigation'

import HomeScreen from '../screen/HomeScreen'
import AppStateScreen from '../screen/AppStateScreen'
import ReduxSagaScreen from '../screen/ReduxSagaScreen'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerTitle: 'Home'}
    },
    App_State: {
      screen: AppStateScreen,
      navigationOptions: { headerTitle: 'App-State'}
    },
    Redux_Saga: {
      screen: ReduxSagaScreen,
      navigationOptions: { headerTitle: 'Redux-Saga'}
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack