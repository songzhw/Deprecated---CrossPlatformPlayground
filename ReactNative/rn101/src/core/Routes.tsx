import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import { commonStyles } from "./theme/CommonStyle";
import { HomeScreen } from "../HomeScreen";

import { PassB1Screen } from "../biz/navigators/start_activity_for_result/PassB1Screen";
import { PassA1Screen } from "../biz/navigators/start_activity_for_result/PassA1Screen";
import { ActionSheetDemo } from "../view/action_sheet/ActionSheetDemo";
import { WebViewDemo } from "../rn_tutorial/WebViewDemo";
import { FlexLayoutDemo1 } from "../rn_tutorial/layout/FlexLayoutDemo1";
import { AnimatedComponentDemo } from "../rn_tutorial/anim/AnimatedComponentDemo";
import { AnimatedListDemo } from "../rn_tutorial/anim/AnimatedListDemo";
import { StaticServerDemo } from "../lib3rd/StaticServerDemo";
import { FetchBlobDemo } from "../lib3rd/FetchBlobDemo";
import { ZipArchiveDemo } from "../lib3rd/ZipArchiveDemo";
import { AnimatedListDemo2 } from "../rn_tutorial/anim/AnimatedListDemo2";
import { screenFade } from "./screenFade";
import { TimerIssue } from "../biz/timer/TimerIssue";

export const Routes = createStackNavigator(
  {
    HomeScreen,
    PassA1Screen, PassB1Screen, TimerIssue,
    ActionSheetDemo,
    WebViewDemo, FlexLayoutDemo1,
    AnimatedComponentDemo, AnimatedListDemo,AnimatedListDemo2,
    StaticServerDemo, FetchBlobDemo, ZipArchiveDemo
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
    // ,transitionConfig: screenFade
  }
);
