import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import RecommedScreen from "./RecommedScreen";
import SettingScreen from "./SettingScreen";
import { Button, Image, StyleSheet, View } from "react-native";

const HomeScreen = createBottomTabNavigator(
  {
    Recommend: RecommedScreen,
    Setting: SettingScreen
  },
  {}
);


export default HomeScreen;
