import React from "react";
import {View, StyleSheet, Text, ViewProps, TouchableOpacity, StyleProp, ViewStyle} from "react-native";

interface IProps extends ViewProps {
  text: string,
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}

export class Button extends React.Component<IProps> {

  render() {
    return (
      <TouchableOpacity style={[this.props.style, styles.btn]} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#304ffe"
  },
  text: {
    textAlign: 'center',
    color: "white",
    fontSize: 18,
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: [{translateX: "-50%"}]
  }
});

