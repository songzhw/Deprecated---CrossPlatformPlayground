import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

class Pulse_Class_Screen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image source={require("../../assets/icon_red_heart.png")} style={styles.heart} resizeMode="contain"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  heart: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 100
  }
});

export default Pulse_Class_Screen;