import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import { commonStyles } from "./theme/CommonStyles";
import SecondScreen from "../screen/SecondScreen";
import FirstScreen from "../screen/FirstScreen";
import ContextDemo from "../screen/contextdemo/ContextDemo";


const HomeStack = createStackNavigator(
  {
    FirstScreen, SecondScreen, ContextDemo
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
      )
    })
  }
);

export default HomeStack;