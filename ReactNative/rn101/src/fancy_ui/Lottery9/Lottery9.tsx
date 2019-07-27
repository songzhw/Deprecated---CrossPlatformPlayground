import React from "react";
import { View, Text, Image, StyleSheet, ViewProps } from "react-native";

// 690 * 586 =>

interface IProps extends ViewProps {
}

class Lottery9 extends React.Component<IProps> {
  state = {};

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Lottery9;