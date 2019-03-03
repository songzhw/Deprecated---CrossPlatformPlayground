import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class Component1 extends Component {
  render() {
    console.log(`szw 组件1: render(${this.props.count})`);
    return (
      <View style={styles.root}>
        <Text>Component1: {this.props.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: 240,
    height: 150,
    backgroundColor: "red"
  }
});

const mapStateToProps = (state) => {
  console.log(`szw 组件1 : mapStateToProps()`);
  let value = state.playgroundReducers.Component1Reducer;
  return {
    count: value
  };
};

export default connect(mapStateToProps)(Component1);