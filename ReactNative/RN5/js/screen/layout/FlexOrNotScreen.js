import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class FlexOrNotScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.redbox}/>
        <Text style={styles.title}>FlexOrNotScreen Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    margin: 20,
    backgroundColor: "#e67e22",
    borderRadius: 10,
  },
  redbox: {
    backgroundColor: '#d35700',
    width: 120,
    height: 50
  },
  title: {
    fontSize: 24
  }
});

export default FlexOrNotScreen;