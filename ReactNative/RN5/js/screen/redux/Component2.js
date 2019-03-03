import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  console.log(`szw 组件2 : mapStateToProps()`);
  let value = state.playgroundReducers.Component2Reducer;
  return {
    count: value.count
  };
};

export default connect(mapStateToProps)(Component2);