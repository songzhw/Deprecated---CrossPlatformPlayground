import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import { commonStyles } from "./theme/CommonStyle";
import { HomeScreen } from "../HomeScreen";

import { PassB1Screen } from "../biz/navigators/start_activity_for_result/PassB1Screen";
import { PassA1Screen } from "../biz/navigators/start_activity_for_result/PassA1Screen";
import { ActionSheetDemo } from "../view/action_sheet/ActionSheetDemo";


export const Routes = createStackNavigator(
  {
    HomeScreen,
    PassA1Screen, PassB1Screen,
    ActionSheetDemo
  },
  {
    headerMode: "screen",
    // react-navigation 2.x中是用navigationOptions; 3.x中要用defaultNavigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: { color: "white" },
      headerStyle: { backgroundColor: "#1b5e20" },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../res/images/icon_back.png")} resizeMode='center' style={commonStyles.imgBack}/>
        </TouchableOpacity>
      )
    })
  }
);
