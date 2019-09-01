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
      <TouchableOpacity onPress={this.props.onClose}>
        <View style={styles.translucentBg}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  translucentBg: {
    position: "absolute",
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#0000007e"
  }
});
