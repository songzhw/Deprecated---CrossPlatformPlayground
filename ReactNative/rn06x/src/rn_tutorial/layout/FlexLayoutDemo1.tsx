import React, { Component } from "react";
import { View } from "react-native";

interface IProps {
}

export class FlexLayoutDemo1 extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "pink"
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }}/>
        <View style={{ width: 50, height: 50, backgroundColor: "black" }}/>
        <View style={{ width: 50, height: 50, backgroundColor: "green" }}/>
      </View>
    );
  }
}

