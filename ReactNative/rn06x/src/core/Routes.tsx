import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { createAppContainer, createStackNavigator, createSwitchNavigator, Header } from "react-navigation";
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
import { ArtDemo } from "../rn_tutorial/art/ArtDemo";
import ArtAnimView from "../rn_tutorial/art/ArtAnimView";
import { DebounceDemo } from "../performance/DebounceDemo";
import { LambdaInJsx } from "../rn_tutorial/performance/LambdaInJsx";
import { ListDetailAnimDemo } from "../fancy_ui/hero_anim/ListDetailAnimDemo";
import { ListDetailAnimDemo2 } from "../fancy_ui/hero_anim/ListDetailAnimDemo2";
import { SimpleHeroAnimDemo } from "../fancy_ui/hero_anim/SimpleHeroAnimDemo";
import { Lottery9Demo } from "../fancy_ui/Lottery9/Lottery9Demo";
import AppStateDemo from "../biz/bg/AppStateDemo";
import SagaInBgDemo from "../biz/bg/SagaInBgDemo";
import NativeBridgeInBgDemo from "../biz/bg/NativeBridgeInBgDemo";
import SetIntervalInBgDemo from "../biz/bg/SetIntervalInBgDemo";
import PageB from "../biz/lifecycle/PageB";
import LifecycleScreen from "../biz/lifecycle/LifecycleScreen";
import { LinearGradientScreen } from "../lib3rd/LinearGradientScreen";
import { ThirdPartyPopOverDemo } from "../fancy_ui/popover/ThirdPartyPopOverDemo";
import { MyPopupScreen } from "../fancy_ui/popover/MyPopupScreen";
import { LayoutAnimationDemo } from "../rn_tutorial/anim/LayoutAnimationDemo";
import { DynamicStyleRulesDemo } from "../rn_tutorial/theme/DynamicStyleRulsDemo";
import { DynamicAppThemeDemo } from "../rn_tutorial/theme/apptheme/DynamicAppThemeDemo";
import { DraggableCircleDemo } from "../fancy_ui/drag_n_drop/DraggableCircleDemo";
import { MediaCssDemo } from "../rn_tutorial/style/MediaCssDemo";
import { NetInfoDemo } from "../lib3rd/NetInfoDemo";
import { NumberAnimationDemo } from "../fancy_ui/num_anim/NumberAnimationDemo";

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    SetIntervalInBgDemo, AppStateDemo, SagaInBgDemo, NativeBridgeInBgDemo,
    LifecycleScreen, PageB, MediaCssDemo,
    PassA1Screen, PassB1Screen, TimerIssue, Skin1, Skin2,
    ActionSheetDemo, ScrubberDemo, MyPopupScreen,
    WebViewDemo, FlexLayoutDemo1, ModalExample, ArtDemo, ArtAnimView,
    DynamicStyleRulesDemo, DynamicAppThemeDemo,
    DebounceDemo, LambdaInJsx,
    SimpleHeroAnimDemo, Lottery9Demo, DraggableCircleDemo, NumberAnimationDemo,
    AnimatedComponentDemo, AnimatedListDemo, AnimatedListDemo2, AnimatedListDemo3, LayoutAnimationDemo,
    StaggerAnimationScreen, GestureAnimScreen,
    StaticServerDemo, FetchBlobDemo, ZipArchiveDemo, LinearGradientScreen, ThirdPartyPopOverDemo,
    NetInfoDemo
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
const commonStyles = StyleSheet.create({
  //because I find the size of "headerLeft" is a little more than header bar's heightZ
  imgBack: {
    width: Header.HEIGHT,
    height: Header.HEIGHT
  }
});

const WithSplashNavigator = createSwitchNavigator({
  splash: SplashScreen,
  app: AppNavigator
});

export const Router = createAppContainer(WithSplashNavigator);
