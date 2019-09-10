import React, { Component } from "react";
import {
  View, StyleSheet, TouchableOpacity, ViewProps, Dimensions, LayoutRectangle,
  LayoutChangeEvent, NativeModules, UIManager, findNodeHandle
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LEAST_MARGIN = 10; // 加个最小margin, 让更美观些

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  fromView?: Component
  fromRect?: LayoutRectangle;
}

export class MyPopupView extends React.Component<IProps> {
  state = {
    left: 0, top: 0
  };

  onLayoutSelf = (ev: LayoutChangeEvent) => {
    console.log(`szw ev1 : `, ev.nativeEvent);
    let fromRect = this.props.fromRect;
    const fromView = this.props.fromView;
    if (!fromRect) {
      fromRect = { x: 0, y: 0, width: 100, height: 100 };
      // @ts-ignore
      UIManager.measure(findNodeHandle(fromView), (x, y, width, height, pageX, pageY) => {
        fromRect = { x: pageX, y: pageY, width, height };
        console.log(`szw View.fromView = `, fromRect);
        this.measureFromViewAndSelf(ev, fromRect);
      });
    } else {
      this.measureFromViewAndSelf(ev, fromRect);
    }

  };

  measureFromViewAndSelf = (ev: LayoutChangeEvent, fromRect: LayoutRectangle) => {
    console.log(`szw ev2 : `, ev.nativeEvent);
    if (!ev || !ev.nativeEvent) {

      return;
    }
    const { width, height } = ev.nativeEvent.layout;
    const fromCenterX = fromRect.x + fromRect.width / 2;
    const fromCenterY = fromRect.y + fromRect.height / 2;
    const right = fromCenterX + width / 2;
    let left = fromCenterX - width / 2;
    if (left < 0) {
      left = LEAST_MARGIN;
    } else if (right > screenWidth) {
      left = screenWidth - width - LEAST_MARGIN;
    }
    const top = fromCenterY - height / 2;
    console.log(`szw afterMeasure: left, top = `, left, top);

    this.setState({ left, top });
  };

  render() {
    const { left, top } = this.state;

    return (
      <View style={styles.translucentBg}>
        <TouchableOpacity onPress={this.props.onClose}>
          <View style={[styles.childrenContainer, { left, top }]}
                onLayout={this.onLayoutSelf}>
            {this.props.children}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  translucentBg: {
    position: "absolute",
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#0000007e"
  },
  childrenContainer: {
    position: "absolute",
    backgroundColor: "white"
  }
});
