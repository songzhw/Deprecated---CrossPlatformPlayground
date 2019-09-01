import React from "react";
import { View, StyleSheet, TouchableOpacity, ViewProps, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

export class MyPopupView extends React.Component<IProps> {
  state = {};

  render() {
    return (
      <TouchableOpacity style={styles.translucentBg} onPress={this.props.onClose}>
        <View />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  translucentBg: {
    position: "absolute",
    width: screenWidth,
    height: screenHeight,
    top:0, left:0, right:0, bottom:0,
  }
});
