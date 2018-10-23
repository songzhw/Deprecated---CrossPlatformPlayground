import { StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { //不加这个, Home页最上面, statusBar下面就会有一个白条
        header: () => null,
      },
    },

    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },


  // {
  //   mode: 'modal',
  //   cardStyle: {
  //     paddingTop: StatusBar.currentHeight,
  //   },
  // },


)