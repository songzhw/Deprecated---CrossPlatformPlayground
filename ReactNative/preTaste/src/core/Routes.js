import React from "react";
import { Button, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import Pulse_Class_Screen from "../screen/Pulse_Class_Screen";
import Pulse_Func_Screen from "../screen/Pulse_Func_Screen";
import HomeScreen from "../screen/HomeScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen, Pulse_Class_Screen, Pulse_Func_Screen
  },
  {
    headerMode: "screen"
  }
);
export default HomeStack;