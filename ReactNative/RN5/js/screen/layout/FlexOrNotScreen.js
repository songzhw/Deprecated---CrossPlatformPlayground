import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class FlexOrNotScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.redbox}/>
        <Text style={styles.outtext}>
          <Text style={styles.title}>FlexOrNotScreen Screen</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    margin: 20,
    backgroundColor: "#e67e22",
    borderRadius: 10
  },
  redbox: {
    backgroundColor: "#d35700",
    width: 120,
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  outtext: {
    fontSize: 24,
    position: "absolute",
    backgroundColor: "transparent"
  },
  title: {
    fontWeight: "bold"
  }
});

export default FlexOrNotScreen;