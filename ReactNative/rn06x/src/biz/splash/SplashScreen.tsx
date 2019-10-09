import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { HomeScreen } from "../../HomeScreen";

type IProps = NavigationScreenProps

export class SplashScreen extends Component<IProps> {
  // static navigationOptions = () => {
  //   return {
  //     title: "Splash",
  //     headerLeft: <View/>
  //   };
  // };

  componentDidMount() {
    setTimeout(
      () => this.props.navigation.navigate("app"),
      10);
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Splash Screen</Text>
      </SafeAreaView>
    );
  }
}

