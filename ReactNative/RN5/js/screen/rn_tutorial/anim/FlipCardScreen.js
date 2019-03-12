import React, { Component } from "react";
import { View, StyleSheet, Text, Animated, Button } from "react-native";
import { connect } from "react-redux";

class FlipCardScreen extends Component {
  animValue = new Animated.Value(0);

  render() {
    return (
      <View style={styles.root}>
        <Button title="do anim" onPress={() => {
        }}/>
        <View style={styles.card}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  card: {
    width: 200,
    height: 85,
    backgroundColor: "#2E7D32",
    borderRadius: 15,
    marginTop: 30,
    marginLeft: 100
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(FlipCardScreen);
