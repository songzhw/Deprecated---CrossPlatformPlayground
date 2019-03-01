import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class FlexThreePropsScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>FlexThreePropsScreen Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default FlexThreePropsScreen;