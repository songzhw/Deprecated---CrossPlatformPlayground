import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { createSelector } from "reselect";

class Component1 extends Component {

  // shouldComponentUpdate() will help us to avoid unnecessary render

  render() {
    console.log(`szw 组件1: render(${this.props.count})`);
    let text = `Component1: ${this.props.count}`;
    return (
      <View style={styles.root}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: 240,
    height: 150,
    backgroundColor: "#1e88e5"
  }
});

const getCount1 = (state) => state.playgroundReducers.Component1Reducer.count;
const getCountResult1 = (count) => ({ count: count });
const selector = createSelector([getCount1], getCountResult1);

const mapStateToProps = (state) => {
  console.log(`szw 组件1 : mapStateToProps()`);
  return {
    count: selector(state)
  };
};

export default connect(mapStateToProps)(Component1);