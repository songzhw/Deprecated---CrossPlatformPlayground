import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  Dimensions,
  LayoutRectangle,
  LayoutChangeEvent
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const LEAST_MARGIN = 10; // 加个最小margin, 让更美观些

interface IBaseProps {
  isVisible: boolean;
  onClose: () => void;
}

interface IFromReactProps extends IBaseProps {
  fromRect: LayoutRectangle;
}

interface IFromViewProps extends IBaseProps {
  fromView: Component
}

type IProps = IFromReactProps | IFromViewProps

export class MyPopupView extends React.Component<IProps> {
  state = {
    left: 0, top: 0
  };

  onLayoutSelf = (ev: LayoutChangeEvent) => {
    // @ts-ignore
    let fromRect = this.props.fromRect;
    if (!fromRect) {
      fromRect = { x: 0, y: 0, width: 100, height: 100 };
    }
    const { width, height } = ev.nativeEvent.layout;
    console.log(`szw onLayout, `, ev.nativeEvent.layout);
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
