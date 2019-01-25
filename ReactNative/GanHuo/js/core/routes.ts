import {createStackNavigator, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import {Image} from "react-native";
import React from "react";

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: "Today's Recommendation"},
    },
  },
  {
    headerMode: 'screen',
  }
)

export default HomeStack