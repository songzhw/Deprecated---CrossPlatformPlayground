import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class FlexOrNotScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.redbox}/>
        <Text>FlexOrNotScreen Screen</Text>
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
  },

});

export default FlexOrNotScreen;