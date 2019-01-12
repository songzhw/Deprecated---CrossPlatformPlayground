import React from "react";
import {Button} from 'react-native'

import {createStackNavigator, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import UiesScreen from "../screen/UiesScreen";
import FirstScreen from "../screen/FirstScreen";
import LoginScreen from "../screen/LoginScreen";
import ScheduleScreen from "../screen/ScheduleScreen";

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
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {headerTitle: 'Dashboard'},
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {headerTitle: 'Log In'},
    },
    ScheduleScreen: {
      screen: ScheduleScreen,
      navigationOptions: {headerTitle: 'Sessions In Two Days'},
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack