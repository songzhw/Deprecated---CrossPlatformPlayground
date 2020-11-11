import React, { useCallback, useState } from "react";
import { View, ViewProps, Text, StyleSheet, useWindowDimensions, Animated, Dimensions, Image } from "react-native";
import { ImageButton } from "../../../ui/button/ImageButton";
import Svg, { Circle } from "react-native-svg";
import { RippleBg } from "./RippleBg";
import { VpIndicator } from "./VpIndicator";

const { width, height } = Dimensions.get("window");
const cy = height - 50;
const middleX = width / 2;
const maxSize = width > height ? width : height;
const data = [
  { color: "#3f51b5", next: "#e91e63", cx: middleX - 50, href: require("../../../../res/img/ic_bank.png") },
  { color: "#e91e63", next: "#4caf50", cx: middleX - 17, href: require("../../../../res/img/ic_android.png") },
  { color: "#4caf50", next: "#a156c9", cx: middleX + 17, href: require("../../../../res/img/ic_bug.png") },
  { color: "#a156c9", next: "#3f51b5", cx: middleX + 50, href: require("../../../../res/img/ic_security.png") }
];

export class SvgAnim09D_CC extends React.Component {
  state = { index: 0, r: new Animated.Value(0) };

  leftPressed = () => {
  };

  rightPressed = () => {
    Animated.timing(this.state.r, {
      toValue: maxSize,
      duration: 250,
      useNativeDriver: true
    })
      .start(() => {
        const newIndex = (this.state.index + 1) % data.length;
        this.setState({
          index: newIndex,
          r: new Animated.Value(10)
        });
      });
  };

  render() {
    const item = data[this.state.index];
    const nextItem = data[(this.state.index + 1) % data.length];
    return (
      <View style={styles.root}>
        <RippleBg color={item.color} nextColor={item.next} r={this.state.r} cx={nextItem.cx} cy={cy}/>
        <VpIndicator data={data} cy={cy} r={10}/>

        <View style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, justifyContent: "center", alignItems: "center" }}>
          <Image source={item.href}/>
        </View>

        <ImageButton size={60} source={require("../../../../res/img/ic_left.png")} onPressed={this.leftPressed} style={{ marginLeft: 20 }}/>
        <ImageButton size={60} source={require("../../../../res/img/ic_right.png")} onPressed={this.rightPressed} style={{ marginRight: 20 }}/>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  root: {
    flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
  }
});
