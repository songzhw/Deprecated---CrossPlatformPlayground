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
      headerStyle: {backgroundColor: '#1b5e20'},
      headerTitleStyle: {color: 'white'},
      headerBackImage: ( <Image source={require('../../assets/icon_menu.png')} style={{width: 40, height: 40}}/> )
    },
  }
)

export default HomeStack