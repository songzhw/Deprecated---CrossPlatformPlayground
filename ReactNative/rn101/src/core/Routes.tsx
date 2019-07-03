import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
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
import { StaggerAnimationScreen } from "../rn_tutorial/anim/StaggerAnimationScreen";
import { GestureAnimScreen } from "../rn_tutorial/anim/GestureAnimScreen";
import { ModalExample } from "../rn_tutorial/views/ModalExample";
import { AnimatedListDemo3 } from "../rn_tutorial/anim/AnimatedListDemo3";
import { ScrubberDemo } from "../view/scrubber/ScrubberDemo";
import { Skin1 } from "../biz/switch_skin/Skin1";
import { Skin2 } from "../biz/switch_skin/Skin2";
import { SplashScreen } from "../biz/splash/SplashScreen";

const AppNavigator = createStackNavigator(
  {
    SplashScreen,
    HomeScreen,
    PassA1Screen, PassB1Screen, TimerIssue, Skin1, Skin2,
    ActionSheetDemo, ScrubberDemo,
    WebViewDemo, FlexLayoutDemo1, ModalExample,
    AnimatedComponentDemo, AnimatedListDemo, AnimatedListDemo2, AnimatedListDemo3,
    StaggerAnimationScreen, GestureAnimScreen,
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

const WithSplashNavigator = createSwitchNavigator({
  splash: SplashScreen,
  app: AppNavigator
});

export const Router = createAppContainer(AppNavigator);
