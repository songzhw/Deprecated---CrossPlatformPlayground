import React from "react";
import { View, StyleSheet, TouchableOpacity, ViewProps } from "react-native";

interface IProps extends ViewProps{
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
    flex: 1,
    backgroundColor: "#000000aa"
  }
});
