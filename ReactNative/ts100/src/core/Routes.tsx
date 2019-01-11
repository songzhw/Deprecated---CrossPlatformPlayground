import React from "react";
import {Button} from 'react-native'

import {createStackNavigator, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import UiesScreen from "../screen/UiesScreen";

export interface ScreenProps {
  navigation: NavigationScreenProp<any, any>
}

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: 'Home'},
    },
    UiesScreen: {
      screen: UiesScreen,
      navigationOptions: {headerTitle: 'Ui For Test'},
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack