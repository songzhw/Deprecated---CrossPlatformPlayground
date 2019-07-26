import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableHighlight, Animated } from "react-native";

const picture = require("../../../res/images/icon_red_heart.png");

export class SimpleHeroAnimDemo extends Component {
  state = {
    isDetail: false,
    width: new Animated.Value(134),
    height: new Animated.Value(134),
    left: new Animated.Value(0),
    top: new Animated.Value(0)
  };
  iv1: Image | null = null;


  openDetail = () => {
    this.iv1!.measure((x, y, width, height, pageX, pageY) => {
      // 见下面, 可见x, y无用 ;  pageX, pageY是(x,y)位置 ;  width, heigth就是宽高了
      console.log("szw ", x, y, width, height, pageX, pageY); //=>  0, 0, 134, 125, 100, 256

      this.setState({ isDetail: true }, () => {
        this.state.left.setValue(pageX);
        this.state.top.setValue(pageY);
        Animated.parallel([
          Animated.timing(this.state.width, { toValue: 320, duration: 3000 }),
          Animated.timing(this.state.height, { toValue: 300, duration: 3000 }),
          Animated.timing(this.state.left, { toValue: 0, duration: 3000 }),
          Animated.timing(this.state.top, { toValue: 0, duration: 3000 })
        ]).start();
      });
    });
  };

  closeDetail = () => {
    this.setState({ isDetail: false });
    this.state.width.setValue(134);
    this.state.height.setValue(125);
    this.state.left.setValue(100);
    // TODO this is temporary
    this.state.top.setValue(256);
  };

  render() {
    const imageDetail = this.state.isDetail ? picture : null;
    const modalClickable: "auto" | "none" = this.state.isDetail ? "auto" : "none";
    const detailText = this.state.isDetail ? "DetailText" : null;
    const bg = this.state.isDetail ? "#ccc" : "#0000";

    return (
      <View style={styles.container}>
        <View style={styles.empty}/>
        <Image ref={view => this.iv1 = view} style={styles.iv1} source={picture}/>
        <Text onPress={this.openDetail}> List Screen </Text>

        <View style={[StyleSheet.absoluteFill]} pointerEvents={modalClickable}>
          <Animated.Image source={imageDetail} style={[styles.iv2, {
            left: this.state.left,
            top: this.state.top,
            width: this.state.width,
            height: this.state.height
          }]}/>
          <Text onPress={this.closeDetail}> {detailText} </Text>
        </View>

      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: { flex: 1 },
  empty: {
    height: 200
  },
  iv1: {
    width: 134,
    height: 125,
    left: 100
  },
  iv2: {
    margin: 20
  }
});