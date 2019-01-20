import React from 'react'
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import RecommedScreen from "./RecommedScreen";
import SettingScreen from "./SettingScreen";
import {Image} from "react-native";

// @ts-ignore
const HomeScreen = createBottomTabNavigator(
  {
    Recommend: RecommedScreen,
    Setting: SettingScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      },
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconRecommend = require('../../assets/icon_music.png');
        let iconSetting = require('../../assets/icon_settings.png');
        let icon = routeName === 'Recommend' ? iconRecommend : iconSetting;
        return <Image source={icon} style={{width: 25, height: 25}}/>
      },
    })
  }
)

export default createAppContainer(HomeScreen)
