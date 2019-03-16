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
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconRecommend = require("../../assets/icon_music.png");
        let iconSetting = require("../../assets/icon_settings.png");
        let icon = routeName === "Recommend" ? iconRecommend : iconSetting;
        let tint = focused ? "tomato" : "gray";
        return <Image source={icon} tintColor={tint} style={{ width: 25, height: 25 }}/>;
      },
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    })
  }
);

class HomeButton extends Component {
  render() {
    return (
      <View style={styles.aButton}>
        <Button title={this.props.title} onPress={this.props.onPress}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  aButton: {
    fontSize: 30,
    color: "red",
    margin: 4
  }
});

export default HomeScreen;
