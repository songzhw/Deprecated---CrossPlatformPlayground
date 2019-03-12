import React, { Component } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class FlipCardScreen extends Component {
  animValue = new Animated.Value(0);
  abool = true;

  render() {
    let animStyles = [];
    animStyles.push({
      rotateY: this.animValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"]
      })
    });

    return (
      <View style={styles.root}>
        <Button title="do anim" onPress={() => this.startAnim()}/>
        <Animated.View style={{ transform: animStyles }}>
          <Text style={styles.card}>Text</Text>
        </Animated.View>
      </View>
    );
  }

  startAnim = () => {
    let endValue = 1;
    if (this.abool) {
      endValue = 1;
    } else {
      endValue = 0;
    }
    this.abool = !this.abool;

    this.toggle(endValue);
  };

  toggle = (endValue) => {
    Animated.timing(
      this.animValue,
      { toValue: endValue, duration: 500 }
    ).start();
  };
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
