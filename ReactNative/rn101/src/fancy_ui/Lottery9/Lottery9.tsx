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
        <Text style={styles.item}>001</Text>
        <Text style={styles.item}>002</Text>
        <Text style={styles.item}>003</Text>
        <Text style={styles.item}>004</Text>
        <Text style={styles.item}>005</Text>
        <Text style={styles.item}>006</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  item: {
    width: 90,
    height: 100
  }
});

export default Lottery9;