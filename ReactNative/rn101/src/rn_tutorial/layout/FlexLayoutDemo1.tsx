import React, { Component } from "react";
import { View } from "react-native";

interface IProps {
}

export class FlexLayoutDemo1 extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "pink" }}/>
        <View style={{ flex: 3, backgroundColor: "blue" }}/>
      </View>
    );
  }
}

