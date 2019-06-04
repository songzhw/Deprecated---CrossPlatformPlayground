import React, { Component } from "react";
import { View } from "react-native";

interface IProps {
}

export class FlexLayoutDemo1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "pink" }}>
        <View style={{ width: 60, height: 60, backgroundColor: "powderblue" }}/>
        <View style={{ width: 60, height: 60, backgroundColor: "skyblue" }}/>
        <View style={{ width: 60, height: 60, backgroundColor: "dodgerblue" }}/>
      </View>
    );
  }
}
