import React from "react";
import { Button, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation";
import { commonStyles } from "./theme/CommonStyles";
import HomeScreen from "../screen/HomeScreen";
import AxiosScreen from "../screen/third_party/AxiosScreen";
import ContextDemo from "../screen/rn_tutorial/context/ContextDemo";
import GestureAnimScreen from "../screen/rn_tutorial/GestureAnimScreen";
import SetStatePitfallScreen from "../screen/rn_tutorial/SetStatePitfallScreen";
import DynamicTitleScreen from "../screen/rn_tutorial/DynamicTitleScreen";
import ActionSheetDemo from "../screen/custom_view/ActionSheetDemo";
import MyDrawerDemo from "../screen/custom_view/MyDrawerDemo";
import F8LoginScreen from "../screen/f8/F8LoginScreen";
import F8ScheduleScreen from "../screen/f8/F8ScheduleScreen";
import F8SessionDetailScreen from "../screen/f8/F8SessionDetailScreen";
import LoadingListScreen from "../screen/custom_view/LoadingListScreen";
import KoFirstScreen from "../screen/layout/KoFirstScreen";
import FlexOrNotScreen from "../screen/layout/FlexOrNotScreen";
import BridgeScrollViewScreen from "../screen/bridge_view/BridgeScrollViewScreen";
import FindNodeHandlerScreen from "../screen/rn_tutorial/ui/FindNodeHandlerScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen, AxiosScreen, ContextDemo, GestureAnimScreen, SetStatePitfallScreen,
    ActionSheetDemo, MyDrawerDemo, LoadingListScreen, KoFirstScreen,
    F8LoginScreen, F8ScheduleScreen, F8SessionDetailScreen,
    FlexOrNotScreen,
    BridgeScrollViewScreen,
    FindNodeHandlerScreen,
    DynamicTitleScreen: {
      screen: DynamicTitleScreen,
      navigationOptions: (props) => {
        const { navigation } = props;
        const { params } = navigation.state;
        return {
          title: params.title ? params.title : "Static Title",
          headerRight: (
            <Button
              title={params.mode === "edit" ? "save" : "edit"}
              onPress={() => navigation.setParams({ mode: params.mode === "edit" ? "" : "edit" })}
            />
          ),
        };
      },
    },
  },
  {
    headerMode: "screen",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#1b5e20" },
      headerTitleStyle: { color: "white" },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/icon_back.png")} resizeMode='center' style={commonStyles.imgBack}/>
        </TouchableOpacity>
      ),
    }),
  },
);

export default HomeStack;
