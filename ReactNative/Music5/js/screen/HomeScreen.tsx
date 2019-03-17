import React, {Component} from 'react'
import {createBottomTabNavigator} from "react-navigation";
import RecommedScreen from "./RecommedScreen";
import SettingScreen from "./SettingScreen";
import {Button, Image, StyleSheet, View} from "react-native";

const HomeScreen = createBottomTabNavigator(
  {
    Recommend: RecommedScreen,
    Setting: SettingScreen
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconRecommend = require('../../assets/icon_music.png');
        let iconSetting = require('../../assets/icon_settings.png');
        let icon = routeName === 'Recommend' ? iconRecommend : iconSetting;
        let tint = focused ? 'tomato' : 'gray';
        // @ts-ignore
        return <Image source={icon} tintColor={tint} style={{width: 25, height: 25}}/>
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      },
    })
  }
)


export default HomeScreen
