import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { createSelector } from "reselect";

class Component2 extends Component {

  // shouldComponentUpdate() will help us to avoid unnecessary render

  render() {
    console.log(`szw 组件2: render(${this.props.count})`);
    let text = `Component2: ${this.props.count}`
    return (
      <View style={styles.root}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: 240,
    height: 150,
    backgroundColor: "#66bb6a"
  }
});

const getCount2 = (state) => state.playgroundReducers.Component2Reducer.count;
const getCountResult2 = (count) => ({ count: count });
const selector = createSelector([getCount2], getCountResult2);

const mapStateToProps = (state) => {
  console.log(`szw 组件2 : mapStateToProps()`);
  return {
    count: selector(state)
  };
};

export default connect(mapStateToProps)(Component2);