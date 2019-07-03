import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";

type IProps = NavigationScreenProps

export class SplashScreen extends Component<IProps> {

  componentDidMount() {
    setTimeout(
      () => this.props.navigation.navigate("HomeScreen"),
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
