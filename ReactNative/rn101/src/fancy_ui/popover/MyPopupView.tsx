import React from "react";
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

interface IProps {
  isVisible: boolean;
  fromRect: LayoutRectangle;
  onClose: () => void;
}

export class MyPopupView extends React.Component<IProps> {
  state = {
    x: 0, y: 0, width: 0, height: 0
  };

  onLayoutSelf = (ev: LayoutChangeEvent) => {
    const { x, y, width, height } = ev.nativeEvent.layout;
    this.setState({ x, y, width, height });
  };

  render() {
    const { fromRect } = this.props;
    const { x, y, width, height } = this.state;
    const fromCenterX = fromRect.x + fromRect.width / 2;
    const fromCenterY = fromRect.y + fromRect.height / 2;
    const left = fromCenterX + width / 2;
    const top = fromCenterY + height / 2;

    return (
      <View style={styles.translucentBg}>
        <TouchableOpacity onPress={this.props.onClose}>
          <View style={{ position: "absolute", left, top }}
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
  }
});
