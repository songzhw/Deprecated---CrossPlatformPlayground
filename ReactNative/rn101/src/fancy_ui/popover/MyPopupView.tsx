import React from "react";
import { View, StyleSheet, TouchableOpacity, ViewProps } from "react-native";

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
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: "#000000aa"
  }
});
