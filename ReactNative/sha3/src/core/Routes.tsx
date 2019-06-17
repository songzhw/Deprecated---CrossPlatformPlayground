import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { NavigationBar } from "beeshell";
import { GameScreen } from "../ui/GameScreen";
import { HomeScreen } from "../ui/HomeScreen";

const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
const RouteList = createStackNavigator({
  HomeScreen, GameScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#1b5e20"
    },
    headerTintColor: "#fff",
    headerTitleStyle:{
      alignSelf:'center',
      textAlign: 'center',
      flex:1,
    },
    headerTitle: "Sha3"
  }
});

export const Routes = createAppContainer(RouteList);