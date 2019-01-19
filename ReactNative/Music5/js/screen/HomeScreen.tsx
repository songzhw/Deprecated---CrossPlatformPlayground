import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import RecommedScreen from "./RecommedScreen";
import SettingScreen from "./SettingScreen";

const HomeScreen = createBottomTabNavigator({
  Recommend: RecommedScreen,
  Setting: SettingScreen
})

export default createAppContainer(HomeScreen)
