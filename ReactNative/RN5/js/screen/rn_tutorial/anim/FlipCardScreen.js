import React, { Component } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class FlipCardScreen extends Component {
  animValue = new Animated.Value(0);

  render() {
    return (
      <View style={styles.root}>
        <Button title="do anim" onPress={() => console.log(`szw click`)}/>
        <Animated.View>
          <Text style={styles.card}>Text</Text>
        </Animated.View>
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
    marginLeft: 100,
    color: "white",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center"
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(FlipCardScreen);
