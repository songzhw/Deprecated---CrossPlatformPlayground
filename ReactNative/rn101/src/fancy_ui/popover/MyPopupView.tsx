import React from "react";
import { View, StyleSheet, TouchableOpacity, ViewProps, Dimensions, LayoutRectangle } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface IProps {
  isVisible: boolean;
  fromReact: LayoutRectangle;
  onClose: () => void;
}

export class MyPopupView extends React.Component<IProps> {
  state = {};

  render() {
    const { fromReact } = this.props;
    console.log(`szw View : rect = `, fromReact);
    return (
      <View style={styles.translucentBg}>
        <TouchableOpacity onPress={this.props.onClose}>
          <View style={{ position: "absolute", left: fromReact.x, top: fromReact.y }}>
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
  }
});
