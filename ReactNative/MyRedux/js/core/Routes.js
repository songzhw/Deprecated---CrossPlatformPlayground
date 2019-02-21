import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import SecondScreen from "../screen/SecondScreen";
import FirstScreen from "../screen/FirstScreen";
import { commonStyles } from "./theme/CommonStyles";


const HomeStack = createStackNavigator(
  {
    FirstScreen, SecondScreen
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