import {createStackNavigator, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import {Image} from "react-native";
import React from "react";

const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerTitle: "Today's Recommendation",
      headerStyle: {backgroundColor: '#1b5e20'},
      headerTitleStyle: {color: 'white'}
    },
  }
)

export default HomeStack